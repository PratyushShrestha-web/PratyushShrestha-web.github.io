import * as THREE from 'three';
import { CONFIG } from './config.js';

let scene, camera, renderer, particles, clock;
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };

export function initScene() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  const { particleCount, particleSize, rotationSpeed } = CONFIG.scene;

  // Scene
  scene = new THREE.Scene();
  clock = new THREE.Clock();

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Particles
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  const accentColor = new THREE.Color('#c8ff00');
  const dimColor = new THREE.Color('#2a2a2a');

  for (let i = 0; i < particleCount; i++) {
    // Distribute in sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.2 + Math.random() * 1.6;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    // Mostly dim, few bright accent
    const isAccent = Math.random() < 0.04;
    const c = isAccent ? accentColor : dimColor;
    const brightness = isAccent ? 1 : 0.3 + Math.random() * 0.3;

    colors[i * 3] = c.r * brightness;
    colors[i * 3 + 1] = c.g * brightness;
    colors[i * 3 + 2] = c.b * brightness;

    sizes[i] = isAccent ? particleSize * 2.5 : particleSize * (0.5 + Math.random());
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vec3 pos = position;

        // Gentle drift
        float drift = sin(uTime * 0.3 + pos.x * 2.0) * 0.015;
        pos.y += drift;
        pos.x += cos(uTime * 0.2 + pos.z * 1.5) * 0.008;

        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;

      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.2, 0.5, d);
        gl_FragColor = vec4(vColor, alpha * 0.85);
      }
    `,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Mouse listener
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize
  window.addEventListener('resize', onResize);

  // Start loop
  animate();
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if (particles) {
    particles.material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
  }
}

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();
  const { rotationSpeed, mouseSensitivity } = CONFIG.scene;

  if (particles) {
    particles.material.uniforms.uTime.value = elapsed;

    // Smooth mouse parallax
    targetRotation.y += (mouse.x * mouseSensitivity - targetRotation.y) * 0.03;
    targetRotation.x += (mouse.y * mouseSensitivity - targetRotation.x) * 0.03;

    particles.rotation.y = elapsed * rotationSpeed + targetRotation.y;
    particles.rotation.x = targetRotation.x;
  }

  renderer.render(scene, camera);
}

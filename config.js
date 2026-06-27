export const CONFIG = {
  name: 'Alex Mora',
  role: 'Creative Developer',
  tagline: 'Building digital\nexperiences that\n<em>matter</em>',
  email: 'hello@alexmora.dev',
  location: 'Remote · Worldwide',
  available: true,
  year: new Date().getFullYear(),

  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],

  navLinks: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  projects: [
    {
      num: '01',
      name: 'Vessel',
      desc: 'Immersive brand platform for an experimental music label. WebGL scenes, generative audio visualizers.',
      tags: ['WebGL', 'Three.js', 'GSAP'],
      accent: '#8b5cf6',
      href: '#',
    },
    {
      num: '02',
      name: 'Strata',
      desc: 'Real-time data visualization dashboard for a climate-tech startup. D3.js & custom shaders.',
      tags: ['React', 'D3.js', 'GLSL'],
      accent: '#0ea5e9',
      href: '#',
    },
    {
      num: '03',
      name: 'Forma',
      desc: 'Editorial e-commerce experience with physics-based product configurator and fluid transitions.',
      tags: ['Next.js', 'Rapier', 'Framer'],
      accent: '#f59e0b',
      href: '#',
    },
    {
      num: '04',
      name: 'Noor',
      desc: 'Architecture studio portfolio with procedural geometry and scroll-driven storytelling.',
      tags: ['Three.js', 'GSAP', 'Blender'],
      accent: '#10b981',
      href: '#',
    },
  ],

  skills: [
    { name: 'Creative Development', level: 'Expert' },
    { name: 'Three.js / WebGL', level: 'Expert' },
    { name: 'GSAP & Motion Design', level: 'Expert' },
    { name: 'React / Next.js', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Advanced' },
    { name: 'Blender / 3D', level: 'Intermediate' },
  ],

  // Three.js scene settings
  scene: {
    particleCount: 1200,
    particleSize: 0.018,
    rotationSpeed: 0.0003,
    mouseSensitivity: 0.0006,
  },
};

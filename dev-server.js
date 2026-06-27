#!/usr/bin/env node
/**
 * Simple dev server with live reload.
 * Run: node scripts/dev-server.js
 * Or:  npm run dev
 */

import { createServer } from 'http';
import { readFileSync, existsSync, statSync, watch } from 'fs';
import { join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

// SSE clients for live reload
const clients = new Set();

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = url.pathname;

  // Live reload endpoint
  if (pathname === '/__live-reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.write('data: connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  // Serve files
  if (pathname === '/') pathname = '/index.html';

  let filePath = join(ROOT, pathname);

  // Try with .html extension
  if (!existsSync(filePath) && !extname(pathname)) {
    const withHtml = filePath + '.html';
    if (existsSync(withHtml)) filePath = withHtml;
  }

  // 404
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    const notFound = join(ROOT, '404.html');
    if (existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(readFileSync(notFound));
    } else {
      res.writeHead(404);
      res.end('404 Not Found');
    }
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const content = readFileSync(filePath);

  // Inject live reload snippet into HTML
  if (ext === '.html') {
    const inject = `<script>
      (function() {
        const es = new EventSource('/__live-reload');
        es.addEventListener('reload', () => location.reload());
        es.onerror = () => setTimeout(() => location.reload(), 1000);
      })();
    </script>`;
    const html = content.toString().replace('</body>', inject + '</body>');
    res.writeHead(200, { 'Content-Type': mime });
    res.end(html);
  } else {
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-store',
    });
    res.end(content);
  }
});

server.listen(PORT, () => {
  console.log(`\n  ✦ Dev server running\n`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`\n  Watching for changes...\n`);
});

// File watcher for live reload
watch(ROOT, { recursive: true }, (event, filename) => {
  if (!filename || filename.includes('node_modules')) return;
  console.log(`  ↻ ${filename}`);
  clients.forEach(res => {
    res.write('event: reload\ndata: {}\n\n');
  });
});

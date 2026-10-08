import { readFile, writeFile, rm } from 'node:fs/promises';
import { render } from '../.ssr/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const html = await readFile(path, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Missing prerender marker');
await writeFile(path, html.replace('<!--app-html-->', render()));
await rm(new URL('../.ssr', import.meta.url), { recursive: true, force: true });
console.log('Prerendered the complete homepage for SEO and immediate content delivery.');

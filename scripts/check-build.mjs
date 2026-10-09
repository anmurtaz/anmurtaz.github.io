import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';

const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist), 'utf8');
for (const required of ['I build backend systems that scale.', 'Application Software Engineer II', 'Metadata Synchronization', 'Start Review Optimization', 'ScanMasterPro', 'Production Reliability &amp; Modernization', 'mailto:anasmurtaza33@gmail.com', 'https://wa.me/919541527062', 'https://www.instagram.com/cartuun_', 'https://anmurtaz.github.io/', 'application/ld+json']) assert.ok(html.includes(required), `Missing production content: ${required}`);
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Expected one primary heading');
assert.ok(!html.includes('<!--app-html-->'), 'Homepage was not prerendered');
const schema = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
assert.equal(JSON.parse(schema[1]).name, 'Anas Murtaza');
for (const file of ['favicon.svg', 'apple-touch-icon.png', 'og-image.png', 'robots.txt', 'sitemap.xml', '.nojekyll', 'resume/Anas-Murtaza-Resume.pdf']) await access(new URL(file, dist));
for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) await access(new URL(match[1].slice(1), dist));
const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8');
assert.ok(sitemap.includes('https://anmurtaz.github.io/'));
const assets = await readdir(new URL('assets/', dist));
assert.ok(!assets.some(file => file.endsWith('.map')), 'Unexpected public source maps');
console.log('PASS: static HTML, identity, links, metadata, structured data, sitemap, résumé, and production assets.');

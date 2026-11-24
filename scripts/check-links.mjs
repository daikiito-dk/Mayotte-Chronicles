// Checks that every internal link and asset in dist/ points at a file that exists.
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const site = 'https://daikiito-dk.github.io';
const base = '/Mayotte-Chronicles';

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

async function exists(p) {
  try {
    const s = await stat(p);
    return s.isDirectory() ? exists(join(p, 'index.html')) : true;
  } catch {
    return false;
  }
}

const attr = /\s(?:href|src|content)="([^"]+)"/g;
const broken = [];
let checked = 0;

for await (const file of htmlFiles(dist)) {
  const html = await readFile(file, 'utf8');
  for (const [, raw] of html.matchAll(attr)) {
    let url = raw.replaceAll('&amp;', '&');
    if (url.startsWith(site)) url = url.slice(site.length);
    if (!url.startsWith('/')) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    if (!pathname.startsWith(`${base}/`) && pathname !== base) {
      broken.push(`${relative(dist, file)}: ${raw} (outside base path)`);
      continue;
    }
    checked++;
    if (!(await exists(join(dist, pathname.slice(base.length))))) broken.push(`${relative(dist, file)}: ${raw}`);
  }
}

if (broken.length) {
  console.error(`Broken internal links (${broken.length}):\n  ${[...new Set(broken)].join('\n  ')}`);
  process.exit(1);
}
console.log(`Checked ${checked} internal links: all OK`);

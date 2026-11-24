// Generates the shared placeholder hero image used until real photos are added.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../content/images/placeholder.jpg', import.meta.url));
const width = 1600;
const height = 900;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7fd3d1"/>
      <stop offset="0.55" stop-color="#1c8c8f"/>
      <stop offset="1" stop-color="#0b5f63"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sea)"/>
  <path d="M0 640 C 260 590 420 690 700 640 S 1200 580 1600 650 L1600 900 L0 900 Z" fill="#0b5f63" opacity="0.55"/>
  <path d="M0 720 C 300 680 520 770 820 720 S 1300 690 1600 740 L1600 900 L0 900 Z" fill="#073f42" opacity="0.6"/>
  <text x="50%" y="44%" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="104" fill="#ffffff">Mayotte Chronicles</text>
  <text x="50%" y="54%" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" letter-spacing="6" fill="#e8fbfa">PHOTO COMING SOON</text>
</svg>`;

await mkdir(dirname(out), { recursive: true });
await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
console.log(`Wrote ${out}`);

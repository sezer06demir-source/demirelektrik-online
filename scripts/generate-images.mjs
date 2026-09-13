/**
 * Build öncesi görsel üretimi: favicon, PWA ikonları ve Open Graph görseli.
 * Kaynak: aşağıdaki SVG işareti (kırmızı zemin üzerinde beyaz şimşek + "acil" çizgisi).
 * Gerçek logo geldiğinde public/ altındaki dosyaları elle değiştirip bu scripti
 * package.json "build" komutundan kaldırabilirsin.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = resolve(root, 'public');
const RED = '#D62828';
const INK = '#16181D';

const mark = (size, pad = 0) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="${pad ? 0 : 22}" fill="${RED}"/>
  <path d="M56 14 L30 56 h18 l-6 30 L72 44 H54 Z" fill="#fff"/>
</svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="14" height="630" fill="${RED}"/>
  <g transform="translate(80,80)">
    <rect width="96" height="96" rx="22" fill="${RED}"/>
    <path transform="scale(0.96)" d="M56 14 L30 56 h18 l-6 30 L72 44 H54 Z" fill="#fff"/>
  </g>
  <text x="80" y="290" font-family="Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="${INK}" letter-spacing="-2">Ankara acil</text>
  <text x="80" y="375" font-family="Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="${INK}" letter-spacing="-2">elektrik arıza servisi</text>
  <text x="80" y="450" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500" fill="#5F6B7A">Demir Elektrik · Her gün 08:00–23:00 · 25 ilçenin tamamı</text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="56" font-weight="800" fill="${RED}" letter-spacing="-1">0506 092 58 16</text>
</svg>`;

await mkdir(resolve(pub, 'icons'), { recursive: true });
const png = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();

/**
 * Gerçek ICO dosyası üretir (6 bayt başlık + 16 bayt dizin + PNG verisi).
 * Sunucu `image/vnd.microsoft.icon` içerik tipiyle ve `nosniff` başlığıyla servis ettiği
 * için dosyanın gerçekten ICO olması gerekir; ham PNG'yi .ico adıyla koymak yetmez.
 */
function icoFromPng(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // rezerve
  header.writeUInt16LE(1, 2); // tip: ikon
  header.writeUInt16LE(1, 4); // görsel sayısı
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // genişlik
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // yükseklik
  entry.writeUInt8(0, 2); // palet yok
  entry.writeUInt8(0, 3); // rezerve
  entry.writeUInt16LE(1, 4); // renk düzlemi
  entry.writeUInt16LE(32, 6); // bit derinliği
  entry.writeUInt32LE(pngBuf.length, 8); // veri boyutu
  entry.writeUInt32LE(22, 12); // veri başlangıcı
  return Buffer.concat([header, entry, pngBuf]);
}

await writeFile(resolve(pub, 'favicon.svg'), mark(64).trimStart());
await writeFile(resolve(pub, 'favicon.ico'), icoFromPng(await png(mark(64), 32), 32));
await writeFile(resolve(pub, 'icons/icon-192.png'), await png(mark(192), 192));
await writeFile(resolve(pub, 'icons/icon-512.png'), await png(mark(512), 512));
await writeFile(resolve(pub, 'icons/apple-touch-icon.png'), await png(mark(180), 180));
// maskable: güvenli alan için işaret küçültülür
const maskable = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${RED}"/>
  <g transform="translate(20,20) scale(0.6)"><path d="M56 14 L30 56 h18 l-6 30 L72 44 H54 Z" fill="#fff"/></g>
</svg>`;
await writeFile(resolve(pub, 'icons/icon-512-maskable.png'), await png(maskable, 512));
await writeFile(resolve(pub, 'og-image.png'), await sharp(Buffer.from(og)).png().toBuffer());
console.log('[images] favicon, ikonlar ve og-image üretildi');

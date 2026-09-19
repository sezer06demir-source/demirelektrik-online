import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { posts } from '@data/blog';
import { site } from '@data/site';

/**
 * Gerçek fotoğrafı OLMAYAN her rehber yazısı için markalı kapak (1200x630 PNG).
 * Tasarım bilerek diğer sitelerden farklı: beyaz zemin, üstte kırmızı acil bandı,
 * altta gece şeridinde telefon — "servis fişi" görünümü.
 * Çıktı: /rehber/kapak/<slug>.png
 */
export function getStaticPaths() {
  return posts.filter((p) => !p.image).map((p) => ({ params: { slug: p.slug }, props: { post: p } }));
}

const INK = '#16181d';
const RED = '#d62828';
const RED_TINT = '#fdeaea';
const NIGHT = '#101319';
const ON_NIGHT_DIM = '#8c95a3';

const esc = (s: string) => s.replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[m]!);

function wrap(text: string, maxChars = 24, maxLines = 4): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = w;
      if (lines.length === maxLines - 1) break;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line && lines.length < maxLines) lines.push(line.trim());
  return lines.length ? lines : [text];
}

export const GET: APIRoute = async ({ props }) => {
  const post = (props as any).post as { title: string; keyword: string };
  const lines = wrap(post.title, 26, 4);
  const fs = lines.length >= 4 ? 48 : lines.length === 3 ? 54 : 60;
  const startY = 268 - ((lines.length - 1) * fs) / 2;
  const tspans = lines
    .map((l, i) => `<tspan x="80" y="${Math.round(startY + i * (fs + 12))}">${esc(l)}</tspan>`)
    .join('');
  const kw = esc(post.keyword);
  const kwW = Math.min(900, 48 + post.keyword.length * 15);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#ffffff"/>
    <rect x="0" y="0" width="1200" height="96" fill="${RED}"/>
    <text x="80" y="60" font-family="Arial, sans-serif" font-size="25" font-weight="800" letter-spacing="4" fill="#ffffff">DEMİR ELEKTRİK · ARIZA REHBERİ</text>
    <rect x="1080" y="34" width="14" height="28" fill="#ffffff" opacity="0.85"/>
    <rect x="1104" y="34" width="14" height="28" fill="#ffffff" opacity="0.55"/>
    <rect x="1128" y="34" width="14" height="28" fill="#ffffff" opacity="0.3"/>
    <text font-family="Arial, sans-serif" font-size="${fs}" font-weight="800" fill="${INK}">${tspans}</text>
    <rect x="80" y="430" width="${kwW}" height="50" rx="10" fill="${RED_TINT}"/>
    <rect x="80" y="430" width="5" height="50" rx="2.5" fill="${RED}"/>
    <text x="104" y="463" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="${RED}">${kw}</text>
    <rect x="0" y="534" width="1200" height="96" fill="${NIGHT}"/>
    <text x="80" y="592" font-family="Arial, sans-serif" font-size="34" font-weight="800" fill="#ffffff">${esc(site.phone.display)}</text>
    <text x="1120" y="590" text-anchor="end" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="${ON_NIGHT_DIM}">Ankara · Her gün ${esc(site.hours.display)}</text>
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};

# Demir Elektrik — Acil Servis sitesi (demirelektrikankara.online)

Demir Elektrik'in ikinci web sitesi. Aynı işletme, farklı konumlandırma: **Ankara acil elektrik arıza servisi**. Kurumsal site `www.demirelektrikankara.com.tr` ayrı bir depodadır; bu sitenin tasarımı, metinleri ve hizmet seti bilinçli olarak ondan farklıdır. Güvenlik katmanları (middleware, Vercel Firewall, Cloudflare) aynı yapıdadır.

- Astro 5, statik çıktı, Manrope yazı tipi, tek vurgu rengi kırmızı.
- Telefon / WhatsApp: **0506 092 58 16** (`src/data/site.ts`).
- Kapsam: ev, villa, mağaza/iş yeri, apartman ortak alan, fabrika kumanda panoları. İş makinesi ve otomasyon yok.

## Komutlar

```powershell
npm install
npm run dev       # http://localhost:4321
npm run build     # görselleri üretir + statik build (dist/)
npm run check     # tip kontrolü
```

## Yapı

| Ne | Nerede |
| --- | --- |
| Firma bilgisi, menü, ana sayfa metin blokları | `src/data/site.ts` |
| Hizmetler (12) | `src/data/services-a.ts`, `services-b.ts` → `services.ts` |
| İlçe / semt sayfaları (12 içerikli + 13 etiket) | `src/data/districts.ts` |
| Mahalle sayfaları (6 ilçe × 8) | `src/data/neighborhoods/*.ts` |
| Tipler | `src/data/types.ts` |
| Düzen ve bileşenler | `src/layouts/BaseLayout.astro`, `src/components/*` |
| Sayfalar | `src/pages/**` |
| Güvenlik | `middleware.ts`, `vercel.json`, `SECURITY.md`, `scripts/cloudflare-security.mjs` |

## Yayınlama

Vercel'e GitHub deposu (`sezer06demir-source/demirelektrik-online`) bağlanır; her `main` push'unda otomatik deploy. Alan adı Cloudflare'de: `www` CNAME → `cname.vercel-dns.com`, kök → Vercel'in verdiği kayıt; proxy açık, SSL Full (strict). Ayrıntı: `SECURITY.md`.

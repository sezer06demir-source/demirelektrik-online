---
name: demirelektrik-online-site
description: Demir Elektrik'in ikinci sitesi www.demirelektrikankara.online (Ankara acil elektrik arıza servisi) için çalışma rehberi. Konumlandırma ve içerik kuralları, veri dosyaları, yeni ilçe/mahalle/hizmet ekleme, güvenlik katmanı kuralları, build/push/deploy doğrulama. Bu depoda geliştirme, içerik, SEO, deploy veya güvenlik işi istendiğinde kullan.
---

# demirelektrikankara.online — çalışma rehberi

Aynı işletme (Demir Elektrik) ama **acil arıza servisi** konumlandırması; kurumsal site (`../demirelektrik`, www.demirelektrikankara.com.tr) ile tasarım, metin ve hizmet seti bilinçli olarak farklıdır. **Kurumsal siteden metin kopyalama.** Depo: https://github.com/sezer06demir-source/demirelektrik-online (`origin`, `main`).

## Kimlik ve kurallar

- Telefon / WhatsApp: **0506 092 58 16** (kurumsal sitedeki 0506 254 76 78 DEĞİL). Tek kaynak `src/data/site.ts`.
- Saat: haftanın 7 günü 08:00–23:00. "7/24", fiyat rakamı, garanti süresi, "ücretsiz keşif" yazma. "Tespit sonrası, işe başlamadan fiyat söylenir" kullan.
- Kapsam: ev, villa, mağaza/iş yeri, apartman ortak alan, fabrika ve atölye **kumanda panoları**. İş makinesi ve otomasyon YOK.
- Ton: kısa cümleler, doğrudan, sakinleştirici, "biz" dili. H1 biçimleri: "<Ad> Acil Elektrikçi".
- Tasarım: beyaz zemin, mürekkep metin, tek vurgu kırmızı (`--red`), Manrope; kart/gölge yok, ince çizgili "satır" (`.rows/.row`) ve sağ yapışkan `CallPanel`. Yeni bileşen eklerken `src/styles/global.css` token'larını kullan; sarı/lacivert (kurumsal sitenin renkleri) kullanma.

## Veri

| Ne | Nerede |
| --- | --- |
| Tipler | `src/data/types.ts` (Service, District, Neighborhood) |
| Hizmetler | `services-a.ts` (1–6), `services-b.ts` (7–12) → `services.ts` (birleştirme, `servicesByGroup`) |
| İlçe/semt | `districts.ts` — `content` dolu 12 kayıt sayfa üretir; `arrival` alanı zorunlu |
| Mahalle | `neighborhoods/<ilce>.ts` + `index.ts`; 6 ilçe × 8 mahalle (Sincan, Etimesgut, Yenimahalle, Mamak, Keçiören, Çankaya) |
| Ana sayfa blokları | `site.ts` → `situations`, `promises`, `stats`, `formProblems`, `nav` |

Yeni ilçe: `districts.ts`'e `content` dolu kayıt (semt için `type:'semt', parent`). Yeni mahalle: ilgili `neighborhoods/<ilce>.ts` dizisine kayıt; yeni ilçe dosyası için `index.ts`'e ekle. `highlightedServices` yalnızca 12 hizmet slug'ından.

## Sayfalar

`/` (index), `/hizmetler`, `/hizmetler/<slug>`, `/hizmet-bolgeleri`, `/hizmet-bolgeleri/<ilce>`, `/hizmet-bolgeleri/<ilce>/<mahalle>`, `/nasil-calisiriz`, `/hakkimizda`, `/sss`, `/iletisim`, `/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi`, `/404`. Uygulama (PWA) ve projeler galerisi bu sitede yok.

## Güvenlik (kurumsal siteyle aynı)

- `middleware.ts` tek dosya; yerel import yok. IP engel listesi `BLOCKED_IPS_STATIC` (kurumsal siteyle aynı liste; birinde güncellenince diğerine kopyala). `FIGHT_MODE` env Vercel'de tanımlanınca aktif olur.
- `vercel.json` başlıkları, `SECURITY.md`, `scripts/cloudflare-security.mjs` (zone: demirelektrikankara.online; CF_API_TOKEN gerekir).
- Vercel'de ülke/IP kuralı koyma (Cloudflare önde). Cloudflare ücretsiz plan: 5 WAF kuralı.

## Build ve doğrulama

```powershell
npm run check   # 0 error olmalı
npm run build   # ~83 sayfa (mahalleler dolunca)
git add … ; git commit ; git push origin main
```

Canlı testte tarayıcı UA kullan (curl varsayılanı 403). Kullanıcı hafızasındaki ilerleme günlüğünü her işten sonra güncelle.

import { SITE_URL } from './site-url.mjs';

/**
 * Firma bilgileri — tek kaynak. Aynı işletme (Demir Elektrik), farklı konumlandırma:
 * bu site Ankara'da acil elektrik arıza servisine odaklanır.
 */
export const site = {
  name: 'Demir Elektrik',
  brand: 'Demir Elektrik Acil Servis',
  legalName: 'Demir Elektrik',
  url: SITE_URL,
  tagline: 'Ankara Acil Elektrik Arıza Servisi',
  description:
    'Sigorta attı, elektrik gitti, priz yanıyor mu? Demir Elektrik acil servisi Ankara\'nın tüm ilçelerine 08:00–23:00 arası aynı gün geliyor. Arıza tespiti, sigorta ve pano, kaçak akım, priz ve aydınlatma. Tel: 0506 092 58 16.',

  phone: {
    display: '0506 092 58 16',
    href: 'tel:+905060925816',
    e164: '+905060925816',
    international: '+90 506 092 58 16',
  },

  whatsapp: {
    number: '905060925816',
    message: 'Merhaba, Ankara\'da elektrik arızam var. Yardımcı olabilir misiniz?',
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  address: {
    street: 'Melih Gökçek Bulvarı No:19/A',
    district: 'Sincan',
    city: 'Ankara',
    countryCode: 'TR',
    full: 'Melih Gökçek Bulvarı No:19/A, Sincan / Ankara',
  },

  hours: {
    display: '08:00 – 23:00',
    opens: '08:00',
    closes: '23:00',
    daysText: 'Haftanın 7 günü',
  },

  experienceYears: 30,
  responseText: 'Çoğu çağrıda 60 dakika içinde kapınızdayız',

  maps: {
    get directionsHref() {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Melih Gökçek Bulvarı No:19/A, Sincan, Ankara')}`;
    },
  },
} as const;

export const nav = [
  { label: 'Arıza türleri', href: '/hizmetler' },
  { label: 'Bölgeler', href: '/hizmet-bolgeleri' },
  { label: 'Nasıl çalışırız', href: '/nasil-calisiriz' },
  { label: 'Sorular', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

/** Ana sayfada "şu an ne oluyor" akışı — arıza anında müşterinin durumu */
export const situations = [
  { icon: 'power', title: 'Sigorta sürekli atıyor', text: 'Kaldırıyorsunuz, birkaç saniye sonra yine düşüyor. Çoğunlukla bir cihaz ya da hatta kaçak var.', slug: 'sigorta-atmasi' },
  { icon: 'zap', title: 'Evin bir bölümünde elektrik yok', text: 'Salon yanıyor, mutfak karanlık. Sigorta sağlam görünüyorsa sorun hat ya da bağlantı noktasında.', slug: 'elektrik-kesintisi' },
  { icon: 'alert-triangle', title: 'Priz kıvılcım çıkarıyor, yanık kokusu var', text: 'Gevşek bağlantı ya da eriyen kablo. Prizi kullanmayın, o hattın sigortasını indirin, bizi arayın.', slug: 'priz-anahtar-tamiri' },
  { icon: 'shield-check', title: 'Cihaza dokununca çarpıyor', text: 'Kaçak akım ya da topraklama sorunu. Kaçak akım rölesi yoksa ya da devre dışıysa acil bakılmalı.', slug: 'kacak-akim-tespiti' },
] as const;

export const promises = [
  { title: 'Telefonda ön teşhis', text: 'Aradığınızda birkaç soruyla sorunu daraltıyoruz. Bazı arızaları telefonda çözüyoruz, o zaman ücret yok.' },
  { title: 'Aynı gün müdahale', text: 'Sincan merkezli ekip Ankara\'nın tüm ilçelerine 08:00–23:00 arası çıkıyor. Yakın ilçelerde çoğu zaman bir saat içinde.' },
  { title: 'Fiyatı işe başlamadan söylüyoruz', text: 'Tespit sonrası ne yapılacağını ve ücretini söyleriz; onay vermeden işe başlamayız.' },
  { title: 'Standart parça araçta', text: 'Sigorta, röle, priz, anahtar ve kablo aracımızda hazır. Çoğu arıza tek gelişte biter.' },
] as const;

export const stats = [
  { value: '30+', label: 'yıl sahada' },
  { value: '25', label: 'ilçenin tamamı' },
  { value: '08–23', label: 'her gün' },
] as const;

/**
 * Ziyaretçilerin Google'da kullandığı arama ifadeleri. Ana sayfanın altında
 * etiket olarak gösterilir; her biri konuyu gerçekten anlatan sayfaya gider.
 */
export const searchTags = [
  { label: 'Ankara acil elektrikçi', href: '/hizmetler/acil-elektrikci' },
  { label: 'En yakın elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
  { label: 'Nöbetçi elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
  { label: '7/24 elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
  { label: 'Gece elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
  { label: 'Hafta sonu elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
  { label: 'Sigorta atıyor', href: '/hizmetler/sigorta-atmasi' },
  { label: 'Kaçak akım rölesi atıyor', href: '/hizmetler/kacak-akim-rolesi-atiyor' },
  { label: 'Kaçak akım rölesi montajı', href: '/hizmetler/kacak-akim-rolesi-montaji' },
  { label: 'Elektrik kesildi', href: '/hizmetler/elektrik-kesintisi' },
  { label: 'Priz yanığı, kıvılcım', href: '/hizmetler/priz-anahtar-tamiri' },
  { label: 'Sigorta kutusu yenileme', href: '/hizmetler/elektrik-panosu-yenileme' },
  { label: 'Avize montajı', href: '/hizmetler/avize-spot-montaji' },
  { label: 'Elektrik tesisat ustası', href: '/hizmetler/ev-elektrik-tesisati' },
  { label: 'Mağaza elektrikçisi', href: '/hizmetler/isyeri-elektrik-servisi' },
  { label: 'Villa elektrikçisi', href: '/hizmetler/villa-elektrik-servisi' },
  { label: 'Apartman elektrikçisi', href: '/hizmetler/bina-ortak-alan-elektrigi' },
  { label: 'Fabrika kumanda panosu', href: '/hizmetler/fabrika-kumanda-panosu' },
] as const;

export const formProblems = [
  'Sigorta atıyor',
  'Elektrik yok',
  'Priz / anahtar arızası',
  'Kaçak akım, çarpıyor',
  'Yanık kokusu, kıvılcım',
  'Avize / spot / LED montajı',
  'Pano / sigorta kutusu',
  'Villa / bahçe elektriği',
  'Mağaza / iş yeri elektriği',
  'Fabrika kumanda panosu',
  'Başka bir sorun',
] as const;

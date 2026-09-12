/**
 * Ortak veri tipleri — hizmetler, ilçe/semt ve mahalle sayfaları.
 * İçerik dosyaları (services.ts, districts.ts, neighborhoods/*.ts) bu tiplere uyar.
 */

export interface Faq {
  q: string;
  a: string;
}

export type ServiceGroup = 'acil' | 'tamir' | 'kurulum';

export interface Service {
  /** URL parçası, örn. "sigorta-atmasi" */
  slug: string;
  /** Sayfa başlığı (H1), örn. "Sigorta Atması ve Kaçak Akım Rölesi" */
  title: string;
  /** Menü, kart ve breadcrumb için kısa ad */
  shortTitle: string;
  /** Icon.astro içindeki ikon adı */
  icon: string;
  group: ServiceGroup;
  /** Kartta görünen tek cümle */
  excerpt: string;
  /** Detay sayfası giriş paragrafları (2–3) */
  description: string[];
  /** "Şu belirtiler varsa bizi arayın" — 4–6 madde */
  symptoms: string[];
  /** Yerinde ne yapıyoruz — 4–6 madde */
  whatWeDo: string[];
  /** Müşterinin gelmeden önce yapabileceği güvenli adımlar — 2–4 madde */
  beforeWeArrive: string[];
  /** Ortalama süre / fiyat yaklaşımı gibi pratik bilgi — 2–3 kısa madde */
  practical: { label: string; value: string }[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
  /** Ana sayfada öne çıksın mı */
  featured: boolean;
  order: number;
}

export type DistrictType = 'ilce' | 'semt';

export interface DistrictContent {
  /** H1 — örn. "Sincan Acil Elektrikçi" */
  h1: string;
  /** Alt başlık, tek cümle */
  subtitle: string;
  /** Özgün giriş paragrafları (2–3) */
  intro: string[];
  /** Bu bölgede en çok gelen çağrılar (service slug'ları, 4 adet) */
  highlightedServices: string[];
  /** Bölgeye özgü durumlar (3 madde) */
  localNotes: { title: string; text: string }[];
  /** Ulaşım / varış bilgisi — tek cümle, örn. "Sincan merkezden 10–15 dakika" */
  arrival: string;
  /** Mahalle / semt adları (yerel SEO) */
  neighborhoods: string[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
}

export interface District {
  name: string;
  slug: string;
  type: DistrictType;
  /** Bağlı olduğu ilçe (semtler için) */
  parent?: string;
  featured: boolean;
  /** Bulunma hâli özel biçimi (örn. "Gölbaşı'nda"). Boşsa kural ile üretilir. */
  locative?: string;
  content?: DistrictContent;
}

export interface NeighborhoodContent {
  /** H1 — örn. "Törekent Acil Elektrikçi" */
  h1: string;
  subtitle: string;
  intro: string[];
  highlightedServices: string[];
  localNotes: { title: string; text: string }[];
  /** Varış bilgisi, tek cümle */
  arrival: string;
  /** Cadde, site, önemli noktalar (5–9) */
  landmarks: string[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
}

export interface Neighborhood {
  name: string;
  slug: string;
  districtSlug: string;
  locative?: string;
  content: NeighborhoodContent;
}

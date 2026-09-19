/**
 * Rehber yazıları. SEO otomasyonu buraya yeni kayıt ekler.
 * Kural: doğal ve insan elinden çıkmış Türkçe, tek bir hedef arama ifadesi,
 * sahadan gerçek örnek, kısa paragraf, gerçekten sorulan sorular ve site içi bağlantı.
 */
export interface BlogSection {
  h: string;
  p: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  readingMin: number;
  /** Gerçek iş fotoğrafı yolu (public/ altında). Boşsa markalı kapak otomatik üretilir. */
  image?: string;
  imageAlt?: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: 'elektrik-kesintisi-mi-ariza-mi',
    title: 'Elektrik Kesintisi mi, Evdeki Arıza mı? Ankara’da Ayırt Etmenin Pratik Yolu',
    description:
      'Elektrik gitti ama kesinti mi yoksa evinizdeki arıza mı? Ankara’da sahadan üç dakikalık kontrol listesi, nelere dokunmamak gerektiği ve ne zaman elektrikçi çağırmalı. Demir Elektrik: 0506 092 58 16.',
    keyword: 'elektrik kesintisi mi arıza mı',
    date: '2026-09-19',
    readingMin: 6,
    excerpt:
      'Elektrik gittiğinde ilk üç dakikada yapacağınız birkaç kontrol, beklemekle elektrikçi çağırmak arasındaki farkı ortaya koyar. Ankara’da en sık çıktığımız çağrılardan yola çıkarak anlattık.',
    intro:
      'Elektrik gittiğinde insanın ilk refleksi beklemek oluyor: “Herhalde kesintidir, birazdan gelir.” Bazen gerçekten öyle. Ama Ankara’da gittiğimiz çağrıların azımsanmayacak bir kısmında ev sahibi saatlerce kesinti sandığı için beklemiş, sonra sorunun kendi panosunda olduğu ortaya çıkmış oluyor. Bu iki durumu ayırmak aslında zor değil; birkaç dakikalık doğru kontrol yetiyor.',
    sections: [
      {
        h: 'İlk soru: elektrik sadece sizde mi yok?',
        p: [
          'En hızlı ayrım burada yapılır. Apartmandaysanız merdiven boşluğunun lambasına, karşı bloktaki pencerelere, sokak aydınlatmasına bakın. Komşularda da yoksa büyük ihtimalle bölgesel bir kesinti var ve yapılacak şey beklemek. Sadece sizde yoksa sorun sizin sayacınızdan sonraki tarafta, yani evin içindedir.',
          'Gece bakıyorsanız sokak lambaları yanıltabilir; bazı hatlarda sokak aydınlatması ayrı beslenir. Böyle bir durumda komşu dairenin kapısını çalmak en kesin yöntem. Müstakil evde ya da villadaysanız en yakın komşuya veya sokağın diğer ucundaki eve bakmak gerekir.',
          'Ankara’da dağıtım Başkent EDAŞ’ta; planlı kesintileri ve arıza bildirimlerini kendi kesinti sorgulama sayfasından ya da 186 hattından teyit edebilirsiniz. Orada sizin adresiniz için bir kayıt görünmüyor ve komşuların elektriği varsa, gerisi bizim işimiz.',
        ],
      },
      {
        h: 'Evin tamamında mı, yoksa bir bölümünde mi yok?',
        p: [
          'Bu sorunun cevabı, sorunun nerede olduğunu neredeyse tek başına söyler. Salon yanıyor ama mutfak karanlıksa bu kesinti değildir; o hattın sigortası düşmüştür ya da bir bağlantı noktası kopmuştur. Kesinti tüm daireyi birden etkiler, seçici davranmaz.',
          'Evin tamamı karanlıksa da hemen kesinti demeyin. Ana şalter ya da kaçak akım rölesi düşmüşse sonuç aynı görünür: her yer karanlık. Fark, panoya bakınca ortaya çıkar.',
          'Elektriğin tamamen gitmediği, ama ışıkların kısılıp parladığı, bazı prizlerin zayıf çalıştığı bir durum varsa bu üçüncü ve en tehlikeli senaryodur. Buna sahada “nötr kopması” diyoruz. Cihazlara gelen gerilim dengesizleşir; buzdolabı ve televizyon gibi cihazlar bu yüzden zarar görebilir. Böyle bir belirtide beklemeyin, ana şalteri indirip arayın.',
        ],
      },
      {
        h: 'Panoya bakarken nelere dikkat edeceksiniz',
        p: [
          'Sigorta kutusunu açın ve kollara bakın. Aşağı düşmüş tek bir sigorta varsa o hatta bir sorun var demektir: çoğunlukla o bölgedeki bir cihaz, ıslanmış bir priz ya da yorulmuş bir bağlantı. Kolu bir kez kaldırmayı deneyebilirsiniz. Tekrar düşüyorsa ısrar etmeyin; ikinci, üçüncü denemede sigortayı zorlamak arızayı büyütür.',
          'Genelde diğerlerinden geniş olan ve üzerinde test düğmesi bulunan eleman kaçak akım rölesidir. Düşen oysa, tesisatta ya da bir cihazda kaçak var demektir. Kaçak akım rölesi keyfinden atmaz; attıysa görevini yapmıştır. Bu durumda tek tek sigortaları indirip hangisinin röleyi attırdığını bulmak mümkündür, ama ıslak zeminde ya da tereddütle yapılacak bir iş değildir.',
          'Hiçbir sigorta düşmemiş, her şey yukarıda ama elektrik yoksa sorun panodan öncesindedir: sayaç çıkışı, kolon hattı ya da apartman girişindeki ana sigorta. Ankara’nın eski yapılı binalarında sayaç klemensinin gevşemesi ve orada ısınıp temasın kesilmesi sık karşılaştığımız bir durum. Bu bölgeye müdahale sizin işiniz değil; kapağını açmayın.',
        ],
      },
      {
        h: 'Kesinti sanılan ama arıza çıkan tipik çağrılar',
        p: [
          'Geçen kış Etimesgut’ta bir daireye gittiğimizde ev sahibi neredeyse beş saattir bekliyordu; komşularda elektrik olduğunu fark etmemişti, çünkü karşı blok zaten karanlık bir sokağa bakıyordu. Sorun ana şalterin altındaki gevşemiş bir klemensti, on beş dakikada bitti.',
          'Bir başka örnek Yenimahalle’den: müşteri “bizim sokakta hep kesinti olur” diye beklemiş, sabah sigortanın tekrar tekrar attığını fark etmiş. Nedeni balkondaki prize takılı, içine su kaçmış bir uzatma kablosuydu. Böyle durumlar bekleyerek düzelmez; aksine sigortayı her kaldırışta biraz daha kötüleşir.',
          'Tersi de oluyor: bazen gerçekten kesintidir ve biz yola çıkmadan telefonda anlaşılır. Bu yüzden aradığınızda önce birkaç soru soruyoruz. Sorun kesintiyse bunu söylüyoruz; boşuna yol masrafı çıkarmanın anlamı yok.',
        ],
      },
      {
        h: 'Biz gelene kadar yapılacaklar ve yapılmayacaklar',
        p: [
          'Yapılacaklar kısa: elektrikli ısıtıcı, ütü, şarj cihazı gibi cihazların fişini çekin. Elektrik geri geldiğinde hepsi aynı anda devreye girerse sigorta yeniden atabilir. Buzdolabının kapağını mümkün olduğunca kapalı tutun, içindekiler birkaç saat dayanır. Aydınlatma için mum yerine telefon feneri ya da pilli lamba tercih edin.',
          'Yapılmayacaklar daha önemli: sigortayı arka arkaya kaldırıp indirmeyin, sayaç kapağını ve apartman giriş panosunu açmayın, yanık kokusu geliyorsa o bölgeye hiç dokunmayın. Islak elle panoya uzanmak ya da karanlıkta el yordamıyla kablo kurcalamak, çözülecek küçük bir arızayı ciddi bir kazaya çevirebilir.',
          'Ve en basiti: aradığınızda ne gördüğünüzü anlatın. “Elektrik yok” yerine “komşuda var, bizde yok, panoda kaçak akım rölesi düşmüş, kaldırınca hemen tekrar atıyor” demek, bizim için yarı yarıya çözülmüş bir arıza demektir.',
        ],
      },
      {
        h: 'Ne zaman elektrikçi çağırmak gerekir?',
        p: [
          'Komşularda elektrik varsa, sigorta tekrar tekrar atıyorsa, yanık kokusu ya da kıvılcım varsa, ışıklar kısılıp parlıyorsa veya bir cihaza dokununca karıncalanma hissediyorsanız beklemenin bir faydası yok. Bunların hiçbiri zamanla düzelen belirtiler değil.',
          'Demir Elektrik olarak Sincan merkezli çalışıyor, Ankara’nın tüm ilçelerine her gün 08:00 – 23:00 arasında çıkıyoruz. Telefonda durumu birlikte daraltıyoruz; gerekiyorsa aynı gün geliyoruz, gerekmiyorsa bunu da açıkça söylüyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Elektrik kesintisi olup olmadığını nereden öğrenebilirim?',
        a: 'Ankara’da dağıtım Başkent EDAŞ tarafından yapılır; planlı ve arızi kesintileri kendi kesinti sorgulama sayfasından ya da 186 numaralı hattan adresinize göre öğrenebilirsiniz. En hızlı yöntem yine de komşunuza bakmaktır.',
      },
      {
        q: 'Sigortayı kaç kere kaldırmayı denemeliyim?',
        a: 'Bir kere. Tekrar atıyorsa o hatta gerçek bir sorun var demektir ve zorlamak durumu kötüleştirir. Israrla kaldırılan sigortalarda kablo ısınması ve bağlantı noktalarında kömürleşme görüyoruz.',
      },
      {
        q: 'Kaçak akım rölesi attı, kendim bulabilir miyim?',
        a: 'Sigortaları tek tek indirip röleyi kaldırarak hangi hattın attırdığını bulmak mümkündür. Ancak zemin ıslaksa, panoyu tanımıyorsanız ya da yanık kokusu varsa denemeyin. Röle sizi korumak için attı; devre dışı bırakmak kesinlikle yapılmamalı.',
      },
      {
        q: 'Işıklar kısılıp parlıyor, elektrik tamamen gitmedi. Bu normal mi?',
        a: 'Hayır. Bu genelde nötr bağlantısındaki bir kopma ya da gevşemenin belirtisidir ve cihazlarınıza zarar verebilir. Ana şalteri indirip vakit kaybetmeden bir elektrikçiye haber verin.',
      },
      {
        q: 'Gece geç saatte elektrik giderse ne yapmalıyım?',
        a: 'Yanık kokusu, kıvılcım ya da çarpılma hissi gibi bir belirti varsa ana şalteri indirip sabahı beklemeden arayın. Böyle bir belirti yoksa ve tüm ev karanlıksa panoyu kontrol edip ertesi güne bırakabilirsiniz. Biz her gün 08:00 – 23:00 arası çağrı alıyoruz.',
      },
    ],
    related: [
      { label: 'Elektrik kesintisi ve arıza tespiti', href: '/hizmetler/elektrik-kesintisi' },
      { label: 'Sigorta atması', href: '/hizmetler/sigorta-atmasi' },
      { label: 'Kaçak akım rölesi atıyor', href: '/hizmetler/kacak-akim-rolesi-atiyor' },
      { label: 'Hizmet verdiğimiz ilçeler', href: '/hizmet-bolgeleri' },
    ],
  },
];

export const postsSorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

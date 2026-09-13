import type { Neighborhood } from './types';

export const cankayaNeighborhoods: Neighborhood[] = [
  {
    name: 'Kızılay',
    slug: 'kizilay-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Kızılay Acil Elektrikçi',
      subtitle: 'Kızılay\'da iş hanı, ofis ve mağazalarda ani elektrik arızasına aynı gün müdahale.',
      intro: [
        'Kızılay\'da elektrik arızası çoğunlukla günün en yoğun saatinde çıkar. Mağaza vitrin ışığı söner, ofis kat panosu atar, iş hanının ortak hattı devre dışı kalır. Bu tabloya alışığız.',
        'Telefonda kısa bir ön teşhis yaparız. Sigortanın mı attığını, kaçak akım rölesinin mi devrede olduğunu, yoksa dış kaynaklı bir kesinti mi yaşandığını birlikte anlarız. Mesai bitse de 08:00-23:00 arası Kızılay\'daki çağrınıza çıkarız.',
        'İş hanı, pasaj ve ofis katlarındaki eski pano yapısını biliyoruz. Ortak alan sigortası mı, kendi kolonunuz mu sorumlu, yerinde netleştirir, işe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['acil-elektrikci', 'isyeri-elektrik-servisi', 'sigorta-atmasi', 'elektrik-panosu-yenileme'],
      localNotes: [
        {
          title: 'Mesai dışı çağrılar',
          text: 'Kızılay\'da çoğu arıza kepenk kapandıktan sonra fark ediliyor. Akşam saatlerinde de aynı gün içinde geliriz.',
        },
        {
          title: 'Eski pano ve kolon hattı',
          text: 'İş hanlarındaki pano ve kolon hatları çoğu zaman yıllar önce döşendi. Otomat sigorta sık sık atıyorsa kolon yükünü yerinde kontrol ederiz.',
        },
        {
          title: 'Ortak alan mı, kendi hattınız mı',
          text: 'Pasaj ve iş hanlarında arızanın ortak sigortadan mı kendi dükkanınızdan mı geldiğini karıştırmayın, biz ayırt ederiz.',
        },
      ],
      arrival: 'Sincan\'daki merkezimizden Kızılay\'a normal trafikte 30-40 dakikada ulaşırız.',
      landmarks: [
        'Kızılay Meydanı çevresi',
        'Sıhhiye sınırı',
        'Kolej istikameti',
        'Karanfil Sokak',
        'Selanik Caddesi',
        'Necatibey Caddesi',
        'İş hanları ve pasajlar',
      ],
      faq: [
        {
          q: 'Kızılay\'da gece elektrik arızasına bakıyor musunuz?',
          a: 'Evet, 08:00-23:00 arası Kızılay\'daki çağrılara aynı gün çıkarız. Telefonda önce kısa bir ön teşhis yaparız.',
        },
        {
          q: 'Mağaza vitrin sigortası sürekli atıyor, ne yapmalıyım?',
          a: 'Vitrin ve ray spot hattında kısa devre veya aşırı yük olabilir. Elektriği kapatıp bizi arayın, yerinde kaynağı buluruz.',
        },
        {
          q: 'İş hanında ortak pano ile kendi dükkanımın hattı karışık, kim sorumlu?',
          a: 'Yerinde pano üzerinden hattı takip ederiz, sorunun ortak alandan mı kendi tesisatınızdan mı geldiğini netleştiririz.',
        },
      ],
      seoTitle: 'Kızılay Acil Elektrikçi | İş Hanı ve Ofis Arızası | Demir Elektrik',
      seoDescription: 'Kızılay\'da iş hanı, ofis ve mağazalarda acil elektrik arızasına aynı gün müdahale ederiz. Telefonda ön teşhis yapılır, fiyat sonra söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Bahçelievler',
    slug: 'bahcelievler-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Bahçelievler Acil Elektrikçi',
      subtitle: 'Bahçelievler\'de 7. Cadde işletmelerinden eski apartmanlara aynı gün elektrik arıza servisi.',
      intro: [
        'Bahçelievler\'deki arıza çağrılarının önemli bir kısmı 7. Cadde çevresindeki kafe ve mağazalardan gelir. Vitrin ışığı, kasa hattı ya da klima sigortası aynı anda atabilir.',
        'Mahallenin eski ve prestijli apartmanlarında tesisat da bir o kadar eski. Kolon hattı yük kaldırmayınca sigorta düzenli aralıklarla atar, biz yerinde yük dengesini kontrol ederiz.',
        'Öğrenci kiralık dairelerinde priz ve anahtar arızaları sık görülür. Ev sahibi ya da kiracı fark etmez, telefonda kısa ön teşhisle geliriz, işe başlamadan fiyatı söyleriz.',
      ],
      highlightedServices: ['isyeri-elektrik-servisi', 'priz-anahtar-tamiri', 'sigorta-atmasi', 'bina-ortak-alan-elektrigi'],
      localNotes: [
        {
          title: '7. Cadde işletmeleri',
          text: 'Kafe ve mağazalarda vitrin, kasa ve klima hattı aynı sigortaya bağlıysa sık arıza görülür, hat ayrımını yerinde öneririz.',
        },
        {
          title: 'Eski apartman kolon hattı',
          text: 'Bahçelievler\'in eski bloklarında kolon hattı yıllar önce döşendi, yük artınca otomat sık atar.',
        },
        {
          title: 'Öğrenci daireleri',
          text: 'Kısa süreli kiralık dairelerde priz ve anahtar arızaları ihmal edilir, biz hızlıca müdahale ederiz.',
        },
      ],
      arrival: 'Sincan merkezimizden Bahçelievler\'e trafiğe göre 30-40 dakikada varırız.',
      landmarks: [
        '7. Cadde',
        '8. Cadde',
        'Emek sınırı',
        'Anıtkabir çevresi',
        'Turan Güneş Bulvarı istikameti',
        'Bahçelievler Merkez',
      ],
      faq: [
        {
          q: '7. Cadde\'deki mağazamda vitrin sigortası sürekli atıyor, bakar mısınız?',
          a: 'Evet, vitrin ve ray spot hattını yerinde kontrol eder, kısa devre ya da aşırı yükü buluruz.',
        },
        {
          q: 'Eski apartmanda kolon hattı yetersiz mi anlaşılır mı?',
          a: 'Panodaki yük dağılımına bakarak kolon hattının yetip yetmediğini yerinde söyleriz.',
        },
        {
          q: 'Kiracıyım, ev sahibimden habersiz çağırabilir miyim?',
          a: 'Evet, telefonla arayabilirsiniz. Tespiti yaptıktan sonra işe başlamadan fiyatı söyleriz.',
        },
      ],
      seoTitle: 'Bahçelievler Acil Elektrikçi | 7. Cadde Arıza Servisi | Demir Elektrik',
      seoDescription: 'Bahçelievler\'de 7. Cadde işletmeleri ve eski apartmanlarda acil elektrik arızasına aynı gün servis veririz. Tespit sonrası fiyat söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Çayyolu',
    slug: 'cayyolu-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    locative: 'Çayyolu\'nda',
    content: {
      h1: 'Çayyolu Acil Elektrikçi',
      subtitle: 'Çayyolu\'nda villa ve sitelerde aynı gün elektrik arıza servisi, işe başlamadan fiyat.',
      intro: [
        'Çayyolu\'nda evlerin çoğu villa ya da site içinde. Bahçe aydınlatması, jeneratör geçişli pano ya da site ortak hattı kaynaklı arızalar sık görülür.',
        'Sincan\'a görece yakın olduğumuz için Çayyolu\'na hızlı çıkarız. Telefonda kısa bir ön teşhis yapar, kaçak akım rölesinin mi yoksa kolon hattının mı sorumlu olduğunu birlikte değerlendiririz.',
        'Site yönetimleriyle de çalışırız. Ortak alan panosu ile villa içi hattı ayrı ayrı kontrol eder, sorunu yerinde gösteririz.',
      ],
      highlightedServices: ['villa-elektrik-servisi', 'kacak-akim-tespiti', 'bina-ortak-alan-elektrigi', 'avize-spot-montaji'],
      localNotes: [
        {
          title: 'Villa ve site dokusu',
          text: 'Çayyolu\'nda evlerin çoğu villa ya da sitede, bahçe aydınlatması ve dış priz hatları arıza kaynağı olabiliyor.',
        },
        {
          title: 'Site ortak panosu',
          text: 'Ortak alan panosu ile villa içi tesisat karışabiliyor, ikisini ayrı ayrı kontrol ederiz.',
        },
        {
          title: 'Sincan\'a yakınlık',
          text: 'Çayyolu, merkezimize görece yakın, bu yüzden çağrılara hızlı çıkabiliyoruz.',
        },
      ],
      arrival: 'Sincan\'daki merkezimizden Çayyolu\'na 20-25 dakikada ulaşırız.',
      landmarks: [
        'Çayyolu Merkez',
        'Ümitköy sınırı',
        'Bilkent istikameti',
        'Konya yolu bağlantısı',
        'site girişleri',
      ],
      faq: [
        {
          q: 'Çayyolu\'nda villa bahçe aydınlatmasına bakıyor musunuz?',
          a: 'Evet, dış mekan aydınlatma ve priz hatlarını yerinde kontrol eder, kaçağı buluruz.',
        },
        {
          q: 'Site ortak panosu mu villa içi mi arızalı, nasıl anlarım?',
          a: 'İkisini ayrı ayrı test eder, sorunun kaynağını yerinde gösteririz.',
        },
        {
          q: 'Çayyolu\'na ne kadar sürede gelirsiniz?',
          a: 'Sincan\'a yakınlığımız sayesinde genellikle 20-25 dakikada ulaşırız.',
        },
      ],
      seoTitle: 'Çayyolu Acil Elektrikçi | Villa ve Site Arıza Servisi | Demir Elektrik',
      seoDescription: 'Çayyolu\'nda villa ve sitelerde acil elektrik arızasına aynı gün müdahale ederiz. Telefonda ön teşhis yapılır, işe başlamadan fiyat söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Ümitköy',
    slug: 'umitkoy-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Ümitköy Acil Elektrikçi',
      subtitle: 'Ümitköy\'de villa ve dubleks evlerde nem kaynaklı kaçak akıma aynı gün müdahale.',
      intro: [
        'Ümitköy\'de villa ve dubleks evler çoğunlukta. Bahçe aydınlatması, dış cephe prizleri ve bodrum katlar nemden en çok etkilenen bölgeler.',
        'Kaçak akım rölesi yağmurdan sonra sık atıyorsa neden genelde dış mekan hattındaki nem kaçağıdır. Telefonda kısa bir ön teşhisle geliriz, yerinde kaynağı buluruz.',
        'Dubleks evlerde kat arası kolon hattı ve avize, spot bağlantıları da arıza kaynağı olabilir. İşe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['villa-elektrik-servisi', 'kacak-akim-tespiti', 'avize-spot-montaji', 'sigorta-atmasi'],
      localNotes: [
        {
          title: 'Nem kaynaklı kaçak akım',
          text: 'Yağmur sonrası 30 mA kaçak akım rölesi atıyorsa çoğunlukla dış mekan hattındaki nem sebep olur.',
        },
        {
          title: 'Bahçe aydınlatması',
          text: 'Bahçe ve dış cephe priz hatları düzenli kontrol edilmezse zamanla nem alır, arızayı yerinde tespit ederiz.',
        },
        {
          title: 'Dubleks kolon hattı',
          text: 'Kat arası kolon hattı yükü kaldırmayınca sigorta sık atar, yerinde yük dağılımını kontrol ederiz.',
        },
      ],
      arrival: 'Sincan merkezimizden Ümitköy\'e 20-25 dakikada geliriz.',
      landmarks: [
        'Ümitköy Merkez',
        'Çayyolu sınırı',
        'villa siteleri',
        'bahçeli konut bölgeleri',
      ],
      faq: [
        {
          q: 'Yağmurdan sonra sigorta atıyor, sebebi ne olabilir?',
          a: 'Çoğunlukla dış mekan hattındaki nem kaçak akım rölesini tetikler, yerinde kontrol ederiz.',
        },
        {
          q: 'Bahçe aydınlatmasına bakıyor musunuz?',
          a: 'Evet, dış cephe ve bahçe hatlarını kontrol eder, arızayı yerinde gösteririz.',
        },
        {
          q: 'Dubleks evde kat arası sigorta sık atıyor, ne yapmalıyım?',
          a: 'Kolon hattı yükünü yerinde kontrol eder, tespit sonrası fiyatı söyleriz.',
        },
      ],
      seoTitle: 'Ümitköy Acil Elektrikçi | Villa ve Kaçak Akım Servisi | Demir Elektrik',
      seoDescription: 'Ümitköy\'de villa ve dubleks evlerde nem kaynaklı kaçak akım arızasına 08:00-23:00 arası aynı gün müdahale ederiz. Tespit sonrası fiyat söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Balgat',
    slug: 'balgat-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Balgat Acil Elektrikçi',
      subtitle: 'Balgat\'ta ofis, plaza ve rezidanslarda aynı gün elektrik arıza servisi.',
      intro: [
        'Balgat\'ta ticari ve konut dokusu iç içe. Plaza katlarında pano arızası, rezidanslarda ortak alan kesintisi sık karşılaştığımız çağrılar arasında.',
        'Ofis binalarında üç faz dengesizliği yaşanıyorsa klima ve aydınlatma hattı aynı anda etkilenir. Telefonda ön teşhis yapar, yerinde panoyu kontrol ederiz.',
        'Rezidans ve apartmanlarda ortak alan panosu ile daire içi hattı ayırt eder, işe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['isyeri-elektrik-servisi', 'elektrik-panosu-yenileme', 'bina-ortak-alan-elektrigi', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Plaza pano arızaları',
          text: 'Ofis katlarında pano eskiyse otomat sigorta sık atar, yerinde yük kontrolü yaparız.',
        },
        {
          title: 'Üç faz dengesizliği',
          text: 'Ticari birimlerde faz dengesizliği klima ve aydınlatmayı aynı anda etkileyebilir, yerinde ölçüm yaparız.',
        },
        {
          title: 'Rezidans ortak alanı',
          text: 'Ortak alan panosu ile daire içi hattı karışmasın diye ikisini ayrı ayrı test ederiz.',
        },
      ],
      arrival: 'Sincan\'daki merkezimizden Balgat\'a 30-40 dakikada ulaşırız.',
      landmarks: [
        'Balgat Merkez',
        'Mevlana Bulvarı çevresi',
        'Söğütözü sınırı',
        'plaza ve ofis binaları',
      ],
      faq: [
        {
          q: 'Plazada pano arızasına bakıyor musunuz?',
          a: 'Evet, ofis ve plaza panolarını yerinde kontrol eder, otomat sigortanın neden sık attığını buluruz.',
        },
        {
          q: 'Üç faz dengesizliği nasıl anlaşılır?',
          a: 'Panoda faz ölçümü yaparız, dengesizlik varsa yerinde gösteririz.',
        },
        {
          q: 'Rezidansta ortak alan mı daire mi arızalı?',
          a: 'İkisini ayrı ayrı kontrol eder, kaynağı yerinde belirleriz.',
        },
      ],
      seoTitle: 'Balgat Acil Elektrikçi | Plaza ve Rezidans Servisi | Demir Elektrik',
      seoDescription: 'Balgat\'ta ofis, plaza ve rezidanslarda acil elektrik arızasına aynı gün müdahale ederiz. Telefonda ön teşhis yapılır, fiyat sonra söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Dikmen',
    slug: 'dikmen-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Dikmen Acil Elektrikçi',
      subtitle: 'Dikmen\'de yamaç konutlar, dönüşüm siteleri ve eski apartmanlarda aynı gün elektrik servisi.',
      intro: [
        'Dikmen Vadisi çevresindeki yamaç konutlarda ve eski apartmanlarda tesisat yılların yükünü taşıyor. Sigorta sık atıyorsa çoğu zaman kolon hattı yetersiz kalıyor.',
        'Dönüşüm sitelerinde ortak alan panosu yeni olsa da site yönetimiyle koordineli çalışmak gerekiyor. Telefonda kısa ön teşhisle geliriz.',
        'Eğimli sokaklarda ulaşım biraz zaman alsa da aynı gün içinde Dikmen\'deki çağrılara çıkarız, işe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['bina-ortak-alan-elektrigi', 'elektrik-panosu-yenileme', 'sigorta-atmasi', 'ev-elektrik-tesisati'],
      localNotes: [
        {
          title: 'Eski apartman tesisatı',
          text: 'Yamaç konutlardaki eski bloklarda kolon hattı yıllar önce döşendi, yük artınca sigorta sık atar.',
        },
        {
          title: 'Dönüşüm siteleri',
          text: 'Yeni dönüşüm sitelerinde ortak alan panosu için site yönetimiyle birlikte çalışırız.',
        },
        {
          title: 'Yamaç ve eğim',
          text: 'Eğimli sokaklarda ulaşım biraz zaman alabilir, yine de aynı gün içinde geliriz.',
        },
      ],
      arrival: 'Sincan merkezimizden Dikmen\'e yaklaşık 40 dakikada ulaşırız.',
      landmarks: [
        'Dikmen Vadisi çevresi',
        'Dikmen Caddesi',
        'yamaç siteleri',
        'dönüşüm blokları',
      ],
      faq: [
        {
          q: 'Dikmen\'de eski apartmanda sigorta sık atıyor, nedeni ne?',
          a: 'Çoğunlukla kolon hattı yetersiz kalıyor, yerinde yük dağılımını kontrol ederiz.',
        },
        {
          q: 'Dönüşüm sitesinde ortak alan arızasına bakıyor musunuz?',
          a: 'Evet, site yönetimiyle koordineli olarak ortak alan panosunu kontrol ederiz.',
        },
        {
          q: 'Dikmen\'e ne kadar sürede gelirsiniz?',
          a: 'Genellikle 40 dakika içinde ulaşırız.',
        },
      ],
      seoTitle: 'Dikmen Acil Elektrikçi | Yamaç Konut ve Site Servisi | Demir Elektrik',
      seoDescription: 'Dikmen\'de yamaç konutlar, dönüşüm siteleri ve eski apartmanlarda acil elektrik arızasına aynı gün müdahale ederiz, tespit sonrası fiyat söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Çukurambar',
    slug: 'cukurambar-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Çukurambar Acil Elektrikçi',
      subtitle: 'Çukurambar\'da rezidans, restoran ve ofislerde aynı gün elektrik arıza servisi.',
      intro: [
        'Çukurambar\'da lüks rezidanslar, restoranlar ve ofis binaları iç içe. Dekoratif aydınlatma ve ray spot hatları en sık arıza gelen noktalar arasında.',
        'Restoranlarda vitrin ve salon aydınlatması aynı sigortaya bağlıysa bir arıza tüm hattı etkiler. Telefonda ön teşhis yapar, yerinde ayrı hat önerisi sunarız.',
        'Rezidanslarda ortak alan panosu ile daire içi tesisatı ayrı ayrı kontrol eder, işe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['avize-spot-montaji', 'isyeri-elektrik-servisi', 'elektrik-kesintisi', 'elektrik-panosu-yenileme'],
      localNotes: [
        {
          title: 'Dekoratif aydınlatma',
          text: 'Ray spot ve dekoratif aydınlatma hatlarında aşırı yük sık görülür, yerinde kontrol ederiz.',
        },
        {
          title: 'Restoran vitrin hattı',
          text: 'Vitrin ve salon aydınlatması aynı sigortaya bağlıysa arıza tüm hattı etkiler, ayrı hat öneririz.',
        },
        {
          title: 'Rezidans ortak alanı',
          text: 'Ortak alan panosu ile daire içi hattı karışmaması için ikisini ayrı test ederiz.',
        },
      ],
      arrival: 'Sincan\'daki merkezimizden Çukurambar\'a 30-40 dakikada ulaşırız.',
      landmarks: [
        'Turan Güneş Bulvarı çevresi',
        'Mevlana Bulvarı istikameti',
        'rezidans blokları',
        'plaza ve ofis hattı',
        'restoran sokakları',
      ],
      faq: [
        {
          q: 'Restoranda vitrin ışıkları sürekli sönüyor, bakar mısınız?',
          a: 'Evet, vitrin ve salon hattını kontrol eder, aşırı yükü yerinde buluruz.',
        },
        {
          q: 'Rezidansta dekoratif aydınlatma arızasına bakıyor musunuz?',
          a: 'Evet, ray spot ve dekoratif hatları kontrol eder, tespit sonrası fiyatı söyleriz.',
        },
        {
          q: 'Ofisimde elektrik kesintisi sık yaşanıyor, nedeni ne olabilir?',
          a: 'Panoyu ve hat yükünü yerinde kontrol eder, kesintinin kaynağını buluruz.',
        },
      ],
      seoTitle: 'Çukurambar Acil Elektrikçi | Rezidans ve Ofis Servisi | Demir Elektrik',
      seoDescription: 'Çukurambar\'da rezidans, restoran ve ofislerde acil elektrik arızasına 08:00-23:00 arası aynı gün müdahale ederiz, işe başlamadan fiyat söylenir. 0506 092 58 16',
    },
  },
  {
    name: 'Oran',
    slug: 'oran-elektrikci',
    districtSlug: 'cankaya-elektrikci',
    content: {
      h1: 'Oran Acil Elektrikçi',
      subtitle: 'Oran\'da villa, lojman ve bahçeli konutlarda aynı gün elektrik arıza servisi.',
      intro: [
        'Oran Sitesi çevresinde villa ve lojman dokusu ağırlıkta. Bahçeli konutlarda dış mekan aydınlatması ve ortak alan hattı sık arıza kaynağı.',
        'Site yönetimleriyle koordineli çalışırız. Ortak alan panosu mu, villa içi hat mı sorumlu, telefonda kısa bir ön teşhisle başlar, yerinde netleştiririz.',
        'Oran\'a biraz uzak olsak da aynı gün içinde çağrınıza çıkarız, işe başlamadan önce fiyatı söyleriz.',
      ],
      highlightedServices: ['villa-elektrik-servisi', 'kacak-akim-tespiti', 'bina-ortak-alan-elektrigi', 'elektrik-kesintisi'],
      localNotes: [
        {
          title: 'Villa ve lojman dokusu',
          text: 'Oran\'da evlerin çoğu villa ya da lojman, bahçe aydınlatması sık arıza kaynağı oluyor.',
        },
        {
          title: 'Site ortak alanı',
          text: 'Ortak alan panosu ile villa içi tesisatı ayrı ayrı kontrol eder, site yönetimiyle koordine oluruz.',
        },
        {
          title: 'Bahçeli konutlar',
          text: 'Bahçeli konutlarda dış priz ve aydınlatma hatları düzenli kontrol edilmezse zamanla arıza verir.',
        },
      ],
      arrival: 'Sincan merkezimizden Oran\'a yaklaşık 40 dakikada ulaşırız.',
      landmarks: [
        'Oran Sitesi çevresi',
        'lojman bölgesi',
        'villa sokakları',
        'bahçeli konutlar',
      ],
      faq: [
        {
          q: 'Oran\'da villa bahçe aydınlatmasına bakıyor musunuz?',
          a: 'Evet, dış mekan aydınlatma ve priz hatlarını yerinde kontrol ederiz.',
        },
        {
          q: 'Site ortak panosu mu villa içi mi arızalı, nasıl anlarım?',
          a: 'İkisini ayrı ayrı test eder, sorunun kaynağını yerinde gösteririz.',
        },
        {
          q: 'Oran\'a ne kadar sürede gelirsiniz?',
          a: 'Genellikle 40 dakika içinde ulaşırız.',
        },
      ],
      seoTitle: 'Oran Acil Elektrikçi | Villa ve Lojman Arıza Servisi | Demir Elektrik',
      seoDescription: 'Oran\'da villa, lojman ve bahçeli konutlarda acil elektrik arızasına 08:00-23:00 arası aynı gün müdahale ederiz. Tespit sonrası fiyat söylenir. 0506 092 58 16',
    },
  },
];

import type { District, DistrictContent } from './types';

/**
 * İlçe / semt sayfaları — Ankara acil elektrik arıza servisi.
 * İçerikli 12 kayıt sayfa üretir; etiket kayıtları (content yok) yalnızca
 * "25 ilçenin tamamı" listesinde görünür.
 */
export const districts: District[] = [
  // ─────────────────────────────── SİNCAN ───────────────────────────────
  {
    name: 'Sincan',
    slug: 'sincan-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Sincan Acil Elektrikçi',
      subtitle: 'Merkezimiz Melih Gökçek Bulvarı\'nda; Sincan içinde çoğu çağrıya 10–20 dakikada varıyoruz.',
      intro: [
        'Sincan\'da sigorta attı, evin yarısı karanlık kaldı ya da prizden yanık kokusu geliyorsa arayın. Aracımız Melih Gökçek Bulvarı\'ndan çıkıyor; Fatih, Törekent, Plevne ve Pınarbaşı tarafına çoğu zaman çeyrek saatte ulaşıyoruz. Trafik en yoğun saatte bile Sincan sınırları içinde yarım saati geçmiyoruz.',
        'Sincan acil elektrikçi çağrılarının büyük kısmı akşam 18:00 sonrası geliyor: kombi devreye giriyor, fırın ve çamaşır makinesi aynı anda çalışıyor, eski apartmanlarda kolon sigortası dayanamıyor. Telefonda hangi sigortanın düştüğünü, hangi cihazın devrede olduğunu soruyoruz; bazen sorunu telefonda çözüyoruz, o zaman çıkış ücreti almıyoruz.',
        'Sincan elektrik arıza servisimiz 08:00–23:00 arası haftanın her günü açık. 30 yılı aşkın süredir bu ilçedeyiz; mahallelerin hangi yıllarda yapıldığını, hangi sitelerde hangi pano tipinin olduğunu biliyoruz. Bu yüzden çoğu arıza tek gelişte bitiyor.',
      ],
      highlightedServices: ['sigorta-atmasi', 'elektrik-kesintisi', 'kacak-akim-tespiti', 'fabrika-kumanda-panosu'],
      localNotes: [
        {
          title: 'Eski Sincan apartmanları: nötr ve kolon hattı',
          text: 'Fatih, Menderes ve Atatürk mahallelerindeki 90\'lı yıl apartmanlarında en sık gördüğümüz sorun gevşeyen nötr bağlantısı ve yetersiz kolon kesiti. Işıklar bir parlayıp bir sönüyorsa ya da bir daire sürekli sigorta attırıyorsa önce sayaç panosuna bakıyoruz.',
        },
        {
          title: 'Törekent ve Plevne TOKİ blokları',
          text: 'Toplu konut bloklarında kaçak akım rölesi tek noktada ve kolay düşüyor. Çamaşır makinesi ya da şofben çalışınca röle atıyorsa hangi hattın kaçırdığını cihazla ayırıyoruz; röleyi iptal etmiyoruz, sorunu buluyoruz.',
        },
        {
          title: 'Sincan Sanayi: fabrika kumanda panoları',
          text: 'Sincan Organize Sanayi ve sanayi sitesindeki fabrikalarda kumanda panosu arızalarına gün içinde bakıyoruz: yanan kontaktör, düşen termik, gevşeyen şalter bağlantısı, faz kaybı. Esnaf dükkânları için öğle arasına ya da mesai sonuna randevu veriyoruz.',
        },
      ],
      arrival: 'Melih Gökçek Bulvarı\'ndaki merkezimizden Sincan\'ın her mahallesine 10–20 dakika; Temelli ve Yenikent yönü akşam trafiğinde 25 dakikayı bulabilir.',
      neighborhoods: ['Menderes', 'Fatih', 'Törekent', 'Ahi Evran', 'Plevne', 'Pınarbaşı', 'Tandoğan', 'Osmanlı', 'Ertuğrulgazi', 'Akşemsettin', 'Yunus Emre', 'Mareşal Çakmak'],
      faq: [
        {
          q: 'Sincan\'da ne kadar sürede geliyorsunuz?',
          a: 'Merkezimiz Sincan\'da olduğu için genellikle 10–20 dakika içinde kapınızdayız. Aradığınızda o anki konumumuza göre net bir süre söylüyoruz.',
        },
        {
          q: 'Akşam geç saatte sigorta atarsa geliyor musunuz?',
          a: 'Evet. 23:00\'e kadar çağrı alıyoruz ve Sincan içindeki çağrılara aynı akşam çıkıyoruz. Yanık kokusu ya da kıvılcım varsa ana şalteri indirip bizi arayın.',
        },
        {
          q: 'Gelmeden önce fiyat söylüyor musunuz?',
          a: 'Yerinde tespit yapmadan kesin rakam vermiyoruz; ama tespit sonrası ne yapılacağını ve ücretini söyleyip onayınızı alıyoruz. Onay olmadan işe başlamıyoruz.',
        },
      ],
      seoTitle: 'Sincan Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Sincan acil elektrikçi: sigorta atması, elektrik kesintisi, kaçak akım ve priz arızasına 10–20 dakikada müdahale. 08:00–23:00, her gün. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── YENİKENT ───────────────────────────────
  {
    name: 'Yenikent',
    slug: 'yenikent-elektrikci',
    type: 'semt',
    parent: 'Sincan',
    featured: true,
    content: {
      h1: 'Yenikent Acil Elektrikçi',
      subtitle: 'Sincan merkezden Ayaş Yolu üzerinden 15–20 dakikada Yenikent\'teyiz.',
      intro: [
        'Yenikent\'te elektrik arızası için Ankara merkezden ekip beklemenize gerek yok. Sincan\'daki merkezimizden Ayaş Yolu\'na çıkıp Yenikent Merkez\'e 15 dakikada varıyoruz. Sanayi sitesi ve Alcı yönüne 20 dakikayı geçmiyoruz.',
        'Yenikent acil elektrikçi çağrılarında iki grup öne çıkıyor: müstakil ve bahçeli evlerde dış aydınlatma ile kuyu pompası hatlarındaki kaçak, sanayi sitesinde ise üç faz şalter ve kompanzasyon arızaları. İkisi için de gerekli malzeme aracımızda hazır.',
        'Yenikent elektrik arıza servisimiz 08:00–23:00 arası açık. Aradığınızda önce telefonda sorunun nerede olduğunu daraltıyoruz; sonra aynı gün geliyoruz.',
      ],
      highlightedServices: ['acil-elektrikci', 'kacak-akim-tespiti', 'fabrika-kumanda-panosu', 'elektrik-kesintisi'],
      localNotes: [
        {
          title: 'Bahçeli evlerde dış hat kaçağı',
          text: 'Yenikent\'in müstakil evlerinde bahçe aydınlatması, sulama pompası ve garaj hattı genellikle toprak altından geçiyor. Yağmur sonrası kaçak akım rölesi düşüyorsa hattı bölüm bölüm ayırıp kaçağın hangi noktada olduğunu buluyoruz.',
        },
        {
          title: 'Yenikent Sanayi Sitesi',
          text: 'Sanayi sitesindeki fabrika ve atölyelerde kumanda panosu arızaları öne çıkıyor: faz kaybı, gevşeyen şalter bağlantısı, yanan kontaktör, düşen termik. Üretim dururken sizi bekletmemek için sanayi çağrılarını önceliklendiriyoruz.',
        },
        {
          title: 'Yeni yapılan sitelerde ankastre ve klima hattı',
          text: 'Son yıllarda açılan sitelerde daire teslim edilirken ankastre ocak ve klima için ayrı hat çekilmemiş oluyor. Priz üzerinden çalıştırılan ocak sigorta attırıyor; panodan bağımsız hat çekip sorunu kalıcı çözüyoruz.',
        },
      ],
      arrival: 'Sincan merkezden Ayaş Yolu üzerinden Yenikent Merkez\'e 15 dakika, Alcı ve sanayi sitesi yönüne 20 dakika.',
      neighborhoods: ['Yenikent Merkez', 'Yenikent Sanayi Sitesi', 'Alcı', 'İlyakut', 'Ücret', 'Saraycık', 'Ayaş Yolu Caddesi', 'Yenikent TOKİ Konutları'],
      faq: [
        {
          q: 'Yenikent\'e aynı gün geliyor musunuz?',
          a: 'Evet. Sincan\'daki merkezimizden 15–20 dakikada Yenikent\'teyiz. Sabah 08:00 ile akşam 23:00 arasında aradığınızda aynı gün geliyoruz.',
        },
        {
          q: 'Bahçe aydınlatmasında kaçak var, rölemiz atıyor. Bulabilir misiniz?',
          a: 'Evet. Hatları teker teker ayırıp ölçüm yapıyoruz; kaçağın armatürde mi, toprak altındaki kabloda mı olduğunu tespit edip onarıyoruz.',
        },
        {
          q: 'Atölyemizde bir faz gitti, ne yapmalıyız?',
          a: 'Üç fazlı cihazları hemen kapatın; tek fazla çalışan cihaz kısa sürede yanar. Bizi arayın, kumanda panosunu, şalteri ve sayaç girişini kontrol edip gün içinde hattı normale döndürüyoruz.',
        },
      ],
      seoTitle: 'Yenikent Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Yenikent acil elektrikçi: kaçak akım, sigorta atması, bahçe hattı ve sanayi arızalarına Sincan\'dan 15–20 dakikada ulaşıyoruz. 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── ETİMESGUT ───────────────────────────────
  {
    name: 'Etimesgut',
    slug: 'etimesgut-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Etimesgut Acil Elektrikçi',
      subtitle: 'Sincan\'a komşuyuz; Elvankent, Bağlıca ve Etimesgut merkeze 15–25 dakikada varıyoruz.',
      intro: [
        'Etimesgut\'ta elektrik arızası için en yakın ekiplerden biriyiz. Merkezimiz Sincan Melih Gökçek Bulvarı\'nda; İstanbul Yolu ya da Eryaman hattı üzerinden Etimesgut merkez, Elvankent ve Ahimesut\'a 15–20 dakikada, Bağlıca ve Göksu tarafına 25 dakikada ulaşıyoruz.',
        'Etimesgut acil elektrikçi çağrılarının çoğu yeni sitelerden geliyor: klima hattı olmayan daireler, teslimde eksik bırakılan ankastre hattı, ilk kışta düşen kaçak akım rölesi. Eski Etimesgut merkezde ise askeri lojman dönemi binalarının panoları ve kolon hatları öne çıkıyor.',
        'Etimesgut elektrik arıza servisimiz 08:00–23:00 arası açık. Telefonda birkaç soruyla sorunu daraltıyor, aynı gün geliyor, standart parçayı aracımızdan takıyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'ev-elektrik-tesisati', 'kacak-akim-tespiti', 'elektrik-panosu-yenileme'],
      localNotes: [
        {
          title: 'Bağlıca ve Göksu\'da yeni site daireleri',
          text: 'Bu bölgedeki sitelerde en sık istek klima ve ankastre için panodan ayrı hat. Priz hattına bağlanan klima yaz sıcağında sigorta attırıyor. Daire panosuna uygun kesitte kablo ve sigortayla bağımsız hat çekiyoruz.',
        },
        {
          title: 'Etimesgut merkezde eski lojman tipi binalar',
          text: 'Merkez, İstasyon ve Şeyh Şamil taraflarındaki eski binalarda buşonlu sigorta ve topraksız tesisat hâlâ var. Sigortayı otomat ve kaçak akım röleli kompakt panoyla değiştirip binayı güvenli hale getiriyoruz.',
        },
        {
          title: 'Site yönetimleri için ortak alan',
          text: 'Etimesgut\'ta birçok site yönetimiyle çalışıyoruz: asansör besleme, hidrofor, otopark aydınlatması ve merdiven otomatiği arızalarına yöneticinin tek telefonuyla gün içinde bakıyoruz.',
        },
      ],
      arrival: 'Sincan merkezden Etimesgut merkez, Elvankent ve Ahimesut\'a 15–20 dakika; Bağlıca, Göksu ve Alsancak yönüne 25 dakika, İstanbul Yolu akşam trafiğinde biraz daha uzayabilir.',
      neighborhoods: ['Elvankent', 'Bağlıca', 'Göksu', 'Atakent', 'Ahimesut', 'Şeyh Şamil', 'Piyade', 'Süvari', 'Topçu', 'Yavuz Selim', 'Alsancak', 'Oğuzlar'],
      faq: [
        {
          q: 'Etimesgut\'a ne kadar sürede geliyorsunuz?',
          a: 'Merkezimiz komşu ilçe Sincan\'da; Etimesgut\'un çoğu mahallesine 15–25 dakikada ulaşıyoruz. Aradığınızda o anki konuma göre net süre veriyoruz.',
        },
        {
          q: 'Klima için ayrı hat çekiyor musunuz, aynı gün mü?',
          a: 'Evet. Panodan klima konumuna kadar bağımsız hat çekiyoruz. Malzeme aracımızda olduğu için çoğu dairede aynı gün bitiyor.',
        },
        {
          q: 'Site yönetimi olarak sürekli çalışabileceğimiz bir elektrikçi arıyoruz.',
          a: 'Etimesgut\'ta birçok siteye bakıyoruz. Yöneticinin bizi araması yeterli; ortak alan arızalarına gün içinde geliyor, yapılan işi yazılı raporluyoruz.',
        },
      ],
      seoTitle: 'Etimesgut Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Etimesgut acil elektrikçi: sigorta atması, kaçak akım, klima hattı, pano yenileme. Sincan\'dan 15–25 dakikada, 08:00–23:00 her gün. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── ERYAMAN ───────────────────────────────
  {
    name: 'Eryaman',
    slug: 'eryaman-elektrikci',
    type: 'semt',
    parent: 'Etimesgut',
    featured: true,
    content: {
      h1: 'Eryaman Acil Elektrikçi',
      subtitle: 'Eryaman\'ın tüm etaplarına Sincan\'dan 15–20 dakikada, aynı gün geliyoruz.',
      intro: [
        'Eryaman\'da elektrik gitti, sigorta kaldırınca yine atıyor ya da bir odada prizler çalışmıyor mu? Sincan\'dan Eryaman Bulvarı\'na çıkıp 1. Etap\'tan 7. Etap\'a kadar hepsine 15–20 dakikada varıyoruz. Göksu Parkı çevresi ve Güzelkent tarafı bize en yakın noktalar.',
        'Eryaman acil elektrikçi çağrıları çoğunlukla toplu konut bloklarından geliyor. Aynı proje aynı panoyu kullandığı için hangi etapta hangi sigorta tipinin olduğunu biliyoruz; yedek parça araçta hazır, ikinci gelişe gerek kalmıyor.',
        'Eryaman elektrik arıza servisimiz 08:00–23:00 arası, haftanın 7 günü açık. Hafta sonu Eryaman\'daki çağrı yoğunluğunu bildiğimiz için cumartesi ve pazar bölgeye ayrı zaman ayırıyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'elektrik-kesintisi', 'priz-anahtar-tamiri', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Etap bloklarında aynı tip pano',
          text: 'Eryaman 1–4. etaplarda 90\'lı yıl blokları var; daire panolarındaki eski otomatlar yaşlandıkça ısınıp düşüyor. Sigortayı aynı akım değerinde yenisiyle değiştiriyor, panodaki gevşek klemensleri sıkıyoruz. Yirmi dakikalık iş.',
        },
        {
          title: 'Kaçak akım rölesi olmayan daireler',
          text: 'Eski etaplardaki bazı dairelerde hiç kaçak akım rölesi yok. Banyoda çarpma hissi ya da çamaşır makinesinin gövdesinde elektrik varsa röle takıp topraklamayı ölçüyoruz.',
        },
        {
          title: 'Hafta sonu çağrıları',
          text: 'Eryaman\'da cumartesi ve pazar çağrıları hafta içinin iki katı. Avize montajı, priz değişimi, sigorta yenileme gibi işleri hafta sonuna alıyoruz; acil arızada öncelik her zaman kesinti ve kaçak akımda.',
        },
      ],
      arrival: 'Sincan merkezden Eryaman Bulvarı üzerinden 1–4. etaplara 15 dakika, 5–7. etaplar ve Güzelkent\'e 20 dakika.',
      neighborhoods: ['Eryaman 1. Etap', 'Eryaman 2. Etap', 'Eryaman 3. Etap', 'Eryaman 4. Etap', 'Eryaman 5. Etap', 'Eryaman 6. Etap', 'Eryaman 7. Etap', 'Güzelkent', 'Ayyıldız', 'Fatih Sultan', 'Tunahan', 'Altay'],
      faq: [
        {
          q: 'Eryaman\'a hafta sonu geliyor musunuz?',
          a: 'Evet. Cumartesi ve pazar dahil 08:00–23:00 arası çalışıyoruz. Eryaman\'a hafta sonu Sincan\'dan 15–20 dakikada ulaşıyoruz.',
        },
        {
          q: 'Sigorta kaldırınca birkaç saniye sonra yine atıyor, ne yapmalıyım?',
          a: 'Tekrar kaldırmayın. Çamaşır makinesi, bulaşık makinesi ve şofben gibi cihazları fişten çekin, bizi arayın. Telefonda hangi hattın sorunlu olduğunu birlikte daraltıyoruz.',
        },
        {
          q: 'Dairemizde kaçak akım rölesi yok, takılması ne kadar sürer?',
          a: 'Daire panosunda yer varsa yaklaşık yarım saat. Röleyi taktıktan sonra topraklamayı ölçüp röle testini yapıyoruz.',
        },
      ],
      seoTitle: 'Eryaman Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Eryaman acil elektrikçi: sigorta atması, elektrik kesintisi, priz ve kaçak akım arızasına etaplara 15–20 dk. Hafta sonu dahil 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── YENİMAHALLE ───────────────────────────────
  {
    name: 'Yenimahalle',
    slug: 'yenimahalle-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Yenimahalle Acil Elektrikçi',
      subtitle: 'Demetevler\'den Ostim\'e, Şentepe\'den Çamlıca\'ya 20–30 dakikada elektrik arıza servisi.',
      intro: [
        'Yenimahalle\'de elektrik arızası olduğunda İstanbul Yolu bize ana hat. Sincan\'dan çıkıp Ostim ve İvedik\'e 20 dakikada, Demetevler, Karşıyaka ve Ragıp Tüzün\'e 25 dakikada, Şentepe ve Çamlıca\'nın üst taraflarına 30 dakikada varıyoruz.',
        'Yenimahalle acil elektrikçi çağrılarında ilçenin iki yüzünü görüyoruz: Demetevler ve Yeşilevler\'in yoğun apartmanlarında kolon hattı ve sayaç panosu sorunları; Ostim ve İvedik\'te fabrika kumanda panosu, üç faz besleme ve kompanzasyon arızaları. İkisine de aynı araçla, aynı gün gidiyoruz.',
        'Yenimahalle elektrik arıza servisimiz 08:00–23:00 arası açık. Esnaf ve atölye için mesai saatinde, konutlar için akşam saatlerinde yoğunluk oluyor; ikisini de planlayarak sıraya alıyoruz.',
      ],
      highlightedServices: ['elektrik-kesintisi', 'fabrika-kumanda-panosu', 'isyeri-elektrik-servisi', 'sigorta-atmasi'],
      localNotes: [
        {
          title: 'Demetevler ve Yeşilevler\'de kolon hattı',
          text: 'Yoğun ve eski apartmanlarda kolon hattı yılların yüküyle kesit olarak yetersiz kalıyor. Kombi ve klima eklendikçe sayaç panosunda ısınma başlıyor. Kolon sigortası yerine önce gevşek bağlantıyı ve kesiti kontrol ediyoruz.',
        },
        {
          title: 'Ostim ve İvedik\'te fabrika kumanda panoları',
          text: 'Kumanda panosunda yanan kontaktör, düşen termik, faz kaybı ve kompanzasyon uyarıları için mesai içinde çıkıyoruz. Üretim durmasın diye tespiti telefonda başlatıp kontaktör, termik ve sigortayı araçta hazır getiriyoruz.',
        },
        {
          title: 'Şentepe ve Çamlıca\'da dönüşüm binaları',
          text: 'Kentsel dönüşümle yenilenen binalarda topraklama ve kaçak akım rölesi var ama daire içi bağlantılar aceleyle yapılmış olabiliyor. Sürekli düşen röle çoğu zaman gevşek nötrden kaynaklanıyor; onu bulup sıkıyoruz.',
        },
      ],
      arrival: 'Sincan merkezden İstanbul Yolu üzerinden Ostim ve İvedik\'e 20 dakika, Demetevler ve Karşıyaka\'ya 25 dakika, Şentepe ve Çamlıca\'ya 30 dakika; akşam trafiği süreyi uzatabilir.',
      neighborhoods: ['Demetevler', 'Çamlıca', 'Ostim', 'İvedik OSB', 'Şentepe', 'Yeşilevler', 'Karşıyaka', 'Ragıp Tüzün', 'Barış', 'Emniyet', 'Gazi', 'Beştepe'],
      faq: [
        {
          q: 'Yenimahalle\'ye ne kadar sürede geliyorsunuz?',
          a: 'Sincan\'dan İstanbul Yolu ile 20–30 dakika. Ostim ve İvedik tarafı 20 dakika, Şentepe ve Çamlıca 30 dakikayı bulabiliyor.',
        },
        {
          q: 'Ostim\'de fabrikamızın kumanda panosunda sorun var, mesai içinde gelebilir misiniz?',
          a: 'Evet. Fabrika ve atölye çağrılarına öncelik veriyoruz. Faz kaybında üç fazlı cihazları kapatın; kumanda panosunu, şalteri ve sayaç girişini kontrol edip hattı normale döndürüyoruz.',
        },
        {
          q: 'Apartmanımızda bütün dairelerin ışığı titriyor, kime ait sorun?',
          a: 'Bütün daireler etkileniyorsa sorun bina girişi ya da kolon hattında. Sayaç panosunu ve nötr bağlantılarını kontrol ediyoruz; şebeke kaynaklıysa başkent dağıtım şirketine yönlendiriyoruz.',
        },
      ],
      seoTitle: 'Yenimahalle Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Yenimahalle acil elektrikçi: elektrik kesintisi, sigorta atması, iş yeri, fabrika panosu. Demetevler, Ostim, Şentepe 20–30 dk, 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── BATIKENT ───────────────────────────────
  {
    name: 'Batıkent',
    slug: 'batikent-elektrikci',
    type: 'semt',
    parent: 'Yenimahalle',
    featured: true,
    content: {
      h1: 'Batıkent Acil Elektrikçi',
      subtitle: 'Kentkoop, Ergazi ve Pamuklar\'a Sincan\'dan 20–25 dakikada elektrik arıza servisi.',
      intro: [
        'Batıkent\'te sigorta attı, ışıklar titriyor ya da bir odada priz çalışmıyorsa arayın. Sincan merkezden İstanbul Yolu ile Batıkent\'e 20 dakikada, Yeni Batı ve Çakırlar tarafına 25 dakikada varıyoruz. Batıkent bize en yakın Yenimahalle semti.',
        'Batıkent acil elektrikçi çağrıları çoğunlukla kooperatif bloklarından geliyor. 80\'li ve 90\'lı yıllarda yapılan bu bloklarda daire panoları ve kolon hatları otuz yılı aştı; otomatlar yorulmuş, klemensler gevşemiş oluyor. Hangi kooperatifte hangi panonun olduğunu biliyoruz.',
        'Batıkent elektrik arıza servisimiz 08:00–23:00 arası, her gün. Telefonda ön teşhis yapıyor, aynı gün geliyor, gerekli sigorta ve röleyi aracımızdan takıyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'elektrik-panosu-yenileme', 'kacak-akim-tespiti', 'avize-spot-montaji'],
      localNotes: [
        {
          title: 'Kooperatif bloklarında yorulmuş daire panoları',
          text: 'Kentkoop, Ergazi ve Pamuklar\'daki bloklarda ilk gün takılan otomat sigortalar hâlâ görevde. Isınıp düşen otomatı ve kaçak akım rölesi olmayan panoyu yeniliyoruz; iş bir saati geçmiyor.',
        },
        {
          title: 'Metro çevresinde dönüşen konutlar',
          text: 'Batıkent metro hattı boyunca yenilenen binalarda daireler modern ama ortak alan panoları eski kalmış olabiliyor. Asansör ve hidrofor beslemesi düşüyorsa bina panosunu kontrol ediyoruz.',
        },
        {
          title: 'Aydınlatma yenileme talepleri',
          text: 'Batıkent\'te taşınma ve tadilat yoğun; avize, spot ve LED panel montajı sık geliyor. Arıza çağrısı yoksa bu işleri hafta içi öğleden sonra ya da hafta sonuna randevuluyoruz.',
        },
      ],
      arrival: 'Sincan merkezden İstanbul Yolu ile Batıkent merkeze 20 dakika, Yeni Batı ve Çakırlar yönüne 25 dakika; İstanbul Yolu akşam 17:00–19:00 arasında 30 dakikayı bulabilir.',
      neighborhoods: ['Kentkoop', 'Ergazi', 'Pamuklar', 'Burç', 'Kardelen', 'Ergenekon', 'Mehmet Akif Ersoy', 'Turgut Özal', 'Yeni Batı', 'Çakırlar', 'Çiğdemtepe'],
      faq: [
        {
          q: 'Batıkent\'e kaç dakikada geliyorsunuz?',
          a: 'Sincan\'dan İstanbul Yolu ile 20–25 dakika. Akşam trafiğinde 30 dakikayı bulabilir; aradığınızda gerçekçi süre söylüyoruz.',
        },
        {
          q: 'Daire panomuz otuz yıllık, yenilemek gerekiyor mu?',
          a: 'Otomatlar ısınıp düşüyorsa ya da kaçak akım rölesi yoksa evet. Yerinde bakıp durumu söylüyoruz; sağlam pano için yenileme önermiyoruz.',
        },
        {
          q: 'Avize taktırmak için de gelir misiniz?',
          a: 'Evet. Avize, spot ve LED montajını Batıkent\'te hafta içi ve hafta sonu yapıyoruz. Arıza çağrılarına öncelik verdiğimiz için montaja saat veriyoruz.',
        },
      ],
      seoTitle: 'Batıkent Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Batıkent acil elektrikçi: sigorta atması, pano yenileme, kaçak akım ve avize montajı. Kentkoop, Ergazi\'ye 20–25 dakikada, 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── ÇANKAYA ───────────────────────────────
  {
    name: 'Çankaya',
    slug: 'cankaya-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Çankaya Acil Elektrikçi',
      subtitle: 'Çayyolu\'ndan Kızılay\'a, Bahçelievler\'den Dikmen\'e 30–45 dakikada aynı gün müdahale.',
      intro: [
        'Çankaya\'da elektrik arızası için Sincan\'dan çıkıyoruz; Çayyolu, Ümitköy ve Beysukent\'e Eskişehir Yolu ile 30 dakikada, Bahçelievler, Emek ve Kızılay\'a 35–40 dakikada, Dikmen ve Oran\'a 45 dakikada varıyoruz. Aradığınızda yol durumuna göre net süre söylüyoruz.',
        'Çankaya acil elektrikçi çağrıları ilçenin yapısına göre değişiyor. Kızılay, Kavaklıdere ve Bahçelievler\'deki 60\'lı ve 70\'li yıl apartmanlarında alüminyum kablo, topraksız tesisat ve buşonlu sigorta hâlâ karşımıza çıkıyor. Çayyolu ve Beysukent\'teki sitelerde ise klima hattı, ankastre ve villa bahçe kaçağı öne çıkıyor.',
        'Çankaya elektrik arıza servisimiz 08:00–23:00 arası açık. Ofis ve dükkân çağrılarını mesai içinde, konutları akşam saatlerinde topluyoruz; aynı gün geliyoruz.',
      ],
      highlightedServices: ['acil-elektrikci', 'kacak-akim-tespiti', 'villa-elektrik-servisi', 'isyeri-elektrik-servisi'],
      localNotes: [
        {
          title: 'Kızılay ve Kavaklıdere\'de eski apartmanlar',
          text: 'Elli yılı aşmış binalarda alüminyum kablo ve gevşek ek noktaları ısınıyor; duvarda sıcak nokta ya da yanık kokusu varsa hattı açıp bakıyoruz. Buşonlu sigortayı otomat ve kaçak akım röleli panoyla değiştiriyoruz.',
        },
        {
          title: 'Çayyolu ve Beysukent villaları',
          text: 'Bahçe aydınlatması, havuz pompası ve otomatik kapı hatları yağmurdan sonra röleyi düşürüyor. Hatları ayırıp kaçağı bulan cihazla ilerliyoruz; sağlam hatları kapatmadan sorunlu bölümü onarıyoruz.',
        },
        {
          title: 'Ofis ve dükkânlar',
          text: 'Kızılay, Çukurambar ve Balgat\'taki ofislerde UPS hattı, sunucu odası beslemesi ve aydınlatma arızalarına mesai saatinde çıkıyoruz. İşiniz aksamasın diye sabah erken ya da öğle arası randevu da veriyoruz.',
        },
      ],
      arrival: 'Sincan merkezden Eskişehir Yolu ile Çayyolu ve Ümitköy\'e 30 dakika, Bahçelievler ve Kızılay\'a 35–40 dakika, Dikmen ve Oran\'a 45 dakika; Eskişehir Yolu akşam trafiği süreyi uzatabilir.',
      neighborhoods: ['Kızılay', 'Bahçelievler', 'Emek', 'Çukurambar', 'Ayrancı', 'Gaziosmanpaşa', 'Oran', 'Dikmen', 'Çayyolu', 'Ümitköy', 'Beysukent', 'Balgat'],
      faq: [
        {
          q: 'Çankaya\'ya kaç dakikada geliyorsunuz?',
          a: 'Sincan\'dan Eskişehir Yolu ile Çayyolu tarafına 30 dakika, Kızılay ve Bahçelievler\'e 35–40 dakika, Dikmen ve Oran\'a 45 dakika. Trafiğe göre net süre veriyoruz.',
        },
        {
          q: 'Eski apartmanımızda tesisat alüminyum, tamamen değiştirmek şart mı?',
          a: 'Her zaman değil. Isınan ek noktalarını ve panoyu yenileyerek güvenli hale getirmek çoğu zaman yeterli. Yerinde ölçüp ne gerektiğini net söylüyoruz.',
        },
        {
          q: 'Villamızda bahçe hattı yüzünden röle atıyor, bulabilir misiniz?',
          a: 'Evet. Bahçe, havuz ve garaj hatlarını sırayla ayırıp ölçüyoruz; kaçağın olduğu bölümü onarıp diğer hatları çalışır bırakıyoruz.',
        },
      ],
      seoTitle: 'Çankaya Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Çankaya acil elektrikçi: kaçak akım, villa ve iş yeri arızasına 30–45 dakikada. Çayyolu, Kızılay, Bahçelievler, Dikmen. 08:00–23:00 her gün. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── KEÇİÖREN ───────────────────────────────
  {
    name: 'Keçiören',
    slug: 'kecioren-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Keçiören Acil Elektrikçi',
      subtitle: 'Etlik, Ayvalı, Ovacık ve Bağlum\'a 30–45 dakikada elektrik arıza servisi.',
      intro: [
        'Keçiören\'de sigorta atması, elektrik kesintisi ya da kaçak akım için Sincan\'dan çevre yolu ile çıkıyoruz. Etlik ve Kalaba\'ya 30–35 dakikada, Ayvalı, Ovacık ve Şenlik\'e 40 dakikada, Bağlum\'a 45 dakikada varıyoruz.',
        'Keçiören acil elektrikçi çağrılarının çoğu akşam 19:00 sonrası, kombinin devreye girdiği ve mutfağın yoğun olduğu saatte geliyor. İlçenin yüksek yoğunluklu apartmanlarında kolon hattı ve sayaç panosu sorunları öne çıkıyor; yeni yapılan Bağlum ve Ovacık sitelerinde ise klima hattı ve kaçak akım rölesi çağrıları.',
        'Keçiören elektrik arıza servisimiz 08:00–23:00 arası açık. Telefonda hangi sigortanın düştüğünü ve hangi cihazın çalıştığını soruyoruz; aynı gün geliyor, standart parçayı aracımızdan takıyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'elektrik-kesintisi', 'bina-ortak-alan-elektrigi', 'priz-anahtar-tamiri'],
      localNotes: [
        {
          title: 'Yoğun apartmanlarda sayaç panosu',
          text: 'Etlik, Aktepe ve Subayevleri\'ndeki çok daireli binalarda sayaç panosu bir sonraki kombi ve klimayı kaldıramıyor. Işık titremesi ve akşam düşen kolon sigortası buradan başlıyor; panoyu ve nötr barasını kontrol edip gerekeni yapıyoruz.',
        },
        {
          title: 'Site yönetimleri: asansör ve hidrofor',
          text: 'Keçiören\'de birçok site yönetimi için ortak alan elektriğine bakıyoruz. Asansör beslemesi düşmesi, hidrofor motoru ve otopark aydınlatması için yönetici aradığında gün içinde geliyoruz.',
        },
        {
          title: 'Bağlum ve Ovacık\'ta yeni siteler',
          text: 'Yeni teslim dairelerde klima ve ankastre için hazır hat olmayabiliyor. Priz hattına bağlanan klima yazın sigorta attırıyor; panodan bağımsız hat çekip sorunu kalıcı çözüyoruz.',
        },
      ],
      arrival: 'Sincan merkezden çevre yolu ile Etlik ve Kalaba\'ya 30–35 dakika, Ayvalı, Ovacık ve Şenlik\'e 40 dakika, Bağlum\'a 45 dakika; akşam trafiğinde süre uzayabilir.',
      neighborhoods: ['Etlik', 'Ayvalı', 'Ovacık', 'Kalaba', 'Aktepe', 'Subayevleri', 'Bağlum', 'Tepebaşı', 'Şenlik', 'Esertepe', 'Kuşcağız', 'Güçlükaya'],
      faq: [
        {
          q: 'Keçiören\'e ne kadar sürede geliyorsunuz?',
          a: 'Sincan\'dan çevre yolu ile 30–45 dakika. Etlik tarafı daha yakın, Bağlum en uzak nokta. Aradığınızda gerçekçi süre söylüyoruz.',
        },
        {
          q: 'Akşam kombi çalışınca sigorta atıyor, kombi mi bozuk?',
          a: 'Genellikle hayır. Kombiyle birlikte devreye giren yükü sigorta ya da gevşek bağlantı kaldıramıyor. Sigortayı ve panoyu kontrol ediyoruz; kombi kaynaklıysa söylüyoruz.',
        },
        {
          q: 'Site yönetimi olarak sürekli çalışabilir miyiz?',
          a: 'Evet. Keçiören\'de birçok siteyle çalışıyoruz. Yönetici tek telefonla arıyor, ortak alan arızasına gün içinde geliyor, işi yazılı raporluyoruz.',
        },
      ],
      seoTitle: 'Keçiören Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Keçiören acil elektrikçi: sigorta atması, elektrik kesintisi, priz arızası ve site ortak alanı. Etlik, Ayvalı, Bağlum 30–45 dk. 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── MAMAK ───────────────────────────────
  {
    name: 'Mamak',
    slug: 'mamak-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Mamak Acil Elektrikçi',
      subtitle: 'Abidinpaşa, Tuzluçayır, Kayaş ve Ege Mahallesi\'ne 40–50 dakikada aynı gün müdahale.',
      intro: [
        'Mamak\'ta elektrik arızası için Sincan\'dan Samsun Yolu tarafına geçiyoruz. Abidinpaşa, Demirlibahçe ve Saimekadın\'a 40 dakikada, Tuzluçayır, Ege ve Şahintepe\'ye 45 dakikada, Kayaş ve Lalahan\'a 50 dakikada varıyoruz. Süre uzun görünse de aradığınız gün geliyoruz.',
        'Mamak acil elektrikçi çağrılarında en sık gördüğümüz durum, gecekondu dönüşümüyle yenilenen binalarda daire içi tesisat ile bina panosunun aynı hızda yenilenmemiş olması. Yeni dairede kaçak akım rölesi var ama bina girişindeki kolon eski; röle akşamları sürekli düşüyor.',
        'Mamak elektrik arıza servisimiz 08:00–23:00 arası açık. Bölgeye uzaktan geldiğimiz için telefonda ön teşhisi daha uzun tutuyoruz; böylece gerekli parçayı yanımızda getiriyor, tek gelişte bitiriyoruz.',
      ],
      highlightedServices: ['elektrik-kesintisi', 'kacak-akim-tespiti', 'elektrik-panosu-yenileme', 'ev-elektrik-tesisati'],
      localNotes: [
        {
          title: 'Dönüşüm bölgelerinde eski kolon, yeni daire',
          text: 'Tuzluçayır, Ege ve Şahintepe\'de yenilenen binalarda sorun daire içinde değil bina girişinde oluyor. Sayaç panosundaki gevşek nötr ya da yetersiz kolon kesiti yüzünden daire röleleri düşüyor; sorunu kaynağında çözüyoruz.',
        },
        {
          title: 'Kayaş ve Lalahan\'da müstakil evler',
          text: 'Bahçeli ve müstakil evlerde dış aydınlatma, kuyu pompası ve depo hattı toprak altından geçiyor. Yağmur sonrası atan röle için hatları ayırıp kaçağı buluyoruz.',
        },
        {
          title: 'Abidinpaşa ve Demirlibahçe\'de eski tesisat',
          text: 'Eski Mamak apartmanlarında topraksız priz ve buşonlu sigorta hâlâ var. Çarpan cihaz ya da sürekli atan sigorta varsa panoyu otomat ve kaçak akım röleli hale getiriyor, gerekirse hattı yeniliyoruz.',
        },
      ],
      arrival: 'Sincan merkezden Abidinpaşa ve Demirlibahçe\'ye 40 dakika, Tuzluçayır ve Ege Mahallesi\'ne 45 dakika, Kayaş ve Lalahan\'a 50 dakika; akşam trafiğinde bir saati bulabilir, aradığınızda net söylüyoruz.',
      neighborhoods: ['Abidinpaşa', 'Akdere', 'Tuzluçayır', 'Ege', 'Şahintepe', 'Kayaş', 'Demirlibahçe', 'Saimekadın', 'Boğaziçi', 'Fahri Korutürk', 'Kutludüğün', 'Lalahan'],
      faq: [
        {
          q: 'Mamak\'a gerçekten aynı gün geliyor musunuz?',
          a: 'Evet. 40–50 dakika sürüyor ama 23:00\'e kadar aldığımız Mamak çağrılarına aynı gün çıkıyoruz. Telefonda ön teşhisi yapıp gerekli parçayla geliyoruz.',
        },
        {
          q: 'Dairemiz yeni ama röle sürekli düşüyor, neden?',
          a: 'Çoğu zaman bina girişindeki eski kolon ya da gevşek nötr bağlantısı yüzünden. Daire panosunu değil sayaç panosunu kontrol edip sorunu orada çözüyoruz.',
        },
        {
          q: 'Müstakil evimizde bahçe hattı kaçak yapıyor, ne yapmalıyız?',
          a: 'Bahçe hattının sigortasını indirin, evin geri kalanı çalışmaya devam eder. Biz gelince hattı bölüm bölüm ölçüp kaçağı onarıyoruz.',
        },
      ],
      seoTitle: 'Mamak Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Mamak acil elektrikçi: elektrik kesintisi, kaçak akım, pano yenileme ve tesisat arızası. Abidinpaşa, Tuzluçayır, Kayaş aynı gün, 08–23. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── GÖLBAŞI ───────────────────────────────
  {
    name: 'Gölbaşı',
    slug: 'golbasi-elektrikci',
    type: 'ilce',
    featured: true,
    locative: 'Gölbaşı\'nda',
    content: {
      h1: 'Gölbaşı Acil Elektrikçi',
      subtitle: 'İncek, Taşpınar ve Gölbaşı merkeze 40–50 dakikada villa ve site elektrik arıza servisi.',
      intro: [
        'Gölbaşı\'nda elektrik arızası için Sincan\'dan Eskişehir Yolu ve Konya Yolu bağlantısıyla çıkıyoruz. İncek ve Taşpınar\'a 40 dakikada, Gölbaşı merkez, Bahçelievler ve Karşıyaka\'ya 45 dakikada, Hacılar ve Kızılcaşar tarafına 50 dakikada varıyoruz.',
        'Gölbaşı acil elektrikçi çağrıları ilçenin yapısına uygun: İncek ve Taşpınar villalarında bahçe aydınlatması, havuz pompası ve otomatik kapı hatlarındaki kaçak; yeni sitelerde klima ve şarj istasyonu hattı; Gölbaşı merkezdeki eski binalarda pano ve kolon sorunları.',
        'Gölbaşı elektrik arıza servisimiz 08:00–23:00 arası açık. Mesafeden dolayı telefonda ön teşhisi ayrıntılı yapıyor, gerekli malzemeyi araçta hazır getiriyoruz; hedef tek gelişte bitirmek.',
      ],
      highlightedServices: ['villa-elektrik-servisi', 'kacak-akim-tespiti', 'acil-elektrikci', 'ev-elektrik-tesisati'],
      localNotes: [
        {
          title: 'İncek ve Taşpınar villalarında dış hat',
          text: 'Villa bahçelerinde aydınlatma, havuz ve sulama hatları toprak altında; ek noktalarına su girince kaçak akım rölesi düşüyor. Hatları teker teker ayırıp ölçüyor, kaçağın olduğu bölümü onarıp diğerlerini çalışır bırakıyoruz.',
        },
        {
          title: 'Yeni sitelerde klima ve araç şarj hattı',
          text: 'Gölbaşı\'ndaki yeni sitelerde en sık istek klima için panodan bağımsız hat ve garajda elektrikli araç şarj hattı. Uygun kesitte kablo ve ayrı sigortayla çekiyoruz; pano yükünü hesaplayıp söylüyoruz.',
        },
        {
          title: 'Gölbaşı merkezde eski binalar',
          text: 'Merkez ve Bahçelievler\'deki eski apartmanlarda buşonlu sigorta ve topraksız tesisat karşımıza çıkıyor. Panoyu otomat ve kaçak akım röleli hale getiriyor, gerekirse daire tesisatını yeniliyoruz.',
        },
      ],
      arrival: 'Sincan merkezden İncek ve Taşpınar\'a 40 dakika, Gölbaşı merkez ve Karşıyaka\'ya 45 dakika, Hacılar ve Kızılcaşar\'a 50 dakika; Eskişehir Yolu akşam trafiğinde süre uzayabilir.',
      neighborhoods: ['İncek', 'Taşpınar', 'Hacılar', 'Gaziosmanpaşa', 'Bahçelievler', 'Eymir', 'Karşıyaka', 'Şafak', 'Kızılcaşar', 'Oğulbey', 'Ballıkpınar', 'Örencik'],
      faq: [
        {
          q: 'Gölbaşı\'na ne kadar sürede geliyorsunuz?',
          a: 'Sincan\'dan 40–50 dakika. İncek tarafı daha yakın, Hacılar ve Kızılcaşar en uzak nokta. 23:00\'e kadar aldığımız çağrılara aynı gün çıkıyoruz.',
        },
        {
          q: 'Villamızda havuz pompası çalışınca röle atıyor, bulabilir misiniz?',
          a: 'Evet. Pompa hattını, motoru ve toprak altındaki bağlantı kutularını sırayla ölçüyoruz. Kaçak çoğunlukla bir ek noktasında oluyor; onu onarıyoruz.',
        },
        {
          q: 'Elektrikli araç için garaja şarj hattı çeker misiniz?',
          a: 'Evet. Panodan garaja uygun kesitte bağımsız hat ve ayrı sigorta çekiyoruz. Önce pano kapasitesini kontrol edip yeterli olup olmadığını söylüyoruz.',
        },
      ],
      seoTitle: 'Gölbaşı Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Gölbaşı acil elektrikçi: villa kaçak akım, klima ve şarj hattı, sigorta atması, tesisat. İncek, Taşpınar, merkeze aynı gün, 08:00–23:00. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── PURSAKLAR ───────────────────────────────
  {
    name: 'Pursaklar',
    slug: 'pursaklar-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Pursaklar Acil Elektrikçi',
      subtitle: 'Saray, Altınova ve Pursaklar merkeze 30–45 dakikada aynı gün elektrik arıza servisi.',
      intro: [
        'Pursaklar\'da sigorta attı, elektrik gitti ya da priz ısınıyorsa arayın. Sincan\'dan çevre yolu ile Pursaklar merkez ve Altınova\'ya 35 dakikada, Saray ve Yunus Emre tarafına 40–45 dakikada varıyoruz.',
        'Pursaklar acil elektrikçi çağrılarının büyük kısmı 2000 sonrası yapılan toplu konut ve kooperatif bloklarından geliyor. Bloklar genç ama daire panoları ilk günkü gibi; klima ve kombi eklenince otomatlar ve kaçak akım rölesi akşamları düşmeye başlıyor. Saray tarafındaki yeni sitelerde ise ankastre ve klima hattı isteği sık.',
        'Pursaklar elektrik arıza servisimiz 08:00–23:00 arası açık. Telefonda ön teşhis yapıyor, aynı gün geliyor, sigorta ve röleyi aracımızdan takıyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'priz-anahtar-tamiri', 'ev-elektrik-tesisati', 'bina-ortak-alan-elektrigi'],
      localNotes: [
        {
          title: 'Toplu konut bloklarında akşam düşen röle',
          text: 'Altınova ve Merkez\'deki bloklarda akşam 19:00–22:00 arası kombi, fırın ve çamaşır makinesi aynı anda çalışınca kaçak akım rölesi düşüyor. Röleyi iptal etmiyoruz; hangi hattın kaçırdığını cihazla bulup onarıyoruz.',
        },
        {
          title: 'Saray\'da yeni site daireleri',
          text: 'Yeni teslim dairelerde klima ve ankastre ocak için ayrı hat olmayabiliyor. Priz hattına takılan ocak sigorta attırır; panodan uygun kesitte bağımsız hat çekip kalıcı çözüyoruz.',
        },
        {
          title: 'Site yönetimleri için ortak alan',
          text: 'Pursaklar\'da site yönetimlerinden asansör beslemesi, hidrofor ve otopark aydınlatması çağrıları alıyoruz. Yönetici aradığında gün içinde geliyor, yapılan işi yazılı raporluyoruz.',
        },
      ],
      arrival: 'Sincan merkezden çevre yolu ile Pursaklar merkez ve Altınova\'ya 35 dakika, Saray ve Yunus Emre\'ye 40–45 dakika; akşam trafiği süreyi uzatabilir.',
      neighborhoods: ['Merkez', 'Saray', 'Altınova', 'Fatih', 'Yunus Emre', 'Mimar Sinan', 'Tevfik İleri', 'Ayyıldız', 'Yıldırım Beyazıt', 'Karacaören', 'Sirkeli'],
      faq: [
        {
          q: 'Pursaklar\'a kaç dakikada geliyorsunuz?',
          a: 'Sincan\'dan çevre yolu ile 30–45 dakika. Merkez ve Altınova daha yakın, Saray tarafı 45 dakikayı bulabilir. Aradığınızda net süre söylüyoruz.',
        },
        {
          q: 'Röle her akşam aynı saatte atıyor, ne yapmalıyız?',
          a: 'O saatte çalışan cihazları not edin; genellikle biri kaçak yapıyor. Bizi arayın, hattı ayırıp cihazla kaçağı buluyoruz. Röleyi iptal etmeyin.',
        },
        {
          q: 'Yeni dairemizde ankastre ocak için hat yok, çeker misiniz?',
          a: 'Evet. Panodan mutfağa uygun kesitte bağımsız hat ve ayrı sigorta çekiyoruz. Malzeme aracımızda, çoğu dairede aynı gün bitiyor.',
        },
      ],
      seoTitle: 'Pursaklar Acil Elektrikçi | Aynı Gün Arıza Servisi | Demir Elektrik',
      seoDescription: 'Pursaklar acil elektrikçi: sigorta atması, priz arızası, ankastre hattı, site ortak alanı. Saray, Altınova\'ya 30–45 dk, 08:00–23:00 her gün. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── KAHRAMANKAZAN ───────────────────────────────
  {
    name: 'Kahramankazan',
    slug: 'kahramankazan-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Kahramankazan Acil Elektrikçi',
      subtitle: 'Sincan\'dan Kahramankazan merkez ve sanayi bölgelerine 30–40 dakikada üç faz ve konut arıza servisi.',
      intro: [
        'Kahramankazan\'da elektrik arızası için Sincan\'dan Yenikent üzerinden çıkıyoruz. Kahramankazan merkez ve Atatürk Mahallesi\'ne 30 dakikada, Saray ve Anadolu OSB tarafına 35–40 dakikada varıyoruz. Yol açık, trafik hafif; süre çoğu zaman söylediğimiz gibi çıkıyor.',
        'Kahramankazan acil elektrikçi çağrılarının yarısından fazlası fabrikalardan geliyor: kumanda panosunda yanan kontaktör, düşen termik, faz kaybı, gevşeyen şalter bağlantısı, kompanzasyon uyarısı. Konut tarafında ise merkezdeki apartmanlarda pano ve kolon sorunları, müstakil evlerde bahçe ve depo hattı kaçağı öne çıkıyor.',
        'Kahramankazan elektrik arıza servisimiz 08:00–23:00 arası açık. Fabrika çağrılarında üretim dururken sizi bekletmemek için telefonda tespiti başlatıyor, kontaktör ve termikle geliyoruz.',
      ],
      highlightedServices: ['fabrika-kumanda-panosu', 'isyeri-elektrik-servisi', 'sigorta-atmasi', 'kacak-akim-tespiti'],
      localNotes: [
        {
          title: 'Anadolu OSB ve sanayi hattında fabrika kumanda panosu',
          text: 'Faz kaybında üç fazlı cihazları hemen kapatın; tek fazla çalışan cihaz kısa sürede yanar. Kumanda panosunu, şalteri, sayaç girişini ve kompanzasyonu kontrol ediyor, yanan kontaktörü ve düşen termiği aracımızdan değiştiriyoruz.',
        },
        {
          title: 'Merkezdeki apartmanlar',
          text: 'Kahramankazan merkezde 90\'lı yıl apartmanlarında kolon hattı ve sayaç panosu yaşlanmış durumda. Akşam düşen kolon sigortası ve titreyen ışık için panoyu ve nötr bağlantılarını kontrol ediyoruz.',
        },
        {
          title: 'Müstakil ve bahçeli evler',
          text: 'Kazan çevresindeki bahçeli evlerde dış aydınlatma, depo ve kuyu pompası hatları toprak altında. Yağmur sonrası düşen röle için hatları ayırıp kaçağı bulan cihazla ilerliyoruz.',
        },
      ],
      arrival: 'Sincan merkezden Yenikent üzerinden Kahramankazan merkeze 30 dakika, Saray ve Anadolu OSB tarafına 35–40 dakika; yol genellikle açık.',
      neighborhoods: ['Atatürk', 'Fatih', 'Cumhuriyet', 'Kayı', 'Saray', 'Satıkadın', 'Orhaniye', 'Fethiye', 'Yassıören', 'Anadolu OSB'],
      faq: [
        {
          q: 'Kahramankazan\'a ne kadar sürede geliyorsunuz?',
          a: 'Sincan\'dan Yenikent yoluyla 30–40 dakika. Merkez daha yakın, Saray ve OSB tarafı 40 dakikayı bulabiliyor. Yol genellikle açık olduğu için süre şaşmıyor.',
        },
        {
          q: 'Fabrikamızda bir faz gitti, mesai içinde gelebilir misiniz?',
          a: 'Evet. Fabrika çağrılarına öncelik veriyoruz. Üç fazlı cihazları kapatın, bizi arayın; kumanda panosunu, şalteri ve sayaç girişini kontrol edip hattı gün içinde normale döndürüyoruz.',
        },
        {
          q: 'Konut için de geliyor musunuz, yoksa sadece sanayi mi?',
          a: 'İkisi için de geliyoruz. Sigorta atması, elektrik kesintisi, priz ve kaçak akım için Kahramankazan\'daki evlere 08:00–23:00 arası aynı gün çıkıyoruz.',
        },
      ],
      seoTitle: 'Kahramankazan Acil Elektrikçi | Aynı Gün Servis | Demir Elektrik',
      seoDescription: 'Kahramankazan acil elektrikçi: fabrika kumanda panosu, sigorta atması, kaçak akım. Sincan\'dan 30–40 dakikada, 08:00–23:00 her gün. Tel: 0506 092 58 16',
    },
  },

  // ─────────────────────────────── ETİKET KAYITLARI (sayfa yok) ───────────────────────────────
  { name: 'Akyurt', slug: 'akyurt-elektrikci', type: 'ilce', featured: false },
  { name: 'Altındağ', slug: 'altindag-elektrikci', type: 'ilce', featured: false },
  { name: 'Ayaş', slug: 'ayas-elektrikci', type: 'ilce', featured: false },
  { name: 'Bala', slug: 'bala-elektrikci', type: 'ilce', featured: false },
  { name: 'Beypazarı', slug: 'beypazari-elektrikci', type: 'ilce', featured: false },
  { name: 'Çamlıdere', slug: 'camlidere-elektrikci', type: 'ilce', featured: false },
  { name: 'Çubuk', slug: 'cubuk-elektrikci', type: 'ilce', featured: false },
  { name: 'Elmadağ', slug: 'elmadag-elektrikci', type: 'ilce', featured: false },
  { name: 'Evren', slug: 'evren-elektrikci', type: 'ilce', featured: false },
  { name: 'Güdül', slug: 'gudul-elektrikci', type: 'ilce', featured: false },
  { name: 'Haymana', slug: 'haymana-elektrikci', type: 'ilce', featured: false },
  { name: 'Kalecik', slug: 'kalecik-elektrikci', type: 'ilce', featured: false },
  { name: 'Kızılcahamam', slug: 'kizilcahamam-elektrikci', type: 'ilce', featured: false },
  { name: 'Nallıhan', slug: 'nallihan-elektrikci', type: 'ilce', featured: false },
  { name: 'Polatlı', slug: 'polatli-elektrikci', type: 'ilce', featured: false },
  { name: 'Şereflikoçhisar', slug: 'sereflikochisar-elektrikci', type: 'ilce', featured: false },
];

/** Ankara'nın 25 ilçesi (semtler hariç), alfabetik */
export const allDistricts = districts
  .filter((d) => d.type === 'ilce')
  .sort((a, b) => a.name.localeCompare(b.name, 'tr'));

/** Sayfası üretilecek bölgeler */
export const landingDistricts = districts.filter(
  (d): d is District & { content: DistrictContent } => Boolean(d.content),
);

export const featuredDistricts = districts.filter((d) => d.featured);

export function getDistrict(slug: string) {
  return landingDistricts.find((d) => d.slug === slug);
}

import type { Neighborhood } from './types';

/**
 * Sincan mahalle sayfaları — /hizmet-bolgeleri/sincan-elektrikci/<mahalle-slug>
 * Merkezimiz Melih Gökçek Bulvarı No:19/A'da; tüm mahalleler 5–15 dakika.
 */
export const sincanNeighborhoods: Neighborhood[] = [
  {
    name: 'Törekent',
    slug: 'torekent-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Törekent Acil Elektrikçi',
      subtitle: 'Törekent\'te site ortak alanı, daire ve blok altı dükkân arızalarına 08:00–23:00 arası aynı gün müdahale.',
      intro: [
        'Törekent, Sincan\'ın en kalabalık toplu konut bölgelerinden biri. Çok bloklu siteler, yüksek katlı apartmanlar ve blok altı dükkânlar yan yana. Bu yoğunlukta bir arıza tek daireyi değil bazen bütün bloğu etkiler. Törekent acil elektrikçi çağrılarının önemli bir kısmı bu yüzden ortak alandan gelir.',
        'Biz Melih Gökçek Bulvarı\'ndaki merkezimizden Ayaş Yolu üzerinden Törekent\'e 10 dakikada ulaşıyoruz. Telefonda sorunu dinler, daire sigortasına mı yoksa kat panosuna mı bakmanız gerektiğini söyleriz. Çoğu zaman siz kapıyı açana kadar sorunun nerede olduğunu biliriz.',
        'Törekent elektrik arıza çağrılarında işe başlamadan önce ne yapacağımızı ve ne kadar tutacağını söyleriz. Onay sizden gelmeden kablo çekmeyiz.',
      ],
      highlightedServices: ['bina-ortak-alan-elektrigi', 'sigorta-atmasi', 'elektrik-kesintisi', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Site ortak alanları',
          text: 'Merdiven otomatiği, hidrofor beslemesi, kapıcı dairesi hattı ve otopark aydınlatması Törekent\'te en sık baktığımız noktalar. Yöneticiyle konuşup pano odasına birlikte iniyoruz.',
        },
        {
          title: 'Blok altı dükkânlar',
          text: 'Blok altındaki market, berber ve kafeler günün ortasında elektriksiz kalınca beklemek istemez. Törekent\'te esnaf için kısa sürede varış ve akşam saatinde de müdahale mümkün.',
        },
        {
          title: 'Kat sigortası ile daire sigortası karışıklığı',
          text: 'Yüksek bloklarda daire sigortası sağlamken kat panosundaki şalter atmış olabilir. Telefonda hangisine bakacağınızı adım adım anlatıyoruz; bazen ziyarete bile gerek kalmıyor.',
        },
      ],
      arrival: 'Törekent\'e dükkânımızdan Ayaş Yolu üzerinden 10 dakika içinde varıyoruz.',
      landmarks: [
        'Törekent Metro İstasyonu çevresi',
        'OSB-Törekent Metro İstasyonu yönü',
        'Ayaş Yolu üzeri bloklar',
        'Törekent Pazar Yeri çevresi',
        'Törekent Merkez',
        'Sincan OSB girişine yakın siteler',
        'Törekent toplu konut blokları',
      ],
      faq: [
        {
          q: 'Törekent\'te bütün blok karanlıkta kaldı, önce kimi aramalıyız?',
          a: 'Önce komşu bloklara bakın. Onlar da karanlıksa şebeke kesintisidir ve dağıtım şirketini aramak gerekir. Yalnızca sizin blok karanlıksa ana pano veya kolon hattı sorunudur; bizi arayın, yöneticiyle birlikte pano odasına ineriz.',
        },
        {
          q: 'Site yönetimi adına çağrı açabilir miyiz?',
          a: 'Evet. Yönetici veya görevlendirdiği kişi arayabilir. İşe başlamadan yapılacak işi ve tutarı yönetime bildiririz, onay geldikten sonra başlarız.',
        },
        {
          q: 'Törekent acil elektrikçi hafta sonu da geliyor mu?',
          a: 'Geliyoruz. Haftanın 7 günü 08:00–23:00 arası çalışıyoruz. Cumartesi ve pazar da aynı numaradan, aynı ekibe ulaşırsınız.',
        },
      ],
      seoTitle: 'Törekent Acil Elektrikçi | Site Ortak Alan Arızası | Demir Elektrik',
      seoDescription: 'Törekent acil elektrikçi: site ortak alan, daire ve dükkân arızalarına aynı gün müdahale. 08:00–23:00 arası 10 dakikada kapınızdayız. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Pınarbaşı',
    slug: 'pinarbasi-elektrikci',
    districtSlug: 'sincan-elektrikci',
    locative: 'Pınarbaşı\'nda',
    content: {
      h1: 'Pınarbaşı Acil Elektrikçi',
      subtitle: 'Pınarbaşı\'nda eski tesisatlı apartman ve müstakil evlerde sigorta atması, kaçak akım ve pano arızasına hızlı çözüm.',
      intro: [
        'Pınarbaşı, Sincan\'ın eski yerleşim mahallelerinden. Binaların çoğu 25–30 yıllık; eskimiş buatlar, gevşemiş klemensler ve ısınmış kat panoları bu bölgede sık karşımıza çıkıyor. Pınarbaşı elektrik arıza çağrılarının büyük bölümü bu yaşlanmış tesisattan kaynaklanır.',
        'Sigorta durduk yere atıyorsa, prizden ısı geliyorsa ya da kaçak akım rölesi sürekli düşüyorsa telefonda size birkaç soru sorarız. Cevaplara göre yanımızda ne getireceğimizi bilerek geliriz. Pınarbaşı\'na dükkânımızdan 5–10 dakikada varıyoruz.',
        'Yerinde arızayı bulduktan sonra iki seçenek sunarız: yalnızca arızayı gidermek ya da sorunlu hattı yenilemek. Hangisini seçeceğiniz size kalmış; ikisinin de tutarını işe başlamadan söyleriz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'kacak-akim-tespiti', 'elektrik-panosu-yenileme', 'priz-anahtar-tamiri'],
      localNotes: [
        {
          title: 'Eski buat ve ek yerleri',
          text: 'Pınarbaşı\'nda arıza çoğu zaman görünmeyen yerdedir: sıva altı buatlarda gevşemiş bağlantılar. Ölçü aletiyle hattı bölüp sorunlu buatı buluruz, duvarı gereksiz yere kırmayız.',
        },
        {
          title: 'Kaçak akım rölesi olmayan daireler',
          text: 'Eski panolarda kaçak akım rölesi bulunmayabiliyor. Talep ederseniz aynı ziyarette röle takıp test ederiz; özellikle çocuklu ve yaşlı bireyli evlerde bunu öneriyoruz.',
        },
        {
          title: 'Kombi ve şofben hatları',
          text: 'Kış girişinde kombi hattından kaynaklı sigorta atması Pınarbaşı\'nda çok görülür. Kombiye ayrı hat ve ayrı sigorta çekilmesi sorunu kökten çözer.',
        },
      ],
      arrival: 'Pınarbaşı\'na dükkânımızdan 5–10 dakika içinde geliyoruz.',
      landmarks: [
        'Pınarbaşı Merkez',
        'Pınarbaşı Pazar Yeri çevresi',
        'Ayaş Yolu bağlantısı',
        'Sincan merkez yönündeki apartmanlar',
        'Pınarbaşı eski yerleşim sokakları',
        'Pınarbaşı Camii çevresi',
      ],
      faq: [
        {
          q: 'Sigorta sürekli atıyor ama hiçbir cihaz açık değil, sebep ne olabilir?',
          a: 'Genellikle hatta kaçak vardır: nemlenmiş bir buat, yıpranmış kablo izolasyonu ya da ıslanmış priz. Sigortayı kapalı bırakın, bizi arayın. Hattı bölerek kaçağın yerini buluruz.',
        },
        {
          q: 'Pınarbaşı\'nda eski dairenin tesisatını komple yenilemek şart mı?',
          a: 'Her zaman değil. Önce arızalı hattı buluruz; diğer hatlar sağlamsa yalnızca sorunlu bölümü yenileriz. Panonun ve kablo kesitinin durumuna göre size dürüst bir yol haritası çıkarırız.',
        },
        {
          q: 'Aynı gün gelebilir misiniz?',
          a: 'Evet. Pınarbaşı dükkânımıza çok yakın; 08:00–23:00 arasında aradığınızda çoğunlukla aynı saat dilimi içinde kapınızdayız.',
        },
      ],
      seoTitle: 'Pınarbaşı Acil Elektrikçi | Eski Tesisat Arızası | Demir Elektrik',
      seoDescription: 'Pınarbaşı acil elektrikçi: eski tesisatlı evlerde sigorta atması, kaçak akım ve pano arızasına aynı gün çözüm. 08:00–23:00, 5–10 dakikada varış. 0506 092 58 16',
    },
  },
  {
    name: 'Plevne',
    slug: 'plevne-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Plevne Acil Elektrikçi',
      subtitle: 'Plevne\'de yeni taşınan aileler için tesisat kontrolü, avize montajı ve her türlü elektrik arızasına aynı gün servis.',
      intro: [
        'Plevne, Sincan\'da aile nüfusunun yoğun olduğu, taşınma hareketliliği yüksek bir mahalle. Her ay yeni kiracılar ve yeni ev sahipleri geliyor. Taşınırken fark edilmeyen sorunlar ilk hafta ortaya çıkar: çalışmayan priz, kararan oda, uyduruk bağlanmış avize kablosu. Plevne acil elektrikçi çağrılarının çoğu bu ilk haftalardan gelir.',
        'Biz taşınma sonrası kısa bir tesisat turu öneriyoruz. Panoya bakar, kaçak akım rölesini test eder, her prizde topraklamayı ölçeriz. Bu tur çoğu zaman bir saat bile sürmez ama sizi aylarca sürecek küçük dertlerden kurtarır.',
        'Plevne\'ye dükkânımızdan 5–10 dakikada ulaşıyoruz. Acil bir durum yoksa size uygun saati birlikte belirleriz; acilse hemen yola çıkarız.',
      ],
      highlightedServices: ['ev-elektrik-tesisati', 'avize-spot-montaji', 'priz-anahtar-tamiri', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Taşınma sonrası kontrol',
          text: 'Yeni eve girerken en çok atlanan şey topraklama. Plevne\'de kontrol için gittiğimiz evlerin bir kısmında prizler topraksız bağlanmış çıkıyor. Ölçüp gösteriyor, gerekiyorsa aynı gün düzeltiyoruz.',
        },
        {
          title: 'Avize ve spot montajı',
          text: 'Taşınma günü avize takmak için gelen çağrı Plevne\'de bir hayli fazla. Alçıpan tavan, beton tavan, spot dönüşümü; hepsini tek ziyarette hallederiz. Sarkıt için tavan kancasını da biz takarız.',
        },
        {
          title: 'Çocuklu evlerde güvenlik',
          text: 'Kapaklı priz, çocuk kilitli anahtar ve kaçak akım rölesi tercih eden aileler için tek seferde kurulum yapıyoruz. Küçük iş, büyük rahatlık.',
        },
      ],
      arrival: 'Plevne\'ye dükkânımızdan 5–10 dakika içinde ulaşıyoruz.',
      landmarks: [
        'Plevne Merkez',
        'Harikalar Diyarı yönü',
        'Plevne aile apartmanları',
        'Sincan merkeze bağlanan caddeler',
        'Plevne Aile Sağlığı Merkezi çevresi',
        'Plevne yeni siteler bölgesi',
      ],
      faq: [
        {
          q: 'Yeni taşındık, evde hiçbir arıza yok ama kontrol ettirmeli miyiz?',
          a: 'Öneririz. Görünür arıza olmayan evlerde bile topraklama eksik ya da kaçak akım rölesi çalışmıyor olabilir. Kısa bir ölçümle netleşir, gönlünüz rahat eder.',
        },
        {
          q: 'Avize montajı için de acil elektrikçi çağırabilir miyiz?',
          a: 'Tabii. Plevne\'de aynı gün gelip avize, sarkıt veya spot montajı yapıyoruz. Birden fazla oda varsa tek ziyarette hepsini bitiririz.',
        },
        {
          q: 'Ev sahibi mi kiracı mı ödeme yapacak, siz nasıl yaklaşıyorsunuz?',
          a: 'Bu sizin aranızdaki anlaşmaya bağlı. Biz arızanın kaynağını yazılı olarak açıklarız; tesisattan mı yoksa kullanımdan mı kaynaklandığını belirtiriz. Böylece iki taraf da neyi neden ödediğini bilir.',
        },
      ],
      seoTitle: 'Plevne Acil Elektrikçi | Aynı Gün Tesisat Kontrolü | Demir Elektrik',
      seoDescription: 'Plevne acil elektrikçi: yeni taşınanlara tesisat kontrolü, avize montajı, priz arızasına aynı gün servis. 08:00–23:00, 5–10 dakikada varış. 0506 092 58 16',
    },
  },
  {
    name: 'Fatih',
    slug: 'fatih-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Fatih Acil Elektrikçi',
      subtitle: 'Fatih\'te cadde üzeri mağaza, dükkân ve iş yerleri için kapanış sonrası dahil 23:00\'e kadar elektrik arıza servisi.',
      intro: [
        'Fatih Mahallesi, Sincan\'ın çarşı damarı sayılır. Metro istasyonu çevresinde ve ana caddeler boyunca yüzlerce mağaza, lokanta, kuaför ve ofis var. Bir esnaf için elektriksiz geçen her saat kasa kapalı demek. Fatih acil elektrikçi çağrılarını bu yüzden öne alıyoruz.',
        'Dükkânımızdan Fatih\'e 5–10 dakika. Aradığınızda ne sattığınızı ve neyin çalışmadığını sorarız: vitrin aydınlatması mı, soğutucu hattı mı, yazar kasa prizi mi? Doğru malzemeyle geliriz, işi tek seferde kapatmaya bakarız.',
        'Fatih elektrik arıza servisimiz akşam 23:00\'e kadar sürüyor. Müşterinin gittiği saatte, kapanıştan sonra çalışmak istiyorsanız o saate göre plan yaparız.',
      ],
      highlightedServices: ['isyeri-elektrik-servisi', 'elektrik-kesintisi', 'sigorta-atmasi', 'avize-spot-montaji'],
      localNotes: [
        {
          title: 'Kapanıştan sonra müdahale',
          text: 'Fatih\'teki mağazaların çoğu gündüz müşteriyle dolu. Vitrin rayı, tabela hattı ya da priz değişimi gibi işleri akşam kapanıştan sonra yapıyoruz; ertesi sabah dükkân hazır açılıyor.',
        },
        {
          title: 'Soğutucu ve klima hatları',
          text: 'Market ve lokantalarda soğutucu grupları tek sigortadan besleniyorsa yaz aylarında sürekli atar. Ayrı hat ve uygun kesitte sigorta ile bu sorunu Fatih\'te sık sık çözüyoruz.',
        },
        {
          title: 'Metro çevresi ofisler',
          text: 'İstasyon çevresindeki ofis katlarında UPS, bilgisayar prizi ve aydınlatma ayrımı istenir. Kesintide neyin çalışacağına birlikte karar verir, hattı ona göre bölüyoruz.',
        },
      ],
      arrival: 'Fatih\'e dükkânımızdan 5–10 dakikada varıyoruz; esnaf çağrılarına kapanış saatine göre de geliyoruz.',
      landmarks: [
        'Fatih Metro İstasyonu çevresi',
        'Fatih Merkez çarşı',
        'Sincan Devlet Hastanesi yönü',
        'Ana cadde üzeri mağazalar',
        'Fatih ofis ve iş hanları',
        'Sincan merkeze bağlanan hat',
        'Fatih semt pazarı çevresi',
      ],
      faq: [
        {
          q: 'Dükkân açıkken gelmenizi istemiyoruz, akşam gelebilir misiniz?',
          a: 'Evet. Fatih\'te esnaf için kapanış sonrası 23:00\'e kadar çalışıyoruz. Saati telefonda belirleriz; işi akşam bitirip sabah açılışa yetiştiririz.',
        },
        {
          q: 'Sadece bizim dükkân karanlık, komşu dükkânlar açık. Ne yapmalıyız?',
          a: 'Önce sayaç altındaki ana şalteri kontrol edin. Atmışsa bir kez kaldırın; tekrar düşüyorsa kaldırmayı bırakın ve bizi arayın. Kısa devre ya da kaçak vardır, ölçerek buluruz.',
        },
        {
          q: 'Fatih acil elektrikçi tabela ve vitrin aydınlatması da yapıyor mu?',
          a: 'Yapıyoruz. LED dönüşüm, vitrin ray spotu, tabela trafosu değişimi gibi işler iş yeri servisimizin içinde. Aynı ziyarette arıza ile birlikte hallederiz.',
        },
      ],
      seoTitle: 'Fatih Acil Elektrikçi | Mesai Dışı İş Yeri Servisi | Demir Elektrik',
      seoDescription: 'Fatih acil elektrikçi: mağaza ve dükkân arızalarına aynı gün, kapanış sonrası 23:00\'e kadar servis. 5–10 dakikada varış, işe başlamadan fiyat. 0506 092 58 16',
    },
  },
  {
    name: '29 Ekim',
    slug: '29-ekim-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: '29 Ekim Acil Elektrikçi',
      subtitle: '29 Ekim\'de apartman daireleri ve zemin kat dükkânlarda sigorta atması, pano ve priz arızasına hızlı müdahale.',
      intro: [
        'Sincan 29 Ekim Mahallesi, orta yaşlı apartmanların ve zemin kat dükkânların iç içe olduğu bir bölge. Dairelerdeki panolar genelde ilk yapıldığı hâliyle duruyor; yeni beyaz eşya, klima ve elektrikli ısıtıcı eklendikçe bu panolar yetmemeye başlıyor. 29 Ekim acil elektrikçi çağrılarının çoğu akşam saatlerinde, ev doluyken geliyor.',
        'Akşam yemeğinde fırın, bulaşık makinesi ve klima aynı anda açılınca sigorta atıyorsa sorun cihazda değil pano kapasitesinde olabilir. Telefonda hangi cihazların aynı anda açık olduğunu sorarız; çoğu zaman teşhis oradan çıkar.',
        '29 Ekim\'e dükkânımızdan 5–10 dakika. Eski cam sigortalı panoyu otomat sigortalı, kaçak akım röleli panoya dönüştürmek istiyorsanız bunu da yerinde ölçüp önerimizi ve tutarını söyleriz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'elektrik-panosu-yenileme', 'priz-anahtar-tamiri', 'kacak-akim-tespiti'],
      localNotes: [
        {
          title: 'Eski cam sigortalı panolar',
          text: '29 Ekim\'de hâlâ buşonlu, cam sigortalı pano kullanan daireler var. Bunlar aşırı yükte geç tepki verir. Otomat sigorta ve kaçak akım rölesine geçiş, çoğu evde yarım günde biten bir iş.',
        },
        {
          title: 'Klima hattı',
          text: 'Sonradan takılan klimalar çoğunlukla salon prizinden besleniyor. Yazın sürekli sigorta atmasının bir numaralı sebebi bu. Klimaya panodan ayrı hat çekince sorun bitiyor.',
        },
        {
          title: 'Zemin kat dükkânların ortak panosu',
          text: 'Bazı binalarda dükkân ve daire hatları aynı kolon panosundan geliyor. Bir tarafta arıza diğerini de düşürebilir. Panoyu ayırmak hem güvenlik hem de huzur getirir.',
        },
      ],
      arrival: '29 Ekim\'e dükkânımızdan 5–10 dakika içinde geliyoruz.',
      landmarks: [
        '29 Ekim Merkez',
        'Sincan Belediyesi çevresi',
        'Ayaş Yolu bağlantısı',
        '29 Ekim apartman blokları',
        'Zemin kat dükkânlı caddeler',
        'Sincan merkez yönü',
      ],
      faq: [
        {
          q: 'Akşam saatlerinde sigorta atıyor, gündüz hiç sorun yok. Neden?',
          a: 'Akşam evdeki yük artıyor: fırın, çamaşır makinesi, klima ve ısıtıcı aynı anda çalışıyor. Sigorta ya da kablo kesiti bu yüke yetmiyor demektir. Ölçüp hangi hattın yükünü azaltacağımıza karar veririz.',
        },
        {
          q: 'Pano yenileme sırasında evde elektrik ne kadar kesilir?',
          a: 'Standart bir daire panosunda birkaç saat. Sabah başlarız, öğleden sonra teslim ederiz. Buzdolabı için gerekirse geçici hat bırakırız.',
        },
        {
          q: '29 Ekim acil elektrikçi akşam geç saatte gelir mi?',
          a: 'Gelir. 23:00\'e kadar çağrı alıyoruz. Arıza gece yarısından sonra çıktıysa sigortayı kapalı bırakın, sabah 08:00\'de ilk sırada geliriz.',
        },
      ],
      seoTitle: '29 Ekim Acil Elektrikçi | Sigorta ve Pano Arızası | Demir Elektrik',
      seoDescription: '29 Ekim acil elektrikçi: sigorta atması, eski pano yenileme, priz ve kaçak akım arızasına aynı gün müdahale. 08:00–23:00, 5–10 dakikada varış. 0506 092 58 16',
    },
  },
  {
    name: 'Menderes',
    slug: 'menderes-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Menderes Acil Elektrikçi',
      subtitle: 'Merkezimiz Melih Gökçek Bulvarı No:19/A\'da, Menderes\'e birkaç dakika. Mahalledeki her arızaya 5–10 dakikada geliyoruz.',
      intro: [
        'Menderes, merkezimize en yakın mahallelerden. Demir Elektrik 30 yılı aşkın süredir Sincan\'da, Melih Gökçek Bulvarı No:19/A\'daki merkezinden çalışıyor. Komşularımızın panolarını, kolon hatlarını ve hangi binada hangi sorunun tekrar ettiğini biliyoruz. Menderes acil elektrikçi dediğinizde aradığınız kişi birkaç sokak ötededir.',
        'Menderes\'e araçla birkaç dakikada ulaşıyoruz; çoğu çağrıda 5–10 dakika içinde kapınızdayız. Malzeme gerekiyorsa merkezden getirmek de bir o kadar sürüyor. Bu yüzden Menderes elektrik arıza çağrılarında bekleme süresi neredeyse yok.',
        'Ev, apartman ortak alanı, cadde üzeri esnaf; hepsi için aynı kural geçerli: önce bakarız, ne yapacağımızı söyleriz, tutarı belirtiriz, sonra başlarız.',
      ],
      highlightedServices: ['acil-elektrikci', 'sigorta-atmasi', 'priz-anahtar-tamiri', 'bina-ortak-alan-elektrigi'],
      localNotes: [
        {
          title: 'Dükkâna uğrayabilirsiniz',
          text: 'Arızayı anlatmak, kablo ya da sigorta almak, bir tavsiye sormak için 08:00–23:00 arası Melih Gökçek Bulvarı No:19/A\'ya gelebilirsiniz. Telefonla anlatması zor olan durumları dükkânda birlikte çözmek daha kolay.',
        },
        {
          title: 'Komşu esnaf',
          text: 'Menderes\'teki cadde üzeri esnafın çoğu bizi tanır. Tabela, vitrin, soğutucu hattı ve priz sorunlarında kapıyı çalmanız yeterli; birkaç dakikada geliyoruz.',
        },
        {
          title: 'Apartman ortak alanı',
          text: 'Menderes\'teki apartmanların birçoğunda ortak alan bakımını biz yapıyoruz. Merdiven otomatiği, kapı zili, otopark aydınlatması gibi işlerde yöneticiler doğrudan dükkânı arıyor.',
        },
      ],
      arrival: 'Menderes\'e merkezimizden 5–10 dakika içinde varıyoruz.',
      landmarks: [
        'Melih Gökçek Bulvarı yönü',
        'Menderes Merkez',
        'Sincan Metro İstasyonu yönü',
        'Sincan Tren Garı çevresi',
        'Menderes cadde üzeri esnaf',
        'Sincan merkez apartmanları',
        'Ayaş Yolu bağlantısı',
      ],
      faq: [
        {
          q: 'Menderes\'e gerçekten 5–10 dakikada gelebiliyor musunuz?',
          a: 'Evet. Merkezimiz Melih Gökçek Bulvarı No:19/A\'da, Menderes\'e birkaç dakika; çoğu adrese 10 dakikayı geçmeden ulaşıyoruz.',
        },
        {
          q: 'Dükkâna gelip malzeme alabilir miyiz?',
          a: 'Alabilirsiniz. Sigorta, priz, anahtar, kablo gibi temel malzemeler dükkânda bulunur. Hangi kesit ya da hangi amperde alacağınızı bilmiyorsanız yanınızda sorunlu parçayı getirin, birlikte bakalım.',
        },
        {
          q: 'Menderes acil elektrikçi hangi saatlerde açık?',
          a: 'Haftanın 7 günü 08:00–23:00. Bu saatler arasında hem telefon hem dükkân açık. Gece 23:00 sonrası çıkan arızalarda sabah ilk iş sizinle başlıyoruz.',
        },
      ],
      seoTitle: 'Menderes Acil Elektrikçi | Merkeze 5 Dakika | Demir Elektrik',
      seoDescription: 'Menderes acil elektrikçi: merkezimiz Melih Gökçek Bulvarı No:19/A\'da, 5–10 dakikada geliyoruz. Ev, esnaf ve apartman arızası, 08:00–23:00. 0506 092 58 16',
    },
  },
  {
    name: 'Fevzi Çakmak',
    slug: 'fevzi-cakmak-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Fevzi Çakmak Acil Elektrikçi',
      subtitle: 'Fevzi Çakmak\'ta müstakil ve bahçeli evlerde elektrik kesintisi, dış hat ve sigorta arızasına 08:00–23:00 arası hızlı müdahale.',
      intro: [
        'Fevzi Çakmak Mahallesi\'nde apartmanların yanında hâlâ çok sayıda müstakil ve bahçeli ev var. Bu evlerde sorun genellikle iç tesisatta değil dışarıda başlar: bahçe aydınlatması, sayaç ile ev arasındaki besleme hattı, dışarıda kalan buatlar. Yağmur ve kar sonrası Fevzi Çakmak elektrik arıza çağrıları belirgin biçimde artar.',
        'Telefonda önce evin tamamının mı yoksa bir bölümünün mü karanlık olduğunu sorarız. Sayaç altındaki şalter, bahçe hattı ve ev panosu arasında sorunu daraltırız. Fevzi Çakmak\'a dükkânımızdan 10 dakikada varıyoruz.',
        'Dış hatlar için nem sınıfına uygun buat ve kablo kullanırız. Bir kez doğru yapılan bahçe hattı yıllarca sorun çıkarmaz; ucuz çözümü değil kalıcı olanı öneririz.',
      ],
      highlightedServices: ['elektrik-kesintisi', 'sigorta-atmasi', 'ev-elektrik-tesisati', 'kacak-akim-tespiti'],
      localNotes: [
        {
          title: 'Yağmur sonrası kaçak akım',
          text: 'Bahçe lambası ya da dış priz su alınca kaçak akım rölesi düşer ve bütün ev karanlık kalır. Fevzi Çakmak\'ta bu çağrı çok gelir. Islanan noktayı bulur, hattı ayırır, nem korumalı malzemeyle yenileriz.',
        },
        {
          title: 'Müstakil evde ek kat ve ek oda',
          text: 'Sonradan eklenen kat ve odaların hattı çoğu kez mevcut sigortaya bağlanmış oluyor. Yük artınca sigorta dayanmıyor. Panoya yeni hat ekleyip yükü paylaştırıyoruz.',
        },
        {
          title: 'Sayaç–ev arası besleme',
          text: 'Sayaçtan eve giden hat eskimişse gerilim düşer, lambalar titrer. Ölçümle hangi bölümün sorunlu olduğunu belirleriz; sorun sayaç öncesindeyse dağıtım şirketine yönlendiririz.',
        },
      ],
      arrival: 'Fevzi Çakmak\'a dükkânımızdan 10 dakika içinde ulaşıyoruz.',
      landmarks: [
        'Fevzi Çakmak Merkez',
        'Fevzi Çakmak bahçeli evler bölgesi',
        'Ahi Evran ve OSB yönü',
        'Fevzi Çakmak apartman sokakları',
        'Sincan merkeze bağlanan cadde',
        'Fevzi Çakmak Camii çevresi',
      ],
      faq: [
        {
          q: 'Bütün ev karanlık, sayaçtaki şalter kalkmıyor. Ne yapmalıyız?',
          a: 'Zorlamayın. Şalter yeniden düşüyorsa hatta kaçak ya da kısa devre vardır. Bahçe ve dış prizleri kapatıp bir kez daha deneyin; yine düşerse bizi arayın, ölçerek buluruz.',
        },
        {
          q: 'Bahçe aydınlatmasını siz de yapıyor musunuz?',
          a: 'Yapıyoruz. Fevzi Çakmak\'ta bahçe direği, duvar aplik ve sensörlü lamba kurulumunu dış ortam sınıfı malzemeyle yapıyoruz. Hattı ev panosunda ayrı sigortaya alıyoruz.',
        },
        {
          q: 'Lambalar akşamları titriyor, tehlikeli mi?',
          a: 'Gerilim düşümü ya da gevşek bir bağlantı olabilir. Gevşek bağlantı ısınır ve zamanla yangın riski oluşturur. Bekletmeden bakılmasında fayda var; aynı gün geliriz.',
        },
      ],
      seoTitle: 'Fevzi Çakmak Acil Elektrikçi | Müstakil Ev Arızası | Demir Elektrik',
      seoDescription: 'Fevzi Çakmak acil elektrikçi: müstakil evlerde kesinti, kaçak akım ve sigorta arızasına aynı gün servis. 08:00–23:00, 10 dakikada varış. 0506 092 58 16',
    },
  },
  {
    name: 'Ahi Evran',
    slug: 'ahi-evran-elektrikci',
    districtSlug: 'sincan-elektrikci',
    content: {
      h1: 'Ahi Evran Acil Elektrikçi',
      subtitle: 'Ahi Evran\'da OSB\'ye komşu atölye ve fabrikalarda kumanda panosu arızası, iş yeri ve konut elektrik servisi.',
      intro: [
        'Ahi Evran Mahallesi, Sincan Organize Sanayi Bölgesi\'nin hemen yanında. Mahallede konutların yanı sıra küçük atölyeler, depolar ve OSB\'ye hizmet veren iş yerleri var. Burada bir arıza üretimi durdurur. Ahi Evran acil elektrikçi çağrılarında bu yüzden önce hattın hangi makineyi beslediğini sorarız.',
        'Fabrika kumanda panolarında kontaktör yapışması, termik atması, faz koruma rölesi hatası ve gevşemiş klemens en sık gördüğümüz arızalar. Bunları yerinde teşhis eder, parça değişimini çoğunlukla aynı gün yaparız. Otomasyon yazılımı ve iş makinesi bizim işimiz değil; pano ve tesisat tarafı bizim işimiz.',
        'Ahi Evran\'a dükkânımızdan 10–15 dakikada ulaşıyoruz. Vardiya saatinize göre mesai sonunda da gelebiliriz; işe başlamadan yapılacak işi ve tutarını bildiririz.',
      ],
      highlightedServices: ['fabrika-kumanda-panosu', 'isyeri-elektrik-servisi', 'elektrik-kesintisi', 'sigorta-atmasi'],
      localNotes: [
        {
          title: 'Kumanda panosu arızaları',
          text: 'Ahi Evran\'daki atölyeler için kontaktör, termik röle, sigorta ve faz sırası koruma gibi pano bileşenlerini araçta bulunduruyoruz. Makinenin durmasına sebep olan parçayı bulup değiştiriyor, panoyu çalışır hâlde teslim ediyoruz.',
        },
        {
          title: 'Üç faz dengesizliği',
          text: 'Bir fazın gitmesi motoru yakabilir. Faz koruma rölesi olmayan panolara röle ekliyoruz; faz kaybında makine kendini kapatıyor. Küçük bir yatırımla büyük hasarın önüne geçiyorsunuz.',
        },
        {
          title: 'Konut tarafı unutulmuyor',
          text: 'Ahi Evran\'da sanayiye yakın apartman ve evlerde de klasik arızalara bakıyoruz: sigorta atması, priz, avize, kaçak akım. Aynı ekip, aynı numara.',
        },
      ],
      arrival: 'Ahi Evran\'a dükkânımızdan 10–15 dakika içinde varıyoruz; vardiya saatine göre plan yapabiliriz.',
      landmarks: [
        'Ahi Evran Merkez',
        'Sincan Organize Sanayi Bölgesi girişi',
        'OSB-Törekent Metro İstasyonu yönü',
        'Ahi Evran atölye ve depo sokakları',
        'OSB\'ye komşu iş yerleri',
        'Ahi Evran konut blokları',
        'Fevzi Çakmak sınırı',
      ],
      faq: [
        {
          q: 'Makinemiz durdu, panoda termik atmış. Kendimiz kaldırabilir miyiz?',
          a: 'Bir kez kaldırabilirsiniz. Tekrar atıyorsa motor aşırı yükleniyor ya da bir faz eksik demektir; zorlamayın. Bizi arayın, akım ölçüp sebebi bulalım.',
        },
        {
          q: 'Ahi Evran acil elektrikçi otomasyon ve PLC işine bakıyor mu?',
          a: 'Hayır. PLC yazılımı ve otomasyon sistemleri bizim alanımız dışında. Kumanda panosunun elektrik tarafı, kontaktör, röle, sigorta, kablolama ve tesisat işlerine bakıyoruz.',
        },
        {
          q: 'Mesai sonunda gelip üretimi aksatmadan çalışabilir misiniz?',
          a: 'Evet. Ahi Evran\'daki iş yerleri için akşam vardiya çıkışından 23:00\'e kadar çalışıyoruz. Saati birlikte belirleriz; sabah üretim başlarken pano hazır olur.',
        },
      ],
      seoTitle: 'Ahi Evran Acil Elektrikçi | Fabrika Kumanda Panosu | Demir Elektrik',
      seoDescription: 'Ahi Evran acil elektrikçi: OSB\'ye komşu atölyelerde kumanda panosu, iş yeri ve konut arızasına aynı gün servis. 08:00–23:00, 15 dakikada varış. 0506 092 58 16',
    },
  },
];

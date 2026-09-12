import type { Neighborhood } from './types';

/**
 * Keçiören mahalle sayfaları — Ankara Acil Elektrik Arıza Servisi.
 * Merkez: Sincan Menderes Mahallesi. Varış süreleri çevre yolu üzerinden gerçekçi tahmindir.
 */
export const keciorenNeighborhoods: Neighborhood[] = [
  {
    name: 'Etlik',
    slug: 'etlik-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Etlik Acil Elektrikçi',
      subtitle:
        'Etlik\'te sigorta atması, elektrik kesintisi ve iş yeri arızalarına aynı gün müdahale. 08:00–23:00 arası tek numara: 0506 092 58 16.',
      intro: [
        'Etlik, Keçiören\'in hastaneler bölgesi. Sabahtan akşama kadar hareketli; caddelerde eczaneler, kafeler, tıbbi malzeme dükkânları ve üst katlarda yoğun apartman daireleri var. Böyle bir yerde elektrik gittiğinde herkesin işi aksar. Biz Etlik acil elektrikçi çağrılarına önce telefonda kısa bir ön teşhisle başlıyoruz; çoğu zaman sorunun ne olduğunu daha yola çıkmadan anlıyoruz.',
        'Etlik elektrik arıza taleplerinin büyük kısmı iki başlıkta toplanıyor: apartman dairelerinde tekrar tekrar atan sigorta ve iş yerlerinde bir bölümün aniden elektriksiz kalması. İkisinde de aceleye gelmiyoruz. Panoyu açıyor, hattı ölçüyor, arızanın kaynağını bulup öyle onarıyoruz. İşe başlamadan önce ne yapacağımızı ve ücretini net söylüyoruz.',
        'Sincan Menderes\'ten Etlik\'e çevre yoluyla geliyoruz. Yola çıkarken sizi arayıp tahmini varış saatini veriyoruz. Haftanın 7 günü 08:00–23:00 arası bu bölgeye çıkıyoruz.',
      ],
      highlightedServices: ['acil-elektrikci', 'sigorta-atmasi', 'isyeri-elektrik-servisi', 'elektrik-kesintisi'],
      localNotes: [
        {
          title: 'İş yerlerinde kesintisiz çalışma',
          text: 'Etlik\'teki eczane, klinik ve dükkânlarda elektrik arızası doğrudan ciro kaybı demek. Bu tür çağrılarda öncelik veriyoruz; mümkünse müşteri saatinin dışına denk getirip işi kısa tutuyoruz.',
        },
        {
          title: 'Çok katlı apartmanlarda yük dengesi',
          text: 'Etlik\'te 8–10 katlı binalar çok. Klima, kombi ve elektrikli ocak aynı hatta binince sigorta ısınıp atıyor. Hatları ayırıp panoyu düzenliyoruz; sorun kalıcı olarak bitiyor.',
        },
        {
          title: 'Hastane çevresinde park ve erişim',
          text: 'Hastaneler bölgesinde park zor olabiliyor. Gelmeden önce bina girişini ve en yakın park yerini soruyoruz; böylece vakit kaybetmeden içeri giriyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Etlik\'e çevre yolu üzerinden yaklaşık 30–40 dakika.',
      landmarks: [
        'Etlik Merkez',
        'Etlik hastaneler bölgesi',
        'Etlik Caddesi çevresi',
        'Etlik çarşı ve eczaneler hattı',
        'Etlik apartman blokları',
        'Keçiören–Etlik ana aks',
      ],
      faq: [
        {
          q: 'Etlik\'te sigorta sürekli atıyor, ne yapmalıyım?',
          a: 'Önce panodaki ana şalteri kapatıp bizi arayın. Telefonda hangi sigortanın attığını sorarız, buna göre ilk teşhisi koyarız. Aynı gün gelip hattı ölçer, sorunu kökten çözeriz.',
        },
        {
          q: 'İş yerimizde elektrik gitti, mesai saatinde gelebilir misiniz?',
          a: 'Evet. Etlik\'teki iş yerlerine mesai içinde de mesai sonrasında da çıkıyoruz. 08:00–23:00 arası arayın; varış saatini yola çıkarken bildiririz.',
        },
        {
          q: 'Gelmeden önce ücret bilgisi veriyor musunuz?',
          a: 'Telefonda arızayı dinledikten sonra tahmini bir aralık söylüyoruz. Yerinde kesin bilgiyi verip onayınızı aldıktan sonra işe başlıyoruz.',
        },
      ],
      seoTitle: 'Etlik Acil Elektrikçi | Hastaneler Bölgesi Aynı Gün | Demir Elektrik',
      seoDescription:
        'Etlik acil elektrikçi: sigorta atması, elektrik kesintisi, iş yeri ve apartman arızalarına aynı gün müdahale. 08:00–23:00, 7 gün. Hemen arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Ovacık',
    slug: 'ovacik-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Ovacık Acil Elektrikçi',
      subtitle:
        'Ovacık\'ta yeni siteler ve müstakil evler için acil elektrik arıza servisi. Aynı gün geliyor, işe başlamadan fiyat veriyoruz.',
      intro: [
        'Ovacık, Keçiören\'in kuzeyinde hızla büyüyen bir mahalle. Bir yanda yeni yapılmış siteler, diğer yanda bahçeli müstakil evler var. Yeni binada elektrik arızası olmaz diye düşünülür ama olur; çoğu zaman sorun tesisatta değil, teslimden sonra yapılan eklemelerde. Ovacık acil elektrikçi çağrılarında ilk baktığımız yer burası.',
        'Müstakil evlerde ise tablo farklı. Bahçe aydınlatması, su motoru, garaj hattı derken ana panoya bağlanan devre sayısı artıyor. Kaçak akım rölesi bu yüzden sık atıyor. Ovacık elektrik arıza taleplerinde hangi devrenin sorun çıkardığını tek tek ölçerek buluyoruz; tahminle sigorta değiştirmiyoruz.',
        'Sincan\'dan Ovacık\'a çevre yoluyla ulaşıyoruz. Haftanın 7 günü 08:00–23:00 arası çağrı alıyoruz. Yola çıkmadan önce tahmini varış süresini ve ücret aralığını söylüyoruz.',
      ],
      highlightedServices: ['acil-elektrikci', 'kacak-akim-tespiti', 'villa-elektrik-servisi', 'avize-spot-montaji'],
      localNotes: [
        {
          title: 'Yeni site dairelerinde eksik bırakılan işler',
          text: 'Ovacık\'taki yeni sitelerde daire teslim edilirken avize ve spot montajı çoğu zaman ev sahibine kalıyor. Bu işleri elektrik arızasıyla birlikte tek seferde bitiriyoruz.',
        },
        {
          title: 'Müstakil evde bahçe ve dış hat',
          text: 'Dış mekân prizleri, bahçe lambaları ve motor hatları yağmurdan sonra kaçak yapabiliyor. Dış devreleri ayrı sigortaya alıp evin içini etkilemesini önlüyoruz.',
        },
        {
          title: 'Kuzey rüzgârı ve hava hattı',
          text: 'Ovacık\'ın açık kesimlerinde rüzgârlı havalarda kesinti şikâyeti artıyor. Sorunun binada mı şebekede mi olduğunu telefonda ayırt ediyoruz; şebeke kaynaklıysa boşuna yol yaptırmıyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Ovacık\'a çevre yolu üzerinden yaklaşık 35–45 dakika.',
      landmarks: [
        'Ovacık Merkez',
        'Ovacık yeni site bölgesi',
        'Ovacık müstakil evler kesimi',
        'Keçiören kuzey aksı',
        'Ovacık–Bağlum bağlantı yolu',
        'Ovacık bahçeli konutlar',
      ],
      faq: [
        {
          q: 'Ovacık\'ta müstakil eve de geliyor musunuz?',
          a: 'Evet. Ovacık\'taki bahçeli ve müstakil evlere düzenli olarak çıkıyoruz. Bahçe, garaj ve su motoru hatları dahil tüm tesisata bakıyoruz.',
        },
        {
          q: 'Yeni dairede kaçak akım rölesi neden atıyor?',
          a: 'Genellikle sonradan takılan bir cihaz ya da nemli bir priz devresi sebep oluyor. Devreleri sırayla ölçüp hangisinin kaçak yaptığını buluyor, o noktayı onarıyoruz.',
        },
        {
          q: 'Aynı gün gelebiliyor musunuz?',
          a: 'Ovacık için evet. 08:00–23:00 arası arayın; çevre yolu üzerinden yaklaşık 35–45 dakikada oradayız. Kesin saati yola çıkarken bildiririz.',
        },
      ],
      seoTitle: 'Ovacık Acil Elektrikçi | Site ve Müstakil Ev Servisi | Demir Elektrik',
      seoDescription:
        'Ovacık acil elektrikçi: yeni site daireleri ve müstakil evlerde sigorta atması, kaçak akım, avize montajı. Aynı gün, 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Bağlum',
    slug: 'baglum-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Bağlum Acil Elektrikçi',
      subtitle:
        'Bağlum\'da bağ evi, müstakil ev ve bahçe tesisatı arızalarına aynı gün müdahale. Kaçak akım tespitinde ölçerek çalışıyoruz.',
      intro: [
        'Bağlum, Keçiören\'in kuzey ucunda; bağ evleri, bahçeli müstakil evler ve yeni yeni artan siteler bir arada. Buradaki elektrik arızaları şehir merkezindekilerden farklı. Bahçe sulama motoru, dış aydınlatma, kümes ve depo hatları eve gelen tek panoya bağlı. Bir yerde nem oldu mu kaçak akım rölesi bütün evi kapatıyor.',
        'Bağlum acil elektrikçi çağrılarında bu yüzden önce dış devreleri ayırıyoruz. Ev içini hemen açıp yaşamı normale döndürüyor, sonra kaçak yapan hattı sakin sakin buluyoruz. Bağlum elektrik arıza taleplerinde sorunun çoğu toprak hattı ve dış kutu bağlantılarından çıkıyor; ikisini de yerinde düzeltiyoruz.',
        'Sincan Menderes\'ten Bağlum\'a çevre yolu ve Keçiören kuzey aksı üzerinden geliyoruz. 08:00–23:00 arası haftanın 7 günü hizmet veriyoruz. İşe başlamadan önce ücreti söylüyoruz.',
      ],
      highlightedServices: ['kacak-akim-tespiti', 'villa-elektrik-servisi', 'ev-elektrik-tesisati', 'sigorta-atmasi'],
      localNotes: [
        {
          title: 'Bağ evlerinde eski tesisat',
          text: 'Bağlum\'daki bağ evlerinin bir kısmı yıllar önce yapılmış; kablolar incelmiş, toprak hattı eksik olabiliyor. Riskli noktaları tespit edip önce güvenliği sağlıyoruz, yenilemeyi sonra planlıyoruz.',
        },
        {
          title: 'Sulama motoru ve dış priz',
          text: 'Bahçe motorları ve dış prizler yağmurdan sonra kaçak yapıyor. Dış hatları ayrı kaçak akım rölesine bağlayıp evin içiyle bağımsız hale getiriyoruz.',
        },
        {
          title: 'Uzak adreslere net tarif',
          text: 'Bağlum\'da bazı evler ana yoldan içeride kalıyor. Konum paylaşmanız yeterli; WhatsApp\'tan gelen konumla doğrudan kapıya geliyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Bağlum\'a çevre yolu üzerinden yaklaşık 40–45 dakika.',
      landmarks: [
        'Bağlum Merkez',
        'Bağlum bağ evleri bölgesi',
        'Bağlum müstakil ve bahçeli konutlar',
        'Bağlum yeni site kesimi',
        'Ovacık–Bağlum bağlantı yolu',
        'Bağlum kuzey çıkışı',
      ],
      faq: [
        {
          q: 'Bağlum\'daki bağ evine hafta sonu gelir misiniz?',
          a: 'Evet. Cumartesi ve pazar dahil 08:00–23:00 arası çıkıyoruz. Bağ evine gitmeden önce konumu paylaşırsanız yolu şaşırmadan geliriz.',
        },
        {
          q: 'Yağmur yağınca elektrik kesiliyor, sebebi ne?',
          a: 'Büyük ihtimalle dış hatlarda nem kaynaklı kaçak var. Dış prizleri, bahçe lambalarını ve motor kutusunu ölçüp kaçak yapan noktayı buluyor, hattı ayırıyoruz.',
        },
        {
          q: 'Toprak hattı yoksa ne yapıyorsunuz?',
          a: 'Önce mevcut durumu ölçüyoruz. Toprak hattı eksik ya da zayıfsa güvenlik için bir çözüm öneriyor, ücretini söyleyip onayınızla uyguluyoruz.',
        },
      ],
      seoTitle: 'Bağlum Acil Elektrikçi | Bağ Evi ve Kaçak Akım | Demir Elektrik',
      seoDescription:
        'Bağlum acil elektrikçi: bağ evi, müstakil ev ve bahçe tesisatında kaçak akım, sigorta atması, arıza tespiti. Aynı gün, 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Ayvalı',
    slug: 'ayvali-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Ayvalı Acil Elektrikçi',
      subtitle:
        'Ayvalı\'da apartman daireleri ve çarşı esnafı için aynı gün elektrik arıza servisi. Telefonda ön teşhis, yerinde net fiyat.',
      intro: [
        'Ayvalı, Keçiören\'in en kalabalık mahallelerinden biri. Sık dokulu apartmanlar, alt katlarda dükkânlar ve hareketli bir çarşı var. Bu yoğunlukta elektrik arızası hızla büyüyor: bir dairedeki sorun sigorta panosu üzerinden komşuyu, komşu da apartmanı etkileyebiliyor. Ayvalı acil elektrikçi çağrılarında bu zinciri erken kesmeye odaklanıyoruz.',
        'Ayvalı elektrik arıza taleplerinde en sık karşılaştığımız durumlar: dairede tek sigorta atıp bir odanın karanlıkta kalması, çarşıdaki dükkânda tabela ve soğutucunun aynı anda devre dışı kalması, priz ve anahtarların ısınması. Hepsine aynı yaklaşımı uyguluyoruz; ölç, bul, onar. Parça değişimine gerek varsa önce söylüyoruz.',
        'Sincan\'dan Ayvalı\'ya çevre yolu ile geliyoruz. Haftanın her günü 08:00–23:00 arası arayabilirsiniz. Varış saatini yola çıkarken bildiriyoruz.',
      ],
      highlightedServices: ['sigorta-atmasi', 'priz-anahtar-tamiri', 'isyeri-elektrik-servisi', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Çarşıdaki dükkânlarda tabela ve soğutucu',
          text: 'Ayvalı çarşısındaki esnafın en sık derdi gece açık kalan tabela ve soğutucuların hattı aşırı yüklemesi. Yükü ayırıp dükkânı sabah yeniden açılır hâle getiriyoruz.',
        },
        {
          title: 'Dar sokaklarda hızlı erişim',
          text: 'Ayvalı\'nın iç sokakları dar ve park sıkışık. Gelmeden önce bina ve kapı numarasını netleştiriyoruz; araçtan indiğimiz an panonun başındayız.',
        },
        {
          title: 'Priz ve anahtar yenileme',
          text: 'Kalabalık dairelerde prizler çok kullanılıyor, gevşiyor ve ısınıyor. Isınan prizi bekletmiyoruz; aynı ziyarette değiştirip bağlantıyı sağlamlaştırıyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Ayvalı\'ya çevre yolu üzerinden yaklaşık 30–40 dakika.',
      landmarks: [
        'Ayvalı Merkez',
        'Ayvalı çarşı bölgesi',
        'Ayvalı apartman blokları',
        'Ayvalı ana cadde hattı',
        'Ayvalı–Etlik bağlantısı',
        'Ayvalı iç sokaklar',
      ],
      faq: [
        {
          q: 'Ayvalı\'da dükkânımın elektriği gitti, ne kadar sürede gelirsiniz?',
          a: 'Sincan\'dan çevre yolu ile yaklaşık 30–40 dakika. Aradığınızda kesin saati söylüyoruz. Bu arada soğutucu gibi kritik cihazları kapatmanızı öneririz.',
        },
        {
          q: 'Priz ısınıyor, tehlikeli mi?',
          a: 'Evet, ısınan priz gevşek bağlantı ya da aşırı yük işaretidir. O prizi kullanmayı bırakın, sigortasını kapatın ve bizi arayın. Aynı gün gelip değiştiriyoruz.',
        },
        {
          q: 'Sigorta atınca kendim kaldırabilir miyim?',
          a: 'Bir kez kaldırabilirsiniz. Tekrar atarsa zorlamayın; arıza devam ediyor demektir. Bizi arayın, telefonda kısaca ne olduğunu anlayıp geliriz.',
        },
      ],
      seoTitle: 'Ayvalı Acil Elektrikçi | Çarşı ve Apartman Aynı Gün | Demir Elektrik',
      seoDescription:
        'Ayvalı acil elektrikçi: apartman dairesi ve çarşı esnafına sigorta atması, priz-anahtar, iş yeri arızasında aynı gün servis. 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Kalaba',
    slug: 'kalaba-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Kalaba Acil Elektrikçi',
      subtitle:
        'Kalaba\'da belediye çevresi, esnaf ve apartmanlar için elektrik arıza servisi. Aynı gün müdahale, işe başlamadan fiyat.',
      intro: [
        'Kalaba, Keçiören\'in merkezi. Belediye binası çevresinde yoğun esnaf, cadde boyunca dükkânlar ve arkalarda apartmanlar. Buradaki elektrik arızaları genelde "işim duruyor" diye başlıyor: kasa çalışmıyor, vitrin karanlık, klima devreye girmiyor. Kalaba acil elektrikçi çağrılarında bu yüzden ilk sorumuz hangi bölümün elektriksiz kaldığı; cevaba göre ne getireceğimizi planlıyoruz.',
        'Kalaba elektrik arıza taleplerinde iş yeri ağırlıklı çalışıyoruz ama apartman daireleri de çok. Merkezdeki binaların bir kısmı 30–40 yıllık; sigorta kutuları eski, kablolar zamanla yorulmuş. Bu binalarda geçici çözüm yerine panoyu düzgün hale getiriyoruz. Ne yapacağımızı ve ücretini söylemeden ele almıyoruz.',
        'Sincan Menderes\'ten Kalaba\'ya çevre yoluyla ulaşıyoruz. 08:00–23:00 arası haftanın 7 günü çağrı alıyoruz; esnaf için kapanış saatinden sonra da geliyoruz.',
      ],
      highlightedServices: ['isyeri-elektrik-servisi', 'elektrik-panosu-yenileme', 'elektrik-kesintisi', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Esnafa kapanıştan sonra servis',
          text: 'Kalaba\'daki dükkânlarda mesai içinde tadilat müşteriyi kaçırıyor. Sizinle saat belirleyip kapanıştan sonra gelip işi bitiriyoruz; sabah her şey hazır oluyor.',
        },
        {
          title: 'Eski sigorta kutuları',
          text: 'Merkezdeki eski binalarda buşonlu sigorta ve yıpranmış kutular hâlâ var. Bunları otomatik sigorta ve kaçak akım rölesiyle yeniliyor, panoyu güvenli hale getiriyoruz.',
        },
        {
          title: 'Kesinti binada mı şebekede mi?',
          text: 'Kalaba\'da toplu kesinti olduğunda çok çağrı geliyor. Telefonda komşuların durumunu soruyor, şebeke kesintisiyse sizi boşuna bekletmiyoruz; bina kaynaklıysa hemen çıkıyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Kalaba\'ya çevre yolu üzerinden yaklaşık 30–40 dakika.',
      landmarks: [
        'Kalaba Merkez',
        'Keçiören Belediyesi çevresi',
        'Kalaba esnaf ve cadde hattı',
        'Kalaba apartman bölgesi',
        'Keçiören merkez aksı',
        'Kalaba–Etlik bağlantısı',
      ],
      faq: [
        {
          q: 'Kalaba\'da dükkânımda elektrik yok ama sigorta atmamış, sebebi ne olabilir?',
          a: 'Ana şalter, sayaç sonrası bağlantı ya da nötr hattı kaynaklı olabilir. Telefonda birkaç soruyla daraltıyor, sonra gelip ölçerek kesin sebebi buluyoruz.',
        },
        {
          q: 'Eski panoyu yenilemek şart mı?',
          a: 'Buşonlu sigorta ve kaçak akım rölesi olmayan panolar risk taşıyor. Zorunlu demiyoruz; durumu gösterip seçenekleri ve ücretini anlatıyoruz, karar sizin.',
        },
        {
          q: 'Akşam saatinde de geliyor musunuz?',
          a: 'Evet, 23:00\'e kadar çıkıyoruz. Esnaf için kapanış sonrası saatler bizim için de uygun; işi müşteri olmadan rahatça bitiriyoruz.',
        },
      ],
      seoTitle: 'Kalaba Acil Elektrikçi | Merkez Esnaf ve Apartman | Demir Elektrik',
      seoDescription:
        'Kalaba acil elektrikçi: Keçiören merkezde iş yeri arızası, elektrik kesintisi, pano yenileme ve sigorta atmasına aynı gün servis. 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Kuşcağız',
    slug: 'kuscagiz-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Kuşcağız Acil Elektrikçi',
      subtitle:
        'Kuşcağız\'da eski apartmanlarda kolon hattı, nötr kopması ve sigorta atması için aynı gün elektrik arıza servisi.',
      intro: [
        'Kuşcağız, Keçiören\'in eski yerleşim mahallelerinden. Apartmanların büyük bölümü 25–35 yıllık; kolon hatları, sayaç panoları ve daire içi tesisat o dönemin standardıyla yapılmış. Bu binalarda tek bir dairenin değil, tüm apartmanın etkilendiği arızalar görüyoruz. Kuşcağız acil elektrikçi çağrılarının önemli bir kısmı böyle başlıyor: "bir katta elektrik var, bir katta yok" ya da "lambalar bir parlıyor bir sönüyor".',
        'Bu belirtiler çoğu zaman nötr hattındaki gevşeklik ya da kolon hattında bağlantı sorununa işaret ediyor. Tehlikeli bir durum; cihazlara yüksek gerilim gidebilir. Kuşcağız elektrik arıza çağrılarında bu belirtileri duyduğumuzda önce ana şalteri kapatmanızı söylüyor, sonra en kısa sürede yola çıkıyoruz. Yerinde sayaç panosundan daireye kadar tüm hattı ölçüyoruz.',
        'Sincan Menderes\'ten Kuşcağız\'a çevre yoluyla geliyoruz. Haftanın 7 günü 08:00–23:00 arası hizmet veriyoruz. Ne yapacağımızı ve ücretini işe başlamadan söylüyoruz.',
      ],
      highlightedServices: ['bina-ortak-alan-elektrigi', 'elektrik-panosu-yenileme', 'sigorta-atmasi', 'elektrik-kesintisi'],
      localNotes: [
        {
          title: 'Nötr kopması belirtileri',
          text: 'Lambaların parlayıp sönmesi, bazı prizlerde voltajın yükselmesi nötr kopması işaretidir. Kuşcağız\'daki eski binalarda buna sık rastlıyoruz. Hemen şalteri kapatın; cihazlarınız zarar görmeden müdahale edelim.',
        },
        {
          title: 'Kolon hattı ve sayaç panosu',
          text: 'Bodrumdaki sayaç panosundan dairelere giden kolon hatları yıllar içinde gevşiyor, klemensler ısınıyor. Bağlantıları sıkıp yanmış parçaları değiştiriyor, gerekirse yönetime kalıcı yenileme öneriyoruz.',
        },
        {
          title: 'Apartman yönetimiyle ortak çalışma',
          text: 'Ortak alan arızalarında yöneticiyle konuşup işi planlıyoruz. Merdiven aydınlatması, kapı zili ve hidrofor hattı gibi ortak devreler de kapsamımızda.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Kuşcağız\'a çevre yolu üzerinden yaklaşık 30–40 dakika.',
      landmarks: [
        'Kuşcağız Merkez',
        'Kuşcağız eski apartman bölgesi',
        'Kuşcağız ana cadde hattı',
        'Kuşcağız–Kalaba bağlantısı',
        'Kuşcağız iç mahalle sokakları',
        'Keçiören merkez yakını',
      ],
      faq: [
        {
          q: 'Evde lambalar bir parlıyor bir sönüyor, ne yapmalıyım?',
          a: 'Hemen ana şalteri kapatın ve elektrikli cihazları fişten çekin. Bu nötr sorunu olabilir ve cihazları yakabilir. Bizi arayın; Kuşcağız\'a aynı gün geliyoruz.',
        },
        {
          q: 'Apartmanın bir katında elektrik yok, sadece bizde mi sorun var?',
          a: 'Kolon hattında faz kaybı olabilir. Komşularınızı da etkiliyorsa sayaç panosuna bakmamız gerekir. Yöneticiyle birlikte gelip hattı ölçüyoruz.',
        },
        {
          q: 'Eski binada daire panosunu yenilemek ne kadar sürer?',
          a: 'Daire panosu genellikle aynı gün içinde birkaç saatte yenileniyor. Gelmeden önce mevcut panonun fotoğrafını WhatsApp\'tan gönderirseniz süreyi ve ücreti daha net söyleriz.',
        },
      ],
      seoTitle: 'Kuşcağız Acil Elektrikçi | Eski Apartman ve Kolon Hattı | Demir Elektrik',
      seoDescription:
        'Kuşcağız acil elektrikçi: eski apartmanlarda nötr kopması, kolon hattı, sigorta atması ve ortak alan arızalarına aynı gün servis. 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Aktepe',
    slug: 'aktepe-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    content: {
      h1: 'Aktepe Acil Elektrikçi',
      subtitle:
        'Aktepe\'de kentsel dönüşüm siteleri ve yamaç konutları için acil elektrik arıza servisi. Aynı gün müdahale, telefonda ön teşhis.',
      intro: [
        'Aktepe, Keçiören\'in yamaç mahallelerinden; son yıllarda kentsel dönüşümle çehresi değişiyor. Eski gecekondu ve iki katlı evlerin yerini yeni siteler alıyor. Bu geçiş döneminde iki farklı tesisat dünyası yan yana: bir tarafta yeni panolu, kaçak akım röleli daireler; diğer tarafta yıllar önce çekilmiş, çoğu ekleme yapılmış eski hatlar. Aktepe acil elektrikçi çağrılarında hangi tarafta olduğunuz yaklaşımımızı belirliyor.',
        'Yeni sitelerde en sık çağrı avize-spot montajı, ek priz hattı ve teslim sonrası fark edilen küçük tesisat eksikleri. Eski konutlarda ise sigorta atması, yanık koku ve prizlerin çalışmaması öne çıkıyor. Aktepe elektrik arıza taleplerinde ikisini de aynı disiplinle ele alıyoruz: önce ölçüyor, sebebi buluyor, sonra onarıyoruz.',
        'Sincan Menderes\'ten Aktepe\'ye çevre yolu üzerinden geliyoruz. 08:00–23:00 arası haftanın 7 günü çağrı alıyoruz. İşe başlamadan önce ücreti net söylüyoruz.',
      ],
      highlightedServices: ['ev-elektrik-tesisati', 'avize-spot-montaji', 'sigorta-atmasi', 'acil-elektrikci'],
      localNotes: [
        {
          title: 'Yeni dairede teslim sonrası işler',
          text: 'Aktepe\'deki dönüşüm sitelerinde daireler çoğunlukla avizesiz teslim ediliyor. Avize, spot ve ek priz işlerini bir ziyarette tamamlıyor, panoda etiketleme yapıp hangi sigorta neye gidiyor gösteriyoruz.',
        },
        {
          title: 'Yamaçta eski evlerde yanık kokusu',
          text: 'Eski konutlarda yanık kokusu genellikle gevşek klemens ya da aşırı yüklü kablodan geliyor. Bu bir acil durum; şalteri kapatın ve arayın. Aynı gün gelip ısınan noktayı buluyoruz.',
        },
        {
          title: 'Eğimli sokaklarda ulaşım',
          text: 'Aktepe\'nin yokuşlu sokakları araçla dolaşmayı zorlaştırıyor. Adresi ve varsa site adını önceden alıyor, en uygun girişten geliyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Aktepe\'ye çevre yolu üzerinden yaklaşık 35–45 dakika.',
      landmarks: [
        'Aktepe Merkez',
        'Aktepe kentsel dönüşüm siteleri',
        'Aktepe yamaç konutları',
        'Aktepe ana cadde hattı',
        'Aktepe–Kuşcağız bağlantısı',
        'Aktepe yeni yapılaşma bölgesi',
      ],
      faq: [
        {
          q: 'Aktepe\'de yeni taşındığımız dairede avize taktırmak istiyoruz, arıza olmadan da gelir misiniz?',
          a: 'Evet. Avize, spot ve priz montajı için de çıkıyoruz. Kaç nokta olduğunu söylerseniz süreyi ve ücreti telefonda belirtiriz.',
        },
        {
          q: 'Eski evde yanık kokusu geliyor ama sigorta atmıyor, ne yapmalıyım?',
          a: 'Ana şalteri hemen kapatın, kokunun geldiği yere dokunmayın. Bu gevşek bağlantı belirtisidir ve yangına dönüşebilir. Bizi arayın; öncelikli olarak geliyoruz.',
        },
        {
          q: 'Kentsel dönüşüm öncesi eski evimizde geçici onarım yapar mısınız?',
          a: 'Evet. Yıkılacak binada büyük yenileme mantıklı değil; güvenli ve ekonomik geçici çözüm uyguluyoruz. Durumu gösterip seçenekleri anlatıyoruz.',
        },
      ],
      seoTitle: 'Aktepe Acil Elektrikçi | Yeni Site ve Yamaç Konut | Demir Elektrik',
      seoDescription:
        'Aktepe acil elektrikçi: kentsel dönüşüm sitelerinde avize montajı, tesisat; eski evlerde sigorta atması ve arıza. Aynı gün, 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
  {
    name: 'Subayevleri',
    slug: 'subayevleri-elektrikci',
    districtSlug: 'kecioren-elektrikci',
    locative: 'Subayevleri\'nde',
    content: {
      h1: 'Subayevleri Acil Elektrikçi',
      subtitle:
        'Subayevleri\'nde lojman ve orta yaşlı apartmanlar için elektrik arıza servisi. Aynı gün geliyor, işe başlamadan fiyat veriyoruz.',
      intro: [
        'Subayevleri, adından da anlaşılacağı gibi lojmanlarla anılan, düzenli ve sakin bir mahalle. Lojman blokları ve 20–30 yıllık apartmanlar ağırlıkta. Bu tip binalarda tesisat genellikle özenli yapılmış ama zamanla yorulmuş; sigorta kutuları eski tip, prizler ve anahtarlar çok kullanılmaktan gevşemiş. Subayevleri acil elektrikçi çağrılarının çoğu bu yorgunluktan kaynaklanıyor.',
        'Lojmanlarda ayrı bir durum daha var: daire değişimlerinde önceki kiracının yaptığı ekler. Ek priz, kombi hattı, klima devresi derken pano düzensizleşiyor. Subayevleri elektrik arıza taleplerinde önce panoyu düzenliyor, hangi sigortanın neye gittiğini etiketliyoruz. Sonrasında arızayı bulmak da, sizin kullanmanız da kolaylaşıyor.',
        'Sincan Menderes\'ten Subayevleri\'ne çevre yoluyla geliyoruz. Haftanın 7 günü 08:00–23:00 arası hizmet veriyoruz. Telefonda ön teşhis yapıp tahmini varış saatini bildiriyoruz.',
      ],
      highlightedServices: ['priz-anahtar-tamiri', 'elektrik-panosu-yenileme', 'sigorta-atmasi', 'bina-ortak-alan-elektrigi'],
      localNotes: [
        {
          title: 'Lojman dairelerinde düzenli teslim',
          text: 'Lojmandan çıkarken ya da girerken tesisatın düzgün olması isteniyor. Subayevleri\'nde priz-anahtar yenileme, pano düzenleme ve kontrol işlerini tek ziyarette yapıp size temiz bir tesisat bırakıyoruz.',
        },
        {
          title: 'Orta yaşlı apartmanda ortak alan',
          text: 'Merdiven otomatiği, kapı zili paneli ve asansör besleme hattı gibi ortak devreler bu binalarda sık arızalanıyor. Apartman yönetimiyle görüşüp ortak alan işlerini de üstleniyoruz.',
        },
        {
          title: 'Kombi ve klima hattı ekleri',
          text: 'Sonradan eklenen kombi ve klima devreleri çoğu zaman mevcut sigortaya bağlanmış. Bunları ayrı sigortaya alıyor, aşırı yüklenmeyi ve sık sigorta atmasını ortadan kaldırıyoruz.',
        },
      ],
      arrival: 'Sincan Menderes\'ten Subayevleri\'ne çevre yolu üzerinden yaklaşık 30–40 dakika.',
      landmarks: [
        'Subayevleri Merkez',
        'Subayevleri lojman blokları',
        'Subayevleri apartman bölgesi',
        'Subayevleri ana cadde hattı',
        'Subayevleri–Aktepe bağlantısı',
        'Keçiören merkez yakın kesim',
      ],
      faq: [
        {
          q: 'Subayevleri\'nde lojmana giriş öncesi elektrik kontrolü yapar mısınız?',
          a: 'Evet. Panoyu, prizleri ve kaçak akım rölesini kontrol ediyor, sorunlu noktaları listeleyip ücretini söylüyoruz. Onaylarsanız aynı ziyarette düzeltiyoruz.',
        },
        {
          q: 'Klima çalışınca sigorta atıyor, çözüm ne?',
          a: 'Klima büyük ihtimalle başka cihazlarla aynı sigortaya bağlı. Klimaya ayrı hat ve sigorta çekiyoruz; bu işlem çoğu dairede aynı gün bitiyor.',
        },
        {
          q: 'Apartman ortak alanı için yöneticimiz mi aramalı?',
          a: 'Fark etmez; siz de arayabilirsiniz. Ortak alan işlerinde yöneticiyle iletişime geçip işi ve ücreti onunla netleştiriyor, sonra geliyoruz.',
        },
      ],
      seoTitle: 'Subayevleri Acil Elektrikçi | Lojman ve Apartman Servisi | Demir Elektrik',
      seoDescription:
        'Subayevleri acil elektrikçi: lojman ve apartman dairelerinde sigorta atması, priz-anahtar, pano yenileme ve ortak alan arızası. Aynı gün, 08:00–23:00. Arayın: 0506 092 58 16',
    },
  },
];

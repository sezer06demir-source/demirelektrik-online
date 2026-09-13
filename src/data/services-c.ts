import type { Service } from './types';

/**
 * Kaçak akım rölesi odaklı hizmetler. Röle montajı, değişimi ve sürekli atma
 * sorunları ayrı ele alınır; tespit ve ölçüm tarafı `kacak-akim-tespiti` sayfasındadır.
 */
export const servicesC: Service[] = [
  {
    slug: 'kacak-akim-rolesi-montaji',
    title: 'Kaçak Akım Rölesi Montajı ve Değişimi',
    shortTitle: 'Kaçak Akım Rölesi',
    icon: 'shield-check',
    group: 'kurulum',
    excerpt: 'Panoya 30 mA kaçak akım rölesi takıyor, eskiyen ya da test tuşuna yanıt vermeyen röleyi değiştiriyoruz.',
    description: [
      'Kaçak akım rölesi, elektrik tesisatında insanı koruyan tek parçadır. Sigorta kabloyu korur; röle ise elektriğin gitmesi gereken yerden sapıp bir insanın üzerinden geçtiğini milisaniyeler içinde anlar ve hattı keser. Konutlarda 30 mA\'lik röle bu iş için kullanılır. Eski yapıların bir kısmında bu röle hiç takılmamıştır, bir kısmında ise yıllar önce takılmış ve artık çalışmıyordur.',
      'Ankara\'da en sık iki talep alıyoruz: panosunda hiç kaçak akım rölesi olmayan evlere yeni röle takmak ve test tuşuna basıldığında atmayan, ya da tam tersi sürekli atan röleyi değiştirmek. İkisi de aynı gün biten işlerdir; röleyi araçta taşıyoruz.',
      'Montajdan önce tesisatı ölçeriz. Röleyi takıp da hemen atıyorsa sorun rölede değil hattadır; o zaman önce kaçağı buluruz, sonra röleyi devreye alırız. Sırayı tersine çevirmek müşteriye ikinci bir gün kaybettirir.',
    ],
    symptoms: [
      'Sigorta kutusunda yalnızca sigortalar var, test tuşlu bir cihaz yok',
      'Rölenin test tuşuna basıyorsunuz ama röle atmıyor',
      'Röle günde birkaç kez, özellikle yağmurlu havada atıyor',
      'Çamaşır makinesi ya da bulaşık makinesi çalışırken röle düşüyor',
      'Röle atınca kaldırmak için birkaç kez denemek gerekiyor',
      'Pano etiketsiz; hangi rölenin hangi hattı koruduğu belli değil',
    ],
    whatWeDo: [
      'Panoyu açıp mevcut koruma düzenini çıkarıyoruz: ana şalter, sigortalar, varsa röle',
      'Tesisatın yalıtım direncini ve kaçak akım değerini ölçüyoruz',
      'Konut hatlarına 30 mA, ana girişe gerekiyorsa 300 mA röle seçiyoruz',
      'Röleyi ray üzerine monte edip faz ve nötr bağlantılarını doğru sırayla yapıyoruz',
      'Test tuşuyla ve cihaz yüküyle deneyip atma süresini kontrol ediyoruz',
      'Pano kapağına hangi rölenin neyi koruduğunu etiketliyoruz',
    ],
    beforeWeArrive: [
      'Röle sürekli atıyorsa hangi cihaz çalışırken attığını not edin; teşhisi kısaltır.',
      'Tüm cihazları prizden çekip röleyi bir kez kaldırın. Böyle duruyorsa kaçak bir cihazdadır.',
      'Röle kalkmıyorsa ısrarla zorlamayın; içindeki mekanizma yıpranır.',
      'Pano kapağınızın fotoğrafını WhatsApp\'tan gönderin, gelirken doğru röleyi hazırlayalım.',
    ],
    practical: [
      { label: 'Ortalama süre', value: 'Montaj 45–90 dk, değişim 30–45 dk' },
      { label: 'Ücret', value: 'Ölçüm sonrası, işe başlamadan söylenir' },
      { label: 'Malzeme', value: '30 mA ve 300 mA röleler araçta hazır' },
    ],
    faq: [
      {
        q: 'Kaçak akım rölesi takmak zorunlu mu?',
        a: 'Elektrik iç tesisat kurallarına göre konutlarda kaçak akım koruması bulunmalıdır. Eski binaların bir bölümünde bu röle yoktur; yeni tesisat ve pano yenilemelerinde mutlaka takıyoruz.',
      },
      {
        q: 'Kaçak akım rölesi sürekli atıyor, röleyi değiştirsek geçer mi?',
        a: 'Çoğu zaman geçmez. Röle görevini yaptığı için atıyor olabilir; arıza hatta ya da bir cihazdadır. Önce ölçüm yapar, kaçağın kaynağını buluruz; röle gerçekten arızalıysa onu da değiştiririz.',
      },
      {
        q: 'Test tuşuna ne sıklıkla basmalıyım?',
        a: 'Ayda bir yeterli. Tuşa bastığınızda röle hemen atmalı. Atmıyorsa koruma çalışmıyor demektir ve rölenin değişmesi gerekir.',
      },
    ],
    seoTitle: 'Kaçak Akım Rölesi Montajı ve Değişimi | Ankara | Demir Elektrik',
    seoDescription:
      'Ankara\'da kaçak akım rölesi montajı, arızalı rölenin değişimi ve sürekli atan röle sorunları. Ölçümle teşhis, aynı gün müdahale, 08:00–23:00. 0506 092 58 16',
    featured: true,
    order: 13,
  },
  {
    slug: 'kacak-akim-rolesi-atiyor',
    title: 'Kaçak Akım Rölesi Sürekli Atıyor',
    shortTitle: 'Röle Sürekli Atıyor',
    icon: 'alert-triangle',
    group: 'acil',
    excerpt: 'Röle kalkmıyor ya da birkaç dakikada bir düşüyorsa hatta kaçak vardır. Kaynağını ölçerek buluyoruz.',
    description: [
      'Kaçak akım rölesinin atması bir arıza değil, bir uyarıdır. Röle, faza giden akımla nötrden dönen akımı karşılaştırır. Arada 30 mA\'lik bir fark varsa elektriğin bir kısmı başka bir yoldan, çoğu zaman toprak üzerinden kaçıyor demektir. Röle bunu görüp hattı kesiyor. Sorun röleyi değiştirmekle bitmez; kaçağın nereden olduğunu bulmak gerekir.',
      'Ankara\'da bu çağrılar genelde iki halde gelir: röle bir türlü kalkmaz ve ev tamamen karanlıktır, ya da röle gün içinde birkaç kez düşer. İlki acildir, aynı gün geliriz. İkincisinde de beklemeyin; aralıklı atan röle çoğu zaman ıslanmış bir hattın ya da yalıtımı bozulmuş bir cihazın habercisidir.',
      'Telefonda birkaç soruyla kaçağı daraltıyoruz: röle ne zaman atıyor, hangi cihaz çalışırken, yağmurdan sonra mı. Bazı durumlarda müşteri kaynağı biz gelmeden buluyor ve iş sadece o cihazı devre dışı bırakmakla bitiyor.',
    ],
    symptoms: [
      'Röle kalkmıyor, kaldırır kaldırmaz tekrar düşüyor',
      'Yağmurlu havalarda ya da banyo kullanıldıktan sonra atıyor',
      'Belirli bir cihaz çalışınca, özellikle ısıtıcılı beyaz eşyada düşüyor',
      'Gece, kimse evde yokken kendiliğinden atmış oluyor',
      'Röle atınca birkaç deneme sonrası zar zor kalkıyor',
      'Prize dokunurken hafif karıncalanma hissediyorsunuz',
    ],
    whatWeDo: [
      'Hatları tek tek ayırıp hangi devreden kaçak geldiğini buluyoruz',
      'Yalıtım direnci ölçümüyle kablo mu, cihaz mı ayrımını yapıyoruz',
      'Nem almış buat ve priz noktalarını açıp kurutup yeniden bağlıyoruz',
      'Nötr ile toprağın temas ettiği yanlış bağlantıları düzeltiyoruz',
      'Kaçak cihazdaysa cihazı ayırıp size gösteriyoruz; servis gerekirse söylüyoruz',
      'Rölenin kendisi yıpranmışsa yerine yenisini takıp test ediyoruz',
    ],
    beforeWeArrive: [
      'Tüm cihazları prizden çekin, röleyi kaldırmayı deneyin. Kalkıyorsa cihazları teker teker takıp hangisinde attığını bulun.',
      'Röle kalkmıyorsa ısrarla zorlamayın, hattı kapalı bırakın.',
      'Islak bir yerde su sızıntısı varsa o bölgenin sigortasını indirin.',
      'Buzdolabı gibi bozulacak yükleriniz varsa bunu telefonda söyleyin, sıralamayı ona göre yaparız.',
    ],
    practical: [
      { label: 'Ortalama süre', value: 'Tespit 30–60 dk, onarım arızaya göre' },
      { label: 'Ücret', value: 'Tespit sonrası, işe başlamadan söylenir' },
      { label: 'Ölçüm', value: 'Kaçak akım ve yalıtım testi yapılır' },
    ],
    faq: [
      {
        q: 'Kaçak akım rölesi atıyor diye röleyi devre dışı bırakabilir miyim?',
        a: 'Bırakmayın. Röle attığı için bir tehlike yaratmıyor, var olan tehlikeyi gösteriyor. Devre dışı bırakmak çarpılma ve yangın riskini üzerinize alır.',
      },
      {
        q: 'Röle neden sadece yağmurlu havalarda atıyor?',
        a: 'Nem, yıpranmış kablo yalıtımından ya da dış mekan armatüründen kaçak akım geçmesini kolaylaştırır. Bu tip kaçakları kuru havada ölçmek zordur; sizden ne zaman olduğunu dinleyip ona göre bakıyoruz.',
      },
      {
        q: 'Röle atınca elektrik komple mi gidiyor?',
        a: 'Panonun kurulumuna göre değişir. Tek röle tüm daireyi besliyorsa hepsi gider. Pano yenilemesinde hatları ayırıp mutfak, banyo ve genel prizleri ayrı rölelere bölebiliyoruz; o zaman bir kaçak tüm evi karartmıyor.',
      },
    ],
    seoTitle: 'Kaçak Akım Rölesi Atıyor | Ankara Acil Elektrikçi | Demir Elektrik',
    seoDescription:
      'Kaçak akım rölesi sürekli atıyor ya da kalkmıyorsa kaçağın kaynağını ölçerek buluyoruz. Ankara geneli aynı gün servis, 08:00–23:00. 0506 092 58 16',
    featured: true,
    order: 14,
  },
  {
    slug: 'nobetci-elektrikci',
    title: 'Nöbetçi Elektrikçi ve En Yakın Elektrikçi',
    shortTitle: 'Nöbetçi Elektrikçi',
    icon: 'clock',
    group: 'acil',
    excerpt: 'Geç saatte arıza çıktığında en yakın açık elektrikçiyi ararsınız. Biz 23:00\'a kadar sahadayız.',
    description: [
      'Elektrik arızası saat gözetmez. Çoğu kişi o anda telefona sarılıp "en yakın elektrikçi", "nöbetçi elektrikçi" ya da "7/24 elektrikçi" diye arar. Açık olan ve gerçekten yola çıkacak birini bulmak, listenin en üstündeki numarayı bulmaktan zordur. Bu sayfa tam olarak bunun için: hangi saatte ne yapmanız gerektiğini yazdık.',
      'Demir Elektrik acil servisi haftanın yedi günü 08:00 ile 23:00 arasında çalışır. Bu saatler içinde telefonu bir elektrikçi açar, arızayı dinler ve size gerçekçi bir varış saati söyler. Sincan\'daki merkezimizden Ankara\'nın 25 ilçesine çıkıyoruz; yakın ilçelerde çoğu çağrıya bir saat içinde varıyoruz.',
      'Gece 23:00\'dan sonra saha ekibimiz çalışmaz. Bunu açıkça yazıyoruz, çünkü "7/24 açığız" deyip gece telefonu açmayan ya da açıp sabaha randevu veren yerlerde vakit kaybediyorsunuz. Gece çıkan arızada ne yapacağınızı aşağıda anlattık; sabah 08:00\'de sıranın başında olursunuz.',
    ],
    symptoms: [
      'Akşam saatlerinde sigorta attı, sabahı beklemek istemiyorsunuz',
      'Hafta sonu elektrik gitti ve çoğu yer kapalı',
      'Aradığınız numaralar açılmıyor ya da "yarın bakarız" diyor',
      'Mahallede güvenebileceğiniz bir elektrikçi tanımıyorsunuz',
      'İş yerinizde akşam kapanışta arıza çıktı, sabah açamayacaksınız',
      'Gece yarısı arıza çıktı, ne yapacağınızı bilmiyorsunuz',
    ],
    whatWeDo: [
      '08:00–23:00 arası telefonu elektrikçi açar, sizi sıraya değil teşhise alır',
      'Konumunuza en yakın ekibi yönlendirip gerçekçi varış saati veririz',
      'Yoldayken gecikme olursa arayıp haber veririz',
      'Akşam çağrılarında önce güvenliği sağlar, kalıcı onarımı gerekiyorsa ertesi güne planlarız',
      'Gece gelen mesajları sabah 08:00\'de ilk sırada değerlendiririz',
      'Şebeke kaynaklı kesintilerde sizi doğru yere yönlendirir, boşuna ücret almayız',
    ],
    beforeWeArrive: [
      'Gece arıza çıktıysa arızalı hattın sigortasını indirip diğer hatları açık bırakın.',
      'Yanık kokusu ya da kıvılcım varsa ana şalteri kapatın ve o prizi kullanmayın.',
      'Komşularda da elektrik yoksa sorun şebekededir; 186 Alo Elektrik hattını arayın.',
      'Sabah beklemek zorundaysanız WhatsApp\'tan yazın; 08:00\'de listenin başında olursunuz.',
    ],
    practical: [
      { label: 'Çalışma saati', value: 'Her gün 08:00 – 23:00' },
      { label: 'Varış', value: 'Yakın ilçelerde çoğu çağrıda 1 saat içinde' },
      { label: 'Gece 23:00 sonrası', value: 'Mesaj bırakın, sabah ilk iş sizsiniz' },
    ],
    faq: [
      {
        q: 'Gerçekten 7/24 elektrikçi misiniz?',
        a: 'Hayır, dürüst olalım: haftanın 7 günü 08:00–23:00 arası çalışıyoruz. Gece yarısı arıza çıkarsa güvenliği sağlamanız için telefonda yol gösteririz, sabah 08:00\'de ilk sırada size geliriz.',
      },
      {
        q: 'En yakın elektrikçi siz misiniz?',
        a: 'Sincan, Etimesgut ve Yenimahalle tarafında büyük ihtimalle en hızlı ulaşan ekiplerden biriyiz. Uzak ilçelerde de aynı gün çıkıyoruz; aradığınızda bulunduğunuz yere göre net süre söylüyoruz.',
      },
      {
        q: 'Hafta sonu ve resmî tatilde açık mısınız?',
        a: 'Cumartesi ve pazar dahil her gün açığız. Akşam ve hafta sonu için bir fiyat farkı uygulanacaksa bunu siz gelmemizi istemeden önce telefonda söyleriz.',
      },
    ],
    seoTitle: 'Nöbetçi Elektrikçi Ankara | En Yakın Acil Elektrikçi | Demir Elektrik',
    seoDescription:
      'Ankara\'da nöbetçi elektrikçi mi arıyorsunuz? Haftanın 7 günü 08:00–23:00 arası açığız, en yakın ekiple aynı gün geliyoruz. Gece için de yol gösteriyoruz. 0506 092 58 16',
    featured: true,
    order: 15,
  },
];

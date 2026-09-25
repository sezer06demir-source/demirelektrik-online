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
  {
    slug: 'ana-salter-atti-etimesgut-gece-ariza',
    title: 'Ana Şalter Attı, Bir Daha Kalkmıyor: Etimesgut’ta Gece Yarısı Ne Yapmalı?',
    description:
      'Ana şalter indi, elektrik tümden gitti, kaldırınca yeniden atıyor. Etimesgut’ta gece ya da hafta sonu bu durumla karşılaşınca ilk yapılacaklar ve kesinlikle dokunulmayacaklar. Demir Elektrik: 0506 092 58 16.',
    keyword: 'ana şalter attı',
    date: '2026-09-25',
    readingMin: 7,
    excerpt:
      'Ana şalter bir kez daha inince ev toptan karanlıkta kalır. Etimesgut’ta gece geç saatte aldığımız bu tip çağrılarda neyin şalteri attırdığını, kaldırmayı ne zaman denemeniz gerektiğini ve ne zaman elimizi hiç sürmeden beklemeniz gerektiğini anlattık.',
    intro:
      'Sigorta kutusundaki en büyük kol, genelde en üstte ya da en solda duran ana şalterdir; evin tamamına gelen elektriği tek noktadan kesip açar. Bu kol indiğinde bütün ev birden karanlığa gömülür, tek bir priz bile çalışmaz. Etimesgut’ta özellikle gece geç saatte aldığımız çağrıların önemli bir kısmı tam olarak bu: “Şalter attı, kaldırıyoruz, iki saniye sonra tekrar iniyor.” Bu yazıda ana şalterin ne işe yaradığını, neden attığını ve siz elektrikçi yolda gelirken ne yapıp ne yapmamanız gerektiğini anlatıyoruz.',
    sections: [
      {
        h: 'Ana şalter tam olarak ne yapar?',
        p: [
          'Ana şalter, sayaçtan sonra evin tüm tesisatının giriş noktasındaki kesme koludur. Altındaki sigortalar (salon, mutfak, banyo gibi) her biri ayrı bir hattı korurken, ana şalter hepsinin toplamını korur. Yani tek bir odadaki değil, evin genelindeki bir yüklenmeyi ya da kaçağı algılayıp bütün tesisatı bir seferde devre dışı bırakır.',
          'Bazı panolarda ana şalterle kaçak akım rölesi aynı kolda birleşmiştir, bazılarında ayrıdır. İkisi de düştüğünde görüntü aynıdır: her yer karanlık. Ayrımı anlamak için panoya bakıp hangi kolun aşağı indiğini görmek gerekir; telefonda bunu bize tarif etmeniz bile arızayı yarı yarıya daraltır.',
          'Etimesgut’un eski lojman tipi binalarında hâlâ buşonlu, topraksız tesisat ve tek başına çalışan basit bir ana şalter görüyoruz. Yeni sitelerde ise ana şalter genelde kaçak akım korumalı, otomat tipte. İkisinin attırma sebepleri de farklı seyrediyor.',
        ],
      },
      {
        h: 'Ana şalteri neler attırır?',
        p: [
          'En sık sebep aşırı yüklenme: aynı anda çalışan klima, elektrikli ısıtıcı, çamaşır ve bulaşık makinesi gibi güç isteyen cihazlar toplam akımı ana şalterin taşıyabileceği sınırın üstüne çıkarır. Kış aylarında ısıtıcıların devreye girdiği akşam saatlerinde bu tip çağrılar belirgin şekilde artıyor.',
          'İkinci sebep gerçek bir kaçak: nemli bir duvar içindeki kablo, banyoya yakın bozuk bir priz ya da dış cephedeki bahçe aydınlatması suyla temas ettiğinde tesisattan toprağa akım kaçar, ana şalter bunu algılayıp düşer. Bu tip arızalarda şalter kendi başına, herhangi bir cihaz çalışmıyorken bile atabilir.',
          'Üçüncü sebep, daha çok eski binalarda görüyoruz: ana şalterin ya da sayaç klemensinin kendisi yıpranmış, temas noktası gevşemiş, ısınıp zamanla arızalanmıştır. Bu durumda şalter yüklenmeden de, kaçak yokken de kendiliğinden düşebilir; sorun kolun kendisindedir.',
          'Alsancak ve Şeyh Şamil taraflarındaki otuz-kırk yaşındaki binalarda dördüncü bir sebep daha var: kolon hattı, yani sayaçtan daireye gelen ana kablo ısınıp gevşiyor. Ana şalter bu durumda arızayı önlemek için değil, zaten oluşmuş ısınmaya tepki olarak düşüyor.',
        ],
      },
      {
        h: 'Kaldırmayı deneyebilir misiniz, denemeli misiniz?',
        p: [
          'Bir kez, evet. Ana şalteri bir kez yukarı kaldırmak makul bir denemedir. Kalkıp birkaç saniye ya da dakika sonra tekrar düşmüyorsa muhtemelen geçici bir aşırı yüklenmeydi; o anda çalışan büyük cihazlardan birkaçının fişini çekip rahatlıkla bekleyebilirsiniz.',
          'Ama kalkar kalkmaz, hatta elinizi koldan çeker çekmez tekrar düşüyorsa ısrar etmeyin. Bu, tesisatta ya da bir cihazda gerçek ve sürekli bir kaçak olduğunun işaretidir. Şalteri art arda kaldırıp indirmek arızayı çözmez, sadece kontak noktalarını yorar ve kolun kendisini daha da hızlı bozar.',
          'Kalkıyor ama birkaç dakika sonra yeniden düşüyorsa, o aralıkta hangi cihazı çalıştırdığınızı hatırlamaya çalışın. Bu bilgi bizim için değerli: telefonda "klimayı açar açmaz düştü" demeniz, arızanın büyük ölçüde nerede olduğunu gösterir.',
        ],
      },
      {
        h: 'Etimesgut’ta gece ya da hafta sonu çağrısı nasıl işliyor?',
        p: [
          'Merkezimiz Sincan’da; Etimesgut merkeze, Elvankent’e ve Ahimesut’a normal şartlarda 15-20 dakikada, Bağlıca ve Göksu tarafına yaklaşık 25 dakikada ulaşıyoruz. Gece saatlerinde trafik olmadığı için bu süre genelde kısalıyor, hafta sonu akşamlarında biraz uzayabiliyor.',
          'Aradığınızda önce birkaç soru soruyoruz: hangi kol düştü, kaldırınca hemen mi tekrar attı yoksa bir süre mi durdu, o sırada hangi cihazlar çalışıyordu, yanık kokusu var mı. Bu bilgilerle çoğu zaman yola çıkmadan önce hangi parçayı yanımıza alacağımızı biliyoruz; ana şalter, sigorta ya da kaçak akım rölesi aracımızda standart olarak bulunuyor.',
          'Hizmet saatimiz her gün 08:00-23:00 arası. Bu aralıkta, gece geç saatte de olsa, hafta sonu da olsa arayan herkese aynı gün içinde dönüyoruz; sadece yanık kokusu, kıvılcım ya da sürekli düşen şalter gibi gerçekten bekletilmemesi gereken durumları öne alıyoruz.',
        ],
      },
      {
        h: 'Biz gelene kadar dokunmayın dediğimiz yerler',
        p: [
          'Sayaç kapağını ve apartman giriş panosunu açmayın; buradaki bağlantılar dağıtım şirketine ait olabilir ve yüksek akım taşır. Şalteri ıslak elle ya da ıslak zeminde kaldırmayın, kaçak akım ihtimali varken bu ciddi bir risktir. Yanık kokusu geliyorsa o kola hiç dokunmadan, sadece diğer sigortaları güvenli bir şekilde kapatıp bekleyin.',
          'Şalter attıktan sonra karanlıkta el yordamıyla kablo takip etmeyin; hangi telin nereye gittiğini görmeden yapılan her müdahale hem sizi hem tesisatı riske atar. Mum yerine telefon feneri kullanın, ısıtıcı ve ütü gibi büyük cihazların fişini çekin, buzdolabının kapağını gereksiz açmayın.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ana şalter kaç kere kaldırılıp indirilebilir?',
        a: 'Pratik olarak bir kez denemek yeterli. Tekrar düşüyorsa gerçek bir arıza var demektir; ısrarla kaldırıp indirmek kolun kontak noktalarını yıpratır ve sonraki müdahaleyi zorlaştırır.',
      },
      {
        q: 'Ana şalter ile kaçak akım rölesi aynı şey mi?',
        a: 'Hayır, ama bazı panolarda birleşik gelebiliyorlar. Ana şalter tüm tesisatın giriş kesicisidir, kaçak akım rölesi ise toprağa kaçan akımı algılayıp düşer. İkisi de düştüğünde görüntü aynı olduğu için panoya bakıp hangi kolun indiğini ayırt etmek gerekir.',
      },
      {
        q: 'Gece yarısı ana şalter attı, sabahı bekleyebilir miyim?',
        a: 'Yanık kokusu, kıvılcım ya da şalter kalkar kalkmaz tekrar düşüyorsa beklemeyin, arayın. Şalter kalkıp sorun tekrarlamıyorsa ve belirgin bir tehlike belirtisi yoksa sabahı bekleyip gün içinde arayabilirsiniz; biz her gün 08:00-23:00 arası çağrı alıyoruz.',
      },
      {
        q: 'Etimesgut’a gece çağrısında ne kadar sürede geliyorsunuz?',
        a: 'Sincan merkezden Etimesgut merkez, Elvankent ve Ahimesut’a 15-20 dakika, Bağlıca ve Göksu tarafına yaklaşık 25 dakika sürüyor. Gece trafik az olduğu için genelde bu sürenin altında kalıyoruz; aradığınızda net süreyi söylüyoruz.',
      },
      {
        q: 'Ana şalter sürekli atıyor ama hiçbir cihaz çalışmıyor, nasıl olur?',
        a: 'Bu genelde tesisattaki gizli bir kaçaktan kaynaklanır: nemli bir duvardaki kablo, dış mekan aydınlatması ya da eski bir bağlantı noktası olabilir. Cihaz çalışmadan da şalter atıyorsa aramayı geciktirmeyin, kaçak zamanla büyüyebilir.',
      },
    ],
    related: [
      { label: 'Sigorta atması', href: '/hizmetler/sigorta-atmasi' },
      { label: 'Nöbetçi elektrikçi', href: '/hizmetler/nobetci-elektrikci' },
      { label: 'Elektrik panosu yenileme', href: '/hizmetler/elektrik-panosu-yenileme' },
      { label: 'Etimesgut acil elektrikçi', href: '/hizmet-bolgeleri/etimesgut-elektrikci' },
    ],
  },
];

export const postsSorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

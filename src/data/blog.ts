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
  {
    slug: 'eryaman-yeni-tasinilan-dairede-elektrik-kontrolu',
    title: 'Eryaman’da Yeni Daireye Taşındınız: Elektrikte İlk Hafta Neye Bakmalı?',
    description:
      'Eryaman’da kiraya ya da yeni aldığınız daireye taşınırken elektrikte kontrol edilecekler: pano, kaçak akım rölesi, prizler, avize bağlantıları. Eryaman elektrikçi anlatıyor.',
    keyword: 'Eryaman elektrikçi',
    date: '2026-09-25',
    readingMin: 7,
    excerpt:
      'Eşyalar geldi, kutular açılmadı bile, ilk akşam salonun avizesi yanmıyor. Eryaman’da taşınma dönemlerinde en çok bu tür çağrılar alıyoruz. Birkaç basit kontrolle çoğu sorun daha ortaya çıkmadan yakalanıyor.',
    intro:
      'Eryaman, Ankara’da en çok taşınma trafiği olan yerlerden biri. Site içindeki daireler sık el değiştiriyor; bir kiracı çıkıyor, bir hafta sonra başkası giriyor. Arada boya yapılıyor, avizeler sökülüyor, bazen önceki kiracının “ben hallederim” diye yaptığı bağlantılar olduğu gibi kalıyor. Yeni gelen için daire temiz ve bakımlı görünüyor ama elektrik tarafında ne bıraktığını kimse söylemiyor. Aşağıdaki kontrollerin büyük kısmını kendiniz, hiçbir alete ve riske girmeden yapabilirsiniz. Nerede durmanız gerektiğini de ayrıca yazdım.',
    sections: [
      {
        h: 'İlk iş panoyu açıp bakın',
        p: [
          'Sigorta panosu genelde giriş kapısının yanında ya da vestiyer dolabının içinde olur. Kapağını açın ve sadece bakın. Sigortaların altında hangi hattın nereye gittiğini yazan etiket var mı? Yoksa bir akşam vakit ayırıp tek tek indirerek hangi odanın gittiğini not edin, bir kâğıda yazıp kapağın içine yapıştırın. Gece elektrik gittiğinde el fenerini tutarken bu kâğıt çok işinize yarayacak.',
          'Panonun içinde kararma, erime izi, yanık kokusu varsa ya da kapak açıkken kablo uçları görünüyorsa oraya dokunmayın. Bu bir önceki dönemden kalmış bir ısınma sorununun işaretidir ve taşınmadan önce baktırılması gereken ilk şeydir.',
        ],
      },
      {
        h: 'Kaçak akım rölesinin test düğmesine basın',
        p: [
          'Panoda üzerinde “T” ya da “TEST” yazan düğmeli, diğerlerinden biraz geniş bir eleman olmalı. Bu kaçak akım rölesi. Düğmeye basın; röle anında atıp evin elektriğini kesmeli. Sonra kolunu kaldırıp tekrar açın. Basınca hiçbir şey olmuyorsa röle ya arızalı ya da yanlış bağlanmış demektir. Rölenin hiç olmaması da ayrı bir sorun.',
          'Bu kontrol yirmi saniye sürüyor ve evdeki en önemli güvenlik elemanının çalışıp çalışmadığını gösteriyor. Ayda bir tekrarlamak da iyi bir alışkanlık.',
        ],
      },
      {
        h: 'Prizler: topraklı mı, gevşek mi, ısınıyor mu?',
        p: [
          'Eryaman’daki sitelerin çoğunda prizler topraklıdır ama tadilat görmüş dairelerde bazen topraksız eski tip prizlerle ya da toprak ucu bağlanmamış prizlerle karşılaşıyoruz. Dışarıdan bakınca iki yanda metal kulakçık görüyorsanız priz topraklı tiptir, ancak içeride toprak hattının bağlı olup olmadığını ancak ölçerek anlayabiliriz. Çamaşır makinesi, bulaşık makinesi ve buzdolabı için bu önemli.',
          'Fişi taktığınızda gevşek oturan, kendiliğinden düşen prizleri not edin. İlk haftalarda ütü, su ısıtıcısı, fırın gibi yüksek akım çeken cihazları kullandıktan sonra prizin kapağına elinizin tersiyle dokunun. Ilık olabilir ama sıcak olmamalı. Sıcaksa, rengi değişmişse ya da hafif plastik kokusu varsa o prizi kullanmayı bırakın.',
        ],
      },
      {
        h: 'Tavandan sarkan kablolar ve avize bağlantıları',
        p: [
          'Önceki kiracı avizesini söküp götürdüyse tavanda iki üç kablo ucu kalmış olabilir. Bazen uçlar bantla sarılmış, bazen hiç sarılmamış. Avize takmadan önce o hattın sigortasını indirin ve uçlara çıplak elle dokunmayın. Kablo uçlarının kararmış ya da sertleşmiş olması, orada uzun süre gevşek bir bağlantı olduğunu gösterir.',
          'Asma tavanlı salonlarda spot ve LED şerit bağlantıları ayrıca önemli. Trafoları tavanın içine sıkıştırılmış, havalanmayan spot sistemleri zamanla ısınıp arıza çıkarıyor. Yeni avize ya da spot takacaksanız bunu bir kerede ve düzgün yaptırmak, sonradan parça parça tamir ettirmekten hem ucuz hem güvenli.',
        ],
      },
      {
        h: 'Sayaç ve abonelik tarafını unutmayın',
        p: [
          'Taşındığınız gün sayacın fotoğrafını çekin, endeksin net okunduğundan emin olun. Abonelik devri sırasında önceki kullanıcının tüketimiyle karışıklık olmasın. Bir de şu: tüm cihazlar kapalıyken sayaç hâlâ dönüyor ya da ekrandaki değer artıyorsa, evde fark etmediğiniz bir tüketim ya da kaçak var demektir. Bu durumda panodan hatları tek tek kapatarak hangi hatta olduğunu daraltabilirsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kiracıyım, bu kontrolleri ev sahibine bildirmem gerekir mi?',
        a: 'Kaçak akım rölesinin çalışmaması, panoda yanık izi ya da topraksız hatlar gibi sabit tesisata ait sorunları ev sahibine yazılı olarak ve fotoğrafla bildirmenizi öneririz. Bunlar genelde dairenin sabit tesisatına ait sorunlardır.',
      },
      {
        q: 'Avizeyi kendim takabilir miyim?',
        a: 'Sigortayı indirip kablo uçlarını doğru eşleştirebiliyorsanız basit bir avizeyi takmak mümkün. Ancak uçlar kararmışsa, hangi kablonun faz olduğu belli değilse ya da avize ağırsa ve tavandaki askı noktası sağlam değilse işi bir elektrikçiye bırakın.',
      },
      {
        q: 'Taşınmadan önce tam bir elektrik kontrolü ne kadar sürer?',
        a: 'Ortalama bir daire için yaklaşık bir iki saat. Pano, kaçak akım rölesi testi, prizlerde toprak ölçümü ve varsa sorunlu bağlantıların tespitini kapsar. Onarım gerekirse keşif sonrası net fiyatı söylüyoruz.',
      },
      {
        q: 'Eryaman’a aynı gün gelebiliyor musunuz?',
        a: 'Sincan’dan çıkan ekibimiz için Eryaman yakın bir bölge, 08:00–23:00 arasında çoğu zaman aynı gün geliyoruz. 0506 092 58 16’dan ulaşabilirsiniz.',
      },
    ],
    related: [
      { label: 'Eryaman Elektrikçi', href: '/hizmet-bolgeleri/eryaman-elektrikci' },
      { label: 'Avize ve spot montajı', href: '/hizmetler/avize-spot-montaji' },
      { label: 'Priz ve anahtar tamiri', href: '/hizmetler/priz-anahtar-tamiri' },
      { label: 'Kaçak akım rölesi atıyor', href: '/hizmetler/kacak-akim-rolesi-atiyor' },
    ],
  },
  {
    slug: 'elvankent-sigorta-kutusu-yenileme-ne-zaman-gerekir',
    title: 'Elvankent’te Sigorta Kutusu Yenileme: Ne Zaman Gerekir, Ne Zaman Gerekmez?',
    description:
      'Elvankent’te 25-30 yaşındaki sitelerde sigorta kutusu ne zaman tamir, ne zaman tam yenileme ister? Acil elektrikçi gözünden işaretler. Demir Elektrik: 0506 092 58 16.',
    keyword: 'Elvankent elektrikçi',
    date: '2026-10-02',
    readingMin: 6,
    excerpt:
      'Elvankent’teki sitelerin çoğu artık 25-30 yaşında ve sigorta kutuları da o yaşta. Hangi işaretler tamirle geçer, hangisi tam yenileme ister; sahadan anlattık.',
    intro:
      'Elvankent elektrikçi olarak gittiğimiz çağrıların büyük kısmı aslında tek bir sigortadan ibaret değil; kapağı açınca karşımıza 25-30 yıllık bir sigorta kutusu çıkıyor. Bölgedeki siteler 1990’lı ve 2000’li yıllarda yapıldığı için bu kutular da aynı yaşta; bazısı hâlâ görevini yapıyor, bazısı artık güvenli değil. İkisini birbirinden ayırmak önemli, çünkü her ısınan sigorta kutuyu baştan yenilemeyi gerektirmiyor.',
    sections: [
      {
        h: 'Tek sigorta değişimi ne zaman yeterli?',
        p: [
          'Kısa cevap: kutunun gövdesi, klemensleri ve ana hattı sağlamsa tek bir sigortayı değiştirmek genelde yeterlidir. Elvankent’te bazı dairelerde tek bir otomat yorulmuş, üstü kararmış oluyor; geri kalan kutu ve kablolar hâlâ iyi durumdaysa sadece o sigortayı değiştirip panoyu test ediyoruz.',
          'Bu durumda iş kısa sürer ve maliyeti de düşüktür. Ama değiştirdiğimiz sigortanın etrafındaki diğer otomatları da kontrol ediyoruz; biri yorulmuşsa genelde yaşıtları da yakın zamanda sorun çıkarır.',
        ],
      },
      {
        h: 'Tam yenileme ne zaman gerekir?',
        p: [
          'Kısa cevap: kutunun gövdesi çatlamış, klemensler gevşemiş ya da kaçak akım rölesi hiç yoksa tam yenileme gerekir. Elvankent’teki en eski sitelerde ilk yapımdan kalma, kaçak akım rölesi bulunmayan panolarla sık karşılaşıyoruz; bu, bugünün standartlarına göre ciddi bir güvenlik açığıdır.',
          'Bir diğer işaret, panoda tek bir sigortanın yarım evi beslemesi. Aydınlatma, priz ve ıslak hacimler ayrı gruplara bölünmemişse, tek arızada evin yarısı birden kararır. Böyle bir panoyu açıp tek sigorta değiştirmek geçici rahatlama verir ama kök sorunu çözmez; doğrusu grupları ayırıp kaçak akım rölesi ekleyerek baştan kurmaktır.',
        ],
      },
      {
        h: 'Mutfakta tek hatta yüklenen cihazlar panoyu nasıl zorluyor?',
        p: [
          'Elvankent’teki pek çok dairede bulaşık makinesi, fırın ve mikrodalga aynı hattan besleniyor; akşam yemeği saatinde hepsi birden çalışınca sigorta atıyor. Bu, panonun değil hat planlamasının sorunu; mutfağa ayrı ve yeterli kesitte bir hat çektiğimizde sigorta artık atmıyor.',
          'Bu tür bir düzeltme bazen tam pano yenilemeyle birlikte, bazen de panoya dokunmadan tek başına yapılabiliyor; hangisinin gerektiğine mevcut kutunun boş kapasitesine bakarak karar veriyoruz.',
        ],
      },
      {
        h: 'Blok panosu ve ortak alan ne zaman devreye girer?',
        p: [
          'Daire içi panonun yanında, Elvankent sitelerinde blok panosu, merdiven otomatiği ve bodrum aydınlatması da zamanla yorulan parçalar. Bunlar daire sakininin değil yönetimin sorumluluğunda; biz yönetimle görüşüp birkaç bloğu aynı ziyarette planlayabiliyoruz.',
          'Daire panonuz yeni olsa bile elektrik kesiliyorsa, sorun bazen sayaç panosunda ya da blok hattında olabilir; bu yüzden arıza tespitinde ikisine birlikte bakıyoruz.',
        ],
      },
      {
        h: 'Elvankent’te panoyu nasıl değerlendiriyoruz?',
        p: [
          'Önce kutunun gövdesini, klemensleri ve ana şalteri gözle ve ölçerek kontrol ediyoruz; kararma, çatlak ya da gevşek bağlantı var mı bakıyoruz. Kaçak akım rölesi yoksa ya da yorulmuşsa ekliyor, gruplar mantıksız dağılmışsa aydınlatma-priz-ıslak hacim olarak yeniden ayırıyoruz. Sonuçta panoya hangi sigortanın neyi beslediğini okunaklı etiketlerle yazıp teslim ediyoruz.',
          'Sincan’daki merkezimizden Elvankent’e 15-20 dakikada geliyoruz; keşif sonrası tamir mi yenileme mi gerektiğini net olarak söylüyor, onay almadan işe başlamıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Elvankent’te sigorta kutum eski ama hiç sorun çıkarmıyor, yine de baktırmalı mıyım?',
        a: 'Sorun çıkarmasa bile 25-30 yaşındaki bir kutuda kaçak akım rölesi olup olmadığını kontrol ettirmek önemli; bu, can güvenliği açısından en kritik eksik. Bir kontrol genelde yeterli, zorunlu değişiklik çıkmayabilir.',
      },
      {
        q: 'Tek sigorta mı değişsin, pano mu baştan yenilensin, nasıl karar veriyorsunuz?',
        a: 'Kutunun gövdesi, klemensleri ve kaçak akım rölesi sağlamsa tek sigorta yeterli olur. Gövde çatlamış, röle yoksa ya da gruplar düzensizse tam yenileme öneriyoruz; kararı keşifte söylüyoruz.',
      },
      {
        q: 'Blok panosu için site yönetimi olarak sizi çağırabilir miyiz?',
        a: 'Evet. Blok panosu, merdiven otomatiği ve bodrum hatları için yönetimle görüşüp keşif yapıyor, işe başlamadan fiyatı yazılı veriyoruz.',
      },
      {
        q: 'Elvankent’e ne kadar sürede geliyorsunuz?',
        a: 'Sincan’daki merkezimizden 15-20 dakikada geliyoruz. Haftanın 7 günü 08:00-23:00 arasında çağrı alıyoruz, 0506 092 58 16’dan ulaşabilirsiniz.',
      },
    ],
    related: [
      { label: 'Elvankent Elektrikçi', href: '/hizmet-bolgeleri/etimesgut-elektrikci/elvankent-elektrikci' },
      { label: 'Sigorta kutusu yenileme', href: '/hizmetler/elektrik-panosu-yenileme' },
      { label: 'Apartman elektrikçisi', href: '/hizmetler/bina-ortak-alan-elektrigi' },
      { label: 'Ana Şalter Attı, Bir Daha Kalkmıyor', href: '/rehber/ana-salter-atti-etimesgut-gece-ariza' },
    ],
  },
  {
    slug: 'goksu-kacak-akim-rolesi-surekli-atiyor',
    title: "Göksu'da Kaçak Akım Rölesi Sürekli Atıyor mu? Yeni Sitelerde Sık Görülen Sebepler",
    description:
      "Göksu'daki yeni sitelerde kaçak akım rölesi neden sık atıyor? Ankastre, klima ve banyo hatlarında en sık gördüğümüz sebepler. Demir Elektrik acil servis: 0506 092 58 16.",
    keyword: 'Göksu elektrikçi',
    date: '2026-10-09',
    readingMin: 6,
    excerpt:
      "Göksu'da bina yeni olsun diye kaçak akım rölesi atmaz diye bir kural yok; aksine yeni sitelerde ilk yıl en çok bu çağrıyı alıyoruz. Sebepleri ve gece yarısı ne yapılacağını sahadan anlattık.",
    intro:
      "Göksu'da son yıllarda yükselen site ve rezidanslardan aldığımız çağrıların önemli bir kısmı kaçak akım rölesi. İnsanlar genelde \"bina yeni, röle neden atıyor\" diye soruyor; oysa biz tam tersini görüyoruz. Yeni binalarda ilk bir iki yıl, henüz oturmamış tesisat ve yeni kullanılan cihazlar yüzünden röle en sık bu dönemde atıyor. Göksu elektrikçi olarak akşam ya da gece gelen bu çağrılarda önce neyin atıp neyin atmadığına bakıyoruz, sebebi oradan daralıyoruz.",
    sections: [
      {
        h: "Göksu'da röle en çok hangi saatte atıyor?",
        p: [
          'Doğrudan cevap: akşam saatlerinde, birden fazla cihaz aynı anda devreye girdiğinde. Klima, çamaşır makinesi ve ankastre ocak aynı akşam üst üste çalışınca, zaten sınırda olan bir hat kaçağı daha hızlı ortaya çıkarıyor.',
          "Göksu'daki yeni dairelerde panoyu kontrol ettiğimizde çoğu zaman hat sayısı ve grup dağılımı doğru; ama bir hatta küçük bir kaçak varsa, yük arttığı akşam saatlerinde bu kaçak kendini daha belirgin gösteriyor.",
        ],
      },
      {
        h: 'Ankastre ve klima hattı neden ilk şüpheli?',
        p: [
          'Doğrudan cevap: bu iki cihaz yüksek akım çeker ve yeni dairelerde genelde son anda eklenmiş hatlardır. Ankastre ocak ya da fırın bağlantısı acele yapılmışsa, nem veya montaj sırasında ezilen bir kablo kaçağa yol açabilir.',
          'Klima tarafında da benzer bir durum var; dış üniteye çekilen hat düzgün topraklanmamışsa ya da bağlantı kutusuna su sızıyorsa röle bunu küçük bir kaçak olarak algılayıp atıyor. Biz önce bu iki hattı ayrı ayrı test ederek şüpheyi daraltıyoruz.',
        ],
      },
      {
        h: 'Banyo ve balkon hattı da sık atan noktalar arasında',
        p: [
          'Doğrudan cevap: ıslak zeminli alanlardaki priz ve aydınlatma hatları, montaj sırasında küçük bir nem veya gevşek bağlantı bıraktıysa zamanla röleyi tetikler. Yeni bina olması bu riski azaltmaz, çünkü kaçak montaj hatasından da kaynaklanabilir.',
          "Göksu'da bazı dairelerde balkon aydınlatması ya da dış priz, dışarıdan gelen yağmur sonrası röleyi attırmaya başlıyor. Bu durumda o hattı ayırıp ölçüm yapınca kaçağın kaynağını kısa sürede buluyoruz.",
        ],
      },
      {
        h: 'Röle attığında siz gelene kadar ne yapılmalı?',
        p: [
          'Doğrudan cevap: röleyi tekrar tekrar kaldırmayı denemek yerine, önce tüm sigortaları indirip röleyi kaldırmayı deneyin; röle bu durumda atmıyorsa kaçak bir hatta demektir ve telefonda bu bilgi bize büyük zaman kazandırır.',
          'Gece yarısı röle atıp da evde karanlıkta kalındığında panikle her şeyi denemek yerine, hangi cihaz çalışırken attığını hatırlamaya çalışmak işimizi kolaylaştırıyor. Telefonda bu bilgiyi aldığımızda yola çıkmadan önce bile ön teşhis koyabiliyoruz.',
        ],
      },
      {
        h: "Göksu'da kaçak akım arızasına nasıl müdahale ediyoruz?",
        p: [
          "Sincan'daki merkezimizden Göksu'ya 15-20 dakikada geliyoruz. Panoyu ve rölenin kendisini kontrol ettikten sonra hatları tek tek ayırarak kaçağın hangi grupta olduğunu ölçüyoruz; sebep bir cihazsa söylüyoruz, hattaysa yerinde onarıyoruz.",
          'Rezidans ve sitelerde teknik odaya erişim ya da kat panosu yetkisi gerekiyorsa yönetimle biz görüşüyoruz; siz sadece arızayı tarif ediyorsunuz. Haftanın 7 günü 08:00-23:00 arasında bu çağrılara çıkıyoruz, işe başlamadan fiyatı söylüyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: "Göksu'da bina yeni, röle neden atıyor?",
        a: 'Yeni binalarda ilk yıl tesisat henüz oturmamış ve bazı hatlar (ankastre, klima) son anda eklenmiş olabilir. Küçük bir montaj hatası ya da nem, yeni bina olmasına bakmadan röleyi attırır.',
      },
      {
        q: 'Röle sadece klima çalışırken atıyor, bu klimanın mı sorunu?',
        a: 'Çoğunlukla klimanın kendisinden değil, dış üniteye çekilen hattın topraklama veya bağlantı kutusundan kaynaklanır. Hattı ölçüp kaynağı net olarak söyleyebiliyoruz.',
      },
      {
        q: 'Gece yarısı röle attı, sabaha kadar bekleyebilir miyim?',
        a: 'Kaçağın büyüklüğüne bağlı; küçükse sigortaları indirip röleyi kapalı tutarak sabahı bekleyebilirsiniz ama ıslak alan varsa önerimiz aynı gece aramanız. 08:00-23:00 arası çağrı alıyoruz.',
      },
      {
        q: "Göksu'ya ne kadar sürede geliyorsunuz?",
        a: "Sincan'daki merkezimizden Göksu'ya genellikle 15-20 dakikada ulaşıyoruz.",
      },
    ],
    related: [
      { label: 'Göksu Elektrikçi', href: '/hizmet-bolgeleri/etimesgut-elektrikci/goksu-elektrikci' },
      { label: 'Kaçak akım tespiti', href: '/hizmetler/kacak-akim-tespiti' },
      { label: 'Acil elektrikçi', href: '/hizmetler/acil-elektrikci' },
      { label: 'Elvankent’te Sigorta Kutusu Yenileme', href: '/rehber/elvankent-sigorta-kutusu-yenileme-ne-zaman-gerekir' },
    ],
  },
  {
    slug: 'torekent-blok-alti-dukkan-elektrik-gitti',
    title: 'Törekent’te Blok Altı Dükkânda Elektrik Gitti: Usta Gelene Kadar Ne Yapmalı?',
    description:
      'Törekent’te blok altındaki market, berber ya da kafede elektrik gidince ilk 10 dakikada ne yapmalı? Dolap, kasa, pano ve 186. Demir Elektrik acil: 0506 092 58 16.',
    keyword: 'Törekent acil elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      'Törekent’te blok altındaki dükkânda elektrik gitti, müşteri içeride, dolaplar dolu. Panik yapmadan önce bakılacak üç yer, açılmaması gereken bir kapak ve bizi ararken söylemeniz gereken iki cümle.',
    intro:
      'Törekent’te blok altı dükkândan gelen çağrıların sesi farklıdır. Arayan esnaf telaşlıdır, arkadan müşteri sesi gelir, “dolaplar ne olacak” diye sorar. Haklıdır da. Elektriksiz geçen her dakika kasa kapalı demek. Biz bu çağrıları öne alıyoruz. Ama biz yoldayken sizin yapabileceğiniz birkaç şey var. Bunlar hem arızayı hızlı bulmamızı sağlıyor hem de malınızı koruyor.',
    sections: [
      {
        h: 'İlk iş: sadece dükkân mı, bütün blok mu?',
        p: [
          'Kapıdan çıkıp bakın. Merdiven ışığı, yan dükkân, üst kattaki pencereler yanıyor mu? Hepsi karanlıksa sorun dükkânınızda değil, binada ya da şebekededir. Önce 186’yı arayın, bölgede kesinti var mı sorun.',
          'Sadece sizin dükkân karanlıksa sorun içeridedir. O zaman panoya bakma sırası gelir. Bu ayrımı yapmak bir dakika sürer ve bizi aradığınızda ilk soracağımız şey zaten budur.',
        ],
      },
      {
        h: 'Panoda neye bakmalısınız?',
        p: [
          'Dükkân panosunu açın. Kolu aşağı inmiş bir sigorta ya da kaçak akım rölesi var mı, bakın. Bir tane inmişse bir kez kaldırmayı deneyebilirsiniz. Hemen tekrar atıyorsa bırakın, ikinci kez zorlamayın.',
          'Tekrar atan sigorta size bir şey söylüyor. O hatta ya bir kaçak var ya da hat kaldırabileceğinden fazla yük taşıyor. Blok altı dükkânlarda en sık sebep, soğutucu dolap, çay ocağı ve ısıtıcının aynı hatta toplanması. Kış başında bu çağrılar artıyor.',
        ],
      },
      {
        h: 'Soğutucu dolaplar ne olacak?',
        p: [
          'Kapaklarını açmayın. Kapalı duran bir dolap, içindekini bir süre soğuk tutar. Müşteriye ürün vermek için tekrar tekrar açıldıkça içerisi hızla ısınır.',
          'Elektrik geri geldiğinde dolapları hepsini aynı anda çalıştırmayın. Kompresörler aynı anda kalkınca çektikleri akım toplanır, sigorta yeniden atabilir. Birer dakika arayla tek tek açın. Bu küçük şey çoğu zaman ikinci arızayı önlüyor.',
        ],
      },
      {
        h: 'Kasa ve POS cihazı için ne yapmalı?',
        p: [
          'Elektrik giderken yazar kasa ve POS cihazı prizden çekilmese bile genelde zarar görmez. Ama elektrik gidip gelirken, yani ışıklar yanıp sönerken, hassas cihazları prizden çekmek iyi olur. Gidip gelen elektrik cihazı yorar.',
          'Ödeme almanız gerekiyorsa telefonunuzdaki mobil ödeme ya da bataryalı POS’u kullanın. Biz geldiğimizde kasa prizini çoğu zaman ayrı bir sigortaya alıyoruz. Böylece dolap ya da ısıtıcı yüzünden sigorta atınca kasa kapanmıyor.',
        ],
      },
      {
        h: 'Bizi ararken ne söylemelisiniz?',
        p: [
          'İki cümle yeter: “Sadece dükkân karanlık, bina yanıyor.” ve “Şu sigorta atıyor, kaldırınca tekrar iniyor.” Bir de o sırada neyin çalıştığını söyleyin. Bu kadarla neye bakacağımızı yola çıkmadan biliyoruz.',
          'Demir Elektrik olarak Törekent’e dükkânımızdan Ayaş Yolu üzerinden 10 dakikada varıyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 092 58 16’dan bize ulaşabilirsiniz. Önce tespit yapıyoruz. Ne yapacağımızı ve ücretini işe başlamadan söylüyoruz. Kapanıştan sonra çalışmamızı isterseniz o saate göre geliyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Dükkânda sigorta sürekli atıyor, ne yapmalıyım?',
        a: 'Zorlamayın. Hangi sigortanın attığını ve o sırada hangi cihazların çalıştığını not edin, bizi arayın. Genelde dolap, ısıtıcı ve çay ocağı aynı hatta toplanmıştır; hattı ayırınca sorun biter.',
      },
      {
        q: 'Törekent’te akşam dükkân kapandıktan sonra gelir misiniz?',
        a: 'Geliriz. 23:00’e kadar çalışıyoruz. Kapanış saatini söyleyin, işi müşteriniz yokken yapalım.',
      },
      {
        q: 'Elektrik gelince dolaplar çalışmıyor, neden?',
        a: 'Hepsi aynı anda kalkınca sigorta tekrar atmış olabilir. Önce panoya bakın, sonra dolapları birer dakika arayla tek tek açın. Yine çalışmıyorsa arayın.',
      },
      {
        q: 'Bütün blok karanlık, sizi mi aramalıyım?',
        a: 'Önce 186’yı arayın, şebeke kesintisi olabilir. Kesinti yoksa ve sadece sizin blok karanlıksa bina ana panosuna bakmak gerekir; o zaman yöneticiyle birlikte geliyoruz.',
      },
    ],
    related: [
      { label: 'Törekent Acil Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/torekent-elektrikci' },
      { label: 'İş yeri elektrik servisi', href: '/hizmetler/isyeri-elektrik-servisi' },
      { label: 'Sigorta atması', href: '/hizmetler/sigorta-atmasi' },
      { label: 'Elektrik Kesintisi mi, Evdeki Arıza mı?', href: '/rehber/elektrik-kesintisi-mi-ariza-mi' },
    ],
  },
  {
    slug: 'fatih-elektrik-yarim-geldi-faz-notr',
    title: 'Fatih’te Elektrik Yarım Geldi: Bazı Odalar Var, Bazıları Yok. Faz mı Gitti, Nötr mü?',
    description:
      'Sincan Fatih’te evin bir kısmında elektrik var, bir kısmında yok mu? Lambalar aşırı parlak ya da sönük mü? Faz kaybı ve nötr kopmasında ilk yapılacaklar. Demir Elektrik: 0506 092 58 16.',
    keyword: 'Fatih acil elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      'Mutfakta elektrik var, salon karanlık. Ya da ışıklar bir parlıyor bir kısılıyor. Bu iki durum birbirine benzer görünür ama biri bekleyebilir, öbürü beklemez. Farkı ve ilk yapılacakları anlattık.',
    intro:
      'Sincan Fatih’ten gelen bir çağrı şöyle başladı: “Usta, elektrik yarım geliyor. Mutfak çalışıyor, salon yok.” Bu cümleyi sık duyuyoruz. Çoğu zaman basit bir sigorta. Ama bazen evde lambalar normalden parlak yanıyor, bir cihazdan koku geliyor. O zaman iş değişir. Fatih acil elektrikçi olarak bu iki durumu telefonda nasıl ayırdığımızı anlatalım.',
    sections: [
      {
        h: 'Bazı odalarda elektrik yoksa önce neye bakmalı?',
        p: [
          'Önce daire panosuna bakın. Evdeki odalar farklı sigortalardan beslenir. Salonun sigortası inmiş, mutfağınki yukarıda duruyor olabilir. İnen sigortayı bir kez kaldırın. Tutarsa sorun çözülmüştür.',
          'Tekrar atıyorsa o hatta bir kaçak ya da arızalı bir cihaz vardır. O odadaki cihazları prizden çekip tekrar deneyin. Tutuyorsa cihazlardan biri sorunludur. Yine atıyorsa sorun hattın kendisindedir, bizi arayın.',
        ],
      },
      {
        h: 'Bütün sigortalar yukarıdaysa ne olmuş olabilir?',
        p: [
          'Sigortaların hepsi yukarıda, ama yine de bazı odalar karanlıksa bina üç fazla besleniyor olabilir. Bazı binalarda ve müstakil evlerde daireye üç ayrı faz gelir, odalar bu fazlara bölünür. Fazlardan biri gelmezse ona bağlı odalar karanlıkta kalır.',
          'Faz kaybı genelde sayaç panosunda ya da binaya gelen hatta olur. Bu durumda daire panosuyla uğraşmanın faydası yok. Komşulara sorun, onlarda da aynı şey var mı? Varsa 186’yı arayın. Yoksa sorun sizin sayacınızdan sonradır, bizi arayın.',
        ],
      },
      {
        h: 'Lambalar aşırı parlak ya da çok sönükse ne demek?',
        p: [
          'Bu tehlikeli bir belirti. Bir odada lambalar normalden parlak, başka bir odada sönük yanıyorsa nötr hattı kopmuş olabilir. Nötr kopunca prizlerdeki gerilim dengesini kaybeder. Bazı prizlere normalin çok üstünde gerilim gelir.',
          'Bu durumda cihazlar yanar. Buzdolabı, televizyon, kombi kartı ilk gidenlerdir. Geçen yıl bir binada nötr kopmasından sonra üç dairede birden kombi kartı değişti. Belirtiyi gören biri ana şalteri hemen indirseydi bu masraf olmayacaktı.',
        ],
      },
      {
        h: 'Nötr kopmasından şüpheleniyorsanız ilk 5 dakikada ne yapmalı?',
        p: [
          'Ana şalteri indirin. Bekleyip gözlemlemeyin. Sonra pahalı cihazları prizden çekin: televizyon, bilgisayar, modem. Komşularınıza haber verin, onlarda da aynı belirti varsa sorun bina hattındadır ve 186 aranmalıdır.',
          'Ana şalter inikken hiçbir cihazı “bir deneyelim” diye açmayın. Biz gelip hattı ölçmeden elektriği geri vermeyin. Nötr kopması, ölçü aleti olmadan yeri bulunacak bir arıza değil.',
        ],
      },
      {
        h: 'Fatih’e ne kadar sürede geliyoruz?',
        p: [
          'Demir Elektrik olarak Fatih’e dükkânımızdan 5–10 dakikada varıyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 092 58 16’dan arayabilirsiniz. Telefonda önce belirtileri dinliyoruz. Lambalar parlıyor ya da koku varsa çağrınızı öne alıyoruz.',
          'Gelince önce ölçüyoruz: hangi fazda gerilim var, nötr sağlam mı, sorun daire içinde mi sayaç tarafında mı? Sonra ne yapacağımızı ve ücretini söylüyoruz. Onayınız olmadan işe başlamıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Evin yarısında elektrik yok, sigortalar yukarıda. Ne yapmalıyım?',
        a: 'Komşulara sorun. Onlarda da aynı durum varsa faz kaybı olabilir, 186’yı arayın. Sadece sizde varsa sorun sayacınızdan sonradır; bizi arayın, ölçüp yerini bulalım.',
      },
      {
        q: 'Lambalar bir parlayıp bir kısılıyor, tehlikeli mi?',
        a: 'Evet, nötr kopmasının belirtisi olabilir. Ana şalteri indirin, pahalı cihazları prizden çekin ve bizi arayın. Ölçüm yapılmadan elektriği geri vermeyin.',
      },
      {
        q: 'Fatih’te gece 22:00’de gelir misiniz?',
        a: 'Geliriz. 23:00’e kadar çağrı alıyoruz. Koku, kıvılcım ya da aşırı parlak lamba varsa çağrınız önceliklidir.',
      },
      {
        q: 'Nötr kopmasında yanan cihazların masrafını kim karşılar?',
        a: 'Kopma bina hattında ya da şebekedeyse durum farklı, daire içindeyse farklı. Önce arızanın yerini ölçüp yazılı olarak söylüyoruz; bu bilgi sonraki adımlar için işinize yarar.',
      },
    ],
    related: [
      { label: 'Fatih Acil Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/fatih-elektrikci' },
      { label: 'Elektrik kesintisi', href: '/hizmetler/elektrik-kesintisi' },
      { label: 'Acil elektrikçi', href: '/hizmetler/acil-elektrikci' },
      { label: 'Ana Şalter Attı, Bir Daha Kalkmıyor', href: '/rehber/ana-salter-atti-etimesgut-gece-ariza' },
    ],
  },
];

export const postsSorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
  initialize({ type: TYPE_EMBEDED }, (config) => {
    onChangeConfig((newConfig) => {
      console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
          var data = [
            {
              dataID: "2744",
              title: "Ekose Desen Yan Cepli Gömlek",
              href: "/ekose-desen-yan-cepli-gomlek",
              discount: 30,
            },
            {
              dataID: "2663",
              title: "Bisiklet Yaka Crop Triko",
              href: "/bisiklet-yaka-crop-triko",
              discount: 30,
            },
            {
              dataID: "2653",
              title: "Kuşaklı Ekose Kaşe Kaban",
              href: "/kusakli-ekose-kase-kaban",
              discount: 30,
            },
            {
              dataID: "2639",
              title: "Balıkçı Yaka Pileli Triko",
              href: "/balikci-yaka-pileli-triko",
              discount: 30,
            },
            {
              dataID: "2637",
              title: "Yırtmaçlı Oduncu Kaşe Ceket",
              href: "/yirtmacli-oduncu-kase-ceket",
              discount: 30,
            },
            {
              dataID: "2635",
              title: "Çiçek Desenli Kapüşonlu Bomber Mont",
              href: "/cicek-desenli-kapusonlu-bomber-mont",
              discount: 30,
            },
            {
              dataID: "2595",
              title: "Kruvaze Kadife Bluz",
              href: "/kruvaze-kadife-bluz",
              discount: 30,
            },
            {
              dataID: "2592",
              title: "Bağlama Detay Dokuma Gömlek",
              href: "/baglama-detay-dokuma-gomlek",
              discount: 30,
            },
            {
              dataID: "2590",
              title: "Yüksek Cepli Desenli Ceket",
              href: "/yuksek-cepli-desenli-ceket",
              discount: 30,
            },
            {
              dataID: "2537",
              title: "Taş Düğmeli Tüvit Hırka",
              href: "/tas-dugmeli-tuvit-hirka",
              discount: 30,
            },
            {
              dataID: "2520",
              title: "Çift Desenli Blazer Ceket",
              href: "/cift-desenli-blazer-ceket",
              discount: 30,
            },
            {
              dataID: "2517",
              title: "Baret Detay Büzgülü Body",
              href: "/baret-detay-buzgulu-body",
              discount: 30,
            },
            {
              dataID: "2511",
              title: "Çizgili Triko Kazak",
              href: "/cizgili-triko-kazak",
              discount: 30,
            },
            {
              dataID: "2502",
              title: "Basic Blazer Ceket",
              href: "/basic-blazer-ceket",
              discount: 30,
            },
            {
              dataID: "2441",
              title: "Paça Detay Kare Desenli Havuç Pantolon",
              href: "/paca-detay-kare-desenli-havuc-pantolon",
              discount: 30,
            },
            {
              dataID: "2302",
              title: "Kapüşonlu Balon Kol Sweatshirt",
              href: "/kapusonlu-balon-kol-sweatshirt",
              discount: 30,
            },
            {
              dataID: "2298",
              title: "Düğme Detaylı Peluş Ceket",
              href: "/dugme-detayli-pelus-ceket",
              discount: 30,
            },
            {
              dataID: "2296",
              title: "Yarım Kol Çıtçıt Düğmeli Deri Elbise",
              href: "/yarim-kol-citcit-dugmeli-deri-elbise",
              discount: 30,
            },
            {
              dataID: "2281",
              title: "Heroes İkili Renkli Crop Sweatshirt",
              href: "/heroes-ikili-renkli-crop-sweatshirt",
              discount: 30,
            },
            {
              dataID: "2279",
              title: "Kesik Uçlu Sweat Elbise",
              href: "/kesik-uclu-sweat-elbise",
              discount: 30,
            },
            {
              dataID: "2278",
              title: "Yumoş Hırka",
              href: "/yumos-hirka1",
              discount: 30,
            },
            {
              dataID: "2230",
              title: "Dikiş Detaylı Jogging Eşofman Altı",
              href: "/dikis-detayli-jogging-esofman-alti",
              discount: 30,
            },
            {
              dataID: "2217",
              title: "Çift Renk Jogger Eşofman Altı",
              href: "/cift-renk-jogger-esofman-alti",
              discount: 30,
            },
            {
              dataID: "2146",
              title: "Dantel Detaylı Tek Omuzlu Bluz",
              href: "/dantel-detayli-tek-omuzlu-bluz",
              discount: 30,
            },
            {
              dataID: "1797",
              title: "Çiçek İşlemeli Crop Takım",
              href: "/cicek-islemeli-crop-takim",
              discount: 30,
            },
            /* {
              dataID: "1780",
              title: "Zikzak Model Kot Etek",
              href: "/zikzak-model-kot-etek",
              discount: 30,
            }, */
            {
              dataID: "1767",
              title: "Sırt Bağlamalı Fisto Elbise",
              href: "/sirt-baglamali-fisto-elbise",
              discount: 30,
            },
            {
              dataID: "1764",
              title: "Uzun Kollu Fitilli Tulum",
              href: "/uzun-kollu-fitilli-tulum",
              discount: 30,
            },
            {
              dataID: "1744",
              title: "Önü Bağlamalı Triko Takım",
              href: "/onu-baglamali-triko-takim",
              discount: 30,
            },
            {
              dataID: "1647",
              title: "Önü Bağlamalı Piliseli Model Bluz",
              href: "/onu-baglamali-piliseli-model-bluz",
              discount: 30,
            },
            {
              dataID: "1637",
              title: "Paça Katlamalı Kemerli Kot Şort",
              href: "/paca-katlamali-kemerli-kot-sort",
              discount: 30,
            },
            {
              dataID: "1514",
              title: "Taş Tokalı Günlük Terlik",
              href: "/tas-tokali-gunluk-terlik",
              discount: 30,
            },
            {
              dataID: "1481",
              title: "Krep Kumaş Şortlu Gömlek Takım",
              href: "/krep-kumas-sortlu-gomlek-takim",
              discount: 30,
            },
            {
              dataID: "1407",
              title: "Makrome Ponponlu Terlik",
              href: "/makrome-ponponlu-terlik",
              discount: 30,
            },
            {
              dataID: "1332",
              title: "Always Baskılı Crop Sweat",
              href: "/always-baskili-crop-sweat",
              discount: 30,
            },
            {
              dataID: "1331",
              title: "Beli Lastikli Model Mom Jean",
              href: "/beli-lastikli-model-mom-jean",
              discount: 30,
            },
            {
              dataID: "1320",
              title: "Mavi Dalga Baskı Tshirt",
              href: "/mavi-dalga-baski-tshirt",
              discount: 30,
            },
            {
              dataID: "1316",
              title: "Ekoseli Önü Düğmeli Şort Etek",
              href: "/ekoseli-onu-dugmeli-sort-etek",
              discount: 30,
            },
            {
              dataID: "1285",
              title: "Yırtıklı Mom",
              href: "/yirtikli-mom",
              discount: 30,
            },
            {
              dataID: "1220",
              title: "Şeffaf Sneakers Ayakkabı",
              href: "/seffaf-sneakers-ayakkabi",
              discount: 30,
            },
            {
              dataID: "1219",
              title: "Sneakers Ayakkabı",
              href: "/sneakers-ayakkabi",
              discount: 30,
            },
            {
              dataID: "1157",
              title: "Çift Cep Crop Kot Ceket",
              href: "/cift-cep-crop-kot-ceket",
              discount: 30,
            },
            {
              dataID: "1124",
              title: "Uzun Katlamalı Kot Şort",
              href: "/uzun-katlamali-kot-sort",
              discount: 30,
            },
            {
              dataID: "1083",
              title: "Logo Baskılı Sıfır Kol Atlet",
              href: "/logo-baskili-sifir-kol-atlet",
              discount: 30,
            },
            {
              dataID: "1061",
              title: "Askılı Çizgili Triko Atlet",
              href: "/askili-cizgili-triko-atlet",
              discount: 30,
            },
            {
              dataID: "946",
              title: "Degaje Yaka Body",
              href: "/degaje-yaka-body",
              discount: 30,
            },
            {
              dataID: "691",
              title: "Çok Düğmeli Uzun Trençkot",
              href: "/cok-dugmeli-uzun-trenckot",
              discount: 30,
            },
            {
              dataID: "2664",
              title: "Paraşüt Garnili Polar Sweat",
              href: "/parasut-garnili-polar-sweat",
              discount: 40,
            },
            {
              dataID: "2615",
              title: "Yıkamalı Mom Fit Jean",
              href: "/yikamali-mom-fit-jean",
              discount: 40,
            },
            {
              dataID: "2594",
              title: "Paraşüt Garnili Asimetrik Eşofman Takım",
              href: "/parasut-garnili-asimetrik-esofman-takim",
              discount: 40,
            },
            {
              dataID: "2588",
              title: "Ekose Ceket Elbise",
              href: "/ekose-ceket-elbise",
              discount: 40,
            },
            {
              dataID: "2564",
              title: "Kaşkorse Çift Fermuarlı Crop Hırka",
              href: "/kaskorse-cift-fermuarli-crop-hirka",
              discount: 40,
            },
            {
              dataID: "2536",
              title: "Süveter Detaylı Basic Tshirt",
              href: "/suveter-detayli-basic-tshirt",
              discount: 40,
            },
            {
              dataID: "2492",
              title: "Kesik Paça Mom Jean",
              href: "/kesik-paca-mom-jean",
              discount: 40,
            },
            {
              dataID: "2484",
              title: "Pencere Yaka Düğmeli Triko Hırka",
              href: "/pencere-yaka-dugmeli-triko-hirka",
              discount: 40,
            },
            {
              dataID: "2475",
              title: "Balon Kollu Kot Tulum",
              href: "/balon-kollu-kot-tulum",
              discount: 40,
            },
            {
              dataID: "2319",
              title: "Kartal Baskılı Yıkamalı Sweatshirt",
              href: "/kartal-baskili-yikamali-sweatshirt",
              discount: 40,
            },
            {
              dataID: "2318",
              title: "Ribana Detaylı Yıkamalı Sweatshirt",
              href: "/ribana-detayli-yikamali-sweatshirt",
              discount: 40,
            },
            {
              dataID: "2317",
              title: "Bing Baskılı Yıkamalı Sweatshirt",
              href: "/bing-baskili-yikamali-sweatshirt",
              discount: 40,
            },
            {
              dataID: "2247",
              title: "Eteği Yırtmaçlı Basic Üçlü Kaşkorse Takım",
              href: "/etegi-yirtmacli-basic-uclu-kaskorse-takim",
              discount: 40,
            },
            {
              dataID: "2243",
              title: "İspanyol Paça Dikişli Tayt",
              href: "/ispanyol-paca-dikisli-tayt",
              discount: 40,
            },
            {
              dataID: "2222",
              title: "Önü Çıtçıtlı Paraşüt Kumaş Bluz",
              href: "/onu-citcitli-parasut-kumas-bluz-2222",
              discount: 40,
            },
            {
              dataID: "2190",
              title: "Vatkalı Ribanalı Sweat",
              href: "/vatkali-ribanali-sweat",
              discount: 40,
            },
            {
              dataID: "2156",
              title: "Omuz Vatkalı Sweat",
              href: "/omuz-vatkali-sweat",
              discount: 40,
            },
            {
              dataID: "2155",
              title: "Yanları Boydan Çıtçıtlı Eşofman Altı",
              href: "/yanlari-boydan-citcitli-esofman-alti",
              discount: 40,
            },
            {
              dataID: "1835",
              title: "Süs Kapak Cepli Keten Gömlek",
              href: "/sus-kapak-cepli-keten-gomlek",
              discount: 40,
            },
            {
              dataID: "1813",
              title: "Mini Yırtmaçlı Askılı Elbise",
              href: "/mini-yirtmacli-askili-elbise",
              discount: 40,
            },
            {
              dataID: "1794",
              title: "Eteği Püsküllü Oduncu Gömlek",
              href: "/etegi-puskullu-oduncu-gomlek",
              discount: 40,
            },
            {
              dataID: "1728",
              title: "Tekstüre Model Triko Hırka",
              href: "/teksture-model-triko-hirka",
              discount: 40,
            },
            {
              dataID: "1699",
              title: "Sırt Lastikli Düğmeli Keten Tulum",
              href: "/sirt-lastikli-dugmeli-keten-tulum",
              discount: 40,
            },
            {
              dataID: "1656",
              title: "Kısa Kollu Polo Yaka Triko Hırka",
              href: "/kisa-kollu-polo-yaka-triko-hirka",
              discount: 40,
            },
            {
              dataID: "1642",
              title: "Çiçek Bahçesi Desenli Kat Kat Elbise",
              href: "/cicek-bahcesi-desenli-kat-kat-elbise",
              discount: 40,
            },
            {
              dataID: "1638",
              title: "Geniş Kesim V Yaka Fırfırlı Elbise",
              href: "/genis-kesim-v-yaka-firfirli-elbise",
              discount: 40,
            },
            {
              dataID: "1630",
              title: "Geniş Yaka Volanlı Bluz",
              href: "/genis-yaka-volanli-bluz",
              discount: 40,
            },
            {
              dataID: "1624",
              title: "Limon Takım",
              href: "/limon-takim",
              discount: 40,
            },
            {
              dataID: "1620",
              title: "İp Askılı Palmiye Desenli Elbise",
              href: "/ip-askili-palmiye-desenli-elbise",
              discount: 40,
            },
            {
              dataID: "1593",
              title: "Fırfırlı Çıtçıt Düğmeli Denim Elbise",
              href: "/firfirli-citcit-dugmeli-denim-elbise",
              discount: 40,
            },
            {
              dataID: "1570",
              title: "Paçası Fırfırlı Çiçekli Tulum",
              href: "/pacasi-firfirli-cicekli-tulum",
              discount: 40,
            },
            {
              dataID: "1565",
              title: "Çapraz Yaka Çiçekli Retro Elbise",
              href: "/capraz-yaka-cicekli-retro-elbise",
              discount: 40,
            },
            {
              dataID: "1557",
              title: "Düğme Detaylı Ekoseli Tulum",
              href: "/dugme-detayli-ekoseli-tulum",
              discount: 40,
            },
            {
              dataID: "1551",
              title: "Boydan Düğmeli Kuşaklı Kalpli Elbise",
              href: "/boydan-dugmeli-kusakli-kalpli-elbise",
              discount: 40,
            },
            {
              dataID: "1537",
              title: "Rainbow Yıkamalı Tshirt",
              href: "/rainbow-yikamali-tshirt",
              discount: 40,
            },
            {
              dataID: "1535",
              title: "Beli Lastikli Fisto Elbise",
              href: "/beli-lastikli-fisto-elbise",
              discount: 40,
            },
            {
              dataID: "1477",
              title: "Ejderha Baskılı Şortlu Takım",
              href: "/ejderha-baskili-sortlu-takim",
              discount: 40,
            },
            {
              dataID: "1451",
              title: "Kruvaze Yaka Papatya Desenli Tulum",
              href: "/kruvaze-yaka-papatya-desenli-tulum",
              discount: 40,
            },
            {
              dataID: "1420",
              title: "Fermuarlı Logo Baskılı Elbise",
              href: "/fermuarli-logo-baskili-elbise",
              discount: 40,
            },
            {
              dataID: "1408",
              title: "Beli Lastikli Keten Şort",
              href: "/beli-lastikli-keten-sort",
              discount: 40,
            },
            {
              dataID: "1378",
              title: "Yaka Düğmeli Puantiyeli Elbise",
              href: "/yaka-dugmeli-puantiyeli-elbise",
              discount: 40,
            },
            {
              dataID: "1376",
              title: "LM Yazılı Şort Takım",
              href: "/lm-yazili-sort-takim",
              discount: 40,
            },
            {
              dataID: "1371",
              title: "Yüksek Bel Fitilli Tayt",
              href: "/yuksek-bel-fitilli-tayt",
              discount: 40,
            },
            {
              dataID: "1357",
              title: "Asimetrik Dikişli Mini Kot Etek",
              href: "/asimetrik-dikisli-mini-kot-etek",
              discount: 40,
            },
            {
              dataID: "1134",
              title: "Logo Yazılı Salaş Crop Tshirt",
              href: "/logo-yazili-salas-crop-tshirt",
              discount: 40,
            },
            {
              dataID: "1070",
              title: "Çiçek Detay Dantelli Büstiyer",
              href: "/cicek-detay-dantelli-bustiyer",
              discount: 40,
            },
            {
              dataID: "1032",
              title: "Angel Şort",
              href: "/angel-sort",
              discount: 40,
            },
            {
              dataID: "914",
              title: "Angel Eşofman Altı",
              href: "/angel-esofman-alti",
              discount: 40,
            },
            {
              dataID: "750",
              title: "Vatkalı Basic Tshirt",
              href: "/vatkali-basic-tshirt",
              discount: 40,
            },
            {
              dataID: "747",
              title: "Bağlamalı Tshirt",
              href: "/baglamali-tshirt",
              discount: 40,
            },
            {
              dataID: "713",
              title: "Kesik Paça Midi Jean",
              href: "/kesik-paca-midi-jean1",
              discount: 40,
            },
            {
              dataID: "689",
              title: "Prenses Yaka Bluz",
              href: "/prenses-yaka-bluz",
              discount: 40,
            },
            {
              dataID: "652",
              title: "Ribanalı Eşofman Altı",
              href: "/ribanali-esofman-alti",
              discount: 40,
            },
            {
              dataID: "469",
              title: "Born Yıkamalı Tshirt",
              href: "/born-yikamali-tshirt",
              discount: 40,
            },
            {
              dataID: "1584",
              title: "Yaprak Desenli Kimono",
              href: "/yaprak-desenli-kimono",
              discount: 60,
            },
            {
              dataID: "1475",
              title: "Batik Desen Dik Yaka Crop Takım",
              href: "/batik-desen-dik-yaka-crop-takim",
              discount: 60,
            },
            {
              dataID: "1442",
              title: "Karpuz Kol Safari Şortlu Tulum",
              href: "/karpuz-kol-safari-sortlu-tulum",
              discount: 60,
            },
            {
              dataID: "1377",
              title: "Batik Desen Spor Şortlu Takım",
              href: "/batik-desen-spor-sortlu-takim",
              discount: 60,
            },
            {
              dataID: "1375",
              title: "Kaplan Baskılı Eşofman Takımı",
              href: "/kaplan-baskili-esofman-takimi",
              discount: 60,
            },
            {
              dataID: "1373",
              title: "Baskılı Renkli Takım",
              href: "/baskili-renkli-takim",
              discount: 60,
            },
            {
              dataID: "1352",
              title: "Logo Baskılı Askılı Neon Elbise",
              href: "/logo-baskili-askili-neon-elbise",
              discount: 60,
            },
            {
              dataID: "1133",
              title: "Askılı Crep Tulum",
              href: "/askili-crep-tulum",
              discount: 40,
            },
            {
              dataID: "970",
              title: "Kısa Kol Pantolon Takım",
              href: "/kisa-kol-pantolon-takim",
              discount: 60,
            },
            {
              dataID: "715",
              title: "Yandan Kemer Yuvalı Kumaş Pantolon",
              href: "/yandan-kemer-yuvali-kumas-pantolon",
              discount: 60,
            },
            {
              dataID: "677",
              title: "Saten Elbise",
              href: "/saten-elbise1",
              discount: 60,
            },
            {
              dataID: "518",
              title: "Yüksek Bel Kumaş Pantolon",
              href: "/yuksek-bel-kumas-pantolon",
              discount: 60,
            },
            {
              dataID: "373",
              title: "Payetli Askı Elbise",
              href: "/payetli-aski-elbise",
              discount: 60,
            },
            {
              dataID: "262",
              title: "Büzgülü Yeşil Kat Elbise",
              href: "/buzgulu-yesil-kat-elbise",
              discount: 60,
            },
            {
              dataID: "12702",
              title: "Kruvaze Düğmeli Örgü Hırka",
              href: "/kruvaze-dugmeli-orgu-hirka",
              discount: 30,
            },
            {
              dataID: "12926",
              title: "Çizgili Pijama Takımı",
              href: "/cizgili-pijama-takimi",
              discount: 30,
            },
            {
              dataID: "2684",
              title: "Giraffe Sweatshirt",
              href: "/giraffe-sweatshirt",
              discount: 30,
            },
            {
              dataID: "2590",
              title: "Yüksek Cepli Desenli Ceket",
              href: "/yuksek-cepli-desenli-ceket",
              discount: 30,
            },
            {
              dataID: "12937",
              title: "Cep Detay Uzun Gömlek Ceket",
              href: "/cep-detay-uzun-gomlek-ceket",
              discount: 30,
            },
            {
              dataID: "12920",
              title: "Salaş Triko İkili Takım",
              href: "/salas-triko-ikili-takim",
              discount: 30,
            },
            {
              dataID: "12103",
              title: "Yarım Fermuarlı Crop Sweatshirt",
              href: "/yarim-fermuarli-crop-sweatshirt",
              discount: 30,
            },
            {
              dataID: "12346",
              title: "Slightly Eşofman Takım",
              href: "/slightly-esofman-takim",
              discount: 30,
            },
            {
              dataID: "12038",
              title: "Triko Örgülü Basic Hırka",
              href: "/triko-orgulu-basic-hirka",
              discount: 30,
            },
            {
              dataID: "12854",
              title: "Midi Boy Desen Örgülü Hırka",
              href: "/midi-boy-desen-orgulu-hirka",
              discount: 30,
            },
            {
              dataID: "12619",
              title: "Yırtmaç Detaylı Ekose Desenli Ceket",
              href: "/yirtmac-detayli-ekose-desenli-ceket",
              discount: 30,
            },
            {
              dataID: "12041",
              title: "Gömlek Yaka Örme Hırka",
              href: "/gomlek-yaka-orme-hirkav",
              discount: 30,
            },
            {
              dataID: "12297",
              title: "Yaka Detaylı Triko Kazak",
              href: "/yaka-detayli-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12336",
              title: "Kapüşonlu Ekose Ceket",
              href: "/kapusonlu-ekose-ceket",
              discount: 30,
            },
            {
              dataID: "12135",
              title: "Kazayağı Desenli Triko Süveter",
              href: "/kazayagi-desenli-triko-suveter",
              discount: 30,
            },
            {
              dataID: "12193",
              title: "Oversize Triko Kazak",
              href: "/oversize-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12299",
              title: "Taş Düğmeli Tüvit Hırka",
              href: "/tas-dugmeli-tuvit-hirka",
              discount: 30,
            },
            {
              dataID: "12922",
              title: "Balıkçı Crop Örgü Kazak",
              href: "/balikci-crop-orgu-kazak",
              discount: 30,
            },
            {
              dataID: "13016",
              title: "Yakası Fitilli Triko Kazak",
              href: "/yakasi-fitilli-triko-kazak",
              discount: 30,
            },
            {
              dataID: "11413",
              title: "V Yaka Yırtmaçlı Triko Süveter",
              href: "/v-yaka-yirtmacli-triko-suveter",
              discount: 30,
            },
            {
              dataID: "12971",
              title: "Etnik Desen Hırka",
              href: "/etnik-desen-hirka",
              discount: 30,
            },
            {
              dataID: "9480",
              title: "Önü Bağlamalı Triko Takım",
              href: "/onu-baglamali-triko-takim",
              discount: 30,
            },
            {
              dataID: "12349",
              title: "Paraşüt Garnili Asimetrik Eşofman Takım",
              href: "/parasut-garnili-asimetrik-esofman-takim",
              discount: 40,
            },
            {
              dataID: "7068",
              title: "Boyundan Bağlamalı Katlı Elbise",
              href: "/boyundan-baglamali-katli-elbise",
              discount: 30,
            },
            {
              dataID: "10493",
              title: "Yanları Boydan Çıtçıtlı Eşofman Altı",
              href: "/yanlari-boydan-citcitli-esofman-alti",
              discount: 40,
            },
            {
              dataID: "12276",
              title: "Polo Yaka Düğmeli Uzun Kol Triko",
              href: "/polo-yaka-dugmeli-uzun-kol-triko",
              discount: 30,
            },
            {
              dataID: "12713",
              title: "Boğazlı Crop Triko Kazak",
              href: "/bogazli-crop-triko-kazak",
              discount: 30,
            },
            {
              dataID: "10248",
              title: "Eteği Yırtmaçlı Basic Üçlü Kaşkorse Takım",
              href: "/etegi-yirtmacli-basic-uclu-kaskorse-takim",
              discount: 40,
            },
            {
              dataID: "11573",
              title: "Dik Yaka Şeritli Triko Takım",
              href: "/dik-yaka-seritli-triko-takim",
              discount: 30,
            },
            {
              dataID: "12006",
              title: "Basic Blazer Ceket",
              href: "/basic-blazer-ceket",
              discount: 30,
            },
            {
              dataID: "12806",
              title: "Örgü Detaylı V Yaka Triko Hırka",
              href: "/orgu-detayli-v-yaka-triko-hirka",
              discount: 30,
            },
            {
              dataID: "12535",
              title: "Outer Baskılı Sweat",
              href: "/outer-baskili-sweat",
              discount: 30,
            },
            {
              dataID: "12936",
              title: "Balıkçı Yaka Fitilli Crop Kazak",
              href: "/balikci-yaka-fitilli-crop-kazak",
              discount: 30,
            },
            {
              dataID: "12302",
              title: "Çizgili Triko Kazak",
              href: "/cizgili-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12712",
              title: "Yaka Detay Çizgili Triko Kazak",
              href: "/yaka-detay-cizgili-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12745",
              title: "Örgü Yaka Balon Kollu Triko Kazak",
              href: "/orgu-yaka-balon-kollu-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12902",
              title: "Büzgülü Crop Deri Mont",
              href: "/buzgulu-crop-deri-mont",
              discount: 30,
            },
            {
              dataID: "13011",
              title: "Şerit Detay Pijama Takımı",
              href: "/serit-detay-pijama-takimi",
              discount: 30,
            },
            {
              dataID: "12625",
              title: "Peluş Bomber Ceket",
              href: "/pelus-bomber-ceket",
              discount: 30,
            },
            {
              dataID: "12282",
              title: "Balon Kol Selanik Örgü Kazak",
              href: "/balon-kol-selanik-orgu-kazak",
              discount: 30,
            },
            {
              dataID: "11049",
              title: "Gold Çıtçıtlı Mevsimlik Ceket",
              href: "/gold-citcitli-mevsimlik-ceket",
              discount: 30,
            },
            {
              dataID: "10708",
              title: "Duffy Duck Baskılı Sweatshirt",
              href: "/duffy-duck-baskili-sweatshirt",
              discount: 30,
            },
            {
              dataID: "12335",
              title: "Ekose Ceket Elbise",
              href: "/ekose-ceket-elbise",
              discount: 40,
            },
            {
              dataID: "12598",
              title: "Bisiklet Yaka Crop Triko",
              href: "/bisiklet-yaka-crop-triko",
              discount: 30,
            },
            {
              dataID: "12495",
              title: "Çiçek Desenli Kapüşonlu Bomber Mont",
              href: "/cicek-desenli-kapusonlu-bomber-mont",
              discount: 30,
            },
            {
              dataID: "12381",
              title: "Torba Cepli Ekose Ceket",
              href: "/torba-cepli-ekose-ceket",
              discount: 30,
            },
            {
              dataID: "11075",
              title: "Crop Kesim Lastikli Eşofman Takım",
              href: "/crop-kesim-lastikli-esofman-takim",
              discount: 30,
            },
            {
              dataID: "12641",
              title: "Balıksırtı Model Balon Kol Triko Hırka",
              href: "/baliksirti-model-balon-kol-triko-hirka",
              discount: 30,
            },
            {
              dataID: "11525",
              title: "Paraşüt Denim Ceket",
              href: "/parasut-denim-ceket",
              discount: 30,
            },
            {
              dataID: "12309",
              title: "Yakası Düğmeli Çizgili Triko Kazak",
              href: "/yakasi-dugmeli-cizgili-triko-kazak",
              discount: 30,
            },
            {
              dataID: "12296",
              title: "Fermuar Detaylı Şişme Yelek",
              href: "/fermuar-detayli-sisme-yelek",
              discount: 30,
            },
            {
              dataID: "11896",
              title: "Oversized Puffer Mont",
              href: "/oversized-puffer-mont",
              discount: 30,
            },
            {
              dataID: "11763",
              title: "Ekose Şişme Mont",
              href: "/ekose-sisme-mont",
              discount: 30,
            },
            {
              dataID: "12569",
              title: "Pofuduk Cepli Mont",
              href: "/pofuduk-cepli-mont",
              discount: 30,
            },
            {
              dataID: "12112",
              title: "Düğme Detay Ekose Ceket",
              href: "/dugme-detay-ekose-ceket1",
              discount: 30,
            },
            {
              dataID: "12752",
              title: "Büzgülü Kapitone Mont",
              href: "/buzgulu-kapitone-mont",
              discount: 30,
            },
            {
              dataID: "12306",
              title: "Kapüşonlu Şişme Peluş Mont",
              href: "/kapusonlu-sisme-pelus-mont",
              discount: 30,
            },
            {
              dataID: "12391",
              title: "İki Renkli Şişme Mont",
              href: "/iki-renkli-sisme-mont1",
              discount: 30,
            },
            {
              dataID: "11372",
              title: "Fitilli Kadife Puf Mont",
              href: "/fitilli-kadife-puf-mont",
              discount: 30,
            },
            {
              dataID: "12300",
              title: "Uzun Yorgan Mont",
              href: "/uzun-yorgan-mont",
              discount: 40,
            },
            {
              dataID: "12725",
              title: "Kapitone Desenli Yırtmaçlı Mont",
              href: "/kapitone-desenli-yirtmacli-mont",
              discount: 30,
            },
            {
              dataID: "10711",
              title: "Suni Kürk Detaylı Kaban",
              href: "/suni-kurk-detayli-kaban",
              discount: 30,
            },
            {
              dataID: "12214",
              title: "Kapüşonlu Rugan Yağmurluk",
              href: "/kapusonlu-rugan-yagmurluk",
              discount: 30,
            },
            {
              dataID: "11328",
              title: "Yün Görünümlü Ceket",
              href: "/yun-gorunumlu-ceket-2381",
              discount: 30,
            },
            {
              dataID: "11331",
              title: "Reglan Kol Yün Ceket",
              href: "/reglan-kol-yun-ceket",
              discount: 30,
            },
            {
              dataID: "9819",
              title: "Uzun Patlı Kot Ceket",
              href: "/uzun-patli-kot-ceket",
              discount: 40,
            },
            {
              dataID: "10313",
              title: "Beli Lastikli Pis Kesim Pantolon",
              href: "/beli-lastikli-pis-kesim-pantolon",
              discount: 30,
            },
            {
              dataID: "11754",
              title: "Cherry Örgü Hırka",
              href: "/cherry-orgu-hirka",
              discount: 40,
            },
            {
              dataID: "7595",
              title: "Tekstüre Model Triko Hırka",
              href: "/teksture-model-triko-hirka",
              discount: 40,
            },
            {
              dataID: "12195",
              title: "İki Renk Balıkçı Yaka Kazak",
              href: "/iki-renk-balikci-yaka-kazak",
              discount: 40,
            },
          ];

          function SaveDataToSessionStorage(data) {
            localStorage.removeItem("smplUrunDataJson");
            sessionStorage.removeItem("smplUrunDataJson");
            var dataArray;
            if (sessionStorage.getItem("smplUrunDataJson") === null) {
              dataArray = [];
              data.map((item, index) => {
                dataArray.push(item)
              })
            } else {
              dataArray = JSON.parse(sessionStorage.getItem("smplUrunDataJson"));
            }

            sessionStorage.setItem("smplUrunDataJson", JSON.stringify(dataArray));
          }
          SaveDataToSessionStorage(data);
        } else {
          // replace changes
        }
      }
    });
  });
}
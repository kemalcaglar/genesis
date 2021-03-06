(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kismi_Odeme_Banner_Product")) {
        return false
    }
    EightDigits.sf.prototype.Kismi_Odeme_Banner_Product = function () {

        var config = {
            scenarioname: "Kismi_Odeme_Banner_Product",
            analytics: "Kismi_Odeme_Banner_Product",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };

      
        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            
            start: function () {
               
    var style = "\
    <style>\
    .smpl-odemeBanner-tooltip-container{\
        display:inline-block;\
        font-size:13px;\
        cursor:pointer;\
        position:relative;\
        width:100%;\
        display:flex;\
        align-items:center;\
        margin-top:15px;\
        margin-bottom:15px;\
    }\
    </style>\
    ";
  
    jQuery('head').append(style);

if(window.innerWidth>767){
    if(jQuery('.announcement-banner').length!==0){
        jQuery('.announcement-banner:eq(1)').after('<div  class="smpl-odemeBanner-tooltip-container" ><img src="https://cdn.8digits.com/log/r/ac37c246-ce39-419a-9e2a-cc3d495ceb42.jpeg"></div>');

    }
    else{
        jQuery('.price-partial-shadow:eq(2)').after('<div  class="smpl-odemeBanner-tooltip-container" ><img src="https://cdn.8digits.com/log/r/97195125-2f55-4b14-bfb3-6cdbd91e89bc.jpeg"></div>');
    }
    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
        EightDigits.analytics.sendEvent(config.analytics, 'shown-bannerDesktop');
        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
    }
jQuery('.smpl-odemeBanner-tooltip-container').click(function(){
    window.open("https://www.setur.com.tr/kismi-odeme-kampanyasi")
if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-click')) {
    EightDigits.analytics.sendEvent(config.analytics, 'click-bannerDesktop');
    EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on')
}
})
}
else{
    if(jQuery('.announcement-banner').length!==0){
        jQuery('.announcement-banner:eq(0)').after('<div  class="smpl-odemeBanner-tooltip-container" ><img src="https://cdn.8digits.com/log/r/1a51fea3-43f2-418b-af2d-048147c20258.jpeg"></div>');

    }
    else{
        jQuery('.content-partial-shadow.price-partial-shadow.display-only-mobile:eq(0)').after('<div  class="smpl-odemeBanner-tooltip-container" ><img src="https://cdn.8digits.com/log/r/1a51fea3-43f2-418b-af2d-048147c20258.jpeg"></div>');

    }

    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
        EightDigits.analytics.sendEvent(config.analytics, 'shown-bannerMobile');
        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
    }
jQuery('.smpl-odemeBanner-tooltip-container').click(function(){
    window.open("https://www.setur.com.tr/kismi-odeme-kampanyasi")

    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-click')) {
        EightDigits.analytics.sendEvent(config.analytics, 'click-bannerMobile');
        EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on')
    }

})
}
            },
            control: function () {
                var arr = [
                    "1774 Kazda???? Termal Butik Otel",
                    "Abant Aden Boutique Hotel",
                    "Abant Palace",
                    "Acapulco Resort & Convention & Spa",
                    "Acropol Of Bodrum Beach Hotel ",
                    "Acroter Hotel & SPA",
                    "Adalya Elite Lara Hotel",
                    "Adam & Eve",
                    "Adramis Termal Hotel",
                    "Adrasan Klados Hotel",
                    "Adrasan La Casita Hotel",
                    "Adrina Termal Health&Spa Hotel",
                    "Akrones Thermal Spa Convention Sport Hotel",
                    "Akyaka G??m???? Konak",
                    "Ala??at?? Marina Palace Butik Otel",
                    "Alaroof Butik Otel",
                    "Alba Queen Hotel ",
                    "Alba Resort Hotel ",
                    "Alba Royal Hotel ",
                    "Alkan Hotel",
                    "Almira Hotel Thermal Spa & Convention Center",
                    "Alt??n Yunus Resort & Thermal Hotel",
                    "Amon Hotels Belek",
                    "Annabella Diamond Hotel & Spa",
                    "Annabella Park Hotel",
                    "Antakya Ottoman Palace Thermal Resort & Spa",
                    "Aphrodite Hotel Bozburun",
                    "Aqua Fantasy Aquapark Hotel & Spa",
                    "Aquaworld Belek By Mp Hotels",
                    "Arnor De Luxe Hotel & Spa",
                    "Asel Hotel Didim",
                    "Assos Behram Hotel",
                    "Assos Eden Beach Hotel",
                    "Assos Eden Gardens Hotel",
                    "Assos Kervansaray Hotel",
                    "Assos Nazl??han Hotel",
                    "Assos Nazl??han Spa Hotel",
                    "Assos Park Hotel",
                    "Asteria Ven??s Didim",
                    "Asteria Zeus Didim",
                    "Aurasia Beach Hotel",
                    "Aurasia City Hotel",
                    "Aydeniz Apart Otel",
                    "Aydeniz Otel",
                    "Ayval??k Palas Hotel",
                    "Azka Otel & Spa",
                    "Azure By Yelken",
                    "B Business Hotel & Spa",
                    "BC Spa Hotel",
                    "Belkon Hotel",
                    "Bella Resort & Spa",
                    "Black Bird Thermal Hotel & Spa",
                    "Blue Bay Beach Hotel",
                    "Blue Marlin Deluxe Spa & Resort",
                    "Blue Paradise Side Hotel",
                    "Blue Waters Club",
                    "BN Hotel Thermal & SPA",
                    "Bodrium Hotel &You SPA",
                    "Bolu Koru Hotels Spa & Convention",
                    "Bonjo Club Resort",
                    "Boyal??k Beach Hotel & SPA",
                    "Budan Thermal Spa Hotel & Convention Center",
                    "Bumerang Suites Hotel",
                    "Butikhan Beach & Deluxe",
                    "B??y??k Abant Oteli & Kongre Merkezi",
                    "Calido Maris Hotel",
                    "Can Garden Beach",
                    "Cape Krio Boutique Hotel & Spa",
                    "Casa Sur Antalya",
                    "Cennet Life Otel",
                    "Champion Holiday Village",
                    "Cihant??rk Hotel",
                    "Class Beach Otel",
                    "Club Barbarossa",
                    "Club Hotel Anjeliq",
                    "Club Hotel Falcon",
                    "Club Hotel Letoonia Fethiye",
                    "Club Hotel Sera",
                    "Club Hotel Turan Prince World",
                    "Club Marco Polo",
                    "Club Marma Hotel",
                    "Club Resort Atlantis",
                    "Club Throne Beach",
                    "Concorde Luxury Resort Casino Convention & SPA",
                    "Concordia Celes Hotel",
                    "Cornelia De Luxe Resort",
                    "Cornelia Diamond Golf Resort & Spa",
                    "Costa Bodrum City",
                    "Crystal Admiral Resort Suites & Spa",
                    "Crystal Aura Beach Resort & Spa",
                    "Crystal Boutique Beach Resort",
                    "Crystal Club World Of Colours",
                    "Crystal Deluxe Resort & Spa",
                    "Crystal Family Resort & Spa",
                    "Crystal Flora Beach Resort",
                    "Crystal Green Bay Resort & Spa",
                    "Crystal Palace Luxury Resort & Spa",
                    "Crystal Paraiso Verde Resort & Spa",
                    "Crystal Sunrise Queen Luxury Resort & Spa",
                    "Crystal Sunset Luxury Resort & Spa",
                    "Crystal Tat Beach Golf Resort & Spa",
                    "Crystal Waterworld Resort & Spa",
                    "Cunda Esen Hotel",
                    "Cunda Fora Hotel",
                    "Cunda K??vrak Otel",
                    "Cunda Oteli",
                    "Cunda Poseidon Otel",
                    "??amkar Otel",
                    "??e??me K??y Otel",
                    "????ral?? Marina Loft",
                    "??om??a Manzara Oteli",
                    "Dalya Resort Hotel",
                    "Dalyan Arda Villas",
                    "Dalyan Live Spa Resort Hotel",
                    "Dalyan Resort Hotel",
                    "Dalyan Resort Spa Hotel",
                    "Daphnis Hotel",
                    "Dat??a Suites Butik Otel",
                    "deneme extranet",
                    "Deniz K??z?? Hotel",
                    "Deniz K??z?? Royal",
                    "Diamond De Luxe Hotel & Spa",
                    "Diamond Hill Resort Hotel",
                    "Dikili Papaya Evleri",
                    "Dionisus Hotel",
                    "Dome Hotel",
                    "Doria Hotel Bodrum",
                    "Dorman Suites Hotel ",
                    "Double Tree By Hilton Ku??adas??",
                    "Dream Family Club",
                    "Dream World Aqua",
                    "Dream World Hill",
                    "Dream World Palace Hotel",
                    "Dream World Resort",
                    "Ece Saray Marina Resort",
                    "Efruze Otel",
                    "Ege Birlik Boutique",
                    "Egelia ??mroz Otel",
                    "Egemen Butik Otel",
                    "Ekici Hotel",
                    "El Mundo Suites",
                    "El Vino Hotel Suites",
                    "Ela Quality Resort Belek",
                    "Elegance East Hotel",
                    "Elegance Hotels International",
                    "Elementa Hotel",
                    "Elexus Hotel Resort Casino",
                    "Elite Hotel Yal??kavak",
                    "Elite World Marmaris Otel",
                    "Elite World Sapanca Convention&Wellness Resort  ",
                    "Eliz Hotel Convention Center Thermal Spa Wellness",
                    "En Vie Beach Boutique Hotel",
                    "EvN Hotel Dalyan",
                    "Fame Residence G??yn??k",
                    "Fame Residence Kemer & SPA Hotel",
                    "Fame Residence Lara & SPA Hotel",
                    "Faustina Hotel & Spa",
                    "Fimar Life Thermal Resort Hotel",
                    "Flora Hotel",
                    "Fo??a Kumsal Hotel",
                    "Fo??amor Otel",
                    "Gazelle Resort & Spa",
                    "Gloria Verde Resort",
                    "Golden Life Blue Green & Pasham Hotel",
                    "Golden Life Heights Deluxe Suit Hotel",
                    "Golden Life Resort Hotel Spa",
                    "Golden Life Z Exclusive Hotel",
                    "G??cek Lykia Resort Hotel",
                    "G??nl??ferah Thermal & Spa Hotel",
                    "G??n??lhan Otel Ala??at??",
                    "Grand Okan Hotel",
                    "Grand Park Kemer",
                    "Grand Park Lara",
                    "Grand Temizel",
                    "Grand Yaz??c?? Club Marmaris Palace",
                    "Grand Yaz??c?? Club Turban Thermal Hotel",
                    "Green Boutique Hotel",
                    "Green Hills Suites",
                    "Green Nature Diamond Otel",
                    "Green Nature Resort & Spa",
                    "Green Paradise Beach Hotel",
                    "Greenport Hotel Bodrum",
                    "Grida City Antalya",
                    "Gulet Hotel",
                    "G??l??mser Hatun Termal",
                    "G??m??ld??r Mavi Deniz Otel",
                    "Habesos Hotel",
                    "Habitat Otel Sar??kam????",
                    "Hadrianus Hotel",
                    "Han Deluxe Hotel",
                    "Hapimag Sea Garden Resort",
                    "Hawaii Hotel",
                    "Haydarpasha Palace",
                    "Hedef Beach Resort Hotel",
                    "Hedef Kleopatra Golden Sun",
                    "Hedef Kleopatra Sand Hotel",
                    "Hedef Resort & Spa",
                    "Hera Hotel",
                    "Herakles Thermal Otel",
                    "Herodot Beach Hotel ",
                    "Hillstone Bodrum Hotel & Spa",
                    "Hilton Dalaman Sar??germe Resort & Spa",
                    "Honeymoon Beach Hotel",
                    "Hotel  Manas Park ??l??deniz",
                    "Hotel Berke Ranch",
                    "Hotel Green Gold",
                    "Hotel Su",
                    "Hotel Turan Prince",
                    "Huri & Nuri Hotel",
                    "Infinity City Hotel",
                    "Innvista Hotels Belek ",
                    "??da Ta?? Konak",
                    "??dahan Hotel",
                    "??da?? Club Hotel",
                    "??da?? Hotel",
                    "??kbal Thermal Hotel & Spa",
                    "??layda Avantgarde Hotel",
                    "??layda Hotel",
                    "??ncekum Beach Resort",
                    "??nfinity By Yelken Aquapark & Resort",
                    "Jasmin Beach Resort",
                    "Jura Hotels Afyon Thermal",
                    "Justiniano Deluxe Resort",
                    "Kairaba Blue Dreams Resort & Spa",
                    "Kalif Hotel",
                    "Kalinda Inn Otel",
                    "Kapya Hotel",
                    "Kars-?? ??irin Otel",
                    "Kasr-?? Ser??ehan Butik Otel",
                    "Katina Hotel",
                    "Katre Hotel",
                    "Kaya Green Park Hotel",
                    "Kaya ??zmir Thermal & Convention",
                    "Kaya Palazzo Resort & Casino",
                    "Kaya Palazzo Resort & Residences Bodrum",
                    "Kazda??lar?? Reis Inn Hotel & Spa",
                    "Kemer Park Otel",
                    "Kemerlihan Deluxe Hotel",
                    "Kerme Ottoman Ala??at??",
                    "Kerme Ottoman G??kova",
                    "Kerme Ottoman Palace",
                    "Kimera Lounge Hotel",
                    "Kimeros Park Holiday Village",
                    "Kirman Arycanda Deluxe",
                    "Kirman Belazur Resort & Spa",
                    "Kirman Calyptus Resort & Spa",
                    "Kirman Leodikya Resort & Spa",
                    "Kirman Sidemarin Beach & Spa",
                    "Kirman Sidera Luxury & Spa",
                    "Kleopatra Ada Beach Hotel",
                    "Kleopatra Ada Hotel",
                    "Kleopatra Beach Hotel",
                    "Kleopatra Royal Palm Hotel",
                    "Koala Bungalows",
                    "Korel Thermal Resort Clinic & Spa",
                    "Korsan Ada Hotel",
                    "Ku??tur Club Holiday Village",
                    "La Kumsal Hotel",
                    "La Petra Otel",
                    "La Quinta by Wyndham Bodrum",
                    "La Vista Boutique Hotel & SPA",
                    "Land Of Paradise Beach",
                    "Laren Family  Hotel & Spa",
                    "Laren Seaside Hotel & Spa",
                    "Larissa Hotel Beldibi",
                    "Larissa Sultan???s Beach Hotel",
                    "Leman Hotel",
                    "Lidya Sardes Thermal & Spa Hotel",
                    "Limak Atlantis De Luxe Hotel & Resort",
                    "Limak Cyprus Deluxe Hotel",
                    "Limak Lara De Luxe Hotel & Resort",
                    "Limak Limra Hotel & Resort",
                    "Limak Thermal Boutique Hotel",
                    "Limonade Pansiyon",
                    "Liona Hotel",
                    "Liona Residence",
                    "Lord's Palace Hotel & Spa & Casino",
                    "Lujo Bodrum",
                    "Lycus River Thermal & Spa Hotel",
                    "Magnolia Hotel",
                    "Maia Luxury Beach Hotel & Spa",
                    "Manast??r Otel & Suit",
                    "Marbel Hotel By Palm Wings",
                    "Mare Garden Otel",
                    "Marina Boutique Fethiye Nidya Hotel",
                    "May Thermal Resort & SPA",
                    "Mega?? Hotel",
                    "Melas Lara Hotel",
                    "Merit Crystal Cove Hotel & Casino",
                    "Merit Lefko??a Hotel & Casino",
                    "Merit Park Hotel & Casino",
                    "Merit Royal Hotel & Casino & Spa",
                    "Merit Royal Premium Hotel & Casino",
                    "Mert Seaside Hotel",
                    "Mimoza Apart G??ll??k",
                    "Mimoza Beach Hotel",
                    "Minu Hotel",
                    "Mirage Park Resort",
                    "Miramar Hotel",
                    "Monachus Hotel & Spa",
                    "Mountain Lodge",
                    "Mulka Hotel",
                    "My Green Boutique Hotel",
                    "My Marin Hotel",
                    "Narcia Resort Side",
                    "Nashira Resort Hotel & Aqua Spa",
                    "Nevada Hotel & Spa",
                    "NG Afyon",
                    "Ng Sapanca Enjoy",
                    "NG Sapanca Wellness & Convention",
                    "Notion Kesre Beach Hotel & Spa",
                    "Nova Beach Hotel",
                    "Nova Park Hotel",
                    "Obam Termal Resort Otel&Spa",
                    "Oda Bodrum",
                    "Oksijen Zone Hotels Uluda??",
                    "Orcey Hotel",
                    "Oru??o??lu Termal Resort Afyon",
                    "Otium Family Eco Club",
                    "Otium Park Club Akman",
                    "??ren Konak Otel",
                    "??rsmaris Boutique Hotel",
                    "??zlem Garden Hotel",
                    "Palm Wings Beach Resort & Spa Ku??adas??",
                    "Palm Wings Ephesus Beach Resort",
                    "Park Aqua Rooms Otel",
                    "Pavel'in Yeri Butik Otel",
                    "Petrino G??k??eada Hotel & Kitchen",
                    "P??r??l Hotel Thermal & Beauty Spa",
                    "Pine Beach Belek",
                    "Pine Club Boutique Hotel & Spa",
                    "Porto Bello Hotel Resort & Spa",
                    "Premier Nergis Beach Hotel",
                    "Queen's Park G??yn??k",
                    "Queen's Park Le Jardin Resort & Spa",
                    "Radisson Blu Resort & Spa ??e??me",
                    "Ramada By Wyndham Bursa ??ekirge Termal & Spa",
                    "Ramada Resort Bodrum",
                    "Ramada Resort Kazda??lar?? Thermal & Spa",
                    "Regnum Carya",
                    "Rhapsody Hotel Ka??",
                    "Richmond Nua Wellness Spa Sapanca",
                    "Rixos Downtown Antalya",
                    "Robinson Club ??amyuva",
                    "Robinson Club Nobilis",
                    "Robinson Club Pamfilya",
                    "Robinson Club Sar??germe Park",
                    "Room Room Motel",
                    "Royal Alhambra Palace Hotel",
                    "Royal Asarl??k Beach Hotel & Spa",
                    "Royal Dragon Hotel",
                    "Royal Holiday Palace Hotel",
                    "Royal Seginus Hotel",
                    "Royal Taj Mahal Hotel",
                    "Royal Wings Hotel",
                    "Safir Hotel",
                    "Safran Thermal Resort Hotel Spa & Convention Center",
                    "Sahil Mart??",
                    "Salamis Bay Conti Resort & Hotel",
                    "Salbakos Herakleia Boutique Hotel",
                    "Salmakis Otel Bodrum",
                    "Samira Resort",
                    "Sand??kl?? Thermal Park Hotel",
                    "Sapanca Alfa Suites & Spa",
                    "Sarot Thermal Park Resort & Spa",
                    "Saylam Suites Ka??",
                    "Sea Bird Hotel",
                    "Seher Resort & Spa",
                    "Seher Sun Palace Resort & Spa",
                    "Sertil Royal Forest Hotel",
                    "Sesin Hotel Marmaris",
                    "Seven Seas Hotel Blue",
                    "Seven Seas Hotel Life",
                    "S????ac??k Marina Apart Hotel",
                    "Side Erenler Hotel",
                    "Side Kum Hotel",
                    "Side Premium",
                    "Side Sun Hotel",
                    "Siz ??nn Otel Urla",
                    "Son Vapur Butik Otel",
                    "Sonnen Hotel ",
                    "Star Hotel Fethiye",
                    "Starlight Resort Hotel",
                    "Sueno Hotels Beach",
                    "Sueno Hotels Deluxe Belek",
                    "Sueno Hotels Golf Belek",
                    "Sunrise Resort Hotel",
                    "Susesi Luxury Resort",
                    "??ahin Motel & Restaurant",
                    "??eny??ld??z Hotel",
                    "Telmessos Select Hotel",
                    "Temple Miletos & Spa Hotel",
                    "Terrace Beach Resort",
                    "The Bay Beach Club",
                    "The Best Life Hotel Bodrum Center",
                    "The Colony Hotel",
                    "The Corner Park Hotel",
                    "The Green Park Hotels & Resort Kartepe",
                    "The Land of Legends Kingdom Otel",
                    "The Lumos Deluxe",
                    "The Marmara Antalya",
                    "The Marmara Bodrum",
                    "The Oba Hotel",
                    "The Sansa Hotel & Spa",
                    "Throne Beach Resort & Spa",
                    "Trendy Aspendos Beach",
                    "True Blue Boutique Hotel",
                    "Tui Blue Ephesus Otel & Aqua Fantasy Aqua Park Tatil K??y??",
                    "Turay Hotel",
                    "T??rkb??k?? Hill Hotel & Beach",
                    "Urla Pier Hotel",
                    "Utopia World Hotel",
                    "Venezia Palace Deluxe Resort",
                    "Venosa Beach Resort Spa",
                    "Viento Hotel Ala??at??",
                    "Villa Anfora Dat??a Hotel",
                    "Villa Side Hotel",
                    "Villa Side Residence",
                    "Vita Bella Resort Hotel & Spa",
                    "Vois Form Termal Otel",
                    "VONResort Abant",
                    "VONResort Elite",
                    "VONResort Golden Beach Hotel",
                    "VONResort Golden Coast Hotel",
                    "Wonasis Resort & Aqua Hotel",
                    "World City Otel Ala??at?? ",
                    "Xanadu Island",
                    "Xanadu Resort Hotel",
                    "Yacht Boheme Hotel",
                    "Yal?? Apart Bodrum",
                    "Yal?? Park Beach Hotel",
                    "Yalova Termal Saray Hotel",
                    "Yelken Mandalinci Spa & Wellness Hotel",
                    "Yeni??eri City Hotel",
                    "Zephyros Hotel",
                    "Zeynep Hotel",
                    "Zeytin Aras?? Apart Otel",
                    "Zeytinada Otel",
                ]
                  if(arr.find(x=>x==jQuery('.hotel-detail-name').text().trim()) === undefined){
                return false;
                  }
                  if(ED.dataLayer.data.pageType!=="product"){
                      return false;
                  }
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                   if(window.innerWidth>767){
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'notShown-bannerDesktop');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                    }
                   }
                   else{
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'notShown-bannerMobile');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                    }
                   }
                    return false;
                }
                main.factory.prototype.start();
            }
        };

        boot = function () {
            return main.factory.prototype.init();
        };

        boot();

    };
    var _ed_Kismi_Odeme_Banner_Product = new EightDigits.sf();
    _ed_Kismi_Odeme_Banner_Product.Kismi_Odeme_Banner_Product();
})();


(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("hotelDetailCancelBar")) {
        return false
    }
    EightDigits.sf.prototype.hotelDetailCancelBar = function () {
  
        var config = {
            scenarioname: "hotelDetailCancelBar",
            analytics: "72Saate_Kadar_Iptal_Banner_Detay",
            controlgroup: 0
        };
  
        var main = {
            "factory": function () {
                return true;
            }
        };
        var list = ['Acapulco Resort & Convention & Spa',
  'Acroter Hotel & SPA',
  'Adam & Eve',
  'Adempira Termal & Spa Hotel',
  'Adora Resort Hotel',
  'Adrasan Klados Hotel',
  'Afissia Garden Hotel',
  'Akay Garden Family Club',
  'Akay Pansiyon',
  'Akbulut Hotel & Spa',
  'Akkent Garden Hotel',
  'Akra Hotel',
  'Alaçatı Eski Ev Hotel',
  'Alaçatı Marina Palace Butik Otel',
  'Alaçatı Private Hotel',
  'Alaroof Butik Otel',
  'Alba Queen Hotel',
  'Alba Resort Hotel',
  'Alba Royal Hotel',
  'Alenos Boutique Hotel',
  'Alkan Hotel',
  'Alp Paşa Konağı',
  'Altın Yunus Resort & Thermal Hotel',
  'Altıner Otel',
  'Altınkaya Holiday Resort',
  'Anerissa Otel',
  'Anjeliq Downtown Hotel',
  'Anjeliq House Hotel',
  'Annabella Diamond Hotel & Spa',
  'Annabella Park Hotel',
  'Antakya Ottoman Palace Thermal Resort & Spa',
  'Antalya Hotel Resort & Spa',
  'Aqua Fantasy Aquapark Hotel & Spa',
  'Aquaworld Belek By Mp Hotels',
  'Arion Resort Hotel',
  'Arkın Palm Beach Hotel',
  'Arnor De Luxe Hotel & Spa',
  'Arora Hotel',
  'Asel Hotel Didim',
  'Asena Hotel',
  'Asfiya Sea View Hotel',
  'Aska Just In Beach',
  'Aska Lara Resort & Spa',
  'Aspen Hotel',
  'Assos Barbarossa Hotel',
  'Assos Behram Hotel',
  'Assos Dove Hotel Resort & Spa',
  'Assos Eden Beach Hotel',
  'Assos Eden Gardens Hotel',
  'Assos Kervansaray Hotel',
  'Assos Nazlıhan Hotel',
  'Assos Nazlıhan Spa Hotel',
  'Assos Oleas Hotel',
  'Assos Park Hotel',
  'Assos Zeytinhan Hotel',
  'Asteria Bodrum Resort',
  'Asteria Eros Didim',
  'Asteria Venüs Didim',
  'Asteria Zeus Didim',
  'Avantgarde Yalıkavak',
  'Ayayorgi Hotel By T',
  'Aydınbey Famous Resort',
  'Aydınbey Gold Dreams Hotel',
  'Aydınbey Kings Palace & Spa',
  'Aydınbey Queens Palace',
  'Ayvalık Sea Resort',
  'Ayvalık Tunç Otel',
  'Azka Otel & Spa',
  'Azure Villas by Cornelia',
  'B Business Hotel & Spa',
  'Babaylon Hotel',
  'Bacacan Hotel',
  'Badem Tatil Evi',
  'Baga Otel Gökova',
  'Bahar Aqua Resort Otel',
  'Baraka Hisarönü',
  'Başaran Business Hotel',
  'BC Spa Hotel',
  'Begonvil Hotel Alaçatı',
  'Begonville Beach Hotel',
  'Begonville Hotel',
  'Belcekum Beach Hotel',
  'Belkon Hotel',
  'Bella Resort & Spa',
  'Bellapais 58 Luxury Çeşme',
  'Best Western Plus Çeşme Hotel',
  'Beyaz Suit Otel',
  'Bilem High Class Hotel',
  'Blue Paradise Side Hotel',
  'Blue Waters Club',
  'Bodrium Hotel &You SPA',
  'Bodrum Bay Resort',
  'Bodrum Holiday Resort & Spa',
  'Bosphorus Sorgun Hotel',
  'Boyalık Beach Hotel & SPA',
  'Butikhan Beach & Deluxe',
  'Bülbül Yuvası Butik Hotel',
  'Büyük Anadolu Hotel',
  'BVS Bosphorus Resort Hotel & Spa',
  'Calido Maris Hotel',
  'Calidus Hotel',
  'Calista Luxury Resort',
  'Can Garden Beach',
  'Cape Bodrum Beach Resort',
  'CarpeDiem Diamond Otel',
  'Casa Aria Hotel',
  'Casa Dell Residence',
  'Cender Hotel',
  'Cennet Life Otel',
  'Champion Holiday Village',
  'Charm Beach Hotel',
  'Cihantürk Hotel',
  'City Royal & Casino',
  'CLC Kuşadası Golf & Spa Resort',
  'Club Aquarium',
  'Club Barbarossa',
  'Club Boran Mare Beach',
  'Club Dedeman Bodrum',
  'Club Hotel Anjeliq',
  'Club Hotel Falcon',
  'Club Hotel Sera',
  'Club Hotel Titan',
  'Club Hotel Turan Prince World',
  'Club Marco Polo',
  'Club Marma Hotel',
  'Club Marvy',
  'Club Scala Nuova',
  'Club Turtaş Beach Hotel',
  'Comet Hotel Deluxe',
  'Concorde De Luxe Resort',
  'Concorde Luxury Resort Casino Convention & SPA',
  'Cornelia De Luxe Resort',
  'Cornelia Diamond Golf Resort & Spa',
  'Corolla Hotel',
  'Cratos Premium Hotel & Casino & Port & Spa',
  'Crystal Admiral Resort Suites & Spa',
  'Crystal Aura Beach Resort & Spa',
  'Crystal Boutique Beach Resort',
  'Crystal Deluxe Resort & Spa',
  'Crystal Family Resort & Spa',
  'Crystal Flora Beach Resort',
  'Crystal Green Bay Resort & Spa',
  'Crystal Palace Luxury Resort & Spa',
  'Crystal Paraiso Verde Resort & Spa',
  'Crystal Sunrise Queen Luxury Resort & Spa',
  'Crystal Sunset Luxury Resort & Spa',
  'Crystal Tat Beach Golf Resort & Spa',
  'Crystal Waterworld Resort & Spa',
  'Cunda Despot Evi',
  'Cunda Giritlioğlu Otel',
  'Cunda Rota Otel',
  'Çenger Beach Resort & Spa Hotel',
  'Çetin Prestige Resort',
  'D Resort Göcek',
  'Dalyan Resort Hotel',
  'Dalyan Resort Spa Hotel',
  'Daphnis Hotel',
  'Defne Lorina Hotel',
  'Değirmenburnu Residence',
  'Delfi Hotel Spa & Wellness',
  'Delta Hotel By Marriott Bodrum',
  'Deniz Kızı Hotel',
  'Deniz Kızı Royal',
  'Design Plus Seya Beach Hotel',
  'Design Plus The S Hotel',
  'Diamond Beach Hotel & Spa',
  'Diamond De Luxe Hotel & Spa',
  'Diamond Elite ve Spa Hotel',
  'Diamond Of Bodrum Hotel',
  'Diamond Premium Hotel & Spa Hotel',
  'Dikelya Otel',
  'Dome Hotel',
  'Dorana Hotel',
  'Dores Residence Hotel',
  'Doria Hotel Bodrum',
  'Dorian Hotel',
  'Dorman Suites Hotel',
  'Double Inn Bella Garden Hotel',
  'Double Inn Marina Hotel',
  'Double Tree By Hilton Kuşadası',
  'Dream Palace Hotel Bodrum',
  'Duja Bodrum Otel',
  'Ece Saray Marina Resort',
  'Ege Han Otel',
  'Ege Tulip Çeşme Hotel',
  'Ekici Hotel',
  'El Vino Hotel Suites',
  'Ela Quality Resort Belek',
  'Eldar Resort Hotel',
  'Elegance Hotels International',
  'Elexus Hotel Resort Casino',
  'Elisa Otel',
  'Elista Hotel & Spa',
  'Elite World Marmaris Otel',
  'Era Otel Alacati',
  'Eritrina Otel',
  'Fame Hotel',
  'Fame Residence Göynük',
  'Fame Residence Kemer & SPA Hotel',
  'Fame Residence Lara & SPA Hotel',
  'Fame Residence Park',
  'Faustina Hotel & Spa',
  'Fiko Hotel',
  'Fiska Boutique Hotel Selimiye',
  'Flora Hotel',
  'Flow Datça Surf & Beach Butik Hotel',
  'Foça Kumsal Hotel',
        'Fun & Sun Club Di Finica',
        'Fun & Sun Life Side',
        'Garcia Resort & Spa',
        'Gloria Golf Resort',
        'Gloria Serenity Resort',
        'Gloria Verde Resort',
        'Golden Gate Hotel Kuşadası',
        'Golden Key Bördübet',
        'Golden Key Hisarönü',
        'Golden Life Heights Deluxe Suit Hotel',
        'Golden Life Resort Hotel Spa',
        'Golden Life Z Exclusive Hotel',
        'Göcek Lykia Resort Hotel',
        'Gönülhan Otel Alaçatı',
        'Grand Belish Resort & Spa',
        'Grand Blue Sky Hotel',
        'Grand Hotel Ontur Çeşme',
        'Grand Park Bodrum',
        'Grand Park Kemer',
        'Grand Park Lara',
        'Grand Pasha Kyrenia Hotel & Casino & Spa',
        'Grand Pasha Nicosia Hotel & Casino & Spa',
        'Grand Rüya Hotel',
        'Grand Şeker Hotel',
        'Grand Temizel',
        'Grand Yazıcı Boutique Hotel & Spa',
        'Grand Yazıcı Club Marmaris Palace',
        'Grand Yazıcı Club Turban Thermal Hotel',
        'Grand Yazıcı Torba Beach Club Bodrum',
        'Green Nature Diamond Otel',
        'Green Nature Resort & Spa',
        'Green Paradise Beach Hotel',
        'Greenport Hotel Bodrum',
        'Grida City Antalya',
        'Gümüldür Mavi Deniz Otel',
        'Hadrianus Hotel',
        'Han Deluxe Hotel',
        'Hapimag Sea Garden Resort',
        'Hawaii Hotel',
        'Hedef Beach Resort Hotel',
        'Hedef Kleopatra Golden Sun',
        'Hedef Resort & Spa',
        'Hera Hotel',
        'Heramis Termal Tatil Köyü',
        'Herodot Beach Hotel',
        'Hilton Bodrum Türkbükü Resort & Spa',
        'Hilton Dalaman Sarıgerme Resort & Spa',
        'Honeymoon Beach Hotel',
        'Hotel Ambrosia',
        'Hotel Carina',
        'Hotel Çamyuva Beach',
        'Hotel Manas Park Ölüdeniz',
        'Hotel Mavi Kumsal',
        'Hotel Rena',
        'Hotel Su',
        'Hotel Torbahan & Beach',
        'Hotel Turan Prince',
        'Hotel Unique',
        'Ic Hotels Green Palace',
        'IC Hotels Santai Family Resort',
        'Ingate Elite Suite Hotel',
        'IQ Belek Resort Hotel',
        'İğneada Resort Hotel & Spa',
        'İlayda Avantgarde Hotel',
        'İmperial Turkiz Resort Hotel',
        'İncekum Beach Resort',
        'İnfinity By Yelken Aquapark & Resort',
        'İstanbul Beach Hotel',
        'Jasmin Beach Resort',
        'Joker Side Hill Suite Hotel',
        'Joya Del Mar Otel',
        'Justiniano Club Alanya',
        'Justiniano Deluxe Resort',
        'Justiniano Park Conti',
        'Kairaba Alaçatı Beach Resort',
        'Kairaba Blue Dreams Resort & Spa',
        'Kalamar Hotel',
        'Kalem Adası Oliviera Resort',
        'Kalinda Inn Otel',
        'Kamer Suites & Hotel',
        'Karbel Hotel Ölüdeniz',
        'Karbelsun Hotel',
        'Karmir Resort & Spa',
        'Kaş Artemis Hotel',
        'Katre Hotel',
        'Kaya Artemis Resort & Casino',
        'Kaya Belek Antalya',
        'Kaya Guest House',
        'Kaya Palazzo Golf Resort',
        'Kaya Palazzo Resort & Casino',
        'Kaya Palazzo Resort & Residences Le Chic Bodrum',
        'Kaya Side',
        'Kekik Otel Selimiye',
        'Kekova Deluxe Hotel',
        'Kemer Botanik Resort Hotel',
        'Kemerlihan Deluxe Hotel',
        'Kempinski Hotel The Dome',
        'Kirman Arycanda Deluxe',
        'Kirman Belazur Resort & Spa',
        'Kirman Leodikya Resort & Spa',
        'Kirman Sidemarin Beach & Spa',
        'Kirman Sidera Luxury & Spa',
        'Kleopatra Ada Beach Hotel',
        'Kleopatra Ada Hotel',
        'Kleopatra Beach Hotel',
        'Kleopatra Royal Palm Hotel',
        'Kuştur Club Holiday Village',
        'Kuum Hotel & Spa',
        'La Casa Novi',
        'Lacivert Boutique Hotel',
        'Ladin Otel',
        'Land Of Paradise Beach',
        'Larissa Art Beach Kemer',
        'Le Meridien Bodrum Beach Resort',
        'Les Ambassadeurs Hotel & Casino',
        'Life Hotel',
        'Limak Arcadia Golf & Sport Resort',
        'Limak Atlantis De Luxe Hotel & Resort',
        'Limak Cyprus Deluxe Hotel',
        'Limak Lara De Luxe Hotel & Resort',
        'Limak Limra Hotel & Resort',
        'Lord\'s Palace Hotel & Spa & Casino',
        'Lujo Bodrum',
        'Maira Deluxe Resort',
        'Malpas Hotel & Casino',
        'Marbel Hotel By Palm Wings',
        'Maril Resort Hotel',
        'Marin A Hotel',
        'Marina Hotel & Suites',
        'Marina Hotel Bodrum',
        'Marina Vista Hotel Bodrum',
        'Maritim Pine Beach Resort',
        'Marmaris Bay Resort By Mp Hotels',
        'Marpessa Blue Beach Hotel',
        'Master Family Club',
        'Mavruka Hotel',
        'Med-Inn Boutique Hotel',
        'Mehmet Ali Ağa Mansion',
        'Melek Otel Selimiye',
        'Mells Alaçatı',
        'Mendos Garden Exclusive Hotel',
        'Merit Crystal Cove Hotel & Casino',
        'Merit Cyprus Garden Holiday Village & Casino',
        'Merit Lefkoşa Hotel & Casino',
        'Merit Park Hotel & Casino',
        'Merit Royal Hotel & Casino & Spa',
        'Merit Royal Premium Hotel & Casino',
        'Mese Hotel & Apartmens',
        'MI-Casa Beach Hotel',
        'Mimoza Beach Hotel',
        'Minu Hotel',
        'Mirage Park Resort',
        'Mirage World',
        'Mivara Luxury Resort & Spa',
        'Mola Cunda Hotel',
        'Montana Pine Resort',
        'Moyo Beach Hotel',
        'My Aegean Star Hotel',
        'My Marin Hotel',
        'Nagi Beach Hotel',
        'Narcia Resort Side',
        'Nashira Resort Hotel & Aqua Spa',
        'Nautical Hotel',
        'Nea Efessos Boutique Hotel',
        'Nea Garden Hotel',
        'Neroli Butik Otel',
        'Nevada Hotel & Spa',
        'Niss Business Hotel',
        'No81 Hotel',
        'Noche Otel Alaçatı',
        'Notion Kesre Beach Hotel & Spa',
        'Nova Beach Hotel',
        'Nova Park Hotel',
        'Nox Inn Club',
        'Nox Inn Deluxe',
        'Nuh\'un Gemisi Deluxe Hotel & Spa',
        'Oasis Hotel',
        'Oasis Hotel Kalkan',
        'Obam Termal Resort Otel&Spa',
        'Okaliptüs Hotel Bitez',
        'Olira Boutique Hotel & Spa',
        'Olivia Palm Hotel',
        'On\'Live Hotel',
        'Orange County Resort Hotel Alanya',
        'Orange County Resort Hotel Belek',
        'Orange County Resort Hotel Kemer',
        'Orcey Hotel',
        'Orion Beach Hotel',
        'Orka Boutique Hotel',
        'Orka Cove Hotel Penthouse & Suites',
        'Orka World Hotel & Aqua Park',
        'Oscar Park Hotel',
        'Oscar Resort Hotel',
        'Otel Gümüşlük',
        'Örsmaris Boutique Hotel',
        'Özkaymak Falez Otel',
        'Özkaymak İncekum Otel',
        'Özkaymak Marina Otel',
        'Özlem Garden Hotel',
        'Palm Bay Beach Hotel',
        'Palm Wings Beach Resort & Convention Center Didim',
        'Palm Wings Beach Resort & Spa Kuşadası',
        'Palm Wings Ephesus Beach Resort',
        'Palmetto Resort Hotel',
        'Papillon Ayscha',
        'Papillon Belvil Hotel',
        'Papillon Zeugma Relaxury',
        'Park Palace Hotel',
        'Parna Hotel Cunda Island',
        'Pera Hotel Alanya',
        'Pınar Bungalow',
        'Pia Bella Hotel',
        'Pigale Family Club',
        'Pine Club Boutique Hotel & Spa',
        'Ponz Hotel Kuşadası',
        'Port View Hotel',
        'Portakal Otel Selimiye',
        'Porto Beach Resort Exclusive',
        'Porto Bello Hotel Resort & Spa',
        'Premier Nergis Beach Hotel',
        'Premier Solto Hotel By Corendon',
        'Queen\'s Park Göynük',
        'Queen\'s Park Le Jardin Resort & Spa',
        'Radisson Blu Resort & Spa',
        'Rakasta Boutique Hotel & Convention Center',
        'Ramada Hotel & Suites by Wyndham Kuşadası',
        'Rawda Resort Hotels Altınoluk',
        'Raymar Resort & Aqua',
        'Rebis Bodrum Luxury Collection',
        'Regnum Carya',
        'Rhapsody Hotel Kalkan',
        'Rhapsody Hotel Kaş',
        'Richmond Ephesus Resort',
        'Rixos Downtown Antalya',
        'Rixos Hotel Beldibi',
        'Rixos Premium Belek',
        'Rixos Premium Bodrum',
        'Rixos Premium Göcek',
        'Rixos Premium Tekirova',
        'Rixos Sungate',
        'Robinson Club Çamyuva',
        'Robinson Club Nobilis',
        'Robinson Club Pamfilya',
        'Robinson Club Sarıgerme Park',
        'Rocks Hotel & Casino',
        'Royal Alhambra Palace Hotel',
        'Royal Arena Resort&Spa',
        'Royal Asarlık Beach Hotel & Spa',
        'Royal Dragon Hotel',
        'Royal Holiday Palace Hotel',
        'Royal Panacea Hotel',
        'Royal Seginus Hotel',
        'Royal Taj Mahal Hotel',
        'Royal Wings Hotel',
        'Safir Hotel',
        'Sahil Martı',
        'Sailors Beach Club Hotel',
        'Salamis Bay Conti Resort & Hotel',
        'Salkım Sahil Evi',
        'Salmakis Otel Bodrum',
        'Saphir Hotel',
        'Saphir Resort & Spa',
        'Saylam Apart Kaş',
        'Saylam Suites Kaş',
        'Sea Life Buket Beach & Resort',
        'Seher Resort & Spa',
        'Seher Sun Palace Resort & Spa',
        'Sesin Hotel Marmaris',
        'Siam Elegance Hotels & Spa',
        'Side Kum Hotel',
        'Side Premium',
        'Side Sun Hotel',
        'Side Sungate Hotel & SPA',
        'Sisus Otel Çeşme',
        'Six Senses Kaplankaya',
        'Sör Yalıkavak',
        'Starlight Resort Hotel',
        'Sueno Hotels Beach',
        'Sueno Hotels Deluxe Belek',
        'Sueno Hotels Golf Belek',
        'Sugar Beach Club',
        'Sui Resort Hotel',
        'Sultan Sipahi Resort Hotel',
        'Suna Village Exclusive',
        'Suncity Hotel & Beach Club',
        'Sunrise Resort Hotel',
        'Susesi Luxury Resort',
        'Süral Garden Hotel',
        'Süral Hotel',
        'Süral Resort Hotel',
        'Süral Saray Hotel',
        'Swandor Topkapı Palace',
        'Telmessos Select Hotel',
        'Temple Beach Hotel',
        'Temple Class Hotel',
        'Temple Hotel',
        'Temple Miletos & Spa Hotel',
        'Terrace Beach Resort',
        'The Bay Beach Club',
        'The Best Life Hotel Bodrum Center',
        'The Best Life Hotel Gümbet Hill',
        'The Bodrum Edition',
        'The Colony Hotel',
        'The Corner Park Hotel',
        'The Land of Legends Kingdom Otel',
        'The Lumos Deluxe',
        'The Marilis Hill Resort Hotel & Spa',
        'The Marmara Antalya',
        'The Marmara Bodrum',
        'The Nowness Luxury Hotel & Spa',
        'The Savoy Ottoman Palace Hotel & Casino',
        'The Sense Deluxe',
        'The Ship Inn Hotel',
        'The Tower Hotel',
        'The Xanthe Resort & Spa Hotel',
        'Titan Garden Hotel',
        'Titan Select Hotel',
        'Trendy Aspendos Beach',
        'Trendy Lara',
        'Trendy Palm Beach',
        'Trendy Side Beach Hotels',
        'Trendy Verbena Beach',
        'Tui Blue Side',
        'Tui Fun & Sun River Resort Belek',
        'Tui Magic Life Belek',
        'Türkbükü Hill Hotel & Beach',
        'Ulu Resort Hotel',
        'Utopia World Hotel',
        'Valentine Resort & Spa',
        'Vela Garden Resort',
        'Venezia Palace Deluxe Resort',
        'Venosa Beach Resort Spa',
        'Viento Hotel Alaçatı',
        'Viking Nona Beach Hotel',
        'Viking Park Otel',
        'Viking Star Hotel',
        'Viking Suite Hotel',
        'Villa Side Hotel',
        'Villa Side Residence',
        'Vita Bella Resort Hotel & Spa',
        'Vogue Hotel Supreme Bodrum',
        'VONResort Elite',
        'VONResort Golden Beach Hotel',
        'VONResort Golden Coast Hotel',
        'Voxx Marmaris Beach Resort',
        'Vuni Palace Hotel',
        'Wonasis Resort & Aqua Hotel',
        'Xanadu Island',
        'Xperia Grand Bali Hotel',
        'Xperia Saray Beach Hotel',
        'Yacht Boheme Hotel',
        'Yalı Park Beach Hotel',
        'Yalıhan Aspendos Hotel',
        'Yalıkavak Marina Beach Hotel',
        'Yalıkavak Marina Boutique Hotel',
        'Yel Holiday Resort',
        'Yunus Hotel Marmaris',
        'Zemda Hotel',
        'Zen Alaçatı Hotel',
        'Zena Hotel Bodrum',
        'Zeynep Hotel',
        'Zeytinada Otel',
        'Zeytinci Olivera Resort Hotel'
       
        ]
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
                css = '<style>\
                .ed-cancelInfoMain{position:relative;}\
                .ed_'+ config.scenarioname + '_smpl-tooltip{position: absolute;width: 250px;right: 0;margin-top: -180px;border-radius: 6px;padding: 4px 5px;background-color: #555!important;z-index:999999;display:none;}\
                .ed_'+ config.scenarioname + '_smpl-tooltip_inner{text-align: center; font-size:12px; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;color: #c4c4c4!important }\
                .ed_'+ config.scenarioname + '_smpl-tooltip_inner .rule{padding:2px;}\
                .smpl-arrow-right{width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 6%;margin-top: -77px;display:none;transform: rotate(90deg);-webkit-transform: rotate(90deg);}\
        </style>'
        jQuery('head').append(css)
                
                jQuery('.price-partial-shadow:not(".display-only-mobile")').after('<div class="ed-cancelInfoMain"><div id="ed-cancelInfo" style="width: 100%;margin-bottom: 10px; margin-top:10px"><img src="https://cdn.8digits.com/log/r/52c70834-f152-4808-8736-25dc5c908ab2.jpeg"></div><div class="smpl-arrow-right"></div>\
                <div class="ed_'+ config.scenarioname + '_smpl-tooltip">\
                    <div class="ed_'+ config.scenarioname + '_smpl-tooltip_inner">\
                            <div class="rule">İptal iade güvencesini satın alırsanız konaklamanıza 72 saat kalana kadar yapacağınız iptallerde, kesintisiz iade güvencesine sahip olursunuz.</div>\
                    </div>\
                </div></div>')
                EightDigits.analytics.sendEvent(config.analytics, "Shown");
            
                 jQuery('.ed-cancelInfoMain').mouseover(function () {
                     jQuery('.smpl-arrow-right').css('display', 'none');
                     jQuery('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'none');
                     jQuery(this).find('.smpl-arrow-right').css('display', 'block');
                      jQuery(this).find('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'block');
                 });
                 jQuery('.ed-cancelInfoMain').mouseout(function () {
                     jQuery('.smpl-arrow-right').css('display', 'none');
                      jQuery('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'none');
                 });
            },
            control: function () {
                if(ED.dataLayer.data.pageType !== "product"){
                    if(jQuery('.breadcrumb li:eq(1)').text().indexOf('Otel') === -1){
                        return false;
                    }
                }
                else{
                    if(list.includes(jQuery('.hotel-detail-name').text().trim())){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
    var _ed_hotelDetailCancelBar = new EightDigits.sf();
    _ed_hotelDetailCancelBar.hotelDetailCancelBar();
  })();
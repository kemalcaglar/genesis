(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Erken_Rezervasyon_Popup_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Erken_Rezervasyon_Popup_Desktop = function () {

        var config = {
            scenarioname: "Erken_Rezervasyon_Popup_Desktop",
            analytics: "Erken_Rezervasyon_Popup_Desktop",
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

if(jQuery(".smpl-popup-main").length < 0){
                        
                    jQuery('body').append('<div id="ed-popupOverlay" style=" width: 100%; height: 100%; position: fixed; background: rgba(0,0,0,0.7); top: 0; left: 0; z-index: 991; "></div><div id="ed-popupMain"><div class="ed-popupClose" style=" position: fixed; top: calc(50% - 220px); color: #fff; z-index: 993; font-size: 30px; transform: rotate(45deg); left: calc(50% + 270px); cursor: pointer;">+</div><img src="https://cdn.8digits.com/log/r/73669ed7-e5d4-40d4-8411-087a6fdd59f9.png" style=" position: fixed; width: 600px; height: 450px; top: calc(50% - 225px); left: calc(50% - 300px); z-index: 992; cursor: pointer;"></div>');
                    EightDigits.analytics.sendEvent(config.analytics, "Shown");
    
                    jQuery('#ed-popupOverlay').click(function(){
                        jQuery('#ed-popupOverlay').remove();
                        jQuery('#ed-popupMain').remove();
                        EightDigits.analytics.sendEvent(config.analytics, "Close");
                    })
    
                    jQuery('.ed-popupClose').click(function(){
                        jQuery('#ed-popupOverlay').remove();
                        jQuery('#ed-popupMain').remove();
                        EightDigits.analytics.sendEvent(config.analytics, "Close");
                    })
    
                    jQuery('#ed-popupMain img').click(function(){
                        jQuery('html, body').animate({
                            scrollTop: parseInt( jQuery('#detail-form').offset().top - 190)
                        }, 500);
                        jQuery('#ed-popupOverlay').remove();
                        jQuery('#ed-popupMain').remove();
                        EightDigits.analytics.sendEvent(config.analytics, "Click");
                    })
                
              }

            },
            control: function () {
                var date = new Date;
                var hour = date.getHours();
                var minutes = new Date().getMinutes();

                // if(localStorage.getItem("smpl_utm_source")!==null){
                //     return false;
                //   }
                // if(jQuery('.ed-TrivagoIndirim').length>0){
                //     return false;
                // }
                  if (hour < 22 && hour > 8) {
                    return false;
                }
                // if(hour===8 && minutes>30){
                //     return false;
                // }
                var checkInDate = window.location.href.split("checkinDate=")[1].split("&")[0];
                var checkInYear = Number(checkInDate.split("-")[0])
                var checkInMonth = Number(checkInDate.split("-")[1])
                // var checkInDay = Number(checkInDate.split("-")[2])
                var checkOutDate = window.location.href.split("checkinDate=")[1].split("&")[1].split("checkoutDate=")[1];
                var checkOutYear = Number(checkOutDate.split("-")[0])
                var checkOutMonth = Number(checkOutDate.split("-")[1])
                // var checkOutDay = Number(checkOutDate.split("-")[2])

                if(checkInYear!==2021 || checkOutYear!==2021){
                    return false;
                }
                if(checkInMonth<4 || checkOutMonth>10){
                    return false;
                }

                var hotels = ["1774 Termal Kazda??lar??",
"4Reasons Bistro Hotel",
"Adalya Art Side Hotel",
"Adalya Elite Lara Hotel",
"Adalya Ocean Deluxe",
"Adalya Resort Spa Hotel",
"Adam & Eve",
"Adam & Eve Hotel",
"Adrasan Klados Hotel",
"Aktur Bitez",
"Ala??at?? Asmal?? Konak",
"Ala??at?? Bedirhan Konak",
"Ala??at?? Sultan Konak",
"Alp Suites Lavanta",
"Alp Suites Mandalin",
"Alp Suites Pinehill",
"Alp Suites Safran ",
"Alt??n Yunus Resort & Thermal Hotel",
"Amon Hotels",
"Annabella Diamond Hotel & Spa",
"Annabella Park Hotel",
"Antiphellos Villalar?? A",
"Antiphellos Villalar?? B",
"Aqua Fantasy Aqua Park Tatil K??y??",
"Aqua Fantasy Aquapark Hotel & Spa",
"Asel Hotel Didim",
"Aska Just In Beach",
"Aska Lara Resort & Spa",
"Aska Side (Ex.Grand Prestige)",
"Assos Barbarossa Hotel",
"Assos Behram Hotel",
"Assos Dove Hotel Resort & Spa",
"Assos Eden Beach Hotel",
"Assos Eden Gardens Hotel",
"Assos Hotel",
"Assos ??da Costa",
"Assos Kervansaray Hotel",
"Assos Park Hotel",
"Atrium Otel",
"Aurasia City Hotel",
"Ayval??k Tun?? Otel",
"Azka Otel & Spa",
"Badem Tatil Evi",
"Baga Hotel",
"Baldan Suite Hotel",
"Basel Hotel",
"BC Spa Hotel",
"Bella Resort & Spa",
"Bera Alanya Otel",
"Blu Dream Dublex",
"Blue Marlin Deluxe",
"Blue Marlin Deluxe Spa & Resort",
"Blue Sea Garden",
"Blue Waters Club",
"Boyal??k Beach",
"Boyal??k Beach Hotel & SPA",
"Can Garden Beach",
"Cape Bodrum Beach Resort",
"Cape Krio Boutique Hotel & Spa",
"Casa Margot Hotel",
"Casa Sur Otel",
"Castle Boutique Hotel",
"Champion Holiday Village",
"Cihant??rk Hotel",
"Club Barbarossa",
"Club Hotel Sera",
"Club Hotel Turan Prince World",
"Club ??da?? ????meler Hotel",
"Club Marma Hotel",
"Club Marvy",
"Club Throne Beach",
"Cook's Club Alanya",
"Costa Farilya",
"Crystal Admiral Resort Suites & Spa",
"Crystal Aura Beach Resort & Spa",
"Crystal Boutique Beach Resort",
"Crystal Boutique Beach Resort",
"Crystal Club World Of Colours",
"Crystal De Luxe Resort & Spa",
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
"Cunda Panjur Otel",
"Cunda Panorama Hotel",
"D Maris Bay",
"D Resort G??cek",
"D Resort Murat Reis Ayval??k",
"Dalyan Resort Spa Hotel",
"Daphnis Hotel",
"Delta Hotel By Marriott Bodrum",
"Diamond Beach Hotel & Spa",
"Diamond De Luxe Hotel & Spa",
"Diamond Elite ve Spa Hotel",
"Diamond Premium Hotel & Spa Hotel",
"Divan Bodrum",
"Doora Beach Resort",
"Doria Hotel Bodrum",
"Dorman Suites",
"Doruk Otel",
"Eden Selene Otel",
"Egehan Butik Otel",
"Ekici Hotel",
"Elegance Hotels International",
"Elementa Hotel",
"Elementa Hotel",
"Elexus Hotel Resort Casino",
"Elite World Marmaris Otel",
"EvN Hotel Dalyan",
"Fame Residence G??yn??k",
"Fame Residence Kemer & SPA Hotel",
"Fame Residence Lara & SPA Hotel",
"Faustina Hotel & Spa",
"Fiska Boutique Hotel",
"Flora Hotel",
"Flora Palm Beach Hotel",
"G??cek Lykia Resort Hotel",
"Grand Milano Hotel",
"Grand Park Kemer",
"Grand Park Lara",
"Grand ??eker Hotel",
"Grand Yaz??c?? Club Marmaris Palace",
"Grand Yaz??c?? Club Turban Thermal",
"Grand Yaz??c?? Club Turban Thermal Hotel",
"Grand Yaz??c?? Marmaris Palace",
"Green Gold Hotel",
"Green Nature Diamond Otel",
"Green Nature Resort & Spa",
"Greenport Hotel Bodrum",
"Gulet Hotel",
"G??n Ay Hotel G??mbet",
"Habesos Hotel",
"Hadrianus Hotel",
"Hapimag Sea Garden Resort",
"Hedef Beach Resort & Spa",
"Hedef Kleopatra Golden Sun",
"Hedef Kleopatra Sand Hotel",
"Hedef Resort & Spa",
"HillCity Hotel Ka??",
"Hilton Dalaman",
"Hotel Berke Ranch",
"Hotel Green Gold",
"Hotel Manas Park ??l??deniz",
"Hotel Su",
"Hotel Turan Prince",
"Hotel Unique",
"Hotel Unique ",
"Innvista Hotel",
"Innvista Hotels Belek",
"I????l Club Bodrum",
"??da?? Hotel ????meler",
"Kairaba Blue Dreams Resort & Spa",
"Kalif Hotel",
"Kanelo Otel",
"Karbelsun Hotel",
"Katre Hotel",
"Kaya Artemis Resort & Casino",
"Kaya Palazzo Resort & Casino",
"Kaya Palazzo Resort & Residences Bodrum",
"Kemer Residence 2",
"Kemer Suites",
"Kimera Lounge",
"Kirman Arycanda De Luxe",
"Kirman Belazur Resort & Spa",
"Kirman Calyptus Resort & Spa",
"Kirman Leodikya Resort",
"Kirman Sidemarin Beach & Spa",
"Kirman Sidera Luxury & Spa",
"Klaseas Hotel",
"Ku??tur Club Holiday Village",
"La Quinta by Wyndham Bodrum",
"La Vista Boutique Hotel & SPA",
"Laren Family Hotel & Spa",
"Le Meridien Bodrum Beach Resort",
"Lemon Hotel",
"Letonia Resorts Hotel",
"Limonade Pansiyon",
"Lissiya Hotel",
"Lujo Bodrum",
"Maia Luxury Beach Hotel",
"Maia Luxury Beach Hotel & Spa",
"Maison d'Azur Hotel",
"Mandarin Oriental Bodrum",
"Marbel Hotel By Palm Wings",
"Mare Garden Hotel ",
"Mavi Beyaz Hotel",
"Mega?? Hotel",
"Melas Holiday Village",
"Melas Lara Resort",
"Melas Village",
"Merit Crystal Cove Hotel & Casino",
"Merit Park Hotel & Casino",
"Meydan d'Azur Hotel",
"Mia Hotel",
"Mia Mai",
"Mirage Park Resort",
"Monk Island Guesthouse",
"Monna Roza Family Suite",
"Monna Roza Maxx Apart",
"Montana Boutique Hotel",
"Moonshine Hotel Suites",
"Mukarnas Resort Hotel",
"Mulka Hotel",
"Murat Pa??a Kona????",
"Nashira Resort Hotel & Aqua Spa",
"Nautical Hotel",
"Nevada Hotel & Spa",
"No81 Hotel",
"Nova Beach Hotel",
"Nova Park Hotel",
"Nox Sutie",
"Oberj d'Azur Hotel",
"Oda Bodrum",
"Old Wood House",
"Orange County Resort Hotel Alanya",
"Orange County Resort Hotel Belek",
"Orange County Resort Hotel Kemer",
"Otium Eco Club Family",
"??rsmaris Boutique Hotel",
"??zlem Garden Side",
"Pacco Boutique",
"Pacco Sea & City",
"Pachamama",
"Palm Wings Beach Resort & Spa Ku??adas??",
"Palm Wings Ephesus Beach Resort",
"Paloma Finesse",
"Panorama Hotel",
"Perdue Hotel",
"P??r??l Hotel Thermal & Beauty Spa",
"Pier Otel",
"Pine Beach Belek",
"PiraTe's Beach Club",
"Porto Bello Hotel Resort & Spa",
"Puding Marina Hotel",
"Pure Blanca",
"Queen's Park G??yn??k",
"Queen's Park Le Jardin Resort & Spa",
"Radisson Blu Resort & Spa ??e??me",
"Ramada Resort Bodrum",
"Reges a Luxury Collection Resort & Spa",
"Regna Hotel",
"Regnum Carya",
"Reis Inn Hotel Kazda??lar??",
"R??dvan Otel",
"Richmond Ephesus Resort",
"Rixos Downtown Antalya",
"Robinson Club ??amyuva",
"Robinson Club Nobilis",
"Robinson Club Pamfilya",
"Robinson Sar??germe",
"Rooms Bohemian",
"Rooms Exclusive",
"Rooms Smart Luxury",
"Royal Alhambra Palace Hotel",
"Royal Asarl??k Beach Hotel & Spa",
"Royal Dragon Hotel",
"Royal Holiday Palace Hotel",
"Royal Seginus Hotel",
"Royal Taj Mahal Hotel",
"Royal Wings Hotel",
"Rue d'Azur Hotel",
"Sabrinas Hous Bozburun",
"Salamis Bay Conti Resort & Hotel",
"Salk??m Sahil Evi",
"Salmakis Otel Bodrum",
"Samira Resort",
"Saraya Bodrum Hotel",
"Sardunya Apart Otel",
"Saylam Suites Ka??",
"Seagull Hotel",
"Seher Resort & Spa",
"Seher Sun Palace Resort & Spa",
"Selge Beach Resort & Spa",
"Sertil Royal Forest Hotel",
"Sesin Hotel Marmaris",
"Seven Seas Hotel Blue",
"Seven Seas Hotel Life",
"S??gac??k Port",
"S????ac??k Marina Apart",
"S????ac??k Olive Hotel",
"S????ac??k Port Otel",
"S????ac??k Teos Lodge ",
"Side Sunport Hotel & SPA",
"Sies Hotel",
"Siz Inn Otel",
"Sultan Sipahi Hotel",
"Sundia By Liberty",
"Sundia Liberty Hotel ",
"Sunpark Beach ",
"Sunpark Garden Hotel ",
"Susana Bodrum",
"Susesi Luxury Resort",
"S??ral Garden ??olakl??",
"S??ral Hotel ??olakl??",
"S??ral Resort Side",
"S??ral Saray Hotel",
"Swan Lake Hotel",
"??eny??ld??z Hotel",
"Terrace Beach Resort",
"Terrace Elite Resort",
"The Bay Beach Club",
"The Bay Beach Club",
"The Bodrum EDITION",
"The Hotel 48",
"The Lumos Deluxe",
"The Oba Hotel",
"The Oba Hotel ",
"Trendy Aspendos Beach",
"Trendy Palm Beach",
"Trendy Side Beach Hotels",
"Trendy Verbena Beach",
"Tui Blue Ephesus Otel",
"Turun?? Bay Conti Hotel",
"T??rkb??k?? Hill Hotel & Beach",
"Urla Sardunya",
"Venezia Palace",
"Venosa Beach Resort Spa",
"Viento Hotel Ala??at??",
"Villa La Moda",
"Villa Maya",
"Villa Myra",
"Villa Side Hotels",
"Villa Side Residence",
"Vinifera Hotel 7 Bilgeler",
"Waterworld Belek",
"White Blue Sevgi Hotel",
"Wome Deluxe Hotel",
"Xanadu Island",
"Xanadu Resort",
"Xperia Grand Bali",
"Xperia Saray Hotel",
"Yacht Boheme Hotel",
"Yacht Classic",
"Yal?? Park Beach Hotel",
"Yasmin Otel Ayval??k",
"Yasmin Resort Bodrum",
"Yunus Hotel Marmaris",
"Zakros Hotel Faralya",
"Zeynel Hotel",
"Zeynep Hotel",
"Zeytin Apart Aquapark",
"Zeytin Aras?? Apart Otel",
"Zeytinada Otel"
];
                            var hotelFind = hotels.find(x=> x===jQuery('h1.hotel-detail-name').text().trim())
                                if(typeof hotelFind ==="undefined"){
                                    return false;
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
    var _ed_Erken_Rezervasyon_Popup_Desktop = new EightDigits.sf();
    _ed_Erken_Rezervasyon_Popup_Desktop.Erken_Rezervasyon_Popup_Desktop();
})();





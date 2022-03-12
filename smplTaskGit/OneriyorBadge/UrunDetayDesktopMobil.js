(function () {
  if (
    EightDigits.sf.prototype.hasOwnProperty("Setur_Oneriyor_Bagde_UrunDetay")
  ) {
    return false;
  }
  EightDigits.sf.prototype.Setur_Oneriyor_Bagde_UrunDetay = function () {
    var config = {
      scenarioname: "Setur_Oneriyor_Bagde_UrunDetay",
      analytics: "Setur_Oneriyor_Bagde_UrunDetay",
      controlgroup: 0,
      imgSrc:
        "//cdn.8digits.com/f/u/s2adg7rq/5e64f4da-3f6c-4479-8c96-b1149ff13f01.png",
      hotelList: [
        "Assos Dove Hotel Resort & Spa",
        "D Resort Murat Reis Ayvalık",
        "Hilton Dalaman Sarıgerme Resort & Spa",
        "Aktur Residence",
        "Royal Asarlık Beach Hotel & Spa",
        "Avantgarde Yalıkavak",
        "Cape Bodrum Beach Resort",
        "Lujo Bodrum",
        "Altın Yunus Resort & Thermal Hotel",
        "Kairaba Alaçatı Beach Resort",
        "Cape Krio Boutique Hotel & Spa",
        "Sundia By Liberty Ölüdeniz",
        "D Resort Göcek",
        "Crystal Aura Beach Resort & Spa",
        "Limak Limra Hotel & Resort",
        "Robinson Club Çamyuva",
        "Crystal Flora Beach Resort",
        "Kuştur Club Holiday Village",
        "Palm Wings Ephesus Beach Resort",
        "Aqua Fantasy Aquapark Hotel & Spa",
        "Faustina Hotel & Spa",
        "Aska Lara Resort & Spa",
        "Venezia Palace Deluxe Resort",
        "Royal Holiday Palace Hotel",
        "Royal Seginus Hotel",
        "Green Nature Diamond Otel",
        "Grand Yazıcı Club Marmaris Palace",
        "Grand Yazıcı Club Turban Thermal",
        "D Maris Bay",
        "Club Marvy",
        "Robinson Club Sarıgerme Park",
        "Otium Family Eco Club",
        "Süral Resort Hotel",
        "Club Hotel Turan Prince World",
        "Blue Waters Club",
        "Kirman Calyptus Resort & Spa",
        "Royal Alhambra Palace Hotel",
        "Starlight Resort Hotel",
        "Hedef Kleopatra Golden Sun",
        "Xperia Grand Bali Hotel",
        "Mukarnas Spa Resort",
        "Kirman Leodikya Resort & Spa",
        "Door'a Hotel Bodrum",
        "Mandarin Oriental Bodrum",
        "Delta Hotel By Marriott Bodrum",
        "Boyalık Beach Hotel & SPA",
        "Radisson Blu Resort & Spa Çeşme",
        "Sundia By Liberty Fethiye",
        "Crystal Deluxe Resort & Spa",
        "Queen's Park Le Jardin Resort & Spa",
        "Champion Holiday Village",
        "Mirage Park Resort",
        "Club Marco Polo",
        "CLC Kuşadası Golf & Spa Resort",
        "Palm Wings Beach Resort & Spa Kuşadası",
        "Richmond Ephesus Resort",
        "Tui Blue Ephesus Otel & Aqua Fantasy Aqua Park Tatil Köyü",
        "Grand Park Lara",
        "Melas Resort Hotel",
        "Limak Lara De Luxe Hotel & Resort",
        "Royal Wings Hotel",
        "Green Nature Resort & Spa",
        "Crystal Admiral Resort Suites & Spa",
        "Side Sunport Hotel & Spa (ex.Side Sungate)",
        "Süral Saray Hotel",
        "Nashira Resort Hotel & Aqua Spa",
        "Crystal Palace Luxury Resort & Spa",
        "Royal Dragon Hotel",
        "Sunrise Resort Hotel",
        "Hedef Kleopatra Sand Hotel",
        "Xperia Saray Beach Hotel",
        "Annabella Diamond Hotel & Spa",
        "Orange County Resort Hotel Alanya",
        "Crystal Family Resort & Spa",
        "Adam & Eve",
        "Orange County Resort Hotel Belek",
        "Sueno Hotels Golf Belek",
        "Xanadu Resort",
        "Club Marma Hotel",
        "Yasmin Resort Bodrum",
        "Hapimag Sea Garden Resort",
        "Kaya Palazzo Resort & Residences Bodrum",
        "The Bodrum EDITION",
        "Xanadu Island",
        "Pırıl Hotel Thermal & Beauty Spa",
        "Design Plus Seya Beach",
        "The Bay Beach Club",
        "Hillside Beach Club",
        "Grand Park Kemer",
        "Seven Seas Hotel Life",
        "Orange County Resort Hotel Kemer",
        "Grand Şeker Hotel",
        "Süral Garden Hotel",
        "Trendy Aspendos Beach",
        "Trendy Side Beach Hotels",
        "Crystal Sunrise Queen Luxury Resort & Spa",
        "Robinson Club Pamfilya",
        "Royal Taj Mahal Hotel",
        "Hedef Resort & Spa",
        "Kirman Sidera Luxury & Spa",
        "Crystal Paraiso Verde Resort & Spa",
        "Ela Quality Resort Belek",
        "Pine Beach Belek",
        "Susesi Luxury Resort",
        "Zeynep Hotel",
        "Crystal Green Bay Resort & Spa",
        "Kairaba Blue Dreams Resort & Spa",
        "Divan Bodrum",
        "Le Meridien Bodrum Beach Resort",
        "The Oba Hotel",
        "Reges a Luxury Collection Resort & Spa",
        "Kimeros Park Holiday Village",
        "Pirate's Beach Club",
        "Marbel Hotel By Palm Wings",
        "Süral Hotel",
        "Hotel Turan Prince",
        "Crystal Sunset Luxury Resort & Spa",
        "Sueno Hotels Beach",
        "Selge Beach Resort & Spa",
        "Seven Seas Hotel Blue",
        "Sultan Sipahi Resort Hotel",
        "Annabella Park Hotel",
        "Kirman Arycanda Deluxe",
        "Crystal Boutique Beach Resort",
        "Crystal Waterworld Resort & Spa",
        "Kirman Belazur Resort & Spa",
        "Robinson Club Nobilis",
        "Crystal Club World Of Colours",
        "Crystal Tat Beach Golf Resort & Spa",
        "Limak Atlantis De Luxe Hotel & Resort",
        "Sueno Hotels Deluxe Belek",
        "Regnum Carya",
        "Bodrum Holiday Resort & Spa",
        "Salmakis Otel Bodrum",
        "Costa Farilya Special Class Hotel",
        "Club Hotel Letoonia Fethiye",
        "Queen's Park Göynük",
        "Crystal Flora Beach Resort",
        "Kuştur Club Holiday Village",
      ],
    };

    var main = {
      factory: function () {
        return true;
      },
    };

    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
          config.controlgroup > 50
            ? config.controlgroup
            : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(
            EightDigits.utils.getCookie("_ed_" + config.scenarioname)
          );
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },

      start: function () {
        var styleForDesktop =
          "position: absolute;\
          bottom: 8px;\
          left: 8px;\
          width: 110.73px;\
          height: 33.8px;\
          background-color: white;\
          border-radius: 5px;\
          padding: 5px;\
          padding-top: 2px;";
        var styleForMobile =
          "position: absolute;\
          bottom: 104px;\
          left: 9px;\
          z-index: 99999;\
          background-color: white;\
          padding-bottom: 1px;\
          border-radius: 5px;";
        var isHotelMatch = jQuery(".booking-item-details .hotel-detail-name")
          .text()
          .trim();
        if (config.hotelList.indexOf(isHotelMatch) > -1) {
          if (window.innerWidth > 576) {
            jQuery(".fotorama__stage").append(
              '<div id="ed_suggestion_desktop" style="' +
                styleForDesktop +
                '"><img src="' +
                config.imgSrc +
                '" /></div>'
            );
            EightDigits.analytics.sendEvent(config.analytics, "ShownDesktop");
          } else {
            jQuery(".fotorama__stage").append(
              '<div id="ed_suggestion_mobile" style="' +
                styleForMobile +
                'bottom: 5px;left: 5px;"><img style="width: 100px!important;height: auto!important;" src="' +
                config.imgSrc +
                '" /></div>'
            );
            EightDigits.analytics.sendEvent(config.analytics, "ShownMobile");
          }
        }
      },
      control: function () {
        if (jQuery(".hoteldetail-content-partial").length === 0) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (
            !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
          ) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie(
              "ed-" + config.analytics + "-notshown",
              "on"
            );
          }
          return false;
        }
        main.factory.prototype.start();
      },
    };

    boot = function () {
      return main.factory.prototype.init();
    };

    boot();
  };
  var _ed_Setur_Oneriyor_Bagde_UrunDetay = new EightDigits.sf();
  _ed_Setur_Oneriyor_Bagde_UrunDetay.Setur_Oneriyor_Bagde_UrunDetay();
})();

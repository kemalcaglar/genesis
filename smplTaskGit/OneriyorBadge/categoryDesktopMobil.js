(function () {
  EightDigits.sf.prototype.Setur_Oneriyor_Badge_A_B_Test = function () {
    var config = {
      scenarioname: "Setur_Oneriyor_Badge_A_B_Test",
      analytics: "Setur_Oneriyor_Badge_A_B_Test",
      controlgroup: 0,
      imgSrc:
        "//cdn.8digits.com/f/u/s2adg7rq/5e64f4da-3f6c-4479-8c96-b1149ff13f01.png",
      hotelList: [],
      showAll: ["Assos", "Ayvalık", "Datça", "Göcek", "Özdere", "Sarıgerme"],
      whichPage: jQuery(".hotel-list-page-header").text().trim(),
      allPages: [
        "Yaz Fırsatları",
        "Assos",
        "Ayvalık",
        "Datça",
        "Göcek",
        "Özdere",
        "Sarıgerme",
        "Alanya",
        "Belek",
        "Bodrum",
        "Çeşme",
        "Fethiye",
        "Kemer",
        "Kuşadası",
        "Lara",
        "Marmaris",
        "Side",
      ],
      whichList: "",
    };
    var selectedHotels = [];
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
        z-index: 99;\
        background-color: white;\
        padding-bottom: 1px;\
        border-radius: 5px;";
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
        if (randomVal < 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      getList: function (cityName) {
        /* daha önceden ürün detayla beraber a/b olarak yapıldıgından bu şekilde kondlanmıştı. */
        var earlyReseList = [
          {
            group1: [
              "Hedef Beach Resort Hotel",
              "Sultan Sipahi Resort Hotel",
              "Annabella Park Hotel",
              "Kirman Arycanda Deluxe",
              "Assos Dove Hotel Resort & Spa",
              "D Resort Murat Reis Ayvalık",
              "Crystal Boutique Beach Resort",
              "Crystal Waterworld Resort & Spa",
              "Kirman Belazur Resort & Spa",
              "Robinson Club Nobilis",
              "Zeynep Hotel",
              "Aktur Residence",
              "Royal Asarlık Beach Hotel & Spa",
              "Avantgarde Yalıkavak",
              "Cape Bodrum Beach Resort",
              "Lujo Bodrum",
              "Xanadu Island",
              "Altın Yunus Resort & Thermal Hotel",
              "Kairaba Alaçatı Beach Resort",
              "Reges a Luxury Collection Resort & Spa",
              "Cape Krio Boutique Hotel & Spa",
              "Sundia By Liberty Ölüdeniz",
              "The Bay Beach Club",
              "Hillside Beach Club",
              "D Resort Göcek",
              "Crystal Aura Beach Resort & Spa",
              "Queen's Park Göynük",
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
              "Hilton Dalaman Sarıgerme Resort & Spa",
              "Otium Family Eco Club",
              "Süral Resort Hotel",
              "Club Hotel Turan Prince World",
              "Blue Waters Club",
              "Kirman Calyptus Resort & Spa",
              "Royal Alhambra Palace Hotel",
              "Starlight Resort Hotel",
            ],
            group2: [
              "Hedef Kleopatra Golden Sun",
              "Xperia Grand Bali Hotel",
              "Mukarnas Spa Resort",
              "Kirman Leodikya Resort & Spa",
              "Crystal Club World Of Colours",
              "Crystal Tat Beach Golf Resort & Spa",
              "Limak Atlantis De Luxe Hotel & Resort",
              "Sueno Hotels Deluxe Belek",
              "Regnum Carya",
              "Bodrum Holiday Resort & Spa",
              "Salmakis Otel Bodrum",
              "Costa Farilya Special Class Hotel",
              "Doora Hotel Bodrum",
              "Mandarin Oriental Bodrum",
              "Delta Hotel By Marriott Bodrum",
              "Altın Yunus Resort & Thermal Hotel",
              "Boyalık Beach Hotel & SPA",
              "Radisson Blu Resort & Spa Çeşme",
              "The Bay Beach Club",
              "Hillside Beach Club",
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
              "Grand Yazıcı Club Marmaris Palace",
              "Grand Yazıcı Club Turban Thermal",
              "D Maris Bay",
              "Crystal Admiral Resort Suites & Spa",
              "Side Sunport Hotel & Spa (ex.Side Sungate)",
              "Süral Saray Hotel",
              "Nashira Resort Hotel & Aqua Spa",
              "Crystal Palace Luxury Resort & Spa",
              "Royal Dragon Hotel",
              "Sunrise Resort Hotel",
            ],
            group3: [
              "Hedef Kleopatra Sand Hotel",
              "Xperia Saray Beach Hotel",
              "Annabella Diamond Hotel & Spa",
              "Orange County Resort Hotel Alanya",
              "Crystal Family Resort & Spa",
              "Adam & Eve",
              "Orange County Resort Hotel Belek",
              "Sueno Hotels Golf Belek",
              "Xanadu Resort ",
              "Club Marma Hotel",
              "Yasmin Resort Bodrum",
              "Hapimag Sea Garden Resort",
              "Kaya Palazzo Resort & Residences Bodrum",
              "The Bodrum EDITION",
              "Xanadu Island",
              "Boyalık Beach Hotel & SPA",
              "Pırıl Hotel Thermal & Beauty Spa",
              "Design Plus Seya Beach ",
              "Club Hotel Letoonia Fethiye",
              "The Bay Beach Club",
              "Hillside Beach Club",
              "Crystal Deluxe Resort & Spa",
              "Grand Park Kemer",
              "Seven Seas Hotel Life",
              "Orange County Resort Hotel Kemer",
              "Crystal Flora Beach Resort",
              "Kuştur Club Holiday Village",
              "Palm Wings Ephesus Beach Resort",
              "Richmond Ephesus Resort",
              "Aqua Fantasy Aquapark Hotel & Spa",
              "Aska Lara Resort & Spa",
              "Melas Resort Hotel",
              "Royal Holiday Palace Hotel",
              "Royal Wings Hotel",
              "Green Nature Diamond Otel",
              "Grand Yazıcı Club Marmaris Palace",
              "Grand Yazıcı Club Turban Thermal",
              "D Maris Bay",
              "Grand Şeker Hotel",
              "Süral Garden Hotel",
              "Trendy Aspendos Beach",
              "Trendy Side Beach Hotels",
              "Crystal Sunrise Queen Luxury Resort & Spa",
              "Robinson Club Pamfilya",
              "Royal Taj Mahal Hotel",
            ],
            group4: [
              "Hedef Resort & Spa",
              "Annabella Diamond Hotel & Spa",
              "Orange County Resort Hotel Alanya",
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
              "The Oba Hotel  ",
              "Delta Hotel By Marriott Bodrum",
              "Altın Yunus Resort & Thermal Hotel",
              "Boyalık Beach Hotel & SPA",
              "Reges a Luxury Collection Resort & Spa",
              "Club Hotel Letoonia Fethiye",
              "The Bay Beach Club",
              "Hillside Beach Club",
              "Crystal Aura Beach Resort & Spa",
              "Kimeros Park Holiday Village",
              "Champion Holiday Village",
              "Orange County Resort Hotel Kemer",
              "Pirate's Beach Club",
              "Marbel Hotel By Palm Wings",
              "Palm Wings Beach Resort & Spa Kuşadası",
              "Palm Wings Ephesus Beach Resort",
              "Aqua Fantasy Aquapark Hotel & Spa",
              "Grand Park Lara",
              "Venezia Palace Deluxe Resort",
              "Limak Lara De Luxe Hotel & Resort",
              "Royal Seginus Hotel",
              "Green Nature Resort & Spa",
              "Grand Yazıcı Club Marmaris Palace",
              "Grand Yazıcı Club Turban Thermal",
              "D Maris Bay",
              "Süral Hotel",
              "Hotel Turan Prince",
              "Blue Waters Club",
              "Crystal Sunset Luxury Resort & Spa",
              "Sueno Hotels Beach",
              "Selge Beach Resort & Spa",
              "Seven Seas Hotel Blue",
            ],
          },
        ];
        if (config.whichPage.indexOf("Yaz Fırsatları") > -1) {
          config.whichList = "earlyReservation";
          config.hotelList = earlyReseList;
        } else {
          if (
            config.showAll.find((el) => config.whichPage.indexOf(el) > -1) ||
            config.showAll.find((el) => cityName.indexOf(el) > -1)
          ) {
            config.whichList = "shortList";
            config.hotelList = [
              "Assos Dove Hotel Resort & Spa",
              "D Resort Murat Reis Ayvalık",
              "Cape Krio Boutique Hotel & Spa",
              "D Resort Göcek",
              "Club Marvy",
              "Robinson Club Sarıgerme Park",
              "Hilton Dalaman Sarıgerme Resort & Spa",
            ];
          } else if (
            config.allPages.find((el) => config.whichPage.indexOf(el) > -1) ||
            config.allPages.find((el) => cityName.indexOf(el) > -1)
          ) {
            config.whichList = "mountainList";
            config.hotelList = [
              {
                city: "Alanya",
                group: {
                  group1: [
                    "Hedef Beach Resort Hotel",
                    "Sultan Sipahi Resort Hotel",
                    "Annabella Park Hotel",
                    "Kirman Arycanda Deluxe",
                  ],
                  group2: [
                    "Hedef Kleopatra Golden Sun",
                    "Xperia Grand Bali Hotel",
                    "Mukarnas Spa Resort",
                    "Kirman Leodikya Resort & Spa",
                  ],
                  group3: [
                    "Hedef Kleopatra Sand Hotel",
                    "Xperia Saray Beach Hotel",
                    "Annabella Diamond Hotel & Spa",
                    "Orange County Resort Hotel Alanya",
                  ],
                  group4: [
                    "Hedef Resort & Spa",
                    "Annabella Diamond Hotel & Spa",
                    "Orange County Resort Hotel Alanya",
                    "Kirman Sidera Luxury & Spa",
                  ],
                },
              },
              {
                city: "Belek",
                group: {
                  group1: [
                    "Crystal Boutique Beach Resort",
                    "Crystal Waterworld Resort & Spa",
                    "Kirman Belazur Resort & Spa",
                    "Robinson Club Nobilis",
                    "Zeynep Hotel",
                  ],
                  group2: [
                    "Crystal Club World Of Colours",
                    "Crystal Tat Beach Golf Resort & Spa",
                    "Limak Atlantis De Luxe Hotel & Resort",
                    "Sueno Hotels Deluxe Belek",
                    "Regnum Carya",
                  ],
                  group3: [
                    "Crystal Family Resort & Spa",
                    "Adam & Eve",
                    "Orange County Resort Hotel Belek",
                    "Sueno Hotels Golf Belek",
                    "Xanadu Resort ",
                  ],
                  group4: [
                    "Crystal Paraiso Verde Resort & Spa",
                    "Ela Quality Resort Belek",
                    "Pine Beach Belek",
                    "Susesi Luxury Resort",
                    "Zeynep Hotel",
                  ],
                },
              },
              {
                city: "Bodrum",
                group: {
                  group1: [
                    "Aktur Residence",
                    "Royal Asarlık Beach Hotel & Spa",
                    "Avantgarde Yalıkavak",
                    "Cape Bodrum Beach Resort",
                    "Lujo Bodrum",
                    "Xanadu Island",
                  ],
                  group2: [
                    "Bodrum Holiday Resort & Spa",
                    "Salmakis Otel Bodrum",
                    "Costa Farilya Special Class Hotel",
                    "Doora Hotel Bodrum",
                    "Mandarin Oriental Bodrum",
                    "Delta Hotel By Marriott Bodrum",
                  ],
                  group3: [
                    "Club Marma Hotel",
                    "Yasmin Resort Bodrum",
                    "Hapimag Sea Garden Resort",
                    "Kaya Palazzo Resort & Residences Bodrum",
                    "The Bodrum EDITION",
                    "Xanadu Island",
                  ],
                  group4: [
                    "Crystal Green Bay Resort & Spa",
                    "Kairaba Blue Dreams Resort & Spa",
                    "Divan Bodrum",
                    "Le Meridien Bodrum Beach Resort",
                    "The Oba Hotel  ",
                    "Delta Hotel By Marriott Bodrum",
                  ],
                },
              },
              {
                city: "Çeşme",
                group: {
                  group1: [
                    "Altın Yunus Resort & Thermal Hotel",
                    "Kairaba Alaçatı Beach Resort",
                    "Reges a Luxury Collection Resort & Spa",
                  ],
                  group2: [
                    "Altın Yunus Resort & Thermal Hotel",
                    "Boyalık Beach Hotel & SPA",
                    "Radisson Blu Resort & Spa Çeşme",
                  ],
                  group3: [
                    "Boyalık Beach Hotel & SPA",
                    "Pırıl Hotel Thermal & Beauty Spa",
                    "Design Plus Seya Beach ",
                  ],
                  group4: [
                    "Altın Yunus Resort & Thermal Hotel",
                    "Boyalık Beach Hotel & SPA",
                    "Reges a Luxury Collection Resort & Spa",
                  ],
                },
              },
              {
                city: "Fethiye",
                group: {
                  group1: [
                    "Sundia By Liberty Ölüdeniz",
                    "The Bay Beach Club",
                    "Hillside Beach Club",
                  ],
                  group2: [
                    "The Bay Beach Club",
                    "Hillside Beach Club",
                    "Sundia By Liberty Fethiye",
                  ],
                  group3: [
                    "Club Hotel Letoonia Fethiye",
                    "The Bay Beach Club",
                    "Hillside Beach Club",
                  ],
                  group4: [
                    "Club Hotel Letoonia Fethiye",
                    "The Bay Beach Club",
                    "Hillside Beach Club",
                  ],
                },
              },
              {
                city: "Kemer",
                group: {
                  group1: [
                    "Crystal Aura Beach Resort & Spa",
                    "Queen's Park Göynük",
                    "Limak Limra Hotel & Resort",
                    "Robinson Club Çamyuva",
                    "Crystal Flora Beach Resort",
                  ],
                  group2: [
                    "Crystal Deluxe Resort & Spa",
                    "Queen's Park Le Jardin Resort & Spa",
                    "Champion Holiday Village",
                    "Mirage Park Resort",
                    "Club Marco Polo",
                  ],
                  group3: [
                    "Crystal Deluxe Resort & Spa",
                    "Grand Park Kemer",
                    "Seven Seas Hotel Life",
                    "Orange County Resort Hotel Kemer",
                    "Crystal Flora Beach Resort",
                  ],
                  group4: [
                    "Crystal Aura Beach Resort & Spa",
                    "Kimeros Park Holiday Village",
                    "Champion Holiday Village",
                    "Orange County Resort Hotel Kemer",
                    "Pirate's Beach Club",
                  ],
                },
              },
              {
                city: "Kuşadası",
                group: {
                  group1: [
                    "Kuştur Club Holiday Village",
                    "Palm Wings Ephesus Beach Resort",
                    "Aqua Fantasy Aquapark Hotel & Spa",
                    "Faustina Hotel & Spa",
                  ],
                  group2: [
                    "CLC Kuşadası Golf & Spa Resort",
                    "Palm Wings Beach Resort & Spa Kuşadası",
                    "Richmond Ephesus Resort",
                    "Tui Blue Ephesus Otel & Aqua Fantasy Aqua Park Tatil Köyü",
                  ],
                  group3: [
                    "Kuştur Club Holiday Village",
                    "Palm Wings Ephesus Beach Resort",
                    "Richmond Ephesus Resort",
                    "Aqua Fantasy Aquapark Hotel & Spa",
                  ],
                  group4: [
                    "Marbel Hotel By Palm Wings",
                    "Palm Wings Beach Resort & Spa Kuşadası",
                    "Palm Wings Ephesus Beach Resort",
                    "Aqua Fantasy Aquapark Hotel & Spa",
                  ],
                },
              },
              {
                city: "Lara",
                group: {
                  group1: [
                    "Aska Lara Resort & Spa",
                    "Venezia Palace Deluxe Resort",
                    "Royal Holiday Palace Hotel",
                    "Royal Seginus Hotel",
                  ],
                  group2: [
                    "Grand Park Lara",
                    "Melas Resort Hotel",
                    "Limak Lara De Luxe Hotel & Resort",
                    "Royal Wings Hotel",
                  ],
                  group3: [
                    "Aska Lara Resort & Spa",
                    "Melas Resort Hotel",
                    "Royal Holiday Palace Hotel",
                    "Royal Wings Hotel",
                  ],
                  group4: [
                    "Grand Park Lara",
                    "Venezia Palace Deluxe Resort",
                    "Limak Lara De Luxe Hotel & Resort",
                    "Royal Seginus Hotel",
                  ],
                },
              },
              {
                city: "Marmaris",
                group: {
                  group1: [
                    "Green Nature Diamond Otel",
                    "Grand Yazıcı Club Marmaris Palace",
                    "Grand Yazıcı Club Turban Thermal",
                    "D Maris Bay",
                  ],
                  group2: [
                    "Green Nature Resort & Spa",
                    "Grand Yazıcı Club Marmaris Palace",
                    "Grand Yazıcı Club Turban Thermal",
                    "D Maris Bay",
                  ],
                  group3: [
                    "Green Nature Diamond Otel",
                    "Grand Yazıcı Club Marmaris Palace",
                    "Grand Yazıcı Club Turban Thermal",
                    "D Maris Bay",
                  ],
                  group4: [
                    "Green Nature Resort & Spa",
                    "Grand Yazıcı Club Marmaris Palace",
                    "Grand Yazıcı Club Turban Thermal",
                    "D Maris Bay",
                  ],
                },
              },
              {
                city: "Side",
                group: {
                  group1: [
                    "Otium Family Eco Club",
                    "Süral Resort Hotel",
                    "Club Hotel Turan Prince World",
                    "Blue Waters Club",
                    "Kirman Calyptus Resort & Spa",
                    "Royal Alhambra Palace Hotel",
                    "Starlight Resort Hotel",
                  ],
                  group2: [
                    "Crystal Admiral Resort Suites & Spa",
                    "Side Sunport Hotel & Spa (ex.Side Sungate)",
                    "Süral Saray Hotel",
                    "Nashira Resort Hotel & Aqua Spa",
                    "Crystal Palace Luxury Resort & Spa",
                    "Royal Dragon Hotel",
                    "Sunrise Resort Hotel",
                  ],
                  group3: [
                    "Grand Şeker Hotel",
                    "Süral Garden Hotel",
                    "Trendy Aspendos Beach",
                    "Trendy Side Beach Hotels",
                    "Crystal Sunrise Queen Luxury Resort & Spa",
                    "Robinson Club Pamfilya",
                    "Royal Taj Mahal Hotel",
                  ],
                  group4: [
                    "Süral Hotel",
                    "Hotel Turan Prince",
                    "Blue Waters Club",
                    "Crystal Sunset Luxury Resort & Spa",
                    "Sueno Hotels Beach",
                    "Selge Beach Resort & Spa",
                    "Seven Seas Hotel Blue",
                  ],
                },
              },
            ];
          } else if (
            EightDigits.utils.getCookie(
              "_ed_" + config.scenarioname + "_earlyReservation"
            ) == "true"
          ) {
            config.whichList = "earlyReservation";
            config.hotelList = earlyReseList;
          }
        }
      },
      categoryPage: function () {
        var matchProduct = function () {
          jQuery(".booking-list li").map(function (index) {
            var isHotelMatch = jQuery(this)
              .find(".hotellist-hotel-name a")
              .eq(0)
              .text()
              .trim();
            if (selectedHotels.indexOf(isHotelMatch) > -1) {
              if (window.innerWidth > 576) {
                jQuery(
                  ".booking-list li:eq(" + index + ") .hotel-list-section-image"
                ).append(
                  '<div id="ed_suggestion_desktop" style="' +
                  styleForDesktop +
                  '"><img src="' +
                  config.imgSrc +
                  '" /></div>'
                );
                EightDigits.analytics.sendEvent(
                  config.analytics,
                  "ShownDesktop" + config.whichList
                );
                jQuery(
                  ".booking-list li:eq(" + index + ") .booking-item"
                ).click(function () {
                  if (config.whichList === "earlyReservation") {
                    EightDigits.utils.setCookie(
                      "_ed_" + config.scenarioname + "_earlyReservation",
                      "true",
                      24 * 60
                    );
                  } else {
                    EightDigits.utils.setCookie(
                      "_ed_" + config.scenarioname + "_earlyReservation",
                      "false",
                      24 * 60
                    );
                  }
                  EightDigits.analytics.sendEvent(
                    config.analytics,
                    "HotelClickedDesktop" + config.whichList
                  );
                });
              } else {
                jQuery(
                  ".booking-list li:eq(" + index + ") .hotel-list-section-image"
                ).append(
                  '<div id="ed_suggestion_mobile" style="' +
                  styleForMobile +
                  '"><img style="width: 100px!important;height: auto!important;" src="' +
                  config.imgSrc +
                  '" /></div>'
                );
                EightDigits.analytics.sendEvent(
                  config.analytics,
                  "ShownMobile" + config.whichList
                );
                jQuery(
                  ".booking-list li:eq(" + index + ") .booking-item"
                ).click(function () {
                  if (config.whichList === "earlyReservation") {
                    EightDigits.utils.setCookie(
                      "_ed_" + config.scenarioname + "_earlyReservation",
                      "true",
                      24 * 60
                    );
                  } else {
                    EightDigits.utils.setCookie(
                      "_ed_" + config.scenarioname + "_earlyReservation",
                      "false",
                      24 * 60
                    );
                  }
                  EightDigits.analytics.sendEvent(
                    config.analytics,
                    "HotelClickedMobile" + config.whichList
                  );
                });
              }
            }
          });
        };
        matchProduct();
        jQuery(document).ajaxComplete(function (r, s, p) {
          if (p.url.indexOf("HotelListForFilter?slug=") > -1) {
            matchProduct();
          }
        });
      },
      start: function () {
        main.factory.prototype.getList("");

        var group, indexOfGroup;

        var cookieForGroup = function () {
          if (
            EightDigits.utils.getCookie(
              "_ed_OneriyorBadge_" + config.whichList
            ) == null
          ) {
            indexOfGroup = Math.floor(Math.random() * 3) + 1;
            group = "group" + indexOfGroup;
            EightDigits.utils.setCookie(
              "_ed_OneriyorBadge_" + config.whichList,
              group,
              24 * 60
            );
          } else {
            group = EightDigits.utils.getCookie(
              "_ed_OneriyorBadge_" + config.whichList
            );
          }
        };
        if (config.whichList === "earlyReservation") {
          cookieForGroup();
          selectedHotels = config.hotelList[0][group];
        } else if (config.whichList === "mountainList") {
          var categoryPageName = jQuery(".booking-sort .hotel-list-page-header")
            .text()
            .trim();
          var cityName = categoryPageName ? categoryPageName : productPageName;
          config.hotelList.map(function (item, index) {
            if (cityName.indexOf(item.city) > -1) {
              cookieForGroup();
              selectedHotels = item.group[group];
            }
          });
        } else {
          selectedHotels = config.hotelList;
        }
        main.factory.prototype.categoryPage(selectedHotels);
      },
      control: function () {
        if (
          !config.allPages.find((el) => config.whichPage.indexOf(el) > -1) &&
          jQuery("#Hotel-List-Container").length === 0
        ) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }

        var _exec = main.factory.prototype.random();
        if (!_exec) {
          EightDigits.analytics.sendEvent(config.analytics, "NotShown");

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
  var _ed_Setur_Oneriyor_Badge_A_B_Test = new EightDigits.sf();
  _ed_Setur_Oneriyor_Badge_A_B_Test.Setur_Oneriyor_Badge_A_B_Test();
})();

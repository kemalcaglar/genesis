(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Ek_Indirim_Popup_Rezervasyon")) {
    return false;
  }
  EightDigits.sf.prototype.Ek_Indirim_Popup_Rezervasyon = function () {

    var config = {
      scenarioname: "Ek_Indirim_Popup_Rezervasyon",
      analytics: "Ek_Indirim_Popup_Rezervasyon",
      controlgroup: 0,
      imgSrc_desktop: "https://cdn.8digits.com/log/r/04537668-5b07-4a5c-b641-4f17d5549bf7.png",
      imgSrc_mobile: "https://cdn.8digits.com/log/r/20b99432-65cc-4e2e-8aca-f9d6e83c6135.png",
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
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      fireEvent: function (eventName, isCookie) {
        if (isCookie === true) {
          if (window.innerWidth < 575) {
            if (
              !EightDigits.utils.getCookie(
                "ed-" + config.analytics + eventName + "_Mobil"
              )
            ) {
              EightDigits.analytics.sendEvent(
                config.analytics,
                eventName + "_Mobil"
              );
              EightDigits.utils.setCookie(
                "ed-" + config.analytics + eventName + "_Mobil",
                "on"
              );
            }
          } else {
            if (
              !EightDigits.utils.getCookie(
                "ed-" + config.analytics + eventName + "_Desktop"
              )
            ) {
              EightDigits.analytics.sendEvent(
                config.analytics,
                eventName + "_Desktop"
              );
              EightDigits.utils.setCookie(
                "ed-" + config.analytics + eventName + "_Desktop",
                "on"
              );
            }
          }
        } else {
          if (window.innerWidth < 575) {
            EightDigits.analytics.sendEvent(
              config.analytics,
              eventName + "_Mobil"
            );
          } else {
            EightDigits.analytics.sendEvent(
              config.analytics,
              eventName + "_Desktop"
            );
          }
        }
      },
      start: function () {
        if (window.innerWidth < 575) {
          var ed_image = config.imgSrc_mobile;
        } else {
          var ed_image = config.imgSrc_desktop;

        }
        let html = "<div class=\"smpl-discountPopup col-md-4\">\n" +
          "  <div>\n" +
          "    <div class=\"smpl-discountPopup-closeButton-container\">\n" +
          "      <p class=\"smpl-discountPopup-text\" id=\"smpl-discountPopup-text\">YAZ250</p>\n" +
          "      <p class=\"smpl-discountPopup-textCopied\" id=\"smpl-discountPopup-textCopied\">Kupon Kodu Kopyalandı</p>\n" +
          "      <span class=\"fa fa-times smpl-discountPopup-closeButton\"></span>\n" +
          "    </div>\n" +
          "    <img class=\"smpl-discountPopup-image\"\n" +
          "         src=\"" +
          ed_image +
          "\"\n" +
          "         alt=\"250 TL ek indirim!\">\n" +
          "  </div>\n" +
          "</div>";

        let style = ".smpl-discountPopup {\n" +
          "    position: fixed;\n" +
          "    bottom: -130px;\n" +
          "    width: 363px;\n" +
          "    display: flex;\n" +
          "    align-items: center;\n" +
          "    flex-direction: column;\n" +
          "    opacity: 0;\n" +
          "    z-index: 60;\n" +
          "    padding-left: 0;\n" +
          "}\n" +
          "\n" +
          ".smpl-discountPopup-image {\n" +
          "border-radius: 5px 5px 0 0;\n" +
          "}\n" +
          "\n" +
          ".smpl-discountPopup-closeButton-container {\n" +
          "    width: 100%;\n" +
          "    text-align: right;\n" +
          "    padding: 0;\n" +
          "    display: flex;\n" +
          "    align-items: center;\n" +
          "    justify-content: space-between;\n" +
          "}\n" +
          "\n" +
          ".smpl-discountPopup-text {\n" +
          "    display: none;\n" +
          "}\n" +
          ".smpl-discountPopup-textCopied {\n" +
          "    opacity: 0;\n" +
          "    width: 100%;\n" +
          "    text-align: center;\n" +
          "    background-color: #ed3a41;\n" +
          "    border-radius: 30px;\n" +
          "    margin: 5px 25px 5px 55px;\n" +
          "    color: #ffffff;\n" +
          "    font-weight: bold;\n" +
          "}\n" +
          "\n" +
          ".smpl-discountPopup-closeButton {\n" +
          "    padding: 5px 10px;\n" +
          "    cursor: pointer;\n" +
          "    color: #fff;\n" +
          "    margin: 0 5px -70px 5px;\n" +
          "    z-index: 1;\n" +
          "    border-radius: 4px;\n" +
          "}\n" +
          "\n" +
          ".smpl-discountPopup-closeButton:hover {\n" +
          "    background-color: #399fc8;\n" +
          "}\n" +
          "\n" +
          "@media only screen and (max-width: 575px) {\n" +
          "    .smpl-discountPopup {\n" +
          "        display: -webkit-box;\n" +
          "        display: -ms-flexbox;\n" +
          "        display: flex;\n" +
          "        bottom: -95px;\n" +
          "        width: 100%;\n" +
          "        z-index: 60;\n" +
          "        left: 0;\n" +
          "        padding: 0;\n" +
          "    }\n" +
          "}";

        jQuery(".js-hotel-info").after(html);
        jQuery("head").append("<style>" + style + "</style>");
        main.factory.prototype.fireEvent("shown", true);

        jQuery(".smpl-discountPopup-closeButton").click(function () {
          HideSmplDiscountPopup();
          main.factory.prototype.fireEvent("click_close", true);
        });
        setTimeout(ShowSmplDiscountPopup(), 3000);
        jQuery(".smpl-discountPopup-image").mouseenter(function () {
          CopyToClipboard("#smpl-discountPopup-text");
          main.factory.prototype.fireEvent("hover", true);
        });

        if (innerWidth < 575) {
          jQuery(".smpl-discountPopup-image").click(function () {
            CopyToClipboard("#smpl-discountPopup-text");
            main.factory.prototype.fireEvent("click_coupon", true);
          });
        }

        function CopyToClipboard(element) {
          var $temp = jQuery("<input>");
          jQuery("body").append($temp);
          $temp.val(jQuery(element).text()).select();
          document.execCommand("copy");
          $temp.remove();
          jQuery("#smpl-discountPopup-textCopied").animate({
            opacity: "1",
          });
          setTimeout(function () {
            jQuery("#smpl-discountPopup-textCopied").animate({
              opacity: "0",
            });
          }, 2000);
        }

        function ShowSmplDiscountPopup() {
          if (window.innerWidth > 545) {
            jQuery(".smpl-discountPopup").animate({
              bottom: "0",
              opacity: "1",
            });
          } else {

            var smplDiscountPopupBottom = jQuery(".m-total-price").height();
            jQuery(".smpl-discountPopup").animate({
              bottom: smplDiscountPopupBottom,
              opacity: "1",
            });
          }

        }

        function HideSmplDiscountPopup() {
          jQuery(".smpl-discountPopup").animate({
            bottom: "-130px",
            opacity: "0",
          });
        }

      },
      control: function () {

        var dt = new Date();
        if (dt.getHours() > 8 && dt.getMinutes() > 30) {
          if (dt.getHours() < 22) {
            return false;
          }
        }

        if (
          EightDigits.utils.getCookie(
            "ed-" + config.analytics + "click_close_Desktop"
          ) || EightDigits.utils.getCookie(
          "ed-" + config.analytics + "click_close_Mobil"
          )
        ) {
          return false;
        }
        var arr = [
          "Sueno Hotels Beach",
          "Sueno Hotels Deluxe Belek",
          "Hapimag Sea Garden Resort",
          "Zeynep Hotel",
          "The Bay Beach Club",
          "Club Marma Hotel",
          "D Maris Bay",
          "Sueno Hotels Golf Belek",
          "Susesi Luxury Resort",
          "Starlight Resort Hotel",
          "Nashira Resort Hotel & Aqua Spa",
          "Trendy Aspendos Beach",
          "Robinson Club Çamyuva",
          "Regnum Carya",
          "Kimeros Park Holiday Village",
          "Hilton Dalaman Sarıgerme Resort & Spa",
          "Club Hotel Turan Prince World",
          "Lujo Bodrum",
          "Robinson Club Sarıgerme Park",
          "Boyalık Beach Hotel & SPA",
          "Grand Yazıcı Club Marmaris Palace",
          "Cape Bodrum Beach Resort",
          "Annabella Diamond Hotel & Spa",
          "Crystal Flora Beach Resort",
          "Limak Limra Hotel & Resort",
          "Kairaba Blue Dreams Resort & Spa",
          "Aktur Residence",
          "Hedef Resort & Spa",
          "Seven Seas Hotel Life",
          "Mirage Park Resort",
          "Limak Lara De Luxe Hotel & Resort",
          "Ela Quality Resort Belek",
          "Limak Atlantis De Luxe Hotel & Resort",
          "Crystal Admiral Resort Suites & Spa",
          "Club Marvy",
          "D Resort Göcek",
          "Club Marco Polo",
          "Venezia Palace Deluxe Resort",
          "Crystal Green Bay Resort & Spa",
          "Seven Seas Hotel Blue",
          "Club Hotel Letoonia Fethiye",
          "Robinson Club Nobilis",
          "Champion Holiday Village",
          "Grand Şeker Hotel",
          "Crystal Sunset Luxury Resort & Spa",
          "Crystal Waterworld Resort & Spa",
          "Xanadu Island",
          "Crystal Tat Beach Golf Resort & Spa",
          "Orange County Resort Hotel Alanya",
          "Crystal Aura Beach Resort & Spa",
          "Crystal Sunrise Queen Luxury Resort & Spa",
          "Altın Yunus Resort & Thermal Hotel",
          "Bodrum Holiday Resort & Spa",
          "Sentido Trendy Verbena Beach",
          "Trendy Palm Beach",
          "Otium Family Eco Club",
          "Kirman Belazur Resort & Spa",
          "Hotel Turan Prince",
          "Sunrise Resort Hotel",
          "Blue Waters Club",
          "Crystal Palace Luxury Resort & Spa",
          "Divan Bodrum",
          "Queen's Park Göynük",
          "Radisson Blu Resort & Spa Çeşme",
          "Kuştur Club Holiday Village",
          "Salmakis Otel Bodrum",
          "Kirman Sidera Luxury & Spa",
          "Robinson Club Pamfilya",
          "Pine Beach Belek",
          "Aska Lara Resort & Spa",
          "CLC Kuşadası Golf & Spa Resort",
          "Avantgarde Yalıkavak",
          "Kaya Palazzo Resort & Residences Bodrum",
          "Tui Blue Ephesus Otel & Aqua Fantasy Aqua Park Tatil Köyü",
          "Adam & Eve",
          "Kirman Calyptus Resort & Spa",
          "Palm Wings Beach Resort & Spa Kuşadası",
          "Door'a Hotel Bodrum",
          "Assos Dove Hotel Resort & Spa",
          "Faustina Hotel & Spa",
          "Selge Beach Resort & Spa",
          "Yasmin Resort Bodrum",
          "Green Nature Diamond Otel",
          "Hedef Beach Resort Hotel",
          "Aqua Fantasy Aquapark Hotel & Spa",
          "Kirman Arycanda Deluxe",
          "Kirman Sidemarin Beach & Spa",
          "Orange County Resort Hotel Kemer",
          "D Resort Murat Reis Ayvalık",
          "Costa Farilya Special Class Hotel",
          "Crystal Paraiso Verde Resort & Spa",
          "Pırıl Hotel Thermal & Beauty Spa",
          "Kirman Leodikya Resort & Spa",
          "Pirate's Beach Club",
          "Melas Lara Hotel",
          "Richmond Ephesus Resort",
          "Crystal Deluxe Resort & Spa",
          "Trendy Side Beach Hotels",
          "Crystal Family Resort & Spa",
          "Haydarpasha Palace",
          "Annabella Park Hotel",
          "Grand Park Kemer",
          "Green Nature Resort & Spa",
          "Sandıklı Thermal Park Hotel",
          "Kairaba Alaçatı Beach Resort",
          "Queen's Park Le Jardin Resort & Spa",
          "Akrones Thermal Spa Convention Sport Hotel",
          "Cape Krio Boutique Hotel & Spa",
          "Hedef Kleopatra Golden Sun",
          "Palm Wings Ephesus Beach Resort",
        ];
        if (arr.find(x => x == jQuery(".booking-item-payment-title").text().trim()) === undefined) {
          return false;
        }
        if (window.location.pathname !== "/Rezervasyon-Bilgileri") {
          return false;
        }
        if (parseInt(jQuery("#summaryTotalText").text().trim().replace(".", "")) < 5000) {
          return false;
        }

      },
      init: function () {

        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (window.innerWidth > 575) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
              EightDigits.analytics.sendEvent(config.analytics, "notShown-bannerDesktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + "-notshown", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
              EightDigits.analytics.sendEvent(config.analytics, "notShown-bannerMobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + "-notshown", "on");
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
  var _ed_Ek_Indirim_Popup_Rezervasyon = new EightDigits.sf();
  _ed_Ek_Indirim_Popup_Rezervasyon.Ek_Indirim_Popup_Rezervasyon();
})();

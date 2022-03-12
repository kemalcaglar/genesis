(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Erken_Rezervasyon_Popup_Mobil")) {
    return false;
  }
  EightDigits.sf.prototype.Erken_Rezervasyon_Popup_Mobil = function () {

    var config = {
      scenarioname: "Erken_Rezervasyon_Popup_Mobil",
      analytics: "Erken_Rezervasyon_Popup_Mobil",
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
        if (jQuery(".smpl-popup-main").length <= 0) {
          setTimeout(() => {
            if (!jQuery('.ed-TrivagoIndirim').length > 0) {
              jQuery('body').append('<div id="ed-popupOverlay" style=" width: 100%; height: 100%; position: fixed; background: rgba(0,0,0,0.7); top: 0; left: 0; z-index: 991; "></div><div id="ed-popupMain"><div class="ed-popupClose" style="position: fixed;top: calc(50% - 130px);color: #fff;z-index: 993;font-size: 30px;transform: rotate(45deg);left: calc(50% + 140px);cursor: pointer;">+</div><img src="https://cdn.8digits.com/log/r/d0002931-0423-49d7-a1f9-3658ab9c5024.png" style=" position: fixed; width: 320px;height:256px;  top: calc(50% - 128px); left: calc(50% - 160px); z-index: 992; cursor: pointer;"></div>');
              EightDigits.analytics.sendEvent(config.analytics, "Shown");

              jQuery('#ed-popupOverlay').click(function () {
                jQuery('#ed-popupOverlay').remove();
                jQuery('#ed-popupMain').remove();
                EightDigits.analytics.sendEvent(config.analytics, "Close");
              });

              jQuery('.ed-popupClose').click(function () {
                jQuery('#ed-popupOverlay').remove();
                jQuery('#ed-popupMain').remove();
                EightDigits.analytics.sendEvent(config.analytics, "Close");
              });

              jQuery('#ed-popupMain img').click(function () {
                jQuery('html, body').animate({
                  scrollTop: parseInt(jQuery('#detail-form').offset().top - 190)
                }, 500);
                jQuery('#ed-popupOverlay').remove();
                jQuery('#ed-popupMain').remove();
                EightDigits.analytics.sendEvent(config.analytics, "Click");
              });
            }
          }, 2000);
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

        if (hour < 19 && hour > 9) {
          return false;
        }

        if(hour===8 && minutes>30){
            return false;
        }
        var checkInDate = window.location.href.split("checkinDate=")[1].split("&")[0];
        var checkInYear = Number(checkInDate.split("-")[0]);
        var checkInMonth = Number(checkInDate.split("-")[1]);
        // var checkInDay = Number(checkInDate.split("-")[2])
        var checkOutDate = window.location.href.split("checkinDate=")[1].split("&")[1].split("checkoutDate=")[1];
        var checkOutYear = Number(checkOutDate.split("-")[0]);
        var checkOutMonth = Number(checkOutDate.split("-")[1]);
        // var checkOutDay = Number(checkOutDate.split("-")[2])

        if (checkInYear !== 2022 || checkOutYear !== 2022) {
          return false;
        }
        // if (checkInMonth > 4 || checkOutMonth > 4) {
        //   console.log("ay");
        //   return false;
        // }

        var hotels = [
          "Acapulco Resort & Convention & Spa",
          "Arkın Palm Beach Hotel",
          "Altınkaya Holiday Resort",
          "Büyük Anadolu Hotel",
          "Concorde Luxury Resort Casino Convention & SPA",
          "Deniz Kızı Hotel",
          "Deniz Kızı Royal",
          "Dome Hotel",
          "Dorana Hotel",
          "Elexus Hotel Resort Casino",
          "Grand Sapphire City Hotel",
          "Grand Pasha Kyrenia Hotel & Casino & Spa",
          "Grand Pasha Nicosia Hotel & Casino & Spa",
          "Kaya Artemis Resort & Casino",
          "Kaya Palazzo Resort & Casino",
          "Les Ambassadeurs Hotel & Casino",
          "Life Hotel",
          "Limak Cyprus Deluxe Hotel",
          "Lord's Palace Hotel & Spa & Casino",
          "Merit Cyprus Garden Holiday Village & Casino",
          "Merit Crystal Cove Hotel & Casino",
          "Merit Lefkoşa Hotel & Casino",
          "Merit Park Hotel & Casino",
          "Merit Royal Hotel & Casino & Spa",
          "Merit Royal Premium Hotel & Casino",
          "Nuh'un Gemisi Deluxe Hotel & Spa",
          "Park Palace",
          "Pia Bella Hotel",
          "Rocks Hotel & Casino",
          "Royal Palace Hotel",
          "Salamis Bay Conti Resort & Hotel",
          "The Colony Hotel",
          "Vuni Palace Hotel"
        ];
        var hotelFind = hotels.find(x => x === jQuery('h1.hotel-detail-name').text().trim());
        if (typeof hotelFind === "undefined") {
          console.log("otel");
          return false;
        }

      },
      init: function () {
        console.log(main.factory.prototype.control());
        if (main.factory.prototype.control() == false) {
          console.log("control");
          return false;
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
  var _ed_Erken_Rezervasyon_Popup_Mobil = new EightDigits.sf();
  _ed_Erken_Rezervasyon_Popup_Mobil.Erken_Rezervasyon_Popup_Mobil();
})();

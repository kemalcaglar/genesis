(function () {
  EightDigits.sf.prototype.Setur_Oneriyor_Badge = function () {


      var config = {
          scenarioname: "Setur_Oneriyor_Badge",
          analytics: "Setur_Oneriyor_Badge",
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
              if (randomVal < 100 * randomControlRatio) {
                  return true;
              } else {
                  return false;
              }
          },
          start: function () {

              var selectedOtels = [
                "Sueno Hotels Beach",
                "Sueno Hotels Deluxe Belek",
                "Sueno Hotels Golf Belek",
                "Marmaris Bay Resort By Mp Hotels",
                "Crystal Flora Beach Resort",
                "Crystal Green Bay Resort & Spa",
                "Crystal Admiral Resort Suites & Spa",
                "Crystal Sunset Luxury Resort & Spa",
                "Crystal Waterworld Resort & Spa",
                "Crystal Deluxe Resort & Spa",
                "Crystal Sunrise Queen Luxury Resort & Spa",
                "Crystal Paraiso Verde Resort & Spa",
                "Crystal Aura Beach Resort & Spa",
                "Crystal Palace Luxury Resort & Spa",
                "Divan Bodrum",
                "Robinson Çamyuva",
                "Robinson Nobilis",
                "Robinson Sarıgerme Park",
                "Robinson Pamfilya",
                "Rubi Platinum Spa Resort & Suites",
                "Rubi Hotel",
                "Rubi Platinum Sign",
                "Hillside Beach Club ",
                "Mirage Park Resort",
                "Zeynep Hotel  ",
                "Kirman Sidera Luxury & Spa",
                "Kirman Arycanda Deluxe",
                "Kirman Calyptus Resort & Spa",
                "Kirman Sidemarin Beach & Spa",
                "Kirman Belazur Resort & Spa",
                "Kirman Leodikya Resort & Spa",
                "Swandor Topkapı Palace",
                "Club Hotel Turan Prince World",
                "Hotel Turan Prince",
                "Kaya Artemis",
                "Trendy Aspendos Beach",
                "Concorde Resort",
                "Limak Limra Hotel & Resort",
                "Limak Atlantis De Luxe Hotel & Resort",
                "Limak Lara De Luxe Hotel & Resort",
                "Limak Cyprus Deluxe Hotel",
                "Pirates Beach",
                "The Bay Beach",
                "Boyalık Beach",
                "Costa Farilya ",
                "Club Marco Polo ",
                "Starlight Resort Hotel",
                "Sunrise Resort Hotel",
                "Champion HV ",
                "Altın Yunus",
                "Kimera Lounge",
                "Aska Lara Resort & Spa",
                "Aska Just In Beach",
                "Aska Side Grand Prestige",
                "Fiska Otel Selimiye",
                "Mirage Worlds",
                "Babaylon Hotel"
              ]
              let html;
              if (window.innerWidth > 576){
 html = `
<div id="ed_suggestion_desktop" style="position: relative;bottom: 0;right: 0;width: 122px;height: 32px;background: #fff;border-top-right-radius: 5px;">
<img style="object-fit: none;" src="//cdn.8digits.com/f/u/s2adg7rq/5e64f4da-3f6c-4479-8c96-b1149ff13f01.png">
</div>
`
              }else {
                 html = `
                <div id="ed_suggestion_desktop" style="position: relative;bottom: 32px;right: 0;width: 122px;height: 32px;background: #fff;border-top-right-radius: 5px;">
                <img style="object-fit: none;" src="//cdn.8digits.com/f/u/s2adg7rq/5e64f4da-3f6c-4479-8c96-b1149ff13f01.png">
                </div>
                `
              }
              jQuery(".booking-filter-item__inner").each(function(){
                let isHotelMatch = jQuery(this).find(".hotellist-hotel-name a").text().trim()
                if( selectedOtels.includes(isHotelMatch)){
                    if (window.innerWidth > 576) {
                        jQuery(this).find(".hotel-list-section-image").append(html)
                        EightDigits.analytics.sendEvent(config.analytics, "shown-desktop");
                        jQuery(this).click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, "click-hotel");
                            })

                    } else {
                        jQuery(this).find(".hotel-list-section-image").append(html);
                        EightDigits.analytics.sendEvent(config.analytics, "shown-mobile");
                        jQuery(this).click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "click-hotel-mobil");
                        })
                    }
                }
                })



          },
          init: function () {
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (EightDigits.utils.getCookie('ed-notshown' + config.scenarioname) === null) {
                      EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                      EightDigits.utils.setCookie('ed-notshown' + config.scenarioname, "on");
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
  var _ed_Setur_Oneriyor_Badge = new EightDigits.sf();
  _ed_Setur_Oneriyor_Badge.Setur_Oneriyor_Badge();
})();

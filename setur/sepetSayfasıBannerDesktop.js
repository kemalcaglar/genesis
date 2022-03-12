(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Basket_Banner_Tema")) {
      return false
  }
  EightDigits.sf.prototype.Basket_Banner_Tema = function () {
      var config = {
          scenarioname: "Basket_Banner_Tema",
          analytics: "Basket_Banner_Tema",
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
            var arr = [
              "Adam & Eve",
              "Adora Resort Hotel",
              "Limak Atlantis De Luxe Hotel & Resort",
              "Siam Elegance Hotels & Spa",
              "Orange County Resort Hotel Belek",
              "Crystal Waterworld Resort & Spa",
              "Aquaworld Belek By Mp Hotels",
              "Crystal Club World Of Colours",
              "Kirman Belazur Resort & Spa",
              "Laren Seaside Hotel & Spa",
              "Laren Family Hotel & Spa",
              "Antalya Hotel Resort & Spa",
              "The Marmara Antalya",
              "Akra V",
              "Akra Hotel",
              "Adalya Elite Lara Hotel",
              "Grand Park Lara",
              "Aska Lara Resort & Spa",
              "Royal Holiday Palace Hotel",
              "Limak Lara De Luxe Hotel & Resort",
              "Royal Holiday Palace Hotel",
              "Royal Wings Hotel",
              "The Land of Legends Kingdom Otel",
              "Zeynep Hotel",
              "Robinson Club Nobilis",
              "Regnum Carya",
              "Sueno Hotels Deluxe Belek",
              "Ela Quality Resort Belek",
              "Susesi Luxury Resort",
              "Sueno Hotels Golf Belek",
              "Calista Luxury Resort",
              "Papillon Ayscha",
              "Crystal Family Resort & Spa",
              "Crystal Paraiso Verde Resort & Spa",
              "Crystal Tat Beach Golf Resort & Spa",
              "Turka Loca City Hotel",
              "Lara Hotel",
              "Let'stay Boutique Hotel",
              "Club Hotel Falcon",
            ]
            
            jQuery(".booking-list .booking-item .basket-flight-header").each(function (index, product) {
              arr.forEach(function (item) {
                if (jQuery('h4:eq(0)', product).text().trim() === item) {
            var html = `<div class="smpl-tema-banner" style="margin-bottom:20px"><a href="https://www.setur.com.tr/the-land-of-legends-tema-park">
            <img src="https://cdn.8digits.com/log/r/eb759ae9-fd58-4acc-8253-e3deec6bfde0.jpeg"></img></a>
            </div>`
            if(jQuery(".smpl-tema-banner").length == 0 ){
              jQuery(".m-cart-content.row").after(html);
              EightDigits.analytics.sendEvent(config.analytics, 'shown-banner')
              jQuery(".smpl-tema-banner").click(function(){
                EightDigits.analytics.sendEvent(config.analytics, 'click-banner')
              })
            }
                }
              });
            })
          },
          control: function () {
          },
          init: function () {
              if (main.factory.prototype.control() == false) {
                  return false
              }
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
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
  var _ed_Basket_Banner_Tema = new EightDigits.sf();
  _ed_Basket_Banner_Tema.Basket_Banner_Tema();
})();
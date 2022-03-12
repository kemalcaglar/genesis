(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Odeme_Secenekleri")) {
      return false
  }
  EightDigits.sf.prototype.Odeme_Secenekleri = function () {
      var config = {
          scenarioname: "Odeme_Secenekleri",
          analytics: "Odeme_Secenekleri",
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
            if (jQuery(".ed-cancelInfoMain").length > 0) {
              var html = `<div class="ed-cancelInfoMain">
                <div id="ed-cancelInfo" style="width: 100%;margin-bottom: 20px;">
                 <a href="https://www.setur.com.tr/diledigin-odeme-seklini-sec"> <img src="https://cdn.8digits.com/log/r/bc8654ba-4deb-41e3-87ea-5bb7e9940292.jpeg"></a>
                </div> 
               </div>`
               jQuery('#Hotel-List-Container ul li:eq(0)').after(html)
               if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                EightDigits.analytics.sendEvent(config.analytics, 'shown');
                EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
              }
            }
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
  var _ed_Odeme_Secenekleri = new EightDigits.sf();
  _ed_Odeme_Secenekleri.Odeme_Secenekleri();
})();
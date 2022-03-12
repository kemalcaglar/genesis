(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Home_Paloma_Banner_Mobile")) {
      return false
  }
  EightDigits.sf.prototype.Home_Paloma_Banner_Mobile = function () {
      var config = {
          scenarioname: "Home_Paloma_Banner_Mobile",
          analytics: "Home_Paloma_Banner_Mobile",
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
            var html = `<div class="container">
            <a href="https://www.touristica.com.tr/paloma-otelleri-nisan-kampanyasi"><img src="https://cdn.8digits.com/log/r/8b36548f-328d-420c-95a6-d475c1eecfbd.jpeg" style="width: 100%;"></a>
           </div>`
           jQuery(".campaign-multi-box.box-radius").after(html);
           EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
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
  var _ed_Home_Paloma_Banner_Mobile = new EightDigits.sf();
  _ed_Home_Paloma_Banner_Mobile.Home_Paloma_Banner_Mobile();
})();
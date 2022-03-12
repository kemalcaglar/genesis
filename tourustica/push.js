(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kibris_Tur_Otel_Tagleme")) {
      return false
    }
    EightDigits.sf.prototype.Kibris_Tur_Otel_Tagleme = function () {
  
      var config = {
        scenarioname: "Kibris_Tur_Otel_Tagleme",
        analytics: "Kibris_Tur_Otel_Tagleme",
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
            if(window.location.pathname.indexOf("/kibris-otelleri") > -1){
                setTimeout(function () {
                    OneSignal.sendTag("kibrisOtelleri", "1");
                  }, 1000);
            }
            if(window.location.pathname.indexOf("/kibris-turlari") > -1){
                setTimeout(function () {
                    OneSignal.sendTag("kibrisTurlari", "1");
                  }, 1000);
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
    var _ed_Kibris_Tur_Otel_Tagleme = new EightDigits.sf();
    _ed_Kibris_Tur_Otel_Tagleme.Kibris_Tur_Otel_Tagleme();
  })();
  
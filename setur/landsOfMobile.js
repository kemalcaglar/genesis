(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("The_Land_Banner_Mobile")) {
      return false
    }
    EightDigits.sf.prototype.The_Land_Banner_Mobile = function () {
      var config = {
        scenarioname: "The_Land_Banner_Mobile",
        analytics: "The_Land_Banner_Mobile",
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
          var html = `<div class="smpl-tema-productBanner" style="margin-top: 35px; margin-bottom: 20px;"><a href="https://www.setur.com.tr/the-land-of-legends-tema-park" target=”_blank”>
  <img src="https://cdn.8digits.com/log/r/bd2cac91-7aa2-4bca-a4c6-e4f61dcb990a.jpeg"></a></div>`;
          jQuery(".row.m-0.mobile-search-container.display-trigger-only-desktop").after(html);
  if(jQuery(".smpl-tema-productBanner").length > 0){
            EightDigits.analytics.sendEvent(config.analytics, 'shown-banner')
            jQuery(".smpl-tema-productBanner").click(function(){
              EightDigits.analytics.sendEvent(config.analytics, 'click-banner')
            })
          }
  
        },
        control: function () {},
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
    var _ed_The_Land_Banner_Mobile = new EightDigits.sf();
    _ed_The_Land_Banner_Mobile.The_Land_Banner_Mobile();
  })();
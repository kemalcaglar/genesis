(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Uc_Gun_Banner")) {
    return false
  }
  EightDigits.sf.prototype.Uc_Gun_Banner = function () {
    var config = {
      scenarioname: "Uc_Gun_Banner",
      analytics: "Uc_Gun_Banner",
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
        var html = `<div id="ed-days-banner" style="height: 30px;line-height:15px;"><a href="https://www.setur.com.tr/populer-erken-rezervasyon-otelleri" style="">
  
        <span style="width: 100%;height: 40px;position: absolute;display: flex;justify-content: center;text-align: center;align-items: center;color: white;font-family: &quot;Source&quot;,sans-serif;font-size: 13px;background: #363466;">%50’ye varan Erken Rezervasyon Fırsatlarında Son 3 Gün</span></a></div>`
        jQuery(".top-area.show-onload").css({"margin-top":"70px"})
        jQuery('#ed_header').after(html)
        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
          EightDigits.analytics.sendEvent(config.analytics, 'shown');
          EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
        }
        jQuery("#ed-days-banner").click(function () {
          EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Days_Banner");
        })
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
  var _ed_Uc_Gun_Banner = new EightDigits.sf();
  _ed_Uc_Gun_Banner.Uc_Gun_Banner();
})();
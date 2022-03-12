(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Seyahatte_Hayat_Var_Banner")) {
    return false
  }
  EightDigits.sf.prototype.Seyahatte_Hayat_Var_Banner = function () {
    var config = {
      scenarioname: "Seyahatte_Hayat_Var_Banner",
      analytics: "Seyahatte_Hayat_Var_Banner",
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
        let css = `
        <style>
        .smpl-hayat-var {
          position: absolute;
          top: 10px;
          right: 155px;
          display: block;
        }
        @media only screen and (max-width: 994px) {
          .smpl-hayat-var {
            display: none;
          }
        }
        </style>
        `
        jQuery("head").append(css);
        let html = `
        <div class="smpl-hayat-var">
          <a class="smpl-hayat-href" href="https://www.setur.com.tr/seyahatte-hayat-var">
            <img src="https://cdn.8digits.com/log/r/d72351b1-6e44-41bf-8ba6-dc4f59512a36.png">
          </a>
        </div>`
        jQuery(".top-user-area.clearfix").before(html);
        EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
          jQuery(".smpl-hayat-href").on("click", function () {
            EightDigits.analytics.sendEvent(config.analytics, "click-banner");
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
  var _ed_Seyahatte_Hayat_Var_Banner = new EightDigits.sf();
  _ed_Seyahatte_Hayat_Var_Banner.Seyahatte_Hayat_Var_Banner();
})();
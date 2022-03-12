(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Home_Checkup_Banner_Desktop")) {
    return false;
  }
  EightDigits.sf.prototype.Home_Checkup_Banner_Desktop = function () {
    var config = {
      scenarioname: "Home_Checkup_Banner_Desktop",
      analytics: "Home_Checkup_Banner_Desktop",
      controlgroup: 0,
    };
    var main = {
      factory: function () {
        return true;
      },
    };
    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
          config.controlgroup > 50
            ? config.controlgroup
            : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(
            EightDigits.utils.getCookie("_ed_" + config.scenarioname)
          );
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      start: function () {
        var html = `<a class="link smpl-banner" href="/check-up-paketleri" title="CheckUp">
        <div class="link-img  lazy-bg" style="background-image:url(/assets/images/cover-link-kvy.jpg)" data-web="/assets/images/cover-link-kvy.jpg"></div>
        <div class="text">
            <strong>CheckUp</strong>
            <i>Bilgi ve Randevu</i>
        </div>
    </a>`;
jQuery(".cover-links-wrap").css({"width":"150rem"})
    jQuery(".cover-links").append(html);
    EightDigits.analytics.sendEvent(config.analytics, "shown_banner")
    jQuery(".smpl-banner").click(function(){
        EightDigits.analytics.sendEvent(config.analytics, "click_banner")
    })
      },
      control: function () {},
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (
            !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
          ) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie(
              "ed-" + config.analytics + "-notshown",
              "on"
            );
          }
          return false;
        }
        main.factory.prototype.start();
      },
    };
    boot = function () {
      return main.factory.prototype.init();
    };
    boot();
  };
  var _ed_Home_Checkup_Banner_Desktop = new EightDigits.sf();
  _ed_Home_Checkup_Banner_Desktop.Home_Checkup_Banner_Desktop();
})();

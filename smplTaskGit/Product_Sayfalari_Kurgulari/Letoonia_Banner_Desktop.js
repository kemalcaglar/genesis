(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Letoonia_Banner_Desktop")) {
    return false;
  }
  EightDigits.sf.prototype.Letoonia_Banner_Desktop = function () {
    var config = {
      scenarioname: "Letoonia_Banner_Desktop",
      analytics: "Letoonia_Banner_Desktop",
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
        var html = `<div class="smpl-banner-letoonia" style="margin-bottom: 15px; cursor:pointer;">
            <img src="https://cdn.8digits.com/log/r/9d38ca4b-6c7f-4922-8fa6-d4348829b150.png">
            </div>`;
        jQuery(".content-partial-shadow").eq(4).before(html);
        EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
        jQuery(".smpl-banner-letoonia").click(function () {
          EightDigits.analytics.sendEvent(config.analytics, "click-banner");
          jQuery(".hoteldetail-content-tab-title.row.nav.nav-tabs a")
            .eq(1)
            .trigger("click");
          jQuery("#announcementList-1 div:first").trigger("click");
          setTimeout(function () {
            jQuery("html,body").animate(
              {
                scrollTop:
                  $("#announcementList-1 div:first").offset().top - 150,
              },
              2000
            );
          }, 100);
        });
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
  var _ed_Letoonia_Banner_Desktop = new EightDigits.sf();
  _ed_Letoonia_Banner_Desktop.Letoonia_Banner_Desktop();
})();

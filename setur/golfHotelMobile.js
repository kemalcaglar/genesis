(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Sueno_Banner_DetayM")) {
      return false;
    }
    EightDigits.sf.prototype.Sueno_Banner_DetayM = function () {
      var config = {
        scenarioname: "Sueno_Banner_DetayM",
        analytics: "Sueno_Banner_DetayM",
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
          var html =
            '<div class="smpl-hotel-banner" style="cursor:pointer;">\
  <img src="https://cdn.8digits.com/log/r/99ac90c4-be1d-4862-895c-125ca5e1cf5d.jpeg">\
  </div>\
  ';
  jQuery(".content-partial-shadow").eq(4).after(html);
          jQuery(".smpl-hotel-banner").click(function () {
            jQuery(".hoteldetail-content-tab-title.row.nav.nav-tabs a")
              .eq(1)
              .trigger("click");
            jQuery("#announcementList-1 div:first").trigger("click");
            setTimeout(function () {
              jQuery("html, body").animate(
                {
                  scrollTop:
                    jQuery("#announcementList-1 div:first").offset().top - 150,
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
    var _ed_Sueno_Banner_DetayM = new EightDigits.sf();
    _ed_Sueno_Banner_DetayM.Sueno_Banner_DetayM();
  })();
  
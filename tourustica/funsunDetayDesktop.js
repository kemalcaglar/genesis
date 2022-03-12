(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Yenilenmis_Badge_DetayD")) {
    return false;
  }
  EightDigits.sf.prototype.Yenilenmis_Badge_DetayD = function () {
    var config = {
      scenarioname: "Yenilenmis_Badge_DetayD",
      analytics: "Yenilenmis_Badge_DetayD",
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
          var hotelID = [
            "3456",
            "3353",
            "610",
          ]

        var html = '<div class="yenilenmis-banner" style="\
        display: flex;\
        "><img src="https://cdn.8digits.com/log/r/ab05dcf8-dbe4-42c0-ad4e-ac0c87f2f9a5.png">\
        </div>';
        if(hotelID.find(x=>x===dataLayer[0].HotelID)){
            jQuery(".slider-title").map(function(){
                if(jQuery(this).text().split("\n")[1] == "Odalar"){
                    jQuery(this).append(html);
                    EightDigits.analytics.sendEvent(config.analytics, "shown_banner");
                }
            })
        }

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
  var _ed_Yenilenmis_Badge_DetayD = new EightDigits.sf();
  _ed_Yenilenmis_Badge_DetayD.Yenilenmis_Badge_DetayD();
})();

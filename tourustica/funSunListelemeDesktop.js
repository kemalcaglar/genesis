(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Yenilenmis_Badge_ListelemeD")) {
    return false;
  }
  EightDigits.sf.prototype.Yenilenmis_Badge_ListelemeD = function () {
    var config = {
      scenarioname: "Yenilenmis_Badge_ListelemeD",
      analytics: "Yenilenmis_Badge_ListelemeD",
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
        var html =
          '<div class="yenilenmis-banner" style="\
display: flex;\
margin-top: 100px;\
position:absolute;\
"><img src="https://cdn.8digits.com/log/r/ab05dcf8-dbe4-42c0-ad4e-ac0c87f2f9a5.png">\
</div>';
jQuery(".hotel-cell.with-row.hotel").map(function(){
  if(hotelID.find(x=>x===jQuery(this).attr("data-hotel-id"))){
    jQuery(this).find(".hotel-name").before(html);
}
})
        var showCount = 0;
        jQuery(window).scroll(function () {
        var top_of_element = jQuery(".yenilenmis-banner").offset().top;
        var bottom_of_element =
            jQuery(".yenilenmis-banner").offset().top +
            jQuery(".yenilenmis-banner").outerHeight();
        var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
        var top_of_screen = jQuery(window).scrollTop();
        if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
            showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_banner") : false;
            showCount++;
        }
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
  var _ed_Yenilenmis_Badge_ListelemeD = new EightDigits.sf();
  _ed_Yenilenmis_Badge_ListelemeD.Yenilenmis_Badge_ListelemeD();
})();

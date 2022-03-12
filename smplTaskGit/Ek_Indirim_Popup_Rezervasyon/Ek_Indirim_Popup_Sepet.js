(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Ek_Indirim_Popup_Sepet")) {
    return false;
  }
  EightDigits.sf.prototype.Ek_Indirim_Popup_Sepet = function () {

    var config = {
      scenarioname: "Ek_Indirim_Popup_Sepet",
      analytics: "Ek_Indirim_Popup_Sepet",
      controlgroup: 0,
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
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      start: function () {
        var couponCode = "YAZ250";
        if (couponCode !== "") {
          document.getElementById("couponCode").value = couponCode;
          var event = new Event("input", {bubbles: true});
          event.simulated = true;
          document.getElementById("couponCode").dispatchEvent(event);
          document.getElementById("couponCode").className += " complete";
        }
        if (window.innerWidth > 575) {
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
            EightDigits.analytics.sendEvent(config.analytics, "shown-couponPaste_Desktop");
            EightDigits.utils.setCookie("ed-" + config.analytics + "-shown", "on");
          }
        } else {
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
            EightDigits.analytics.sendEvent(config.analytics, "shown-couponPaste_Mobil");
            EightDigits.utils.setCookie("ed-" + config.analytics + "-shown", "on");
          }
        }


      },
      control: function () {
        if (window.location.pathname !== "/Sepet") {
          return false;
        }
        if (
          !EightDigits.utils.getCookie(
            "ed-Ek_Indirim_Popup_Rezervasyonhover_Desktop"
          ) && !EightDigits.utils.getCookie(
          "ed-Ek_Indirim_Popup_Rezervasyonclick_coupon_Mobil"
          )
        ) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
            EightDigits.analytics.sendEvent(config.analytics, "notShown");
            EightDigits.utils.setCookie("ed-" + config.analytics + "-notshown", "on");
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
  var _ed_Ek_Indirim_Popup_Sepet = new EightDigits.sf();
  _ed_Ek_Indirim_Popup_Sepet.Ek_Indirim_Popup_Sepet();
})();

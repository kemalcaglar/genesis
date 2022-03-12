(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma")) {
    return false;
  }
  EightDigits.sf.prototype.Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma = function () {

    var config = {
      scenarioname: "Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma",
      analytics: "Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma",
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
        if (jQuery(".hotel-list-page-header")[0].innerText === "Oksijen Okurları İçin Seçtik Otelleri"){
          jQuery(".hotel-list-page-header")[0].innerText = "Oksijen Okurları İçin Seçtik";
          EightDigits.analytics.sendEvent(config.analytics, "shown-editedTitle");
        }
        if (jQuery(".hotel-filter-mobile-display-block .active.sub-breadcrumb")[0].innerText === " Oksijen Okurları İçin Seçtik Otelleri"){
          jQuery(".hotel-filter-mobile-display-block .active.sub-breadcrumb")[0].innerText = " Oksijen Okurları İçin Seçtik"
          EightDigits.analytics.sendEvent(config.analytics, "shown-editedTitle");
        }
      },
      control: function () {
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
            EightDigits.analytics.sendEvent(config.analytics, "notShown-editedTitle");
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
  var _ed_Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma = new EightDigits.sf();
  _ed_Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma.Oksijen_Okurlari_Otelleri_Yazsisini_Kaldirma();
})();



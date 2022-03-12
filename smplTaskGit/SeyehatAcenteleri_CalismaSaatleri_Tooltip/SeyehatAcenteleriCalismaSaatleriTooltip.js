(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Seyehat_Acenteleri_Calisma_Saatleri_ToolTip")) {
    return false;
  }
  EightDigits.sf.prototype.Seyehat_Acenteleri_Calisma_Saatleri_ToolTip = function () {

    var config = {
      scenarioname: "Seyehat_Acenteleri_Calisma_Saatleri_ToolTip",
      analytics: "Seyehat_Acenteleri_Calisma_Saatleri_ToolTip",
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
        var agentaMsg = "Pandemi tedbirleri kapsamında ofisimiz kapalıdır.<br> Tüm talepleriniz için 444 0 738 numaralı<br> Çağrı Merkezi'mizden bize ulaşabilirsiniz.";
        var otherMsg = "Pandemi tedbirleri kapsamında ofisimiz kapalıdır.<br> Tüm talepleriniz için ofisimizin <br> sabit hattı üzerinden bize ulaşabilirsiniz.";

        jQuery(".card-style .acenta").parent().find(".tooltip-content-style").html(agentaMsg);
        jQuery(".card-style .h3-style").parent().find(".tooltip-content-style").html(otherMsg);
        jQuery(".tooltip-content").css("left", "-95%");

      },
      control: function () {
        if (window.location.pathname !== "/yetkili-seyahat-acenteleri") {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (window.innerWidth > 767) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
              EightDigits.analytics.sendEvent(config.analytics, "notShown-bannerDesktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + "-notshown", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
              EightDigits.analytics.sendEvent(config.analytics, "notShown-bannerMobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + "-notshown", "on");
            }
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
  var _ed_Seyehat_Acenteleri_Calisma_Saatleri_ToolTip = new EightDigits.sf();
  _ed_Seyehat_Acenteleri_Calisma_Saatleri_ToolTip.Seyehat_Acenteleri_Calisma_Saatleri_ToolTip();
})();



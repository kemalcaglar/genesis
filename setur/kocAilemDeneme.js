(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Koc_Ailem_Iade")) {
    return false
  }
  EightDigits.sf.prototype.Koc_Ailem_Iade = function () {
    var config = {
      scenarioname: "Koc_Ailem_Iade",
      analytics: "Koc_Ailem_Iade",
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
        var html = `<span style="font-weight:900; display:flex; margin-top:10px; margin-left:5px;">72 saate kadar iade garantisinden ücretsiz yararlandınız.</span>`
        if (window.location.pathname == "/Sepet") {
          if (jQuery("#kc").val() == 1) {
            jQuery("#sepetContainer .booking-item .promotion-list").after(html)
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'shown');
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            }
          }
        }
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
  var _ed_Koc_Ailem_Iade = new EightDigits.sf();
  _ed_Koc_Ailem_Iade.Koc_Ailem_Iade();
})();
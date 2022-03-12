(function () {
  EightDigits.sf.prototype.kargoedit = function () {

      var config = {
          scenarioname: "kargoedit",
          analytics: "kargoedit",
          controlgroup: 0,
          text: "Bu Üründe Kargo Ücretsiz"
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
              if (randomVal < 100 * randomControlRatio) {
                  return true;
              } else {
                  return false;
              }
          },
          start: function () {
              jQuery('#addBasketForm').after(jQuery("div[tabindex='1482']"));
              jQuery('.p-extra-info:eq(0)').css('padding', '10px 10px');
              jQuery('.p-extra-info img').css('width', '32px')
              jQuery('.cargo-content p').css('font-size', '11px');
              jQuery('.cargo-content h2').text(config.text);
              jQuery('.cargo-content h2').css('font-weight', '600');
              jQuery('.cargo-content h2').css('margin-top', '15px');
              jQuery('.cargo-content h2').css('line-height', '0px');
              jQuery('.cargo-content p').remove()
              EightDigits.analytics.sendEvent(config.analytics, "Shown");
          },
          init: function () {
              if (parseInt(jQuery('.p-price p:eq(0)').text().split(',')[0]) < 125) {
                  return false
              }
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
  var _ed_kargoedit = new EightDigits.sf();
  _ed_kargoedit.kargoedit();
})();
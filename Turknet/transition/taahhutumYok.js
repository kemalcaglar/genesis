(function () {
  EightDigits.sf.prototype.taahhutumYok_IadeGarantisi = function () {

      var config = {
          scenarioname: "taahhutumYok_IadeGarantisi",
          analytics: "taahhutumYok_IadeGarantisi",
          controlgroup: 90,
          image: "//cdn.8digits.com/f/u/xocaqp4j/4e376859-ed94-4dda-b61a-1649f155a2ee.jpg",
          newTab: true
      };

      if (document.querySelectorAll('input[label="TurkNet\'liyim"]:checked').length > 0) {
          EightDigits.console.log("Input checked.");
          return false;
      }

      var main = {
          "factory": function () {
              return true;
          }
      };

      main.factory.prototype = {
          random: function () {
              var randomVal = 0;
              if (EightDigits.utils.getCookie('ed_' + config.scenarioname) == null) {
                  randomVal = Math.floor((Math.random() * 10000) + 1);
                  EightDigits.utils.setCookie('ed_' + config.scenarioname, randomVal);
              } else {
                  randomVal = parseInt(EightDigits.utils.getCookie('ed_' + config.scenarioname));
              }
              if (randomVal < 100 * 95) {
                  return true;
              } else {
                  return false;
              }
          },
          html: function () {
              var target = "_self";
              if (config.newTab) target = "_target";
              return '\
                  <div id="_eightdigits_aknsiz" class="_eightdigits_popup_hiz" style="    width: 600px;height: 400px;position: fixed;left: 0;right: 0;top: 0;bottom: 0;margin: auto;background-size: 100%;background-image: url(' + config.image + ');z-index: 999999999;">\
                      <a class="_eightdigits_redirection" target="' + target + '" href="/taahhutsuz-ozgur-iletisim-abonelik/" style="    position: absolute;width: 600px;height: 400px;left: 0;right: 0;margin: auto;top: 0px;cursor: pointer;"></a>\
                      <div class="_eightdigits_popup_close" style="color:transparent;position: absolute;width: 40px;height: 40px;font-size: 20px;right: 1px;top: 1px;cursor: pointer;text-align: center;"> X </div>\
                  </div>\
                  <div id="_eightdigits_aknsiz_b" class="_eightdigits_backover" style="position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 999999; opacity: 0.8; background-color: rgb(0, 0, 0);"></div>\
              ';
          },
          action: function () {
              remove = function () {
                  try {
                      document.getElementById("_eightdigits_aknsiz").remove();
                      document.getElementById("_eightdigits_aknsiz_b").remove();
                  } catch (ex) {
                      document.querySelectorAll('._eightdigits_popup_hiz, ._eightdigits_backover').style.display = "none";
                  }
              };
              document.getElementsByClassName('_eightdigits_popup_close')[0].onclick = function () {
                  remove();
                  EightDigits.analytics.sendEvent(config.analytics, "CloseClick");
              };
              document.getElementsByClassName('_eightdigits_redirection')[0].onclick = function () {
                  EightDigits.analytics.sendEvent(config.analytics, "Click");
                  remove();
              };
          },
          start: function () {
              if (window.location.href.indexOf('promo') === -1) {
                  if (window.location.pathname.indexOf('destek') > -1 || window.location.pathname.indexOf('online-islemler') > -1 || window.location.pathname.indexOf('ilk-yardim') > -1) {
                      EightDigits.utils.setCookie('ed-exit-cancel', 'on');
                  }
                  if (EightDigits.utils.getCookie('ed-exit-cancel') === null && EightDigits.utils.getCookie('ed-nv-not-contracted-user') !== null) {
                      document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeEnd", main.factory.prototype.html());
                      EightDigits.analytics.sendEvent(config.analytics, "Shown");
                      main.factory.prototype.action();
                  }
              }
          },
          init: function () {
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (window.location.href.indexOf('promo') === -1) {
                      if (EightDigits.utils.getCookie('ed-exit-cancel') === null) {
                          EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                          return false;
                      }
                  }
              }
              main.factory.prototype.start();
          }
      };

      boot = function () {
          if(EightDigits.utils.getCookie('ed-KobiVisited-control')!=="on" && window.location.href.indexOf('/kobi')===-1){

              return main.factory.prototype.init();

          }
      };

      boot();

  };
  var eightdigitstaahhutumYok_IadeGarantisi = new EightDigits.sf();
  eightdigitstaahhutumYok_IadeGarantisi.taahhutumYok_IadeGarantisi();
})();

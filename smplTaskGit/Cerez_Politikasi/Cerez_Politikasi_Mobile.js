(function () {
  if (EightDigits.sf.prototype.hasOwnProperty('Cerez_Politikasi_Mobile')) {
    return false;
  }
  EightDigits.sf.prototype.Cerez_Politikasi_Mobile = function () {

    var config = {
      scenarioname: 'Cerez_Politikasi_Mobile',
      analytics: 'Cerez_Politikasi_Mobile',
      controlgroup: 0,
    };

    var main = {
      'factory': function () {
        return true;
      },
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
        var cerezHtml = '\
                    <div id="' + config.scenarioname + '_cerez_main" style="background-color: rgba(0, 0, 0,80%);z-index: 9999;position: fixed;left: 0;bottom: 0;">\
                        <div id="' + config.scenarioname + '_closeCerez" style="position: absolute;top: 6px;right: -13px;width: 38px;height: 38px;cursor: pointer;color: #fff;font-size: 21px;">&times;</div>\
                        <div id="' + config.scenarioname + '_mainText" style="color: #fff;padding: 10px;">\
                          <h5 style="font-family: Helvetica;font-size: 12px;line-height: 1.25;text-align: left;color: rgb(255, 255, 255);padding-left: 10px;padding-right: 24px;margin-bottom: 8px;">Çerez Kullanımı</h5>\
                          <p style="font-family: Helvetica;font-size: 12px;line-height: 1.25;text-align: left;color: rgb(255, 255, 255);padding-left: 10px;padding-right: 24px;margin-bottom: 8px;">Size daha iyi hizmet verebilmek için sitemizde çerezlere yer veriyoruz. Sitemizi kullandığınız sürece Çerezler hakkında detaylı bilgi almak için <a href="https://www.setur.com.tr/cerez-politikasi" style="font-family: Helvetica;font-size: 12px;font-weight: bold;text-align: left;color: rgb(255, 255, 255) !important;text-decoration: underline;">Çerez Aydınlatma Metni</a>’ni incelemenizi rica ederiz.</p></div>\
                    </div>';

        if (EightDigits.utils.getCookie('_ed_' + config.scenarioname + '_shown') !== 'on') {
          EightDigits.utils.setCookie('_ed_' + config.scenarioname + '_shown', 'on');
          jQuery('.global-wrap').before(cerezHtml);
          EightDigits.analytics.sendEvent(config.analytics, 'shown');
        }


        jQuery('#' + config.scenarioname + '_closeCerez').click(function () {
          jQuery('#' + config.scenarioname + '_cerez_main').remove();
          if (EightDigits.utils.getCookie('_ed_' + config.scenarioname + '_clickCloseBtn') !== 'on') {
            EightDigits.utils.setCookie('_ed_' + config.scenarioname + '_clickCloseBtn', 'on');
            EightDigits.analytics.sendEvent(config.analytics, 'click_closeBtn');
          }
        });
        jQuery('#' + config.scenarioname + '_cerez_main p a').click(function () {
          if (EightDigits.utils.getCookie('_ed_' + config.scenarioname + '_clickLinkBtn') !== 'on') {
            EightDigits.utils.setCookie('_ed_' + config.scenarioname + '_clickLinkBtn', 'on');
            EightDigits.analytics.sendEvent(config.analytics, 'click_linkBtn');
          }
        });
      },
      control: function () {
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
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
  var _ed_Cerez_Politikasi_Mobile = new EightDigits.sf();
  _ed_Cerez_Politikasi_Mobile.Cerez_Politikasi_Mobile();
})();

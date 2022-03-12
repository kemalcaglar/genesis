(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Aksam_Kampanyasi_Rez_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Aksam_Kampanyasi_Rez_Desktop = function () {
        var config = {
            scenarioname: "Aksam_Kampanyasi_Rez_Desktop",
            analytics: "Aksam_Kampanyasi_Rez_Desktop",
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
                if (EightDigits.utils.getCookie('_ed_' + 'Aksam_Kampanyasi_Desktop' + '_copyKod') === '1') {
                  jQuery('#txtResponseSummaryPromotionCode').attr('value', 'HZRNFIRSAT');
                  EightDigits.analytics.sendEvent(config.analytics, 'shown_kod');
                }
              },
            control: function () {
            },
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
    var _ed_Aksam_Kampanyasi_Rez_Desktop = new EightDigits.sf();
    _ed_Aksam_Kampanyasi_Rez_Desktop.Aksam_Kampanyasi_Rez_Desktop();
  })();
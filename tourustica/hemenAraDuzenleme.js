(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Search_Tamam_Button_Konumlandirma")) {
        return false
    }
    EightDigits.sf.prototype.Search_Tamam_Button_Konumlandirma = function () {
        var config = {
            scenarioname: "Search_Tamam_Button_Konumlandirma",
            analytics: "Search_Tamam_Button_Konumlandirma",
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
                jQuery("#search-box-hotel-tab .mobile-button.visible-xs").css({"bottom":"60px"});
                EightDigits.analytics.sendEvent(config.analytics, 'shown_button');
                jQuery("#search-box-hotel-tab .mobile-button.visible-xs").click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click_button');
                })
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
    var _ed_Search_Tamam_Button_Konumlandirma = new EightDigits.sf();
    _ed_Search_Tamam_Button_Konumlandirma.Search_Tamam_Button_Konumlandirma();
  })();
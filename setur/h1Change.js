(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Yaz_Otelleri_Baslik_Change_Mobil")) {
        return false
    }
    EightDigits.sf.prototype.Yaz_Otelleri_Baslik_Change_Mobil = function () {
        var config = {
            scenarioname: "Yaz_Otelleri_Baslik_Change_Mobil",
            analytics: "Yaz_Otelleri_Baslik_Change_Mobil",
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
                if(jQuery(".breadcrumb.hotel-list-breadcrumb.hotel-filter-mobile-display-block .sub-breadcrumb").text().trim().split("\n")[0] == "Yaz Fırsatları Otelleri"){
                    jQuery(".breadcrumb.hotel-list-breadcrumb.hotel-filter-mobile-display-block .sub-breadcrumb").text("Yaz Fırsatları");
                    EightDigits.analytics.sendEvent(config.analytics, 'shown_baslik');
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
    var _ed_Yaz_Otelleri_Baslik_Change_Mobil = new EightDigits.sf();
    _ed_Yaz_Otelleri_Baslik_Change_Mobil.Yaz_Otelleri_Baslik_Change_Mobil();
  })();
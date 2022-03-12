(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Letoonia_Banner")) {
        return false
    }
    EightDigits.sf.prototype.Letoonia_Banner = function () {
        var config = {
            scenarioname: "Letoonia_Banner",
            analytics: "Letoonia_Banner",
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
                var html = '<div class="letoonia-banner" style="\
                display: flex;\
                margin-top: 100px;\
                position:absolute;\
                "><img src="https://cdn.8digits.com/log/r/ab05dcf8-dbe4-42c0-ad4e-ac0c87f2f9a5.png">\
                </div>'
                jQuery(".hotel-name").map(function () {
                    if (jQuery(this).text().trim().split("Touristica")[0].trim() == "Fun & Sun Family Gypsophila Village" || jQuery(this).text().trim().split("Touristica")[0].trim() == "Sun Family Gypsophila Marine") {
                        jQuery(this).before(html);
                        EightDigits.analytics.sendEvent(config.analytics, "shown_banner");
                    }
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
    var _ed_Letoonia_Banner = new EightDigits.sf();
    _ed_Letoonia_Banner.Letoonia_Banner();
})();

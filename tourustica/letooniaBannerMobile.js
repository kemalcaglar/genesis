(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Letoonia_Banner_Mobile")) {
        return false
    }
    EightDigits.sf.prototype.Letoonia_Banner_Mobile = function () {
        var config = {
            scenarioname: "Letoonia_Banner_Mobile",
            analytics: "Letoonia_Banner_Mobile",
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
                "><img src="https://cdn.8digits.com/log/r/6df84b32-fa17-4f42-9db1-c6d814fd7265.png">\
                </div>'
                jQuery(".hotel-name").map(function () {
                    if (jQuery(this).text().trim() == "Club & Hotel Letoonia") {
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
    var _ed_Letoonia_Banner_Mobile = new EightDigits.sf();
    _ed_Letoonia_Banner_Mobile.Letoonia_Banner_Mobile();
})();
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("maximumKartRemove")) {
        return false
    }
    EightDigits.sf.prototype.maximumKartRemove = function () {

        var config = {
            scenarioname: "maximumKartRemove",
            analytics: "maximumKartRemove",
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
                jQuery('#tab1 .col-md-3 .col-md-12 a[href*="dijital-bankamatik-karti"]').parent().parent().parent().parent().remove();
                jQuery('#tab1 .col-md-3 .col-md-12 a[href*="/TR/kartlar/maxipara-kart"]').parent().parent().parent().parent().remove();
                jQuery('#tab1 .col-md-3 .col-md-12 a[href*="/TR/kartlar/maximum-gaming-kart"]').parent().parent().parent().parent().remove();
                jQuery('#tab1 .col-md-3 .col-md-12 a[href*="1907-fenerbahce-maximum-gaming-kart"]').parent().parent().parent().parent().remove();
		        jQuery('#tab1 .col-md-3 .col-md-12 a[href*="/TR/kartlar/dogasever-maxipara-kart"]').parent().parent().parent().parent().remove();
            },
            control: function () {
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
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
    var _ed_maximumKartRemove = new EightDigits.sf();
    _ed_maximumKartRemove.maximumKartRemove();
})();
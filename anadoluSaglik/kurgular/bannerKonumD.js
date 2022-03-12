(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Youtube_Vital_Banner_Konum")) {
        return false
    }
    EightDigits.sf.prototype.Youtube_Vital_Banner_Konum = function () {
        var config = {
            scenarioname: "Youtube_Vital_Banner_Konum",
            analytics: "Youtube_Vital_Banner_Konum",
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
                jQuery('h2').eq(3).before(jQuery(".random-banners.editorWrap"))
                jQuery(".random-banners.editorWrap").css({ "margin-bottom": "30px","margin-top":"30px" })
                jQuery(".random-banners.editorWrap").click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "click_banner");
                })
                var showCount = 0;
                jQuery(window).scroll(function () {
                    var top_of_element = jQuery(".random-banners.editorWrap").offset().top;
                    var bottom_of_element =
                        jQuery(".random-banners.editorWrap").offset().top +
                        jQuery(".random-banners.editorWrap").outerHeight();
                    var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                    var top_of_screen = jQuery(window).scrollTop();
                    if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                        showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_banner") : false;
                        showCount++;
                    }
                });
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
    var _ed_Youtube_Vital_Banner_Konum = new EightDigits.sf();
    _ed_Youtube_Vital_Banner_Konum.Youtube_Vital_Banner_Konum();
})();
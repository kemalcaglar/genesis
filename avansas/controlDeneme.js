(function () {
    EightDigits.sf.prototype.buttoncolor = function () {

        var config = {
            scenarioname: "buttoncolor",
            analytics: "MobilAnaSayfa_buttoncolor",
            controlgroup: 20
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
                var random = Math.floor(Math.random() * 2000);
                var analyticSearch = '';
                var analyticSticky = '';
                var analyticShown = '';

                if (random > 1000) {
                    jQuery('.search-button:eq(0)').css("background-color", "orange");
                    analyticSearch = '_Search_Orange'
                    analyticSticky = '_Sticky_Green'
                    analyticShown = '_Orange'
                } else {
                    jQuery('.search-button:eq(0)').css("background-color", "#00965f");
                    jQuery('.sticky-footer,collapse in visible-xs').css("background-color", "orange");
                    analyticSearch = '_Search_Green'
                    analyticSticky = '_Sticky_Orange'
                    analyticShown = '_Green'
                }

                jQuery('.sticky-footer,collapse in visible-xs').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics + analyticSticky, "Click");
                })

                jQuery('.search-button:eq(0)').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics + analyticSearch, "Click");
                })

                EightDigits.analytics.sendEvent(config.analytics + analyticShown, "Shown");
            },
            init: function () {
                var _exec = main.factory.prototype.random();
                if (!_exec) {

                    jQuery('.sticky-footer,collapse in visible-xs').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics + '_Sticky_NotShown', "Click");
                    })

                    jQuery('.search-button:eq(0)').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics + '_Search_NotShown', "Click");
                    })

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
    var _ed_buttoncolor = new EightDigits.sf();
    _ed_buttoncolor.buttoncolor();
})();
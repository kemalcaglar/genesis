(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Doktorlar_Event")) {
        return false
    }
    EightDigits.sf.prototype.Doktorlar_Event = function () {
        var config = {
            scenarioname: "Doktorlar_Event",
            analytics: "Doktorlar_Event",
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
                jQuery(".h-b-right a:first").click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click-callCenterTop');
                })
                jQuery(".h-b-right a").eq(1).click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click-randevu');
                })
                jQuery(".btn.small.inverted.white.clickshow").click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click-islemler');
                })
                jQuery(".infotag-contact:first a").eq(0).click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click-callCenterBottom');
                })
                jQuery(".infotag-contact:first a").eq(1).click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'click-iletisim');
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
    var _ed_Doktorlar_Event = new EightDigits.sf();
    _ed_Doktorlar_Event.Doktorlar_Event();
  })();
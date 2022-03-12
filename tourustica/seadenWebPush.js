(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Seaden_Otelleri_Webpush_Tag")) {
        return false
    }
    EightDigits.sf.prototype.Seaden_Otelleri_Webpush_Tag = function () {

        var config = {
            scenarioname: "Seaden_Otelleri_Webpush_Tag",
            analytics: "Seaden_Otelleri_Webpush_Tag",
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
               
            },
            control: function () {
                if(window.location.href.indexOf("?utm_source=8digit&utm_medium=webpush&utm_campaign=oteloneri")>-1){
                    OneSignal.push(["sendTag", "seadenClick", "on"]);
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'shown-page');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                    }
                }
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
    var _ed_Seaden_Otelleri_Webpush_Tag = new EightDigits.sf();
    _ed_Seaden_Otelleri_Webpush_Tag.Seaden_Otelleri_Webpush_Tag();
})();



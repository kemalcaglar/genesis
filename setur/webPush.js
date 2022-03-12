(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Son_Dakika_Otelleri_Tagleme")) {
        return false
    }
    EightDigits.sf.prototype.Son_Dakika_Otelleri_Tagleme = function () {

        var config = {
            scenarioname: "Son_Dakika_Otelleri_Tagleme",
            analytics: "Son_Dakika_Otelleri_Tagleme",
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
                if(window.location.pathname.indexOf("son-dakika-otelleri") > -1){
                    OneSignal.push(["sendTag", "sonDakikaOtelleri", "true"]);
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
    var _ed_Son_Dakika_Otelleri_Tagleme = new EightDigits.sf();
    _ed_Son_Dakika_Otelleri_Tagleme.Son_Dakika_Otelleri_Tagleme();
})();

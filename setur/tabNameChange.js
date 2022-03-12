(function () {
    EightDigits.sf.prototype.Tab_Change = function () {

        var config = {
            scenarioname: "tabNameChangeRegular",
            analytics: "tabNameChangeRegular",
            controlgroup: 0,
            text: "Tatilin Bekliyor!⛱",
            text2: "Erken Rezervasyon Fırsatını Kaçırma!"
        };

        var main = {
            "factory": function () {
                return true;
            }
        };
        var interval;
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
                if(parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<4999){
                sessionStorage.setItem('OldTitle_Page', document.title);
                document.addEventListener('visibilitychange', function () {
                    if (document.hidden) {
                        document.title = config.text
                        var counter = 0;
                        interval = setInterval(function(){
                            if(counter % 2 == 0){
                                document.title  = sessionStorage.getItem('OldTitle_Page');
                            }
                            else{
                                document.title  = config.text;
                            }
                           counter = counter + 1;
                        },2000)
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                            EightDigits.analytics.sendEvent(config.analytics, "Shown");
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                        }
                    }
                }, false);
                document.addEventListener('visibilitychange', function () {
                    if (!document.hidden) {
                        clearInterval(interval);
                        var oldTitle =  sessionStorage.getItem('OldTitle_Page');
                        if (oldTitle != null) document.title = oldTitle;
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shownbacktotab')) {
                            EightDigits.analytics.sendEvent(config.analytics, "ShownBackToTab");
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shownbacktotab', 'on')
                        }
                    }
                }, false);
            }else {
                sessionStorage.setItem('OldTitle_Page', document.title);
                document.addEventListener('visibilitychange', function () {
                    if (document.hidden) {
                        document.title = config.text2
                        var counter = 0;
                        interval = setInterval(function(){
                            if(counter % 2 == 0){
                                document.title  = sessionStorage.getItem('OldTitle_Page');
                            }
                            else{
                                document.title  = config.text2;
                            }
                           counter = counter + 1;
                        },2000)
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                            EightDigits.analytics.sendEvent(config.analytics, "Shown");
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                        }
                    }
                }, false);
                document.addEventListener('visibilitychange', function () {
                    if (!document.hidden) {
                        clearInterval(interval);
                        var oldTitle =  sessionStorage.getItem('OldTitle_Page');
                        if (oldTitle != null) document.title = oldTitle;
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shownbacktotab')) {
                            EightDigits.analytics.sendEvent(config.analytics, "ShownBackToTab");
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shownbacktotab', 'on')
                        }
                    }
                }, false);
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
                    document.addEventListener('visibilitychange', function () {
                        if (document.hidden) {
                            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                                EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                                EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                            }
                        }
                    }, false);
                    document.addEventListener('visibilitychange', function () {
                        if (!document.hidden) {
                            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshownbacktotab')) {
                                EightDigits.analytics.sendEvent(config.analytics, "NotShownBackToTab");
                                EightDigits.utils.setCookie('ed-' + config.analytics + '-notshownbacktotab', 'on')
                            }
                        }
                    }, false);
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
    var _ed_Tab_Change = new EightDigits.sf();
    _ed_Tab_Change.Tab_Change();
})();

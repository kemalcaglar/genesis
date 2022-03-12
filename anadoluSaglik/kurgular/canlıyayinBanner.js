(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("CanliYayin_Banner")) {
        return false
    }
    EightDigits.sf.prototype.CanliYayin_Banner = function () {
        var config = {
            scenarioname: "CanliYayin_Banner",
            analytics: "CanliYayin_Banner",
            controlgroup: 10
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
                jQuery(".random-banners.editorWrap").css({"height":"140px"})
                jQuery('.vitalBanner').css({"background-repeat":"no-repeat","background-size":"640px 140px","height":"140px","background-image":"url(https://cdn.8digits.com/log/r/1eda3b15-c143-4e52-be95-5af721947319.jpeg)"})
                jQuery('.youtubeBanner').css({"background-repeat":"no-repeat","background-size":"640px 140px","height":"140px","background-image":"url(https://cdn.8digits.com/log/r/1eda3b15-c143-4e52-be95-5af721947319.jpeg)"})
                jQuery('.youtubeBanner').attr('href','http://bit.ly/Hemen-Abone-Olun​')
                jQuery('.vitalBanner').attr('href','http://bit.ly/Hemen-Abone-Olun​')
                jQuery('.vitalBanner').click(function(){
                    console.log("hey")
                })
                jQuery('.youtubeBanner').click(function(){
                    console.log("hey")
                })
                if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                }
            },
            control: function () {
              if(window.location.pathname==="/blog/genetik-kanser-mi-kalitsal-kanser-mi"){
                  return false;
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
    var _ed_CanliYayin_Banner = new EightDigits.sf();
    _ed_CanliYayin_Banner.CanliYayin_Banner();
})();
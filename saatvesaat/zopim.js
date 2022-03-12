(function () {
    EightDigits.sf.prototype.zopimchat = function () {
        /**
         * Base template file for 8digits.com custom scripts
         * @Wecii
         * @version 1.0.0
         */


        /* General Configurations */

        var config = {
            scenarioname: "zopimchat",
            analytics: "zopimchat",
            controlgroup: 100
        };

        /******/

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
                window.$zopim || (function (d, s) {
                    var z = $zopim = function (c) {
                            z._.push(c)
                        },
                        $ = z.s =
                        d.createElement(s),
                        e = d.getElementsByTagName(s)[0];
                    z.set = function (o) {
                        z.set.
                        _.push(o)
                    };
                    z._ = [];
                    z.set._ = [];
                    $.async = !0;
                    $.setAttribute("charset", "utf-8");
                    $.src = "https://v2.zopim.com/?2lfBHWtw8du39O6Wjsf9DgU7vsdDRtjM";
                    z.t = +new Date;
                    $.
                    type = "text/javascript";
                    e.parentNode.insertBefore($, e)
                })(document, "script");

                setTimeout(function () {
                    $zopim(function() {
                        $zopim.livechat.theme.setColors({badge: '#FFFFFF', primary: '#000000'});
                        $zopim.livechat.theme.reload(); // apply new theme settings
                    });
                    if(!EightDigits.utils.getCookie("chatDisabled") || EightDigits.utils.getCookie("chatDisabled") === null){ 
                        $zopim.livechat.badge.show();
                        EightDigits.analytics.sendEvent(config.analytics, "Shown");
                    }
                    $zopim.livechat.window.onHide(function(){
                        EightDigits.utils.setCookie("chatDisabled", "true");
                    });
                }, 50);
            },
            init: function () {
                var _exec = main.factory.prototype.random();
                if (!_exec) {
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
    var eightdigitszopimchat = new EightDigits.sf();
    eightdigitszopimchat.zopimchat();
})();
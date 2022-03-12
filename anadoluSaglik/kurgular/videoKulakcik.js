(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Youtube_Video_Kulakcik")) {
        return false
    }
    EightDigits.sf.prototype.Youtube_Video_Kulakcik = function () {
        var config = {
            scenarioname: "Youtube_Video_Kulakcik",
            analytics: "Youtube_Video_Kulakcik",
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
                if (window.location.pathname.indexOf('/doc-dr-ilker-tinay') > -1) {
                    if (window.innerWidth < 767) {
                        var kulakcik = `
                <a href="https://www.youtube.com/watch?v=RfVlIUVorf4">
                <div id='smpl-video-kulakcik' 
                style='z-index: 999999;
                position: fixed;
                left: 0px;
                top: 15%;
                color: white;
                box-shadow: 1.3px -0.4px 10px 2px #000;
                cursor: pointer;
                justify-content: center;
                text-align: center;
                align-items: center;
                display: flex;
                border-radius: 10px;' 
                class='smpl-video-btn'>
                <img src="https://cdn.8digits.com/log/r/04856cfa-a111-448c-94a6-7e24bb34eea2.png" 
                style="width: 35px;">
                </div>
                </a>
                    `
                        jQuery('body').append(kulakcik);
                        EightDigits.analytics.sendEvent(config.analytics, "shown_kulakcikM");
                        jQuery("#smpl-video-kulakcik").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, "click_kulakcikM");
                        })
                    } else {
                        var kulakcik = `<a href="https://www.youtube.com/watch?v=RfVlIUVorf4">
                <div id='smpl-video-kulakcik' 
                style='z-index: 999999;
                position: fixed;
                left: 0px;
                bottom: 330px;
                background: #ff8b02;
                padding: 10px;
                width: 180px;
                color: white;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                text-shadow: 0.3px 0.6px white;
                cursor: pointer;
                justify-content: center;
                text-align: center;
                align-items: center;
                display: flex;' 
                class='smpl-video-btn'>
                <img src="https://cdn.8digits.com/log/r/04856cfa-a111-448c-94a6-7e24bb34eea2.png" 
                style="width: 50px;">
                <span>Prostat Kanserinde Tanı ve Tedavideki Güncel Gelişmeler</span>
                </div>
                </a>`
                        jQuery('body').append(kulakcik);
                        EightDigits.analytics.sendEvent(config.analytics, "shown_kulakcik");
                        jQuery("#smpl-video-kulakcik").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, "click_kulakcik");
                        })
                    }
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
    var _ed_Youtube_Video_Kulakcik = new EightDigits.sf();
    _ed_Youtube_Video_Kulakcik.Youtube_Video_Kulakcik();
})();
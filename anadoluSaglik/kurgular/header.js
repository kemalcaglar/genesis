(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Meme_Sagligi_Header")) {
        return false
    }
    EightDigits.sf.prototype.Meme_Sagligi_Header = function () {
        var config = {
            scenarioname: "Meme_Sagligi_Header",
            analytics: "Meme_Sagligi_Header",
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
                if (window.innerWidth > 768) {
                    var html = `
                <div class="${config.scenarioname}-desktop">
                    <a href="http://bit.ly/Hemen-Abone-Olun">
                        <img style="width:100%;" src="https://cdn.8digits.com/log/r/7a232566-e1c1-4b85-bdbf-475e7f40bf38.jpeg">
                    </a>
                </div>
                `
                    jQuery(".section.header").before(html)
                    EightDigits.analytics.sendEvent(config.analytics, "shown-header")
                    jQuery("Meme_Sagligi_Header-desktop").click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "click-header")
                    })
                } else {
                    var html = `
                <div class="${config.scenarioname}-mobil">
                    <a href="http://bit.ly/Hemen-Abone-Olun">
                        <img style="width:100%;" src="https://cdn.8digits.com/log/r/63336eac-68df-44d4-a882-0079ae010a87.jpeg">
                    </a>
                </div>
                `
                    jQuery("#wrapper").before(html);
                        if (jQuery("#wrapper").length === 1) {
                            jQuery(".h-mmenu-button.mobilemenu-trigger").css({ "top": "23.9rem" })
                            jQuery(".h-mphone-button.event-tel-link").css({ "top": "24.5rem" })
                            //EightDigits.analytics.sendEvent(config.analytics, "shown-header")
                            jQuery("Meme_Sagligi_Header-mobil").click(function () {
                                //EightDigits.analytics.sendEvent(config.analytics, "click-header")
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
    var _ed_Meme_Sagligi_Header = new EightDigits.sf();
    _ed_Meme_Sagligi_Header.Meme_Sagligi_Header();
})();
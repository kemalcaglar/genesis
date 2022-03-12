(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Zafer_Bayrami_Banner")) {
        return false
    }
    EightDigits.sf.prototype.Zafer_Bayrami_Banner = function () {
        var config = {
            scenarioname: "Zafer_Bayrami_Banner",
            analytics: "Zafer_Bayrami_Banner",
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
                var now = new Date();
                var startDate = new Date("Aug 30, 2021 00:01:00").getTime();
                var endDate = new Date("Aug 30, 2021 23:59:59").getTime();
        
                if (now >= startDate && now <= endDate) { 
                if (window.innerWidth < 900) {
                    var innerWidth = (window.innerWidth - 320) / 2 + 'px;'
                    var html = `<div id="ed-` + config.scenarioname + `-header" class="smpl-zafer-bayrami-banner" style="background: #c02126;display:flex;justify-content:center;">
                    <div style="background-image: url(//cdn.8digits.com/log/r/9a0d9a93-3517-4279-933c-57f86d3d27fc.jpeg);background-size:100%;width:375px;height:56px;background-repeat: no-repeat;"></div>
                    </div>`


                    jQuery('#main-header').prepend(html);
                    EightDigits.analytics.sendEvent(config.analytics,'shown_mobilBanner');
                    jQuery('.global-wrap').attr('style', 'margin-top:128px !important;');
                }
                else {
                    var innerWidth = (window.innerWidth - 1042) / 2 + 'px;'
                    var html = `<div id="ed-` + config.scenarioname + `-header" class="smpl-zafer-bayrami-banner" style="background: linear-gradient(90deg, rgba(192,33,38,1) 0%, rgba(222,30,41,1) 75%, rgba(222,30,41,1) 100%);
                    width:100%;">
                    <div style="background-image: url(//cdn.8digits.com/log/r/aa369ac2-0c25-4401-88db-d26dee844da5.jpeg);background-size:100%;width:1042px;height:46px;background-repeat: no-repeat;margin-left: `+ innerWidth + `"></div>
                    </div>`


                    jQuery('#main-header').prepend(html);
                    EightDigits.analytics.sendEvent(config.analytics,'shown_desktopBanner');


                    if (EightDigits.dataLayer.data.pageType === "home") {
                        jQuery('.global-wrap').css('margin-top', '132px');
                    }
                    else if (EightDigits.dataLayer.data.pageType === "category") {
                        jQuery('.global-wrap').css('margin-top', '138px');
                    }
                    else if (EightDigits.dataLayer.data.pageType === "product") {
                        jQuery('.global-wrap').css('margin-top', '154px');
                    }
                    else {
                        jQuery('.global-wrap').css('margin-top', '128px');
                    }

                    jQuery(window).resize(function () {

                        innerWidth = (window.innerWidth - 1042) / 2 + 'px'
                        jQuery('#ed-' + config.scenarioname + '-header div').css('margin-left', innerWidth);

                    });
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
    var _ed_Zafer_Bayrami_Banner = new EightDigits.sf();
    _ed_Zafer_Bayrami_Banner.Zafer_Bayrami_Banner();
})();
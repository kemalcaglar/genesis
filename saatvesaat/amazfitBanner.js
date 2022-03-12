(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Diesel_Banner_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Diesel_Banner_Desktop = function () {
        var config = {
            scenarioname: "Diesel_Banner_Desktop",
            analytics: "Diesel_Banner_Desktop",
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
                if (window.location.href.indexOf("checkout") == -1) {
                    var dateChecker = function () {
                        var now = new Date();
                        var startDate = new Date("Aug 24, 2021 11:09:00").getTime();
                        var endDate = new Date("Aug 25, 2021 11:59:59").getTime();

                        if (now >= startDate && now <= endDate) {
                            console.log('true')
                            return true;
                        }
                        else {
                            console.log('false')
                            return false;
                        }
                    }
                    if (dateChecker()) {
                    var html = `<div id="ed-header_sayac" class="smpl-diesel-banner" style="display: flex;justify-content: center;margin-bottom: 13px;position: fixed;top: 0;z-index: 999999;text-align: center;align-items: center;width: 100%;background: #b8001a;
                    border-top: 1px solid #fff;">
        <img src="https://cdn.8digits.com/log/r/3e357304-8f54-4f32-9c1b-da7cfb977af1.gif" style="min-width: 600px;height: 113px;margin-top: -3px;">
        <div id="smpl-timer" style="color:white;text-align: center;display:flex;position: absolute; right: 100px;">
            <div id="_timer_hours" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>
            <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Saat</div>
            <div id="_timer_minutes" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>
            <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Dakika</div>
            <div id="_timer_seconds" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>
            <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Saniye</div>
        </div>
</div>`
                    jQuery(".header-language-background.mnm-sticky").before(html);
                    jQuery(".header-language-background.mnm-sticky").hide();
                    jQuery(".main-container").css({ "margin-top": "80px" });
                    jQuery("#header").css({ "margin-top": "80px" });
                    EightDigits.analytics.sendEvent(config.analytics, 'shown-banner');

                    var countDownDate = new Date("Aug 25, 2021 11:59:59").getTime();
                    var countDownDate2 = new Date("Aug 25, 2021 11:59:59").getTime();
                    // Update the count down every 1 second
                    var x = setInterval(function () {

                        // Get todays date and time
                        var now = new Date().getTime();

                        // Find the distance between now an the count down date
                        var distance = countDownDate - now;
                        var distance2 = countDownDate2 - now;
                        // Time calculations for days, hours, minutes and seconds
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        // If client choises hour
                        /* if (days > 0) {
                        hours += 24 * days;
                        }*/

                        // Display the result in the element

                        jQuery("#_timer_hours").html('' + (hours < 10 ? '0' + hours : hours) + '');
                        jQuery("#_timer_minutes").html('' + (minutes < 10 ? '0' + minutes : minutes) + '');
                        jQuery("#_timer_seconds").html('' + (seconds < 10 ? '0' + seconds : seconds) + '');

                        // If the count down is finished, write some text 
                        if (distance2 < 0) {
                            jQuery('#ed-header_sayac').remove();
                            clearInterval(x);
                        }

                    }, 1000);
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
    var _ed_Diesel_Banner_Desktop = new EightDigits.sf();
    _ed_Diesel_Banner_Desktop.Diesel_Banner_Desktop();
})();
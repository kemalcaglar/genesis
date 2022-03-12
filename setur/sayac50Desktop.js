(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Setur_Erken_Rez_Sayac")) {
        return false
    }
    EightDigits.sf.prototype.Setur_Erken_Rez_Sayac = function () {
        var config = {
            scenarioname: "Setur_Erken_Rez_Sayac",
            analytics: "Setur_Erken_Rez_Sayac",
            img: "//cdn.8digits.com/log/r/59bbb626-3b4c-484c-ab47-450c2eb070d2.jpeg",
            EndDate: "December 5, 2021 23:59:59",
            backgroundColorAttr: "#333366",
            href:"https://www.setur.com.tr/erken-rezervasyon-otelleri",
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
                var tempLeft = (window.innerWidth - 1294) / 2 + 'px;'
                var html = '\
                <div id="ed_'+ config.scenarioname + '_main" style="position:relative;background-color:' + config.backgroundColorAttr + '; cursor:pointer;">\
                    <a style="display: block; height: 60px;" href="'+config.href+'">\
                        <div id="ed-'+ config.scenarioname + '-inner" style=" position:absolute; top:0px; height:60px; background-image:url(' + config.img + '); background-repeat:no-repeat; background-position: center; width:1280px; left:' + tempLeft + ' " >\
                    <div class="_ed_timer_el_hour_tt" style="position:absolute;width: 70px;height: 40px;right: 174px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                        <div class="ed-inner-timer" style="float:left;"></div>\
                        <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                      </div>\
                     <div class="_ed_timer_el_minute_tt" style="position:absolute;width: 70px;height: 40px;right: 130px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                        <div class="ed-inner-timer" style="float:left;"></div>\
                        <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                     </div>\
                     <div class="_ed_timer_el_second_tt" style="position:absolute;width: 70px;height: 40px;right: 86px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                        <div class="ed-inner-timer" style="float:left;"></div>\
                        <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                     </div>\
                    </div>\
                    </a>\
                </div>'
                //   jQuery(".prel").after(html)
                //   jQuery(html).insertBefore(jQuery('#main-header'));
                if(EightDigits.utils.getCookie('ed-CovidHeaderClose')){
                    jQuery('#main-header').prepend(html)
                }
                else{
                    var countHeader = 0;
                    var controlInterval = setInterval(function(){
                        countHeader++;
                        if(jQuery('#ed_header').length>0){
                            jQuery('#ed_header').after(html)
                            clearInterval(controlInterval)
                        }
                        else{
                            if(countHeader==8){
                                jQuery('#main-header').prepend(html)
                                clearInterval(controlInterval)
                            }
                        }
                    },100)
                }

                if (EightDigits.dataLayer.data.pageType === "home") {

                }
                else {
                    jQuery('.global-wrap').css('margin-top', '170px')

                }
                EightDigits.analytics.sendEvent(config.analytics, "Shown");
                jQuery('#ed_' + config.scenarioname + '_main').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_Banner');
                    window.location.href = "https://www.setur.com.tr/erken-rezervasyon-otelleri";
                })
                jQuery('.top-area.show-onload').css('margin-top', '52px');
                jQuery(window).scroll(function () {
                    // jQuery('section:eq(0)').css('margin-top','55px');
                })
                var futureDate = new Date(config.EndDate)
                var x = setInterval(function () {
                    var now = new Date().getTime();
                    var distance = futureDate - now;
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (days > 0) {
                        hours += 24 * days;
                    }
                    if (hours < 10) {
                        jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(0)").html('0');
                        hours = hours % 10;
                        jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(1)").html(hours);
                    } else {
                        jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(0)").html(Math.floor(hours / 10));
                        hours = hours % 10;
                        jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(1)").html(hours);
                    }
                    if (minutes < 10) {
                        jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(0)").html('0');
                        minutes = minutes % 10;
                        jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(1)").html(minutes);
                    } else {
                        jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(0)").html(Math.floor(minutes / 10));
                        minutes = minutes % 10;
                        jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(1)").html(minutes);
                    }
                    if (seconds < 10) {
                        jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(0)").html('0');
                        seconds = seconds % 10;
                        jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(1)").html(seconds);
                    }else {
                        jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(0)").html(Math.floor(seconds / 10));
                        seconds = seconds % 10;
                        jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(1)").html(seconds);
                    }
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 1000);
                jQuery(window).resize(function () {
                    tempLeft = (window.innerWidth - 1280) / 2 + 'px'
                    jQuery('#ed-' + config.scenarioname + '-inner').css('left', tempLeft);
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
    var _ed_Setur_Erken_Rez_Sayac = new EightDigits.sf();
    _ed_Setur_Erken_Rez_Sayac.Setur_Erken_Rez_Sayac();
})()
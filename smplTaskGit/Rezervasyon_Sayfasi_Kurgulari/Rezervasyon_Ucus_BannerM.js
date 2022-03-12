(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Rezervasyon_Ucus_BannerM")) {
        return false
    }
    EightDigits.sf.prototype.Rezervasyon_Ucus_BannerM = function () {
        var config = {
            scenarioname: "Rezervasyon_Ucus_BannerM",
            analytics: "Rezervasyon_Ucus_BannerM",
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
             var html = '<div class="smpl-ucus-banner" style="\
             border: 2px dashed yellow;\
             margin-top: 20px;\
             background: #4aa5ff;\
             color: #000000;\
             height: auto;\
             "><i class="fas fa-exclamation-triangle fa-3x" style="position: absolute;margin-top: 25px;margin-left: 10px;"></i><span style="\
             position: relative;\
             margin-left: 65px;\
             word-break: break-all;\
             display: block;\
             padding: 15px;\
             font-size: 11px;\
             ">29 Nisan 19:00 - 17 Mayıs 05:00 saatleri arasında yapılacak yurtiçi uçuşları için Seyahat izin Belgesi gerekmektedir.</span></div>\
             '
             if(jQuery(".booking-item-payment .booking-item-payment-details h5:first").text() == "Uçuş Bilgileri"){
                if(jQuery("#flight-book-form .col-md-4 #modalReturnFlightRules").length > 0){
                 jQuery("#flight-book-form .col-md-4 #modalReturnFlightRules").after(html);
                }else{
                 jQuery("#modalDepartureFlightRules").before(html);
                }
             }
             setTimeout(() => {
                var showCount = 0;
                jQuery(window).scroll(function () {
                var top_of_element = jQuery(".smpl-ucus-banner").offset().top;
                var bottom_of_element =
                    jQuery(".smpl-ucus-banner").offset().top +
                    jQuery(".smpl-ucus-banner").outerHeight();
                var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                var top_of_screen = jQuery(window).scrollTop();
                if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                    showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_banner") : false;
                    showCount++;
                }
                }); 
             }, 1000);
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
    var _ed_Rezervasyon_Ucus_BannerM = new EightDigits.sf();
    _ed_Rezervasyon_Ucus_BannerM.Rezervasyon_Ucus_BannerM();
  })();

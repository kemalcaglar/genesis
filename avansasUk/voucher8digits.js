(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kupon_Kulakcik_Uk")) {
        return false
    }
    EightDigits.sf.prototype.Kupon_Kulakcik_Uk = function () {
        var config = {
            scenarioname: "Kupon_Kulakcik_Uk",
            analytics: "Kupon_Kulakcik_Uk",
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
                var smpl = {
                    setCookie: function (cname, cvalue, min) {
                        var d = new Date();
                        d.setTime(d.getTime() + min * 60 * 1000);
                        var expires = 'expires=' + d.toUTCString();
                        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
                    },
                    getCookie: function (name) {
                        var nameEQ = name + '=';
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                        }
                        return null;
                    },
                }
                var kapaliKulakcik =
                    '\
                    <div id="smpl_kulakcik_main-kapali" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px;width: 320px;cursor:pointer; ">\
                <div class="smpl_textArea" style="width: 85%;\
                height: 48px;\
                margin-top: 20px;\
                background-color: #f07b05;\
                display: flex;\
                justify-content: center;\
                align-items: center;\
                font-size: 24px;\
                font-weight: bold;\
                font-style: italic;\
                color: #fff;">\
                  Voucher Code\
                </div>\
                        <div class="smpl_kulakcik_close-kapali" style="position: absolute;\
                z-index: 999999;\
                right: 12%;\
                top: 5px;\
                font-weight: bold;\
                width: 25px;\
                height: 25px;\
                text-align: center;\
                color: white;\
                line-height: 24px;\
                font-size: 16px;\
                cursor: pointer;\
                background-color: black;\
                border-radius: 50%;">&times;</div>\
                    </div>';
                var kulakcik =
                    '\
                    <div id="smpl_kulakcik_main" style="position:fixed; display:block; z-index:9999; bottom:-3px; right:100px; ">\
                        <img id="smpl_kulakcik_image" src="https://cdn.8digits.com/log/r/6c8d356c-6b19-4be2-9fc2-b3359961f310.jpeg" style="cursor:pointer; width:320px;">\
                        <div class="smpl_kulakcik_close" style="position: absolute;\
                z-index: 999999;\
                right: 6px;\
                top: 2px;\
                font-weight: bold;\
                width: 25px;\
                height: 25px;\
                text-align: center;\
                color: white;\
                line-height: 26px;\
                font-size: 16px;\
                cursor: pointer;\
                background-color: black;\
                border-radius: 50%;">&#8722;</div>\
                        <input id="smpl_kulakcik_couponCode" type="text" readonly value="25OFF40" style="background:#fde708;position:absolute;z-index:9999;right:70px;top:205px;font-weight: bold;width:178px;height:33px;text-align:center;color:black;line-height: 31px;font-size: 24px;cursor:pointer;"></input>\
                        <div class="ed-noticonsmpl" style="display:none; width: 258px;position: absolute;z-index: 9999;top: -40px;left: 22px;font-size: 15px;font-weight: bold;background-color: rgb(44, 151, 222);color: white;text-align: center;line-height: 38px;border-radius:5px;display:none;justify-content:center;align-items:center;">Your Code is Copied</div>\
                        </div>';
                function showKulakcik() {
                    jQuery("body").append(kapaliKulakcik);
                    jQuery("body").append(kulakcik);
                    EightDigits.analytics.sendEvent(config.analytics, 'shown_kulakcik');
                    jQuery("#smpl_kulakcik_main-kapali").click(function () {
                        jQuery(this).css({ "display": "none" });
                        jQuery("#smpl_kulakcik_main").css({ "display": "flex" });
                        EightDigits.analytics.sendEvent(config.analytics, 'click_kulakcik');
                    })
                    jQuery(".smpl_kulakcik_close-kapali").click(function () {
                        jQuery("#smpl_kulakcik_main-kapali").remove();
                        EightDigits.analytics.sendEvent(config.analytics, 'click_close_kulakcik');
                    })
                    jQuery(".smpl_kulakcik_close").click(function () {
                        jQuery("#smpl_kulakcik_main-kapali").css({ "display": "block" });
                        jQuery("#smpl_kulakcik_main").css({ "display": "none" });
                        EightDigits.analytics.sendEvent(config.analytics, 'click_close_img');
                    })
                    jQuery('#smpl_kulakcik_couponCode').click(function () {
                        var copyText = document.getElementById('smpl_kulakcik_couponCode');
                        copyText.select();
                        document.execCommand("copy");
                        jQuery(".ed-noticonsmpl").css({ "display": "block" })
                        EightDigits.analytics.sendEvent(config.analytics, 'click_coupon');
                    })
                }
                if (window.location.href.indexOf("/uk/?utm_source=instagram&utm_medium=newsfeed&utm_campaign=25_off_40") > -1 || window.location.href.indexOf("/uk/?utm_source=google&utm_medium=newsfeed&utm_campaign=25_off_40") > -1 || window.location.href.indexOf("/uk/?utm_source=facebook&utm_medium=newsfeed&utm_campaign=25_off_40") > -1) {
                    showKulakcik();
                    smpl.setCookie("smplCoupon", 1);
                } else if (window.location.pathname.indexOf("/uk/") > -1 && smpl.getCookie("smplCoupon", 1)) {
                    showKulakcik();
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
    var _ed_Kupon_Kulakcik_Uk = new EightDigits.sf();
    _ed_Kupon_Kulakcik_Uk.Kupon_Kulakcik_Uk();
})();
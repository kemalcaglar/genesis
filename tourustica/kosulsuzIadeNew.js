(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kosulsuz_Iade_Badge")) {
        return false
    }
    EightDigits.sf.prototype.Kosulsuz_Iade_Badge = function () {
        var config = {
            scenarioname: "Kosulsuz_Iade_Badge",
            analytics: "Kosulsuz_Iade_Badge",
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
                if (window.innerWidth > 1023) {
                    jQuery(".tour-cell").each(function () {
                        if (jQuery(this).find('.prel .smpl-rezervasyon-badge').length > 0) {
                            jQuery(this).find('.prel').append("<img class='smpl-kosulsuz-iade-badge' style='position:absolute;bottom:9px;width:168px;left:" + (jQuery('.hotel-image-wrapper').width() + 20 + 173) + "px' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")
                            
                        } else {
                            jQuery(this).find('.prel').append("<img class='smpl-kosulsuz-iade-badge' style='position:absolute;bottom:9px;width:168px;left:" + (jQuery('.hotel-image-wrapper').width() + 20) + "px' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")
                            
                        }
                        var showCount = 0;
                        jQuery(window).scroll(function () {
                            var top_of_element = jQuery(".smpl-kosulsuz-iade-badge").offset().top;
                            var bottom_of_element =
                                jQuery(".smpl-kosulsuz-iade-badge").offset().top +
                                jQuery(".smpl-kosulsuz-iade-badge").outerHeight();
                            var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                            var top_of_screen = jQuery(window).scrollTop();
                            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                                showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_desktop") : false;
                                showCount++;
                            }
                    })
                })
                } else {
                    jQuery(".tour-cell").each(function () {
                        if (jQuery(this).find('.hotel-image-wrapper img').length > 1 ) {
                            if (jQuery(this).find('.hotel-image-wrapper .smpl-rezervasyon-badge').length > 0) {
                                jQuery(this).find('.smpl-rezervasyon-badge').css("top", "85%");
                                jQuery(this).find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top: 85%;' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                            }
                            else {
                                jQuery(this).find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top: 85%;' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                            }
                        }
                        else {
                            jQuery(this).find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top:85%;' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                        }
                        var showCount = 0;
                        jQuery(window).scroll(function () {
                            var top_of_element = jQuery(".smpl-kosulsuz-iade-badge").offset().top;
                            var bottom_of_element =
                                jQuery(".smpl-kosulsuz-iade-badge").offset().top +
                                jQuery(".smpl-kosulsuz-iade-badge").outerHeight();
                            var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                            var top_of_screen = jQuery(window).scrollTop();
                            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                                showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_mobile") : false;
                                showCount++;
                            }
                        });
                    })
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
    var _ed_Kosulsuz_Iade_Badge = new EightDigits.sf();
    _ed_Kosulsuz_Iade_Badge.Kosulsuz_Iade_Badge();
})();
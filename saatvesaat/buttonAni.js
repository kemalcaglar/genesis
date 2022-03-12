(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Basket_Button_Animation_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Basket_Button_Animation_Desktop = function () {
        var config = {
            scenarioname: "Basket_Button_Animation_Desktop",
            analytics: "Basket_Button_Animation_Desktop",
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
                if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 5000) {
                    if (window.location.pathname.indexOf("/checkout/cart/") == -1) {
                        if (jQuery(".header-minicart .count").text().trim() > 0) {
                            var css = `
                            <style>
                            @keyframes animationsz {
                            0% {
                            opacity: 0.5;
                            background: #BD181850;
                            }

                            100% {
                            opacity: 1;
                            background: #BD1818;
                            }
                            }
                            </style>`
                            jQuery("head").append(css);
                            EightDigits.analytics.sendEvent(config.analytics, "shown_basket")
                            jQuery(".header-minicart .skip-link.skip-cart.has-item").css({
                                "animation": "animationsz 2s infinite"
                            });
                            jQuery(".header-minicart .skip-link.skip-cart.has-item").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_button")
                            })
                            jQuery("#cart-sidebar a").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_product")
                            })
                            jQuery(".checkout-types.minicart .button.checkout-button").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_satinAl")
                            })
                        }
                    }
                } else {
                    if (window.location.pathname.indexOf("/checkout/cart/") == -1) {
                        if (jQuery(".header-minicart .count").text().trim() > 0) {
                            EightDigits.analytics.sendEvent(config.analytics, "shown_basketNot")
                            jQuery(".header-minicart .skip-link.skip-cart.has-item").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_buttonNot")
                            })
                            jQuery("#cart-sidebar a").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_productNot")
                            })
                            jQuery(".checkout-types.minicart .button.checkout-button").click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "click_satinAlNot")
                            })
                        }
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
    var _ed_Basket_Button_Animation_Desktop = new EightDigits.sf();
    _ed_Basket_Button_Animation_Desktop.Basket_Button_Animation_Desktop();
})();
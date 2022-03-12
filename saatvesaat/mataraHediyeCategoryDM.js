(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Matara_Badge_Category")) {
        return false
    }
    EightDigits.sf.prototype.Matara_Badge_Category = function () {
        var config = {
            scenarioname: "Matara_Badge_Category",
            analytics: "Matara_Badge_Category",
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
                var itemArray = [
                    'AF-W2001OV1N',
                    'AF-W2001OV2N',
                    'AF-S2005OV1N',
                    'AF-W2018OV1N',
                    'AF-W2023OV1N',
                    'AF-W2001OV3N',
                    'AF-S2005OV2N',
                    'AF-S2005OV3N',
                    'AF-W1969OV5N',
                    'AF-W1969OV2N',
                    'AF-W1969OV1N',
                    'AF-W1952OV1Q',
                    'AF-W2013OV1N',
                    'AF-W2018OV2N',
                    'AF-W2018OV3N',
                    'AF-W2021OV1N',
                    'AF-W2023OV3N',
                    'AF-W2023OV2N',
                    'AF-W2021OV3N',
                    'AF-W2021OV2N'
                ]
                if (window.innerWidth > 768) {
                    var html = `<div class='smpl-matara-badge' style='background-color: #1A1915;opacity: 0.85;letter-spacing: 1px;text-align: center;color: #FFFFFF;
            position: absolute;bottom: 0;left:0px;width: 100%;padding: 2px;'>MATARA HEDİYE</div>
            `;
                    jQuery('.product-name span').map((i, product) => {
                        if (itemArray.find(x => x === jQuery(product).text().trim().split(" ")[0])) {
                            if (window.innerWidth > 1200) {
                                jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").css("top", "-64px")
                            }
                            else {
                                jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").css("top", "-91px")
                            }
                            jQuery(product).parent().parent().parent().find(".product-image").append(html)
                            jQuery('.smpl-matara-badge').css("width", jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").width() + 'px')
                        }
                    })
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'shown-desktopBadge');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                    }
                }
                else {
                    var html = "<div style=' background-color: #1A1915;opacity: 0.85;letter-spacing: 1px;text-align: center;color: #FFFFFF;position: absolute;bottom: 0;width: 100%;font-size:12px;'>MATARA HEDİYE</div>";
                    jQuery('.product-name a').map((i, product) => {
                        if (itemArray.find(x => x === jQuery(product).text().trim().split(" ")[0])) {
                            jQuery(product).parent().parent().parent().find(".product-image").append(html)
                        }
                    })
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'shown-mobilBadge');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
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
                        EightDigits.analytics.sendEvent(config.analytics, 'notShown-badge');
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
    var _ed_Matara_Badge_Category = new EightDigits.sf();
    _ed_Matara_Badge_Category.Matara_Badge_Category();
})();
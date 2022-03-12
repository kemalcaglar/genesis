(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Discount_dec50EUR")) {
        return false;
    }
    EightDigits.sf.prototype.Discount_dec50EUR = function () {
        let config = {
            scenarioname: "Discount_dec50EUR",
            analytics: "Discount_dec50EUR",
            controlgroup: 0,
        };

        let main = {
            factory: function () {
                return true;
            },
        };

        main.factory.prototype = {
            random: function () {
                let randomVal = 0;
                let randomControlRatio =
                    config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
                    randomVal = Math.floor(Math.random() * 10000 + 1);
                    EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            fireEvent: function (eventName, withCookie) {
                if (withCookie === true) {
                    if (window.innerWidth <= 420) {
                        if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Mobile")) {
                            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
                            EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Mobile", "on");
                        }
                    } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
                        if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Tablet")) {
                            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
                            EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Tablet", "on");
                        }
                    } else {
                        if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
                            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
                            EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
                        }
                    }
                } else {
                    if (window.innerWidth <= 420) {
                        EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
                    } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
                        EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
                    } else {
                        EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
                    }
                }
            },
            start: function () {

                const dec50 = (el) => {
                    let priceText = el.text().trim();
                    let fixPrice = priceText.split(" ")[0].split(",")[0].toString().replace(".", "");
                    priceText = parseInt(fixPrice) - 50;
                    return priceText;
                }

                const formatPrice = function (whichPrice) {
                    whichPrice = whichPrice.toString();
                    if (whichPrice.length === 4) {
                        let formattedNumber =
                            whichPrice.substring(0, whichPrice.length - 3) +
                            "." +
                            whichPrice.substring(whichPrice.length - 3, whichPrice.length);
                        return formattedNumber + ",00 EUR";
                    } else if (whichPrice.length === 3) {
                        let formattedNumber = whichPrice.substring(whichPrice.length - 3, whichPrice.length);
                        return formattedNumber + ",00 EUR";
                    }
                };

                const display = (el, price) => {
                    let addPrice = "<strong class = 'smpl_added'>" + price + "</strong> ";
                    el.parent(".col").append(addPrice);
                    el.addClass("smpl_line_through")
                }

                jQuery("#tab3 div div span span").each(function (index, el) {
                    if (el.innerText.trim() === "Çift Kişilik" || el.innerText.trim() === "Tek Kişilik Oda") {
                        const item = jQuery(el).parent("span").next();
                        const price = dec50(item);
                        display(item, formatPrice(price));
                    }
                });
                main.factory.prototype.fireEvent("shown", false);

                let parents = jQuery(".booking-item-deails-date-location");
                parents.addClass("Discount_dec50EUR");

                const style = function () {
                    let css = `<style>
          .Discount_dec50EUR {
            height: auto !important;
          }
          .Discount_dec50EUR .smpl_line_through {
            text-decoration: line-through;
            -webkit-text-decoration-color: #EE3342;
            text-decoration-color: #EE3342;
            text-decoration-thickness: 2px;
            font-size: 16px;
          }
          .Discount_dec50EUR .smpl_added {
            display: block;
            color: #EE3342;
          }
          </style>`
                    jQuery("head").append(css);
                }
                style();

            },
            control: function () {
                let IExplorerAgent = !!document.documentMode;
                if (IExplorerAgent === true) {
                    return false;
                }
            },
            init: function () {
                if (main.factory.prototype.control() === false) {
                    return false;
                }
                let _exec = main.factory.prototype.random();
                if (!_exec) {
                    main.factory.prototype.fireEvent("NotShown", true);
                    return false;
                }
                main.factory.prototype.start();
            },
        };

        boot = function () {
            return main.factory.prototype.init();
        };
        boot();
    };
    let _ed_Test_Event = new EightDigits.sf();
    _ed_Test_Event.Discount_dec50EUR();
})();

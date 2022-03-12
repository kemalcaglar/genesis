(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Firsat_Badge_Product_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Firsat_Badge_Product_Desktop = function () {
        var config = {
            scenarioname: "Firsat_Badge_Product_Desktop",
            analytics: "Firsat_Badge_Product_Desktop",
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
                var itemName = [
                    'AR11399',
                    'AR1732'
                ]
                var html = `<a class="ed-firsat-badge-container"  
                style="color: black;
                text-decoration: none;
                cursor: pointer;
                top: 30px;
                position: absolute;
                width: 16%;">
                <div class="ed-firsatBadge" style="
                position: absolute;
                width: 100%;
                opacity: 0.85;
                justify-content: center;
                text-align: center;
                align-items: center;">
                <div class="ed-firsat-badge" style="width: 100%;
                height: 40px;
                background-color: #EA5639;
                display: block;
                z-index: 9;">
                <p style="font-size: 12px;
                line-height: 15px;
                color: #fff;
                height: 100%;
                justify-content: center;
                text-align: center;
                align-items: center;
                display: flex;">GÜNÜN FIRSATI</p></div>
                </div>
    </a>`
                if (itemName.find(x => x === dataLayer[2].product.sku)) {
                    if(jQuery(".amlabel-table.bottom-right.label3").length > 0 ){
                        jQuery(".amlabel-table.bottom-right.label3").css({"bottom":"55px"})
                        jQuery('.product-image-gallery').append(html);
                        }else{
                            jQuery('.product-image-gallery').append(html);
                        }
                        EightDigits.analytics.sendEvent(config.analytics, 'shown_badge');
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
    var _ed_Firsat_Badge_Product_Desktop = new EightDigits.sf();
    _ed_Firsat_Badge_Product_Desktop.Firsat_Badge_Product_Desktop();
})();

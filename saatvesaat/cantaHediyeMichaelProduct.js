(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Canta_Hediye_Product")) {
        return false
    }
    EightDigits.sf.prototype.Canta_Hediye_Product = function () {
        var config = {
            scenarioname: "Canta_Hediye_Product",
            analytics: "Canta_Hediye_Product",
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
                   'MK2793',
                ]
                var html ='<a class="ed-canta-badge-container"  style="color: black; text-decoration: none; cursor:pointer;top: 30px;position:absolute;">\
                <div class="ed-mainbedavaguessBadge" style="position:absolute; width:120px;">\
                <div class="ed-guess-badge" style=" width: 100px; height: 27px; background-color: #1A1915; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">ÇANTA HEDİYE!</p></div>\
                </div>\
    </a>'  
                if(itemName.find(x=>x===dataLayer[2].product.sku)){
                    jQuery('.product-image-gallery').append(html);
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
    var _ed_Canta_Hediye_Product = new EightDigits.sf();
    _ed_Canta_Hediye_Product.Canta_Hediye_Product();
  })();
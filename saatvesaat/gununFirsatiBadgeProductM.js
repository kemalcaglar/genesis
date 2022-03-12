(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Firsat_Badge_Product_Mobile")) {
        return false;
    }
    EightDigits.sf.prototype.Firsat_Badge_Product_Mobile = function () {
        var config = {
            scenarioname: "Firsat_Badge_Product_Mobile",
            analytics: "Firsat_Badge_Product_Mobile",
            controlgroup: 0,
        };
        var main = {
            factory: function () {
                return true;
            },
        };
        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                var randomControlRatio =
                    config.controlgroup > 50
                        ? config.controlgroup
                        : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
                    randomVal = Math.floor(Math.random() * 10000 + 1);
                    EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(
                        EightDigits.utils.getCookie("_ed_" + config.scenarioname)
                    );
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {
                var itemArray = [
                    'AR11399',
                    'AR1732'
                ];
                var html = `<a class="ed-sinirli-badge-container"  
                style="text-decoration: none;
                cursor: pointer;
                top: 29px;
                position: absolute;
                width: 76px;">
          <div class="ed-mainsinirliBadge" 
          style="position:absolute; width:100%;opacity: 0.8;">
          <div class="ed-sinirli-badge" 
          style="width: 100%;
          height: 38px;
          background-color: #EA5639;
          display: block;
          z-index: 9;">
          <p 
          style="font-size: 12px;
          line-height: 14px;
          color: #fff;
          height: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;">GÜNÜN FIRSATI</p></div>
          </div>
</a>`
                if (itemArray.find(x => x === dataLayer[2].product.sku)) {
                    if (jQuery(".amlabel-table.middle-left.label30").length > 0) {
                        jQuery(".amlabel-table.middle-left.label30").css({ "bottom": "45px" })
                        jQuery('.product-image-gallery').append(html);
                    } else {
                        jQuery('.product-image-gallery').append(html);
                    }
                    EightDigits.analytics.sendEvent(config.analytics, 'shown_badge');
                }
            },
            control: function () { },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false;
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (
                        !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
                    ) {
                        EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                        EightDigits.utils.setCookie(
                            "ed-" + config.analytics + "-notshown",
                            "on"
                        );
                    }
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
    var _ed_Firsat_Badge_Product_Mobile = new EightDigits.sf();
    _ed_Firsat_Badge_Product_Mobile.Firsat_Badge_Product_Mobile();
})();

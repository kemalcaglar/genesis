(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Samsusng_Banner_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Samsusng_Banner_Desktop = function () {
        var config = {
            scenarioname: "Samsusng_Banner_Desktop",
            analytics: "Samsusng_Banner_Desktop",
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
if(window.location.href.indexOf("/checkout/cart/") == -1){
                var html = `<div class="smpl-samsung-banner" style="display: flex;justify-content: center;margin-bottom: 13px;position: fixed;top: 0;z-index: 999999;text-align: center;align-items: center;width: 100%;background: #E8E8E8;">
    <a href="https://www.saatvesaat.com.tr/marka/samsung">
        <img src="https://cdn.8digits.com/log/r/348d3b7f-2022-41f2-8330-7a86a47c9322.gif" style="max-width: 1336px;height: 50px;">
    </a>
</div>`
jQuery(".header-language-background.mnm-sticky").before(html);
jQuery(".header-language-background.mnm-sticky").hide();
jQuery(".main-container").css({"margin-top":"16px"});
jQuery("#header").css({"margin-top":"15px"});
                EightDigits.analytics.sendEvent(config.analytics,'shown-banner');
                jQuery(".smpl-samsung-banner").click(function(){
                    EightDigits.analytics.sendEvent(config.analytics,'click-banner');
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
    var _ed_Samsusng_Banner_Desktop = new EightDigits.sf();
    _ed_Samsusng_Banner_Desktop.Samsusng_Banner_Desktop();
})();
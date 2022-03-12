(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Ticwatch_Banner_Mobile")) {
        return false
    }
    EightDigits.sf.prototype.Ticwatch_Banner_Mobile = function () {
        var config = {
            scenarioname: "Ticwatch_Banner_Mobile",
            analytics: "Ticwatch_Banner_Mobile",
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
                var html = `
<div class="smpl-ticwatch-banner" style="margin-bottom: 5px;">
    <a href="https://www.saatvesaat.com.tr/marka/ticwatch">
        <img src="https://cdn.8digits.com/log/r/5b5335c3-af58-4fcf-bff6-5fc0cdbc8fc0.gif" style="width:100%;">
    </a>
</div>`
jQuery(".main-container").before(html);
jQuery("#top-promotion-banner").hide()
                EightDigits.analytics.sendEvent(config.analytics,'shown-banner');
                jQuery(".smpl-ticwatch-banner").click(function(){
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
    var _ed_Ticwatch_Banner_Mobile = new EightDigits.sf();
    _ed_Ticwatch_Banner_Mobile.Ticwatch_Banner_Mobile();
})();
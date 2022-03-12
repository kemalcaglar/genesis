(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Home_Checkup_Banner_Mobil")) {
        return false;
    }
    EightDigits.sf.prototype.Home_Checkup_Banner_Mobil = function () {
        var config = {
            scenarioname: "Home_Checkup_Banner_Mobil",
            analytics: "Home_Checkup_Banner_Mobil",
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
                const html = `
                <div style="left: 826.5px;" class="rsSlide"><a class="link" href="https://www.anadolusaglik.org/check-up/bilgi-randevu?utm_source=smpl&utm_medium=anasayfacheckupmodul&utm_campaign=anasayfacheckupmodul" title="CheckUp">
<div class="link-img  lazy-bg" style="background-image:url(https://cdn.8digits.com/log/r/e56a8d88-772f-4abb-9cb2-28bbcd045d5d.jpeg)" data-web="/assets/images/cover-link-kvy.jpg"></div>
<div class="text">
<strong>CheckUp</strong>
<i>Bilgi ve Randevu</i>
</div>
</a></div>
                `
                jQuery(".rsContainer").append(html);
                EightDigits.analytics.sendEvent(config.analytics, "shown_banner")
                jQuery(".smpl-banner").click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, "click_banner")
                })
            },
            control: function () {},
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
    var _ed_Home_Checkup_Banner_Mobil = new EightDigits.sf();
    _ed_Home_Checkup_Banner_Mobil.Home_Checkup_Banner_Mobil();
})();

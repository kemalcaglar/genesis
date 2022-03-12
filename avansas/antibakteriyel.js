(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Antibakteriyel_Card_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Antibakteriyel_Card_Desktop = function () {
        var config = {
            scenarioname: "Antibakteriyel_Card_Desktop",
            analytics: "Antibakteriyel_Card_Desktop",
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
                var html = `
<a class="smpl-card" href="https://www.avansas.com/search/?q=Antibakteriyel">
<div class="box">
<div class="category-card">
<h3 class="title">Antibakteriyel Ürünler</h3>
<img data-src="https://cdn.8digits.com/log/r/2eec7980-0c84-4018-9931-1aea2c9d835b.jpeg" class=" lazyloaded" style="width: 80%;"
src="https://cdn.8digits.com/log/r/2eec7980-0c84-4018-9931-1aea2c9d835b.jpeg">
</div>
</div>
</a>`

                jQuery(".category-card-list a").each(function () {
                    if (jQuery(this).attr("href") == "/matara-suluk-c-546338") {
                        jQuery(this).after(html);
                    }
                })
                var showCount = 0;
                jQuery(window).scroll(function () {
                    var top_of_element = jQuery(".smpl-card").offset().top;
                    var bottom_of_element =
                        jQuery(".smpl-card").offset().top +
                        jQuery(".smpl-card").outerHeight();
                    var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                    var top_of_screen = jQuery(window).scrollTop();
                    if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                        showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, 'shown_card') : false;
                        showCount++;
                    }
                });
                jQuery(".smpl-card").click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'click_card')
                })
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
    var _ed_Antibakteriyel_Card_Desktop = new EightDigits.sf();
    _ed_Antibakteriyel_Card_Desktop.Antibakteriyel_Card_Desktop();
})();
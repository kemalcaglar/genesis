(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Koc_Ailem_Giris_Kulakcik_Desktop")) {
        return false;
    }
    EightDigits.sf.prototype.Koc_Ailem_Giris_Kulakcik_Desktop = function () {
        var config = {
            scenarioname: "Koc_Ailem_Giris_Kulakcik_Desktop",
            analytics: "Koc_Ailem_Giris_Kulakcik_Desktop",
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
                var css = `
            <style>
            .smpl-popup-main {
              position: fixed;
              z-index: 999999;
              top: 0px;
              width: 100%;
              height: 100vh;
            }
              .smpl-overlay {
                position: absolute;
                z-index: 999998;
                background-color: rgba(0, 0, 0, 0.6);
                top: 0px;
                width: 100%;
                height: 100vh;
              }
              .smpl-content {
                position: absolute;
                z-index: 99999999;
              }
                .smpl-close {
                  cursor: pointer;
                  width: 30px;
                  height: 50px;
                  right: 10px;
                  top: 4px;
                  position: absolute;
                  z-index: 9999;
                  font-size: 35px;
                  color: #fff;
                  text-align: center;
                  font-weight: bold;
                }
            </style>`;
                jQuery("head").append(css);
                function shownHtml() {
                    var loginHref = jQuery(".login-button a").attr("href");
                    var imageWidth = 400;
                    var img = "https://cdn.8digits.com/log/r/1b87f3d7-99fe-480e-bc9b-a8ca950928b1.jpeg";
                    var html = `
                          <div class="smpl-popup-main">
                          <div class="smpl-overlay"></div>
                          <div class="smpl-content" style="top:` +
                        (window.innerHeight - 400) / 2 +
                        'px;left:' +
                        (window.innerWidth - 400) / 2 +
                        `px;">
                          <div class="smpl-close">×</div>
                          <a href="`+ loginHref + `"><img class="smpl-popup-img" style="cursor:pointer;width:` +
                        imageWidth +
                        `px;" src="` +
                        img +
                        `">
                            </div>
                            </a>
                          </div>
                          `;

                    if (jQuery(".smpl-popup-main").length < 1) {
                        jQuery("body").prepend(html);
                        return false;
                    }
                    EightDigits.analytics.sendEvent(config.analytics, "shown_popup");
                    jQuery('.smpl-popup-img').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "click_popup");
                    });
                    jQuery('.smpl-close').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "click-close")
                        jQuery('.smpl-popup-main').remove();
                    });
                    jQuery('.smpl-overlay').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "click-overlay");
                        jQuery('.smpl-popup-main').remove();
                    });
                }
                jQuery(".booking-list .detail-booking-item .price-name span").each(function () {
                    if (jQuery(this).text().trim().split(" ")[0] == "KoçAilem") {
                        if (jQuery(".login-button .mobile-none").text().trim() == "Giriş Yap") {
                            jQuery(".room-price-item-row").each(function () {
                                if (
                                    jQuery(this).find(".price-name").text().trim().split("\n")[0].split(" ")[0] ==
                                    "KoçAilem"
                                ) {
                                    jQuery(this).hide();
                                }
                            });
                            shownHtml();
                        }
                    }
                })
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
    var _ed_Koc_Ailem_Giris_Kulakcik_Desktop = new EightDigits.sf();
    _ed_Koc_Ailem_Giris_Kulakcik_Desktop.Koc_Ailem_Giris_Kulakcik_Desktop();
})();

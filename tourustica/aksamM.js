(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Aksam_Kampanyasi_Mobil")) {
        return false
    }
    EightDigits.sf.prototype.Aksam_Kampanyasi_Mobil = function () {
        var config = {
            scenarioname: "Aksam_Kampanyasi_Mobil",
            analytics: "Aksam_Kampanyasi_Mobil",
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
                function setCookie(key, value, days) {
                    var expires = new Date();
                    if (days) {
                        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
                        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
                    } else {
                        document.cookie = key + '=' + value + ';expires=Fri, 30 Dec 9999 23:59:59 GMT;';
                    }
                }

                function getCookie(key) {
                    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
                    return keyValue ? keyValue[2] : null;
                }
                function showKulakcik() {
                    var imageWidth = 250;
                    var img =
                        "https://cdn.8digits.com/log/r/5c9f9b10-730e-4144-8e05-5821560c0e7e.jpeg";
                    var html = `<div class="smpl-kulakcik-kampanya" style="position:fixed;display:flex;right:-`+imageWidth+`px;bottom:65px;z-index: 999999;cursor:pointer;">
                    <img class="smpl-img" src="`+ img + `" style="width:` +
                        imageWidth +
                        `px;">
                    <span class="smpl-kampanya-close" style="position: absolute;right: 10px;font-size: 25px;color: white;cursor: pointer;">×</span>
                    <span class="copy-kod" style="font-size:11px;display:none;z-index:999999;background-color:white;position:absolute;padding:3px;top:-24px;left:23%;border-radius:5px;border:1px solid rgb(0, 0, 0);">KOD KOPYALANDI</span>
                    </div>
        `;
                    jQuery("body").prepend(html);
                    jQuery('.smpl-kulakcik-kampanya').animate({
                        right:"10px"
                 },1200)
                    jQuery(".smpl-kampanya-close").click(function () {
                        jQuery(".smpl-kulakcik-kampanya").remove();
                        EightDigits.analytics.sendEvent(config.analytics, 'click_close_kulakcik');
                    })
                    jQuery('.smpl-img').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, 'click_copy_homepage');
                        EightDigits.utils.setCookie('_ed_' + config.scenarioname + '_copyKod', '1');
                        if (jQuery('.copy-kod').css("display") === "none") {
                            jQuery('.copy-kod').fadeIn("fast");
                            setTimeout(function () {
                                jQuery('.copy-kod').fadeOut("fast");
                            }, 2000)
                        }
                    })
                    EightDigits.analytics.sendEvent(config.analytics, 'shown_kulakcik');
                    setCookie('yearPopup', 1, 365);
                }
                var date = new Date;
                var hour = date.getHours();
                if (hour > 1 && hour < 24 || hour > -1 && hour < 9) {
                    if (window.location.pathname == "/") {
                        if (!getCookie('yearPopup')) {
                            setTimeout(() => {
                                showKulakcik();
                            }, 30000);
                        }
                    } else {
                        if(window.location.href.indexOf("Booking") == -1){
                        if (!getCookie('yearPopup')) {
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
                        </style>`
                            jQuery("head").append(css);

                            var imageWidth = 300;
                            var img =
                                "https://cdn.8digits.com/log/r/ad9f2816-a50f-4b00-9307-86dc14afa45d.jpeg";

                            var html = `
                    <div class="smpl-popup-main">
                    <div class="smpl-overlay"></div>
                    <div class="smpl-content" style="top:` +
                                (window.innerHeight - 100) / 2 +
                                "px;left:" +
                                (window.innerWidth - 300) / 2 +
                                `px;">
                    <div class="smpl-close">×</div>
                    <img class="smpl-popup-img" style="cursor:pointer;width:` +
                                imageWidth +
                                `px;" src="` +
                                img +
                                `">
                                <span class="copy-kod" style="font-size:11px;display:none;z-index:999999;background-color:white;position:absolute;padding:6px;bottom:-30px;left:33%;border-radius:5px;border:1px solid rgb(0, 0, 0);">KOD KOPYALANDI</span>
                      </div>
                    </div>
                    `;
                            jQuery("body").prepend(html)
                            jQuery(".smpl-close").click(function () {
                                if(jQuery(".hotel-detail-page").length > 0){
                                    EightDigits.analytics.sendEvent(config.analytics, 'click_close_product');
                                    }else{
                                      EightDigits.analytics.sendEvent(config.analytics, 'click_close_listeleme');
                                    }
                                jQuery(".smpl-popup-main").remove();
                            })
                            jQuery(".smpl-overlay").click(function () {
                                if(jQuery(".hotel-detail-page").length > 0){
                                    EightDigits.analytics.sendEvent(config.analytics, 'click_overlay_product');
                                    }else{
                                      EightDigits.analytics.sendEvent(config.analytics, 'click_overlay_listeleme');
                                    }
                                jQuery(".smpl-popup-main").remove();
                            })
                            jQuery('.smpl-popup-img').click(function () {
                                if(jQuery(".hotel-detail-page").length > 0){
                                    EightDigits.analytics.sendEvent(config.analytics, 'click_copy_product');
                                    }else{
                                      EightDigits.analytics.sendEvent(config.analytics, 'click_copy_listeleme');
                                    }
                                EightDigits.utils.setCookie('_ed_' + config.scenarioname + '_copyKod', '1');
                                if (jQuery('.copy-kod').css("display") === "none") {
                                    jQuery('.copy-kod').fadeIn("fast");
                                    setTimeout(function () {
                                        jQuery('.copy-kod').fadeOut("fast");
                                    }, 2000)
                                }
                            })
                            setCookie('yearPopup', 1, 365);
                            if(jQuery(".hotel-detail-page").length > 0){
                                EightDigits.analytics.sendEvent(config.analytics, 'shown_popup_product');
                              }else {
                                EightDigits.analytics.sendEvent(config.analytics, 'shown_popup_listeleme');
                              }
                        }
                    }
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
    var _ed_Aksam_Kampanyasi_Mobil = new EightDigits.sf();
    _ed_Aksam_Kampanyasi_Mobil.Aksam_Kampanyasi_Mobil();
})();
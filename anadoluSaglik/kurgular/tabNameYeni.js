(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Tab_Change_ABN")) {
        return false
    }
    EightDigits.sf.prototype.Tab_Change_ABN = function () {

        var config = {
            scenarioname: "Tab_Change_ABN",
            analytics: "Tab_Change_ABN",
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
                var cookie = {
                    setCookie: function (cname, cvalue, day) {
                        var d = new Date();
                        d.setTime(d.getTime() + day * 24 * 60 * 60 * 1000);
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    },
                    getCookie: function (name) {
                        var nameEQ = name + "=";
                        var ca = document.cookie.split(";");
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == " ") c = c.substring(1, c.length);
                            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                        }
                        return null;
                    },
                };
                var title = document.title;
                if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 4500) {
                    var alttitle = "3 adımda online randevu alın";
                    window.onblur = function () { document.title = alttitle; };
                    window.onfocus = function () { document.title = title; };
                    EightDigits.analytics.sendEvent(config.analytics, 'shown-3adimdaonlinerandevualin');
                    document.addEventListener("visibilitychange", function () {
                        if (document.hidden == true) {
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-backtotab-3adimdaonlinerandevualin');
                        }
                    });
                }
                else if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 9000 && parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) > 4500) {
                    var alttitle = "Okumaya Devam Edin";
                    window.onblur = function () { document.title = alttitle; };
                    window.onfocus = function () { document.title = title; };
                    EightDigits.analytics.sendEvent(config.analytics, 'shown-okumayadevamedin');
                    document.addEventListener("visibilitychange", function () {
                        if (document.hidden == true) {
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-backtotab-okumayadevamedin');
                        }
                    });
                }
                else {
                    var alttitle = "Check-up Yaptır";
                    window.onblur = function () { document.title = alttitle; };
                    window.onfocus = function () { document.title = title; };
                    EightDigits.analytics.sendEvent(config.analytics, 'shown-checkupyaptir');
                    if (!cookie.getCookie("tabNameCookie")) {
                        cookie.setCookie("tabNameCookie", 1, 2);
                    }
                    setTimeout(() => {
                        if (cookie.getCookie("tabNameCookie")) {
                            cookieOkey();
                        }
                    }, 100);
                    setTimeout(() => {
                        document.addEventListener("visibilitychange", function () {
                            if (document.hidden == true && cookie.getCookie("tabNameCookie")) {
                                EightDigits.analytics.sendEvent(config.analytics, 'shown-backtotab-checkupyaptir');
                            }
                        });
                    }, 101);
                }
                function cookieOkey() {
                    var href = "https://www.anadolusaglik.org/check-up"
                    var imgSrc = "https://cdn.8digits.com/log/r/da772474-b4c8-427f-916f-85fb59c7ba8b.jpeg"
                    var html = '<div class="smplPopup" style="position: fixed;\
                    top: 0px;\
                    left: 0px;\
                    z-index: 999999;\
                    width: 100%;\
                    height: 100%;\
                    background-color: rgba(0,0,0,0.6);\
                    justify-content: center;\
                    text-align: center;\
                    align-items: center;\
                    display: flex;">\
                    <div style="position:fixed;">\
                    <span class="smpl-closePopup"style="\
                      font-size: 30px;\
                      position: absolute;\
                      font-weight: 900;\
                      right: 10px;\
                      cursor:pointer;\
                      color:white;\
                  ">×</span>\
                  <a class="smpl-randevuPopup" href="'+ href + '">\
                      <img src="' +
                        imgSrc +
                        '"></img>\
                      </a>\
                    </div>\
                  </div>'
                    jQuery("body").append(html);
                    jQuery(".smpl-randevuPopup").click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, 'click-popup');
                    })
                    jQuery(".smpl-closePopup").click(function () {
                        jQuery(".smplPopup").css({ "display": "none" });
                        EightDigits.analytics.sendEvent(config.analytics, 'click-close');
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
    var _ed_Tab_Change_ABN = new EightDigits.sf();
    _ed_Tab_Change_ABN.Tab_Change_ABN();
})();



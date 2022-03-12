(function () {
    EightDigits.sf.prototype.funnelExitPromokod = function () {

        var config = {
            scenarioname: "funnelExitPromokod",
            analytics: "funnelExitPromokod",
            controlgroup: 50,
            image: "//cdn.8digits.com/f/u/xocaqp4j/07805643-91fb-4fff-8ef2-e660b6494ccd.png",
            newTab: true
        };

        if (document.querySelectorAll('input[label="TurkNet\'liyim"]:checked').length > 0) {
            EightDigits.console.log("Input checked.");
            return false;
        }

        var main = {
            "factory": function () {
                return true;
            }
        };

        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                if (EightDigits.utils.getCookie('ed_trknt_ml_pup') == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('ed_trknt_ml_pup', randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie('ed_trknt_ml_pup'));
                }
                if (randomVal < 100 * 95) {
                    return true;
                } else {
                    return false;
                }
            },
            action: function () {
                remove = function () {
                    try {
                        document.getElementById("_eightdigits_aknsiz").remove();
                        document.getElementById("_eightdigits_aknsiz_b").remove();
                    } catch (ex) {
                        document.querySelectorAll('._eightdigits_popup_hiz, ._eightdigits_backover').style.display = "none";
                    }
                };
                document.getElementsByClassName('_eightdigits_popup_close')[0].onclick = function () {
                    remove();
                    EightDigits.analytics.sendEvent(config.analytics, "CloseClick");
                };
                document.getElementsByClassName('_eightdigits_popup_hiz')[0].onclick = function () {

                    var strPopUp = '<div id="ed-div-main" style="position:fixed;z-index:9999;bottom: 0px;right: 160px;width: 270px;height: 305px;color: #0e357a;background-color: white;text-align:center;border: 1px solid dimgrey;/* border-radius: 4px; */border-top-left-radius: 4px;border-top-right-radius: 4px;">\
<div id="ed-close-link" style="position:absolute; color:white; z-index:9999999; top:-2%; right:2%; cursor:pointer;font-size: 12px;line-height: 20px;text-decoration: underline;margin-left: 15px; margin-top: 3px;">x</div>\
                <div id="ed-text-area" style="font-size: 20px;color: white;margin-bottom: 10px;background: #0e357a;margin-top: 0px;padding-top: 10px;padding-bottom: 10px;">TurkNet\'e Hoş Geldiniz☺</div>\
                <div id="ed-close-button" style="cursor:pointer;margin-bottom: 0px;color: white;margin-left: 230px;margin-top: -42px;font-size:15px;"></div>\
                <div id="ed-time-left" style="font-size: 20px;color: #0e357a;margin-top: 55px;">1 Ay Bedava için aşağıdaki kodu 4. adımda kullanabilirsiniz.</div>\
                <div id="ed-coupon-area" style="font-size:20px;color:#0e357a;border: 1px dotted #0e357a;width:205px;margin-left: 35px;padding:10px;cursor:pointer;/* bottom: 15px; */margin-top: 9px;">EI69ZAB1FKV88C</div>\
                <div id="ed-copy-button" style="cursor:pointer;height: 40px;width: 100px;background: #f7a600;margin-left: 90px; margin-top: 5px; color: white; font-size: 15px;"><p style="padding: 6px;text-align: center; color: white;font-size: 13px;">Kopyala</p></div>\
                <div id="ed-use-button" style="cursor:pointer;height: 40px;width: 100px;background: #0e357a;margin-left: 90px; margin-top: 5px; color: white; font-size: 15px;"><a style="padding: 2px;text-align: center;color: white;font-size: 13px;line-height: 40px;" href="/taahhutsuz-ozgur-iletisim-abonelik/?promo=DK2HNN70DWGJ49">Hemen Kullan</p></div>\
                <div id="ed-close-link" style="cursor:pointer;font-size: 12px;line-height: 20px;text-decoration: underline;margin-left: 15px; margin-top: 3px;">Kapat</div></div>'

                    document.body.insertAdjacentHTML('afterbegin', strPopUp);
                    EightDigits.analytics.sendEvent("promoAsistant", "Shown");

                    document.getElementById('ed-close-link').onclick = function () {
                        EightDigits.utils.setCookie('ed-coupon-clicked', "", 0.001);
                        EightDigits.utils.setCookie('ed-coupon-time', "", 0.001);
                        document.getElementById('ed-div-main').remove();
                    }

                    function copyToClipboard(elem) {
                        // create hidden text element, if it doesn't already exist
                        var targetId = "_hiddenCopyText_";
                        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
                        var origSelectionStart, origSelectionEnd;
                        if (isInput) {
                            // can just use the original source element for the selection and copy
                            target = elem;
                            origSelectionStart = elem.selectionStart;
                            origSelectionEnd = elem.selectionEnd;
                        } else {
                            // must use a temporary form element for the selection and copy
                            target = document.getElementById(targetId);
                            if (!target) {
                                var target = document.createElement("textarea");
                                target.style.position = "absolute";
                                target.style.left = "-9999px";
                                target.style.top = "0";
                                target.id = targetId;
                                document.body.appendChild(target);
                            }
                            target.textContent = elem.textContent;
                        }
                        // select the content
                        var currentFocus = document.activeElement;
                        target.focus();
                        target.setSelectionRange(0, target.value.length);

                        // copy the selection
                        var succeed;
                        try {
                            succeed = document.execCommand("copy");
                        } catch (e) {
                            succeed = false;
                        }
                        // restore original focus
                        if (currentFocus && typeof currentFocus.focus === "function") {
                            currentFocus.focus();
                        }

                        if (isInput) {
                            // restore prior selection
                            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
                        } else {
                            // clear temporary content
                            target.textContent = "";
                        }
                        return succeed;
                    }
                    document.getElementById("ed-coupon-area").onclick = function () {
                        copyToClipboard(document.getElementById("ed-coupon-area"));
                    }


                    document.getElementById("ed-copy-button").onclick = function () {
                        copyToClipboard(document.getElementById("ed-coupon-area"));
                        var element = document.getElementById("ed-copy-button")
                        setTimeout(function () { element.innerHTML = '<p style="padding: 6px;text-align: center; color: white;font-size: 13px;">Kopyalandı</p>' }, 500);
                        setTimeout(function () { element.innerHTML = '<p style="padding: 6px;text-align: center; color: white;font-size: 13px;">Kopyala</p>' }, 2500);
                    }

                    var close = false
                    document.getElementById("ed-close-button").onclick = function () {
                        if (close) {
                            close = false
                            document.getElementById('ed-div-main').css('bottom', '0px')
                            document.getElementById('ed-text-area').innerText = 'Kupon Kodunuz'

                        } else {
                            close = true
                            document.getElementById('ed-div-main').css('bottom', '-198px')

                        }
                    }

                    var divBottom = -330;
                    var id = setInterval(frame, 4);

                    function frame() {
                        if (divBottom == 0) {
                            clearInterval(id);
                        } else {
                            divBottom++;
                            document.getElementById('ed-div-main').style.bottom = divBottom + 'px';
                        }
                    }

                    document.getElementById('ed-close-button').onclick = function () {
                        clearInterval(timerInterval);
                        document.getElementById('ed-div-main').remove();
                        EightDigits.analytics.sendEvent("promoAsistant - CouponClose", "Click");
                    }
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                    }
                    EightDigits.analytics.sendEvent(config.analytics, "Click");
                    remove();
                };
            },
            start: function () {
                var htmlPop = `<div id="eightdigits_aknsiz" class="_eightdigits_popup_hiz" style=" position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0,0,0,0.7); z-index: 9999;"></div>
                <div id="ed-popupMain"  style=" position: fixed; top: 50%; left: 50%; z-index: 10000;">
                <div class="_eightdigits_popup_close" style="color:white; width: 85px; height: 35px;position: absolute;font-size: 16px;z-index:44444;right: calc(50% - 230px);top: calc(50% - 250px); cursor: pointer; ">&times</div>
                <img src="//cdn.8digits.com/f/u/xocaqp4j/07805643-91fb-4fff-8ef2-e660b6494ccd.png" style=" width: 600px; position: absolute; top: calc(50% - 250px); left: calc(50% - 315px); ">
                <div id="ed-PromoCode" style=" cursor: pointer; position: absolute; top: calc(50% + 10px); color: #fff; font-size: 30px; left: calc(50% - 175px);">EI69ZAB1FKV88C</div>
                <a class="_eightdigits_redirection" href="/taahhutsuz-ozgur-iletisim-abonelik/?promo=EI69ZAB1FKV88C">
                <div id="ed-PromoUseNow" style=" cursor: pointer; position: absolute; top: calc(50% + 113px); left: calc(50% - 175px); width: 320px; height: 48px;"></div></a></div>`;
                if (window.location.href.indexOf('promo') === -1) {
                    if (window.location.pathname.indexOf('destek') > -1 || window.location.pathname.indexOf('online-islemler') > -1 || window.location.pathname.indexOf('ilk-yardim') > -1) {
                        EightDigits.utils.setCookie('ed-exit-cancel', 'on');
                    }
                    if (EightDigits.utils.getCookie('ed-exit-cancel') === null) {

                        if (document.querySelectorAll('#_eightdigits_aknsiz').length === 0) {
                            document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeEnd", htmlPop);
                            EightDigits.analytics.sendEvent(config.analytics, "Shown");
                            main.factory.prototype.action();
                            
                        }

                    }
                }
            },
            init: function () {
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (window.location.href.indexOf('promo') === -1) {
                        if (EightDigits.utils.getCookie('ed-exit-cancel') === null) {
                            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                            return false;
                        }
                    }
                }
                main.factory.prototype.start();
            }
        };

        boot = function () {
            if (EightDigits.utils.getCookie('ed-KobiVisited-control') !== "on" && window.location.href.indexOf('/kobi') === -1 && (!document.getElementById('Preferences').classList.contains('closed')  || !document.getElementById('Payment').classList.contains('closed') ) && EightDigits.utils.getCookie('ed-mbps-gigafiberPromo') !== "on") {

                return main.factory.prototype.init();

            }
        };

        boot();

    };
    var eightdigitsfunnelExitPromokod = new EightDigits.sf();
    eightdigitsfunnelExitPromokod.funnelExitPromokod();
})();

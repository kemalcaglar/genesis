(function () {
    EightDigits.sf.prototype.exitPopupNew = function () {

        var config = {
            scenarioname: "exitPopupNew",
            analytics: "exitPopupNew",
            controlgroup: 90,
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
            html: function () {
                var target = "_self";
                if (config.newTab) target = "_target";
                return `<div id="eightdigits_aknsiz" class="_eightdigits_popup_hiz" style=" position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0,0,0,0.7); z-index: 9999;"></div>
                <div id="ed-popupMain"  style=" position: fixed; top: 50%; left: 50%; z-index: 10000;">
                <div class="_eightdigits_popup_close" style="color:white; width: 85px; height: 35px;position: absolute;font-size: 16px;z-index:44444;right: calc(50% - 230px);top: calc(50% - 250px); cursor: pointer; ">&times</div>
                <img src="//cdn.8digits.com/f/u/xocaqp4j/07805643-91fb-4fff-8ef2-e660b6494ccd.png" style=" width: 600px; position: absolute; top: calc(50% - 250px); left: calc(50% - 315px); ">
                <div id="ed-PromoCode" style=" cursor: pointer; position: absolute; top: calc(50% + 10px); color: #fff; font-size: 30px; left: calc(50% - 175px);">EI69ZAB1FKV88C</div>
                <a class="_eightdigits_redirection" href="/taahhutsuz-ozgur-iletisim-abonelik/?promo=EI69ZAB1FKV88C">
                <div id="ed-PromoUseNow" style=" cursor: pointer; position: absolute; top: calc(50% + 113px); left: calc(50% - 175px); width: 320px; height: 48px;"></div></a></div>`;
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
                document.getElementsByClassName('_eightdigits_redirection')[0].onclick = function () {
                    EightDigits.analytics.sendEvent(config.analytics, "Click");
                    remove();
                };
                
            },
            start: function () {
                if (window.location.href.indexOf('promo') === -1) {
                    if (window.location.pathname.indexOf('destek') > -1 || window.location.pathname.indexOf('online-islemler') > -1 || window.location.pathname.indexOf('ilk-yardim') > -1 || window.location.pathname.indexOf('ilk-yardim') > -2) {
                        EightDigits.utils.setCookie('ed-exit-cancel', 'on');
                    }
                    if (EightDigits.utils.getCookie('ed-exit-cancel') === null) {

                        if(document.querySelectorAll('#_eightdigits_aknsiz').length === 0){

                            document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeEnd", main.factory.prototype.html());
                            console.log('Append 1');
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
            if(EightDigits.utils.getCookie('ed-KobiVisited-control')!=="on" && window.location.href.indexOf('/kobi')===-1 && window.location.href.indexOf('taahhutsuz-ozgur-iletisim-abonelik')===-1){

                return main.factory.prototype.init();

            }
        };

        boot();

    };
    var eightdigitsexitPopupNew = new EightDigits.sf();
    eightdigitsexitPopupNew.exitPopupNew();
})();

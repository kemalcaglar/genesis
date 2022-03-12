(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("abonelikBasvurusuExitPromo")) {
        return false
    }
    EightDigits.sf.prototype.abonelikBasvurusuExitPromo = function () {

        var config = {
            scenarioname: "abonelikBasvurusuExitPromo",
            analytics: "abonelikBasvurusuExitPromo",
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
                
                function copyToClipboard() {
                    var $temp = jQuery("<input>");
                    jQuery("body").append($temp);
                    $temp.val('LLPDYWU922JW9R6').select();
                    document.execCommand("copy");
                    $temp.remove();
                }

                jQuery('body').append('<div id="ed-popupCover" style=" position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0,0,0,0.7); z-index: 9999;"></div><div id="ed-popupMain"  style=" position: fixed; top: 50%; left: 50%; z-index: 10000;"><div class="ed-popUpMain-close" style="color:white; width: 85px; height: 35px;position: absolute;font-size: 16px;z-index:44444;right: calc(50% - 230px);top: calc(50% - 250px); cursor: pointer; ">KAPAT</div><img src="//cdn.8digits.com/f/u/xocaqp4j/07805643-91fb-4fff-8ef2-e660b6494ccd.png" style=" width: 600px; position: absolute; top: calc(50% - 250px); left: calc(50% - 315px); "><div id="ed-PromoCode" style=" cursor: pointer; position: absolute; top: calc(50% + 10px); color: #fff; font-size: 30px; left: calc(50% - 175px);">LLPDYWU922JW9R6</div><a href="/taahhutsuz-ozgur-iletisim-abonelik/?promo=LLPDYWU922JW9R6"><div id="ed-PromoUseNow" style=" cursor: pointer; position: absolute; top: calc(50% + 113px); left: calc(50% - 175px); width: 320px; height: 48px;"></div></a></div>');
                EightDigits.analytics.sendEvent(config.analytics, "Shown");

                jQuery('#ed-PromoCode').click(function(){
                    copyToClipboard();
                    jQuery('#ed-PromoCode').text('KOPYALANDI');
                    EightDigits.analytics.sendEvent(config.analytics, "CopyClick");
                    setTimeout(function(){ 
                        jQuery('#ed-PromoCode').text('LLPDYWU922JW9R6')
                    }, 1500);
                });
                document.querySelectorAll('.ed-popUpMain-close')[0].onclick = function () {
                    EightDigits.analytics.sendEvent(config.analytics, "CloseClick");
                    jQuery('#ed-popupCover').remove();
                    jQuery('#ed-popupMain').remove();
                };
                jQuery('#ed-PromoUseNow').click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, "UseClick");
                });

                jQuery('#ed-popupCover').click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, "CloseClick");
                    jQuery('#ed-popupCover').remove();
                    jQuery('#ed-popupMain').remove();
                });


            },
            control: function () {
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
    var _ed_abonelikBasvurusuExitPromo = new EightDigits.sf();
    _ed_abonelikBasvurusuExitPromo.abonelikBasvurusuExitPromo();
})();

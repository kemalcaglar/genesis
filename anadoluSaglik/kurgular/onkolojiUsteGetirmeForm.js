(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Form_Yukari_Getirme")) {
        return false
    }
    EightDigits.sf.prototype.Form_Yukari_Getirme = function () {

        var config = {
            scenarioname: "Form_Yukari_Getirme",
            analytics: "Form_Yukari_Getirme",
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
                jQuery('#usQuestionForm-contact .sectionDesc').text("Bilgi ve talepleriniz için lütfen aşağıdaki formu doldurun. Size en kısa zamanda dönüş yapacağız. Ayrıca hizmet kalitemizi daha da yükseltmek için görüşlerinize, önerilerinize ve eleştirilerinize kulak veriyoruz.")

                if(window.location.href.indexOf("/onkoloji-merkezi?utm_source=googleads&utm_medium=search&utm_campaign=generic_kanser&utm_content=meme_kanseri")>-1 || window.location.href.indexOf("/onkoloji-merkezi") > -1){
                    jQuery('.oncology-description').before(jQuery('#usQuestionForm-contact'))
                    jQuery('.oncology-description').css("background-color","white")
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown_Onkoloji_Merkezi');

                }
                else if(window.location.href.indexOf("/radyasyon-onkolojisi-bolumu?utm_source=programmatic&utm_medium=display&utm_campaign=radyasyon")>-1){
                jQuery('.chapterDoctors').before(jQuery('#usQuestionForm-contact'))
                EightDigits.analytics.sendEvent(config.analytics, 'Shown_Radyasyon_Onkolojisi');

            }
            else if(window.location.href.indexOf("/robotik-cerrahi?utm_source=programmatic&utm_medium=display&utm_campaign=robotikcerrahi")>-1){
                jQuery('.cure').before(jQuery('#usQuestionForm-contact'))
                EightDigits.analytics.sendEvent(config.analytics, 'Shown_Robotik_Cerrahi');

            }
            else if(window.location.href.indexOf("/mr-trus-fuzyon?utm_source=programmatic&utm_medium=display&utm_campaign=mrtrus")>-1){
                jQuery('.chapterDoctors').before(jQuery('#usQuestionForm-contact'))
                EightDigits.analytics.sendEvent(config.analytics, 'Shown_Mr_Trus_Fuzyon');


            }
            else if(window.location.href.indexOf("/hibrit-ameliyathane?utm_source=programmatic&utm_medium=display&utm_campaign=beyinvesinir")>-1){
                jQuery('.techPlatform').before(jQuery('#usQuestionForm-contact'))
                EightDigits.analytics.sendEvent(config.analytics, 'Shown_Hibrit_Ameliyathane');

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
    var _ed_Form_Yukari_Getirme = new EightDigits.sf();
    _ed_Form_Yukari_Getirme.Form_Yukari_Getirme();
})();

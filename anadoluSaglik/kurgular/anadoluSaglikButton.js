(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Anasayfa_Sizi_Dinliyoruz_Kulakcik")) {
        return false
    }
    EightDigits.sf.prototype.Anasayfa_Sizi_Dinliyoruz_Kulakcik = function () {
        var config = {
            scenarioname: "Anasayfa_Sizi_Dinliyoruz_Kulakcik",
            analytics: "Anasayfa_Sizi_Dinliyoruz_Kulakcik",
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
                    randomVal = Math.floor((Math.random() *  10000) + 1);
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
             var urls=   ["utm_source=googleads&utm_medium=search&utm_campaign=brand", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=atasehir", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=doktorlar","utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=gebze", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=randevu", "utm_source=programmatic&utm_medium=display&utm_campaign=check_up", "utm_source=optdcom&utm_medium=programatik&utm_campaign=display", "utm_source=optdcom&utm_medium=programatik&utm_campaign=display", "utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz", "utm_source=programmatic&utm_medium=display&utm_campaign=edoktor", "utm_source=programmatic&utm_medium=display&utm_campaign=tibbigorus", "utm_source=programmatic&utm_medium=display&utm_campaign=guvenlinefes", "utm_medium=crmemail", "utm_source=googleads&utm_medium=gdn&utm_campaign=remarketing&utm_content=checkup"]
             
             if(window.location.pathname==="/" && urls.indexOf(window.location.href.split("?")[1])<0){
    var style = "\
    <style>\
    .smpl-sizi-dinliyoruz-kulakcik{\
    position:fixed;\
    bottom:10px;\
    z-index:55555;\
    width:186px;\
    cursor:pointer;\
    right:-400px;\
    display:none;\
    }\
    .smpl-sizi-dinliyoruz-kulakcik img{\
    width:100%;\
    }\
    .smpl-sizi-dinliyoruz-kulakcik-close{\
        color:white;\
        font-size:25px;\
        position:absolute;\
        top:-3px;\
        right:7px;\
        width:50px;\
        height:50px;\
        display:flex;\
        justify-content:flex-end;\
        align-items:flex-start;\
    }\
    </style>";
    jQuery('head').append(style)
    
    
    
    var html = "<div class='smpl-sizi-dinliyoruz-kulakcik'><img src='https://cdn.8digits.com/log/r/c30f71d6-c1b3-44ef-8f90-260c7f4daff9.jpeg'></div>"
    
    
  if(window.innerWidth>760){
   
        jQuery('body').append(html);
        jQuery('.smpl-sizi-dinliyoruz-kulakcik').css("right","10px")
        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
            EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
        }
        jQuery(window).scroll(function(){
            var scroll = jQuery(document).height()/15 ;
            console.log(jQuery(this).scrollTop())
            if(jQuery(this).scrollTop()>scroll){
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').show()
            }
            else{
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').hide()
            }
        })
        jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function(e){
            
            EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik');
    
            window.location.href= "https://www.anadolusaglik.org/sizi-dinliyoruz"
    
    })
  }
  else{
    jQuery('body').append(html);
        jQuery('#_sorun_icon').remove()
        jQuery('.smpl-sizi-dinliyoruz-kulakcik').css({"width":"172px","bottom":"0px","transform":"unset","left":"unset","right":"0px"})
        jQuery(window).scroll(function(){
            var scroll = jQuery(document).height()/15 ;
            console.log(jQuery(this).scrollTop())
            if(jQuery(this).scrollTop()>scroll){
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').show()
            }
            else{
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').hide()
            }
        })
        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
            EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik_Mobil');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
        }
    
    jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function(e){
        
        EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Mobil');
        window.location.href= "https://www.anadolusaglik.org/sizi-dinliyoruz"
  })
  }
    
  }
  else{
     if(window.location.pathname==="/sizi-dinliyoruz" && window.location.href.indexOf("?utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz")<0){
        jQuery('#usQuestionForm-contact .sectionDesc').text("Bilgi ve talepleriniz için lütfen aşağıdaki formu doldurun. Size en kısa zamanda dönüş yapacağız. Ayrıca hizmet kalitemizi daha da yükseltmek için görüşlerinize, önerilerinize ve eleştirilerinize kulak veriyoruz.")
                if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown_form')) {
            EightDigits.analytics.sendEvent(config.analytics, 'Shown_Form');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown_form', 'on')
        }
        if(jQuery(window).scrollTop()<jQuery('#usQuestionForm-contact').offset().top){
            EightDigits.analytics.sendEvent(config.analytics, 'Form_Scroll');
            jQuery("html, body").animate({
                scrollTop: jQuery('#usQuestionForm-contact').offset().top 
            }, 2000);
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
                        if(window.innerWidth>760){
                            EightDigits.analytics.sendEvent(config.analytics, 'NotShown_Desktop');
                        }
                        else{
                            EightDigits.analytics.sendEvent(config.analytics, 'NotShown_Mobile');
                        }
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
    var _ed_Anasayfa_Sizi_Dinliyoruz_Kulakcik = new EightDigits.sf();
    _ed_Anasayfa_Sizi_Dinliyoruz_Kulakcik.Anasayfa_Sizi_Dinliyoruz_Kulakcik();
  })();
  
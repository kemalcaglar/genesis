(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Lead_Generation_Popup")) {
        return false
    }
    EightDigits.sf.prototype.Lead_Generation_Popup = function () {

        var config = {
            scenarioname: "Lead_Generation_Popup",
            analytics: "Lead_Generation_Popup",
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


                

var rnd =  parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));


if(rnd<2000){
    var img = "https://cdn.8digits.com/log/r/dec84cec-a54a-4c39-b62b-bade18dfddb6.jpeg";
    var imageWidth=600;
    var popupButton = '\
    <div class="smpl-popup-button-container" style="position:fixed;z-index:9998;top:0px;left:0px;width:100%;height:100%;">\
    <div class="smpl-popup-button-layer" style="position:absolute;z-index:9998;background:rgba(0,0,0,0.6);top:0px;left:0px;width:100%;height:100%;"></div>\
    <div id="smpl-popup-button-contain" style="position:fixed; z-index:9999; bottom:'+(window.innerHeight-400)/2+'px; left:'+(window.innerWidth-600)/2+'px; ">\
      <div class="smpl-popup-button-close" style="cursor:pointer;width: 62px;height: 62px;right:-6px;top:6px;position:absolute;z-index:9999;font-size:35px;color:black;text-align: center;font-weight: bold;">×</div>\
        <img style="width:'+ imageWidth + 'px;" src="' + img + '">\
        <a id="smpl-popup-button-send" style="top:0px;left:0px;width:300px;height:100%;position:absolute;z-index:99999;cursor:pointer;"></a>\
        <a class="smpl-popup-button-close" style="top:0px;right:0px;width:300px;height:100%;position:absolute;z-index:99999;cursor:pointer;"></a>\
    </div>\
    </div>\
    ';
    jQuery('body').append(popupButton);
    EightDigits.utils.setCookie('ed-' + config.analytics + '-Shown', 'on')
    EightDigits.analytics.sendEvent(config.analytics, 'Shown_PopupButton');

    jQuery('#smpl-popup-button-send').click(function(){
        EightDigits.analytics.sendEvent(config.analytics, 'Click_PopupButton');

        window.location.href="https://www.touristica.com.tr/uye-ol";
    })
    
    jQuery('.smpl-popup-button-close').click(function(){
        EightDigits.analytics.sendEvent(config.analytics, 'Close_PopupButton');

        jQuery('.smpl-popup-button-container').remove();
    })
}

if(rnd>=2000){

    var isScroll=false;

    jQuery(document).on("mousemove", function( event ) {

     
        var scrollTop = jQuery(window).scrollTop();
        

        if(event.pageY < (scrollTop + 3)){
            if(!isScroll){
                isScroll=true;
                var imgExit = "https://cdn.8digits.com/log/r/c1b8413a-b475-4b5e-bfed-3190ce891e4c.png";
                var imageExitWidth=600;
                var popupExit = '\
                <div class="smpl-popup-exit-container" style="position:fixed;z-index:9998;top:0px;left:0px;width:100%;height:100%;">\
                <div class="smpl-popup-exit-layer" style="position:absolute;z-index:9998;background:rgba(0,0,0,0.6);top:0px;left:0px;width:100%;height:100%;"></div>\
                <div id="smpl-popup-exit-contain" style="cursor:pointer;position:fixed; z-index:9999; bottom:'+(window.innerHeight-400)/2+'px; left:'+(window.innerWidth-600)/2+'px; ">\
                  <div class="smpl-popup-exit-close" style="cursor:pointer;width: 62px;height: 62px;right:-6px;top:6px;position:absolute;z-index:9999;font-size:35px;color:black;text-align: center;font-weight: bold;">×</div>\
                    <img style="width:'+ imageExitWidth + 'px;" src="' + imgExit + '">\
                </div>\
                </div>\
                ';
                jQuery('body').append(popupExit);
                EightDigits.utils.setCookie('ed-' + config.analytics + '-Shown', 'on')

                EightDigits.analytics.sendEvent(config.analytics, 'Shown_PopupExit');

                jQuery('#smpl-popup-exit-contain').click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_PopupExit');

                    window.location.href="https://www.touristica.com.tr/uye-ol";
                })
                
                jQuery('.smpl-popup-exit-close').click(function(){
                    EightDigits.analytics.sendEvent(config.analytics, 'Close_PopupExit');

                    jQuery('.smpl-popup-exit-container').remove();
                })
            }

            
        }

    });



}


if(rnd>=1000){

    
             
    var imgKulakcik = "https://cdn.8digits.com/log/r/3b58105d-f8cd-441a-96a4-93f1dd472643.jpeg";
    var imgKulakcikWidth = 300;
   var html ='     <div id="smpl-popup-kulakcik-contain" style="position:fixed; z-index:5999; bottom:10px; right:-330px; ">\
   <div class="smpl-popup-kulakcik-close" style="cursor:pointer;width: 50px;height: 50px;right:0px;top:0px;position:absolute;z-index:6000;font-size:35px;color:white;text-align: center;font-weight: bold;">×</div>\
     <img style="width:'+ imgKulakcikWidth + 'px;" src="' + imgKulakcik + '">\
     <a class="smpl-popup-kulakcik-send" style="cursor:pointer;position:absolute;width:100%;height:150px;bottom:0px;left:0px;" href="javascript:void(0)"></a>\
 </div>\
 '
 jQuery('body').append(html);
 EightDigits.utils.setCookie('ed-' + config.analytics + '-Shown', 'on')

 EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik');

 jQuery('#smpl-popup-kulakcik-contain').animate({
        right:"10px"
 },1200)

 jQuery('.smpl-popup-kulakcik-send').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik');

    window.location.href="https://www.touristica.com.tr/uye-ol";

 })
 jQuery('.smpl-popup-kulakcik-close').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Close_Kulakcik');

    jQuery('#smpl-popup-kulakcik-contain').animate({
        right:"-330px"
 },1200)
 setTimeout(function(){
    jQuery('#smpl-popup-kulakcik-contain').remove();

 },1201)
 })


}

            },
            control: function () {
              if(EightDigits.utils.getCookie('ed-' + config.analytics + '-Shown') ==="on"){
                  return false;
              }
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
    var _ed_Lead_Generation_Popup = new EightDigits.sf();
    _ed_Lead_Generation_Popup.Lead_Generation_Popup();
})();







         
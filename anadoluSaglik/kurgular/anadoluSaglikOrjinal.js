(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Sizi_Dinliyoruz_Kulakcik")) {
      return false
  }
  EightDigits.sf.prototype.Sizi_Dinliyoruz_Kulakcik = function () {

      var config = {
          scenarioname: "Sizi_Dinliyoruz_Kulakcik",
          analytics: "Sizi_Dinliyoruz_Kulakcik",
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
             


if(window.location.pathname==="/" || window.location.href.indexOf("/e-doktor?utm_source=programmatic&utm_medium=display&utm_campaign=edoktor")>-1 || window.location.href.indexOf("/hastane-olanaklari/tibbi-ikinci-gorus?utm_source=programmatic&utm_medium=display&utm_campaign=tibbigorus")>-1){
  var style = "\
  <style>\
  .smpl-sizi-dinliyoruz-kulakcik{\
  position:fixed;\
  bottom:207px;\
  left:-200px;\
  z-index:55555;\
  width:186px;\
  transform: rotate(90deg);\
  cursor:pointer;\
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
  
  
  jQuery('body').append(html);
if(window.innerWidth>760){
  var randomVal;
  if(!EightDigits.utils.getCookie('ed-sizidinliyoruz-test')){
      randomVal = Math.floor((Math.random() * 10000) + 1);
      EightDigits.utils.setCookie('ed-sizidinliyoruz-test', randomVal);
    }
    else{
       randomVal= Number(EightDigits.utils.getCookie('ed-sizidinliyoruz-test'))
    }
  if(randomVal<=5000){
      if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-NotshownA')) {
          EightDigits.analytics.sendEvent(config.analytics, 'NotShown_A');
          EightDigits.utils.setCookie('ed-' + config.analytics + '-NotshownA', 'on')
      }
  }
  else{
      jQuery('.smpl-sizi-dinliyoruz-kulakcik').animate({
          left:"-71px"
      },1000)
      if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
          EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik_A');
          EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
      }
      
      jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function(e){
          
          EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_A');
  
          window.location.href= "https://www.anadolusaglik.org/sizi-dinliyoruz?utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz"
  
  })
  }
}
else{
    
      jQuery('#_sorun_icon').remove()
      jQuery('.smpl-sizi-dinliyoruz-kulakcik').css({"width":"172px","bottom":"0px","transform":"unset","left":"unset","right":"-300px"})
      jQuery('.smpl-sizi-dinliyoruz-kulakcik').animate({
          right:"0px"
      },1000) 
      if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
          EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik_Mobil');
          EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
      }

  
  jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function(e){
      
      EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Mobil');

      window.location.href= "https://www.anadolusaglik.org/sizi-dinliyoruz?utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz"

})
}

  
}
else{
   if(window.location.href.indexOf("?utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz")>-1){

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
              // if(!(window.location.pathname==="/" || window.location.pathname==="/sizi-dinliyoruz")){
              //     return false;
              // }
          },
          init: function () {
              if (main.factory.prototype.control() == false) {
                  return false
              }
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                      if(window.innerWidth>760){
                          EightDigits.analytics.sendEvent(config.analytics, 'NotShown_A');
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
  var _ed_Sizi_Dinliyoruz_Kulakcik = new EightDigits.sf();
  _ed_Sizi_Dinliyoruz_Kulakcik.Sizi_Dinliyoruz_Kulakcik();
})();


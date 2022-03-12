(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Huawei_Buton_Two")) {
      return false
  }
  EightDigits.sf.prototype.Huawei_Buton_Two = function () {
      var config = {
          scenarioname: "Huawei_Buton_Two",
          analytics: "Huawei_Buton_Two",
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
             
var style = '<style>\
.btn_ed img:hover{\
  -webkit-transition-duration: 0.7s;\
  filter: brightness(85%);\
}\
@media screen and (max-width: 600px) {\
  .btn_ed{\
      margin-top: 15px;\
      display: inline-block;\
  }\
}\
@media screen and (min-width: 767px) {\
  .smpl_button {\
   display: flex;\
   justify-content:center;\
  }\
  .smpl_button_image {\
   height:40px;\
   width:40%;\
   margin-top: 10px;\
  }\
 }\
 @media screen and (min-width: 1200px) {\
  .smpl_button {\
   display: inline;\
   justify-content:center;\
  }\
  .smpl_button_image {\
   width:28%;\
   margin-top: 0;\
    height: 40px;\
  }\
 }\
</style>'
jQuery('head').append(style);
if(window.innerWidth>767){
  //Desktop
  var html = '<a href="https://www.maximum.com.tr/TR/ticari-kartlar/Sayfalar/ticari.aspx" target="_blank" class="btn_ed hidden-xs smpl_button"><img class="smpl_button_image" src="/content-management/PublishingImages/Maximum%202017/Maximum_Mobil/android.png" style="padding-right:5px;"  alt=""></a>'
jQuery('.mobile_parallax_btn2').after(html)
      EightDigits.analytics.sendEvent(config.analytics, 'Shown_Desktop');
}
jQuery('.btn_ed').click(function(){
  if(window.innerWidth>767){
          EightDigits.analytics.sendEvent(config.analytics, 'Click_Desktop');
  }
})
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
  var _ed_Huawei_Buton_Two = new EightDigits.sf();
  _ed_Huawei_Buton_Two.Huawei_Buton_Two();
})();

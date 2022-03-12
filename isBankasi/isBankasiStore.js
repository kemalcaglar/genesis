(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Huawei_Buton")) {
      return false
  }
  EightDigits.sf.prototype.Huawei_Buton = function () {
      var config = {
          scenarioname: "Huawei_Buton",
          analytics: "Huawei_Buton",
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
</style>'
jQuery('head').append(style);
if(window.innerWidth>767){
  //Desktop
  var html = '<a href="https://www.maximum.com.tr/TR/ticari-kartlar/Sayfalar/ticari.aspx" target="_blank" class="btn_ed"><img src="/content-management/PublishingImages/Maximum%202017/Maximum_Mobil/android.png" style="padding-right:5px;"  alt=""></a>'
jQuery('.col-mobile-area:eq(1)').append(html)
      EightDigits.analytics.sendEvent(config.analytics, 'Shown_Desktop');
}
else{
  //Mobile
  var html = '<a href="https://www.maximum.com.tr/TR/ticari-kartlar/Sayfalar/ticari.aspx" target="_blank" class="btn_ed"><img src="/content-management/PublishingImages/Maximum%202017/Maximum_Mobil/android.png" style="padding-right:5px;"  alt=""></a>'
  jQuery('.col-mobile-area:eq(1)').append(html)
      EightDigits.analytics.sendEvent(config.analytics, 'Shown_Mobile');
}
jQuery('.btn_ed').click(function(){
  if(window.innerWidth>767){
          EightDigits.analytics.sendEvent(config.analytics, 'Click_Desktop');
  }
  else{
          EightDigits.analytics.sendEvent(config.analytics, 'Click_Mobile');
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
  var _ed_Huawei_Buton = new EightDigits.sf();
  _ed_Huawei_Buton.Huawei_Buton();
})();

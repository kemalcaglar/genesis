(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Ucretsiz_Ulasim_Mobile")) {
      return false
  }
  EightDigits.sf.prototype.Ucretsiz_Ulasim_Mobile = function () {
      var config = {
          scenarioname: "Ucretsiz_Ulasim_Mobile",
          analytics: "Ucretsiz_Ulasim_Mobile",
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
            
css = '<style>\
.smpl-tooltipTwo{position: absolute;width: 350px;right: -2px;margin-top: -200px;border-radius: 6px;padding: 4px 5px;background-color: #555!important;z-index:999999;display:none;}\
.smpl-tooltipTwo_inner{text-align: center; font-size:12px; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;color: #c4c4c4!important }\
.smpl-tooltipTwo_inner .rule{padding:2px;}\
.smpl-arrow-rightTwo{width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 12%;margin-top: -35px;display:none;transform: rotate(90deg);-webkit-transform: rotate(90deg);}\
.smpl-arrow-leftTwo{z-index:9999999;width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 60%;margin-top: -16px;display:none;transform: rotate(180deg);-webkit-transform: rotate(180deg);}\
</style>'
jQuery('head').append(css);

var html = `<div class="smpl-tasimaBanner-tooltip-container" style="
background: #4bca63;
border: 2px solid #4bca63;
color: #fff;
padding: 10px 14px;
font-size: 13px;
cursor: pointer;
position: relative;
width: 100%;
display: flex;
align-items: center;
margin-top: 15px;
margin-bottom: 15px;">
<i class="fas fa-bus" style="padding-right:3px;color:#fff;"></i>
<span class="smpl-tasimaBanner-text" style="
  color: #fff;
  text-align: left;
  padding-left: 20px;
  line-height: 15px;
  font-size: 14px;
  flex: 1;
  margin: 0 6px;"> Ücretsiz Transfer Fırsatı</span>
<span class="smpl-tasimaBanner-btn" style="
  border: 1px solid #4bca63;
  width: 74px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgb(109 101 101 / 50%);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #4bca63 !important;
  text-transform: uppercase;">DETAYLAR</span>
<div class="smpl-arrow-rightTwo"></div>\
<div class="smpl-tooltipTwo">\
<div class="smpl-tooltipTwo_inner">\
 <div class="rule">01.05-30.09 tarihleri arasında yapılacak 5 gece ve üzeri konaklamalarda Havalimanı – Otel - Havalimanı Eco Transfer hizmeti ücretsiz olarak sunulacaktır. Hizmetten faydalanabilmek için Rezervasyon Bilgileri alanında Transfer İstiyorum seçeneğinin işaretlenmesi gerekmektedir. Setur kampanya şartlarında değişiklik yapma hakkına sahiptir.</div>\
</div></div>`
jQuery(".smpl-odemeBanner-tooltip-container").after(html);


var htmlTwo = `<div class="smplTransfer" style="
color:#a6a6a6;
font-size:13px;
display: block;
cursor: pointer;
position: relative;
margin-top:5px;">
<i class="fas fa-bus" style="padding-right:3px;color:#4bca63;"></i> Ücretsiz Transfer
<span class="smplTransferTooltip" style="
display:none;
background: #555;
padding: 6px;
position: absolute;
top: -25px;
left: 115px;
color: white;
text-align: center;
z-index: 3;
border-radius: 6px;
font-size: 11px;
line-height: 1.5em;
width: 169px;">3 gece ve üzeri konaklamalarda havalimanı-otel-havalimanı transferinden ücretsiz yararlanabilmek için uçuş bilgilerinizi, uçuştan 48 saat önce tursatis@setur.com.tr adresine göndermeniz gerekmektedir.
</span></div>
<div class="smpl-arrow-leftTwo"></div>`
jQuery(".mobile-board-type").append(htmlTwo);
jQuery(".mobile-board-type").css({"margin-top":"-10px"});

EightDigits.analytics.sendEvent(config.analytics, "Shown");

jQuery( ".smpl-tasimaBanner-tooltip-container" ).click(function() {
  jQuery( ".smpl-arrow-rightTwo" ).toggle( "slow" );
  jQuery( ".smpl-tooltipTwo" ).toggle( "slow" );
  EightDigits.analytics.sendEvent(config.analytics, "Shown_Tooltip_Tasima");
});
jQuery('.smpl-tasimaBanner-tooltip-container').click(function(event){
  event.stopPropagation();
});


  jQuery( ".smplTransfer" ).click(function() {
    jQuery( ".smpl-arrow-leftTwo" ).toggle( "slow" );
    jQuery( ".smplTransferTooltip" ).toggle( "slow" );
    EightDigits.analytics.sendEvent(config.analytics, "Shown_Tooltip_Transfer");
  });
  jQuery( ".smplTransfer" ).click(function(event){
    event.stopPropagation();
  });

  jQuery(window).click(function() {
    jQuery('.smpl-arrow-rightTwo').css('display', 'none');
    jQuery('.smpl-tooltipTwo').css('display', 'none');
    jQuery( ".smpl-arrow-leftTwo" ).css('display', 'none');
    jQuery( ".smplTransferTooltip" ).css('display', 'none');
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
  var _ed_Ucretsiz_Ulasim_Mobile = new EightDigits.sf();
  _ed_Ucretsiz_Ulasim_Mobile.Ucretsiz_Ulasim_Mobile();
})();

(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Ucretsiz_Ulasim_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Ucretsiz_Ulasim_Desktop = function () {
        var config = {
            scenarioname: "Ucretsiz_Ulasim_Desktop",
            analytics: "Ucretsiz_Ulasim_Desktop",
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
  .smpl-arrow-rightTwo{width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 12%;margin-top: -34px;display:none;transform: rotate(90deg);-webkit-transform: rotate(90deg);}\
  .smpl-arrow-leftTwo{z-index:9999999;width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 66%;margin-top: -3px;display:none;transform: rotate(-90deg);-webkit-transform: rotate(-90deg);}\
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
    color: #43567b !important;
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
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-right:25px;">
  <i class="fas fa-bus" style="padding-right:3px;color:#4bca63;"></i> Ücretsiz Transfer
  <span class="smplTransferTooltip" style="display: none;
  background: #555;
  padding: 12px;
  position: absolute;
  top: 35px;
  left: -54px;
  color: white;
  width: 310px;
  text-align: center;
  z-index: 3;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.5em;">3 gece ve üzeri konaklamalarda havalimanı-otel-havalimanı transferinden ücretsiz yararlanabilmek için uçuş bilgilerinizi, uçuştan 48 saat önce tursatis@setur.com.tr adresine göndermeniz gerekmektedir.
  </span></div>
  <div class="smpl-arrow-leftTwo"></div>`
  jQuery(".hoteldetail-hotel-map").after(htmlTwo);
  
  EightDigits.analytics.sendEvent(config.analytics, "Shown");
  
  jQuery('.smplTransfer').mouseover(function () {
    jQuery('.smplTransferTooltip').css('display', 'none');
    jQuery('.smpl-arrow-leftTwo').css('display', 'block');
    jQuery(this).find('.smpl-arrow-leftTwo').css('display', 'block');
    jQuery(this).find('.smplTransferTooltip').css('display', 'block');
    EightDigits.analytics.sendEvent(config.analytics, "Shown_Tooltips");
  });
  jQuery('.smplTransfer').mouseout(function () {
    jQuery('.smpl-arrow-leftTwo').css('display', 'none');
    jQuery('.smplTransferTooltip').css('display', 'none');
  });
  jQuery('.smpl-tasimaBanner-tooltip-container').mouseover(function () {
    jQuery('.smpl-arrow-rightTwo').css('display', 'none');
    jQuery('.smpl-tooltipTwo').css('display', 'none');
    jQuery(this).find('.smpl-arrow-rightTwo').css('display', 'block');
     jQuery(this).find('.smpl-tooltipTwo').css('display', 'block');
  });
  jQuery('.smpl-tasimaBanner-tooltip-container').mouseout(function () {
    jQuery('.smpl-arrow-rightTwo').css('display', 'none');
     jQuery('.smpl-tooltipTwo').css('display', 'none');
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
    var _ed_Ucretsiz_Ulasim_Desktop = new EightDigits.sf();
    _ed_Ucretsiz_Ulasim_Desktop.Ucretsiz_Ulasim_Desktop();
  })();
  
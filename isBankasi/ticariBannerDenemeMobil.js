var style = '<style>\
.smpl_engCev {\
  width: 100%;\
  clear: both;\
  float: none;\
}\
.smpl_ContentCover{\
  width: 100%;\
  max-width: 1116px;\
  margin: auto;\
  padding-left: 10px;\
  padding-right: 10px;\
}\
.smpl_FontSize {\
  font-size: 16px;\
}\
.smpl_Cerceve {\
  width: 1116px;\
  margin: auto;\
  box-shadow: 0 10px 10px 0 rgba(0,0,0,.14);\
  border: 1px solid #ebedf2;\
  color: #100f0f;\
  font-size: 16px;\
  font-family: ProximaR;\
  padding: 20px 20px 20px 20px;\
  border-radius: 5px;\
  text-align: justify;\
  display: table;\
  width: 100%\
}\
.smpl_PushLeft {\
  float: left;\
}\
.smpl_PushRight {\
  float: right;\
}\
.smpl_ImgDivOne {\
  width: 105px;\
  height: 85px;\
}\
.smpl_ImgOne {\
  border-radius:15px;\
  display: inline !important;\
}\
.smpl_Text {\
  width: calc(100% - 105px);\
  text-align: left;\
}\
.smpl_TextDiv {\
  float: none;\
  clear: both;\
}\
.smpl_Desc {\
  float: none;\
  clear: both;\
  color: #4a4a4a;\
  font-size: 16px !important;\
  font-family: ProximaR !important;\
}\
.smplP {\
  float: none;\
  clear: both;\
  color: #464545;\
  font-size: 16px !important;\
  font-family: ProximaR;\
  margin-left: 10px;\
  margin-top: 15px;\
}\
.smpl_Btc {\
  padding-top: 20px;\
  display: table;\
  margin: auto;\
}\
.smpl_storeimgLink1 {\
  float: left;\
  width: 150px;\
}\
.smpl_storeimgLink2 {\
  width: 150px;\
  margin-left: 10px;\
  float: left;\
}\
.smpl_storeimgLink3 {\
  margin-top: 10px;\
  margin-left: 70px;\
}\
.smpl_Spacer20 {\
  float: none;\
  clear: both;\
  width: 100%;\
  height: 20px;\
}\
</style>'

jQuery('head').append(style);

var html = '<div class="smpl_engCev">\
<div class="smpl_ContentCover">\
<div class="smpl_FontSize">\
<div class="smpl_engCev">\
<div class="smpl_Cerceve">\
<div class="smpl_PushLeft">\
<div class="smpl_PushLeft">\
<img class="smpl_ImgOne" title="" tmp_title="" src="https://gorsel.isbank.com.tr/markisbank/dijitalkasacomtr.png">\
</div>\
<div class="smpl_PushLeft smpl_FontSize smpl_Text">\
<div class="smpl_TextDiv">\
<div class="smpl_Desc"><div class="smpl_FontSize">\
<p class="smplP">???Yeni g??venli depolama alan??n??z Dijital Kasa ilk 3 ay ??cretsiz!</p></div></div>\
</div>\
</div>\
</div>\
<div class="smpl_FontSize smpl_PushRight">\
<div class="smpl_Btc">\
<div class="smpl_storeimgLink1">\
<a href="https://play.google.com/store/apps/details?id=com.isbank.dijitalkasa" class="m_hide" target="_blank" rel="noFollow noopener" style="display: inline !important;">\
<img src="https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/store/gplay_st_lg_06.png" style="width: 100%;"></a>\
</div>\
<div class="smpl_storeimgLink2">\
<a href="https://apps.apple.com/tr/app/dijital-kasa/id1482402356?l=tr" id="ctl00_ctl08_g_f3568b89_7c47_4cb2_b251_3cfcc34c0266_ctl00_imgLink2" class="m_hide" target="_blank" rel="noFollow noopener" style="display: inline !important;">\
<img src="https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/store/aplle_st_lg_08.png" style="width: 100%;"></a>\
</div>\
<div class="smpl_storeimgLink2 smpl_storeimgLink3">\
<a href="https://apps.apple.com/tr/app/dijital-kasa/id1482402356?l=tr" id="ctl00_ctl08_g_f3568b89_7c47_4cb2_b251_3cfcc34c0266_ctl00_imgLink2" class="m_hide" target="_blank" rel="noFollow noopener" style="display: inline !important;">\
<img src="https://gorsel.isbank.com.tr/markisbank/appgallery.jpg" style="width: 100%; height: 52.6px;"></a>\
</div>\
</div>\
</div>\
</div>\
</div>\
<div class="smpl_Spacer20"></div>\
</div>\
</div>\
</div>'

if (window.location.pathname == "/TR/kampanyalar/Sayfalar/kampanyalar.aspx"){
  jQuery("#ctl00_m_g_ce124bcb_649e_46a4_af61_cc0b02d6dfa1").after(html);
  jQuery(".smpl_storeimgLink1").click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Desktop');
  })
  jQuery(".smpl_ClickLink2").click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Desktop');
  })
  jQuery(".smpl_storeimgLink3").click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Desktop');
  })
  EightDigits.analytics.sendEvent(config.analytics, 'Shown_Desktop');
}
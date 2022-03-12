var html ='<div id="smpl-kulakcik-main" style="position:\
fixed;top: 50%;\
z-index: 999999;\
display: flex;\
background: #f59100;\
transform: rotate(90deg);\
height: auto;\
justify-content:\
center;text-align:\
center;align-items:\
center;\
color: #fff;\
font-size: 14px;\
line-height: 2.2rem;\
padding: 10px;\
margin-left: -30px;\
border-radius: 0 0 10px;\
box-shadow: 2px 1px 2px 1px #1492c7;\
letter-spacing: 2px;"><span style="\
">App’i İndir</span>\
</div>\
<div class="az-element az-ctnr az-column col-sm-3 smpl-kulakcik" id="gbg1jxirt8" style="\
    border: 2px solid #1593c8;\
    z-index: 9999;\
    display:none;\
    position: fixed;\
    width: 30%;\
    top: 30%;\
    background: #fefefe;\
    padding: 25px;\
    box-shadow: 5px 5px #27b16b, 10px 10px #f9a533,15px 15px #1593c8;\
"><span class="smpl-kulakcik-close" style="right: 3px;position: absolute;top: 0;font-size: 30px;margin-top: -8px;">×</span>\
<div class="az-element az-text" id="gbznso6dtl" style="\
"><div class="footer-col white-bg" style="\
"><h6 style="\
    color: #1593c8;\
    font-size: 11px;\
">YENİ MULTİPAY`İ İNDİRİN</h6><ul class="smpl-app-download" style="list-style: none;width: 150%;margin-left: -13px;"><li style="\
    margin-bottom: 5px;\
"><a href="https://play.google.com/store/apps/details?id=com.mobisoft.multimobil" tabindex="-1" target="_blank"><img alt="" src="/themes/custom/multinet/images/google-play-icon.png" data-src="/themes/custom/multinet/images/google-play-icon.png" data-done="Loaded"></a></li><li style="\
    margin-bottom: 5px;\
"><a href="https://apps.apple.com/tr/app/multipay/id680381668?l=tr" tabindex="-1" target="_blank"><img alt="" src="/themes/custom/multinet/images/app-store-icon.png" data-src="/themes/custom/multinet/images/app-store-icon.png" data-done="Loaded" class=""></a></li><li style=""><a href="https://appgallery.huawei.com/#/app/C102647165?channelId=channel_multipay&amp;referrer=referrer_multipay&amp;id=51b2e27cc3ea49bea3592628412c114b&amp;s=3AE552AA455CDF514CA8605697C6801AE2E7C58E65A332A0B7AA33BD7D2B8166&amp;detailType=0&amp;v=" tabindex="-1" target="_blank"><img alt="" src="sites/default/files/glazed-cms-media/huawei_logo.226_2png.png" data-src="sites/default/files/glazed-cms-media/huawei_logo.226_2png.png" data-done="Loaded" class="" style="\
    border-radius: -1px;\
"></a></li></ul></div></div></div>\
</div>\
'
jQuery("body").append(html);
setLevel(LEVEL_JOIN, "shown-kulakcik");
jQuery("#smpl-kulakcik-main").click(function(){
    jQuery("#smpl-kulakcik-main").hide();
    jQuery(".smpl-kulakcik").css({"display":"block"})
})
jQuery(".smpl-kulakcik-close").click(function(){
    jQuery(".smpl-kulakcik").css({"display":"none"})
    jQuery(".smpl-kulakcik").hide();
    jQuery("#smpl-kulakcik-main").css({"display":"block"})
    setLevel(LEVEL_JOIN, "click-close");
})
jQuery(".smpl-app-download li").click(function(){
    setLevel(LEVEL_JOIN, "click-app");
})
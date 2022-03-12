var img = 'https://cdn.hellosmpl.com/uploads/2021/07/09/fpogs9s4h2vm6gf5mf3rbutfv0.jpg';

var html = '<div class="smpl-izinler-kulakcik" style="position:fixed;display:flex;right:-24px;;z-index: 999999;cursor:pointer;background: red;top:\
'+ (window.innerHeight + 200) / 2 + 'px;\
opacity: 0.8;color: white;line-height: 2em;padding: 10px;transform: rotate(-90deg);cursor: pointer;letter-spacing: 1px;">\
<span>İzinleriniz</span>\
</div>\
<div class="smpl-kulakcik-izinler-img" style="position:fixed;display:flex;right:-400px;z-index: 999999;cursor:pointer;top:\
'+ (window.innerHeight + 200) / 2 + 'px;">\
    <a href="https://www.porland.com/katalog"><img class="smpl-izinler-img" src="' + img + '"></a>\
        <span class="smpl-izinler-close" style="position: absolute;right: 10px;font-size: 25px;color: #fff;cursor: pointer;top: 0;">×</span>\
                  </div>\
'
jQuery("._hj_feedback_container").after(html);
jQuery(".smpl-izinler-kulakcik").click(function(){
    setLevel(LEVEL_JOIN,'shown-kulakcik');
    jQuery(".smpl-izinler-kulakcik").hide();
    jQuery('.smpl-kulakcik-izinler-img').animate({
        right:"0"
},1200)
})
jQuery('.smpl-izinler-close').click(function () {
    setLevel(LEVEL_EXIT,'click-close');
    jQuery('.smpl-kulakcik-izinler-img').remove();
});
jQuery('.smpl-izinler-img').click(function () {
    setLevel(LEVEL_JOIN,'click-img');
});

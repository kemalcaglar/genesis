if (status) {
    var html ='<div id="smpl-kulakcik-main" style="display:block;">\
<img src="https://cdn.hellosmpl.com/uploads/2021/04/15/np29ru6k9lonccsivrbbh5v1b7.png" style="\
position: fixed;\
top: 50%;\
z-index: 999999;\
left: 0;\
width: 13%;\
" class="smpl-kulakcik-logo">\
</div>\
'
jQuery("body").append(html);
setLevel(LEVEL_JOIN, "shown-kulakcik");
jQuery(".smpl-kulakcik-logo").click(function(){
    setTimeout(function(){
        jQuery("html, body").animate(
            {
              scrollTop: jQuery(".footer-col.white-bg").offset().top - 50,
            },
            2000
          );
     },100)
})
jQuery(".smpl-kulakcik-close").click(function(){
jQuery(".smpl-kulakcik").css({"display":"none"})
jQuery(".smpl-kulakcik").hide();
jQuery(".smpl-kulakcik-logo").css({"display":"block"})
})
jQuery(".smpl-app-download li").click(function(){
setLevel(LEVEL_JOIN, "click-app");
})

<div id="smpl-kulakcik-main" style="position:\
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
margin-left: -22px;\
border-radius: 0 0 10px;\
box-shadow: 2px 1px 2px 1px #1492c7;"><span style="\
">App'i indir</span>\
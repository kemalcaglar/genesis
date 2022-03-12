var smpl = {
    setCookie: function (cname, cvalue, min) {
        var d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    },
    getCookie: function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
}
var kapaliKulakcik =
    '\
    <div id="smpl_kulakcik_main-kapali" style="position:fixed; display:block; z-index:9999; bottom:-3px; right:100px;width: 320px;cursor:pointer; ">\
<div class="smpl_textArea" style="width: 85%;\
height: 48px;\
margin-top: 20px;\
background-color: #f07b05;\
display: flex;\
justify-content: center;\
align-items: center;\
font-size: 24px;\
font-weight: bold;\
font-style: italic;\
color: #fff;">\
  Voucher Code\
</div>\
        <div class="smpl_kulakcik_close-kapali" style="position: absolute;\
z-index: 999999;\
right: 12%;\
top: 5px;\
font-weight: bold;\
width: 25px;\
height: 25px;\
text-align: center;\
color: white;\
line-height: 24px;\
font-size: 16px;\
cursor: pointer;\
background-color: black;\
border-radius: 50%;">&times;</div>\
    </div>';
var kulakcik =
    '\
    <div id="smpl_kulakcik_main" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px; ">\
        <img id="smpl_kulakcik_image" src="https://cdn.8digits.com/log/r/6c8d356c-6b19-4be2-9fc2-b3359961f310.jpeg" style="cursor:pointer; width:320px;">\
        <div class="smpl_kulakcik_close" style="position: absolute;\
z-index: 999999;\
right: 6px;\
top: 2px;\
font-weight: bold;\
width: 25px;\
height: 25px;\
text-align: center;\
color: white;\
line-height: 26px;\
font-size: 16px;\
cursor: pointer;\
background-color: black;\
border-radius: 50%;">&#8722;</div>\
        <input id="smpl_kulakcik_couponCode" type="text" readonly value="25OFF40" style="background:#fde708;position:absolute;z-index:9999;right:70px;top:205px;font-weight: bold;width:178px;height:33px;text-align:center;color:black;line-height: 31px;font-size: 24px;cursor:pointer;"></input>\
        <div class="ed-noticonsmpl" style="display:none; width: 258px;position: absolute;z-index: 9999;top: -40px;left: 22px;font-size: 15px;font-weight: bold;background-color: rgb(44, 151, 222);color: white;text-align: center;line-height: 38px;border-radius:5px;display:none;justify-content:center;align-items:center;">Your Code is Copied</div>\
        </div>';
        function showKulakcik(){
            jQuery("body").append(kapaliKulakcik);
            jQuery("body").append(kulakcik);
            setLevel(LEVEL_JOIN, "shown-kulakcik")
            jQuery("#smpl_kulakcik_main-kapali").click(function () {
                jQuery(this).css({ "display": "none" });
                jQuery("#smpl_kulakcik_main").css({ "display": "flex" });
                setLevel(LEVEL_JOIN, "click-kulakcik")
            })
            jQuery(".smpl_kulakcik_close-kapali").click(function () {
                jQuery("#smpl_kulakcik_main-kapali").remove();
                setLevel(LEVEL_EXIT, "click-closeKulakcik")
            })
            jQuery(".smpl_kulakcik_close").click(function () {
                jQuery("#smpl_kulakcik_main-kapali").css({ "display": "block" });
                jQuery("#smpl_kulakcik_main").css({ "display": "none" });
                setLevel(LEVEL_EXIT, "click-closeImg")
            })
            jQuery('#smpl_kulakcik_main').click(function () {
                var copyText = document.getElementById('smpl_kulakcik_couponCode');
                copyText.select();
                document.execCommand("copy");
                jQuery(".ed-noticonsmpl").css({"display":"block"})
                setLevel(LEVEL_JOIN, "click-kuponKodu")
              })
        }
  if(window.location.href.indexOf("/uk/?utm_source=instagram&utm_medium=newsfeed&utm_campaign=25_off_40") > -1 || window.location.href.indexOf("/uk/?utm_source=google&utm_medium=newsfeed&utm_campaign=25_off_40") > -1 || window.location.href.indexOf("/uk/?utm_source=facebook&utm_medium=newsfeed&utm_campaign=25_off_40") > -1 ){
    showKulakcik();
    smpl.setCookie("smplCoupon", 1);
  }else if (window.location.pathname.indexOf("/uk/") > -1 && smpl.getCookie("smplCoupon", 1)){
    showKulakcik();
  }
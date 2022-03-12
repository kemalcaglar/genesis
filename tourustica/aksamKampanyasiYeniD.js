function setCookie(key, value, days) {
    var expires = new Date();
    if (days) {
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    } else {
        document.cookie = key + '=' + value + ';expires=Fri, 30 Dec 9999 23:59:59 GMT;';
    }
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

var date = new Date;
var hour = date.getHours();
if (hour > 21 && hour < 24 || hour > -1 && hour < 9) {
    if (window.location.pathname == "/") {
        if (!getCookie('yearPopup')) {
            var img =
                "https://cdn.8digits.com/log/r/5c9f9b10-730e-4144-8e05-5821560c0e7e.jpeg";
            var html = `<div class="smpl-kulakcik-kampanya" style="position:fixed;display:flex;left:0;bottom:40%;z-index: 999999;cursor:pointer;">
            <img class="smpl-img" src="`+img+`">
            <span class="smpl-kampanya-close" style="position: absolute;right: 10px;font-size: 25px;color: white;cursor: pointer;">×</span>
            <span class="copy-kod" style="font-size:11px;display:none;z-index:999999;background-color:white;position:absolute;padding:6px;bottom:-30px;left:31%;border-radius:5px;border:1px solid rgb(0, 0, 0);">KOD KOPYALANDI</span>
            </div>
`;
            jQuery("body").prepend(html);
            jQuery(".smpl-kampanya-close").click(function(){
                EightDigits.analytics.sendEvent(config.analytics, 'click_close');
                jQuery(".smpl-kulakcik-kampanya").remove();
            })
            jQuery('.smpl-img').click(function(){
                if(jQuery('.copy-kod').css("display")==="none"){
                    jQuery('.copy-kod').fadeIn("fast");
                    setTimeout(function(){
                        jQuery('.copy-kod').fadeOut("fast");
                    },2000)
                }
                setCookie('copyKod', 1, 2);
                EightDigits.analytics.sendEvent(config.analytics, 'click_copy');
            })
            EightDigits.analytics.sendEvent(config.analytics, 'shown_kulakcik');
            setCookie('yearPopup', 1, 365);
        }
    }else if (window.location.href.indexOf("Booking")>-1){
        if (getCookie('copyKod')) {
            jQuery("#txtResponseSummaryPromotionCode").attr("value","HZRNFIRSAT")
            EightDigits.analytics.sendEvent(config.analytics, 'shown_kod');
        }
    } else {
        if (!getCookie('yearPopup')) {
            var css = `
        <style>
        .smpl-popup-main {
          position: fixed;
          z-index: 999999;
          top: 0px;
          width: 100%;
          height: 100vh;
        }
          .smpl-overlay {
            position: absolute;
            z-index: 999998;
            background-color: rgba(0, 0, 0, 0.6);
            top: 0px;
            width: 100%;
            height: 100vh;
          }
        
          .smpl-content {
            position: absolute;
            z-index: 99999999;
          }
            .smpl-close {
              cursor: pointer;
              width: 30px;
              height: 50px;
              right: 10px;
              top: 4px;
              position: absolute;
              z-index: 9999;
              font-size: 35px;
              color: #fff;
              text-align: center;
              font-weight: bold;
            }
        </style>`
            jQuery("head").append(css);

            var imageWidth = 700;
            var img =
                "https://cdn.8digits.com/log/r/ad9f2816-a50f-4b00-9307-86dc14afa45d.jpeg";

            var html = `
    <div class="smpl-popup-main">
    <div class="smpl-overlay"></div>
    <div class="smpl-content" style="top:` +
                (window.innerHeight - 400) / 2 +
                "px;left:" +
                (window.innerWidth - 600) / 2 +
                `px;">
    <div class="smpl-close">×</div>
    <img class="smpl-popup-img" style="cursor:pointer;width:` +
                imageWidth +
                `px;" src="` +
                img +
                `">
                <span class="copy-kod" style="font-size:11px;display:none;z-index:999999;background-color:white;position:absolute;padding:6px;bottom:0px;left:45%;border-radius:5px;border:1px solid rgb(0, 0, 0);">KOD KOPYALANDI</span>
      </div>
    </div>
    `;
            jQuery("body").prepend(html)
            jQuery(".smpl-close").click(function () {
                EightDigits.analytics.sendEvent(config.analytics, 'click_close');
                jQuery(".smpl-popup-main").remove();
            })
            jQuery(".smpl-overlay").click(function () {
                EightDigits.analytics.sendEvent(config.analytics, 'click_overlay');
                jQuery(".smpl-popup-main").remove();
            })
            jQuery('.smpl-popup-img').click(function(){
                if(jQuery('.copy-kod').css("display")==="none"){
                    jQuery('.copy-kod').fadeIn("fast");
                    setTimeout(function(){
                        jQuery('.copy-kod').fadeOut("fast");
                    },2000)
                }
                setCookie('copyKod', 1, 2);
                EightDigits.analytics.sendEvent(config.analytics, 'click_copy');
            })
            EightDigits.analytics.sendEvent(config.analytics, 'shown_popup');
            setCookie('yearPopup', 1, 365);
        }
    }
}
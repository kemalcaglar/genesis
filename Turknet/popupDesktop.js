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


if(getCookie('yearPopup') == "1"){
var css = '<style>\
.smpl-overlayPopup {\
  position: fixed;\
  width: 100%;\
  height: 100%;\
  top: 0;\
  left: 0;\
  right: 0;\
  bottom: 0;\
  z-index: 99999999;\
  background-color: rgba(0,0,0,0.5);\
}\
.smpl-contentPopup {\
  position: fixed;\
  top: 50%;\
  left: 50%;\
  transform: translate(-50%, -50%);\
  min-width: 30%;\
  box-sizing: border-box;\
  transition: 400ms all;\
  z-index: 999999;\
  max-height: 100%;\
  overflow: auto;\
  border-radius: 13px 13px 20px 20px;\
}\
.smpl-closePopup {\
    width: 24px;\
    height: 24px;\
    margin: 0 16px 34px 40px;\
    object-fit: contain;\
    opacity: 0.5;\
    right:0;\
    top:10px;\
    position:absolute;\
    cursor: pointer;\
  }\
</script>'
jQuery("head").append(css);
var html = '\
<div class="smpl-overlayPopup">\
<div class="smpl-contentPopup">\
<img style="border-radius: 15px;" src="https://cdn.hellosmpl.com/uploads/2021/05/05/8n2a9vt0op60rt5d6de7k9s4vv.png">\
<img class="smpl-closePopup" src="https://cdn.hellosmpl.com/uploads/2021/05/05/o164mslfk9dt5775ff2novl3d1.png">\
</div>\
</div>\
'
jQuery("body").prepend(html);
//setLevel(LEVEL_JOIN, "shown-popup");
jQuery(".smpl-closePopup").click(function(){
    jQuery(".smpl-overlayPopup").css({"display":"none"})
    // setLevel(LEVEL_JOIN, "click-close");
})
setCookie('yearPopup', 1, 365);
}
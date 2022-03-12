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
    object-fit: contain;\
    right: 8px;\
    top: 50px;\
    position: absolute;\
    color: white;\
    cursor: pointer;\
    font-size: 30px;\
    }\
  </script>'
  jQuery("head").append(css);
  var html = '\
  <div class="smpl-overlayPopup">\
  <div class="smpl-contentPopup">\
  <img style="border-radius: 15px;" src="https://cdn.hellosmpl.com/uploads/2021/04/27/5bt34ovipt79tsu24i560s27ru.png">\
  <span class="smpl-closePopup">&times</span>\
  </div>\
  </div>\
  '
  jQuery("body").prepend(html);
  //setLevel(LEVEL_JOIN, "shown-popup");
  jQuery(".smpl-closePopup").click(function(){
      jQuery(".smpl-overlayPopup").css({"display":"none"})
      // setLevel(LEVEL_JOIN, "click-close");
  })
  }
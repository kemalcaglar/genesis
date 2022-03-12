/************* Available Variables *************

 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  :
 types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
 positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
 sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
 orientation : HORIZONTAL, VERTICAL
 levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

 ************************************************/

export default (scenarioId, variationId, options, preview) => {
    initialize({type: TYPE_EMBEDED}, (config) => {
        onChangeConfig((newConfig) => {
            console.log('new Config', newConfig);
        });

        toggleShow((status) => {
            if (!options.controlVariation) {
                if (status) {
                    const smplObj = {
                        scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
                        scenarioName: "scenario-" + scenarioId + "-" + variationId,
                        linkIcon: "//cdn.8digits.com/f/u/9zyogdo2/91948c71-6a0b-47cb-9114-0d6a91f7b5e7.png",
                        linkPop: "//cdn.8digits.com/log/r/3e0b5207-296f-445e-830c-0b07aa13d461.png",
                        setCookie: function (cname, cvalue, min) {
                            let d = new Date();
                            d.setTime(d.getTime() + min * 60 * 1000);
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                        },
                        getCookie: function (name) {
                            let nameEQ = name + "=";
                            let ca = document.cookie.split(";");
                            for (let i = 0; i < ca.length; i++) {
                                let c = ca[i];
                                while (c.charAt(0) == " ") c = c.substring(1, c.length);
                                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                            }
                            return null;
                        }
                    };

                    function webPush() {
                        var css = `
                          <style>
                          .web-push-vibration {
                          animation: titresimEfekt 1s cubic-bezier(.36,.07,.19,.97) both;
                          transform: translate3d(0, 0, 0);
                          backface-visibility: hidden;
                          perspective: 1000px;
                          }
                          @keyframes titresimEfekt {
                          0%, 100% {
                            transform: translate3d(-1px, 0, 0);
                          }
                          
                          20%, 80% {
                            transform: translate3d(2px, 0, 0);
                          }
                          
                          30%, 50%, 70% {
                            transform: translate3d(-4px, 0, 0);
                          }
                          
                          40%, 60% {
                            transform: translate3d(4px, 0, 0);
                          }
                          }
                          </style>`
                        jQuery("head").append(css);
                        var tempSpace = (window.innerWidth - 650) / 2;

                        var html = '\
  <div id="ed-main_' + smplObj.scenarioName + '" style="position:fixed; z-index:99999; right:5px; bottom:42px; width:60px; height:60px; border-radius:50%; cursor:pointer ">\
  <div id="ed-noticon_' + smplObj.scenarioName + '" style="width:100%; height:100%; background-image:url(' + smplObj.linkIcon + '); background-position:center; background-repeat:no-repeat; background-size:cover; float:left; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.21), 0 0 11px rgba(0, 0, 0, 1); border-radius:50%; "></div>\
  <div class="ed-howMake' + smplObj.scenarioName + '" style=" cursor:pointer; display:none; position:absolute; width:280px; background-color:white; top:-290px; left:-18px; ">\
  <div class="ed-howMake_header' + smplObj.scenarioName + '" style=" line-height:35px;  width:100%; text-align:center; height:35px; font-size:14px; font-weight:bold; color:#58032e; border:1px solid #d7cfcf; " >Unblock Notifications</div>\
  <div class="ed-howMake_ins" style="width:100%; color:black; float:left; font-size:13px; padding-left:15px; " >Follow these instructions to allow notifications:</div>\
      <div class="ed-howMake_img" style="width:100%; padding:5% 5%; ">\
      <div class="ed-howMake_img_inner" style="width:100%; background-image:url(' + smplObj.linkPop + '); background-position:center; background-repeat:no-repeat; height:199px; background-size:254px 182px; float:left; "></div>\
      </div>\
  </div>\
  <div class="ed-triangledown' + smplObj.scenarioName + '" style="display:none; left:17px; top:-20px; position:absolute; width:0; height:0; border-left:14px solid transparent; border-right:14px solid transparent; border-top:14px solid #d7cfcf; "></div>\
  <div id="ed-hover' + smplObj.scenarioName + '" style="display:none; background-color:#0039A6; color:white; position:absolute; width:223px; text-align:center; height:47px; line-height:46px; font-size:14px; font-weight:bold; left:83px; border-radius:9px; top:13%; ">Bildirimlere Abone Ol!</div>\
  <div class="ed-triangle' + smplObj.scenarioName + '" style="display:none; width:0; height:0; border-top:12px solid transparent; border-right:13px solid #0039A6; border-bottom:12px solid transparent; position:absolute; left:70px; top:29%; "></div>\
  </div>'

                        var popUpHtml = '\
  <div id="ed-popUp-main_' + smplObj.scenarioName + '" style="position:fixed; z-index:9999999; width:100%; height:100%; background-color:rgba(0,0,0,0.3)">\
  <div style="position:absolute; top:141px; left:' + tempSpace + 'px; ">\
      <div id="ed-close' + smplObj.scenarioName + '" style=" cursor:pointer; border-radius:50%; background-color:black; color:white; right:-10px; top:-11px; position:absolute; font-size:18px; width:20px; height:20px; text-align:center; line-height:17px; ">x</div>\
      <img style="width:650px" src="//cdn.8digits.com/log/r/3e0b5207-296f-445e-830c-0b07aa13d461.png">\
  </div>\
  </div>'

                        jQuery('body').prepend(html);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').addClass("web-push-vibration");
                        }, 2000);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').removeClass("web-push-vibration");
                        }, 3100);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').addClass("web-push-vibration");
                        }, 6100);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').removeClass("web-push-vibration");
                        }, 7200);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').addClass("web-push-vibration");
                        }, 10300);
                        setTimeout(() => {
                            jQuery('#ed-main_' + smplObj.scenarioName + '').removeClass("web-push-vibration");
                        }, 11300);
                        smplObj.setCookie('ed-shown' + smplObj.scenarioName, 'on', -1);
                        if (smplObj.getCookie('ed-shown' + smplObj.scenarioName) === null) {
                            setLevel(LEVEL_JOIN, "shown-push")
                            smplObj.setCookie('ed-shown' + smplObj.scenarioName, 'on', -1);
                        }
                        jQuery('#ed-noticon_' + smplObj.scenarioName).mouseover(function () {
                            jQuery('.ed-triangle' + smplObj.scenarioName).css('display', 'block');
                            jQuery('#ed-hover' + smplObj.scenarioName).css('display', 'block');
                        });


                        jQuery('#ed-noticon_' + smplObj.scenarioName).mouseout(function () {
                            jQuery('.ed-triangle' + smplObj.scenarioName).css('display', 'none');
                            jQuery('#ed-hover' + smplObj.scenarioName).css('display', 'none');
                        });


                        jQuery('#ed-noticon_' + smplObj.scenarioName).click(function () {
                            smplObj.setCookie('ed-click' + smplObj.scenarioName, 'on', -1);

                            if (smplObj.getCookie('ed-click' + smplObj.scenarioName) === null) {
                                setLevel(LEVEL_JOIN, "click-icon")
                                smplObj.setCookie('ed-click' + smplObj.scenarioName, 'on', -1);
                            }
                            if (Notification.permission === "denied") {
                                smplObj.setCookie('ed-PopupShown' + smplObj.scenarioName, 'on', -1);
                                jQuery('body').prepend(popUpHtml);
                                if (smplObj.getCookie('ed-PopUpShown' + smplObj.scenarioName) === null) {
                                    setLevel(LEVEL_JOIN, "shown-popup")
                                    smplObj.setCookie('ed-PopupShown' + smplObj.scenarioName, 'on', -1);
                                }
                                jQuery('#ed-close' + smplObj.scenarioName).click(function () {
                                    jQuery('#ed-popUp-main_' + smplObj.scenarioName).remove();
                                });
                            } else {

                                Notification.requestPermission()
                                smplObj.setCookie('ed-PushNoticon' + smplObj.scenarioName, 'on', -1);
                                if (smplObj.getCookie('ed-PushNoticon' + smplObj.scenarioName) === null) {
                                    setLevel(LEVEL_JOIN, "shown-pushNotification")
                                    smplObj.setCookie('ed-PushNoticon' + smplObj.scenarioName, 'on', -1);
                                }
                                var x = setInterval(function () {
                                    if (Notification.permission === "granted") {
                                        smplObj.setCookie('ed-granted' + smplObj.scenarioName, 'on', -1);
                                        if (smplObj.getCookie('ed-granted' + smplObj.scenarioName) === null) {
                                            setLevel(LEVEL_JOIN, "shown-grantedPush")
                                            smplObj.setCookie('ed-granted' + smplObj.scenarioName, 'on', -1);
                                        }
                                        jQuery('#ed-main_' + smplObj.scenarioName + '').remove();
                                        clearInterval(x)
                                    }
                                }, 500);
                            }

                        })
                        if (smplObj.getCookie('ed-PopUpShown' + smplObj.scenarioName) !== null) {
                            smplObj.setCookie('ed-granted' + smplObj.scenarioName, 'on', -1);
                            if (smplObj.getCookie('ed-granted' + smplObj.scenarioName) === null) {
                                setLevel(LEVEL_JOIN, "shown-grantedPush")
                                smplObj.setCookie('ed-granted' + smplObj.scenarioName, 'on', -1);
                            }
                        }
                        if (Notification.permission !== "denied") {
                            if (Notification.permission === "default") {
                                return true
                            } else {
                                return false
                            }
                        }
                    }

                    webPush();
                } else {
                    // replace changes
                }
            }
        });
    });
}
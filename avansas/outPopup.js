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
  initialize({ type: TYPE_EMBEDED }, (config) => {
    onChangeConfig((newConfig) => {
      //console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
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
          if (jQuery("#header-main .info").text().trim() !== "GİRİŞ YAP") {
            if (dataLayer[1].event === "userInfo" ? true : false) {
              var dataUser = dataLayer[1].userInfo
            } else if (dataLayer[2].event === "userInfo" ? true : false) {
              var dataUser = dataLayer[2].userInfo
            }
            if (dataUser.user_email_optin === true && dataUser.user_sms_optin === false || dataUser.user_email_optin === false && dataUser.user_sms_optin === true || dataUser.user_email_optin === false && dataUser.user_sms_optin === false) {
              var img = 'https://cdn.hellosmpl.com/uploads/2021/07/09/fpogs9s4h2vm6gf5mf3rbutfv0.jpg';

              var html = '<div class="smpl-izinler-kulakcik" style="position:fixed;display:flex;right:-24px;;z-index: 999999;cursor:pointer;background: #e28130;top:\
'+ (window.innerHeight + 250) / 2 + 'px;\
opacity: 0.8;color: white;line-height: 2em;padding: 10px;transform: rotate(-90deg);cursor: pointer;letter-spacing: 1px;">\
<span>İzinleriniz</span>\
</div>\
<div class="smpl-kulakcik-izinler-img" style="position:fixed;display:flex;right:-400px;z-index: 999999;cursor:pointer;top:\
'+ (window.innerHeight + 200) / 2 + 'px;">\
    <a href="https://www.avansas.com/my-account/update-profile"><img class="smpl-izinler-img" src="' + img + '" style="width:275px;"></a>\
        <span class="smpl-izinler-close" style="position: absolute;right: 10px;font-size: 25px;color: #fff;cursor: pointer;top: 0;">×</span>\
                  </div>\
'
              jQuery("._hj_feedback_container").after(html);
              setLevel(LEVEL_JOIN, 'shown-izinlerText');
              jQuery(".smpl-izinler-kulakcik").click(function () {
                setLevel(LEVEL_JOIN, 'shown-kulakcik');
                jQuery(".smpl-izinler-kulakcik").hide();
                jQuery('.smpl-kulakcik-izinler-img').animate({
                  right: "0"
                }, 1200)
              })
              jQuery('.smpl-izinler-close').click(function () {
                setLevel(LEVEL_EXIT, 'click-close');
                jQuery(".smpl-izinler-kulakcik").show();
                jQuery('.smpl-kulakcik-izinler-img').animate({
                  right: "-400px"
                }, 1200)
              });
              jQuery('.smpl-izinler-img').click(function () {
                setLevel(LEVEL_JOIN, 'click-img');
                smpl.setCookie("optOutKulakcik", "1");
              });
            }
          }
          if (smpl.getCookie("optOutKulakcik", "1") && window.location.pathname == "/my-account/update-profile") {
            jQuery(".check-area .form-label span").css({ "text-decoration": "underline orange" })
            setTimeout(function () {
              jQuery("html, body").animate(
                {
                  scrollTop: jQuery(".check-area").offset().top - 150,
                },
                2000
              );
            }, 100)
            smpl.setCookie("optOutKulakcik", "2");
var sms = 0;
var mail = 0;
jQuery(".check-area label").each(function () {
    if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
        if (jQuery(this).find("div").hasClass("checked")) {
            sms = 1;
        }
    }
    if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
        if (jQuery(this).find("div").hasClass("checked")) {
            mail = 1;
        }
    }
})
var count = 0;
jQuery(".four-button.inline").each(function () {
    if (jQuery(this).text().trim() == "Kaydet") {
        jQuery(this).click(function () {
            jQuery(".check-area label").each(function () {
                if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
                    if (jQuery(this).find("div").hasClass("checked")) {
                        count++
                        if (sms !== 1) {
                            setLevel(LEVEL_JOIN, "click-sms");
                        }
                    }
                }
                if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
                    if (jQuery(this).find("div").hasClass("checked")) {
                        count++
                        if (mail !== 1) {
                            setLevel(LEVEL_JOIN, "click-mail");
                        }
                    }
                }
                if (count == 2) {
                    setLevel(LEVEL_JOIN, "click-saveFullCheckBox")
                }
            })
        })
    }
})
          }
        } else {
          // replace changes
        }
      }
    });
  });
}
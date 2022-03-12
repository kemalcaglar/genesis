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
      console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
          const smplObj = {
            scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
            scenarioName: "scenario-" + scenarioId + "-" + variationId,
            setCookie: function (cname, cvalue, min) {
              const d = new Date();
              d.setTime(d.getTime() + min * 60 * 1000);
              const expires = "expires=" + d.toUTCString();
              document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            },
            getCookie: function (name) {
              const nameEQ = name + "=";
              const ca = document.cookie.split(";");
              for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
              }
              return null;
            },
            debounce: function (func, timeout) {
              let timer;
              return function (...args) {
                const context = this;
                clearTimeout(timer);
                timer = setTimeout(() => func.apply(context, args), timeout);
              };
            },
            fireEvent: function (eventLabel, minutes) {
              const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
              const eventName = eventLabel + "(" + device + ")";
              if (minutes === 0) {
                if (options.sendEvent) {
                  if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                  } else {
                    setLevel(LEVEL_JOIN, eventName);
                  }
                } else {
                  console.log("event: ", eventName);
                }
              } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
                if (options.sendEvent) {
                  if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                  } else {
                    setLevel(LEVEL_JOIN, eventName);
                  }
                  smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                } else {
                  console.log("event: ", eventName);
                  smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                }
              }
            }
          };
          if (Number(jQuery(".js-mini-basket-show-btn span:first").text() > 0)) {
            const sendEvent = (eventKey, data, done) => {
              const trackingCode = 'l3vb0m7r';
              const visitorCode = Math.floor(Math.random() * 100000000 + 1);
              const sessionCode = Math.floor(Math.random() * 100000000 + 1);
              const hitCode = Math.floor(Math.random() * 100000000 + 1);
              const domain = 'www.hellosmpl.com';
              const getServiceUrl = (path, params) => {
                return "https://hit.8digits.com/" + path
                  + "?trackingCode=" + trackingCode
                  + "&visitorCode=" + visitorCode
                  + "&sessionCode=" + sessionCode
                  + "&domain=" + domain
                  + "&hitCode=" + hitCode
                  + "&path=&rnd=&"
                  + Object.keys(params).map(key => key + '=' + params[key]).join('&');
              };
              const createImage = (source, onload) => {
                const image = new Image();
                image.src = source;
                image.onload = onload;
              };
              const hitUrl = getServiceUrl('hit', { obj: '' });
              const attrUrl = getServiceUrl('setattrs', { obj: encodeURIComponent(JSON.stringify(data)) });
              const eventUrl = getServiceUrl('event', { key: eventKey, value: '' });
              createImage(hitUrl, () => createImage(attrUrl, () => createImage(eventUrl, done)));
            };
            var html = `<div id="smpl-thanks_main" class="${smplObj.scenarioName}">
     <div id="smpl-thanks_overlay"></div>
     <div id="smpl-thanks_inner" style="">
         <div id="smpl-thanks_inner_header">Alışverişinizi neden yarım bıraktığınızı bizimle paylaşır mısınız?</div>
         <div id="smpl-thanks_inner_body">
              <div class="inner-buttons" >\
                <div  class="button-smpl">Ürün fiyatlarını pahalı buldum.</div>\
              </div>\
              <div class="inner-buttons" >\
                <div class="button-smpl">Aradığım ürünleri bulamadım.</div>\
              </div>\
              <div class="inner-buttons" >\
                <div class="button-smpl">Daha sonra almayı düşünüyorum.</div>\
              </div>\
              <div class="inner-buttons" >\
                <div class="button-smpl">Mağazadan almayı düşünüyorum.</div>\
              </div>\
              <div class="inner-buttons" id="smpl_diger_container">\
                <div  class="button-smpl" >Diğer</div>\
                <input id="smpl_diger" type="text" style="padding-left:9px;color:black;width:100%;height:50px;">\
              </div>\
         </div>\
         <div id="smpl-thanks_inner_sendButton" >\
               GÖNDER\
         </div>\
         <div id="smpl-thanks_inner_close">+</div>\
         <div id="smpl-thanks_inner_thanks">Geri Dönüşünüz İçin Teşekkürler!</div>\
     </div>\
</div>`
            jQuery('body').append(html);
            jQuery('.inner-buttons').on("click", function () {
              if (jQuery(this).hasClass('clicked')) {
              }
              else {
                jQuery('#smpl_diger').val("");
                jQuery('.inner-buttons').removeClass('clicked');
                jQuery(this).addClass('clicked');
                smplObj.fireEvent("click-button");
              }
            });
            jQuery('#smpl_diger_container').on("click", function () {
              jQuery('#smpl_diger').focus();
            })
            jQuery('#smpl-thanks_inner_sendButton').on("click", function () {
              if (jQuery('.inner-buttons.clicked').length > 0) {
                let selectedAns = jQuery('.inner-buttons.clicked').text().trim();
                if (selectedAns === "Diğer") {
                  if (jQuery("#smpl_diger").val() === "") {
                    alert('Lütfen Diğer alanını doldurunuz!');
                  }
                  else {
                    selectedAns = "Diger_"
                    selectedAns += jQuery("#smpl_diger").val();
                    jQuery('#smpl-thanks_inner_body').empty();
                    jQuery('#smpl-thanks_inner_sendButton').remove();
                    jQuery('#smpl-thanks_inner_body').append("<div style='margin-top:40px;width:90%;font-size:20px;text-align:center;'><span>Görüşleriniz bizim için çok önemli,<br> sizi daha detaylı dinleyebilmemiz için<br> bizimle telefon numaranızı paylaşır mısınız?</span></div>")
                    jQuery('#smpl-thanks_inner_body').append("<input style='margin-bottom:15px;border: 2px solid #BE7817 !important;margin-top:30px;width:300px;text-align:center;' data-initial='0' maxlength='11' id='smpl-input-cep' type='text' >")
                    jQuery('#smpl-thanks_inner_body').after("<div id='smpl-thanks_inner_sendButton_2' style='width: 90%;background-color: #BE7817;color: white;line-height: 42px;font-size: 20px;margin: 10px 5%;height: 42px;text-align: center;'>GÖNDER</div>")
                    jQuery('#smpl-input-cep').keypress(function () {
                      return event.keyCode >= 48 && event.keyCode <= 57
                    })
                    jQuery(document).on("input", "#smpl-input-cep", function () {
                      this.value = this.value.replace(/\D/g, '');
                      if (jQuery(this).val().length == 0) {
                        let value = jQuery(this).val();
                        jQuery(this).val(jQuery(this).data("initial") + value.substring(1));
                      }
                    });
                    jQuery("#smpl-input-cep").focus(function () {
                      if (jQuery(this).val().length == 0) {
                        let value = jQuery(this).val();
                        jQuery(this).val(jQuery(this).data("initial") + value.substring(1));
                      }
                    });
                    jQuery('#smpl-thanks_inner_sendButton_2').on("click", function () {
                      if (jQuery('#smpl-input-cep').val().length === 11 && jQuery('#smpl-input-cep').val().substring(0, 1) === "0") {
                        let telNumber = jQuery('#smpl-input-cep').val();
                        const data = { data: { selectedAns, telNumber } }
                        jQuery(this).text("Geri Dönüşünüz İçin Teşekkürler!");
                        smplObj.fireEvent("shown-sendData");
                        sendEvent('GodivaSepetTerk', data, () => {
                        });
                        setTimeout(() => {
                          jQuery('#smpl-thanks_main').remove();
                        }, 2000)
                      }
                      else {
                        alert("Telefon Numarası 11 haneli ve 0 ile baslamalıdır.")
                      }
                    })
                    jQuery('#smpl-thanks_inner_close').click(function () {
                      smplObj.fireEvent("click-close");
                      const data = { data: { selectedAns } }
                      smplObj.fireEvent("shown-sendData");
                      sendEvent('GodivaSepetTerk', data, () => {
                      });
                    })
                  }
                }
                else {
                  const data = { data: { selectedAns } }
                  smplObj.fireEvent("shown-sendData");
                  sendEvent('GodivaSepetTerk', data, () => {
                  });
                  jQuery('#smpl-thanks_inner_thanks').css('display', 'block');
                  setTimeout(function () {
                    jQuery('#smpl-thanks_main').remove();
                  }, 1500)
                }
              }
              else {
                alert('Lütfen Seçeneklerden Birini Seçiniz!');
              }
            });
            jQuery('#smpl-thanks_inner_close').on("click", function () {
              jQuery('#smpl-thanks_main').remove();
              smplObj.fireEvent("click-close");
            })
          }

        } else {
          // replace changes
        }
      }
    });
  });
}
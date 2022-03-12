(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Elnur_Allahverdiyev_Kulakcik_Card_Mobil")) {
      return false
  }
  EightDigits.sf.prototype.Elnur_Allahverdiyev_Kulakcik_Card_Mobil = function () {
      var config = {
          scenarioname: "Elnur_Allahverdiyev_Kulakcik_Card_Mobil",
          analytics: "Elnur_Allahverdiyev_Kulakcik_Card_Mobil",
          imgSrc:
            "https://cdn.8digits.com/log/r/7aebe30d-b33b-46ae-b3dc-5e1a7c455779.jpeg",
          altPropertie: "Bilgi ve Randevu İçin Tıklayın",
          mainLink:
            "https://www.anadolusaglik.org/doktor/uzm-dr-elnur-allahverdiyev",
          direction:
            "https://www.anadolusaglik.org/sizi-dinliyoruz",
            directionTwo:"https://www.anadolusaglik.org/ulasim-ve-iletisim",
            altPropertieTwo:"Ulaşım & İletişim",
          controlgroup: 10,
      };
      var cookie = {
          setCookie: function (cname, cvalue, days) {
            var d = new Date();
            d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          },
          getCookie: function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == " ") c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
            }
            return null;
          },
        };
      var main = {
          "factory": function () {
              return true;
          }
      };
      main.factory.prototype = {
          random: function () {
              var randomVal = 0;
              var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
              if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                  randomVal = Math.floor((Math.random() * 10000) + 1);
                  EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
              } else {
                  randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
              }
              if (randomVal <= 100 * randomControlRatio) {
                  return true;
              } else {
                  return false;
              }
          },
              formPage : function () {
                  jQuery('.chapterDoctors').before(jQuery("#usQuestionForm-contact"))
                   setTimeout(function(){
                      jQuery("html, body").animate(
                          {
                            scrollTop: jQuery("#usQuestionForm-contact").offset().top - 50,
                          },
                          2000
                        );
                   },100)
                    function formTracker(options) {
                      var formData = options.defaultData || {};
                      var changeFire = function (event) {
                        if (event.target.getAttribute("type") === "checkbox") {
                          formData[event.target.name] = event.target.checked;
                        } else if (event.target.getAttribute("type") === "radio") {
                          formData[event.target.name] = event.target.value;
                        } else {
                          formData[event.target.name] = event.target.value;
                        }
                        options.change(formData);
                      };
                      Array.from(options.formEl.elements).forEach(function (item) {
                        if (options.defaultData[item.name]) {
                          if (item.getAttribute("type") === "checkbox") {
                            options.defaultData[item.name] ? item.click() : null;
                          } else if (item.getAttribute("type") === "radio") {
                            var val = Number(options.defaultData[item.name]) - 1;
                            jQuery(".radioWrap label:eq(" + val + ")").click();
                          } else if (item.id === "usQuestionFormSelect") {
                            var val = Number(options.defaultData[item.name]) + 1;
                            jQuery("#usQuestionFormSelect")
                              .find("option:nth-child(" + val + ")")
                              .prop("selected", true)
                              .trigger("change");
                          } else {
                            item.value = options.defaultData[item.name];
                            var event = new Event("input", { bubbles: true });
                            event.simulated = true;
                            var tracker = item._valueTracker;
                            if (tracker) {
                              tracker.setValue(item.value);
                            }
                            item.dispatchEvent(event);
                          }
                        }
                        item.addEventListener("keyup", changeFire);
                        item.addEventListener("paste", changeFire);
                        item.addEventListener("click", changeFire);
                        item.addEventListener("change", changeFire);
                      });
                      options.formEl.addEventListener("submit", options.submit);
                    }
                    var defaultFormData = (function () {
                      return JSON.parse(localStorage.getItem("smpl-onkoloji-form"));
                    })();
                    formTracker({
                      formEl: document.querySelector("#usQuestion-form"),
                      defaultData: defaultFormData || {},
                      change: function (dataObj) {
                        localStorage.setItem("smpl-onkoloji-form", JSON.stringify(dataObj));
                      },
                      submit: function () {},
                    });
                    var exitIntentControl = function (e) {
                      if (
                        !e.toElement &&
                        !e.relatedTarget &&
                        e.screenX + 5 < window.innerWidth &&
                        e.screenX > 5 &&
                        e.screenY < 200
                      ) {
                        document.removeEventListener("mouseout", exitIntentControl);
                        cookie.setCookie("ed-getInformationTrigger", "off");
                      }
                    };
                    document.addEventListener("mouseout", exitIntentControl);
              
                    jQuery(".usQuestion-form-submit .blueButton").click(function () {
                      setTimeout(function () {
                        if (
                          jQuery("#usQuestion .modal-title")
                            .text()
                            .trim()
                            .indexOf("Form başarıyla iletildi.") > -1
                        ) {
                          EightDigits.analytics.sendEvent(config.analytics, "form-submit");
                          localStorage.removeItem("smpl-onkoloji-form");
                          cookie.setCookie("ed-getInformationTrigger", "on", 30);
                        }
                      }, 2000);
                    });
                    function kaydir() {
                      jQuery.scrollTo('#usQuestionForm-contact', 800, { duration: 2000 });
                    }
                    kaydir();
          },
          start: function () {
              var css =
              "<style>.ed-SKcontainer {\
              width: 100%;\
              position: fixed;\
              z-index: 999999;\
              right: 0;\
            }\
            .ed-SKcontainer .ed-content {\
              position: absolute;\
              width: 320px;\
              right: 0px;\
              z-index: 99999999;\
              animation: slideIn 1s ease-in;\
            }\
            .ed-SKcontainer .ed-content .ed-close {\
              color: #fff;\
              font-size: 21px;\
              font-weight: bold;\
              position: absolute;\
              right: 0px;\
              cursor: pointer;\
              padding-top:1px;\
              width: 30px;\
              top:-25px;\
              padding-bottom:5px;\
              box-sizing:border-box;\
              display:flex;\
              justify-content:center;\
              align-items:center;\
              background:#00b7f9;\
            }\
            .ed-SKcontainer .ed-content img {\
              display: inline-block;\
              width: 100%;\
              height: 100%;\
            }\
            .ed-SKcontainer .ed-content .ed-button {\
              position: absolute;\
              width: 51%;\
              right: 3%;\
              top: 66%;\
              background-color: #ff8b02;\
              border-radius: 5px;\
              background-color: #ff8b02;\
            }\
            .ed-SKcontainer .ed-content .ed-button a {\
              padding: 3px;\
              display: inline-block;\
              color: #fff;\
              font-size: 13px;\
              font-weight: 500;\
              font-family: inherit;\
              line-height:14px;\
            }\
            @keyframes slideIn {\
              0% {\
                right: -400px;\
                opacity: 0.3;\
              }\
              100% {\
                right: 0;\
                opacity: 1;\
              }\
            }</style>";
            var html =
              '<div class="smpl-doctor" style="display:none;">\
              <img src="https://cdn.8digits.com/log/r/9139a9ee-259f-4a90-8285-d38198592d89.png" style="width:45px;\
              position: fixed;\
              right: 0;\
              top: 47%;\
              z-index: 999999;">\
              </div>\
              <div class="ed-SKcontainer" style="top:' +
              window.innerHeight / 2 +
              'px">\
            <div class="ed-content">\
            <div class="ed-close">&times;</div>\
            <img src="' +
              config.imgSrc +
              '" alt="Bilgi ve Randevu" />\
            <button class="ed-button smpl-randevu">\
            <a href="' +
              config.direction +
              '" alt="' +
              config.altPropertie +
              '">\
            ' +
              config.altPropertie +
              "\
            </a>\
            </button>\
            </div>\
            </div>";
            var htmlFixed ='<div style="position:fixed; bottom:0; width:100%; display:flex; justify-content:center; align-items:center; text-align:center; height:50px;z-index:999999;">\
      <div class="smpl-animate-button" style="background:#ff8b02; width:50%; height:100%;"><a href="'+config.directionTwo +'">\
          <button style="\
          left: 0;\
          margin-top: 4px;\
          margin-left: 5px;\
          display: flex;\
          text-align: center;\
          align-items: center;\
          justify-content: center;\
      ">\
      <div class="smpl-animate-image" style="position:relative;">\
          <img src="https://cdn.8digits.com/log/r/9f3732cb-c5f4-4e46-aa90-11676d2cc3b7.png" style="width:40px;">\
          </div>\
          <span style="color:#fefefe; font-size:16px; margin-left:10px;">'+ config.altPropertieTwo +'</span>\
          </button></a>\
      </div>\
      <div class="smpl-call-center" style="background:#33b656; width:50%; height:100%;">\
      <a class="event-tel-link" href="tel:4444276" title="Hemen Arayın"><button style="margin-top: 4px;">\
          <div class="ed-notification"><img src="https://cdn.8digits.com/log/r/3f8f3fd9-ffba-403e-b9c7-dee391caf550.png" alt="Hemen Arayın" class="" style="width:40px;"></div>\
          </button></a>\
      </div>\
    </div>\
    '
    jQuery("body").append(htmlFixed);
    
            jQuery("body").append(html);
            jQuery("head").append(css);
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
              EightDigits.analytics.sendEvent(config.analytics, "Shown");
              EightDigits.utils.setCookie("ed-" + config.analytics + "-shown", "on");
            }
            jQuery(".ed-SKcontainer .smpl-randevu").click(function () {
              EightDigits.analytics.sendEvent(
                  config.analytics,
                  "click-randevu"
                );
              cookie.setCookie("ed-getInformationTrigger", "on", 30);
            });
            jQuery(".smpl-animate-button").click(function () {
              EightDigits.analytics.sendEvent(
                  config.analytics,
                  "click-ulasim"
                );
              });
              jQuery(".smpl-call-center").click(function () {
                EightDigits.analytics.sendEvent(
                    config.analytics,
                    "click-callCenter"
                  );
                });
                jQuery(".smpl-doctor").click(function () {
                  EightDigits.analytics.sendEvent(
                      config.analytics,
                      "click-doctor"
                    );
                  });
            jQuery(".ed-SKcontainer .ed-close").click(function () {
              EightDigits.analytics.sendEvent(config.analytics, "click-close");
              jQuery(".ed-SKcontainer").hide();
              jQuery(".smpl-doctor").css({"display":"block"})
            });
            jQuery(".smpl-doctor").click(function(){
                jQuery(this).css({"display":"none"})
              jQuery(".ed-SKcontainer").show();
            });
            if(window.location.pathname === "/uroloji-bolumu"){
              jQuery(".smpl-randevu a").attr("href","");
              jQuery(".smpl-randevu").click(function(){
                function kaydir() {
                  jQuery.scrollTo('#usQuestionForm-contact', 800, { duration: 2000 });
                }
                kaydir();
              })
              };
          },
          control: function () {
            var link = window.location.href;
            var isCookieOn = cookie.getCookie("ed-getInformationTrigger");
            if (link == config.direction && isCookieOn == "on") {
              main.factory.prototype.formPage();
              return false;
            }  else if (link == config.direction && isCookieOn !== "on"){
          return false;
        }
          },
          init: function () {
            if (main.factory.prototype.control() == false) {
              return false;
            }
            var _exec = main.factory.prototype.random();
            if (!_exec) {
              if (
                !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
              ) {
                EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                EightDigits.utils.setCookie(
                  "ed-" + config.analytics + "-notshown",
                  "on"
                );
              }
              return false;
            }
            main.factory.prototype.start();
          },
        };
    
        boot = function () {
          return main.factory.prototype.init();
        };
    
        boot();
      };
      var _ed_Elnur_Allahverdiyev_Kulakcik_Card_Mobil = new EightDigits.sf();
      _ed_Elnur_Allahverdiyev_Kulakcik_Card_Mobil.Elnur_Allahverdiyev_Kulakcik_Card_Mobil();
    })();
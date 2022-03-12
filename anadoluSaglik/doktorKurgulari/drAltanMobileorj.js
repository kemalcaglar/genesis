(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Serdar_Kahraman_Kulakcik_Card_Mobil")) {
      return false;
    }
    EightDigits.sf.prototype.Serdar_Kahraman_Kulakcik_Card_Mobil = function () {
      var config = {
        scenarioname: "Serdar_Kahraman_Kulakcik_Card_Mobil",
        analytics: "Serdar_Kahraman_Kulakcik_Card_Mobil",
        imgSrc:
          "https://cdn.8digits.com/log/r/8db2f194-64fc-424f-bb5d-528e3ca32753.jpeg",
        altPropertie: "Bilgi ve Randevu İçin Tıklayın",
        mainLink:
          "https://www.anadolusaglik.org/doktor/prof-dr-serdar-kahraman",
        direction:
          "https://www.anadolusaglik.org/beyin-sinir-cerrahisi-norosirurji-bolumu",
        controlgroup: 0,
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
        factory: function () {
          return true;
        },
      };
       
      main.factory.prototype = {
        random: function () {
          var randomVal = 0;
          var randomControlRatio =
            config.controlgroup > 50
              ? config.controlgroup
              : 100 - config.controlgroup;
          if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
            randomVal = Math.floor(Math.random() * 10000 + 1);
            EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
          } else {
            randomVal = parseInt(
              EightDigits.utils.getCookie("_ed_" + config.scenarioname)
            );
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
            background:rgb(105,117,169);\
          }\
          .ed-SKcontainer .ed-content img {\
            display: inline-block;\
            width: 100%;\
            height: 100%;\
          }\
          .ed-SKcontainer .ed-content .ed-button {\
            position: absolute;\
            width: 40%;\
            right: 8%;\
            top: 37%;\
            background-color: #ff8b02;\
            border-radius: 5px;\
            background-color: #ff8b02;\
          }\
          .ed-SKcontainer .ed-content .ed-button a {\
            padding: 10px;\
            display: inline-block;\
            color: #fff;\
            font-size: 13px;\
            font-weight: 600;\
            font-family: inherit;\
            line-height:19px;\
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
            '<div class="ed-SKcontainer" style="top:' +
            window.innerHeight / 2 +
            'px">\
          <div class="ed-content">\
          <div class="ed-close">&times;</div>\
          <img src="' +
            config.imgSrc +
            '" alt="Bilgi ve Randevu" />\
          <button class="ed-button">\
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
  
          jQuery("body").append(html);
          jQuery("head").append(css);
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
            EightDigits.analytics.sendEvent(config.analytics, "Shown");
            EightDigits.utils.setCookie("ed-" + config.analytics + "-shown", "on");
          }
          jQuery(".ed-SKcontainer .ed-button").click(function () {
            EightDigits.analytics.sendEvent(
                config.analytics,
                "click-kulakcik"
              );
            cookie.setCookie("ed-getInformationTrigger", "on", 30);
          });
          jQuery(".ed-SKcontainer .ed-close").click(function () {
            EightDigits.analytics.sendEvent(config.analytics, "click-close");
            jQuery(".ed-SKcontainer").remove();
          });
        },
        control: function () {
          var link = window.location.href;
          var isCookieOn = cookie.getCookie("ed-getInformationTrigger");
          if (link == config.direction && isCookieOn == "on") {
            main.factory.prototype.formPage();
            return false;
          } else if (link == config.direction && isCookieOn !== "on")
            return false;
          else if (link == config.mainLink && isCookieOn == "on") return false;
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
    var _ed_Serdar_Kahraman_Kulakcik_Card_Mobil = new EightDigits.sf();
    _ed_Serdar_Kahraman_Kulakcik_Card_Mobil.Serdar_Kahraman_Kulakcik_Card_Mobil();
  })();
  
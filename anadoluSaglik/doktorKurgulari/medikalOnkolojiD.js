(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("MedikalOnkoloji_Kulakcik")) {
        return false
    }
    EightDigits.sf.prototype.MedikalOnkoloji_Kulakcik = function () {
        var config = {
            scenarioname: "MedikalOnkoloji_Kulakcik",
            analytics: "MedikalOnkoloji_Kulakcik",
            imgSrc:
            "https://cdn.8digits.com/log/r/a3427784-b09c-4037-a579-139235469f51.png",
            imgSrc2: "https://cdn.8digits.com/log/r/a3427784-b09c-4037-a579-139235469f51.png",
          altPropertie: "Bilgi ve Randevu İçin Tıklayın",
          mainLink:
            "https://www.anadolusaglik.org/doktor/prof-dr-seref-komurcu",
          direction:
            "https://www.anadolusaglik.org/medikal-onkoloji-bolumu",
            directionTwo:"https://www.anadolusaglik.org/ulasim-ve-iletisim",
            altPropertieTwo:"Ulaşım & İletişim",
          controlgroup: 10,    
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
                width: 470px;\
                right: 0px;\
                z-index: 99999999;\
                animation: slideIn 1s ease-in;\
              }\
              .ed-SKcontainer .ed-content .ed-close {\
                color: #fff;\
                font-size: 17px;\
                font-weight: bold;\
                position: absolute;\
                left: 5px;\
                cursor: pointer;\
                width: 16px;\
              }\
              .ed-SKcontainer .ed-content img {\
                display: inline-block;\
                width: 100%;\
                height: 100%;\
              }\
              .ed-SKcontainer .ed-content .ed-button {\
                position: absolute;\
                width: 37%;\
                right: 59%;\
                top: 46%;\
                background-color: #ff8b02;\
                border-radius: 5px;\
                background-color: #ff8b02;\
              }\
              .ed-SKcontainer .ed-content .ed-button span {\
                padding: 8px;\
                display: inline-block;\
                color: #fff;\
                font-size: 13px;\
                font-weight: 600;\
                font-family: inherit;\
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
              jQuery("head").append(css);
                if(window.location.pathname === "/medikal-onkoloji-bolumu"){
                      var html ='<div class="smpl-doctor" style="display:none;">\
                     <img src="https://cdn.8digits.com/log/r/9139a9ee-259f-4a90-8285-d38198592d89.png" style="width:45px;\
                     position: fixed;\
                     right: 0;\
                     cursor: pointer;\
                     top: 47%;\
                     z-index: 999999;">\
                     </div>\
                     <div class="ed-SKcontainer" style="top:' +
                     window.innerHeight / 2 +
                     'px">\
                   <div class="ed-content">\
                   <div class="ed-close">&times;</div>\
                   <img src="' +
                     config.imgSrc2 +
                     '" alt="Bilgi ve Randevu" />\
                   <button class="ed-button smpl-randevu" style="height:52px; width:37%; right:9%; top:55%">\
                   <span>\
                   ' +
                     config.altPropertie +
                     "\
                   </span>\
                   </button>\
                   </div>\
                   </div>";
                   jQuery("body").append(html);
            }
            jQuery(".ed-SKcontainer .ed-close").click(function () {
                EightDigits.analytics.sendEvent(config.analytics, "click-close");
                jQuery(".ed-SKcontainer").hide();
                jQuery(".smpl-doctor").css({"display":"block"})
              });
      
            jQuery(".smpl-doctor").click(function(){
                jQuery(this).css({"display":"none"})
              jQuery(".ed-SKcontainer").show();
            });
            jQuery(".smpl-randevu").click(function(){
                jQuery(".ed-SKcontainer").hide();
                jQuery(".smpl-doctor").css({"display":"block"})
                jQuery('.chapterDoctors').before(jQuery("#usQuestionForm-contact"))
                setTimeout(function(){
                   jQuery("html, body").animate(
                       {
                         scrollTop: jQuery("#usQuestionForm-contact").offset().top - 50,
                       },
                       2000
                     );
                },100)
            })
            jQuery(".ed-SKcontainer .smpl-randevu").click(function () {
                EightDigits.analytics.sendEvent(
                    config.analytics,
                    "click-randevu"
                  );
                });
                jQuery(".ed-SKcontainer .ed-close").click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "click-close");
                });
        },
            control: function () {
            },
            init: function () {
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
    var _ed_MedikalOnkoloji_Kulakcik = new EightDigits.sf();
    _ed_MedikalOnkoloji_Kulakcik.MedikalOnkoloji_Kulakcik();
  })();
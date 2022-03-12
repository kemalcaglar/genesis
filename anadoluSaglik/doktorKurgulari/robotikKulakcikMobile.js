(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Robotik_Kulakcik_Mobile")) {
        return false
    }
    EightDigits.sf.prototype.Robotik_Kulakcik_Mobile = function () {
        var config = {
            scenarioname: "Robotik_Kulakcik_Mobile",
            analytics: "Robotik_Kulakcik_Mobile",
            imgSrc:
            "https://cdn.8digits.com/log/r/b0f6a540-cf3f-4c07-9b64-dbafea117641.jpeg",
            imgSrc2:"https://cdn.8digits.com/log/r/c5cc8b0c-a04a-42cd-8098-65ffe7df2f18.jpeg",
          altPropertie: "Bilgi ve Randevu İçin Tıklayın",
          mainLink:
            "https://www.anadolusaglik.org/doktor/prof-dr-altan-kir",
          direction:
            "https://www.anadolusaglik.org/saglik-teknolojileri/robotik-cerrahi",
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
                width: 51%;\
                right: 3%;\
                top: 57%;\
                background-color: #ff8b02;\
                border-radius: 5px;\
                background-color: #ff8b02;\
              }\
              .ed-SKcontainer .ed-content .ed-button span {\
                padding: 4px;\
                display: inline-block;\
                color: #fff;\
                font-size: 12px;\
                font-weight: 500;\
                font-family: inherit;\
                line-height:15px;\
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
                config.imgSrc2 +
                '" alt="Bilgi ve Randevu" />\
              <button class="ed-button smpl-randevu" style="\
              width: 47%;\
              right: 5%;\
              top: 78%;">\
              <span>\
              ' +
                config.altPropertie +
                "\
              </span>\
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
    var _ed_Robotik_Kulakcik_Mobile = new EightDigits.sf();
    _ed_Robotik_Kulakcik_Mobile.Robotik_Kulakcik_Mobile();
  })();
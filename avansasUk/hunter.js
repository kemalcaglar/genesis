(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Hunter_Kulakcik_Indirim_UK")) {
      return false;
    }
    EightDigits.sf.prototype.Hunter_Kulakcik_Indirim_UK = function () {
      // cart sayfasında kulakçık gösterme eklendi
      var config = {
        scenarioname: "Hunter_Kulakcik_Indirim_UK",
        analytics: "Hunter_Kulakcik_Indirim_UK",
        companyCode: "",
        controlScenario: "hunter_user_kulakcik",
        cookieWelcome: "ed-welcome-welcome_gift",
        controlgroup: 0,
        code: ["UK640", "UK675", "UK6100"],
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
            config.controlgroup > 50 ?
            config.controlgroup :
            100 - config.controlgroup;
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
  
        isLogin: function () {
          var control = false;
          for (var i = 0; i < dataLayer.length; i++) {
            if (typeof dataLayer[i].event !== "undefined") {
              if (dataLayer[i].event === "userInfo") {
                if (typeof dataLayer[i].userInfo.companyCode !== "undefined") {
                  control = true;
                  config.companyCode = dataLayer[i].userInfo.companyCode;
                }
              }
            }
          }
  
          if (control) {
            return true;
          } else {
            return false;
          }
        },
        copyTheClipBoard: function (id) {
          var copyCode1 =
            id === 1 ?
            document.getElementById("ed_code1" + config.scenarioname) :
            id == 2 ?
            document.getElementById("ed_code2" + config.scenarioname) :
            document.getElementById("ed_code3" + config.scenarioname);
          //    = document.getElementById('ed_code1' + config.scenarioname);
          copyCode1.select();
          document.execCommand("copy");
        },
        start: function () {
          // https://cdn.8digits.com/log/r/4758f303-59c0-4b29-8537-29a89ac9ba60.png
          var kulakcik =
            '\
                <div id="' + config.scenarioname + '_kulakcik_main" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px; ">\
                    <img id="' + config.scenarioname + '_kulakcik_image" src="https://cdn.8digits.com/log/r/138e559d-5df5-4a12-9752-31a3f45f98f1.png" style="cursor:pointer; width:320px;">\
                    <div class="' + config.scenarioname + '_kulakcik_close" style="position: absolute;\
            z-index: 999999;\
            right: 6px;\
            top: 2px;\
            font-weight: bold;\
            width: 25px;\
            height: 25px;\
            text-align: center;\
            color: white;\
            line-height: 26px;\
            font-size: 16px;\
            cursor: pointer;\
            background-color: black;\
            border-radius: 50%;">&#8722;</div>\
                    <div class="' + config.scenarioname + '_kulakcik_code1" style="position:absolute;z-index:9999;right:7px;top:97px;font-weight: bold;width:313px;height:27px;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_code1_select" style="background-color:white;display:none;position:absolute;z-index:9999;left:16px;top:109px;font-weight: bold;width:19px;height:19px;border-radius:50%;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_code2_select" style="background-color:white;display:none;position:absolute;z-index:9999;left:16px;top:134px;font-weight: bold;width:19px;height:19px;border-radius:50%;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_code3_select" style="background-color:white;display:none;position:absolute;z-index:9999;left:16px;top:160px;font-weight: bold;width:19px;height:19px;border-radius:50%;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_code2" style="position:absolute;z-index:9999;right:7px;top:128px;font-weight: bold;width:313px;height:27px;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_code3" style="position:absolute;z-index:9999;right:7px;top:158px;font-weight: bold;width:313px;height:27px;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <input id="ed_code1' + config.scenarioname + '"  value="' +
            config.code[0] +
            '" style="left:26px; width:19px; top:25px; position:absolute; z-index:-3;"></input>\
                    <input id="ed_code2' + config.scenarioname + '"  value="' +
            config.code[1] +
            '" style="left:26px; width:19px; top:25px; position:absolute; z-index:-3;"></input>\
                    <input id="ed_code3' + config.scenarioname + '"  value="' +
            config.code[2] +
            '" style="left:26px; width:19px; top:25px; position:absolute; z-index:-3;"></input>\
                    <div class="' + config.scenarioname + '_kulakcik_copyCode" style="position:absolute;z-index:9999;right:0px;top:230px;font-weight: bold;width:320px;height:40px;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;"></div>\
                    <div class="' + config.scenarioname + '_kulakcik_couponCode" style="position:absolute;z-index:9999;right:70px;top:192px;font-weight: bold;width:178px;height:33px;text-align:center;color:black;line-height: 31px;font-size: 24px;cursor:pointer;"></div>\
                    <div class="ed-noticon' + config.scenarioname + '" style="display:none; width: 258px;position: absolute;z-index: 9999;bottom: 121px;left: 22px;font-size: 15px;font-weight: bold;background-color: rgb(44, 151, 222);color: white;text-align: center;line-height: 38px;border-radius:5px;display:none;justify-content:center;align-items:center;">Your Code is Copied</div>\
                    </div>';
          var kapaliKulakcik =
            '\
                <div id="' + config.scenarioname + '_kulakcik_main-kapali" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px;width: 320px; ">\
            <div class="' + config.scenarioname + '_textArea" style="width: 85%;\
            height: 48px;\
            margin-top: 20px;\
            background-color: #f07b05;\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            font-size: 24px;\
            font-weight: bold;\
            font-style: italic;\
            color: #fff;">\
              Voucher Code\
            </div>\
                    <div class="' + config.scenarioname + '_kulakcik_close" style="position: absolute;\
            z-index: 999999;\
            right: 12%;\
            top: 5px;\
            font-weight: bold;\
            width: 25px;\
            height: 25px;\
            text-align: center;\
            color: white;\
            line-height: 24px;\
            font-size: 16px;\
            cursor: pointer;\
            background-color: black;\
            border-radius: 50%;">&#x21e7;</div>\
                </div>';
          jQuery("body").append(kulakcik);
          jQuery("body").append(kapaliKulakcik);
          EightDigits.analytics.sendEvent(config.analytics, "Shown");
          if (
            jQuery("#" + config.controlScenario + "_kulakcik_main").length > 0
          ) {
            jQuery("#" + config.controlScenario + "_kulakcik_main").remove();
          }
          jQuery("." + config.scenarioname + "_kulakcik_code1").click(
            function () {
              EightDigits.analytics.sendEvent(
                config.analytics,
                "click-codeUK640"
              );
              jQuery("." + config.scenarioname + "_kulakcik_couponCode").text(
                "UK640"
              );
              jQuery("." + config.scenarioname + "_kulakcik_code1_select").show();
              jQuery("." + config.scenarioname + "_kulakcik_code2_select").hide();
              jQuery("." + config.scenarioname + "_kulakcik_code3_select").hide();
            }
          );
          jQuery("." + config.scenarioname + "_kulakcik_code2").click(
            function () {
              EightDigits.analytics.sendEvent(
                config.analytics,
                "click-codeUK675"
              );
              jQuery("." + config.scenarioname + "_kulakcik_couponCode").text(
                "UK675"
              );
              jQuery("." + config.scenarioname + "_kulakcik_code2_select").show();
              jQuery("." + config.scenarioname + "_kulakcik_code1_select").hide();
              jQuery("." + config.scenarioname + "_kulakcik_code3_select").hide();
            }
          );
          jQuery("." + config.scenarioname + "_kulakcik_code3").click(
            function () {
              EightDigits.analytics.sendEvent(
                config.analytics,
                "click-codeUK6100"
              );
              jQuery("." + config.scenarioname + "_kulakcik_couponCode").text(
                "UK6100"
              );
              jQuery("." + config.scenarioname + "_kulakcik_code3_select").show();
              jQuery("." + config.scenarioname + "_kulakcik_code1_select").hide();
              jQuery("." + config.scenarioname + "_kulakcik_code2_select").hide();
            }
          );
          if (
            EightDigits.utils.getCookie(
              "ed-copied_code" + config.scenarioname
            ) !== null
          ) {
            var code = EightDigits.utils.getCookie(
              "ed-copied_code" + config.scenarioname
            );
            if (code == "UK640") {
              jQuery("." + config.scenarioname + "_kulakcik_code1").click();
            } else if (code == "UK675") {
              jQuery("." + config.scenarioname + "_kulakcik_code2").click();
            } else {
              jQuery("." + config.scenarioname + "_kulakcik_code3").click();
            }
          } else {
            jQuery("." + config.scenarioname + "_kulakcik_couponCode").text(
              "UK6100"
            );
            jQuery("." + config.scenarioname + "_kulakcik_code3_select").show();
            jQuery("." + config.scenarioname + "_kulakcik_code1_select").hide();
            jQuery("." + config.scenarioname + "_kulakcik_code2_select").hide();
          }
          EightDigits.utils.setCookie(
            "ed-shownSession" + config.scenarioname,
            "on",
            45
          );
          EightDigits.utils.setCookie(
            "ed-notshownAgain" + config.scenarioname,
            "on",
            24 * 60
          );
  
          jQuery("." + config.scenarioname + "_kulakcik_copyCode").click(
            function () {
              if (
                jQuery(
                  "." + config.scenarioname + "_kulakcik_couponCode"
                ).text() !== ""
              ) {
                jQuery(".ed-noticon" + config.scenarioname).css(
                  "display",
                  "flex"
                );
                setTimeout(function () {
                  jQuery(".ed-noticon" + config.scenarioname).css(
                    "display",
                    "none"
                  );
                }, 1000);
                if (
                  jQuery(
                    "." + config.scenarioname + "_kulakcik_couponCode"
                  ).text() === "UK640"
                ) {
                  EightDigits.analytics.sendEvent(
                    config.analytics,
                    "click-copyCodeUK640"
                  );
                  main.factory.prototype.copyTheClipBoard(1);
                  EightDigits.utils.setCookie(
                    "ed-copied_code" + config.scenarioname,
                    config.code[0],
                    60 * 60 * 11
                  );
                } else if (
                  jQuery(
                    "." + config.scenarioname + "_kulakcik_couponCode"
                  ).text() === "UK675"
                ) {
                  EightDigits.analytics.sendEvent(
                    config.analytics,
                    "click-copyCodeUK675"
                  );
                  main.factory.prototype.copyTheClipBoard(2);
                  EightDigits.utils.setCookie(
                    "ed-copied_code" + config.scenarioname,
                    config.code[1],
                    60 * 60 * 11
                  );
                } else {
                  EightDigits.analytics.sendEvent(
                    config.analytics,
                    "click-copyCodeUK6100"
                  );
                  main.factory.prototype.copyTheClipBoard(3);
                  EightDigits.utils.setCookie(
                    "ed-copied_code" + config.scenarioname,
                    config.code[2],
                    60 * 60 * 11
                  );
                }
              }
            }
          );
  
          if (
            EightDigits.utils.getCookie(
              "ed-kulakcik_position" + config.scenarioname
            ) === "top" ||
            EightDigits.utils.getCookie(
              "ed-kulakcik_position" + config.scenarioname
            ) === null
          ) {
            jQuery("#" + config.scenarioname + "_kulakcik_main").css(
              "display",
              "block"
            );
            jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").css(
              "display",
              "none"
            );
          } else {
            jQuery("#" + config.scenarioname + "_kulakcik_main").css(
              "display",
              "none"
            );
            jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").css(
              "display",
              "block"
            );
          }
  
          jQuery("." + config.scenarioname + "_kulakcik_close").click(
            function () {
              if (
                jQuery("#" + config.scenarioname + "_kulakcik_main").css(
                  "display"
                ) === "none"
              ) {
                jQuery("#" + config.scenarioname + "_kulakcik_main").css(
                  "display",
                  "block"
                );
                jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").css(
                  "display",
                  "none"
                );
                EightDigits.utils.setCookie(
                  "ed-kulakcik_position" + config.scenarioname,
                  "top"
                );
              } else {
                jQuery("#" + config.scenarioname + "_kulakcik_main").css(
                  "display",
                  "none"
                );
                jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").css(
                  "display",
                  "block"
                );
                EightDigits.utils.setCookie(
                  "ed-kulakcik_position" + config.scenarioname,
                  "bottom"
                );
              }
            }
          );
          jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").click(
            function () {
              jQuery("#" + config.scenarioname + "_kulakcik_main").css(
                "display",
                "block"
              );
              jQuery("#" + config.scenarioname + "_kulakcik_main-kapali").css(
                "display",
                "none"
              );
              EightDigits.utils.setCookie(
                "ed-kulakcik_position" + config.scenarioname,
                "top"
              );
            }
          );
          // jQuery('#' + config.scenarioname + '_kulakcik_main img').click(function () {
          //     EightDigits.analytics.sendEvent(config.analytics, 'Click');
          //     window.location.href = config.link;
          //     EightDigits.utils.setCookie('ed-notshownAgainClick' + config.scenarioname, 'on', 24 * 60);
          // });
        },
  
        control: function () {
          if (window.location.href.indexOf("/uk/welcome-gift") > -1) {
            return false
          }
          if (EightDigits.utils.getCookie(config.cookieWelcome) === "on") {
            return false
          }
          if (window.location.href.indexOf("/uk/") < 0) {
            console.log("return false uk");
            return false
          }
  
          function checkUserInfo() {
            var dataList = dataLayer;
            var isCheck = false;
            for (var i = 0; i < dataList.length; i++) {
              if (typeof dataList[i].userInfo !== "undefined") {
                if (typeof dataLayer[i].userInfo.firstOrderDate !== "undefined") {
                  isCheck = true;
                }
              }
            }
            return isCheck;
          }
          if (checkUserInfo()) {
            console.log("return false check user");
            return false;
          }
  
          function checkVisitorType() {
            var dataList = dataLayer;
            visitorType = "none";
            for (var i = 0; i < dataList.length; i++) {
              if (typeof dataList[i].visitor !== "undefined") {
                if (dataList[i].visitor === "new-visitor") {
                  visitorType = "new";
                  EightDigits.utils.setCookie(
                    "ed-visitor-type" + config.scenarioname,
                    "new"
                  );
                } else if (dataList[i].visitor === "returning-visitor") {
                  visitorType = "returning";
                  if (
                    EightDigits.utils.getCookie(
                      "ed-visitor-type" + config.scenarioname
                    ) !== "new"
                  ) {
                    EightDigits.utils.setCookie(
                      "ed-visitor-type" + config.scenarioname,
                      "returning"
                    );
                  }
                } else {
                  visitorType = "none";
                }
              }
            }
  
            if (visitorType === "new") {
              return "new";
            } else if (visitorType === "returning") {
              return "returning";
            } else {
              return "none";
            }
          }
  
          checkVisitorType();
          if (
            EightDigits.utils.getCookie(
              "ed-visitor-type" + config.scenarioname
            ) !== "new"
          ) {
            console.log("return false visitor");
            return false;
          } else {
            console.log("start");
            main.factory.prototype.start();
          }
        },
        init: function () {
          var _exec = main.factory.prototype.random();
          if (!_exec) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            return false;
          }
          main.factory.prototype.control();
        },
      };
  
      boot = function () {
        return main.factory.prototype.init();
      };
  
      boot();
    };
    var _ed_Hunter_Kulakcik_Indirim_UK = new EightDigits.sf();
    _ed_Hunter_Kulakcik_Indirim_UK.Hunter_Kulakcik_Indirim_UK();
  })();
  
(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("CarkiFelek_Setur_100_200")) {
    return false;
  }
  EightDigits.sf.prototype.CarkiFelek_Setur_100_200 = function () {

    var config = {
      scenarioname: "CarkiFelek_Setur_100_200",
      analytics: "CarkiFelek_Setur_100_200",

      imageLogin: "//cdn.8digits.com/log/r/1c65260d-4ee6-4cc4-94a3-72fd973b31ca.png",
      imagewheel: "//cdn.8digits.com/log/r/18ba39b6-425f-492f-b05c-ffeec51d5ec1.png",
      imagewheelstand: "//cdn.8digits.com/log/r/e46468bf-b173-43a4-8856-81b419cc3582.png",
      imagewheelch: "//cdn.8digits.com/log/r/5bd4b694-c8da-452d-a610-76f9014b1473.png",

      controlgroup: 0,
      code: "",
      rd: ""

    };
    var main = {
      "factory": function () {
        return true;
      }
    };
    var coupons = {
      "100TL": {
        "data": "6465290a-7e68-4ec5-b811-1407624258e9",
        "image": "//cdn.8digits.com/log/r/44af6db8-bafa-4721-9d26-bd30acf955f9.png"
      },
      "200TL": {
        "data": "1a68cc92-c50a-44dd-b76f-2315d9a39050",
        "image": "//cdn.8digits.com/log/r/c108b175-c267-4991-8830-e36c48aeed24.png"
      }

    };

    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      loginPopup: function () {
        if (EightDigits.utils.getCookie("ed-wasShown" + config.scenarioname) === null) {
          var tempLeft = ((window.innerWidth - 600) / 2) + "px";
          var popup = "\
                                <div id=\"" + config.scenarioname + "_popup_login_main\" style=\"position:fixed; z-index:9999; top:0px; width:100%; height:100%;\">\
                                    <div id=\"" + config.scenarioname + "_popup_login_layer\" style=\"position:absolute; z-index:9998; top:0px; width:100%; height:100%; background:rgba(0,0,0,0.6)\"></div>\
                                    <div id=\"" + config.scenarioname + "_popup_login_inner\" style=\"position:absolute; z-index:9999; top:80px; left:" + tempLeft + "; cursor:pointer;\">\
                                        <div id=\"ed-close-login" + config.scenarioname + "\" style=\"width:38px;height:38px;right:0px;top:0px;position:absolute;z-index:9999;font-size:21px;line-height: 33px;text-align:center;\">x</div>\
                                        <img style=\"width:600px;background: #FFFFFF;border-radius: 4px\" src=\"" + config.imageLogin + "\">\
                                        \
                                    </div>\
                                </div>";


          jQuery("body").append(popup);
          EightDigits.utils.setCookie("ed-wasShown" + config.scenarioname, "on");
          // EightDigits.analytics.sendEvent(config.scenarioname, "Shown_LoginPopup");

          jQuery("#" + config.scenarioname + "_popup_login_inner img").click(function () {

            // EightDigits.analytics.sendEvent(config.scenarioname, "Click_LoginPopup");
            EightDigits.utils.setCookie("ed-cookie-login" + config.scenarioname, "on");
            window.location.href = "/Profil?redirectUrl=%2f";

          });
          jQuery("#ed-close-login" + config.scenarioname + "").click(function () {

            // EightDigits.analytics.sendEvent(config.scenarioname, "Close_LoginPopup");
            jQuery("#" + config.scenarioname + "_popup_login_main").remove();
          });

          jQuery("#" + config.scenarioname + "_popup_login_layer").click(function () {
            // EightDigits.analytics.sendEvent(config.scenarioname, "Close_LoginPopup");
            jQuery("#" + config.scenarioname + "_popup_login_main").remove();
          });

        }


      },
      copyTheClipBoard: function () {
        var copyCode1 = document.getElementById("ed_code1" + config.scenarioname);
        copyCode1.select();
        document.execCommand("copy");
      },
      addKulakcik: function () {
        var html = "<div id=\"" + config.scenarioname + "_kulakcik_main\" style=\"position:fixed;z-index:9;bottom:35px;right:0px;width: 290px;height: 65px;border: 5px dashed red;border-radius:5px;background-color: white;\">\
                                 <div class=\"ed-" + config.scenarioname + "-inner\" style=\"line-height: 59px;margin-left: 12px; display:flex;\"><div style=\"color: gray;font-weight: 300;font-size: 18px;\">Kodunuz:</div><div style=\"color: red;font-weight: bold;margin-left: 7px;font-size: 18px;\">" + config.code + "</div></div>\
                                 <div class=\"ed-" + config.scenarioname + "-close\" style=\"position:absolute;right: 4px;top: 0px;font-size: 23px;color: grey;font-weight: 200;\">x</div>\
                            </div>";

        jQuery("body").append(html);


        jQuery(".ed-" + config.scenarioname + "-close").click(function () {
          jQuery("#" + config.scenarioname + "_kulakcik_main").remove();
          EightDigits.utils.setCookie("ed-kulakcik_remove" + config.scenarioname, "on");
        });

      },
      addCode: function () {
        if (EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname) === null) {
          var tempLeft = ((window.innerWidth - 600) / 2) + "px";
          var popup = "\
                                <div id=\"" + config.scenarioname + "_popup_login_main\" style=\"position:fixed; z-index:9999; top:0px; width:100%; height:100%;\">\
                                    <div id=\"" + config.scenarioname + "_popup_login_layer\" style=\"position:absolute; z-index:9998; top:0px; width:100%; height:100%; background:rgba(0,0,0,0.6)\"></div>\
                                    <div id=\"" + config.scenarioname + "_popup_login_inner\" style=\"position:absolute; z-index:9999; top:80px; left:" + tempLeft + "; cursor:pointer;\">\
                                        <div id=\"ed-close-login" + config.scenarioname + "\" style=\"width:38px;height:38px;right:0px;top:0px;position:absolute;z-index:9999;font-size:21px;line-height: 33px;text-align:center;\">x</div>\
                                        <div style=\"position: absolute;text-align: center;bottom: 100px;left: 50%;transform: translateX(-50%);font-size: 24px;font-weight: 700;color: white;cursor: default;z-index: 1;padding: 10px;border-radius: 5px;background: #ed1c24;\">" + config.code + "</div>\
                                        <input id=\"ed_code1" + config.scenarioname + "\"  value=\"" + config.code + "\" style=\"left:26px; width:19px; top:25px; position:absolute; z-index:-3;\"></input>\
                                        <div class=\"ed-noticon" + config.scenarioname + "\" style=\"display: none;position: absolute;z-index: 9999;bottom: 150px;left: 50%;transform: translateX(-50%);font-size: 19px;font-weight:bold;background-color: #ed4035;color: white;text-align: center;line-height: 34px;border-radius: 8px;padding: 10px\">Kodunuz Kopyalanmıştır.</div>\
                                        <img style=\"width:600px;\" src=\"" + coupons[config.rd].image + "\">\
                                        \
                                    </div>\
                                </div>";


          jQuery("body").append(popup);
          EightDigits.utils.setCookie("ed-seenCode" + config.scenarioname, "on", 6 * 60);
          jQuery("#" + config.scenarioname + "_popup_login_inner").click(function () {
            main.factory.prototype.copyTheClipBoard();
            jQuery(".ed-noticon" + config.scenarioname + "").css("display", "block");
            // EightDigits.analytics.sendEvent(config.analytics, "CopyTheCode_" + config.code);
            setTimeout(function () {
              jQuery(".ed-noticon" + config.scenarioname + "").css("display", "none");
              jQuery("#" + config.scenarioname + "_popup_login_main").remove();
              main.factory.prototype.addKulakcik();

            }, 1000);
          });
          jQuery("#ed-close-login" + config.scenarioname + "").click(function () {
            jQuery("#" + config.scenarioname + "_popup_login_main").remove();
            // EightDigits.analytics.sendEvent(config.analytics, "Close_CopyCode");
            main.factory.prototype.addKulakcik();
          });

        } else {
          console.log("add Kulakcik");
          config.code = EightDigits.utils.getCookie("ed-userSpecial-code" + config.scenarioname);
          main.factory.prototype.addKulakcik();

        }

      },
      request: function () {
        let visitorId = EightDigits.utils.getCookie("eightdigits_visitor");
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
          visitorId: visitorId,
          customer: _trackingCode,
          campaignId: coupons[config.rd].data
        });
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        fetch("https://promocode.8digits.com/api/campaign/search", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let obj = JSON.parse(result);
            config.code = obj.data;
            console.log("Response ", obj);
            EightDigits.utils.setCookie("ed-userSpecial-code" + config.scenarioname, config.code);
            jQuery("._eightdigits_spin_el, .backover").remove();
            main.factory.prototype.addCode();
          })
          .catch((error) => console.log("error", error));
      },
      isLogin: function () {
        if (jQuery(".login-button .mobile-none").text() === "Giriş Yap") {
          return false;
        } else {
          return true;
        }

      },

      spin: {
        css: function () {
          return "\
                        <style>\
                            ._eightdigits_item_spin{-webkit-transition: -webkit-transform 2s ease-out;position: absolute;width: 88%;top: 6%;left: 6%;}\
                            ._eightdigits_spin_selector{width: 50%;object-fit:contain;position: absolute;top: 41%;left: 50%;z-index:2 ;transform: translate(-50%, -50%)}\
                            ._eightdigits_spin_el{position: fixed;left: " + (window.innerWidth - 546) / 2 + "px;top: 0;bottom: 0;margin: auto;width: 546px;height: 680px;z-index: 99999999}\
                        </style>\
                    ";
        },
        html: function () {
          return "\
                        <div class=\"_eightdigits_spin_el\">\
                        <div class=\"_eightdigits_spin_el_bg\" style=\"background-image:url(" + config.imagewheelstand + ");width: 100%;height: 100%;background-position: center;background-origin: border-box;background-repeat: no-repeat;background-size: contain;\">\
                            <img class=\"_eightdigits_spin_selector\" src=\"" + config.imagewheelch + "\"/>\
                            <img class=\"_eightdigits_item_spin\" src=\"" + config.imagewheel + "\"/>\
                          </div>\
                            <div class=\"_eightdigits_spin_start\" style=\"position: absolute;z-index: 6;width: 157px;height: 41px;left: 0;right: 0;margin: auto;text-align: center;color: white;background: #ED4035;border-radius: 10px;font-size: 21px;font-weight: bold;font-family: arial;line-height: 42px;cursor: pointer;bottom: 60px;\"> Çarkı Çevir </div>\
                        </div>\
                        \
                        <div class=\"backover\" style=\"position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 999999; opacity: 0.8; background-color: rgb(0, 0, 0);\"></div>\
                    ";
        },
        start: function () {
          jQuery("._eightdigits_spin_el").append("<div class=\"close__button\" style=\"position: absolute;z-index: 6;font-size: 29px;display: block;height: 40px;width: 40px;text-align: center;line-height: 32px;top: 0px;z-index: 999999999;color: #fff;right: 0px;cursor:pointer;\">x</div>");
          jQuery(".close__button").click(function () {
            jQuery("._eightdigits_spin_el, .backover").remove();

          });
          jQuery("._eightdigits_spin_start").click(function () {
            jQuery("._eightdigits_spin_start").css("display", "none");
            EightDigits.utils.setCookie("ed-clickedOneTime" + config.scenarioname, "on");
            document.getElementsByClassName("_eightdigits_item_spin")[0].removeAttribute("style");

            var elStyle = "position: absolute;width: 88%";

            var rd = 0;
            var fiftyFifty = Math.floor(Math.random() * 100);
            if (fiftyFifty < 50) {
              config.rd = "100TL";
              rd = Math.floor(Math.random() * 35) + 185;
            } else {
              config.rd = "200TL";
              rd = Math.floor(Math.random() * 35) + 275;
            }

            EightDigits.utils.setCookie("_eightdigits_spin_item_rd", config.rd);
            console.log(config.rd);
            var deg = 1800 + rd;
            console.log(deg);
            var css = "-webkit-transform: rotate(" + deg + "deg);" + elStyle;

            document.getElementsByClassName("_eightdigits_item_spin")[0].setAttribute(
              "style", css
            );


            main.factory.prototype.request();
          });
        },
        boot: function () {
          var html = main.factory.prototype.spin.html();
          var css = main.factory.prototype.spin.css();
          jQuery("body").append(html);
          jQuery("head").append(css);
          main.factory.prototype.spin.start();
        }

      },
      start: function () {
        // todo true kalkacak
        if (main.factory.prototype.isLogin()) {
          if (EightDigits.utils.getCookie("ed-cookie-login" + config.scenarioname) !== null) {
            if (EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname) !== null && EightDigits.utils.getCookie("ed-clickedOneTime" + config.scenarioname) !== null) {
              main.factory.prototype.addCode();
            } else {
              main.factory.prototype.spin.boot();
            }
          }
        } else {
          main.factory.prototype.loginPopup();
        }
        // main.factory.prototype.spin.boot();

      },
      control: function () {
        if (EightDigits.utils.getCookie("ed-clickedOneTime" + config.scenarioname) !== null && EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname) === null) {
          return false;
        }
        if (EightDigits.utils.getCookie("ed-kulakcik_remove" + config.scenarioname) !== null) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (EightDigits.utils.getCookie("ed-notshown" + config.scenarioname) === null) {
            // EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie("ed-notshown" + config.scenarioname, "on");

          }

          return false;
        }
        main.factory.prototype.start();
      }
    };

    boot = function () {
      return main.factory.prototype.init();
    };

    boot();

  };
  var _ed_CarkiFelek_Setur_100_200 = new EightDigits.sf();
  _ed_CarkiFelek_Setur_100_200.CarkiFelek_Setur_100_200();
})();

(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("CarkiFelek_Setur_100_200")) {
    return false;
  }
  EightDigits.sf.prototype.CarkiFelek_Setur_100_200 = function () {

    var config = {
      scenarioname: "CarkiFelek_Setur_100_200",
      analytics: "CarkiFelek_Setur_100_200",
      scenarioClass: ".CarkiFelek_Setur_100_200",
      scenarioID: "#CarkiFelek_Setur_100_200",
      // imageLogin: "//cdn.8digits.com/log/r/a91ce1c0-1659-481f-b132-1915531d1145.png",
      imageLogin: "//cdn.8digits.com/log/r/1c65260d-4ee6-4cc4-94a3-72fd973b31ca.png",
      imageLoginMobile: "//cdn.8digits.com/log/r/1c65260d-4ee6-4cc4-94a3-72fd973b31ca.png",
      // imagewheelstand: "//cdn.8digits.com/log/r/e46468bf-b173-43a4-8856-81b419cc3582.png",
      imagewheelstand: "//cdn.8digits.com/log/r/40ceead0-c3f7-4320-b1b5-2a44c6d7fca3.png",
      imagewheelch: "//cdn.8digits.com/log/r/5bd4b694-c8da-452d-a610-76f9014b1473.png",
      imagewheel: "//cdn.8digits.com/log/r/18ba39b6-425f-492f-b05c-ffeec51d5ec1.png",
      imagewheelstandMobile: "//cdn.8digits.com/log/r/2393be1f-ba4c-42e4-95be-00047cf75630.png",
      imagewheelchMobile: "//cdn.8digits.com/log/r/57dae7d8-7d29-4cea-92a3-a9d54a568246.png",
      imagewheelMobile: "//cdn.8digits.com/log/r/8a81947e-0e90-46ec-8658-5ac9688a6473.png",
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
        "data": "9add8270-ff6a-407f-afef-653fad216ea6",
        "image": "//cdn.8digits.com/log/r/44af6db8-bafa-4721-9d26-bd30acf955f9.png"
      },
      "200TL": {
        "data": "c21237c6-6730-4689-9db2-3ef3d9e4b0d6",
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
      style: function () {
        var css = `<style>
           #CarkiFelek_Setur_100_200_kulakcik_main {
             position: fixed;
             z-index: 9;
             bottom: 35px;
             right: 0px;
             width: 290px;
             height: 65px;
             border: 5px dashed red;
             border-radius: 5px;
             background-color: white;
           }
           
           #CarkiFelek_Setur_100_200_kulakcik_main .CarkiFelek_Setur_100_200_close {
             position: absolute;
             right: 4px;
             top: 0px;
             font-size: 23px;
             color: grey;
             font-weight: 200;
           }
           
           .CarkiFelek_Setur_100_200_inner {
             line-height: 59px;
             margin-left: 12px;
             display: -webkit-box;
             display: -ms-flexbox;
             display: flex;
           }
           
           .CarkiFelek_Setur_100_200_inner .couponCodeText {
             color: gray;
             font-weight: 300;
             font-size: 18px;
           }
           
           .CarkiFelek_Setur_100_200_inner .couponCode {
             color: red;
             font-weight: bold;
             margin-left: 7px;
             font-size: 18px;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main {
             position: fixed;
             z-index: 9999;
             top: 0px;
             width: 100%;
             height: 100%;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_layer {
             position: absolute;
             z-index: 9998;
             top: 0px;
             width: 100%;
             height: 100%;
             background: rgba(0, 0, 0, 0.6);
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner {
             position: absolute;
             z-index: 9999;
             top: 50%;
             left: 50%;
             -webkit-transform: translate(-50%, -50%);
                     transform: translate(-50%, -50%);
             cursor: pointer;
             max-width: -webkit-max-content;
             max-width: -moz-max-content;
             max-width: max-content;
             width: 50%;
             height: -webkit-max-content;
             height: -moz-max-content;
             height: max-content;
           }
          #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_button {
            position: absolute;
            z-index: 6;
            width: 36%;
            height: min-content;
            left: 0;
            right: 0;
            margin: auto;
            text-align: center;
            color: white;
            background: #ed4035;
            border-radius: 10px;
            font-size: min(max(2vw, 3vw), 22px);
            font-weight: bold;
            font-family: arial;
            cursor: pointer;
            bottom: 11%;
            display: flex;
            justify-content: center;
            align-items: center;
           }
           
          #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner .couponCode {
             position: absolute;
             text-align: center;
             bottom: 10%;
             left: 50%;
             -webkit-transform: translateX(-50%);
                     transform: translateX(-50%);
             font-size: 14px;
             font-weight: 700;
             color: white;
             cursor: default;
             z-index: 1;
             padding: 10px;
             border-radius: 5px;
             background: #ed1c24;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner #ed_code1 {
             left: 26px;
             width: 19px;
             top: 25px;
             position: absolute;
             z-index: -3;
             visibility: hidden;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner .CarkiFelek_Setur_100_200_ed_noticon {
             display: none;
             position: absolute;
             z-index: 9999;
             bottom: 150px;
             left: 50%;
             -webkit-transform: translateX(-50%);
                     transform: translateX(-50%);
             font-size: 19px;
             font-weight: bold;
             background-color: #ed4035;
             color: white;
             text-align: center;
             line-height: 34px;
             border-radius: 8px;
             padding: 10px;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner img {
             width: 100%;
             height: 100%;
             -o-object-fit: contain;
                object-fit: contain;
             background: #ffffff;
             border-radius: 4px;
             padding-top: 20px;
           }
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner img.congrats {
             padding-top: inherit;
           }
           
           #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_close_login {
             width: 38px;
             height: 38px;
             right: 0px;
             top: 0px;
             position: absolute;
             z-index: 9999;
             font-size: 21px;
             line-height: 33px;
             text-align: center;
           }
           
           ._eightdigits_spin {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             z-index: 9999;
           }
           
           ._eightdigits_spin .overlay {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             z-index: 9999;
             background-color: rgba(0, 0, 0, 0.8);
           }
           
           ._eightdigits_spin ._eightdigits_spin_container {
             width: 100%;
             height: min-content;
             position: absolute;
             z-index: 9999;
             top: 50%;
             left: 50%;
             -webkit-transform: translate(-50%, -50%);
                     transform: translate(-50%, -50%);
           }
           
           ._eightdigits_spin ._eightdigits_spin_content {
             width: max-content;
             height: -webkit-min-content;
             height: -moz-min-content;
             height: min-content;
             position: relative;
             margin: auto;
           }
           
           ._eightdigits_spin ._eightdigits_spin_content .close__button {
             position: absolute;
             z-index: 6;
             font-size: 29px;
             display: block;
             height: 40px;
             width: 40px;
             text-align: center;
             line-height: 32px;
             top: 0px;
             z-index: 999999999;
             color: #fff;
             right: 0px;
             cursor: pointer;
           }
           
           ._eightdigits_spin ._eightdigits_spin_content ._eightdigits_spin_stand {
             width: 100%;
             height: -webkit-min-content;
             height: -moz-min-content;
             height: min-content;
             -o-object-fit: contain;
                object-fit: contain;
             margin: 0 auto;
           }
           
           ._eightdigits_spin ._eightdigits_spin_content ._eightdigits_spin_selector {
             width: 33%;
             height: 33%;
             -o-object-fit: contain;
                object-fit: contain;
             position: absolute;
             top: 42.5%;
             left: 50%;
             z-index: 2;
             -webkit-transform: translate(-50%, -50%);
                     transform: translate(-50%, -50%);
           }
           
           ._eightdigits_spin ._eightdigits_spin_content ._eightdigits_item_spin {
             position: absolute;
             width: 58%;
             height: 58%;
             -o-object-fit: contain;
                object-fit: contain;
             top: 13.7%;
             left: 20.9%;
           }
           
           ._eightdigits_spin ._eightdigits_spin_start {
             position: absolute;
             z-index: 6;
             width: 30%;
             height: 32px;
             left: 0;
             right: 0;
             margin: auto;
             text-align: center;
             color: white;
             background: #ed4035;
             border-radius: 10px;
             font-size: min(max(3vw, 4vw), 22px);
             font-weight: bold;
             font-family: arial;
             line-height: 31px;
             cursor: pointer;
             bottom: 15%;
           }
           
           @media screen and (max-width: 600px) {
            #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner{
              width: 80%;
             }
            #CarkiFelek_Setur_100_200_popup_login_main #CarkiFelek_Setur_100_200_popup_login_inner img{
              height: auto;
            }
           }
           @media screen and (max-width: 600px) {
             ._eightdigits_spin ._eightdigits_spin_container {
               width: 100%;
               height: 100%;
               position: relative;
               top: 0;
               left: 0;
               -webkit-transform: unset;
                       transform: unset;
             }
             ._eightdigits_spin ._eightdigits_spin_content {
               position: absolute;
               top: 50%;
               left: 50%;
               -webkit-transform: translate(-50%, -50%);
               transform: translate(-50%, -50%);
               width: 100%;
             }
             ._eightdigits_spin ._eightdigits_spin_content .close__button {
               position: absolute;
               z-index: 6;
               font-size: 29px;
               display: block;
               height: 40px;
               width: 40px;
               text-align: center;
               line-height: 32px;
               top: 0px;
               z-index: 999999999;
               color: #fff;
               right: 0px;
               cursor: pointer;
             }
             ._eightdigits_spin ._eightdigits_spin_content ._eightdigits_spin_stand {
               width: 100%;
               height: auto;
               -o-object-fit: contain;
                  object-fit: contain;
               margin: auto;
             }
             ._eightdigits_spin ._eightdigits_spin_start {
               left: 50%;
               -webkit-transform: translateX(-50%);
                       transform: translateX(-50%);
               padding: 0 10px;
               text-align: center;
               color: white;
               background: #ed4035;
               border-radius: 4px;
               font-size: 12px;
               font-weight: bold;
               font-family: arial;
               cursor: pointer;
               bottom: 15%;
               right: unset;
             }
           }
        </style>`;
        jQuery("head").append(css);
      },
      loginPopup: function () {
        if (EightDigits.utils.getCookie("ed-wasShown" + config.scenarioname) !== "on") {
          var popup = `
            <div id = '` + config.scenarioname + `_popup_login_main'>
              <div id='` + config.scenarioname + `_popup_login_layer'></div>
              <div id='` + config.scenarioname + `_popup_login_inner'>
                <div id='` + config.scenarioname + `_close_login'>&times;</div>
                <img src='` + config.imageLogin + `'>
                <div id='` + config.scenarioname + `_popup_login_button'> GİRİŞ YAP </div>
              </div>
            </div>`;
          jQuery("body").append(popup);
          EightDigits.utils.setCookie("ed-wasShown" + config.scenarioname, "on");
          EightDigits.analytics.sendEvent(config.scenarioname, "Shown_LoginPopup");
          jQuery(config.scenarioID + "_popup_login_inner img").click(function () {
            EightDigits.analytics.sendEvent(config.scenarioname, "Click_LoginPopupImage");
            EightDigits.utils.setCookie("ed-cookie-login" + config.scenarioname, "on");
            if (window.innerWidth <= 420) {
              window.location.href = jQuery(".fa.fa-user").eq(0).parent().attr("href");
            } else {
              jQuery(".login-button .mobile-none").click();
            }
          });
          jQuery(config.scenarioID + "_popup_login_button").click(function () {
            EightDigits.analytics.sendEvent(config.scenarioname, "Click_LoginPopupButton");
            EightDigits.utils.setCookie("ed-cookie-login" + config.scenarioname, "on");
            if (window.innerWidth <= 420) {
              window.location.href = jQuery(".fa.fa-user").eq(0).parent().attr("href");
            } else {
              jQuery(".login-button .mobile-none").click();
            }
          });
          jQuery(config.scenarioID + "_close_login").click(function () {
            EightDigits.analytics.sendEvent(config.scenarioname, "Close_LoginPopupButton");
            jQuery(config.scenarioID + "_popup_login_main").remove();
          });

          jQuery(config.scenarioID + "_popup_login_layer").click(function () {
            EightDigits.analytics.sendEvent(config.scenarioname, "Close_LoginPopup");
            jQuery(config.scenarioID + "_popup_login_main").remove();
          });
        }
      },
      copyTheClipBoard: function () {
        var copyCode1 = document.getElementById("ed_code1");
        copyCode1.select();
        document.execCommand("copy");
      },
      addKulakcik: function () {
        var html = `
        <div id='` + config.scenarioname + `_kulakcik_main'>
          <div class='` + config.scenarioname + `_inner'>
            <div class='couponCodeText'>Kodunuz:</div>
            <div class='couponCode'>` + config.code + `</div>
          </div>
          <div class='` + config.scenarioname + `_close'>&times;</div>
        </div> `;

        jQuery("body").append(html);
        jQuery("." + config.scenarioname + "_close").click(function () {
          jQuery(config.scenarioname + "_kulakcik_main").remove();
          EightDigits.utils.setCookie("ed-kulakcik_remove" + config.scenarioname, "on");
        });
      },
      addCode: function () {
        if (EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname) === null) {
          var popup = `
          <div id='` + config.scenarioname + `_popup_login_main'>
            <div id='` + config.scenarioname + `_popup_login_layer'></div>
            <div id='` + config.scenarioname + `_popup_login_inner'>
              <div id='` + config.scenarioname + `_close_login'>x</div>
              <div class="couponCode">` + config.code + `</div>
              <input id='ed_code1'  value='` + config.code + `'></input>
              <div class='` + config.scenarioname + `_ed_noticon'>Kodunuz Kopyalanmıştır.</div>
              <img class="congrats" src='` + coupons[config.rd].image + `'>
            </div>
          </div>`;
          jQuery("body").append(popup);
          EightDigits.utils.setCookie("ed-seenCode" + config.scenarioname, "on", 6 * 60);
          jQuery(config.scenarioID + "_popup_login_inner").click(function () {
            main.factory.prototype.copyTheClipBoard();
            jQuery(config.scenarioClass + "_ed_noticon").css("display", "block");
            EightDigits.analytics.sendEvent(config.analytics, "Click_CopyCode_" + config.rd);
            setTimeout(function () {
              jQuery(config.scenarioClass + "_ed_noticon").css("display", "none");
              jQuery(config.scenarioID + "_popup_login_main").remove();
              main.factory.prototype.addKulakcik();
            }, 1000);
          });
          jQuery(config.scenarioID + "_close_login").click(function () {
            jQuery(config.scenarioID + "_popup_login_main").remove();
            EightDigits.analytics.sendEvent(config.analytics, "Close_CopyCode");
            main.factory.prototype.addKulakcik();
          });

        } else {
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
            if (config.code) {
              EightDigits.utils.setCookie("ed-userSpecial-code" + config.scenarioname, config.code);
              jQuery("._eightdigits_spin, .overlay").remove();
              main.factory.prototype.addCode();
            }
          })
          .catch((error) => console.log("error", error));
      },
      isLogin: function () {
        let continueScenario = false;
        if (window.innerWidth <= 420) {
          if (jQuery(".mobile-top-user-area i").hasClass("fa-user-check")) {
            continueScenario = true;
          }
        } else {
          if (jQuery(".login-button .mobile-none").text() !== "Giriş Yap") {
            continueScenario = true;
          }
        }
        return continueScenario === true ? true : false;
      },
      spin: {
        html: function () {
          return (`
            <div class='_eightdigits_spin'>
              <div class='overlay'></div>
              <div class='_eightdigits_spin_container'>
                <div class='_eightdigits_spin_content'>
                  <div class='close__button'>&times;</div>
                  <img class='_eightdigits_spin_stand' src='` + config.imagewheelstand + `'/>
                  <img class='_eightdigits_spin_selector' src='` + config.imagewheelch + `'/>
                  <img class='_eightdigits_item_spin' src='` + config.imagewheel + `'/>
                  <div class='_eightdigits_spin_start'> Çarkı Çevir </div>
                </div>
              </div>
            </div>
            
        `);
        },
        controller: function () {
          jQuery(".close__button").click(function () {
            jQuery("._eightdigits_spin, .overlay").remove();
          });
          jQuery("._eightdigits_spin_start").click(function () {
            jQuery("._eightdigits_spin_start").css("display", "none");
            EightDigits.utils.setCookie("ed-clickedOneTime" + config.scenarioname, "on");
            EightDigits.analytics.sendEvent(config.scenarioname, "Click_SpinStart");

            var rd = 0;
            var fiftyFifty = Math.floor(Math.random() * 100);
            if (fiftyFifty < 50) {
              config.rd = "100TL";
              rd = Math.floor(Math.random()) + 154;
            } else {
              config.rd = "200TL";
              rd = Math.floor(Math.random()) + 70;
            }

            EightDigits.utils.setCookie("_eightdigits_spin_item_rd", config.rd);
            var deg = (360 * 4) + rd;
            var css = "-webkit-transform: rotate(-" + deg + "deg);transition : 5s all;";
            document.getElementsByClassName("_eightdigits_item_spin")[0].setAttribute("style", css);
            main.factory.prototype.request();
          });
        },
        boot: function () {
          jQuery("body").append(this.html());
          this.controller();
        }
      },
      start: function () {
        this.style();
        // todo true kalkacak
        if (this.isLogin()) {
          var cookieLogin = EightDigits.utils.getCookie("ed-cookie-login" + config.scenarioname);
          var seenCode = EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname);
          var clickedOneTime = EightDigits.utils.getCookie("ed-clickedOneTime" + config.scenarioname);

          if (EightDigits.utils.getCookie("ed-cookie-login" + config.scenarioname) !== null) {
            if (EightDigits.utils.getCookie("ed-seenCode" + config.scenarioname) !== null && EightDigits.utils.getCookie("ed-clickedOneTime" + config.scenarioname) !== null) {
              main.factory.prototype.addCode();
            } else {
              this.spin.boot();
            }
          }
        } else {
          this.loginPopup();
        }
      },
      control: function () {
        let date = new Date;
        let day = date.getDay();
        if (day === 1 || day === 3 || day === 5) {
          return false;
        }
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
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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

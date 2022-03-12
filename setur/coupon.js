(function () {
  const scenarioName = "BF_Login_coupon";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
      coupon: "",
      desktop: {
        header: {
          img: "https://cdn.8digits.com/log/r/eb7e3034-3cd1-481a-9a49-f5cf3d423db4.jpeg",
          redirect: "https://www.setur.com.tr/efsane-cuma-indirimleri"
        },
        userPopup: {
          img: "https://cdn.8digits.com/log/r/78bbddd5-6f62-49b8-8a17-9070e36fad02.jpeg",
          redirect: "javascript:void(0)"
        },
        couponPopup: {
          img: "https://cdn.8digits.com/log/r/d9292dbb-31e4-4246-af50-63f6ae041b98.jpeg",
        }
      },
      mobile: {
        header: {
          img: "https://cdn.8digits.com/log/r/f8511eee-8e45-4abf-8bd1-fbc6de2598d9.jpeg",
          redirect: "https://www.setur.com.tr/efsane-cuma-indirimleri"
        },
        userPopup: {
          img: "https://cdn.8digits.com/log/r/ee4ef572-9b3a-4226-b510-0148d2e49bc7.jpeg",
          redirect: "javascript:void(0)"
        },
        couponPopup: {
          img: "https://cdn.8digits.com/log/r/bfbb1029-63da-43a8-8756-e855271d1131.jpeg",
        }
      }
    };
    const scenarioClass = "." + config.scenarioname;
    let main = {
      factory: function () {
        return true;
      },
    };

    main.factory.prototype = {
      random: function () {
        let randomVal = 0;
        let randomControlRatio =
          config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
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
      fireEvent: function (eventName, withCookie) {
        const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
        if (withCookie === true) {
          if (!EightDigits.utils.getCookie(`ed-${config.analytics}${eventName}_${device}`)) {
            EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
            EightDigits.utils.setCookie(`ed-${config.analytics}${eventName}_${device}`, "on");
          }
        } else {
          EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
        }
      },
      start: function () {
        const cookieName = "smpl_BF_scenarioFollow";
        const obj = window.innerWidth < 767 ? config.mobile : config.desktop;
        const html = {
          header: function () {
            return (`
        <div class="${config.scenarioname}_header">
          <a href="${obj.header.redirect}">
            <img src="${obj.header.img}" alt="Efsana Cuma Fırsatları sizi bekliyor">
          </a>
        </div>
      `);
          },
          userPopup: function () {
            return (`
        <div class="${config.scenarioname}_userPopup">
          <section>
            <span class="close">&times;</span>
            <a href="${obj.userPopup.redirect}">
              <img src="${obj.userPopup.img}" alt="Üye girişi yap fırsatları yakala">
            </a>
          </section>
        </div>
        `);
          },
          couponPopup: function (coupon) {
            return (`
        <div class="${config.scenarioname}_couponPopup">
          <section>
            <span class="close">&times;</span>
            <div class="imgArea">
              <img src="${obj.couponPopup.img}" alt="Üye girişi yap fırsatları yakala">
            </div>
            <div class="couponArea">
              <span class="couponCode">${coupon}</span>
              <p class="copiedText" style="display:none;">Kopyalandı</p>
              <button class="copyButton"></button>
            </div>
          </section>
        </div>
        `);
          }
        };
        const controller = {
          init: function () {
            jQuery(`${scenarioClass}_header`).on("click", () => {
              controller.set_updateCookie("header");
            });
            jQuery(`${scenarioClass}_userPopup .close, ${scenarioClass}_couponPopup .close`).on("click", controller.close);
            jQuery(`${scenarioClass}_userPopup`).on("click", (event) => controller.loginPopup(event));
            jQuery(`${scenarioClass}_couponPopup .copyButton`).on("click", controller.copy);
          },
          loginPopup: function (event) {
            controller.set_updateCookie("login");
            if (window.innerWidth <= 420) {
              window.location.href = jQuery(".fa.fa-user").eq(0).parent().attr("href");
            } else {
              jQuery(".login-button .mobile-none").click();
            }
            main.factory.prototype.fireEvent("click-loginPopup");
          },
          set_updateCookie: function (type) {
            EightDigits.utils.setCookie(cookieName, type);
          },
          copy: function () {
            const coupon = jQuery(`${scenarioClass}_couponPopup .couponCode`).text();
            let temp = jQuery("<input>");
            jQuery("body").append(temp);
            jQuery(temp).val(coupon).select();
            document.execCommand("copy");
            jQuery(temp).remove();
            document.execCommand("copy");
            jQuery(`${scenarioClass}_couponPopup .copiedText`).fadeIn(1000).delay(1050).fadeOut(1500);
          },
          close: function () {
            if (jQuery(`${scenarioClass}_userPopup`).length > 0) {
              jQuery(`${scenarioClass}_userPopup`).remove();
              main.factory.prototype.fireEvent("click-close_userPopup", false);
            } else {
              jQuery(`${scenarioClass}_couponPopup`).remove();
              main.factory.prototype.fireEvent("click-close_couponPopup", false);
            }
          },
          getCoupon: function () {
            /* cc26094b-afe6-49d2-84bf-885981f087e4  --> test */
            /* 471695c5-52ff-4c52-9593-bdf8e99c736d --> all Codes */
            const couponInCookie = EightDigits.utils.getCookie(`smpl_${config.scenarioname}_coupon`);
            if (couponInCookie) {
              main.factory.prototype.displayCampaing(couponInCookie);
            } else {
              let visitorId = EightDigits.utils.getCookie("eightdigits_visitor");
              let requestList = ["471695c5-52ff-4c52-9593-bdf8e99c736d"];
              let myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              let raw = JSON.stringify({
                visitorId: visitorId,
                customer: _trackingCode,
                campaignId: requestList[0],
              });

              let requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
              };

              fetch("https://promocode.8digits.com/api/campaign/search", requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  let coupon = JSON.parse(result);
                  EightDigits.utils.setCookie("smpl_BF_scenarioFollow_coupon", coupon.data, 24 * 60 * 60);
                  jQuery("body").append(html.couponPopup(coupon.data));
                  jQuery(`${scenarioClass}_couponPopup .copyButton`).on("click", controller.copy);
                  jQuery(`${scenarioClass}_couponPopup .close`).on("click", controller.close);
                })
                .catch((error) => console.log("error", error));
            }
          }
        };
        const isLogin = jQuery(".top-user-area-list .login-button").length > 0 ? false : true;
        let whichStep = "";
        if (EightDigits.utils.getCookie(cookieName) === "header" && !isLogin) {
          jQuery("body").append(html.userPopup());
          whichStep = "userPopup";
        } else if (((EightDigits.utils.getCookie(cookieName) === "login" && isLogin) || isLogin) && jQuery(".booking-filters").length > 0) {
          controller.getCoupon();
          whichStep = "couponPopup";
          controller.set_updateCookie(whichStep);
        }
        if (!isLogin) {
          jQuery("#main-header").prepend(html.header());
          setTimeout(() => {
            jQuery(".global-wrap").attr("style", `margin-top: ${jQuery("#main-header").height()}px !important;`);
          }, 700);
          whichStep = "header";
        }
        controller.init();
        jQuery("head").append(main.factory.prototype.style());
        main.factory.prototype.fireEvent("shown-" + whichStep, true);
      },
      style: function () {
        return (`
    <style>
${scenarioClass}_header a {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right,#292682 , #64203c);
}
${scenarioClass}_header a img {
  width: 100%;
  height: auto;
  max-width: 1140px;
}
${scenarioClass}_userPopup, ${scenarioClass}_couponPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

${scenarioClass}_userPopup section, ${scenarioClass}_couponPopup section {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
}

${scenarioClass}_userPopup section .close, ${scenarioClass}_couponPopup section .close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 24px;
  color: #f00;
  opacity: 1;
  text-shadow: none;
}

${scenarioClass}_couponPopup .imgArea {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

${scenarioClass}_couponPopup .imgArea img {
  width: 100%;
  height: auto;
}

${scenarioClass}_couponPopup .couponArea {
  position: absolute;
  width: 27%;
  height: 25%;
  bottom: 13%;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

${scenarioClass}_couponPopup .couponArea .couponCode {
  height: 59%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: #b9eeff;
  -webkit-filter: drop-shadow(0px 0px 4px #d1f4ff);
          filter: drop-shadow(0px 0px 4px #d1f4ff);
}

${scenarioClass}_couponPopup .couponArea .copiedText {
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: -22px;
  width: 100%;
}

${scenarioClass}_couponPopup .couponArea .copyButton {
  border: none;
  background-color: transparent;
  width: 91%;
  margin: 10px auto 0;
  height: 37px;
  display: block;
}
@media screen and (max-width: 400px){
  ${scenarioClass}_couponPopup .couponArea {
    width: 24%;
    height: 20%;
    bottom: 12%;
  }
  ${scenarioClass}_couponPopup .couponArea .couponCode {
    font-size: 2.5vw;
  }
  ${scenarioClass}_couponPopup .couponArea .copiedText {
    position: absolute;
    top: -22px;
  }
  ${scenarioClass}_userPopup section, ${scenarioClass}_couponPopup section {
    position: fixed;
    top: 50%;
    left: unset;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
  }
  ${scenarioClass}_userPopup img, ${scenarioClass}_couponPopup img {
    max-width: max-content;
  }
}
    </style>`);
      },
      control: function () {
        if (EightDigits.utils.getCookie(`smpl_BF_scenarioFollow_coupon`)) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() === false) {
          return false;
        }
        let _exec = main.factory.prototype.random();
        if (!_exec) {
          main.factory.prototype.fireEvent("NotShown", true);
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
  let ed = {};
  ed["_ed_" + scenarioName] = new EightDigits.sf();
  ed["_ed_" + scenarioName][scenarioName]();
})();
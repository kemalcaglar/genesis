(function () {
  const scenarioName = "Uyelere_Ozel_Popup";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
    };
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
      style: function () {
        let css = `<style>
          .smpl_${config.scenarioname} {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.75);
            position: fixed;
            top: 0;
            left: 0;
            display: none;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: 99999999999999;
          }
          
          .smpl_${config.scenarioname} .smpl_popCard {
            position: relative;
          }
          
          .smpl_${config.scenarioname} .smpl_popCard .smpl_close {
            position: absolute;
            top: 1px;
            right: 9px;
            font-size: 30px;
            cursor: pointer;
            color: black;
          }

          .smpl_${config.scenarioname} .smpl_popCard a{
            font-size: 20px;
          }

          @media only screen and (max-width: 768px) {
            .smpl_${config.scenarioname} .smpl_popCard .smpl_close {
              top: -6px;
              right: 3px;
              font-size: 20px;
            }
          }

          .smpl_flex {
            display: flex !important;
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        const image = window.innerWidth > 768
          ? "https://cdn.8digits.com/log/r/42313566-3af6-4930-90c3-4606cb82b4b7.jpeg"
          : "https://cdn.8digits.com/log/r/321106c2-6167-43e0-874e-33308b7e4a51.jpeg";
        const loginHref = window.innerWidth > 768
          ? jQuery(".login-button a").attr("href")
          : jQuery(".mobile-top-user-area a").attr("href");
        const popupHtml = `
                <div class="smpl_${config.scenarioname}">
                  <div class="smpl_popCard">
                    <div class="smpl_close">&times;</div>
                    <a href="${loginHref}">
                      <img src="${image}">
                    </a>
                  </div>
                </div>`;
        if (jQuery(".js-mobile-userCheck").length > 0) {
          jQuery(".main-price-pc-display").show();
        } else {
          jQuery(".price-name span").each(function () {
            if (jQuery(this).text().trim() === "Üyelere Özel İndirim") {
              jQuery(this).parents(".room-price-item-row").hide();
            }
          });
          jQuery(".mobile-main-price").hide()
          jQuery(".main-price-pc-display").hide();
          jQuery("body").prepend(popupHtml);
        }
        jQuery(".main-price-pc-display");
        setTimeout(() => {
          jQuery(`.smpl_${config.scenarioname}`).addClass("smpl_flex");
          main.factory.prototype.fireEvent("shown_" + config.scenarioname, true);
          jQuery(`.smpl_${config.scenarioname} a`).click(function () {
            main.factory.prototype.fireEvent("click_" + config.scenarioname, true);
          });
        }, 1500);
        jQuery(".smpl_close").click(function () {
          jQuery(`.smpl_${config.scenarioname}`).removeClass("smpl_flex");
          main.factory.prototype.fireEvent("click_close_" + config.scenarioname, true);
        });
        jQuery(`.smpl_${config.scenarioname}`).click(function (e) {
          if (e.target === jQuery(`.smpl_${config.scenarioname}`)[0]) {
            jQuery(`.smpl_${config.scenarioname}`).removeClass("smpl_flex");
            main.factory.prototype.fireEvent("click_close_" + config.scenarioname, true);
          }
        });
        main.factory.prototype.style();
      },
      control: function () {
        if (window.location.pathname === "/acer-cave-hotel") {
          return true;
        } else {
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

(function () {
  const scenarioName = "Onbir_Kasim_Kampanya";
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
          .smpl_${config.scenarioname}_header div{
            position: relative;
          }

          .smpl_${config.scenarioname}_header button {
            border: 0;
            border-radius: 15px;
            background: #fff;
            padding: 0 20px;
            color: #de2027;
            cursor: pointer;
          }

          .smpl_${config.scenarioname} {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            top: 0;
            left: 0;
            display: none;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index:9999;
            position: fixed;
          }

          .smpl_${config.scenarioname} .popCard{
            max-width: 640px;
            max-height: 540px;
            background: white;
            position: relative;
            text-align: center;
          }

          .smpl_${config.scenarioname} .closePop {
            position: absolute;
            width: 20px;
            top: 16px;
            right: 29px;
            cursor: pointer;
            font-size: 35px;
            color: #f00;
            line-height: 25px;
          }

          .smpl_${config.scenarioname} img {
            width: 100%;
          }

          .smpl_${config.scenarioname} .copyCode{
            position: absolute;
            bottom: 54px;
            color: #fff;
            left: 217px;
            width: 168px;
            height: 37px;
            border-radius: 7px;
            cursor: pointer;
          }

          .smpl_dnone {
            display: none !important;
          }
            
          .smpl_flex {
            display: flex !important;
          }

          .smpl_${config.scenarioname} .poptooltip{
            position: absolute;
            bottom: 15px;
            left: 242px;
            background: gray;
            color: white;
            padding: 5px;
            border-radius: 5px;
            display: none;
          }

          @media only screen and (max-width:768px){
            .smpl_${config.scenarioname}_header {
              background: #234862;
            }

            .smpl_${config.scenarioname} .copyCode{
              bottom: 37px;
              left: 128px;
              width: 105px;
              height: 23px;
            }

            .smpl_${config.scenarioname} .poptooltip{
              bottom: 17px;
              left: 135px;
              font-size: 11px;
              padding: 0px 5px;
              line-height: 18px;
            }

            .smpl_${config.scenarioname} img {
              width: 360px;
            }

            .smpl_${config.scenarioname} .closePop{
              top: 7px;
              right: 14px;
            }
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        let image, popimage = "";
        if (window.innerWidth > 768) {
          image = "https://cdn.8digits.com/log/r/3498bcf3-9ad7-4a89-9eb5-89141341d5af.png";
          popimage = "https://cdn.8digits.com/log/r/bf54efc4-410a-4611-bb13-096aaa846e59.jpeg";
        } else {
          image = "https://cdn.8digits.com/log/r/4290ba60-eb18-4bb2-b9bf-1ab895725713.png";
          popimage = "https://cdn.8digits.com/log/r/331e2301-6e56-4502-a3f2-4c68346b39b0.jpeg";
        }
        const header = `
                <div class="smpl_${config.scenarioname}_header">
                    <a href="https://www.setur.com.tr/11-kasim-firsatlari">
                      <img src="${image}" alt="oteller_header">
                    </a>
                </div>`;
        jQuery(".main-header").prepend(header);
        main.factory.prototype.fireEvent("shown-header", true);
        jQuery(`.smpl_${config.scenarioname}_header a img`).on("click", function (e) {
          main.factory.prototype.fireEvent("click-headerBanner", true);
        });
        const popup = `
                <div class="smpl_${config.scenarioname}">
                  <div class="popCard">
                    <span class="closePop">&times;</span>
                    <img src="${popimage}" alt="oteller_popup">
                    <div class="copyCode"></div>
                    <div class="poptooltip">Kod Kopyalandı</div>
                  </div>
                </div>`;
        if (!(window.location.pathname === "/")) {
          jQuery("body").prepend(popup);
          setTimeout(() => {
            jQuery(`.smpl_${config.scenarioname}`).addClass("smpl_flex");
          }, 1500);
          main.factory.prototype.fireEvent("shown-popup", true);
        }
        jQuery(`.smpl_${config.scenarioname} .copyCode`).click(function () {
          let coupon = "STR1111";
          let temp = jQuery('<input>');
          jQuery('body').append(temp);
          jQuery(temp).val(coupon).select();
          document.execCommand('copy');
          jQuery(temp).remove();
          document.execCommand('copy');
          jQuery(`.smpl_${config.scenarioname} .poptooltip`).addClass("smpl_flex");
          setTimeout(() => {
            jQuery(`.smpl_${config.scenarioname} .poptooltip`).removeClass("smpl_flex");
          }, 3000);
          main.factory.prototype.fireEvent("click_CopyCode", true);
        });
        jQuery(".closePop").click(function () {
          jQuery(`.smpl_${config.scenarioname}`).removeClass("smpl_flex");
          main.factory.prototype.fireEvent("click_PopupClose", true);
        });
        jQuery(`.smpl_${config.scenarioname}`).click(function (e) {
          if (e.target === jQuery(`.smpl_${config.scenarioname}`)[0]) {
            jQuery(`.smpl_${config.scenarioname}`).removeClass("smpl_flex");
            main.factory.prototype.fireEvent("click_PopupCloseOverlay", true);
          }
        });
          setTimeout(() => {
            let bannerHeigth = jQuery(`.smpl_${config.scenarioname}_header`)[0].offsetHeight;
            if (window.innerWidth > 768) {
              jQuery(".global-wrap").attr("style", `margin-top: ${102 + bannerHeigth}px !important;`);
            } else {
              if (window.location.href === "https://www.setur.com.tr/") {
                jQuery(".global-wrap").attr("style", `margin-top: ${65 + bannerHeigth}px !important;`);
              }
            }
          }, 500);
        main.factory.prototype.style();
      },
      control: function () { },
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

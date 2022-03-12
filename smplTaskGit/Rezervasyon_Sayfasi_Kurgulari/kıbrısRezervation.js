(function () {
  const scenarioName = "Kibris_Rezervasyon_Popup";
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
            background-color: rgba(0, 0, 0, 0.7);
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
            width: 500px;
            height: 150px;
            background: white;
            box-shadow: 0px 0px 1px #e4e4e4;
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            margin: 30px;
          }
          
          .smpl_${config.scenarioname} .smpl_popCard .smpl_close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
          }

          .smpl_${config.scenarioname} .smpl_popCard a{
            font-size: 20px;
            padding: 20px;
            text-decoration: underline;
          }

          .smpl_flex {
            display: flex !important;
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        const popup = `
                <div class="smpl_${config.scenarioname}">
                  <div class="smpl_popCard">
                    <div class="smpl_close">&times;</div>
                    <a href="https://saglik.gov.ct.tr/BULA%C5%9EICI-HASTALIKLAR-%C3%9CST-KOM%C4%B0TES%C4%B0-TARAFINDAN-ALINAN-KARARLAR" target="_blank">
                      Pandemi Döneminde KKTC'ye Yapılacak Seyahatler Hakkında Önemli Bilgilendirme
                    </a>
                  </div>
                </div>`;
        jQuery("body").prepend(popup);
        const placeList = ["Girne", "Bafra", "Magosa", "Lefko&#x15F;a"];
        for (const item of dataLayer) {
          if (item.ecommerce !== undefined) {
            for (const iterator of placeList) {
              if (item.ecommerce.HotelPlaceName === iterator) {
                setTimeout(() => {
                  jQuery(`.smpl_${config.scenarioname}`).addClass("smpl_flex");
                  main.factory.prototype.fireEvent("shown_" + config.scenarioname, true);
                  jQuery(`.smpl_${config.scenarioname} a`).click(function () {
                    main.factory.prototype.fireEvent("click_" + config.scenarioname, true);
                  });
                }, 1500);
                break;
              }
            }
          }
        }
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
        if (window.location.pathname === "/Rezervasyon-Bilgileri") {
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
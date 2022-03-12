(function () {
  const scenarioName = "Erken_Rezervasyon_Headerr";
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
          .smpl_${config.scenarioname}_header{
            position: relative;
            display: flex;
            justify-content: center;
          }

          .smpl_${config.scenarioname}_header img {
            width: 1140px;
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

            .smpl_${config.scenarioname}_header img {
              width: 100vw;
              heigth: 60px;
            }
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        let image, popimage = "";
        if (window.innerWidth > 768) {
          image = "https://cdn.8digits.com/log/r/2867e443-aef8-42ca-bdb9-48d4f0b605f0.jpeg";
        } else {
          image = "https://cdn.8digits.com/log/r/9009cff2-37a7-4e10-b349-34daceba96b1.jpeg";
        }
        const header = `
                <div class="smpl_${config.scenarioname}_header">
                    <a href="https://www.setur.com.tr/erken-rezervasyon-otelleri">
                      <img src="${image}" alt="oteller_header">
                    </a>
                </div>`;
        jQuery(".main-header").prepend(header);
        main.factory.prototype.fireEvent("shown-header", true);
        jQuery(`.smpl_${config.scenarioname}_header a img`).on("click", function (e) {
          main.factory.prototype.fireEvent("click-header", true);
        });
        setTimeout(() => {
          let bannerHeigth = jQuery(`.smpl_${config.scenarioname}_header`)[0].offsetHeight;
          if (window.innerWidth > 768) {
            jQuery(".global-wrap").attr("style", `margin-top: ${102 + bannerHeigth}px !important;`);
          } else {
            if (window.location.href === "https://www.setur.com.tr/" && window.location.href === "https://www.setur.com.tr/?erken") {
              if (jQuery("#ed_webstories_main").length) {
                jQuery(".global-wrap").attr("style", `${65 + bannerHeigth}px !important;`);
              }
            }
          }
        }, 500);
        window.onload;
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

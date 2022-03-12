(function () {
  const scenarioName = "Yuzde_Elli_Banner";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 50,
      list: {
        erkenRezerwation: {
          name: "erkenRezerwation",
          desktopImage: "https://cdn.8digits.com/log/r/198723cc-67a4-43a6-b5f8-6cef1975c975.jpeg",
          mobileImage: "https://cdn.8digits.com/log/r/7b0a609f-034b-41c3-aa21-c2e49554abb9.jpeg",
          redirect: "https://www.setur.com.tr/erken-rezervasyon-otelleri?checkinDate=2022-06-01&checkoutDate=2022-06-07&oda1=Y,Y&scrollSearch=true"
        },
        tatiliniGarantile: {
          name: "tatiliniGarantile",
          desktopImage: "https://cdn.8digits.com/log/r/521f74a0-def0-48a3-8929-78cb90563ff2.jpeg",
          mobileImage: "https://cdn.8digits.com/log/r/f801fad7-fecb-47c8-b117-35b079b4c6d0.jpeg",
          redirect: "https://www.setur.com.tr/kismi-odeme-kampanyasi"
        }
      }
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
            .smpl_${config.scenarioname}_header img {
              width: auto;
              heigth: 60px;
            }
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function (header) {
        let image = "";
        if (window.innerWidth > 768) {
          image = header.desktopImage;
        } else {
          image = header.mobileImage;
        }
        const html = `
                <div class="smpl_${config.scenarioname}_header">
                    <a href="${header.redirect}">
                      <img src="${image}" alt="oteller_header">
                    </a>
                </div>`;
        jQuery(".main-header").prepend(html);
        main.factory.prototype.style();
        main.factory.prototype.fireEvent(`shown-${header.name}`, true);
        jQuery(`.smpl_${config.scenarioname}_header a img`).on("click", function (e) {
          main.factory.prototype.fireEvent(`click-${header.name}`, true);
        });

        jQuery(`.smpl_${config.scenarioname}_header a img`).on("load", function () {
          console.log("image loaded");
          let bannerHeigth = jQuery(`#main-header`)[0].offsetHeight;
          jQuery(".global-wrap").attr("style", `margin-top: ${bannerHeigth}px !important;`);
        });

        /* if (window.innerWidth > 768) {
          jQuery(".global-wrap").attr("style", `margin-top: ${102 + bannerHeigth}px !important;`);
        } else {
          for (const item of dataLayer) {
            if (item.pageType !== "Listing Page") {
              jQuery(".global-wrap").attr("style", `margin-top: ${68 + bannerHeigth}px !important;`);
            } else {
              jQuery(".global-wrap").attr("style", `margin-top: 65px !important;`);
            }
          }
        } */
      },
      control: function () {
        if (window.location.pathname === "/Sepet") {
          return false;
        } else {
          return true;
        }
      },
      init: function () {
        if (main.factory.prototype.control() === false) {
          return false;
        }
        let _exec = main.factory.prototype.random();
        let header = "";
        if (!_exec) {
          header = config.list.tatiliniGarantile;
        } else {
          header = config.list.erkenRezerwation;
        }
        main.factory.prototype.start(header);
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
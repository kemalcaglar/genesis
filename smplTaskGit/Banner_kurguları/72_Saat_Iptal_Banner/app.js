(function () {
  const scenarioName = "Test_Event";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
      desktopImage: "http://cdn.8digits.com/log/r/772d1fc0-18f5-405f-a26f-ff9c0c162cae.jpeg",
      mobileImage: "http://cdn.8digits.com/log/r/864f9960-9cc1-474a-98ed-6a16940ae273.jpeg",
      text: "İptal iade güvencesini satın alırsanız konaklamanıza 72 saat kalana kadar yapacağınız iptallerde, kesintisiz iade güvencesine sahip olursunuz."
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
        let css = `
        <style>
          .smpl-${config.scenarioname} .image {
            width: 100%;
            margin-bottom: 20px;
          }

          .smpl-${config.scenarioname} .smpl-tooltip {
            position: absolute;
            width: 250px;
            right: 0;
            margin-top: -215px;
            border-radius: 6px;
            padding: 4px 5px;
            background-color: #555 !important;
            z-index: 999999;
            display: none;
          }

          .smpl-${config.scenarioname} span {
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #555 !important;
            position: absolute;
            right: 3%;
            margin-top: -112px;
            display: none;
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
          }

          .smpl-${config.scenarioname} .smpl-tooltip div {
            text-align: center;
            font-size: 12px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
            color: #c4c4c4 !important
          }

          .smpl-${config.scenarioname} .smpl-tooltip div p {
            padding: 2px;
          }

          .smpl-${config.scenarioname}:hover .smpl-tooltip,
          .smpl-${config.scenarioname}:hover span {
            display: block;
          }
          
          @media only screen and (max-width: 576px) {
            .smpl-${config.scenarioname} {
              margin-top:-10px;
            }

            .smpl-${config.scenarioname} .smpl-tooltip {
              width: 200px;
              margin-top: -200px;
              z-index: 9;
            }

            .smpl-${config.scenarioname} span {
              right: 5%;
              margin-top: -97px;
            }

            .smpl-${config.scenarioname} .smpl-tooltip div {
              font-size: 10px;
            }
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        let image;
        if (window.innerWidth > 768) {
          image = config.desktopImage;
        } else {
          image = config.mobileImage;
        }
        const html = `
          <div class="smpl-${config.scenarioname}">
            <section class="image">
              <img src="${image}">
            </section>
            <span class="arrow"></span>
            <section class="smpl-tooltip">
              <div>
                <p>${config.text}</p>
              </div>
            </section>
          </div>`;

        jQuery('#Hotel-List-Container ul li:eq(1)').after(html);
        main.factory.prototype.fireEvent("shown_banner", true);
        main.factory.prototype.style();
      },
      control: function () {
        if (jQuery('#Hotel-List-Container').length === 0) {
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
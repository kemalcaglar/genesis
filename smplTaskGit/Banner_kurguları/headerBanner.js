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
      redirect: "",
      dektopImage: "https://cdn.8digits.com/log/r/da36f677-3dee-4255-9ced-318be3e0f6fd.jpeg",
      mobilImage: "https://cdn.8digits.com/log/r/6a9696ad-2e64-491e-92b6-bfc8a3ab8e3f.jpeg",
      debounce: function (func, timeout) {
        let timer;
        return function (...args) {
          const context = this;
          clearTimeout(timer);
          timer = setTimeout(() => func.apply(context, args), timeout);
        };
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
          .smpl_${config.scenarioname} {
            display: flex;
            justify-content: center;
            background: #E92D21;
          }
          .smpl_${config.scenarioname} img {
            max-width: 100%;
            width: 100%;
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {

        const html = {
          init: function () {
            return (`
                <div class="smpl_${config.scenarioname}">
                  <a href="${config.redirect}">
                    <img src="${this.image()}">
                  </a>
                </div>
                  `);
          },
          image: function () {
            let image = "";
            if (window.innerWidth > 768) {
              image = config.dektopImage;
            } else {
              image = config.mobilImage;
            }
            return image;
          }
        };

        const addEvents = function () {
          const imageElement = jQuery(`.smpl_${config.scenarioname} a img`);
          const errerElemet = jQuery(".ErrorPageContainer__ErrorContainer-sc-1c7w1nw-1");
          jQuery(".rONne img").css("margin-top", "60px");
          main.factory.prototype.fireEvent("shown", true);
          imageElement.on("click", function (e) {
            main.factory.prototype.fireEvent("click-header", true);
          });
          jQuery(window).resize(config.debounce(function () {
            if (window.innerWidth > 768) {
              imageElement.attr("src", config.dektopImage);
            } else {
              imageElement.attr("src", config.mobilImage);
            }
          }, 100));
          if (errerElemet.length > 0
            || window.innerWidth < 768) {
            errerElemet.attr("style", "top: 138.5px;");
          }
        };
        jQuery("#__next").prepend(html.init());
        addEvents();
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

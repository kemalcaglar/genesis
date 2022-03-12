(function () {
  const scenarioName = "On_Kasım_Banner";
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
          
          .smpl_${config.scenarioname} img {
            width: 100%;
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        const html = `
        <div class="smpl_${config.scenarioname}">
          <img src="https://cdn.8digits.com/log/r/8d8b60bb-131c-4550-8403-52f058a509b9.jpeg" alt="On Kasım Banner">
        </div>`;
        jQuery(".smpl_ara_Tatil_Kampanyası_header").remove();
        jQuery(".main-header").prepend(html);
        if (window.location.href === "https://www.setur.com.tr/") {
          setTimeout(() => {
            let bannerHeigth = jQuery(`.smpl_${config.scenarioname}`)[0].offsetHeight;
            jQuery(".global-wrap").attr("style", `margin-top: ${65 + bannerHeigth}px !important;`);
          }, 500);
        }
        main.factory.prototype.fireEvent("shown", true);
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

(function () {
  const scenarioName = "Limak_Cyprus_Konser_Banner";
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
            padding: 5px;
          }
          
          .smpl_${config.scenarioname} img {
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        let image = "";
        let scroll = "";
        if (window.innerWidth > 768) {
          image = "https://cdn.8digits.com/log/r/b1cefa0e-e572-4aac-95e6-9ad8920a5c3d.jpeg";
          scroll = 1100;
        } else {
          image = "https://cdn.8digits.com/log/r/1645d676-a8bb-4847-a33f-3442f51f2aac.jpeg";
          scroll = 1500;
        }
        const html = `
          <div class="smpl_${config.scenarioname}">
            <img src="${image}">
          </div>
          `;
        jQuery("#scroll-to-innersearch").after(html);
        jQuery(`.smpl_${config.scenarioname}`).click(function (e) {
          jQuery(".hoteldetail-content-tab-title a").removeClass("active show");
          jQuery("#tab-1-content").removeClass("active show");
          jQuery("#tab-3-content").removeClass("active show");
          jQuery("#tab-2-content").addClass("active show");
          jQuery("#tab-2-content-button").addClass("active show");
          jQuery("#feature-0").addClass("none");
          jQuery("#announcement-1").removeClass("none");
          $('html, body').animate({
            scrollTop: scroll
          }, 2000);
          main.factory.prototype.fireEvent("click", true);
        });

        main.factory.prototype.style();
        main.factory.prototype.fireEvent("shown", true);
      },
      control: function () {
        if (window.location.pathname === "/limak-cyprus-deluxe-hotel") {
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
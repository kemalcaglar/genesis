(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Test_Event")) {
    return false;
  }
  EightDigits.sf.prototype.Test_Event = function () {
    let config = {
      scenarioname: "Test_Event",
      analytics: "Test_Event",
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
        if (withCookie === true) {
          if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName)) {
            EightDigits.analytics.sendEvent(config.analytics, eventName);
            EightDigits.utils.setCookie("ed-" + config.analytics + eventName, "on");
          }
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
        `
        jQuery("head").append(css);
      },
      start: function () {

        const html = `
          <div class="smpl_${config.scenarioname}">
            <img src="https://cdn.hellosmpl.com/uploads/2021/10/05/2mgr4d0tokse270kcjbp2j6cvf.jpg">
          </div>
          `
        jQuery("#scroll-to-innersearch").after(html)

        jQuery(`.smpl_${config.scenarioname}`).click(function (e) {
          jQuery(".hoteldetail-content-tab-title a").removeClass("active show");
          jQuery("#tab-1-content").removeClass("active show");
          jQuery("#tab-3-content").removeClass("active show");
          jQuery("#tab-2-content").addClass("active show");
          jQuery("#tab-2-content-button").addClass("active show");
          jQuery("#feature-0").addClass("none")
          jQuery("#announcement-1").removeClass("none")
          $('html, body').animate({
            scrollTop: 1500
          }, 2000);
          main.factory.prototype.fireEvent("click", true);
        });

        main.factory.prototype.style()
        main.factory.prototype.fireEvent("shown", true);
      },
      control: function () {
        let breadcrumb = jQuery(".breadcrumb li:last").text().trim()
        if (breadcrumb === "Regnum Carya") {
          return true
        } else {
          return false
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
  let _ed_Test_Event = new EightDigits.sf();
  _ed_Test_Event.Test_Event();
})();
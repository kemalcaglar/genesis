(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("istiklal_treni_banner")) {
    return false;
  }
  EightDigits.sf.prototype.istiklal_treni_banner = function () {
    let config = {
      scenarioname: "istiklal_treni_banner",
      analytics: "istiklal_treni_banner",
      controlgroup: 0,
      mobile: "https://cdn.8digits.com/log/r/96269a8f-52e7-438f-8850-465871e91cb6.jpeg",
      desktop: "https://cdn.8digits.com/log/r/f06844e6-4720-4d08-9158-471a736ed68b.jpeg"
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
          if (window.innerWidth <= 420) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Mobile")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Mobile", "on");
            }
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Tablet")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Tablet", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
            }
          }
        } else {
          if (window.innerWidth <= 420) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
          } else {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
          }
        }
      },
      start: function () {
        const img = window.innerWidth <= 575 ? config.mobile : config.desktop;
        let cloneHtml = document.querySelector(".m-MT15 .row").outerHTML;
        cloneHtml += document.querySelector(".m-MT15 .tourdetail-installment-partial").outerHTML;
        cloneHtml += `
          <div class="row smpl_${config.scenarioname} mt-3">
            <img src="${img}">
          </div>
          `
        jQuery(".m-MT15").html("");
        jQuery(".m-MT15").html(cloneHtml)
        if (window.innerWidth <= 575) {
          let css = `<style>
            .smpl_${config.scenarioname}{
              margin-top: 10px !important;
            }
            </style>`;
          jQuery("head").append(css);
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
  let _ed_istiklal_treni_banner = new EightDigits.sf();
  _ed_istiklal_treni_banner.istiklal_treni_banner();
})();
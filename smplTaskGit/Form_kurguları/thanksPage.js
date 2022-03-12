
(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Form_Redesign_Lead_test")) {
    return false;
  }
  EightDigits.sf.prototype.Form_Redesign_Lead_test = function () {
    var config = {
      scenarioname: "Form_Redesign_Lead_test",
      analytics: "Form_Redesign_Lead_test",
      controlgroup: 0,
    };

    var main = {
      factory: function () {
        return true;
      },
    };

    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
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
        }
      },
      start: function () {
        if (jQuery(".card-text").text().trim().indexOf("Teşekkür") > -1) {

          if (localStorage.getItem("smpl_log")) {
            let dataObj = JSON.parse(localStorage.getItem("smpl_log"))
            EightDigits.setAttributes({
              name: dataObj.name,
              surname: dataObj.surname,
              email: dataObj.email,
              phoneNumber: dataObj.phoneNumber,
              textArea: dataObj.textArea,
              kvkk: dataObj.kvkk,
              smsCheck: dataObj.smsCheck,
              phoneCheck: dataObj.phoneCheck,
              emailCheck: dataObj.emailCheck,
              device: dataObj.device
            });
            setTimeout(() => {
              EightDigits.event({
                key: "Lead_Redesign_form",
                noPath: "true",
              });
            }, 10);
            main.factory.fireEvent("submit_success", true)
          }
        }
      },
      control: function () {
        var IExplorerAgent = !!document.documentMode;
        if (IExplorerAgent === true) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
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
  var _ed_Form_Redesign_Lead_test = new EightDigits.sf();
  _ed_Form_Redesign_Lead_test.Form_Redesign_Lead_test();
})();
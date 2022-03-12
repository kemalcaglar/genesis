(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Gen_Badge_ProductM")) {
      return false;
    }
    EightDigits.sf.prototype.Gen_Badge_ProductM = function () {
      var config = {
        scenarioname: "Gen_Badge_ProductM",
        analytics: "Gen_Badge_ProductM",
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
            config.controlgroup > 50
              ? config.controlgroup
              : 100 - config.controlgroup;
          if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
            randomVal = Math.floor(Math.random() * 10000 + 1);
            EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
          } else {
            randomVal = parseInt(
              EightDigits.utils.getCookie("_ed_" + config.scenarioname)
            );
          }
          if (randomVal <= 100 * randomControlRatio) {
            return true;
          } else {
            return false;
          }
        },
        start: function () {
          var itemArray = [
            "MKT5127",
            "MKT5128",
            "MKT5129",
            "FTW4049",
            "FTW6068",
            "FTW6071",
            "FTW6073",
          ];
          var html = `<img class='smpl-cift-badge-product' src="https://cdn.8digits.com/log/r/1258f8ef-4fc9-465c-8afb-b0a44747d15e.png" style='position: absolute;bottom: 0;padding: 2px;z-index: 99999;left: 0;'>`;
          jQuery(".product-name span:first").map((i, product) => {
            if (itemArray.find((x) => x === jQuery(product).text().split(" ")[0])) {
              jQuery("#image-0").after(html);
              EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
            }
          });
        },
        control: function () {},
        init: function () {
          if (main.factory.prototype.control() == false) {
            return false;
          }
          var _exec = main.factory.prototype.random();
          if (!_exec) {
            if (
              !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
            ) {
              EightDigits.analytics.sendEvent(config.analytics, "NotShown");
              EightDigits.utils.setCookie(
                "ed-" + config.analytics + "-notshown",
                "on"
              );
            }
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
    var _ed_Gen_Badge_ProductM = new EightDigits.sf();
    _ed_Gen_Badge_ProductM.Gen_Badge_ProductM();
  })();
  
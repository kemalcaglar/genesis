(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Yaz_Katalogu_Header")) {
    return false
  }
  EightDigits.sf.prototype.Yaz_Katalogu_Header = function () {

    var config = {
      scenarioname: "Yaz_Katalogu_Header",
      analytics: "Yaz_Katalogu_Header",
      controlgroup: 0
    };

    var main = {
      "factory": function () {
        return true;
      }
    };

    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
          EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      start: function () {
        let css = `
            <style>
            #ed-SummerCatalogue {
              margin-right: 0;
              padding-right: 0;
            }
            .ed-summerCatalogue-href {
              position: absolute;
              top: 0;
              height: 38px;
              width: 45px;
              cursor: pointer;
              display: flex;
              justify-content: center;
              text-align: center;
              align-items: center;
              flex-direction: row;
              flex-wrap: wrap;
            }
            .ed-summerCatalogue-main i {
              font-size: 25px;
              color: #e5252d;
            }
            .ed-summerCatalogue-text {
              font-size: 10px;
              color: #6e6e6e;
              font-weight: normal;
              display: flex;
              margin-top: -1px;
              position: relative;
              line-height: 1.4000000000000001em;
            }
            </style>
            `;
        let html = `
            <li id="ed-SummerCatalogue" class="ed-summerCatalogue-main">
              <a class="ed-summerCatalogue-href" href="https://www.setur.com.tr/brosurler">
                <i class="fas fa-book-open"></i>
                <span class="ed-summerCatalogue-text" style="font-size: 10px; color: #6e6e6e; ">Kataloglar</span>
              </a>
            </li>
            `;
        jQuery("head").append(css);
        if (jQuery(".Setur_Notification_Yilbasi").length > 0) {
          appendEl = ".Setur_Notification_Yilbasi"
        } else if (!jQuery(".top-user-area .login-button").length > 0) {
          appendEl = ".top-user-area-list .js-mobile-userCheck.mobile-userCheck"
        }
        else {
          appendEl = ".top-user-area .login-button"
        }
        jQuery(appendEl).before(html);
        EightDigits.analytics.sendEvent(config.analytics, "Shown");
        if (!jQuery(".top-user-area .login-button").length > 0) {
          jQuery(".top-user-area-list").css({ "width": "200px" })
          jQuery(".ed-summerCatalogue-main").css({ "width": "100px" })
          jQuery(".Setur_Notification_Yilbasi").css({ "width": "125px" })
          jQuery(".ed-summerCatalogue-main").css({ "margin-right": "20px" })
          jQuery(".ed-summerCatalogue-text").css({ "margin-top": "9px" })
          jQuery(".ed-summerCatalogue-main i").css({ "font-size": "26px" })
        }
        jQuery('.ed-summerCatalogue-href').click(function () {
          EightDigits.analytics.sendEvent(config.analytics, "Click");
        })
      },
      control: function () {
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          EightDigits.analytics.sendEvent(config.analytics, "NotShown");
          return false;
        }
        main.factory.prototype.start();
      }
    };

    boot = function () {
      return main.factory.prototype.init();
    };

    boot();

  };
  var _ed_Yaz_Katalogu_Header = new EightDigits.sf();
  _ed_Yaz_Katalogu_Header.Yaz_Katalogu_Header();
})();

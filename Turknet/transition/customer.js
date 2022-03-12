(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("customerControl")) {
    return false
  }
  EightDigits.sf.prototype.customerControl = function () {

    var config = {
      scenarioname: "customerControl",
      analytics: "customerControl",
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
        document.getElementsByClassName('Header-inner Header-inner--top')[1].getElementsByClassName('Header-nav-item')[3].onclick = function (e) {
          EightDigits.utils.setCookie('ed-customer-login', 'on', 60 * 24 * 31 * 12);
          EightDigits.analytics.sendEvent(config.analytics, "IsCustomer");
        }

        document.getElementsByClassName('Header-inner Header-inner--top')[1].getElementsByClassName('Header-nav-item')[4].onclick = function (e) {
          EightDigits.utils.setCookie('ed-customer-login', 'on', 60 * 24 * 31 * 12);
          EightDigits.analytics.sendEvent(config.analytics, "IsCustomer");
        }

        document.getElementsByClassName('Header-inner Header-inner--top')[1].getElementsByClassName('Header-nav-item')[5].onclick = function (e) {
          EightDigits.utils.setCookie('ed-customer-login', 'on', 60 * 24 * 31 * 12);
          EightDigits.analytics.sendEvent(config.analytics, "IsCustomer");
        }

        if (window.location.href.indexOf('online-islemler') > -1 || window.location.href.indexOf('destek') > -1) {
          EightDigits.utils.setCookie('ed-customer-login', 'on', 60 * 24 * 31 * 12);
        }

        if (window.location.href.indexOf('kotasiz-vdsl-hizinda-internet') > -1) {
          EightDigits.utils.setCookie('ed-hiz-sorgula-visited', 'on', 60 * 24 * 31 * 12);
        }
      },
      control: function () {

      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {

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
  var _ed_customerControl = new EightDigits.sf();
  _ed_customerControl.customerControl();
})();

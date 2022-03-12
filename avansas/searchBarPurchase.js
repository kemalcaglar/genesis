(function () {
  EightDigits.sf.prototype.SearchBar_Purchase_Controller = function () {

    var config = {
      scenarioname: "SearchBar_Purchase_Controller",
      analytics: "SearchBar_Purchase_Controller",
      controlgroup: 0
    };

    var main = {
      "factory": function () {
        return true;
      }
    };

    main.factory.prototype = {
      random: function () {
        EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal, -1);
        var randomVal = 0;
        var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (localStorage.getItem('_ed_' + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
          localStorage.setItem('_ed_' + config.scenarioname, randomVal)
        } else {
          randomVal = parseInt(localStorage.getItem('_ed_' + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      start: function () {
        EightDigits.analytics.sendEvent(config.analytics, "Shown");
        var ed_products = EightDigits.utils.getCookie("ed_search_bar_click");
        ed_products = JSON.parse(ed_products)
        var cart_products = dataLayer[2].purchaseInfo.product_id
        for (var i = 0; i < ed_products.length; i++) {
          for (var j = 0; j < cart_products.length; j++) {
            if (ed_products[i] === cart_products[j]) {
              EightDigits.analytics.sendEvent(config.analytics, "Purchase_" + dataLayer[2].purchaseInfo.product_name[j]);
            }
          }
        }
        EightDigits.console.log(ed_products.length)
        EightDigits.console.log(cart_products.length)
      },
      control: function () {
        if (window.location.pathname.indexOf("/uk/") > -1 || window.location.pathname === "/uk") {
          return false;
        }
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
  var _ed_SearchBar_Purchase_Controller = new EightDigits.sf();
  _ed_SearchBar_Purchase_Controller.SearchBar_Purchase_Controller();
})();

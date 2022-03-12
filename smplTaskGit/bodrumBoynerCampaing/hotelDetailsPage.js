(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("visitedHotels")) {
    return false;
  }
  EightDigits.sf.prototype.visitedHotels = function () {
    var config = {
      scenarioname: "visitedHotels",
      analytics: "visitedHotels",
      controlgroup: 10,
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

      start: function () {
        /* if (jQuery(".booking-item-details").length > 0) { */
        if (jQuery(".hoteldetail-hotel-address").text().trim().indexOf("Bodrum") > -1) {
          let hotelName = jQuery(".hotel-detail-name").text().trim()
          if (!localStorage.getItem("ed_visitedHotels")) {
            let hotels = []
            hotels.push(hotelName)
            localStorage.setItem("ed_visitedHotels", JSON.stringify(hotels))
          } else {
            hotels = JSON.parse(localStorage.getItem("ed_visitedHotels"))
            if (!hotels.includes(hotelName)) {
              hotels.push(hotelName)
              localStorage.setItem("ed_visitedHotels", JSON.stringify(hotels))
            }
          }
        }
        /* } */
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
  var _ed_visitedHotels = new EightDigits.sf();
  _ed_visitedHotels.visitedHotels();
})();
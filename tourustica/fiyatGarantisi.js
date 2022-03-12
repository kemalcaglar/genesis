(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Fiyat_Garantisi_Badge")) {
    return false
  }
  EightDigits.sf.prototype.Fiyat_Garantisi_Badge = function () {
    var config = {
      scenarioname: "Fiyat_Garantisi_Badge",
      scenarioclass: ".Fiyat_Garantisi_Badge",
      analytics: "Fiyat_Garantisi_Badge",
      starIcon: "https://cdn.8digits.com/log/r/5d4b80ba-b66c-488d-9a90-82330a977ca7.png",
      controlgroup: 0,
      debounce: function (func, timeout) {
        let timer;
        return function (...args) {
          const context = this;
          clearTimeout(timer);
          timer = setTimeout(() => func.apply(context, args), timeout);
        };
      },
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
        var hotelID = [
          "1149",
          "1117",
          "1031",
          "640",
          "1677",
          "2963",
          "2965",
          "1421",
          "2938",
          "647",
          "2939",
          "1283",
          "2983",
          "778",
          "641",
          "1188",
          "1292",
          "721",
          "701",
          "650",
          "750",
          "1304",
          "3476",
          "814",
          "811",
          "926",
          "1068",
          "3115",
          "1163",
          "1848",
          "1107",
          "3139",
          "1663",
          "725",
          "1650",
          "3040",
          "1890",
          "3245"
        ]
        var html =
          `<div class="`+config.scenarioname+`" style="
          justify-content: center;
          text-align: center;
          align-items: center;
          display: flex;
          width: 100%;
          top: 5px;
          position: relative;
          ">
          <img style="
            width: 19px;
            height: auto;
            " src="https://cdn.8digits.com/log/r/5d4b80ba-b66c-488d-9a90-82330a977ca7.png">
          <span style="
            margin-left: 5px;
            font-size: 12px;
            color: #14273d;
            font-weight: 700;
            ">En İyi Fiyat Garantisi</span>
        </div>`;

        const addDiscountBanner = config.debounce(function () {
        jQuery(".hotel-cell.with-row.hotel").map(function () {
          if (hotelID.find(x => x === jQuery(this).attr("data-hotel-id"))) {
            if (window.innerWidth > 768) {
              if(jQuery(this).find(config.scenarioclass).length < 1){
              jQuery(this).find(".discount-box.hidden-xs").after(html);
            }
            } else {
              if(jQuery(this).find(config.scenarioclass).length < 1){
              jQuery(this).find(".hotel-list-discount").prepend(html);
            }
              jQuery(config.scenarioclass).css({
                "top": "",
                "width": "",
                "justify-content": "",
              })
            }
          }
        })
      },200);
      document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.classList.value !== config.scenarioname) {
          addDiscountBanner();
        }
      }, false);
      addDiscountBanner();
      },
      control: function () {
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
            EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
          }
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
  var _ed_Fiyat_Garantisi_Badge = new EightDigits.sf();
  _ed_Fiyat_Garantisi_Badge.Fiyat_Garantisi_Badge();
})();

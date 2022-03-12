(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Koc_Ailem_Iade")) {
    return false
  }
  EightDigits.sf.prototype.Koc_Ailem_Iade = function () {
    var config = {
      scenarioname: "Koc_Ailem_Iade",
      analytics: "Koc_Ailem_Iade",
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
        var data = {
          hotelName: "",
          roomCampaing: "",
          checkBox: "",
        };
        /* Data array'de tutulacak her yeri otelde array'a object eklenecek.
        yeni bir ürün eklendiğinde datamızda veri var mı yok mu kontrol edip ona göre ekleme yapmamız gerekiyor. */
        /* json datanın her seferinde sıfırlanmamasını sağlamamız gerekiyor.Checkbox kısmında kutu işaretlendiğinde hangi object'e eklenmesi
        gerektiğini kontrol etmemiz gerekiyor. */
        /* otel ismini tutarak kontrol etme aynı ürün farklı tarihlerde eklenebilir. */
        jQuery(".price-button").click(function () {
          var roomCampaing = jQuery(this).closest(".room-price-item-row").find(".price-name span:eq(0)").text().trim();
          var hotelName = jQuery(".hotel-detail-name").text().trim();
          var jsonData = JSON.parse(localStorage.getItem("product"));
          if (jsonData === null) {
            var basketArray = [];
            data = {
              hotelName: hotelName,
              roomCampaing: roomCampaing,
              checkBox: "",
            };
            basketArray.push(data);
            localStorage.setItem("product", JSON.stringify(basketArray));
          } else {
            var basketArray = JSON.parse(localStorage.getItem("product"));
            data = {
              hotelName: hotelName,
              roomCampaing: roomCampaing,
              checkBox: "",
            };
            basketArray.push(data);
            localStorage.setItem("product", JSON.stringify(basketArray));
          }
        })
        jQuery("#collapse-0 .iCheck-helper, #collapse-0 label").click(function () {
          var checkBox = jQuery("#totalEsPrice").attr("value");
          if (checkBox > 0) {
            checkBox = true;
          } else {
            checkBox = false;
          }
          var jsonData = JSON.parse(localStorage.getItem("product"));
          var basketArray = [];
          jQuery(jsonData).each(function (index, item) {
            var hotelTitle = jQuery("#sidebar h5").text().trim();
            if (hotelTitle == item.hotelName) {
              if (item.checkBox == "") {
                item.checkBox = checkBox;
              }
            }
            basketArray.push(item);
          })
          localStorage.setItem("product", JSON.stringify(basketArray));
        })
        if (window.location.pathname == "/Sepet") {
          jQuery(".booking-list.card-list li").each(function () {
            var this_ = this
            var productName = jQuery(this).find(".basket-flight-header h4").text().trim();
            var jsonData = JSON.parse(localStorage.getItem("product"));
            jQuery(jsonData).each(function (index, item) {
              if (item.hotelName == productName) {
                if (item.roomCampaing == "KoçAilem Kampanyası Şubat" && item.checkBox) {
                  var html = `<span style="font-weight:900; display:flex; margin-top:10px; margin-left:5px;">72 saate kadar iade garantisinden ücretsiz yararlandınız.</span>`
                  jQuery(this_).find(".booking-item .promotion-list").after(html);
                  /* if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                    EightDigits.analytics.sendEvent(config.analytics, 'shown');
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                  } */
                }
              }
            })
          })
        }
      },
      control: function () {},
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
  var _ed_Koc_Ailem_Iade = new EightDigits.sf();
  _ed_Koc_Ailem_Iade.Koc_Ailem_Iade();
})();

var jsonData = JSON.parse(localStorage.getItem("product"));
jsonData
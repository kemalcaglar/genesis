(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Karanlikta_Parlar_Product_Mobile")) {
      return false;
    }
    EightDigits.sf.prototype.Karanlikta_Parlar_Product_Mobile = function () {
      var config = {
        scenarioname: "Karanlikta_Parlar_Product_Mobile",
        analytics: "Karanlikta_Parlar_Product_Mobile",
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
            'WWRC1034',
          ];
          var html ='<a class="ed-parlar-badge-container"  style="color: black; text-decoration: none; cursor:pointer;bottom: 35px;position:absolute;width:100%;">\
          <div class="ed-mainparlarBadge" style="position:absolute; width:100%;opacity: 0.8;">\
          <div class="ed-parlar-badge" style=" width: 100%; height: 27px; background-color: #1A1915; display: block; z-index: 9; "><p style=" text-align: center; font-size: 14px; line-height: 27px; color: #fff; ">KARANLIKTA PARLAR</p></div>\
          </div>\
</a>'
          if(itemArray.find(x=>x===dataLayer[2].product.sku)){
            if(jQuery(".amlabel-table.middle-left.label30").length > 0){
              jQuery(".amlabel-table.middle-left.label30").css({"bottom":"45px"})
              jQuery('.product-image-gallery').append(html);
            }else{
              jQuery('.product-image-gallery').append(html);
            }
            EightDigits.analytics.sendEvent(config.analytics, 'shown_badge');
          }
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
    var _ed_Karanlikta_Parlar_Product_Mobile = new EightDigits.sf();
    _ed_Karanlikta_Parlar_Product_Mobile.Karanlikta_Parlar_Product_Mobile();
  })();
  
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Canta_Hediye_Listeleme")) {
      return false
    }
    EightDigits.sf.prototype.Canta_Hediye_Listeleme = function () {
      var config = {
        scenarioname: "Canta_Hediye_Listeleme",
        analytics: "Canta_Hediye_Listeleme",
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
            var itemArray = [
              "MKC1035AN-710",
              "MKC1035AN-791",
              "MKC1118AN-040",
              "MKC1177AN-710",
              "MKC1206AN-710",
              "MKC1206AN-791",
              "MKC1208AN-040",
              "MKC1208AN-710",
              "MKC1242AN-040",
              "MKC1244AN-040",
              "MKC1324AH-040",
              "MKC1336AN-710",
              "MKC1336AN-791",
              "MKC1379AN-710",
              "MKC1404AN-040",
              "MKC1405AN-791",
              "MKC1409AA-040",
              "MKC1409AA-710",
              "MKC1409AA-791",
              "MKC1418AN-040",
              "MKC1458AN-040",
              "MKC1534AN-931",
              "MKC1537AN-931",
              "MKC1033AN-040",
              "MKC1033AN-710",
              "MKC1033AN-791",
              "MKC1108AN-040",
              "MKC1108AN-710",
              "MKC1108AN-791",
              "MKC1118AN-040",
              "MKC1118AN-710",
              "MKC1118AN-791",
              "MKC1206AN-791",
              "MKC1208AN-791",
              "MKC1246AN-040",
              "MKC1246AN-791",
              "MKC1379AN-040",
              "MKC1404AN-040",
              "MKC1407AN-040",
            ]
          if(window.innerWidth>768){
            var html=`<div class='smpl-guess-badge' style='background-color: #1A1915;opacity: 0.85;letter-spacing: 1px;text-align: center;color: #FFFFFF;
            position: absolute;bottom: 0;left:0px;width: 100%;padding: 2px;'>ÇANTA HEDİYE</div>
            `;
            jQuery('.product-name span').map((i,product)=>{
              if(itemArray.find(x=>x===jQuery(product).text().trim().split(" ")[0])){
                if(window.innerWidth>1200){
                  jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").css("top","-64px")
                }
                else{
                  jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").css("top","-91px")
                }
                jQuery(product).parent().parent().parent().find(".product-image").append(html)
                jQuery('.smpl-guess-badge').css("width",jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").width()+'px')
              }
            })
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'shown-desktopBadge');
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            }
          }
          else{
            var html="<div style=' background-color: #1A1915;opacity: 0.85;letter-spacing: 1px;text-align: center;color: #FFFFFF;position: absolute;bottom: 0;width: 100%;font-size:12px;'>ÇANTA HEDİYE</div>";
            jQuery('.product-name a').map((i,product)=>{
              if( itemArray.find(x=>x===jQuery(product).text().trim().split(" ")[0])){
                jQuery(product).parent().parent().parent().find(".product-image").append(html)
              }
            })
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'shown-mobilBadge');
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            }
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
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'notShown-badge');
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
    var _ed_Canta_Hediye_Listeleme = new EightDigits.sf();
    _ed_Canta_Hediye_Listeleme.Canta_Hediye_Listeleme();
  })();
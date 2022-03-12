(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Gen_Badge_Category")) {
      return false
    }
    EightDigits.sf.prototype.Gen_Badge_Category = function () {
      var config = {
        scenarioname: "Gen_Badge_Category",
        analytics: "Gen_Badge_Category",
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
            var itemArray = ['53564',
            ]
          if(window.innerWidth>768){
            var html=`<div class='smpl-cift-badge' style='opacity: 1;letter-spacing: 1px;text-align: center;color: #000000;
            position: absolute;bottom: 10px;left:7px;padding: 2px; display:flex; font-weight:bold;'>GEN 2</div>
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
                jQuery('.smpl-cift-badge').css("width",jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").width()+'px')
              }
            })
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'shown-desktopBadge');
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            }
          }
          else{
            var html="<div style='opacity: 1;text-align: center;color: #000000;\
            position: absolute;bottom: 0;left:7px;padding: 2px; display:flex; font-weight:bold; font-size:12px;'>GEN 5E</div>";
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
    var _ed_Gen_Badge_Category = new EightDigits.sf();
    _ed_Gen_Badge_Category.Gen_Badge_Category();
  })();
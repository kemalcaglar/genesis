(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Armani_Badge_Category")) {
      return false
    }
    EightDigits.sf.prototype.Armani_Badge_Category = function () {
      var config = {
        scenarioname: "Armani_Badge_Category",
        analytics: "Armani_Badge_Category",
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
                "AR11350",
                "AR11150",
                "AR60024",
                "AR11340",
                "AR11339",
                "AR11338",
                "AR11337",
                "AR11349",
                "AR11347",
                "AR11342",
                "AR11341",
                "AR60028",
                "AR11321",
                "AR11288",
                "AR80037",
                "AR11329",
                "AR11328",
                "AR11327",
                "AR11326",
                "AR11332",
                "AR11325",
                "AR11324",
                "AR11320",
                "AR11319",
                "AR11317",
                "AR11312",
                "AR9042",
                "AR1803",
                "AR11330",
                "AR11314",
                "AR11313",
                "AR11293",
                "AR11158",
                "AR1961",
                "AR1917",
                "AR11271",
                "AR11185",
                "AR70001",
                "AR6093",
                "AR11306",
                "AR11295",
                "AR11289",
                "AR11287",
                "AR11012",
                "AR80039",
                "AR80038",
                "AR11286",
                "AR60018",
                "AR11121",
                "AR60013",
                "AR60012",
                "AR60010",
                "AR11270",
                "AR11268",
                "AR11267",
                "AR11265",
                "AR11264",
                "AR80032",
                "AR60011",
                "AR11276",
                "AR11275",
                "AR11272",
                "AR11269",
                "AR11252",
                "AR11186",
                "AR11243",
                "AR11242",
                "AR11241",
                "AR11245",
                "AR11244",
                "AR11239",
                "AR11238",
                "AR11237",
                "AR11180",
                "AR11228",
                "AR11227",
                "AR11226",
                "AR11223",
                "AR11216",
                "AR11202",
                "AR11188",
                "AR11184",
                "AR11182",
                "AR11181",
                "AR11175",
                "AR11215",
                "AR80026",
                "AR11210",
                "AR11208",
                "AR11204",
                "AR11201",
                "AR11196",
                "AR11163",
                "AR11169",
                "AR11168",
                "AR11143",
                "AR11141",
                "AR11062",
                "AR11165",
                "AR11164",
                "AR11161",
                "AR11153",
                "AR2507",
                "AR1853",
                "AR1812",
                "AR11013",
                "AR11132",
                "AR11129",
                "AR11128",
                "AR11123",
                "AR11118",
                "AR1692",
                "AR11100",
                "AR11085",
                "AR60007",
                "AR60006",
                "AR1926",
                "AR11106",
                "AR11105",
                "AR11104",
                "AR1732",
                "AR80011",
                "AR11097",
                "AR11067",
                "AR11060",
                "AR11059",
                "AR11069",
                "AR11024",
                "AR11053",
                "AR11051",
                "AR11047",
                "AR11046",
                "AR1509",
                "AR11023",
                "AR11032",
                "AR0399",
                "AR1968",
                "AR1811",
                "AR1648",
                "AR0389",
                "AR2502",
                "AR1908",
                "AR2510",
                "AR1990",
                "AR1979",
                "AR2500",
                "AR1989",
                "AR1895",
                "AR1894",
                "AR1919",
                "AR2472",
                "AR6068",
                "AR1807",
                "AR1970",
                "AR1808",
                "AR1828",
                "AR1840",
                "AR2494",
                "AR1910",
                "AR1737",
                "AR2473",
                "AR1846",
                "AR2477",
                "AR1785",
                "AR1682",
                "AR5995",
                "AR2460",
                "AR2447",
                "AR2411",
                "AR1683",
                "AR2461",
                "AR2448",
                "AR2434",
                "AR1451",
                "ART5022",
            ]
          if(window.innerWidth>768){
            var html=`<div class='smpl-cift-badge' style='background-color: #1A1915;opacity: 0.85;letter-spacing: 1px;text-align: center;color: #FFFFFF;
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
                jQuery('.smpl-cift-badge').css("width",jQuery(product).parent().parent().find(".mnm-basket-discount-wrapper").width()+'px')
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
    var _ed_Armani_Badge_Category = new EightDigits.sf();
    _ed_Armani_Badge_Category.Armani_Badge_Category();
  })();

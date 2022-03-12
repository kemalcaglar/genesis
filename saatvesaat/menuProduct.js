(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Menu_Product_Desktop")) {
    return false
  }
  EightDigits.sf.prototype.Menu_Product_Desktop = function () {
    var config = {
      scenarioname: "Menu_Product_Desktop",
      analytics: "Menu_Product_Desktop",
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
        let productList = {
          1: {
            href: "https://www.saatvesaat.com.tr/akilli-saat/wwc2001-02-akilli-saat?_sgm_campaign=scn_807a69549e24000&_sgm_source=78057&_sgm_action=click",
            src: "//foto-saatvesaat.mncdn.com/mnresize/316/316/media/catalog/product/w/w/wwc2001-02_1_2.jpg",
            brand: "Wesse Connect",
            name: "WWC2001-02 Akıllı Saat",
            price: "480,00 TL",
          },
          2: {
            href: "https://www.saatvesaat.com.tr/akilli-saat/wwc2001-07-akilli-saat",
            src: "https://cdn.saatvesaat.com.tr/mnresize/300/300/media/catalog/product/w/w/wwc2001-07_1.jpg",
            brand: "Wesse Connect",
            name: "WWC2001-07 Akıllı Saat",
            price: "480,00 TL",
          },
          3: {
            href: "https://www.saatvesaat.com.tr/saat/erkek/diesel/DZ1830/PD/",
            src: "https://cdn.saatvesaat.com.tr/mnresize/300/300/media/catalog/product/d/z/dz1830_1.jpg",
            brand: "Diesel",
            name: "DZ1830 Erkek Kol Saati",
            price: "903,00 TL",
          }
        };
        let css = `
        <style>
        .ed-product-main {
          max-width: 180px;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin-right: 20px;
        }
        .ed-img {
          object-fit: contain;
          position: relative;
          width: auto;
          height: auto;
          max-width: 180px;
        }
        .ed-product-info-main {
          display: flex;
          flex-wrap: wrap;
        }
        .ed-product-info {
          margin-top: 8px;
        }
        .ed-product-brand {
          display: block;
          color: #000 !important;
          font-size: 13px;
          font-weight: bold;
          white-space: nowrap;
        }
        .ed-product-price-main {
        }
        .ed-product-price {
          display: flex;
          flex-wrap: wrap;
        }
        .ed-img-main {
          border: 1px solid #ddd;
        }
        .ed-product-name {
          margin-top: 5px;
          display: flex;
          color: #888 !important;
        }
        .ed-product-new-price {
          display: flex;
          color: #888 !important;
        }
        .ed-product-menu-href {
          z-index: 999999 !important;
        }
        .ed-menu-product-hover {
          width: auto !important;
          z-index: 999999 !important;
          display: block;
        }
        @media screen and (max-width: 1304px) {
          .ed-product-main {
            max-width: 122px;
          }
          .ed-img {
            max-width: 122px;
          }
        }
        </style>
        `
        let html = `
        <li class="ed-menu-product-hover">
          <div class="ed-product-menu">
            <ul style="display: flex;">
            `
        for (let arr in productList) {
          html += `
          <a class="ed-product-menu-href" href="`+ productList[arr].href + `">  
            <li class="ed-product-main">
                <section class="ed-img-main">
                  <div class="ed-img-product">
                    <img class="ed-img" src="`+ productList[arr].src + `">
                  </div>
                </section>
                <section class="ed-product-info-main">
                  <div class="ed-product-info">
                    <span class="ed-product-brand">`+ productList[arr].brand + `</span>
                    <span class="ed-product-name">`+ productList[arr].name + `</span>
                  </div>
                </section>
                <section class="ed-product-price-main">
                  <div class="ed-product-price">
                    <span class="ed-product-new-price">`+ productList[arr].price + `</span>
                  </div>
                </section>
              </li>
          </a>`
        }
        html += `
        </ul >
          </div >
            </li >
          `
        jQuery("head").append(css);
        jQuery(".menu .menu-dropdown-icon").each(function () {
          if (jQuery(this).find("a:first").text().trim() == "KADIN SAAT" || jQuery(this).find("a:first").text().trim() == "ERKEK SAAT") {
            jQuery(this).find(".mnm-menu-box").eq(0).append(html);
            jQuery(this).find(".mnm-menu-box li").find(".brand-list").mouseenter(function () {
              jQuery(".ed-menu-product-hover").css({ "display": "none" })
            })
            jQuery(this).find(".mnm-menu-box li").find(".brand-list").mouseleave(function () {
              jQuery(".ed-menu-product-hover").css({ "display": "block" })
            })
          }
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
  var _ed_Menu_Product_Desktop = new EightDigits.sf();
  _ed_Menu_Product_Desktop.Menu_Product_Desktop();
})();
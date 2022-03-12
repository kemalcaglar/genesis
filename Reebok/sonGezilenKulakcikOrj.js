/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
    initialize({ type: TYPE_EMBEDED }, (config) => {
      onChangeConfig((newConfig) => {
        console.log('new Config', newConfig);
      });
  
      toggleShow((status) => {
        if (!options.controlVariation) {
          if (status) {
            // window.EightDigits.utils.loadJS('https://cdn.hellosmpl.com/custom/scenarios/dc770cba-940c-4ccd-a691-2749fe5d81e7.js');
  
            var config = {
              scenarioname: "smplLastLook",
              analytics: "smplLastLook",
              widgetTitle: "SON BAKTIKLARIN",
              triggerText: "SON BAKTIKLARIN",
              scenarioClass: '.scenario-' + scenarioId + '-' + variationId,
              buttonText: "Ürüne Git",
              productLimit: 10,
              productMapper: function () {
                // product id hepsinde farklı bir key olmalı ürünler bu keye göre ayrılıyor
                return {
                  id: jQuery(".image-list .slide-item:eq(0) img", ".product").attr("src"),
                  image: jQuery(".image-list .slide-item:eq(0) img", ".product").attr(
                    "src"
                  ),
                  title: jQuery(".product-details h1:eq(0)", ".product").text().trim(),
                  category: jQuery('.product-details [class*="subtitle"]', ".product")
                    .text()
                    .trim(),
                  url: window.location.pathname,
                  price: jQuery(".mobile-product-information .gl-price").html().trim(),
                };
              },
            };
  
            var main = {
              fireEvent: function (eventType) {
                setLevel(LEVEL_JOIN, eventType);
              },
              start: function () {
                var productList = JSON.parse(
                  localStorage.getItem(config.scenarioname) || "[]"
                );
                productListWidget({
                  productList: productList,
                  title: config.widgetTitle,
                  triggerText: config.triggerText,
                });
              },
              control: function () {
                var productList = JSON.parse(
                  localStorage.getItem(config.scenarioname) || "[]"
                );
                var showRule = productList.length > 2;
                var dataRule = !!window.productId;
  
                // ürün datası burada güncellenir.
                if (dataRule) {
                  var product = config.productMapper();
                  productList.find(
                    (item, index) => item.id === product.id && productList.splice(index, 1)
                  );
                  productList.unshift(product);
                  if (productList.length > config.productLimit) productList.pop();
                  localStorage.setItem(config.scenarioname, JSON.stringify(productList));
                }
                return showRule;
              },
              init: function () {
                if (main.control() == false) {
                  return false;
                }
                main.start();
              },
            };
  
            main.init();
  
            function productListWidget(options) {
              var widgetContainer =
                '<div class="scenario-' + scenarioId + '-' + variationId + '">\
                <div class="smpl-trigger">\
        <div class="trigger"></div>\
        </div>\
        <div class="listTitle">SON BAKTIKLARIN</div>\
        <div class="products"> </div>\
      </div>';
              var itemContainerRaw =
                '<div class="productItem">\
        <div class="productImage">\
          <a href="#url"><img src="#image"></a>\
        </div>\
        <div class="productDetail">\
          <a href="#url" class="productTitle">#title</a>\
          <div class="productCategory">#category</div>\
          <div class="productPrice"><div class="gl-price">#price</div></div>\
          <div class="productButton mt-2 gl-cta gl-cta--primary btn-bag w-100 justify-content-between"><a href="#url">'+ config.buttonText + '</a></div>\
        </div>\
      </div>';
              var styleString =
                "html.smplModal{overflow:hidden}\
      html.smplModal body{transition:1s all;filter:blur(3px)}\
      html.smplModal "+ config.scenarioClass + "{right:0}\
      html.smplModal .trigger{opacity:0}\
      "+ config.scenarioClass + "{\
        position:fixed;top:0;right:-404px;\
        width:400px;height:100%;background:#fff;z-index:11111111111;\
        box-shadow:0 0 4px 2px #00000040;transition:.5s all;\
        padding-bottom: 20px;}.listTitle{text-align:center;\
        font-size:19px;padding:13px;background:#f3f3f3}\
        .products{height:100%;overflow:auto}\
        .productItem{display:flex;margin:0 20px;\
        padding:20px 0;border-top:1px solid #f3f3f3}\
        .productItem:first-child{border-top:none}\
        .productImage{flex: 0 0 35%;}\
        .productDetail{padding:0 10px;flex: 1 0 65%;display: flex;flex-direction: column;justify-content: center;}\
        .productTitle{font-weight:700;font-size: 14px;font-family: Neue Plak,Arial Narrow,Franklin Gothic Book,Arial,sans-serif;}\
        .productCategory{font-size:12px;color:#98989a;padding:6px 0}\
        .productButton{width: 90% !important;text-decoration: none;text-align: center;max-height: 30px;line-height: 30px;min-height: 30px;}\
        .productButton a{color: #fff;display: inline-block;width: 100%;font-size: 14px;font-family: Neue Plak,Arial Narrow,Franklin Gothic Book,Arial,sans-serif;font-weight: 400;}\
        .trigger{\
          transform:rotate(270deg) translateX(-50%);transform-origin:left;\
          background:#FF1515;color:#fff;font-weight:100;font-size:15px;\
          display:block;position:absolute;top:70%;left:-26px;\
          padding:18px;cursor:pointer;transition:.5s opacity;\
          box-shadow:0 0 4px 1px #0006}\
        .trigger:hover{left:-19px}";
              var productList = options.productList || [];
  
              jQuery("body").append("<style>" + styleString + "</style>");
              jQuery("html").append(widgetContainer);
  
              productList.forEach((item) => {
                var itemContainer = itemContainerRaw
                  .replace(/#image/g, item.image)
                  .replace(/#title/g, item.title)
                  .replace(/#category/g, item.category)
                  .replace(/#price/g, item.price)
                  .replace(/#url/g, item.url);
                jQuery(".products").append(itemContainer);
              });
              main.fireEvent("Shown-trigger");
  
              jQuery(".smpl-trigger").on("click", function () {
                main.fireEvent("Click-trigger");
                jQuery("html").hasClass("smplModal")
                  ? jQuery("html").removeClass("smplModal")
                  : jQuery("html").addClass("smplModal");
              });
              jQuery(".trigger").text(options.triggerText || "SON BAKTIKLARIN");
              jQuery(".trigger").text(options.title || "SON BAKTIKLARIN");
              jQuery(config.scenarioClass).on("mouseleave", function () {
                jQuery("html").removeClass("smplModal");
              });
              jQuery(".productItem a").on("click", function () {
                main.fireEvent("click-product");
              });
              jQuery(window).scrollTop() < 300
                ? jQuery(config.scenarioClass).css("display", "none")
                : jQuery(config.scenarioClass).css("display", "block");
              jQuery(window).scroll(function () {
                if (jQuery(window).scrollTop() >= 300) {
                  jQuery(config.scenarioClass).css("display", "block");
                } else {
                  jQuery(config.scenarioClass).css("display", "none");
                }
              });
            }
  
          } else {
            // replace changes
          }
        }
      });
    });
  }
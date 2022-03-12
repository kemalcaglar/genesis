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
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
          if (jQuery("#product").length > 0) {
            var lastLookProductObj = {
              name: jQuery(".product-details .p-title .p-name").text(),
              discountPrice: jQuery(".product-details .p-price .oneprice")
                .text()
                .trim()
                .split(" ")[0]
                .trim(),
              oldPrice: jQuery(".product-details .p-price .oldprice")
                .text()
                .trim()
                .split(" ")[0]
                .trim(),
              src: jQuery(".content a img").first().attr("src"),
              href: window.location.href,
              size:
                jQuery(".p-size").text() +
                jQuery(".size-name-change").text() +
                " " +
                jQuery(".size-name-change").next().text().split("/")[0].trim(),
            };
            if (JSON.parse(localStorage.getItem("smpl_lastlook_slider") === null)) {
              var productArray = [];
              productArray.unshift(lastLookProductObj);
              localStorage.setItem("smpl_lastlook_slider", JSON.stringify(productArray));
            } else {
              var productArray = JSON.parse(
                localStorage.getItem("smpl_lastlook_slider")
              );
              if (
                productArray.find((item) => item.name === lastLookProductObj.name) ===
                undefined
              ) {
                productArray.length >= 5 ? productArray.pop() : null;
                productArray.unshift(lastLookProductObj);
                localStorage.setItem(
                  "smpl_lastlook_slider",
                  JSON.stringify(productArray)
                );
              }
            }
          }
          if (window.location.pathname == "/Sepet") {
            if (localStorage.getItem("smpl_lastlook_slider") !== null) {
              var lastLookProductArray = JSON.parse(
                localStorage.getItem("smpl_lastlook_slider")
              );
              if (lastLookProductArray.length > 3) {
                var lastLookProductHTML =
                  `<div class="flexslider carousel smpl-slider-basket">
              <ul class="slides smpl-slides">`;

                lastLookProductArray.map((product, index) => {

                  lastLookProductHTML +=
                    `<li class="basket-slider-product"><a href="` + product.href + `">
                  <img src="`+ product.src + `" />
                  <div class="product-content smpl-content">
                  <h2 class="product-name" style="height: 43px;">`+ product.name + `</h2>
                  <div class="product-size"><p class="size">`+ product.size + ` </p>
                  </div>
                  <div class="product-prices"><p class="discountedprice">`+ product.discountPrice + ` TL</p>
                  </a>
                </li>`;
                });
                lastLookProductHTML += `</ul></div>`;
                if (jQuery("#showbasket span").text() > 0) {
                  if(jQuery(".col-7.scenario-68-1").length > 0){
                  jQuery(".basket-left.col-md-7").append(lastLookProductHTML);
                  }else {
                    jQuery(".b-checkout.d-flex-col.hidden-desktop").prepend(lastLookProductHTML);
                  }
                }
              }
            }
          }
          jQuery(".flexslider").flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 230,
            itemMargin: 5,
            minItems: 4,
            maxItems: 4,
          });

          jQuery(".flexslider").css({ "background": "#f2f2f2" });
          jQuery(".flex-next").css({ "overflow": "visible" });
          jQuery(".flex-prev").css({ "overflow": "visible" });
          jQuery(".smpl-content").css({ "text-align": "center" })
          jQuery(".smpl-content .product-name").css({ "font-weight": "500", "font-size": "14px", "margin-bottom": "10px", "display": "flex", "margin-top": "10px", "height": "50px", "justify-content": "center" })
          jQuery(".smpl-content .size").css({ "font-size": "11px", "color": "#9b9b9b", "line-height": "2" })
          jQuery(".smpl-content .product-size").css({ "margin-top": "-5px" })
          jQuery(".smpl-content .discountedprice").css({ "font-size": "16px", "color": "#202020", "font-weight": "500", "margin-top": "10px", "margin-bottom": "7px", "border": "1px solid #d07a0b", "padding": "5px" })
          jQuery(".smpl-content .product-prices").css({ "padding": "1px" })
          jQuery(".flex-next").text("")
          jQuery(".flex-prev").text("")

          var showCount = 0;
          jQuery(window).scroll(function () {
            var top_of_element = jQuery(".smpl-slider-basket").offset().top;
            var bottom_of_element =
              jQuery(".smpl-slider-basket").offset().top +
              jQuery(".smpl-slider-basket").outerHeight();
            var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
            var top_of_screen = jQuery(window).scrollTop();
            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
              showCount == 0 ? setLevel(LEVEL_JOIN, "shown-slider") : false;
              showCount++;
            }
          });
          jQuery(".b-checkout.d-flex-col.hidden-desktop").after(jQuery(".cnt-750plus"))
          jQuery(".cnt-750plus").eq(1).hide()
          jQuery(".basket-slider-product").click(function () {
            setLevel(LEVEL_JOIN, "click-product");
          })
        } else {
          // replace changes
        }
      }
    });
  });
}
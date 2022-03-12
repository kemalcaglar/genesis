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
          setTimeout(function () {
            var count = 6; /* kaçncı elemandan sonra ise bir sayı eksiğini yazın */
            var itemCount = jQuery(".product-area .product-list .pitem").length
            if (itemCount <= count) {
              count = itemCount - 1;
            }
            jQuery(".product-area .product-list .pitem").each(function (i, product) {
              if (i == count) {
                var newHtml = jQuery(product).html();
                newHtml = '<div class="pitem parent-pitem col-md-4 smplProductCardSealy">' + newHtml + '</div>'
                jQuery(this).before(newHtml)
              }
            })
            var element = jQuery(".smplProductCardSealy");
            var display = {
              display: "none",
            };
            var imgSrc =
              "https://cdn.hellosmpl.com/uploads/2021/03/19/2spldnbcvk94klli8rg8sde43p.jpg"; /* image */
            var linkDirection = "https://yatsan.com/d/koltuklar?m=LAZBOY"; /* link yönlendirmesi */
            var linkMessage = "La-z-Boy Koltuklarda %20 indirim" /* img alt propertiesinde yazacak mesaj */
            element.find(".item-main-photo").attr({
              alt: linkMessage,
              title: "",
              href: linkDirection,
              onclick: "",
            });
            element.find(".piteminside").css("border", "none");
            element.find(".piteminside").hover(function () {
              jQuery(this).css("border", "none");
              jQuery(this).css("background-color", "transparent");
            })
            element.find(".piteminside").css("background-color", "transparent");
            element.find(".item-main-photo img").each(function () {
              jQuery(this).attr({ src: imgSrc, alt: linkMessage, "data-original": imgSrc });
              jQuery(this).css("filter", "drop-shadow(0 0 9px #673d27)");
            })
            element.find(".item-main-photo").css("filter", "contrast(120%") /* resmi biraz daha belirgin yapmak için */
            element.find(".smpl-scenario-35-1").css(display); /* ücretsiz kargo badge */
            element.find(".product-info").css(display);
            element.find(".product-new").css(display);
            element.find("span").css(display);

            element.find(".product-sale").css("visibility", "hidden");
            element.find(".addfav").css("visibility", "hidden");
            setLevel("LEVEL_JOIN", "shown-card");
            
            element.click(function () {
              setLevel("LEVEL_JOIN", "click-card");
            });
          }, 500)

        } else {
          // replace changes
        }
      }
    });
  });
}
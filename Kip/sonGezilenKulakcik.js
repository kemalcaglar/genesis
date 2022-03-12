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
                  var scenarioClass = ".scenario-" + scenarioId + "-" + variationId;
                  if (jQuery(".ProductDetail").length == 1) {
                      var lastLookProductObj = {
                          name: jQuery(".ProductContent h1.ProductHeader").text().trim(),
                          discountPrice: jQuery(".DiscountRate").prev("span").text().trim().split("\nTL")[0],// sonuna tl eklenecek.
                          src: jQuery(".row.Colors a:first img").attr("src"),
                          href: window.location.href,
                      };
                      if (JSON.parse(localStorage.getItem("smpl_lastlook_product") === null)) {
                          var productArray = [];
                          productArray.unshift(lastLookProductObj);
                          localStorage.setItem("smpl_lastlook_product", JSON.stringify(productArray));
                      } else {
                          var productArray = JSON.parse(
                              localStorage.getItem("smpl_lastlook_product")
                          );
                          if (
                              productArray.find((item) => item.name === lastLookProductObj.name) ===
                              undefined
                          ) {
                              productArray.length >= 5 ? productArray.pop() : null;
                              productArray.unshift(lastLookProductObj);
                              localStorage.setItem(
                                  "smpl_lastlook_product",
                                  JSON.stringify(productArray)
                              );
                          }
                      }
                  }

                  if (window.location.pathname.length == 1 || jQuery(".filter-area").length > 0) {
                      if (localStorage.getItem("smpl_lastlook_product") !== null) {
                          var lastLookProductArray = JSON.parse(
                              localStorage.getItem("smpl_lastlook_product")
                          );
                          if (lastLookProductArray.length > 2) {
                              var lastLookProductHTML =
                                  `<div class="scenario-` +
                                  +scenarioId +
                                  `-` +
                                  variationId +
                                  `">
        <div class="overlay"></div>
        <div class="container">
          <div class="header">
            <span class="close">&#215;</span>
            <h2>SON GEZİLENLER </h2>
          </div>
          <div class="content " id="content_">`;

                              lastLookProductArray.map((product, index) => {

                                  lastLookProductHTML +=
                                      '<div class="product">\
            <div class="productSection">\
                <div class="productImage">\
                    <a href=' +
                                      product.href +
                                      '  title="' +
                                      product.name +
                                      '">\
                        <img src=' +
                                      product.src +
                                      ' >\
                    </a>\
                </div>\
                <div class="productContent">\
                    <a  title="' +
                                      product.name +
                                      '" href=' +
                                      product.href +
                                      'class="productName">' +
                                      product.name +
                                      '</a>\
                    <div class="productSize">\
                    <p>' +
                                      product.size +
                                      ' </p>\
                </div>\
                     <div class="productPrices">';
                                  if (product.oldPrice > 0) {
                                      lastLookProductHTML +=
                                          ' <p class="discountPrice">' + product.discountPrice + " TL</p>";
                                      lastLookProductHTML +=
                                          '<p class="oldPrice">' + product.oldPrice + " TL</p>";
                                  } else {
                                      lastLookProductHTML +=
                                          '<p class="singlePrice">' + product.discountPrice + " TL</p>";
                                  }
                                  lastLookProductHTML +=
                                      ` </div>
                        <div class="button">
                          <button
                            type="button"
                          >
                            <a
                              class="productName"
                              href="` +
                                      product.href +
                                      `"
                              title="` +
                                      product.name +
                                      `"
                            >
                              Ürüne git
                            </a>
                          </button>
                        </div>
                      </div> </div></div>`;
                              });
                              lastLookProductHTML += `</div></div></div>`;
                              var lastLookProductCSS = `<style>
    body {
        overflow: hidden; /* Hide scrollbars */
        }
    .content::-webkit-scrollbar {
        width: 1em;
        height:50px;
    }
    .content::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    .content::-webkit-scrollbar-thumb {
      background-color: rgb(103, 61, 39);
        outline: 1px solid rgb(103, 61, 39);
    }
    </style>`;
                              jQuery("body").append(lastLookProductHTML);

                              jQuery(".product a").click(function () {
                                  setLevel(LEVEL_JOIN, "Click_" + jQuery(this).attr("title"));
                              });
                              var imgSrc =
                                  "https://cdn.hellosmpl.com/uploads/2021/02/15/in04j3q87r626h8umo9gb0gmni.png";
                              var kulakcikHTML =
                                  "<div id='lastLookTrigger' style='font-weight: bolder; cursor: pointer; z-index: 99999; position: fixed; right: -58px;bottom:" +
                                  (window.innerHeight / 2 - 152) +
                                  "px;width: 185px; background-image: url(" +
                                  imgSrc +
                                  ");background-size:cover;background-repeat:no-repeat; text-align: center; color: white; display: flex; flex-direction: column; justify-content: center; border-top-left-radius: 3px; border-bottom-left-radius: 3px;transform: rotate(-90deg);'><span style='margin-top:10px;margin-bottom:10px;font-size:17px;color:white;text-orientation: upright;height: 50px;'></span></div>";
                              jQuery("body").append(kulakcikHTML);
                              // if(window.innerHeight<694){
                              //     jQuery('#lastLookTrigger').css("display","none");
                              //     jQuery(window).scroll(function() {
                              //         if(jQuery(window).scrollTop()>105){
                              //             jQuery('#lastLookTrigger').css("display","block");
                              //         }
                              //         else{
                              //             jQuery('#lastLookTrigger').css("display","none");

                              //         }

                              //      });
                              // }
                              // else{
                              //     jQuery('#lastLookTrigger').css("display","block");

                              // }

                              setLevel(LEVEL_JOIN, "Shown-trigger");
                              jQuery("#lastLookTrigger").animate(
                                  {
                                      right: "-58px",
                                  },
                                  1000
                              );
                              jQuery(scenarioClass + " .overlay").click(function () {
                                  jQuery(scenarioClass + " .container").animate(
                                      {
                                          right: "-500px",
                                      },
                                      1000
                                  );
                                  setTimeout(() => {
                                      jQuery(scenarioClass).css("display", "none");
                                      var aa = `<style>body{overflow:auto;}</style>`;
                                      jQuery("head").append(aa);
                                  }, 1000);
                                  setLevel(LEVEL_EXIT, 'Click-closeButton');
                              });

                              jQuery("#lastLookTrigger").click(function () {
                                  jQuery("head").append(lastLookProductCSS);
                                  jQuery(scenarioClass).css("display", "block");
                                  jQuery(scenarioClass + " .container").animate(
                                      {
                                          right: "0px",
                                      },
                                      1000
                                  );
                                  setLevel(LEVEL_JOIN, "Shown-modal");
                              });
                          }
                      }
                  }
                  jQuery(scenarioClass + " .close").click(function () {
                      setLevel(LEVEL_EXIT, 'Click-closeButton');
                      jQuery(scenarioClass + " .container").animate(
                          {
                              right: "-500px",
                          },
                          1000
                      );
                      setTimeout(() => {
                          jQuery(scenarioClass).css("display", "none");
                          var aa = `<style>body{overflow:auto;}</style>`;
                          jQuery("head").append(aa);
                      }, 1000);
                  });

              } else {
                  // replace changes
              }
          }
      });
  });
}
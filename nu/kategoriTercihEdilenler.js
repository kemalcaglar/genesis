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
          var smplObj = {
            scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
            scenarioName: "scenario-" + scenarioId + "-" + variationId,
            pageCategory: window.dataLayer[7][2].ecomm_category,
            loopEnd: false,
            productIDList: [],
            getDataListFromPage: () => {
              for (let index = 0; index < 12; index++) {
                var productID = jQuery("#ProductPageProductList .ItemOrj")
                  .eq(index)
                  .find(".productImage a")
                  .attr("data-id");
                smplObj.productIDList.push(productID);
              }
              smplObj.loopEnd = true;
            },
            XmlData: [],
            widgetTitle: "KATEGORİNİN EN ÇOK GEZİLENLERİ",
            leftArrow:
              "https://cdn.hellosmpl.com/uploads/2021/01/11/fg4bjl7hmnkklfiodot5lrosdj.png",
            rightArrow:
              "https://cdn.hellosmpl.com/uploads/2021/01/11/hp7mlfo4pu3q4kpj2q0kcq9nio.png",
          };
          var dataFromXml = [];
          smplObj.getDataListFromPage();
          var dataController = function () {
            var setData = function (data) {
              dataFromXml = data;
              return dataFromXml;
            };
            var pushDataToArray = function (iterator, item, itemCategory, imgSrc) {
              if (imgSrc !== "") {
                item.title = iterator.getElementsByTagName("title")[0].textContent;
                item.link = iterator.getElementsByTagName("link")[0].textContent;
                item.price = iterator.getElementsByTagName("g:price")[0].textContent;
                item.category = itemCategory;
                item.imgSrc = imgSrc;
                smplObj.XmlData.push(item);
              }
            };
            var getData = function (data) {
              data = data.getElementsByTagName("channel")[0];
              jQuery(data).each(function (index, dataItem) {
                var items = dataItem.getElementsByTagName("item"); // item elementleri geliyor.
                /* item elemtnleri tek tek alınıyor. for of kullnaılmasının sebebi index ile işimizin olmaması */
                /* xml içinden veri alırken vanillaJs kullanılması tavsiye edilir. */

                for (var iterator of items) {
                  var item = {}; //data içine gönderilecek olan itemler için
                  /* find ile "g:" şeklinde olan elementlere ulaşılamıyor. */
                  var itemID = iterator.getElementsByTagName("g:id")[0].textContent;
                  var itemCategory = iterator.getElementsByTagName(
                    "g:google_product_category"
                  )[0].textContent;

                  if (smplObj.productIDList.indexOf(itemID) > -1) {
                    var imgSrc = "";
                    var imgSrcList = iterator.getElementsByTagName("g:image_link");
                    for (var index = 0; index < imgSrcList.length; index++) {
                      var element = imgSrcList[index].textContent;
                      if (element) {
                        imgSrc = element;
                      }
                    }
                    pushDataToArray(iterator, item, itemCategory, imgSrc);
                  }
                }
                setData(smplObj.XmlData);
              });
            };

            var runAjax = function () {
              jQuery.ajax({
                type: "GET",
                url: "https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114",
                dataType: "xml",
                success: function (response) {
                  getData(response);
                },
              });
            };
            runAjax();
          };

          var loopEndInterval = setInterval(() => {
            if (smplObj.loopEnd) {
              setTimeout(() => {
                dataController();
              }, 1000);
              clearInterval(loopEndInterval);
            }
          }, 100);

          var htmlController = function () {
            var displayWidth = (element) => {
              var pictureWidth = jQuery(".ItemOrj .resimOrginal").width();
              jQuery(element).css("width", pictureWidth + "px");
            };
            var displayHeight = (element) => {
              var carouselHeight = jQuery(".ItemOrj").height();
              jQuery(element).css("height", carouselHeight + "px");
            };
            var resizeItems = () => {
              displayWidth(
                jQuery(smplObj.scenarioClass + " .populer-carousel .smpl_item")
              );
              displayWidth(
                jQuery(smplObj.scenarioClass + " .populer-carousel .owl-item")
              );
              displayWidth(
                jQuery(smplObj.scenarioClass + " .populer-carousel .smpl_item img")
              );
              displayHeight(
                jQuery(smplObj.scenarioClass + " .populer-carousel .owl-stage-outer")
              );
              displayHeight(
                jQuery(smplObj.scenarioClass + " .populer-carousel .owl-stage")
              );
            };
            jQuery(window).resize(() => {
              resizeItems();
            });
            jQuery(smplObj.scenarioClass + " .populer-carousel").owlCarousel({
              loop: true,
              margin: 5,
              nav: true,
              items: 4,
              dots: false,
              navText: ["<", ">"],
            });
            resizeItems();
            jQuery(smplObj.scenarioClass + " .arrow_right").click(function () {
              jQuery(".owl-next").click();
            });
            jQuery(smplObj.scenarioClass + " .arrow_left").click(function () {
              jQuery(".owl-prev").click();
            });
            jQuery(".owl-nav").css("display", "none");
            jQuery(smplObj.scenarioClass + " .smpl_item a").click(function () {
              setLevel(LEVEL_JOIN, "click-product");
            });
          };
          var displayHtml = function () {
            var script = document.createElement("script");
            script.setAttribute(
              "src",
              "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
            );
            document.querySelector("head").appendChild(script);
            function shuffle(array) {
              for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
            }
            dataFromXml = shuffle(dataFromXml);
            var html =
              `
  <div class="` +
              smplObj.scenarioName +
              `">
    <h2>` +
              smplObj.widgetTitle +
              `</h2>
    <div class="owl-carousel populer-carousel owl-theme">`;
            dataFromXml.map((element) => {
              html +=
                `<div class="smpl_item">
        <a href="` +
                element.link +
                `"><img src="` +
                element.imgSrc +
                `"/>
          <div class="productName">
            <a title="` +
                element.title +
                `" href="` +
                element.link +
                `">` +
                element.title +
                `     </a>
          </div>
        </a>
        <div class="productPrice">
          <div class="discountPrice">
            <span>` +
                element.price +
                `</span>
          </div>
        </div>
      </div>
`;
            });
            html +=
              `
  </div>
  <div class="arrow_right" type="button">\
    <span>\
      <img src="` +
              smplObj.rightArrow +
              `">\
    </span>\
  </div>\
  <div class="arrow_left" type="button">\
    <span>\
      <img src="` +
              smplObj.leftArrow +
              `">\
    </span>\
  </div>\
</div>`;
            jQuery("#ProductPageProductList").prepend(html);
            setLevel(LEVEL_JOIN, "shown-slider");
            htmlController();
          };

          var isDataHere = setInterval(() => {
            if (dataFromXml.length > 0) {
              displayHtml();
              clearInterval(isDataHere);
            }
          }, 250);

        } else {
          // replace changes
        }
      }
    });
  });
}
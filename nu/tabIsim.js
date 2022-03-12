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
              //scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
              //scenarioName: "scenario-" + scenarioId + "-" + variationId,
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
  
            
              var html =
                `
                <div>sa</div>
`;
              jQuery("#ProductPageProductList").prepend(html);
              //setLevel(LEVEL_JOIN, "shown-slider");


          } else {
            // replace changes
          }
        }
      });
    });
  }
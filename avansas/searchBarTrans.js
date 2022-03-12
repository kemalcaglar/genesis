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
          const smplObj = {
            scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
            scenarioName: "scenario-" + scenarioId + "-" + variationId,
            setCookie: (cname, value, min) => {
              value = window.btoa(unescape(encodeURIComponent(value)));
              const d = new Date();
              d.setTime(d.getTime() + (min * 60 * 1000));
              const expires = "expires=" + d.toUTCString();
              document.cookie = cname + "=" + value + ";" + expires + ";path=/";
            },
            getCookie: (cname) => {
              const getValue = (cname) => {
                let name = cname + "=";
                let ca = document.cookie.split(";");
                for (let i = 0; i < ca.length; i++) {
                  let c = ca[i];
                  while (c.charAt(0) == " ") {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";
              };
              let value = getValue(cname);
              try {
                value = window.atob(value);
              } catch (e) {

              }
              try {
                value = escape(value);
              } catch (e) {

              }
              try {
                value = decodeURIComponent(value);
              } catch (e) {

              }

              return value;
            },
            debounce: function (func, timeout) {
              let timer;
              return function (...args) {
                const context = this;
                clearTimeout(timer);
                timer = setTimeout(() => func.apply(context, args), timeout);
              };
            },
            fireEvent: function (eventLabel, minutes) {
              const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
              const eventName = eventLabel + "(" + device + ")";
              if (minutes === 0) {
                if (options.sendEvent) {
                  if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                  } else {
                    setLevel(LEVEL_JOIN, eventName);
                  }
                } else {
                  console.log("event: ", eventName);
                }
              } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
                if (options.sendEvent) {
                  if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                  } else {
                    setLevel(LEVEL_JOIN, eventName);
                  }
                  smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                } else {
                  console.log("event: ", eventName);
                  smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                }
              }
            }
          };

          const cookies = {
            cookieSearchBar: `smpl_scenario_${scenarioId}_click`,
            cookieClickShown: `smpl_scenario_${scenarioId}_clickShown`,
            shownSearchBar: `smpl_scenario_${scenarioId}_shown`,
            lastProduct: `smpl_scenario_${scenarioId}_lastProduct`,
            lastProductId: `smpl_scenario_${scenarioId}_lastProductId`,
            lastProductUrl: `smpl_scenario_${scenarioId}_lastProductUrl`,
            searchBarClicked: `smpl_scenario_${scenarioId}_clicked`,
            searchBarClickedId: `smpl_scenario_${scenarioId}_clickedId`,
          }

          const functions = {
            ProductLogger: function (tag) {
              let userTagCookie = tag
              if (smplObj.getCookie(cookies.cookieSearchBar) !== null) {
                let tempStored = smplObj.getCookie(cookies.cookieSearchBar);
                let tempArray = [];
                let match = -1;
                tempArray = JSON.parse(tempStored);
                tempArray.forEach(function (element, index) {
                  if (element === userTagCookie) {
                    match = index;
                  }
                });
                if (match !== -1) {
                  tempArray.splice(match, 1);
                }
                tempArray.unshift(userTagCookie);
                smplObj.setCookie(cookies.cookieSearchBar, JSON.stringify(tempArray), 30);
              } else {
                let userTagCookie = [userTagCookie];
                smplObj.setCookie(cookies.cookieSearchBar, JSON.stringify(userTagCookie), 30);
              }
            }
          };
          function searchBarFunction() {
            console.log("evet")
            jQuery('.search-input.tt-input').attr('placeholder', productName);
            if (smplObj.getCookie(cookies.shownSearchBar) == null) {
              smplObj.fireEvent("shown-search")
              smplObj.setCookie(cookies.shownSearchBar, "on");
            }
            if (productName == jQuery('.search-input.tt-input').attr('placeholder')) {
              jQuery('.search-input.tt-input').click(function () {
                jQuery('.search-input.tt-input').attr('placeholder', " ");
              });
              jQuery('#multiple-datasets button').click(function () {
                if (smplObj.getCookie(cookies.cookieClickShown) == null) {
                  smplObj.fireEvent("click-ara");
                  smplObj.setCookie(cookies.cookieClickShown, "on");
                }
                jQuery('head').append('<style>#search-bar-area.show-error:after{content: none;}</style>');
                jQuery('head').append('<style>#search-bar-area.show-error:before{content: none;}</style>');
                smplObj.setCookie(cookies.searchBarClicked, "on");
                smplObj.setCookie(cookies.searchBarClickedId, productID);
                window.location.href = productUrl;
              });
            }
          };

          let productName;
          let productUrl;
          let productID;
          if (smplObj.getCookie(cookies.lastProduct) !== null) { // son gezilen ürün varsa
            productName = smplObj.getCookie(cookies.lastProduct);
            productUrl = smplObj.getCookie(cookies.lastProductUrl);
            productID = smplObj.getCookie(cookies.lastProductId);
            if (jQuery('div.product-detail-card').length > 0 || jQuery(".vnss-product-detail").length > 0) { // product sayfası ise
              if (jQuery('#productName').text().trim() !== smplObj.getCookie(cookies.lastProduct)) {
                searchBarFunction();
              }
            } else {
              searchBarFunction();
            }
          } else {
            jQuery('.search-input.tt-input').attr('placeholder', options.textSearch);
            jQuery('#multiple-datasets button').click(function () {
              window.location.href = 'https://www.avansas.com/temizlik-ve-gida-urunlerinde-cok-iyi-fiyatlar';
            });
            jQuery('head').append('<style>#search-bar-area.show-error:after{content: none;}</style>');
            jQuery('head').append('<style>#search-bar-area.show-error:before{content: none;}</style>');
          }
          if (jQuery('div.product-detail-card').length > 0 || jQuery(".vnss-product-detail").length > 0) {
            if ((smplObj.getCookie(cookies.searchBarClicked) === "on") && (smplObj.getCookie(cookies.searchBarClickedId) === smplObj.getCookie(cookies.lastProductId))) {
              jQuery('#addToCartButton').click(function () {
                let name = smplObj.getCookie(cookies.lastProduct);
                smplObj.fireEvent("click-AddToBasket_" + name)
                functions.ProductLogger(smplObj.getCookie(cookies.searchBarClickedId));
              });
              smplObj.setCookie(cookies.searchBarClicked, "off");
            }
            else {
              let productName = jQuery('.product-detail-info-content #productName').text().trim();
              let productUrl = window.location.href;
              let productID = jQuery('.product-code').attr('content');
              smplObj.setCookie(cookies.lastProduct, productName);
              smplObj.setCookie(cookies.lastProductUrl, productUrl);
              smplObj.setCookie(cookies.lastProductId, productID);
            }
          }
          // do something
        } else {
          // replace changes
        }
      }
    });
  });
}
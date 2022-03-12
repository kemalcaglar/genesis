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
            var css = `
  <style>
  .smplCategoryFix {
      position:fixed;
  }
  </style>
  `
  jQuery("head").append(css)
  var index = 0;
          jQuery(window).scroll(function () {
              index++;
              if (index === 1) {
                  setLevel(LEVEL_JOIN, "shown-category");
              }
              if (jQuery(window).scrollTop() > 196) {
                  jQuery('.filter-list').addClass("smplCategoryFix");
                  jQuery(".filter-container").eq(0).css({"width":"15%"})
                  jQuery(".filter-wrapper").eq(0).css({"border-bottom":"0px"})
                  jQuery(".filter-container a").click(function () {
                      setLevel(LEVEL_JOIN, "click-category");
                  })
                  jQuery(".filter-wrapper a").click(function () {
                  setLevel(LEVEL_JOIN, "click-category");
                  })
              } else {
                  jQuery('.filter-list').removeClass("smplCategoryFix");
                  jQuery(".filter-container").eq(0).css({"width":"100%"})
                  jQuery(".filter-wrapper").eq(0).css({"border-bottom":"1px solid #ebebeb"})
              }
          });
          } else {
            // replace changes
          }
        }
      });
    });
  }
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
        //console.log('new Config', newConfig);
      });
  
      toggleShow((status) => {
        if (!options.controlVariation) {
          if (status) {
            var scenarioClass = ".scenario-" + scenarioId;
            var weCallYouLink = "https://form.multinet.com.tr/MultiNet-basvuru-multiple",
            var img =
              "https://cdn.hellosmpl.com/uploads/2021/05/05/inpoh0ifo3uskp0ur40251lujk.jpg";
            var popup =
              `<div class="scenario-` + scenarioId + `">
  <div class="overlay"></div>
  <div class="content">
  <div class="close">&#10005;</div>
  <img src="` + img + `">
    <div class="button" style="right:60px;">
  <a class="weCallYou" href=`+ weCallYouLink + `>Sizi Arayalım</a>
  </div></div>
  </div>
  `;
            jQuery("body").append(popup);
            //setLevel(LEVEL_JOIN, "shown-popup");
            //jQuery(scenarioClass + " .close").click(function () {
              //setLevel(LEVEL_EXIT, "click-Close");
              //jQuery(scenarioClass).remove();
            //});
            //jQuery(scenarioClass + " .overlay").click(function () {
              //setLevel(LEVEL_EXIT, "click-overlay");
             // jQuery(scenarioClass).remove();
            //});
            //jQuery(scenarioClass + " .weCallYou").click(function () {
              //setLevel(LEVEL_JOIN, "click-weCall");
            //});
          } else {
            // replace changes
          }
        }
      });
    });
  }
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
          
    jQuery('.p-item-inside').each(function(i,product){
        if(Number(jQuery('.new-price',product).text().split(' TL')[0].replace('.','').replace(',','.'))>=200){
            var html ='<div class="badge new-badge kargo-badge" style="font-family: firasemibold,sans-serif;font-weight:400;padding:5px;position:absolute;color:#fff;bottom:'+(jQuery('.p-price',product).height()+3)+'px;left:'+((jQuery('.p-info',product).width()-70.72)/2)+'px;right:unset;background-color:#fe9a1a;">\
Kargo Bedava\
 </div>';
            jQuery('.p-info',product).append(html);
jQuery(".p-item-inside").each(function (i,product){
    if(jQuery(".badge.new-badge.kargo-badge",product).length  > 0 ) {
        jQuery(".d-flex.align-items-center.justify-content-center.p-price.flex-wrap", product).css({"margin-top": "10px"})
    }
        if(jQuery(".badge.new-badge.kargo-badge",product).length  < 1 ) {
        jQuery(".d-flex.align-items-center.justify-content-center.p-price.flex-wrap", product).css({"margin-top": "-10px"})
    }
})
        }
        
    })
    if(lang==="en"){
            jQuery('.kargo-badge').text("Free Cargo");
    }

    setLevel(LEVEL_JOIN,'Shown');
        } else {
          // replace changes
        }
      }
    });
  });
}
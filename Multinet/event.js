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
          
      if(window.innerWidth>768){
    setLevel(LEVEL_JOIN, 'Shown_Desktop');

jQuery('#edit-actions-submit').click(function(){
    if(jQuery('#edit-adiniz-soyadiniz').val()!=="" && jQuery('#edit-telefon-numarasi').val()!=="" && jQuery('#edit-e-posta').val()!=="" && jQuery('#edit-firma-adi').val()!==""){
      setLevel(LEVEL_JOIN, 'Send_Form_Desktop');
    } 
})
}
else{
    setLevel(LEVEL_JOIN, 'Shown_Mobil');

    jQuery('#edit-actions-submit').click(function(){
        if(jQuery('#edit-adiniz-soyadiniz').val()!=="" && jQuery('#edit-telefon-numarasi').val()!=="" && jQuery('#edit-e-posta').val()!=="" && jQuery('#edit-firma-adi').val()!==""){
          setLevel(LEVEL_JOIN, 'Send_Form_Mobil');
        } 
    })
}


        } else {
          // replace changes
        }
      }
    });
  });
}


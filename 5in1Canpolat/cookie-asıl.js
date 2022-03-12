/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate
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
            // do something
  
  
  
  // window.EightDigits.utils.loadJS('https://cdn.hellosmpl.com/custom/scenarios/18be9e62-9a5f-494e-a581-14c8303f6dc8.js');
  
  
  var tempLeft = (window.innerWidth - 600) / 2;
  var tempTop = (window.innerHeight - 230) / 2;
  
  var html = '<div id="ed-dep-div" style="position:fixed; z-index:9999999; width:100%; height:100vh;top:0px; background-color:rgba(0,0,0,0.7)"><div id="ed-main-cover" style="border:3px solid #888;height:230px;width:600px;background-color:#fff;position:relative; left:'+tempLeft+'px; top: '+tempTop+'px "><div id="ed-close" style="cursor:pointer;z-index:99999999;position:absolute;top:20px;font-size:20px;right:20px; color:#000;">X</div><span style=" font-size: 22px;position: absolute;top: 30px;left: 20px; ">Değerli Müşterimiz,</span><span style="font-size: 22px;position: absolute;top: 70px;left: 20px;padding-right: 40px;">Outlet kategorisinden yapacağınız alışverişlerde iade ve değişim yapılmamaktadır.</span><span style="font-size: 22px;position: absolute;top: 150px;left: 20px;">Bilgilerinize sunarız.</span></div></div>';
  
  jQuery('body').prepend(html);
  setLevel(LEVEL_JOIN, 'shown-popup');
  
  jQuery('#ed-close').click(function(){
  jQuery('#ed-dep-nav').remove();
  jQuery('#ed-dep-div').remove();
  setLevel(LEVEL_JOIN, 'click-closePopup');
  });
  
  jQuery('#ed-dep-div').click(function(){
  jQuery('#ed-dep-nav').remove();
  jQuery('#ed-dep-div').remove();
  setLevel(LEVEL_JOIN, 'click-closePopup');
  });
  jQuery('#controlright').click(function(){
  setLevel(LEVEL_JOIN, 'click');
  });
          } else {
            // replace changes
          }
        }
      });
    });
  }
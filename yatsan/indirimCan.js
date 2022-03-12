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
          var campaing = "https://yatsan.com/d/kampanyalar";
          var discount30 =
            "https://cdn.hellosmpl.com/uploads/2021/01/15/peq7hcjb5ee277qqjk178sup0h.png";
          var discount50 =
            "https://cdn.hellosmpl.com/uploads/2021/01/15/p6svoo9vfp5u7sp8inh6l6nkvh.png";
          var html =
            '\<div class="scenario-' + scenarioId + '-' + variationId + '">\
<div class="smpl-menu">\
<span class="smpl-count">2</span>\
  <ul>\
    <li class="smpl_list_item">\
       <div class="container">\
       <a href=' +
            campaing +
            ' style="display: inline-block;">\
        <div class="header" style="display:flex;justify-content:center;align-items:center;background:#673d27; border-top-right-radius: 5px;    border-top-left-radius: 5px;">\
            <div style="font-size:17px;padding-top:5px;padding-bottom:5px;text-transform: uppercase;">Mart Fırsatları</div>\
        </div>\
       </a>\
        <div class="content">\
          <div style="border-bottom: 1px solid;">\
            <a href="https://yatsan.com/yataklar/serta-bowery-yatak-81408">\
            <img src="' +
          discount50 +
          '">\
            <span>Serta Bowery Yatakta %50 İndirim</span></a>\
          </div>\
          <div>\
          <a href="https://yatsan.com/d/sealy">\
          <img src="' +
          discount30 +
          '">\
              <span>Sealy Yataklarda %30 İndirim</span></a>\
          </div>\
      </div>\
    </div>\
   </li>\
  </ul>\
</div>\</div>\
';
          jQuery("body").append(html);
          jQuery(".smpl-menu").click(function () {
            if (jQuery(".smpl-menu").hasClass("active")) {
              jQuery(".smpl-menu").removeClass("active");
            } else {
              jQuery(".smpl-menu").addClass("active");
               setLevel(LEVEL_JOIN, "Open_Notification"); 
            }
          });

          jQuery(".smpl-menu li").click(function () {
             setLevel(LEVEL_JOIN, "Click_Campaing");
          });

        } else {
          // replace changes
        }
      }
    });
  });
}
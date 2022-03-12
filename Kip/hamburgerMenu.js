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
    });

    toggleShow((status) => {
      if (!options.controlVariation && status) {
        let html = '\
          <div class="smpl-menu">\
          <span class="smpl-menu-bar"></span>\
          <span class="smpl-menu-count">8</span>\
            <ul>\
              \
              <li><a href="https://www.kip.com.tr/kampanyalar/clearance-sale/">Clearance Sale</a></li>\
              <li><a href="https://www.kip.com.tr/kampanyalar/yuzde50-ye-varan-indirim/">2’li Alımda %15 İNDİRİM</a></li>\
              <li><a href="https://www.kip.com.tr/kampanyalar/super-firsatlar/">Süper Fırsatlar</a></li>\
          </div>\
        ';
        jQuery("body").append(html);


        jQuery(".smpl-menu").click(function () {
          if (jQuery(".smpl-menu").hasClass("active")) {
            jQuery(".smpl-menu").removeClass("active")
          } else {
            jQuery(".smpl-menu").addClass("active")
            setLevel(LEVEL_JOIN,'Button');
          }
        })
        jQuery('.smpl-menu li').click(function(){
            let innerText = jQuery(this).find('a').text();
            

             setLevel(LEVEL_JOIN,innerText);

        });

      } else {
        // replace changes
      }
    });
  });
}
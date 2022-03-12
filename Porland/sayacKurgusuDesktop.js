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
           var dateChecker = function () {
        var now = new Date();
        var startDate = new Date("March 19, 2021 11:09:00").getTime();
        var endDate = new Date("March 19, 2021 23:59:59").getTime();

        if (now >= startDate && now <= endDate) {
        console.log('true')
        return true;
        }   
        else {
        console.log('false')
        return false;
        }
    }
    
    
    
        if (dateChecker()) {
            
            
            var html = '<div id="ed-header_sayac" style="width:100%; cursor:pointer; background-color:#A92521; ">\
            \
            <div id="ed-div-inner-sayac" style="width: 1043px; margin: 0 auto;padding: 10px 0px; display: flex;">\
                    \
                    <div id="ed-inner-sayac-text" style="width: 700px;line-height: 27.5px;">\
                        <div id="ed-inner-header-part">\
                            <div style="text-align:center;font-weight:bold;color:white;font-size: 16px;">Son Saatler! Sepette %21 İndirim Fırsatını Kaçırmayın! </div>\
                        </div>\
                    </div>\
                    <div id="smpl-timer" style="color:white;text-align: center;display:flex;">\
                    \
                        <div id="_timer_hours" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
                        <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Saat</div>\
                        <div id="_timer_minutes" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
                        <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Dakika</div>\
                        <div id="_timer_seconds" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
                        <div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Saniye</div>\
                    </div>\
            </div>\
    </div>';


    var countDownDate =  new Date("March 19, 2021 23:59:59").getTime();
    var countDownDate2= new Date("March 19, 2021 23:59:59").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    var distance2 = countDownDate2-now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If client choises hour
    /* if (days > 0) {
    hours += 24 * days;
    }*/

    // Display the result in the element

    jQuery("#_timer_hours").html('' + (hours < 10 ? '0' + hours : hours) + '');
    jQuery("#_timer_minutes").html('' + (minutes < 10 ? '0' + minutes : minutes) + '');
    jQuery("#_timer_seconds").html('' + (seconds < 10 ? '0' + seconds : seconds) + '');

    // If the count down is finished, write some text 
    if (distance2 < 0) {
    jQuery('#ed-header_sayac').remove();
    clearInterval(x);}

    }, 1000);


    jQuery('.header').prepend(html);
    setLevel(LEVEL_JOIN, 'Shown')

        }
    


        } else {
          // replace changes
        }
      }
    });
  });
}
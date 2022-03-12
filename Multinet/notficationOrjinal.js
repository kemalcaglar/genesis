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



          var data = [
            {
              id: '',
              title: '2021 Yılı Günlük Yemek Bedeli Açıklandı!',
              url: 'https://multinet.com.tr/2021-gunluk-yemek-bedeli-istisnasi',
            }, {
              id: '',
              title: 'Aradığınız Multinet Noktası İçin Tıklayın!',
              url: 'https://multinet.com.tr/kart-kullanim-noktalari',
            }, {
              id: '',
              title: 'Güncel Kampanyalarımızı İnceleyin!',
              url: 'https://multinet.com.tr/bireysel-kampanyalar',
            }, {
              id: '',
              title: 'MNG Kargo’da Dev Avantajları Kaçırmayın!',
              url: 'https://multinet.com.tr/mng-kargo',
            }
          ];
          var count = 4;
          var html = '\
              <div class="menu-items-level-1" id="icon-notification-8d" style=";position: absolute;height:38px;z-index: 100;width:40px;cursor:pointer;margin-left:-50px; font-family: \'Montserrat\',Arial,Helvetica,sans-serif">\
                <div class="menu-items-level-2"><i class="fa fa-bell" style="margin-top:6px;font-size: 26px;color: #e5252d;" ;=""></i>\
                <span class="_ed_count" style="position: absolute;color: #fff;font-weight: bold;height: 18px;width: 18px;line-height: 10px;top: 2px;left: 18px;border: 1px solid #ffffff;border-radius: 50%;background-color: #616161;padding-left: 5px;padding-top: 3px;font-size:11px;">' + count + '</span>\
              </div>\
          ';
          jQuery('#block-headertop li:eq(0)').prepend(html);
          setLevel(LEVEL_JOIN, "Shown");

          var css = '<style>#notification-container-8d li{list-style-type: none !important;} #notification-container-8d li a{background: transparent !important;}</style>'
          jQuery('head').append(css);

          setTimeout(function () {
            jQuery('#icon-notification-8d').append('<ul id="notification-container-8d" style="width: 360px; position: relative; z-index: 99999; box-shadow: rgba(66, 66, 66, 0.3) 0px 0px 4px 1px; top: 13px; right: 152px; display: flex;flex-direction:column;justify-content:center; border-radius: 11px; padding: 8px 20px 10px; background: white; list-style: none;"></ul>');
            jQuery('#notification-container-8d').append('<div id="topContain" style="color:#fff;background-color:#ee3342;width: 100%;height: 49px;text-align: center;line-height: 47px;font-size: 15px;font-weight: bold;background-color: white;color: #14123a;font-size: 18px;">Duyurular</div>');
            jQuery('#notification-container-8d').append('<div style="position: absolute;top: -7px;left: 157px;border-style: solid;border-width: 8px 8px 8px;border-color: #ffffff #ffffff;display: none;z-index: 101;box-shadow: rgba(66, 66, 66, 0.3) -3px -3px 6px -1px;transform: rotate(45deg);"></div>');


            var dc = data.length;

            jQuery.each(data, function (i, line) {
              var liclass = (dc == i + 1) ? ' class="last"' : '';
              var _this_el = '<li' + liclass + '><a class="notification-container-8d-link ' + line.id + '" href="' + line.url + '" data-order="' + parseInt(i + 1) + '"><div class="line-content"><p class="line-title" style="margin-bottom:0 !important">' + line.title + '</p></div></a></li>';
              jQuery('#notification-container-8d').append(_this_el);
            });

            jQuery('#notification-container-8d li').css({
              backgroundColor: 'white',
              display: "flex",
              alignItems: "center",
              padding: "15px 25px",
              textAlign: "left",
              borderTop: "1px solid rgb(217, 217, 217)",
              position: "relative"
            });


            jQuery('#notification-container-8d li').hover(function () {
              jQuery(this).find('.line-title').css({
                color: '#f59100'
              });
            }, function () {
              jQuery(this).find('.line-title').css({
                color: 'black'
              });
            });

            jQuery('#notification-container-8d li').click(function () {
              var clickedOpt = jQuery(this).text();
              setLevel(LEVEL_JOIN, clickedOpt);
            })

            jQuery('#notification-container-8d a').css({
              padding: '0',
              color: '#707070',
              borderRight: 'none'
            });
            jQuery('#notification-container-8d .line-content').css({
              fontFamily: 'montserratregular',
              fontSize: '13px',
              paddingLeft: '0px',
              "width": "423px",
              textAlign: 'left',
              left: '0px',
              right: '0px',
              margin: 'auto',
              position: 'relative',
              top: '1px'
            });

            jQuery('#notification-container-8d .line-title').css({
              fontSize: '12px',
              lineHeight: '14px',
              textAlign: 'left',
              color: '#000',
            });
            jQuery('#notification-container-8d .line-desc').css({
              fontSize: '13px',
              paddingLeft: '0px',
              textAlign: 'center',
              marginTop: '-18px',
              color: "#000",
              fontWeight: "bold",
              "width": "320px"
            });
            jQuery('#notification-container-8d li').append('<i class="fa fa-angle-right" style="position: absolute;left: 0;font-size: 23px;font-weight:bolder;color: #14123a;display: block;"></i>');


            jQuery('#icon-notification-8d').mouseenter(function () {
              clearTimeout(jQuery('#icon-notification-8d').data('timeoutId'));
              jQuery('#notification-container-8d').fadeIn('fast').css("display", "flex");
              setTimeout(function () {
                jQuery('#icon-notification-8d').css({
                  backgroundPosition: '0 0px'
                });
              }, 2000);
            }).mouseleave(function () {
              var timeoutId = setTimeout(function () {
                jQuery('#notification-container-8d').fadeOut('fast');

              }, 200);
              jQuery('#icon-notification-8d').data('timeoutId', timeoutId);
            });


            jQuery('#notification-container-8d').mouseenter(function () {
              if (jQuery('#icon-notification-8d').data('timeoutId') == -1) return;
              clearTimeout(jQuery('#icon-notification-8d').data('timeoutId'));
              jQuery('#notification-container-8d').fadeIn('fast').css("display", "flex");

            }).mouseleave(function () {
              var timeoutId = setTimeout(function () {
                jQuery('#icon-notification-8d').data('timeoutId', -1);
              }, 200);
              jQuery('#icon-notification-8d').data('timeoutId', timeoutId);
            });
          }, 1000);

          setTimeout(function () {

            var shaketimes = 10;
            var shakestart = 0;
            var shakeduration = 100;
            var hovershake = 0;

            function shake() {

              if (hovershake === 0) {
                jQuery('.menu_items-level-2').css({
                  'transform': 'rotate(0deg)',
                });
              }

              shakestart++;
              if (shakestart === shaketimes + 1) {
                jQuery('.menu-items-level-2').css({
                  'transform': 'rotate(0deg)',
                });
                return;
              }

              var deg = shakestart % 2 === 0 ? 15 : -15;

              jQuery('.menu-items-level-2').css({
                'transform': 'rotate(' + deg + 'deg)',
                'transition-shakeduration': '0.' + shakeduration / 10 + 's'
              });
              setTimeout(function () {
                shake();
              }, shakeduration);

            };
            shake()
          }, 3000);

        } else {
          // replace changes
        }
      }
    });
  });
}
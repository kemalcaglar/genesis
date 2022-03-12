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
          if (
            jQuery("#product-body .product-details h1.p-name.p-name-2")
              .text()
              .indexOf("Yatak") > -1
          ) {
            const sendEvent = (eventKey, data, done) => {
              const trackingCode = 'l3vb0m7r';
              const visitorCode = Math.floor(Math.random() * 100000000 + 1);
              const sessionCode = Math.floor(Math.random() * 100000000 + 1);
              const hitCode = Math.floor(Math.random() * 100000000 + 1);
              const domain = 'www.hellosmpl.com';

              const getServiceUrl = (path, params) => {
                return "https://hit.8digits.com/" + path
                  + "?trackingCode=" + trackingCode
                  + "&visitorCode=" + visitorCode
                  + "&sessionCode=" + sessionCode
                  + "&domain=" + domain
                  + "&hitCode=" + hitCode
                  + "&path=&rnd=&"
                  + Object.keys(params).map(key => key + '=' + params[key]).join('&');
              };

              const createImage = (source, onload) => {
                const image = new Image();
                image.src = source;
                image.onload = onload;
              };

              const hitUrl = getServiceUrl('hit', { obj: '' });
              const attrUrl = getServiceUrl('setattrs', { obj: encodeURIComponent(JSON.stringify(data)) });
              const eventUrl = getServiceUrl('event', { key: eventKey, value: '' });

              createImage(hitUrl, () => createImage(attrUrl, () => createImage(eventUrl, done)));
            };
            var listData = JSON.parse(sessionStorage.getItem("UrunDetayData"));
            var widgetAreaStyle =
              "<style>\
      #smpl.widget-area {\
        display: none;\
        position: fixed;\
        z-index: 999999999;\
        top: 0px;\
        left: 0;\
        width: 100%;\
        height: 100vh;\
      }\
      #smpl .widget-area-background {\
        width: 100%;\
        height: 100%;\
        z-index: 4444;\
        background: rgba(43, 43, 43, 0.7);\
      }\
      #smpl .widget-area-scroll {\
        position: fixed;\
        z-index: 999999999;\
        width: 336px;\
        height: 100vh;\
        background-color: white;\
        right: -600px;\
        top: 0px;\
        text-align: center;\
      }\
      #smpl .widget-area-header {\
        background-color: rgb(103, 61, 39) !important;\
        width: 100%;\
        height: 80px;\
       padding-top:7%;\
      }\
      #smpl .widget-area-header h2 {\
        text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);\
        margin: 0px;\
        line-height: 30px;\
        font-size: 16px;\
        color: white;\
      }\
      #smpl .widget-area-container {\
        width: 100%;\
        overflow: auto;\
        height: 100%;\
        padding-bottom: 80px;\
        display: flex;\
        align-items: center;\
      }\
      #smpl .widget-area-product {\
        margin-top: 20px;\
        padding-left: 20px;\
        padding-right: 20px;\
      }\
      #smpl div.widget-product-content {\
        width: 100%;\
        box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.1),\
          -2px -2px 2px rgb(0, 0, 0, 0.1) !important;\
      }\
      #smpl div.widget-product-img {\
        margin-right: 15px;\
        display: flex;\
        align-items: center;\
        justify-content: center;\
      }\
      #smpl div.widget-product-img a {\
        width: 35%;\
      }\
      #smpl div.widget-product-text {\
        display: flex;\
        justify-content: center;\
        align-items: center;\
        flex-direction: column;\
        padding-bottom: 5px;\
      }\
      #smpl div.widget-product-text a{\
        text-decoration: none;\
        color: black;\
      }\
      #smpl a.widget-product-name {\
        font-size: 15px;\
        color: #0e0e0e;\
        font-weight: bold;\
        line-height: 1.8;\
        text-transform: uppercase;\
      }\
      #smpl .widget-product-size {\
        font-size: 11px;\
        text-align: center;\
        color: #9b9b9b;\
        line-height: 2;\
        white-space: nowrap;\
        text-overflow: ellipsis;\
        overflow: hidden;\
      }\
      #smpl div.widget-product-prices {\
        display: flex;\
        justify-content: center;\
      }\
      #smpl p.widget-area-discountedprice {\
        margin-left: 10px;\
        margin: 0;\
      margin-right: 10px;\
      color: #202020;\
      font-size: 16px;\
      }\
      #smpl p.widget-area-price {\
        margin: 0;\
      font-size: 14px;\
      color: #bbb;\
      box-sizing: border-box;\
      text-decoration: line-through;\
      margin-left: 10px;\
      }\
      #widget-area-kulakcik {\
        transform: rotate(-90deg) translateX(-50%);\
        font-weight: bolder;\
        cursor: pointer;\
        z-index: 99999;\
        position: fixed;\
        right: -80px !important;\
        bottom:" +
              window.innerHeight / 2 +
              "px;\
        height: 50px;\
        background-color: rgb(103, 61, 39) !important;\
        text-align: center;\
        display: flex;\
        align-items: center;\
        padding: 10px;\
      }\
      #widget-area-kulakcik span{\
        transform-origin: left;\
        margin-top: 10px;\
        margin-bottom: 10px;\
        font-size: 14px;\
        color: white;\
        border-top-left-radius: 5px;\
        border-top-right-radius: 5px;\
      } </style>";

            var completeCss = `<style>
      body {
          overflow: hidden; /* Hide scrollbars */
          }
      .widget-area-container::-webkit-scrollbar {
          width: 0.3em;
          height:50px;
      }
      .widget-area-container::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      
      }
      .widget-area-container::-webkit-scrollbar-thumb {
        background-color: #be7917;
          outline: 1px solid #be7917;
        
      }
      </style>`;
            var widgetHTML;
            listData.map((widgetItem, index) => {
              var dataLink = window.location.pathname.indexOf(widgetItem.bedUrl) > -1;
              if (dataLink) {
                var itemCompleted = widgetItem.complement;
                widgetHTML +=
                  '<div id="smpl" class="widget-area">\
            <div class="widget-area-background"></div>\
            <div class="widget-area-scroll">\
              <div class="widget-area-header"><span class="smpl-widget-close" \
style="font-size:30px; float:right; padding-left:5px; color:white; cursor:pointer;display: flex;margin-top:7px; margin-right: 5px;">&#215;</span>\
              <h2>Yatağınızı Tamamlayın</h2></div>\
              <div class="widget-area-container" id="widget-area-container_">\
              <div class="area-content" >';

                itemCompleted.map((item, i) => {
                  widgetHTML +=
                    '<div class="widget-area-product">\
            <div class="widget-product-content">\
              <div class="widget-product-img">\
                <a href=' +
                    item.url +
                    ' title="' +
                    item.name +
                    '">\
                  <img style="width:100%;" src=' +
                    item.imageSrc +
                    ' >\
                </a>\
              </div>\
              <div class="widget-product-text">\
            <a  title="' +
                    item.name +
                    '" href=' +
                    item.url +
                    'class="widget-product-name">' +
                    item.name +
                    '</a>\
                    <p class="widget-product-size"> Ürün Ölçüsü: ' +
                    item.size +
                    ' cm</p>\
            <div class="widget-product-prices">';
                  if (item.discountedprice !== "0") {
                    widgetHTML +=
                      '<p class="widget-area-discountedprice">' +
                      item.discountedprice +
                      ' TL</p>\
                          <p class="widget-area-price">' +
                      item.price +
                      " TL</p>";
                  }
                  +'<p class="widget-area-discountedprice">' + item.price + " TL</p>";
                  widgetHTML += "</div> </div> </div></div>";
                });
                widgetHTML += `</div></div></div></div>`;
                jQuery("body").append(widgetHTML);
                jQuery("head").append(widgetAreaStyle);

                jQuery(".widget-area-product a").click(function () {
                  setLevel(LEVEL_JOIN, "Click_" + jQuery(this).attr("title"));
                });
              }
            });
          }
          var kulakcikHTML =
            "<div id='widget-area-kulakcik'><span>YATAĞINIZI TAMAMLAYIN</span></div>";
          jQuery("body").append(kulakcikHTML);
          jQuery("#widget-area-kulakcik").css({
            "border-top-left-radius": "5px",
            "border-top-right-radius": "5px",
          });

          jQuery("#widget-area-kulakcik").animate(
            {
              right: "-80px",
            },
            1000
          );
          setLevel(LEVEL_JOIN, "Shown_Kulakcik");

          setTimeout(function () {
            jQuery("head").append(completeCss);
            jQuery("#smpl.widget-area").css("display", "block");
            jQuery(".widget-area-scroll").animate(
              {
                right: "0px",
              },
              1000
            );
          }, 3000);

          jQuery(".widget-area-background").click(function () {
            jQuery(".widget-area-scroll").animate(
              {
                right: "-500px",
              },
              1000
            );
            setTimeout(() => {
              jQuery("#smpl.widget-area").css("display", "none");
              var aa = `<style>body{overflow:auto;}</style>`;
              jQuery("head").append(aa);
            }, 1000);
            setLevel(LEVEL_JOIN, "Close_List");
          });

          jQuery("#widget-area-kulakcik").click(function () {
            jQuery("head").append(completeCss);
            jQuery("#smpl.widget-area").css("display", "block");
            jQuery(".widget-area-scroll").animate(
              {
                right: "0px",
              },
              1000
            );
            setLevel(LEVEL_JOIN, "Shown_List");
          });
          jQuery(".smpl-widget-close").click(function () {
            jQuery(".widget-area-scroll").animate(
              {
                right: "-500px",
              },
              1000
            );
            setTimeout(() => {
              jQuery("#smpl.widget-area").css("display", "none");
              var aa = `<style>body{overflow:auto;}</style>`;
              jQuery("head").append(aa);
            }, 1000);
            setLevel(LEVEL_JOIN, "Close_List");
          });
        }
        else {
          // replace changes
        }
      }
    });
  });
}
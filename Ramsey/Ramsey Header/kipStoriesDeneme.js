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
  initialize({
    type: TYPE_EMBEDED
  }, (config) => {
    onChangeConfig((newConfig) => {
      console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {


          var config = {
            scenarioname: "DesktopwebStories",
            analytics: "DesktopwebStories"
          };

          var main = {
            "factory": function () {
              return true;
            }
          };
          var timeInterval = 5; // Story değişme süresi sn cinsinde
          main.factory.prototype = {

            start: function () {

              jQuery('.section.tabslider:eq(0)').css('margin-top', '125px');
              jQuery('.section.toplinks-mobile').css('margin-top', '37.8rem')





              var dottedSpinnerCss = '<style>.story-container{\
                      display:inline-block;\
                      width:110px;\
                      vertical-align:top;\
                      margin-right: 6px;\
                      margin-left: 4px;\
                    }\
                    .story-container .video-title{\
                        margin-top: -20px;\
                        width: 110px;\
                        text-align: center;\
                        white-space: normal;\
                        font-size: 14px;\
                        line-height: 14px;\
                    }\
                    .story {\
                      position:relative;\
                      width:135px;\
                      height:136px;\
                      overflow:hidden;\
                    }\
                    .story img {\
                      width:97px;\
                      height:97px;\
                      border-radius:50%;\
                      position:absolute;\
                      top:39%;\
                      left:39%;\
                      transform:translate(-50%,-50%);\
                    }\
                    .story svg {\
                      fill:none;\
                      stroke:#EA424E;\
                      stroke-width:2px;\
                      stroke-dasharray:0px,1px;\
                      stroke-dashoffset:0;\
                      stroke-linecap:round;\
                    }\
                    .story svg.loader {\
                      animation:loading 2500ms ease-out infinite alternate;\
                    }\
                    .ed-arrow{\
                        animation: effect_dylan 500ms ease-out infinite alternate;\
                    }\
                    @keyframes loading {\
                      100% {\
                        stroke:#EA424E;\
                        stroke-dasharray:4px,6px;\
                        transform:rotate(180 115 115);\
                      }\
                    }\
                    @keyframes shaker{\
                        from {\
                            margin-top: -5px;\
                          }\
                        \
                          to {\
                            margin-top: 3px;\
                          }\
                    }\
                    @keyframes effect_dylan {\
                        50% {\
                          transform: scale(1.5, 1.5);\
                          opacity: 0;\
                        }\
                        99% {\
                          transform: scale(0.001, 0.001);\
                          opacity: 0;\
                        }\
                        100% {\
                          transform: scale(0.001, 0.001);\
                          opacity: 1;\
                        }\
                      }\
                    </style>';
              jQuery('head').append(dottedSpinnerCss);


              var img1 = "https://cdn.hellosmpl.com/uploads/2020/11/21/uqn68hiotprehonkcejhmc2qic.jpg";
              var img2 = "https://cdn.hellosmpl.com/uploads/2020/11/21/8og0134f87105mooga5i58ntsd.jpg";


              var text1 = "%60’a Varan İNDİRİM";
              var text2 = "Net %30, 2. Üründe %50 İNDİRİM";







              var storyList = {
                "1": {

                  imageUrl: img1,
                  text: text1,
                  imageList: [{
                    img: "https://cdn.hellosmpl.com/uploads/2020/11/21/qn2pkm0t2v4i9ohe3trs1pgd2o.jpg",
                    url: "https://www.kip.com.tr/efsane-gunler/"
                  }]
                },
                "2": {

                  imageUrl: img2,
                  text: text2,
                  imageList: [{
                    img: "https://cdn.hellosmpl.com/uploads/2020/11/21/tcol2pqjmg4982hekhma04s9m7.jpg",
                    url: "https://www.kip.com.tr/kampanyalar/2-urunde-yuzde-50-indirim/"
                  }]
                },
                "3": {
                  
                  imageUrl: img2,
                  text: text2,
                  imageList: [{
                    img: "https://cdn.hellosmpl.com/uploads/2020/11/21/tcol2pqjmg4982hekhma04s9m7.jpg",
                    url: "https://www.kip.com.tr/kampanyalar/2-urunde-yuzde-50-indirim/"
                  }]
                }






              }


              //önemli
              var stories = '<div id="ed_webstories_main" style="width:100%; overflow-x:auto;display:flex;justify-content:center;">\
          <div style="width:auto;white-space:nowrap;  margin: 19px auto;">'

              for (let arr in storyList) {
                stories = stories +
                  '<div id="webstories_' + arr + '" class="story-container ed_web_stories_story" data-img-link="' + arr + '" >\
                <div class="story">\
                    <img src="' + storyList[arr].imageUrl + '">\
                    <svg viewbox="0 0 100 100">\
                    <circle cx="39" cy="39" r="38"/>\
                    </svg>\
                </div>\
                <div class="video-title">' + storyList[arr].text + '</div>\
                </div>'
              }


              stories = stories + '</div>\
          </div>';

              //jQuery('.s-wrap:eq(1)').prepend(stories);
              jQuery(stories).insertAfter(jQuery('#homebannerFull1'))
              //  EightDigits.analytics.sendEvent(config.analytics, "Shown");


              var videoTitle = ''



              jQuery('#ed_webstories_main').on('click', '.ed_web_stories_story', function () {

                //   EightDigits.analytics.sendEvent(config.analytics, "Click");
                console.log(jQuery(this).find('.video-title').text(), 'Click')
                // setLevel(LEVEL_JOIN, 'Click_'+jQuery(this).find('.video-title').text());
                var story_div = jQuery(this);
                story_div.children('.story').children('svg').attr('class', 'loader');
                setTimeout(function () {



                  story_div.children('.story').children('svg').attr('class', '');
                  var listItem = story_div.attr('data-img-link');
                  var imgList = storyList[listItem].imageList;
                  var imgLength = imgList.length;
                  var count = 0;
                  var timeOut;


                  videoTitle = story_div.children('.video-title').text();

                  var player = '\
                          <div id="ed_web_stories_player_cover" style="z-index:9999999;width:100%;height:100%;position:fixed;top:0;background-color:#000;background-image: url(' + imgList[0].img + '); background-position:center 64%; background-repeat: no-repeat; background-size:20%; ">\
                          <div class="smpl-progress" style="position:absolute; top:15%; height: 11px;width: 20%;left: 40%;display:flex;padding-top: 5px;background-color:black;z-index:99999;"></div>\
                          <div style="position:absolute;top:11px;height: 55px;width:100%;background:linear-gradient(to bottom,black,transparent);z-index:999"></div>\
                          <div id="ed_web_stories_controllers" style="position: absolute;width: 100%;height: 100%;top: 0;z-index:999999;">\
                          <div id="ed_web_stories_title_bar" style="position: absolute;width: 20%;top: 8%;height: 3%;left: 10px;z-index:999999;left: 40%;">\
                              <img id="video_image" src="' + storyList[listItem].imageUrl + '" style="width: 25px;height: 25px;border-radius: 100%;display: inline-block;">\
                              <p id="video_title" style="color: #fff;display: inline-block;margin-left: 10px;font-size: 12px;font-weight: 600;">' + videoTitle + '</p>\
                          </div>\
                          <div id="ed_web_stories_close" style="float: right;width: 2%;height: 35px;font-size: 30px;color: #fff;margin-right: 10px;margin-top: 28px;text-align: center;font-weight: bold;cursor:pointer;left: 63%;position: absolute;top: 3%;">x</div>\
                          <div id="ed_web_stories_navigation" style="height: 65%;margin-top: 100px;">\
                              <div id="ed_web_stories_nav_prev" style="height: 100%; width: 40%;float: left;">\
                                  <div class="prev-inner-button" style="position:absolute;width:40px;height:40px;background-image: url(https://cdn.8digits.com/log/r/28968370-af06-45c4-ab13-96b493ed736a.png);background-size:100%;background-position:center;background-repeat: no-repeat;right: 61%;top: 45%;"></div>\
                              </div>\
                              <div id="ed_web_stories_nav_next" style="height: 100%;width: 40%;float: right;">\
                                  <div class="next-inner-button" style="position:absolute;width: 40px;height: 40px;background-image: url(https://cdn.8digits.com/log/r/b6a577fb-b6f6-4f01-a2bc-f119be95def5.png);background-size:100%;background-position:center;background-repeat: no-repeat;top: 45%;left: 61%;"></div>\
                              </div>\
                          </div>\
                          <a href="' + imgList[0].url + '" style="display:block;width: 100%;height: 20%;">\
                          <div id="ed_web_stories_link" style="width: 100%;height: 20%;text-align: center;">\
                          <div class="ed-arrow" style="display: inline-block;width: 45px;height: 45px;border-radius: 100%;opacity: 0.7;">\
                             <div style=" background-image: url(https://cdn.8digits.com/log/r/4a0944aa-8c8a-498b-9d5b-37d3b7a268e1.png); background-position: center; background-repeat: no-repeat;  background-size: 100%; width:100%; height:100%;"></div>\
                          </div>\
                          <p style="width: 100%;text-align: center;position: absolute;color: #fff;margin-top: 6px;font-weight: 600;">Daha Fazlası İçin Tıkla</p>\
                          </div>\
                          </a>\
                          </div>\
                      </div>\
                      ';


                  jQuery('body').append(player);

                  var wdt = (window.innerWidth * 0.95) / imgLength;

                  for (var i = 0; i < imgLength; i++) {
                    var div = '<div class="smpl-progress-bar" style="width:' + wdt + 'px; height:4px; background-color:gray; margin:0 auto; border-radius: 7px; " >\
                                            <div class="smpl-progress-bar-white" style="height:4px;width:0%; background-color:white;border-radius: 7px;"></div>\
                                       </div>'
                    jQuery('.smpl-progress').append(div)

                  }

                  jQuery('.smpl-progress .smpl-progress-bar:eq(0) .smpl-progress-bar-white').animate({
                    width: "100%"
                  }, 1000 * timeInterval);
                  // EightDigits.analytics.sendEvent(config.analytics, "Click");



                  function nextStory() {
                    timeOut = setTimeout(function () {
                      if (count < imgList.length - 1) {
                        jQuery('.smpl-progress-bar-white').stop();
                        jQuery('.smpl-progress-bar-white').css('width', '0%');
                        count++;


                        jQuery('.smpl-progress .smpl-progress-bar:eq(' + count + ') .smpl-progress-bar-white').animate({
                          width: "100%"
                        }, 1000 * timeInterval);
                        jQuery('#ed_web_stories_player_cover').css('background-image', ' url(' + imgList[count].img + ')')
                        jQuery('#video_title').text(videoTitle);
                        nextStory();





                      } else {
                        jQuery('#ed_web_stories_player_cover').remove();
                      }

                    }, 1000 * timeInterval);

                  }
                  nextStory();
                  jQuery('#ed_web_stories_player_cover ').on('click', '#ed_web_stories_nav_prev .prev-inner-button', (function () {
                    clearTimeout(timeOut);

                    jQuery('.smpl-progress-bar-white').stop();
                    jQuery('.smpl-progress-bar-white').css('width', '0%');
                    if (count > 0) {
                      count = count - 1;


                      jQuery('.smpl-progress .smpl-progress-bar:eq(' + count + ') .smpl-progress-bar-white').animate({
                        width: "100%"
                      }, 1000 * timeInterval);
                      jQuery('#ed_web_stories_player_cover').css('background-image', ' url(' + imgList[count].img + ')')

                      jQuery('#video_title').text(videoTitle);
                      nextStory();


                    }
                  }));

                  jQuery('#ed_web_stories_player_cover ').on('click', '#ed_web_stories_nav_next .next-inner-button', (function () {

                    jQuery('.smpl-progress-bar-white').stop();
                    jQuery('.smpl-progress-bar-white').css('width', '0%');
                    clearTimeout(timeOut);
                    if (count < imgList.length - 1) {
                      count++;

                      jQuery('.smpl-progress .smpl-progress-bar:eq(' + count + ') .smpl-progress-bar-white').animate({
                        width: "100%"
                      }, 1000 * timeInterval);
                      jQuery('#ed_web_stories_player_cover').css('background-image', ' url(' + imgList[count].img + ')')

                      jQuery('#video_title').text(videoTitle);
                      nextStory();
                    } else {
                      jQuery('#ed_web_stories_player_cover').remove();
                    }
                  }));


                  jQuery('#ed_web_stories_player_cover').on('click', '#ed_web_stories_close', (function () {
                    clearTimeout(timeOut);

                    jQuery('.smpl-progress-bar-white').stop();
                    jQuery('.smpl-progress-bar-white').css('width', '0%');
                    jQuery('#ed_web_stories_player_cover').remove();
                  }));
                }, 1000);

              });
            },
            init: function () {

              main.factory.prototype.start();
            }
          };

          function boot() {
            return main.factory.prototype.init();
          };

          boot();


        } else {
          // replace changes
        }
      }
    });
  });
}
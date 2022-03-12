   console.log('start trigger');
    var dottedSpinnerCss = '<style>.story-container{\
        display:inline-block;\
        width:79px;\
        vertical-align:top;\
        \
      }\
      .story-container .video-title{\
        margin-top: -20px;\
        width: 79px;\
        text-align: center;\
        white-space: normal;\
        font-size: 11px;\
        line-height: 12px;\
      }\
      .story {\
        position:relative;\
        width:100px;\
        height:100px;\
        overflow:hidden;\
      }\
      .story img {\
        width:70px;\
        height:70px;\
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
      @keyframes loading {\
        100% {\
          stroke:#EA424E;\
          stroke-dasharray:4px,6px;\
          transform:rotate(180 115 115);\
        }\
      }\
      </style>';
    jQuery('head').append(dottedSpinnerCss);

    var insertElement = '#divCenterBlock';
    var elemSize = '50px;';

    var campaigns = [
      {
        text: "%50’ye Varan Sezon İNDİRİMİ",
        imgSmall: "https://cdn.hellosmpl.com/uploads/2021/07/30/4cvapdqni5sn37q5t1r4rbki5t.jpg",
        imgBig: "https://cdn.hellosmpl.com/uploads/2021/07/30/dkrmfu3gocm49ia2e397jgnsls.jpg",
        url: "https://www.ramsey.com.tr/yeni-sezon/"
      },
      {
        text: "BEST SELLER",
        imgSmall: "https://cdn.hellosmpl.com/uploads/2021/05/07/gnif1bigr7iamqt4puspmdd0dm.jpg",
        imgBig: "https://cdn.hellosmpl.com/uploads/2021/05/07/abk00k1cd1837gp5ird59qnug1.jpg",
        url: "https://www.ramsey.com.tr/kampanyalar/best-sellers/"
      },
      {
        text: "İNDİRİMDEKİ ÜRÜNLER",
        imgSmall: "https://cdn.hellosmpl.com/uploads/2021/05/07/r4kvvafpe99dbhmisdfuuhje82.jpg",
        imgBig: "https://cdn.hellosmpl.com/uploads/2021/05/07/qr3dmg74vhs77agsp7c1heujpg.jpg",
        url: "https://www.ramsey.com.tr/indirimli-urunler/"
      },
      {
        text: "FIRSAT ÜRÜNLERİ",
        imgSmall: "https://cdn.hellosmpl.com/uploads/2021/04/16/muqulcmemjb7fdvlqrjgr00h00.jpg",
        imgBig: "https://cdn.hellosmpl.com/uploads/2021/04/16/iarnbmjqehenfubsh1g8nohc8m.jpg",
        url: "https://www.ramsey.com.tr/kampanyalar/firsat-urunleri/"
      },
      {
        text: "2 Ürün 249 TL",
        imgSmall: "https://cdn.hellosmpl.com/uploads/2021/07/05/f7hkvtv18g6ahsb2i7qsemnion.jpg",
        imgBig: "https://cdn.hellosmpl.com/uploads/2021/07/05/8gkf7ic7dr7qs485frtaiv5t8m.jpg",
        url: "https://www.ramsey.com.tr/kampanyalar/2-urun-249-tl/"
      },
    ]
    var stories = '<div id="ed_webstories_main" style="width:100%; overflow-x:auto;">\
      <div style="width:auto;white-space:nowrap;height:110px;margin-top: 9px;">'

    for (var i = 0; i < campaigns.length; i++) {
      stories = stories + '\
           <div id="webstories_'+ i + 1 + '" class="story-container ed_web_stories_story" data-img-link="' + campaigns[i].imgBig + '" data-video-link="' + campaigns[i].url + '">\
          <div class="story">\
            <img src="' + campaigns[i].imgSmall + '">\
            <svg viewbox="0 0 100 100">\
              <circle cx="39" cy="39" r="38"/>\
            </svg>\
          </div>\
          <div class="video-title">' + campaigns[i].text + '</div>\
        </div>'

    }

    stories = stories + '</div></div>';
    jQuery('#Home').prepend(stories);


    var videoImg = ''
    var videoTitle = ''
    var videoLink = ''
    var story_div;
    var bigImgURL;
    var videoUrl;
    jQuery('#ed_webstories_main').on('click', '.ed_web_stories_story', function () {

      //setLevel(LEVEL_JOIN, 'Click_' + jQuery(this).find('.video-title').text());

      story_div = jQuery(this);
      story_div.children('.story').children('svg').attr('class', 'loader');
      setTimeout(function () {
        story_div.children('.story').children('svg').attr('class', '');
        bigImgURL = story_div.attr('data-img-link');
        videoLink = story_div.attr('data-video-link');
        videoImg = story_div.children('.story').children('img').attr('src');
        videoTitle = story_div.children('.video-title').text();

        var player = '\
                  <div id="ed_web_stories_player_cover" style="z-index:99999999999;width:100%;height:100%;position:fixed;top:0;background-color:#000">\
                      <img id="webstories_smpl" style="width:100%;height: 100%;background-repeat: round;"/>\
                      <div class="smpl-progress" style="position:absolute; top:15%; height: 11px;width: 20%;left: 40%;display:flex;padding-top: 5px;z-index:99999;"></div>\
                      <div id="ed_web_stories_controllers" style="position: absolute;width: 100%;height: 100%;top: 0;">\
                      <div id="ed_web_stories_title_bar" style="position: absolute;width: 80%;top: 10px;height: 10%;left: 10px;">\
                      <img id="video_image" src="'+ videoImg + '" style="width: 40px;height: 40px;border-radius: 100%;display: inline-block;">\
                      <p id="video_title" style="color: #fff;display: inline-block;margin-left: 10px;font-size: 15px;font-weight: 600;">'+ videoTitle + '</p>\
                      </div>\
                      <div id="ed_web_stories_close" style="float: right;width: 10%;height: 35px;font-size: 22px;color: #dab07c;text-align: right;margin-right: 10px;">x</div>\
                      <div id="ed_web_stories_navigation" style="height: 70%;margin-top: 100px;">\
                      <div id="ed_web_stories_nav_prev" style="height: 100%; width: 40%;float: left;"></div>\
                      <div id="ed_web_stories_nav_next" style="height: 100%;width: 60%;float: right;"></div>\
                      </div>\
                      <div id="ed_web_stories_link" style="width: 100%;height: 20%;text-align: center;">\
                      <a href="'+ videoLink + '">\
                      <span style="display: inline-block;width: 45px;height: 45px;border-radius: 100%;background: #fff;opacity: 0.8;">\
                      <i class="arrow up" style="border: solid #636c72;border-width: 0px 5px 5px 0;display: inline-block;padding: 10px;transform: rotate(-135deg);-webkit-transform: rotate(-135deg);margin-top: 14px;"></i>\
                      </span>\
                      <p style="width: 100%;text-align: center;position: absolute;color: #dab07c;margin-top: 6px;font-weight: 600;">Daha Fazlası İçin Tıkla</p>\
                      </a>\
                      </div>\
                      </div>\
                  </div>\
                  ';


        jQuery('body').append(player);
       // setLevel(LEVEL_JOIN, 'shown-stories');

        jQuery('#ed_web_stories_player_cover').on('click', '#ed_web_stories_nav_prev', (function () {
          if (story_div.prev().length > 0) {
            story_div = story_div.prev();
            videoUrl = story_div.attr('data-img-link');
            videoImg = story_div.children('.story').children('img').attr('src');
            videoTitle = story_div.children('div').text();
            jQuery('#webstories_smpl').attr('src', videoUrl);
            jQuery('#webstories_smpl').load();
            jQuery('#video_title').text(videoTitle);
            jQuery('#video_image').attr('src', videoImg);
          }
        }));

        jQuery('#ed_web_stories_player_cover').on('click', '#ed_web_stories_nav_next', (function () {
          if (story_div.next().length > 0) {
            story_div = story_div.next();
            videoUrl = story_div.attr('data-img-link');
            videoLink = story_div.attr('data-video-link');
            videoImg = story_div.children('.story').children('img').attr('src');
            videoTitle = story_div.children('div').text();
            jQuery('#webstories_smpl').attr('src', videoUrl);
            jQuery('#webstories_smpl').load();
            jQuery('#video_title').text(videoTitle);
            jQuery('#video_image').attr('src', videoImg);
          }
        }));

        jQuery('#ed_web_stories_player_cover').on('click', '#ed_web_stories_close', (function () {
          jQuery('#ed_web_stories_player_cover').remove();
        }));
      }, 1000);
      var timeInterval = 5;
      var count = 0;
      var imgList = campaigns;
      var imgLength = imgList.length;
      var wdt = (window.innerWidth * 0.95) / imgLength;

      for (var i = 0; i < imgLength; i++) {
        var div =
          '<div class="smpl-progress-bar" style="width:' +
          wdt +
          'px; height:4px; background-color:gray; margin:0 auto; border-radius: 7px; " >\
                            <div class="smpl-progress-bar-white" style="height:4px;width:0%; background-color:white;border-radius: 7px;"></div>\
                       </div>';
        jQuery(".smpl-progress").append(div);
      }

      jQuery(
        ".smpl-progress .smpl-progress-bar:eq(0) .smpl-progress-bar-white"
      ).animate({ width: "100%" }, 1000 * timeInterval);
      function nextStory() {
        timeOut = setTimeout(function () {
          if (count < imgList.length - 1) {
            jQuery(".smpl-progress-bar-white").stop();
            jQuery(".smpl-progress-bar-white").css("width", "0%");
            count++;

            jQuery(
              ".smpl-progress .smpl-progress-bar:eq(" +
              count +
              ") .smpl-progress-bar-white"
            ).animate({ width: "100%" }, 1000 * timeInterval);
            jQuery("#webstories_smpl").css(
              "background-image",
              " url(" + imgList[count].imgBig + ")"
            );
            jQuery("#video_title").text(videoTitle);
            nextStory();
          } else {
            jQuery("#ed_web_stories_player_cover").remove();
          }
        }, 1000 * timeInterval);
      }
      nextStory();
    });
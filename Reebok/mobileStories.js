var dottedSpinnerCss = '<style>.story-container{\
  display:inline-block;\
  width:79px;\
  vertical-align:top;\
  margin-right: 5px;\
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
  width:103px;\
  height:100px;\
  overflow:hidden;\
}\
.story img {\
  width:75px;\
  height:75px;\
  border-radius:50%;\
  position:absolute;\
  top:40%;\
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
  text: "Nano X1",
  imgSmall: "https://cdn.hellosmpl.com/uploads/2021/03/09/5fml5k0ln7co4m7opjcfdp02v4.jpg",
  imgBig: "https://cdn.hellosmpl.com/uploads/2021/03/09/3bc9fuup90dn2bi6oilqv0l6ec.jpg",
  url: "https://www.reebok.com.tr/nano-x1"
},
{
  text: "Zig Dynamica",
  imgSmall: "https://cdn.hellosmpl.com/uploads/2021/03/09/r55c1kagdvi7j462hmhjgugvdb.jpg",
  imgBig: "https://cdn.hellosmpl.com/uploads/2021/03/09/rlda74lvfs5qldara9fkakm5mv.jpg",
  url: "https://www.reebok.com.tr/zig-dynamica"
},
{
  text: "Maison Margiela",
  imgSmall: "https://cdn.hellosmpl.com/uploads/2021/03/09/6durmpig27lp9mt6uk7p476qvo.jpg",
  imgBig: "https://cdn.hellosmpl.com/uploads/2021/03/09/nsiqtmpb7pf2r2mch83bade8b8.jpg",
  url: "https://www.reebok.com.tr/ozel-koleksiyonlar"
},
{
  text: "Outlet",
  imgSmall: "https://cdn.hellosmpl.com/uploads/2021/03/09/acjka9jqqrffqnqafblubor0jv.jpg",
  imgBig: "https://cdn.hellosmpl.com/uploads/2021/03/09/an7gq7jiqccq99pmieb7u5e18c.jpg",
  url: "https://www.reebok.com.tr/indirim"
},
]








var stories = '<div id="ed_webstories_main" style="width:100%; overflow-x:auto;">\
<div style="width:auto;white-space:nowrap;height:110px;margin-top: 9px;display:flex;justify-content:center;">'

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
jQuery(".rb-cont-doubler.rb-cont-flexer.free-image").before(stories);


var videoImg = ''
var videoTitle = ''
var videoLink = ''
var story_div;
var bigImgURL;
var videoUrl;
jQuery('#ed_webstories_main').on('click', '.ed_web_stories_story', function () {

// setLevel(LEVEL_JOIN, 'Click_' + jQuery(this).find('.video-title').text());

story_div = jQuery(this);
story_div.children('.story').children('svg').attr('class', 'loader');
setTimeout(function () {
  story_div.children('.story').children('svg').attr('class', '');
  bigImgURL = story_div.attr('data-img-link');
  videoLink = story_div.attr('data-video-link');
  videoImg = story_div.children('.story').children('img').attr('src');
  videoTitle = story_div.children('.video-title').text();

  var player = '\
            <div id="ed_web_stories_player_cover" style="z-index:9999999;width:100%;height:100%;position:fixed;top:0;background-color:#000">\
                <img id="webstories_smpl" src="'+ bigImgURL + '" style="width:100%;"/>\
                <div id="ed_web_stories_controllers" style="position: absolute;width: 100%;height: 100%;top: 0;">\
                <div id="ed_web_stories_title_bar" style="position: absolute;width: 80%;top: 10px;height: 10%;left: 10px;">\
                <img id="video_image" src="'+ videoImg + '" style="width: 40px;height: 40px;border-radius: 100%;display: inline-block;">\
                <p id="video_title" style="color: #fff;display: inline-block;margin-left: 10px;font-size: 15px;font-weight: 600;">'+ videoTitle + '</p>\
                </div>\
                <div id="ed_web_stories_close" style="float: right;width: 10%;height: 35px;font-size: 22px;color: #fff;text-align: right;margin-right: 10px;cursor:pointer;">x</div>\
                <div id="ed_web_stories_navigation" style="height: 70%;margin-top: 100px;">\
                <div id="ed_web_stories_nav_prev" style="height: 100%; width: 40%;float: left;"></div>\
                <div id="ed_web_stories_nav_next" style="height: 100%;width: 60%;float: right;"></div>\
                </div>\
                <div id="ed_web_stories_link" style="width: 100%;height: 20%;text-align: center;">\
                <a href="'+ videoLink + '">\
                <span style="display: inline-block;width: 45px;height: 45px;border-radius: 100%;background: #fff;opacity: 0.8;">\
                <i class="arrow up" style="border: solid #636c72;border-width: 0px 5px 5px 0;display: inline-block;padding: 10px;transform: rotate(-135deg);-webkit-transform: rotate(-135deg);margin-top: 14px;"></i>\
                </span>\
                <p style="width: 100%;position: relative;color: #fff;margin-top: 6px;font-weight: 600;display:flex;justify-content:center;">Daha Fazlası İçin Tıkla</p>\
                </a>\
                </div>\
                </div>\
            </div>\
            ';


  jQuery('body').append(player);


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

});
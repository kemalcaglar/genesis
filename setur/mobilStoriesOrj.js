
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Desktop_Story_Category")) {
        return false
    }
    EightDigits.sf.prototype.Desktop_Story_Category = function () {

        var config = {
            scenarioname: "Desktop_Story_Category",
            analytics: "desktopStories",
            tag:"",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };

        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },

            userTagger:function(){
                 var rnd = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));

                 if(rnd < 5000){
                     config.tag = "Top_Version"
                 }
                 else{
                     config.tag = "Bottom_Version"
                 }

            },
            start: function () {


                main.factory.prototype.userTagger();
                var dottedSpinnerCss = '<style>.story-container{\
                    display:inline-block;\
                    width:79px;\
                    vertical-align:top;\
                    margin-left:10px;\
                    cursor:pointer;\
                    \
                    }\
                    .story-container .video-title{\
                    margin-top: -20px;\
                    width: 63px;\
                    margin-left: 8px;\
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
                    ::-webkit-scrollbar {\
                        width: 0px;  \
                        background: transparent;  \
                    }\
                    .story svg {\
                    fill:none;\
                    stroke:#EE3342;\
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
                    stroke:#EE3342;\
                    stroke-dasharray:4px,6px;\
                    transform:rotate(180 115 115);\
                    }\
                    }\
                    </style>';
                jQuery('head').append(dottedSpinnerCss);

                var insertElement = '#divCenterBlock';
                var elemSize = '50px;';

                var campaigns = [{
                        text: "Kemer Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/a75a48f7-a51b-4a32-bc17-996ae259e56d.png",
                        imgBig: "",
                        url: ""

                    },
                    {

                        text: "Diledi??in Gibi ??de!",
                        imgSmall: "//cdn.8digits.com/log/r/76dfff79-8fb2-495a-9cf0-eddbf774d1ab.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/diledigin-odeme-seklini-sec?true&ref=story"

                    },
                    {
                    
                        text: "Bayram F??rsatlar??",
                        imgSmall: "//cdn.8digits.com/log/r/e8e89657-0199-4ae9-8505-8e164193c72b.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/bayram-otelleri?true&ref=story"
                  
                    },
                    {

                        text: "??stanbul'a Yak??n Oteller",
                        imgSmall: "//cdn.8digits.com/log/r/d3f70000-376a-447d-90f4-a378efe5227a.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/istanbul-a-yakin-oteller?true&ref=story"

                    },
                    {

                      text: "Termal Oteller",
                      imgSmall: "//cdn.8digits.com/log/r/a0e3a4fa-8cad-41bd-bfe0-848f28d8a3a6.png",
                      imgBig: "",
                      url: "https://www.setur.com.tr/termal-oteller?true&ref=story"
                    },
                    {

                        text: "Balay?? Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/6ccbb798-2362-4896-a4a1-5577eaef4940.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/balayi-otelleri?true&ref=story"
                    
                    },
                    {
                        text: "Mavi Yolculuk",
                        imgSmall: "//cdn.8digits.com/log/r/9be9e73c-8334-4011-8b19-33f381575448.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/mavi-yolculuk?true&ref=story"
                    },
                    {
                        text: "Bodrum Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/234d820e-3723-41bd-90b3-9fcd4769f116.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/bodrum-otelleri?ref=story"
                    },
                    {
                      text: "Belek Otelleri",
                      imgSmall: "//cdn.8digits.com/log/r/929f4e28-3888-4b03-9a50-b584c8a62478.png",
                      imgBig: "",
                      url: "https://www.setur.com.tr/belek-otelleri?true&ref=story"
                        
                    },                    
                ]



                var stories = '<div id="ed_webstories_main" style="width:100%; overflow-x:auto;">\
                                    <div style="width:auto;white-space:nowrap;height:115px;margin-top: 9px; margin-left:5px;">'

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
              

               
                jQuery("#Hotel-List-Container").before(stories);
               
                //EightDigits.analytics.sendEvent(config.analytics,'Shown'+config.tag);


                var videoImg = ''
                var videoTitle = ''
                var videoLink = ''
                var story_div;
                var bigImgURL;
                var videoUrl;
                /*jQuery('#ed_webstories_main').on('click', '.ed_web_stories_story', function () {

                       var text = jQuery(this).find('.video-title').text();
                       EightDigits.analytics.sendEvent(config.analytics,'Click_'+text+'_'+config.tag);
                       window.location.href = jQuery(this).attr('data-video-link');
                });*/
              jQuery(".video-title").eq(3).css({"width":"85%"})
              jQuery(".story-container").each(function(){
                 if(jQuery(this).find(".video-title").text().trim() == "Kemer Otelleri"){
                    jQuery(this).click(function(){
                        console.log("evet")
                        jQuery("#filter-destination li div").each(function(){
                            if(jQuery(this).find("label").text().trim().split(" ")[0].trim() == "Kemer"){
                           jQuery(this).find(".i-check").trigger("click");
                           }
                           })
                    })
                  }
              })

            },
            control: function () {

            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                    return false;
                }
                main.factory.prototype.start();
            }
        };

        boot = function () {
            return main.factory.prototype.init();
        };

        boot();

    };
    var _ed_Desktop_Story_Category = new EightDigits.sf();
    _ed_Desktop_Story_Category.Desktop_Story_Category();
})();
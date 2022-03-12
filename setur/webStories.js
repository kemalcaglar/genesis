(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Mobil_Story")) {
        return false
    }
    EightDigits.sf.prototype.Mobil_Story = function () {

        var config = {
            scenarioname: "Mobil_Story",
            analytics: "mobilStoriesABTest",
            tag: "",
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

            userTagger: function () {
                var rnd = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));

                if (rnd < 5000) {
                    config.tag = "Top_Version"
                } else {
                    config.tag = "Bottom_Version"
                }

            },
            start: function () {


                main.factory.prototype.userTagger();
                console.log('start trigger');
                var dottedSpinnerCss = '<style>.story-container{\
                    display:inline-block;\
                    width:79px;\
                    vertical-align:top;\
                    \
                    }\
                    .story-container .video-title{\
                    margin-top: -20px;\
                    width: 67px;\
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
                    }\
                    }\
                    </style>';
                jQuery('head').append(dottedSpinnerCss);

                var insertElement = '#divCenterBlock';
                var elemSize = '50px;';

                var campaigns = [
                    {
                        text: "Tam Tatil Zamanı",
                        imgSmall: "//cdn.8digits.com/log/r/7f79ec2a-28a9-4387-90f2-083e4c50dad3.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/yaz-firsatlari?true&ref=story"

                    },
                    {
                        text: "Dilediğin Gibi Öde!",
                        imgSmall: "//cdn.8digits.com/log/r/b99be29b-3150-481a-9a46-18b7548cbb60.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/diledigin-odeme-seklini-sec?true&ref=story"

                    },
                    {
                        text: "İstanbul'a Yakın Oteller",
                        imgSmall: "//cdn.8digits.com/log/r/f71f00e9-8f51-4ab8-90e8-c2ef49f15856.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/istanbul-a-yakin-oteller?ref=story"
                    },
                    {
                        text: "Kıbrıs Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/4ee79849-ee55-4603-adc6-a7137d23b791.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/kibris-otelleri?true&ref=story"

                    },
                    {
                        text: "Termal Oteller",
                        imgSmall: "//cdn.8digits.com/log/r/3f244611-97cf-4e8d-8e13-a3c52f1e5dee.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/termal-oteller?true&ref=story"

                    },
                    {

                        text: "Kayak Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/6e4c91ae-ab8a-4608-abbb-1b70aa3eac08.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/kayak-otelleri?true&ref=story"

                    },
                    {

                        text: "Kapadokya Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/6ac11865-75d7-4b7a-b104-522ac9514f30.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/kapadokya-otelleri?true&ref=story"
                    },
                    {

                        text: "Bodrum Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/249bab46-0f9b-40a5-a9c9-aa158d632a0e.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/bodrum-otelleri?true&ref=story"

                    },
                    {
                        text: "Belek Otelleri",
                        imgSmall: "//cdn.8digits.com/log/r/199267b6-f72e-4b6f-b4d8-cbcc2c21ac4e.png",
                        imgBig: "",
                        url: "https://www.setur.com.tr/belek-otelleri?true&ref=story"
                    }

                ]


                var stories = '<div id="ed_webstories_main" style="width:100%; overflow-x:auto;">\
                                    <div style="width:auto;white-space:nowrap;height:115px;margin-top: 9px; margin-left:15px;">'

                for (var i = 0; i < campaigns.length; i++) {
                    stories = stories + '\
                                                    <div id="webstories_' + i + 1 + '" class="story-container ed_web_stories_story" data-img-link="' + campaigns[i].imgBig + '" data-video-link="' + campaigns[i].url + '">\
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


                jQuery('.bg-holder.full').before(stories);

                EightDigits.analytics.sendEvent(config.analytics, 'Shown' + config.tag);


                var videoImg = ''
                var videoTitle = ''
                var videoLink = ''
                var story_div;
                var bigImgURL;
                var videoUrl;
                jQuery('#ed_webstories_main').on('click', '.ed_web_stories_story', function () {

                    var text = jQuery(this).find('.video-title').text();
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_' + text + '_' + config.tag);
                    window.location.href = jQuery(this).attr('data-video-link');
                });
                jQuery(".video-title").eq(3).css({"width": "85%"})
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
    var _ed_Mobil_Story = new EightDigits.sf();
    _ed_Mobil_Story.Mobil_Story();
})();




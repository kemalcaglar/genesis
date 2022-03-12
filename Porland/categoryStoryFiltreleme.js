var dottedSpinnerCss = '<style>.story-container{\
                    display:inline-block;\
                    width:120px;\
                    vertical-align:top;\
                    \
                    }\
                    .story-container .video-title{\
                    margin-top: -15px;\
                    width: 100px;\
                    margin-left: -10px;\
                    text-align: center;\
                    white-space: normal;\
                    font-size: 12px;\
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
                    object-fit: cover;\
                    }\
                    ::-webkit-scrollbar {\
                        width: 0px;  \
                        background: transparent;  \
                    }\
                    .story svg {\
                    fill:none;\
                    stroke:#b9b9b9;\
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
                    stroke:#b9b9b9;\
                    stroke-dasharray:4px,6px;\
                    }\
                    }\
                    </style>';
jQuery('head').append(dottedSpinnerCss);


var campaigns = [
    {
        text: "6 Kişilik Yemek Takımları",
        imgSmall: "https://stn-porland.mncdn.com/mnresize/400/400/Content/media/ProductImg/original/637333557322208308.jpg?v=r1n1d5",
        url: "https://www.porland.com/sofra/yemek-takimlari?t=3489"

    },
    {
        text: "12 Kişilik Yemek Takımları",
        imgSmall: "https://stn-porland.mncdn.com/mnresize/400/400/Content/media/ProductImg/original/637309273618615358.jpg?v=r1n1d5",
        url: "https://www.porland.com/sofra/yemek-takimlari?t=3488"
    },
    {
        text: "24 Parça Yemek Takımları",
        imgSmall: "https://stn-porland.mncdn.com/mnresize/400/400/Content/media/ProductImg/original/637305317221153852.jpg?v=r1n1d5",
        url: "https://www.porland.com/sofra/yemek-takimlari?t=3499"

    },
    {
        text: "27 Parça Yemek Takımları",
        imgSmall: "https://stn-porland.mncdn.com/mnresize/400/400/Content/media/ProductImg/original/637477716197741912.jpg?v=r1n1d5",
        url: "https://www.porland.com/sofra/yemek-takimlari?t=12494"
    },
    {
        text: "60 Parça Yemek Takımları",
        imgSmall: "https://stn-porland.mncdn.com/mnresize/400/400/Content/media/ProductImg/original/637471853758920413.jpg?v=r1n1d5",
        url: "https://www.porland.com/sofra/yemek-takimlari?t=4177"

    },
]


var stories = '<div class="col-lg-12 flex-wrap"><div id="smpl-stories" style="width:100%; overflow-x:auto;height: 150px;">\
                                    <div style="width:auto;white-space:nowrap;height:115px;margin-top: 9px; margin-left:15px;justify-content: center;text-align: center;\
    align-items: center;">'

for (var i = 0; i < campaigns.length; i++) {
    stories = stories + '\
                                                    <div id="smpl-stories_' + i + 1 + '" class="story-container" data-video-link="' + campaigns[i].url + '">\
                                                    <a href="' + campaigns[i].url + '">\
                                                    <div class="story">\
                                                    <img src="' + campaigns[i].imgSmall + '">\
                                                    <svg viewbox="0 0 100 100">\
                                                        <circle cx="39" cy="39" r="38"/>\
                                                    </svg>\
                                                    </div>\
                                                    <div class="video-title">' + campaigns[i].text + '</div>\
                                                    </a>\
                                                    </div>'

}

stories = stories + '</div></div></div>';


jQuery('.product-list').prepend(stories);
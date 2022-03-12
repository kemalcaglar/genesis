(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Zeynep_Hotel_Banner_Mobile")) {
        return false
    }
    EightDigits.sf.prototype.Zeynep_Hotel_Banner_Mobile = function () {
        var config = {
            scenarioname: "Zeynep_Hotel_Banner_Mobile",
            analytics: "Zeynep_Hotel_Banner_Mobile",
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
            start: function () {
                var css = '<style>\
                .zeynep-tooltip-area{position: relative; float: left; margin-right: 20px;}\
                .smpl-tooltips{display: none; padding: 10px; background: #555; border-radius: 10px; color: #c4c4c4; position: absolute; bottom: -123px; box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.1);animation:one 1s;-webkit-animation:one 1s;-moz-animation:one 1s;-o-animation:one 1s;-ms-animation:one 1s;}\
                @keyframes one{from {opacity:0;}to {opacity:1;}}\
                @-webkit-keyframes one {from {opacity:0;}to {opacity:1;}}\
                @-moz-keyframes one {from {opacity:0;}to {opacity:1;}}\
                @-o-keyframes one {from {opacity:0;}to {opacity:1;}}\
                @-ms-keyframes one {from {opacity:0;}to {opacity:1;}}\
                </style>'
                jQuery('head').append(css);
                jQuery('head').append(css);
                var html = '<div id="smpl-banner zeynep-tooltip-area" style="position:relative;">\
                <span class="smpl-tooltips" style="\
                z-index: 999;\
                width: 98%;\
                margin-left: -3px;\
            ">\
                01.04.2021 – 31.05.2021 tarihlerini kapsayacak konaklamalarda 2 Yetişkin yanında 2. çocuk (0-11,99 yaş) ücretsiz hesaplanacaktır.\
                Bu fırsat “Golf Standart” ve “Resort Bungalow Standart” oda tipleri için geçerlidir.</span>\
                <i class="fas fa-info-circle fa-2x smpl-zeynep-button" style="\
                position: absolute;\
                margin-left: 5px;\
                margin-top: 96px;\
                color: #fefefe;\
                border-radius: 7px;\
                border: 3px solid #223b81;\
                background: #223b81;\
                "></i>\
                <div class="smpl-arrow-top" style="display: none;z-index: 999999;width: 0;\
                height: 0;\
                bottom: -12px;\
                position:relative;\
                margin-left: 14px;\
                border-top: 10px solid transparent;\
                border-bottom: 10px solid transparent;\
                border-left: 10px solid #555!important;\
                -webkit-transform: rotate(-90deg);\
                position: absolute;"></div>\
                <img src="https://cdn.8digits.com/log/r/33150a91-4955-48fc-83de-22b1917141d8.png">\
                </div>\
                '
                jQuery(".content-partial-shadow").eq(4).after(html);
                EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
                jQuery(".smpl-zeynep-button").click(function(){
                    jQuery(".smpl-tooltips").css({"display":"block"})
                    jQuery(".smpl-arrow-top").css({"display":"block"})
                    EightDigits.analytics.sendEvent(config.analytics, "shown-tooltip");
                })
                jQuery( ".smpl-zeynep-button" ).click(function(event){
                    event.stopPropagation();
                  });
                jQuery("body").click(function(){
                    jQuery(".smpl-tooltips").css({"display":"none"})
                    jQuery(".smpl-arrow-top").css({"display":"none"})
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
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                    }
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
    var _ed_Zeynep_Hotel_Banner_Mobile = new EightDigits.sf();
    _ed_Zeynep_Hotel_Banner_Mobile.Zeynep_Hotel_Banner_Mobile();
  })();
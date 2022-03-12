(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("hotelListingCancelBar")) {
        return false
    }
    EightDigits.sf.prototype.hotelListingCancelBar = function () {
  
        var config = {
            scenarioname: "hotelListingCancelBar",
            analytics: "72Saate_Kadar_Iptal_Banner_Listeleme",
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
                css = '<style>\
                .ed_'+ config.scenarioname + '_smpl-tooltip{position: absolute;width: 250px;right: 0;margin-top: -215px;border-radius: 6px;padding: 4px 5px;background-color: #555!important;z-index:999999;display:none;}\
                .ed_'+ config.scenarioname + '_smpl-tooltip_inner{text-align: center; font-size:12px; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;color: #c4c4c4!important }\
                .ed_'+ config.scenarioname + '_smpl-tooltip_inner .rule{padding:2px;}\
                .smpl-arrow-right{width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 3%;margin-top: -112px;display:none;transform: rotate(90deg);-webkit-transform: rotate(90deg);}\
        </style>'
        jQuery('head').append(css)
                jQuery('#Hotel-List-Container ul li:eq(1)').after('<div class="ed-cancelInfoMain"><div id="ed-cancelInfo" style="width: 100%;margin-bottom: 20px;"><img src="https://cdn.8digits.com/log/r/3f277b2a-1fa1-4b4e-b3e1-8a0c2e677f39.jpeg"></div><div class="smpl-arrow-right"></div>\
                <div class="ed_'+ config.scenarioname + '_smpl-tooltip">\
                    <div class="ed_'+ config.scenarioname + '_smpl-tooltip_inner">\
                            <div class="rule">İptal iade güvencesini satın alırsanız konaklamanıza 72 saat kalana kadar yapacağınız iptallerde, kesintisiz iade güvencesine sahip olursunuz.</div>\
                    </div>\
                </div></div>');
                EightDigits.analytics.sendEvent(config.analytics, "Shown");
  
                 jQuery('.ed-cancelInfoMain').mouseover(function () {
                     jQuery('.smpl-arrow-right').css('display', 'none');
                     jQuery('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'none');
                     jQuery(this).find('.smpl-arrow-right').css('display', 'block');
                     jQuery(this).find('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'block');
                 });
                 jQuery('.ed-cancelInfoMain').mouseout(function () {
                     jQuery('.smpl-arrow-right').css('display', 'none');
                     jQuery('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'none');
                 });
            },
            control: function () {
                if(jQuery('#Hotel-List-Container').length === 0){
                    return false;
                }
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
    var _ed_hotelListingCancelBar = new EightDigits.sf();
    _ed_hotelListingCancelBar.hotelListingCancelBar();
  })();
  
  
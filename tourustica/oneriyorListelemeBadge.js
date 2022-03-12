(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Touristica_Oneriyor_Badge")) {
        return false;
    }
    EightDigits.sf.prototype.Touristica_Oneriyor_Badge = function () {

        var config = {
            scenarioname: "Touristica_Oneriyor_Badge",
            analytics: "Touristica_Oneriyor_Badge",
            controlgroup: 0
        };

        var hotelList = [
            3214,
            3213,
            3456,
            610,
            1062,
            1195,
            764,
            3221,
            3217,
            3218,
            3219,
            3220,
            3216,
            3227,
            3229,
            670,
            3353,
            3385,
            3457,
            3472,
            1984,
            1983,
            3455,
            3240,
            1330,
            3241,
            3446,
            3459,
            836,
            1242,
            1058,
            3453,
            833,
            3454,
        ];

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

                var html = "<div class='smpl-touristica-oneriyor' ><img src='https://cdn.8digits.com/log/r/a7c5a7d4-2591-4568-803f-f1d7a02d9134.png'><div class='smpl-touristica-oneriyor-text'>Touristica Öneriyor</div></div>";

                if (window.innerWidth > 1023) {

                    var style = "\
<style>\
.smpl-touristica-oneriyor{\
  position:relative;\
  display:inline-block;\
  top:-2px;\
}\
.smpl-touristica-oneriyor-text{\
  position:absolute;\
  background-color:#FFA51C;\
  color:white;\
  top:-7px;\
  left: 26px;\
  width:155px;\
  display:none;\
  padding:10px 9px;\
  font-size:14px;\
}\
.smpl-touristica-oneriyor-text:after{\
  content:'';\
  position:absolute;\
  width: 13px;\
  height: 16px;\
  background:#FFA51C;\
  left: -4px;\
  top: 9px;\
  transform: rotate(45deg);\
}\
.smpl-touristica-oneriyor:hover .smpl-touristica-oneriyor-text{\
display:block;\
}\
</style>";

                    jQuery('head').append(style);
                    jQuery('.hotel-cell-row').map(function (index) {
                        var id = dataLayer[0].HotelIDList[index];
                        if ((hotelList.includes(id))) {
                            jQuery(this).find('.hotel-name').append(html);
                            if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                                EightDigits.analytics.sendEvent(config.analytics, "Shown_Desktop");
                                EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
                            }
                        }
                    });
                    jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
                        if (e.target.parentElement.className === "hotel-name") {
                            if (jQuery(this).parent().parent().parent().parent().find(".smpl-touristica-oneriyor").length > 0) {
                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");
                            }
                        }
                        if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
                            if (jQuery(this).parent().parent().parent().find(".smpl-touristica-oneriyor").length > 0) {
                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");

                            }
                        }
                    });
                    jQuery('.hotel-image-wrapper').click(function (e) {
                        if (e.target.className === "lazy") {
                            if (jQuery(this).parent().parent().find(".smpl-touristica-oneriyor").length > 0) {
                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");
                            }
                        }
                    });
                    jQuery(".smpl-touristica-oneriyor").hover(function () {
                        if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname + '_hover') === null) {
                            EightDigits.analytics.sendEvent(config.analytics, "Hover_Badge_Desktop");
                            EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname + '_hover', 'on');
                        }
                    });
                }
                else {


                    var style = "\
              <style>\
              .smpl-touristica-oneriyor{\
                  position:relative;\
                  display:block;\
                  top:0px;\
                  width:32px;\
              }\
              .smpl-touristica-oneriyor-text{\
                  position:absolute;\
                  background-color:#FFA51C;\
                  color:white;\
                  top:-1px;\
                  left: 26px;\
                  width:155px;\
                  padding:5px 9px;\
                  font-size:14px;\
              }\
              .smpl-touristica-oneriyor-text:after{\
                  content:'';\
                  position:absolute;\
                  width: 13px;\
                  height: 15px;\
                  background:#FFA51C;\
                  left: -4px;\
                  top: 4px;\
                  transform: rotate(45deg);\
              }\
              .smpl-touristica-oneriyor:hover .smpl-touristica-oneriyor-text{\
              display:block;\
              }\
              </style>";

                    jQuery('head').append(style);

                    jQuery('.hotel-cell-row').map(function (index) {
                        var id = dataLayer[0].HotelIDList[index];
                        if ((hotelList.includes(id))) {
                            jQuery(this).find('.hotel-name').append(html);

                            if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                                EightDigits.analytics.sendEvent(config.analytics, "Shown_Mobile");
                                EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
                            }
                        }
                    });
                    jQuery(".smpl-touristica-oneriyor").click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "Click_Badge_Mobile");
                    });
                    jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
                        if (e.target.parentElement.className === "hotel-name") {

                            if (jQuery(this).parent().parent().parent().parent().find(".smpl-touristica-oneriyor").length > 0) {
                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                            }
                        }
                        if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {

                            if (jQuery(this).parent().parent().parent().find(".smpl-touristica-oneriyor").length > 0) {

                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                            }
                        }
                    });
                    jQuery('.hotel-image-wrapper').click(function (e) {
                        if (e.target.className === "lazy") {
                            if (jQuery(this).parent().parent().find(".smpl-touristica-oneriyor").length > 0) {
                                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                            }
                        }
                    });
                }



            },
            control: function () {
                if (typeof dataLayer[0].HotelIDList === "undefined") {
                    return false;
                }

            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false;
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on');

                    }
                    jQuery('.hotel-image-wrapper').map(function (index) {
                        var id = dataLayer[0].HotelIDList[index];
                        if (hotelList.includes(id)) {
                            jQuery(this).parent().parent().parent().attr('data-oneriyor', "true");
                        }

                    });
                    if (window.innerWidth > 1023) {
                        jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
                            if (e.target.parentElement.className === "hotel-name") {
                                if (jQuery(".hotel-name a").parent().parent().parent().parent().parent().attr('data-oneriyor')) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }
                            }

                            if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
                                if (jQuery(".hotel-booking-button").parent().parent().parent().parent().attr("data-oneriyor")) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }

                            }
                        });
                        jQuery('.hotel-image-wrapper').click(function (e) {
                            if (e.target.className === "lazy") {
                                if (jQuery('.hotel-image-wrapper').parent().parent().parent().attr("data-oneriyor")) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }
                            }
                        });
                    }

                    else {
                        jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
                            if (e.target.parentElement.className === "hotel-name") {
                                if (jQuery(this).parent().parent().parent().parent().parent().attr("data-oneriyor")) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }
                            }
                            if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
                                if (jQuery(this).parent().parent().parent().parent().attr("data-oneriyor")) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }
                            }
                        });
                        jQuery('.hotel-image-wrapper').click(function (e) {
                            if (e.target.className === "lazy") {
                                if (jQuery(this).parent().parent().parent().attr("data-oneriyor")) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                                }
                            }
                        });
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
    var _ed_Touristica_Oneriyor_Badge = new EightDigits.sf();
    _ed_Touristica_Oneriyor_Badge.Touristica_Oneriyor_Badge();
})();

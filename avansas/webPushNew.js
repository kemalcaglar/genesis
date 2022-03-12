(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Web_Push_Onay")) {
        return false
    }
    EightDigits.sf.prototype.Web_Push_Onay = function () {

        var config = {
            scenarioname: "Web_Push_Onay",
            analytics: "Web_Push_Red_Onay",
            linkIcon: "//cdn.8digits.com/f/u/9zyogdo2/91948c71-6a0b-47cb-9114-0d6a91f7b5e7.png",
            linkPop: "//cdn.8digits.com/log/r/3e0b5207-296f-445e-830c-0b07aa13d461.png",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };

        main.factory.prototype = {
            random: function () {
                EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal, -1);
                var randomVal = 0;
                var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal, -1);
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
                var tempSpace = (window.innerWidth - 650) / 2;

                var html = '\
                <div id="ed-main_' + config.scenarioname + '" style="position:fixed; z-index:99999; right:5px; bottom:42px; width:60px; height:60px; border-radius:50%; cursor:pointer ">\
                <div id="ed-noticon_'+ config.scenarioname + '" style="width:100%; height:100%; background-image:url(' + config.linkIcon + '); background-position:center; background-repeat:no-repeat; background-size:cover; float:left; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.21), 0 0 11px rgba(0, 0, 0, 1); border-radius:50%; "></div>\
                <div class="ed-howMake'+ config.scenarioname + '" style=" cursor:pointer; display:none; position:absolute; width:280px; background-color:white; top:-290px; left:-18px; ">\
                <div class="ed-howMake_header'+ config.scenarioname + '" style=" line-height:35px;  width:100%; text-align:center; height:35px; font-size:14px; font-weight:bold; color:#58032e; border:1px solid #d7cfcf; " >Unblock Notifications</div>\
                <div class="ed-howMake_ins" style="width:100%; color:black; float:left; font-size:13px; padding-left:15px; " >Follow these instructions to allow notifications:</div>\
                    <div class="ed-howMake_img" style="width:100%; padding:5% 5%; ">\
                    <div class="ed-howMake_img_inner" style="width:100%; background-image:url('+ config.linkPop + '); background-position:center; background-repeat:no-repeat; height:199px; background-size:254px 182px; float:left; "></div>\
                    </div>\
                </div>\
                <div class="ed-triangledown'+ config.scenarioname + '" style="display:none; left:17px; top:-20px; position:absolute; width:0; height:0; border-left:14px solid transparent; border-right:14px solid transparent; border-top:14px solid #d7cfcf; "></div>\
                <div id="ed-hover'+ config.scenarioname + '" style="display:none; background-color:#0039A6; color:white; position:absolute; width:223px; text-align:center; height:47px; line-height:46px; font-size:14px; font-weight:bold; left:83px; border-radius:9px; top:13%; ">Bildirimlere Abone Ol!</div>\
                <div class="ed-triangle'+ config.scenarioname + '" style="display:none; width:0; height:0; border-top:12px solid transparent; border-right:13px solid #0039A6; border-bottom:12px solid transparent; position:absolute; left:70px; top:29%; "></div>\
                </div>'

                var popUpHtml = '\
                <div id="ed-popUp-main_' + config.scenarioname + '" style="position:fixed; z-index:9999999; width:100%; height:100%; background-color:rgba(0,0,0,0.3)">\
                <div style="position:absolute; top:141px; left:'+ tempSpace + 'px; ">\
                    <div id="ed-close'+ config.scenarioname + '" style=" cursor:pointer; border-radius:50%; background-color:black; color:white; right:-10px; top:-11px; position:absolute; font-size:18px; width:20px; height:20px; text-align:center; line-height:17px; ">x</div>\
                    <img style="width:650px" src="//cdn.8digits.com/log/r/3e0b5207-296f-445e-830c-0b07aa13d461.png">\
                </div>\
                </div>'

                jQuery('body').prepend(html);
                EightDigits.utils.setCookie('ed-shown' + config.scenarioname, 'on', -1);

                if (EightDigits.utils.getCookie('ed-shown' + config.scenarioname) === null) {
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown')
                    EightDigits.utils.setCookie('ed-shown' + config.scenarioname, 'on', -1);
                }

                jQuery('#ed-noticon_' + config.scenarioname).mouseover(function () {
                    jQuery('.ed-triangle' + config.scenarioname).css('display', 'block');
                    jQuery('#ed-hover' + config.scenarioname).css('display', 'block');
                });


                jQuery('#ed-noticon_' + config.scenarioname).mouseout(function () {
                    jQuery('.ed-triangle' + config.scenarioname).css('display', 'none');
                    jQuery('#ed-hover' + config.scenarioname).css('display', 'none');
                });


                jQuery('#ed-noticon_' + config.scenarioname).click(function () {
                    EightDigits.utils.setCookie('ed-click' + config.scenarioname, 'on', -1);

                    if (EightDigits.utils.getCookie('ed-click' + config.scenarioname) === null) {
                        EightDigits.analytics.sendEvent(config.analytics, 'Click_Icon')
                        EightDigits.utils.setCookie('ed-click' + config.scenarioname, 'on', -1);
                    }


                    if (Notification.permission === "denied") {
                        EightDigits.utils.setCookie('ed-PopupShown' + config.scenarioname, 'on', -1);
                        jQuery('body').prepend(popUpHtml);
                        if (EightDigits.utils.getCookie('ed-PopUpShown' + config.scenarioname) === null) {
                            EightDigits.analytics.sendEvent(config.analytics, 'Shown_PopUp');
                            EightDigits.utils.setCookie('ed-PopupShown' + config.scenarioname, 'on', -1);
                        }
                        jQuery('#ed-close' + config.scenarioname).click(function () {
                            jQuery('#ed-popUp-main_' + config.scenarioname).remove();
                        });
                    }
                    else {

                        Notification.requestPermission()
                        EightDigits.utils.setCookie('ed-PushNoticon' + config.scenarioname, 'on', -1);
                        if (EightDigits.utils.getCookie('ed-PushNoticon' + config.scenarioname) === null) {
                            EightDigits.analytics.sendEvent(config.analytics, 'Shown_PushNotification');
                            EightDigits.utils.setCookie('ed-PushNoticon' + config.scenarioname, 'on', -1);
                        }
                        var x = setInterval(function () {
                            if (Notification.permission === "granted") {
                                EightDigits.utils.setCookie('ed-granted' + config.scenarioname, 'on', -1);
                                if (EightDigits.utils.getCookie('ed-granted' + config.scenarioname) === null) {
                                    EightDigits.analytics.sendEvent(config.analytics, 'Granted_Push');
                                    EightDigits.utils.setCookie('ed-granted' + config.scenarioname, 'on', -1);
                                }
                                jQuery('#ed-main_' + config.scenarioname + '').remove();
                                clearInterval(x)
                            }
                        }, 500);
                    }

                })


            },
            control: function () {
                if(window.location.pathname.indexOf("/uk/")>-1 || window.location.pathname==="/uk"){
                    return false;
                }
                if (EightDigits.utils.getCookie('ed-PopUpShown' + config.scenarioname) !== null) {
                    EightDigits.utils.setCookie('ed-granted' + config.scenarioname, 'on', -1);
                    if (EightDigits.utils.getCookie('ed-granted' + config.scenarioname) === null) {
                        EightDigits.analytics.sendEvent(config.analytics, 'Granted_Push');
                        EightDigits.utils.setCookie('ed-granted' + config.scenarioname, 'on', -1);
                    }
                }
                if (Notification.permission !== "denied") {
                    if (Notification.permission === "default") {
                        return true;
                    }
                    else {
                        return false
                    }

                }
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    EightDigits.utils.setCookie('ed-nshown' + config.scenarioname, 'on', -1);
                    if (EightDigits.utils.getCookie('ed-nshown' + config.scenarioname) === null) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown')
                        EightDigits.utils.setCookie('ed-nshown' + config.scenarioname, 'on', -1);
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
    var _ed_Web_Push_Onay = new EightDigits.sf();
    _ed_Web_Push_Onay.Web_Push_Onay();
})(); 
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Header_Detayli_FadeinOut_Varyasyon2")) {
        return false
    }
    EightDigits.sf.prototype.Header_Detayli_FadeinOut_Varyasyon2 = function () {

        var config = {
            scenarioname: "Header_Detayli_FadeinOut_Varyasyon2",
            analytics: "Header_Detayli_FadeinOut_Varyasyon2",
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


                jQuery('.header_banner').css("height", jQuery('.header_banner img').height() + 'px');
                jQuery('.header_banner .image').fadeOut(1000)
                if (window.innerWidth > 767) {
                    setTimeout(function () {

                        var html = "<div class='smpl-header-fadeinout' style='text-align:center;top:0px;background:linear-gradient(to left, #0038a5 50%, #0038a5 50%);width:100%;height:" + jQuery('.header_banner').height() + "px;position:absolute;'><a style='text-align:center;color:white;font-size:25px;font-weight:bold;line-height:" + jQuery('.header_banner img').height() + "px;' href='javascript:void(0)'>Hoşgeldiniz! Tanışmamıza Özel, <span style='color:#fee324'>İndirimli</span> Ürünlerimizi Mutlaka İnceleyin</a></div>"
                        jQuery('.header_banner').css("height", jQuery('.header_banner img').height() + 'px');
                        jQuery('.header_banner').append(html);

                        if (window.innerWidth < 1250) {
                            jQuery('.smpl-header-fadeinout').css({"left": "0px", "width": window.innerWidth + 'px'});
                            jQuery('.smpl-header-fadeinout a').css("font-size", "27px")
                        }

                        jQuery('.smpl-header-fadeinout').on('click', function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-headerTanismaFiyatlari');

                            window.open("https://www.avansas.com/tanisma-fiyatlari")
                        })


                        jQuery('#clickside').click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-headerIsOrtagi');
                        })
                        setTimeout(function () {
                            jQuery('.smpl-header-fadeinout').fadeOut(1000);
                            setTimeout(function () {
                                jQuery('.header_banner .image').fadeIn(1000)

                            }, 1001)
                        }, 6000)

                        setInterval(function () {
                            jQuery('.header_banner .image').fadeOut(1000)
                            setTimeout(function () {
                                jQuery('.smpl-header-fadeinout').fadeIn(1000);

                            }, 1001)
                            setTimeout(function () {
                                jQuery('.smpl-header-fadeinout').fadeOut(1000);
                                setTimeout(function () {
                                    jQuery('.header_banner .image').fadeIn(1000)
                                }, 1001)
                            }, 5001)
                        }, 12002)
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                            EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                        }
                    }, 1001)

                } else {
                    setTimeout(function () {
                        var html = "<div class='smpl-header-fadeinout' style='text-align:center;top:0px;background:linear-gradient(to left, #0038a5 50%, #0038a5 50%);width:100%;height:" + jQuery('.header_banner').height() + "px;position:absolute;left:0px;'><a style='text-align:center;color:white;font-size:3.5vvw;font-weight:bold;line-height:" + jQuery('.header_banner img').height() + "px;' href='javascript:void(0)'><span style='color:#fee324'>Size Özel</span> Ürünler İçin Hemen Tıklayın!</a></div>"
                        //    var html2  ="<div class='smpl-header-fadeinout2' style='display:none;top:0px;width:100%;height:"+jQuery('.header_banner').height()+"px;position:absolute;left:0px;'><img style='width:100%;' src='https://cdn.8digits.com/log/r/2c4c7314-a3cc-402a-a9e8-d58e34e5ebba.jpeg'></div>"
                        var html3 = "<div class='smpl-header-fadeinout3' style='display:none;text-align:center;top:0px;background:linear-gradient(to left, #0038a5 50%, #0038a5 50%);width:100%;height:" + jQuery('.header_banner').height() + "px;position:absolute;left:0px;'><a style='text-align:center;color:white;font-size:3.5vw;font-weight:bold;line-height:" + jQuery('.header_banner img').height() + "px;' href='javascript:void(0)'>Tanışmamıza Özel, <span style='color:#fee324'>İndirimli</span> Ürünlerimizi Hemen İnceleyin</a></div>"
                        jQuery('.header_banner').css("height", jQuery('.header_banner img').height() + 'px');
                        jQuery('.header_banner').append(html);
                        //    jQuery('.header_banner').append(html2);
                        jQuery('.header_banner').append(html3);

                        if (window.innerWidth > 405) {
                            jQuery('.smpl-header-fadeinout').css("line-height", jQuery('.header_banner img').height() + "px");
                            jQuery('.smpl-header-fadeinout3').css("line-height", jQuery('.header_banner img').height() + "px");

                        }
                        //    jQuery('.smpl-header-fadeinout2 img').css("height",jQuery('.header_banner img').height()+"px");

                        jQuery('.smpl-header-fadeinout').on('click', function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-mobilSizeOzel');
                            window.location.href = "https://www.avansas.com/size-ozel-sectiklerimiz"
                        })
                        //    jQuery('.smpl-header-fadeinout2').on('click',function(){
                        //        EightDigits.analytics.sendEvent(config.analytics, 'click-mobilHeaderEco');
                        //        window.location.href="https://www.avansas.com/odullerimiz"

                        //    })
                        jQuery('.smpl-header-fadeinout3').on('click', function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-headerTanismaFiyatlari');

                            window.open("https://www.avansas.com/tanisma-fiyatlari")
                        })
                        jQuery('#clickside').click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-mobilHeaderIsOrtagi');
                        })
                        setTimeout(function () {
                            jQuery('.smpl-header-fadeinout').fadeOut(1000);
                            setTimeout(function () {
                                jQuery('.smpl-header-fadeinout3').fadeIn(1000);

                                setTimeout(function () {
                                    jQuery('.smpl-header-fadeinout3').fadeOut(1000);
                                    setTimeout(function () {
                                        jQuery('.header_banner .image').fadeIn(1000);
                                    }, 1001)

                                }, 4001)
                            }, 1001)
                        }, 6000)

                        setInterval(function () {
                            jQuery('.header_banner .image').fadeOut(1000)
                            setTimeout(function () {
                                jQuery('.smpl-header-fadeinout').fadeIn(1000);

                                setTimeout(function () {
                                    jQuery('.smpl-header-fadeinout').fadeOut(1000);

                                    setTimeout(function () {
                                        jQuery('.smpl-header-fadeinout3').fadeIn(1000);
                                        setTimeout(function () {
                                            jQuery('.smpl-header-fadeinout3').fadeOut(1000);
                                            setTimeout(function () {
                                                jQuery('.header_banner .image').fadeIn(1000)
                                            }, 1001)
                                        }, 4001)
                                    }, 1001)
                                }, 4001)
                            }, 1001)
                        }, 15010)
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-mobilHeader');
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                        }
                    }, 1001)


                }
            },
            control: function () {
                if (window.location.pathname.indexOf("/uk/") > -1) {
                    return false;
                }

                function checkUserInfo() {
                    var dataList = dataLayer;
                    var isCheck = false;
                    for (var i = 0; i < dataList.length; i++) {
                        if (typeof dataList[i].userInfo !== "undefined") {
                            if (typeof dataLayer[i].userInfo.firstOrderDate !== "undefined") {
                                isCheck = true;

                            }
                        }
                    }
                    return isCheck;
                }

                if (checkUserInfo()) {
                    return false;
                }

                function checkVisitorType() {
                    var dataList = dataLayer;
                    visitorType = "none";
                    for (var i = 0; i < dataList.length; i++) {
                        if (typeof dataList[i].visitor !== "undefined") {
                            if (dataList[i].visitor === "new-visitor") {
                                visitorType = "new";
                                EightDigits.utils.setCookie('ed-visitor-type' + config.scenarioname, 'new');
                            } else if (dataList[i].visitor === "returning-visitor") {
                                visitorType = "returning"
                                if (EightDigits.utils.getCookie('ed-visitor-type' + config.scenarioname) !== "new") {
                                    EightDigits.utils.setCookie('ed-visitor-type' + config.scenarioname, 'returning');
                                }

                            } else {
                                visitorType = "none";
                            }
                        }
                    }

                    if (visitorType === "new") {
                        return "new";
                    } else if (visitorType === "returning") {
                        return "returning"
                    } else {
                        return "none";
                    }

                }

                var visitorType = checkVisitorType();


                if (EightDigits.utils.getCookie('ed-visitor-type' + config.scenarioname) !== "new") {
                    return false;
                }


                //     function isLogin_ () {
                //         var control = false;
                //         for (var i = 0; i < dataLayer.length; i++) {
                //             if (typeof dataLayer[i].event !== 'undefined') {

                //                 if (dataLayer[i].event === "userInfo") {

                //                     control = true;


                //                 }
                //             }
                //         }
                //         if (control) {
                //             return true;
                //         }
                //         else {
                //             return false;
                //         }
                //     }
                // if(isLogin_()){
                //     if(!checkUserInfo()){
                //         return false;
                //     }
                // }
                // else{
                //     if(EightDigits.utils.getCookie('ed-visitor-type' + config.scenarioname)==="new" || EightDigits.utils.getCookie('ed-visitor-type' + config.scenarioname)!=="returning"){
                //         return false;
                //     }
                // }
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
    var _ed_Header_Detayli_FadeinOut_Varyasyon2 = new EightDigits.sf();
    _ed_Header_Detayli_FadeinOut_Varyasyon2.Header_Detayli_FadeinOut_Varyasyon2();
})();

(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("uyelereOzelIndirim")) {
        return false
    }
    EightDigits.sf.prototype.uyelereOzelIndirim = function () {

        var config = {
            scenarioname: "uyelereOzelIndirim",
            analytics: "uyelereOzelIndirim",
            code: "",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };
        var hotelList = [
            "Sea Life Buket Beach Resort ",
            "Adam & Eve",
            "Aquaworld Belek By Mp Hotels",
            "Crystal Boutique Beach Resort ",
            "Crystal Family Resort & Spa",
            "Crystal Paraiso Verde Resort & Spa",
            "Crystal Tat Beach Golf Resort & Spa",
            "Crystal Waterworld Resort & Spa",
            "Maritim Pine Beach Resort",
            "Sueno Hotels Deluxe Belek",
            "Sueno Hotels Golf Belek",
            "Susesi Luxury Resort",
            "Zeynep Hotel",
            "Cape Bodrum Beach Resort",
            "Crystal Green Bay Resort & Spa",
            "Delta Hotel By Marriott Bodrum",
            "Diamond Of Bodrum Hotel",
            "Duja Bodrum by La Blanche",
            "Grand Park Bodrum",
            "Hapimag Sea Garden Resort",
            "Hilton Bodrum Türkbükü Resort & Spa",
            "Kairaba Blue Dreams Resort & Spa",
            "Lujo Bodrum",
            "Maira Deluxe Resort",
            "Mivara Luxury Resort & Spa",
            "Salmakis Otel Bodrum",
            "Xanadu Island",
            "Altın Yunus Resort & Thermal Hotel",
            "Babaylon Hotel",
            "Boyalık Beach Hotel & SPA",
            "On'live Deluxe Hotel",
            "Premier Solto Hotel By Corendon",
            "Manas Park Hotel Ölüdeniz",
            "Suncity Hotel & Beach Club",
            "The Bay Beach Club",
            "D Resort Göcek",
            "Champion Holiday Village",
            "Crystal Aura Beach Resort & Spa",
            "Crystal De Luxe Resort & Spa",
            "Crystal Flora Beach Resort",
            "Grand Park Kemer",
            "Mirage Park Resort",
            "Queen's Park Göynük",
            "Queen's Park Le Jardin Resort & Spa",
            "Sea Life Family Resort",
            "Aqua Fantasy Otel",
            "Grand Park Lara",
            "Royal Holiday Palace Hotel",
            "Royal Seginus Hotel",
            "Royal Wings Hotel",
            "Green Nature Diamond Otel",
            "Green Nature Resort & Spa",
            "Marmaris Bay Resort By Mp Hotels",
            "Premier Nergis Beach Hotel",
            "Club Hotel Turan Prince World",
            "Crystal Admiral Resort Suites & Spa",
            "Crystal Palace Luxury Resort & Spa",
            "Crystal Sunrise Queen Luxury Resort & Spa",
            "Crystal Sunset Luxury Resort & Spa",
            "Grand Şeker Hotel",
            "Hotel Turan Prince",
            "Nashira Resort Hotel & Aqua Spa",
            "Raymar Hotels",
            "Royal Alhambra Palace Hotel",
            "Royal Taj Mahal Hotel",
            "Starlight Resort Hotel",
            "Sueno Hotels Beach",
            "Sunrise Resort Hotel",
            "Süral Garden Hotel",
            "Süral Hotel",
            "Süral Resort Hotel",
            "Süral Saray Hotel",
            "Terrace Beach Resort",
            "Terrace Elite Resort",
            "Trendy Aspendos Beach"
        ]

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
            copyTheClipBoard: function () {
                var copyCode1 = document.getElementById('ed_code1' + config.scenarioname);
                copyCode1.select();
                document.execCommand("copy");
            },
            requestFunction: function () {

                var visitorId = EightDigits.utils.getCookie('eightdigits_visitor');

                var data = JSON.stringify({
                    "visitorId": visitorId,
                    "customer": "s2adg7rq",
                    "campaignId": "709c4d4c-0d49-4ce2-9936-3e8b55c9f2da"
                });

                var xhr = new XMLHttpRequest();


                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        var data = JSON.parse(this.responseText);
                        if (data.data !== null) {

                            config.code = data.data;
                            EightDigits.utils.setCookie('ed-saved-code' + config.scenarioname, data.data);
                            main.factory.prototype.addHtml();
                        }
                        else {
                            console.log('Kupon Kodu Bitti :');
                            return false;
                        }

                    }
                });

                xhr.open("POST", "//promocode.8digits.com/api/campaign/search");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("cache-control", "no-cache");


                xhr.send(data);

            },
            addHtml: function () {
                var tempLeft = ((window.innerWidth - 520) / 2) + 'px';
                var popup = '\
                            <div id="'+ config.scenarioname + '_popup_login_main" style="position:fixed; z-index:9999; top:0px; width:100%; height:100%;">\
                                <div id="'+ config.scenarioname + '_popup_login_layer" style="position:absolute; z-index:9998; top:0px; width:100%; height:100%; background:rgba(0,0,0,0.6)"></div>\
                                <div id="'+ config.scenarioname + '_popup_login_inner" style="position:absolute; z-index:9999; top:60px; left:' + tempLeft + '; cursor:pointer;">\
                                <div id="ed-close-login'+ config.scenarioname + '" style="width:38px;height:38px;right:0px;font-size: 25px;text-align: center;top:0px;position:absolute;z-index:9999;color:white;">x</div>\
                                <div id="ed-'+ config.scenarioname + '-savedCode" style="position: absolute;color: white;font-size: 13px;top: 273px;left: 211px;">' + config.code + '</div>\
                                <div id="ed-'+ config.scenarioname + '-KoduKopyala" style="position: absolute;top: 309px;left: 202px;width: 115px;height:30px;"></div>\
                                <div id="ed-'+ config.scenarioname + '-GecerliHoteller" style="position: absolute;top: 356px;left: 151px;width: 219px;height: 54px;"></div>\
                                <img style="width:520px;" src="//cdn.8digits.com/f/u/s2adg7rq/7e996522-3399-42ee-bda5-9b9afcb73502.jpg">\
                                <input id="ed_code1'+ config.scenarioname + '"  value="' + config.code + '" style="left:26px; width:19px; top:25px; position:absolute; z-index:-3;"></input>\
                                <div class="ed-noticon'+ config.scenarioname + '" style="display: none;width: 202px;position: absolute;z-index: 9999;bottom: 177px;left: 161px;font-size: 13px;font-weight: bold;background-color: rgb(246, 176, 66);color: white;text-align: center;line-height: 40px;height: 39px;">Kodunuz Kopyalanmıştır.</div>\
                                \
                                \
                                </div>\
                            </div>'


                jQuery('body').append(popup);
                jQuery('#ed-' + config.scenarioname + '-main').click(function () {
                    jQuery('#ed-' + config.scenarioname + '-main').off('click');
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_Login_SizeOzel')
                    main.factory.prototype.checkCode();
                });

                EightDigits.analytics.sendEvent(config.analytics, 'Shown_Popup')


                jQuery('#ed-' + config.scenarioname + '-KoduKopyala').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_CopyCode')
                    jQuery('.ed-noticon' + config.scenarioname + '').css('display', 'block');
                    main.factory.prototype.copyTheClipBoard();
                    setTimeout(function () {
                        jQuery('.ed-noticon' + config.scenarioname + '').css('display', 'none');
                        //jQuery('#' + config.scenarioname + '_popup_login_main').remove();
                        main.factory.prototype.addKulakcik();

                    }, 2000)
                });
                jQuery('#ed-' + config.scenarioname + '-GecerliHoteller').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'Click_Gecerli_Oteller')
                    window.location.href = "https://www.setur.com.tr/setur-uyelerine-ozel-indirimler"
                    main.factory.prototype.addKulakcik();
                });

                jQuery('#ed-close-login' + config.scenarioname + '').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'Close_Popup')
                    jQuery('#' + config.scenarioname + '_popup_login_main').remove();
                    main.factory.prototype.addKulakcik();
                })
            },
            checkCode: function () {


                if (config.code === "") {
                    main.factory.prototype.requestFunction();
                }
                else {
                    main.factory.prototype.addHtml();
                }



            },
            addKulakcik: function () {
                if (jQuery('#' + config.scenarioname + '_kulakcik_main').length === 0 && EightDigits.utils.getCookie('ed-kulakcik_remove' + config.scenarioname) === null) {
                    var html = '<div id="' + config.scenarioname + '_kulakcik_main" style="position:fixed;bottom:35px;right:0px;width: 290px;height: 65px;border: 5px dashed red;border-radius:5px;background-color: white;">\
                                    <div class="ed-'+ config.scenarioname + '-inner" style="line-height: 59px;margin-left: 12px; display:flex;"><div style="color: gray;font-weight: 300;font-size: 18px;">Kodunuz:</div><div style="color: red;font-weight: bold;margin-left: 7px;font-size: 18px;">' + config.code + '</div></div>\
                                    <div class="ed-'+ config.scenarioname + '-close" style="position:absolute;right: 4px;top: 0px;font-size: 23px;color: grey;font-weight: 200;cursor:pointer;">x</div>\
                            </div>'



                    jQuery('body').append(html);
                    EightDigits.utils.setCookie('ed-shown-kulakcik' + config.scenarioname, 'on')
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik')

                    jQuery('.ed-' + config.scenarioname + '-close').click(function () {
                        EightDigits.analytics.sendEvent(config.analytics, 'Close_Kulakcik');
                        jQuery('#' + config.scenarioname + '_kulakcik_main').remove();
                        EightDigits.utils.setCookie('ed-kulakcik_remove' + config.scenarioname, 'on');
                    });

                }

            },
            isLogin: function () {
                if (jQuery('.login-button .mobile-none').text() === "Giriş Yap") {
                    return false;
                }
                else {
                    return true;
                }




            },

            start: function () {
                // config.code = "BMYOKB0PU9NX5";
                if (EightDigits.utils.getCookie('ed-saved-code' + config.scenarioname) !== null) {
                    config.code = EightDigits.utils.getCookie('ed-saved-code' + config.scenarioname);
                }


                if (main.factory.prototype.isLogin()) {
                    var html = '<div id="ed-' + config.scenarioname + '-main" \
                                    style="position:absolute;top:0px;left: -66px;width: 59px;cursor:pointer;text-align:center;margin-top: 0px;">\
                                    <i style="color: #ed3942;font-size: 24px" class="fas fa-gift"></i><div style="font-size: 10px;font-weight: 400;margin-top: 1px;color: #818181;">Size Özel</div>\
                               </div>'


                    jQuery('.top-user-area-list.list.list-horizontal.list-border').prepend(html);
                    // jQuery('#icon-notification-8d').css('margin-left', '-109px')
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown_Login_SizeOzel')
                    if (EightDigits.utils.getCookie('ed-shown-kulakcik' + config.scenarioname) !== null) {
                        main.factory.prototype.addKulakcik();
                    }
                    jQuery('#ed-' + config.scenarioname + '-main').click(function () {
                        jQuery('#ed-' + config.scenarioname + '-main').off('click');
                        EightDigits.analytics.sendEvent(config.analytics, 'Click_Login_SizeOzel')
                        main.factory.prototype.checkCode();
                    });
                }
                else {

                    setTimeout(function () {
                        if (EightDigits.dataLayer.data.pageType === "product") {
                            var html = '<div id="ed-' + config.scenarioname + '-main"\
                            style="position:absolute;margin-left: -60px;left:-90px;width: 136px;line-height: 15px;cursor:pointer;padding: 3px;top: -3px;text-align:center;color: grey;border: 2px dashed red;">Üye girişi yap, bu oteldeki fırsatı kaçırma!</div>'

                       jQuery('.top-user-area-list.list.list-horizontal.list-border').append(html);
                       EightDigits.analytics.sendEvent(config.analytics, 'Shown_NonLogin_SizeOzel')

                       jQuery('#icon-notification-8d').css('margin-left', '-190px')

                       jQuery('#ed-' + config.scenarioname + '-main').click(function () {
                           EightDigits.analytics.sendEvent(config.analytics, 'Click_NonLogin_SizeOzel')
                           window.location.href = "/Profil?redirectUrl=%2f";
                       });
                        } else {

                        var html = '<div id="ed-' + config.scenarioname + '-main"\
                             style="position:absolute;margin-left: -60px;left:-90px;width: 136px;line-height: 15px;cursor:pointer;padding: 3px;top: -3px;text-align:center;color: grey;border: 2px dashed red;">Üye girişi yap, sana özel fırsatları kaçırma</div>'

                        jQuery('.top-user-area-list.list.list-horizontal.list-border').append(html);
                        EightDigits.analytics.sendEvent(config.analytics, 'Shown_NonLogin_SizeOzel')

                        jQuery('#icon-notification-8d').css('margin-left', '-190px')

                        jQuery('#ed-' + config.scenarioname + '-main').click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'Click_NonLogin_SizeOzel')
                            window.location.href = "/Profil?redirectUrl=%2f";
                        });
                    }
                    }, 2000);

                    if (window.location.href.indexOf('/setur-uyelerine-ozel-indirimler') > -1) {
                        var htmlCat = '<div class="ed-' + config.scenarioname + '-main"\
                        style="width: 269px;line-height: 29px;cursor:pointer;border-radius: 3px;font-weight: bold;text-align:center;margin-top: -4px;color: gray;border: 2px dashed red;">Üye girişi yap, sana özel fırsatları kaçırma</div>'
                        jQuery('.row.hotellist-item-campaign').append(htmlCat);
                        jQuery('.ed-' + config.scenarioname + '-main').click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'Click_NonLogin_SizeOzel')
                            window.location.href = "/Profil?redirectUrl=%2f";
                        });

                        jQuery(document).ajaxComplete(function (r, s, p) {

                            if (p.url.indexOf("/Hotel/HotelListForFilter?slug=") > -1) {

                                jQuery('.row.hotellist-item-campaign').append(htmlCat);

                            }
                        });

                    }
                    else if (EightDigits.dataLayer.data.pageType === "product") {
                        var hotelName = jQuery('.hotel-detail-name').text().trim();
                        var htmlProd = '<div class="ed-' + config.scenarioname + '-main"\
                        style="width: 269px;line-height: 29px;cursor:pointer;border-radius: 3px;font-weight: bold;text-align:center;margin-top: 6px;margin-left: 8px;color: gray;border: 2px dashed red;">Üye girişi yap, bu oteldeki fırsatı kaçırma!</div>'
                        if (hotelList.includes(hotelName)) {
                            jQuery('.hoteldetail-installment-partial.row:eq(1)').append(htmlProd);
                            jQuery('.ed-' + config.scenarioname + '-main').click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, 'Click_NonLogin_SizeOzel')
                                window.location.href = "/Profil?redirectUrl=%2f";
                            });
    
                        }
                    }
                }



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
    var _ed_uyelereOzelIndirim = new EightDigits.sf();
    _ed_uyelereOzelIndirim.uyelereOzelIndirim();
})();
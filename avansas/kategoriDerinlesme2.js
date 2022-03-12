(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Belirli_ID_Kulakcik_Indirim")) {
        return false
    }
    EightDigits.sf.prototype.Belirli_ID_Kulakcik_Indirim = function () {

        // cart sayfasında kulakçık gösterme eklendi
        var config = {
            scenarioname: "Belirli_ID_Kulakcik_Indirim",
            analytics: "Belirli_ID_Kategori_Derinlesme_Kulakcik_Nisan",
            companyCode: "",
            link: "https://www.avansas.com/eta-kpn-31220",
            controlScenario:"product_user_kulakcik",
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

            isLogin: function () {
                var control = false;
                for (var i = 0; i < dataLayer.length; i++) {
                    if (typeof dataLayer[i].event !== 'undefined') {

                        if (dataLayer[i].event === "userInfo") {


                            if (typeof dataLayer[i].userInfo.companyCode !== "undefined") {
                                control = true;
                                config.companyCode = dataLayer[i].userInfo.companyCode;

                            }
                        }
                    }
                }

                if (control) {
                    return true;
                }
                else {
                    return false;
                }

            },

            start: function () {

                var kulakcik = '\
                <div id="'+ config.scenarioname + '_kulakcik_main" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px; ">\
                    <img id="'+ config.scenarioname + '_kulakcik_image" src="https://cdn.8digits.com/log/r/c6210626-719d-4f3a-841b-7c71b2e2f58b.png" style="cursor:pointer; width:320px;">\
                    <div class="'+ config.scenarioname + '_kulakcik_close" style="position:absolute;z-index:9999;right:17px;top:17px;font-weight: bold;width:40px;height:40px;text-align:center;color:white;line-height: 31px;font-size: 28px;cursor:pointer;">×</div>\
                </div>'
                var kapaliKulakcik = '\
                <div id="'+ config.scenarioname + '_kulakcik_main-kapali" style="position:fixed; display:none; z-index:9999; bottom:-3px; right:100px; ">\
                    <img id="'+ config.scenarioname + '_kulakcik_image" src="//cdn.8digits.com/f/u/9zyogdo2/2665556a-7db1-417f-bff4-0ed3c1632185.png" style="cursor:pointer; width:320px;">\
                    <div class="'+ config.scenarioname + '_kulakcik_close" style="position:absolute;z-index:9999;right:0px;top:0px;font-weight: bold;width:30px;height:30px;text-align:center;color:white;line-height: 19px;font-size: 46px;cursor:pointer;"></div>\
                </div>'
                jQuery('body').append(kulakcik);
                jQuery('body').append(kapaliKulakcik);
                EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                if(jQuery('#'+ config.controlScenario + '_kulakcik_main').length > 0){
                    jQuery('#'+ config.controlScenario + '_kulakcik_main').remove();
                }
                EightDigits.utils.setCookie('ed-shownSession' + config.scenarioname, 'on', 45);
                EightDigits.utils.setCookie('ed-notshownAgain' + config.scenarioname, 'on', 24 * 60);



                if (EightDigits.utils.getCookie('ed-kulakcik_position' + config.scenarioname) === "top" || EightDigits.utils.getCookie('ed-kulakcik_position' + config.scenarioname) === null) {

                    jQuery('#' + config.scenarioname + '_kulakcik_main').css('display', 'block');
                    jQuery('#' + config.scenarioname + '_kulakcik_main-kapali').css('display', 'none');

                }
                else {

                    jQuery('#' + config.scenarioname + '_kulakcik_main').css('display', 'none');
                    jQuery('#' + config.scenarioname + '_kulakcik_main-kapali').css('display', 'block');

                }
                jQuery('.' + config.scenarioname + '_kulakcik_close').click(function () {
                    if (jQuery('#' + config.scenarioname + '_kulakcik_main').css('display') === "none") {
                        jQuery('#' + config.scenarioname + '_kulakcik_main').css('display', 'block');
                        jQuery('#' + config.scenarioname + '_kulakcik_main-kapali').css('display', 'none');
                        EightDigits.utils.setCookie('ed-kulakcik_position' + config.scenarioname, 'top')
                    }
                    else {
                        jQuery('#' + config.scenarioname + '_kulakcik_main').css('display', 'none');
                        jQuery('#' + config.scenarioname + '_kulakcik_main-kapali').css('display', 'block');
                        EightDigits.utils.setCookie('ed-kulakcik_position' + config.scenarioname, 'bottom');
                    }
                });
                jQuery('#' + config.scenarioname + '_kulakcik_main img').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'Click');
                    window.location.href = config.link;
                    EightDigits.utils.setCookie('ed-notshownAgainClick' + config.scenarioname, 'on', 24 * 60);
                });

            },


            control: function () {

                if (EightDigits.utils.getCookie('ed-notshownAgainClick' + config.scenarioname) !== null) {
                    return false;
                }

                else if (EightDigits.utils.getCookie('ed-notshownAgain' + config.scenarioname) !== null && EightDigits.utils.getCookie('ed-shownSession' + config.scenarioname) === null) {
                    return false;
                }

                else if (main.factory.prototype.isLogin()) {
                 
            //    var sendRequest = (method, queryString, data, callback) => {
            //             const xhr = new XMLHttpRequest();
            //             const responseHandler = () => {
            //                 if (!callback) return;
            //                 if (xhr.status < 400) return callback(null, xhr.response);
            //                 return callback({}, null);
            //             };
            //             const addHeader = (key, value) => xhr.setRequestHeader(key, value);
            //             xhr.open(method, 'https://service.hellosmpl.com/s' + queryString, true);
            //             xhr.addEventListener('load', responseHandler);
            //             addHeader('Content-Type', 'application/json;charset=UTF-8');
            //             addHeader('X-Requested-With', 'XMLHttpRequest');
            //             addHeader('s', 'avansas');
            //             xhr.send(method === 'POST' && JSON.stringify({ _d: data }));
            //         };


            //         var getUserAttr = (id, callback) => {
            //             if (sessionStorage.getItem('user-data'+config.companyCode)) return callback(null, JSON.parse(sessionStorage.getItem('user-data'+config.companyCode)));
            //             sendRequest('GET', `?t=1.1&u=${id}`, null, function (error, data) {
            //                 if (error) return callback(error, data);
            //                 sessionStorage.setItem('user-data'+config.companyCode, data);
            //                 callback(null, JSON.parse(data));
            //             });
            //         };
            //         getUserAttr(config.companyCode, function (error, data) {
            //             if (error) return console.log(error);
                        
            //             if(typeof data['25tl_indirim'] !== "undefined"){
            //                 main.factory.prototype.start();
                            
            //             }
                      
            //         })
                


                   if(sessionStorage.getItem('user-data'+config.companyCode) !== null){
                    if (typeof EightDigits.dataLayer.data.segment['Agustos_21Listesi'] !== "undefined") {
                       
                        main.factory.prototype.start();

                    }
                 }



                }
                else {
                    return false;
                }


            },
            init: function () {

                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                    return false;
                }
                main.factory.prototype.control();
            }
        };

        boot = function () {
            return main.factory.prototype.init();
        };

        boot();

    };
    var _ed_Belirli_ID_Kulakcik_Indirim = new EightDigits.sf();
    _ed_Belirli_ID_Kulakcik_Indirim.Belirli_ID_Kulakcik_Indirim();
})();

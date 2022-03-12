(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kesin_Hareketli_Badge_Mobile")) {
        return false
    }
    EightDigits.sf.prototype.Kesin_Hareketli_Badge_Mobile = function () {
        var config = {
            scenarioname: "Kesin_Hareketli_Badge_Mobile",
            analytics: "Kesin_Hareketli_Badge_Mobile",
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
                var idList = [
                    "10467",
                    "10445",
                    "10466",
                    "10392",
                    "10391",
                    "10134",
                    "10574",
                    "13668",
                    "13876",
                    "13685",
                    "13686",
                    "13683",
                    "13687",
                    "13688",
                    "13669",
                    "13684",
                    "13880",
                    "13879",
                    "13877",
                    "13878",
                    "13762",
                    "13763",
                    "13678",
                    "13764",
                    "13874",
                    "13873",
                    "13872",
                    "13875",
                    "13760",
                    "13759",
                    "13758",
                    "13761",
                    "13870",
                    "13869",
                    "13868",
                ];
                var html = `<img style="position: absolute;width: 124px;height: 22px;top: 73%;right: 0;border-radius: 4px;left: 1px;" src="https://cdn.8digits.com/log/r/52f66da4-3cc7-42d4-97be-d9ba419fec64.jpeg">`
                var countIdList = dataLayer[0].TripIDList.length;
                var append = false;

                for (var i = 0; i < countIdList; i++) {
                    for (var j = 0; j < idList.length; j++) {
                        if (dataLayer[0].TripIDList[i] == idList[j]) {
                            jQuery('.hotel-image-wrapper.in-tour.no-bg:eq(' + i + ')').append(html);
                            jQuery('.hotel-booking-span a:eq(' + i + ')').click(function () {
                                EightDigits.analytics.sendEvent(config.analytics, "Click");
                            })
                            append = true;
                        }
                    }
                }

                if (append) {
                    EightDigits.analytics.sendEvent(config.analytics, "Shown");
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
    var _ed_Kesin_Hareketli_Badge_Mobile = new EightDigits.sf();
    _ed_Kesin_Hareketli_Badge_Mobile.Kesin_Hareketli_Badge_Mobile();
  })();
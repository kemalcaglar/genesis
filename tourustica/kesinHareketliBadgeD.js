(function () {
    EightDigits.sf.prototype.Tour_Id_Badge = function () {

        var config = {
            scenarioname: "Tour_Id_Badge",
            analytics: "Kesin_Hareketli_Tour_Id_Badge",
            controlgroup: 5
        };

        var main = {
            "factory": function () {
                return true;
            }
        };

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
                if (randomVal < 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {

                var html = '<img src="//cdn.8digits.com/f/u/y8glbe6d/9bdd4f32-a6a1-48ef-a5e7-0a04990c0d8e.jpg" style="position: absolute;top: -32px;right: 240px;">'
                var countIdList = dataLayer[0].TripIDList.length;
                var append = false;

                for (var i = 0; i < countIdList; i++) {
                    for (var j = 0; j < idList.length; j++) {
                        if (dataLayer[0].TripIDList[i] == idList[j]) {
                            jQuery('.hotel-description:eq(' + i + ')').prepend(html);
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
            init: function () {
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    var tmepListItemCount = jQuery('.tour-search-page-tour-box:eq(0) .tour-cell.in-tour').length;
                    for (var i = 0; i < tmepListItemCount; i++) {
                        jQuery('.hotel-booking-span a:eq(' + i + ')').click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, "NotShownClick");
                        })
                    }
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
    var _ed_Tour_Id_Badge = new EightDigits.sf();
    _ed_Tour_Id_Badge.Tour_Id_Badge();
})();
(function () {
    EightDigits.sf.prototype.Paraf_200_TL = function () {

        var config = {
            scenarioname: "Paraf_200_TL",
            analytics: "VizesizTur",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };
        var id = [
            12472,
            12399,
            12475,
            12343,
            12476,
            10471,
            12397,
            12428,
            12474,
            12473,
            12452,
            10816,
            10819,
            10821,
            10829,
            10842,
            12406,
            12407,
            12465,
            12464,
            12463,
            12523,
            10937,
            10886,
            10887,
            10889,
            12512,
            12630,
            12632,
            10644,
            12478,
            12479,
            12477,
            10812,
            12480,
            10822,
            10820,
            10890,
            10891,
            10888,
            12395,
            10663,
            12319,
            12585,
            12667,
            12396,
            12979,
            12980,
            12861,
            12863,
            12794,
            12791,
            12850,
            12853,
            12854,
            12855,
            12852,
            12977,
            12981,
            10810,
            12571,
            12572,
            12897,
            12899,
            12900,
            12909,
            12910,
            12912,
            12911,
            12570,
            13055,
            12991,
            12990,
            13074,
            12872,
            13073,
            12983,
            12982,
            13068,
            13107,
            13110,
            13104,
            13113,
            13163,
            13226,
            13221,
            14061,
            14052,
            14055,
            14054,
            14053,
            13630,
            13997,
            13996,
            13056,
            13769,
            13906,
            13972,
            13623,
            14045,
            14047,
            14046,
            14048,
            13968,
            13655,
            13993,
            13992,
            13991,
            13619,
            14106,
            14107,
            14105
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
                if (randomVal < 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {

                var tripList = dataLayer[0].TripIDList;


                for (var i = 0; i < id.length; i++) {
                    for (var j = 0; j < tripList.length; j++) {
                        if (id[i] === tripList[j]) {

                            var html = '<div class="ed-main-div" style="color:#ED462F; font-weight:700; cursor:pointer; position:relative">Vizesiz\</div>';
                            jQuery('.center-parent:eq(' + j + ')').append(html)

                            if (!EightDigits.utils.getCookie('ed-paraf-shown')) {
                                EightDigits.analytics.sendEvent(config.analytics, "Shown");
                                EightDigits.utils.setCookie('ed-paraf-shown', 'on')
                            }

                        }

                    }


                }

            },
            init: function () {
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (!EightDigits.utils.getCookie('ed-paraf-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                        EightDigits.utils.setCookie('ed-paraf-notshown', 'on')
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
    var _ed_Paraf_200_TL = new EightDigits.sf();
    _ed_Paraf_200_TL.Paraf_200_TL();
})();
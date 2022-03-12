(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Kordon_Badge_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Kordon_Badge_Desktop = function () {
        var config = {
            scenarioname: "Kordon_Badge_Desktop",
            analytics: "Kordon_Badge_Desktop",
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
                var html ='<a class="ed-kordon-badge-container"  style="color: black; text-decoration: none; cursor:pointer;top:10px;position:absolute;">\
                <div class="ed-mainbedavakordonBadge" style="position:absolute; width:120px;">\
                <div class="ed-kordon-badge" style=" width: 100px; height: 27px; background-color: #d09494; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">KORDON HEDİYE!</p></div>\
                </div>\
    </a>'
                if(jQuery(".h2.mb5").text().trim() == "WWQ1001 Akıllı Bileklik" || jQuery(".h2.mb5").text().trim() == "WWQ1002 Akıllı Bileklik" || jQuery(".h2.mb5").text().trim() == "WWQ1003 Akıllı Bileklik" ){
                    jQuery('.product-image-gallery').append(html);
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
    var _ed_Kordon_Badge_Desktop = new EightDigits.sf();
    _ed_Kordon_Badge_Desktop.Kordon_Badge_Desktop();
  })();
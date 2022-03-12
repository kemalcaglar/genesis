
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Anneler_Gunu_Badge")) {
    return false
    }
    EightDigits.sf.prototype.Anneler_Gunu_Badge = function () {
    var config = {
    scenarioname: "Anneler_Gunu_Badge",
    analytics: "Anneler_Gunu_Badge",
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
        var html = `
        <div style="top:0; position:absolute; right:40%">
            <img src="https://cdn.8digits.com/log/r/0007ce36-95e4-4a1c-9bb3-06b3233a86c8.png">
        </div>`;
        jQuery(".top-user-area.clearfix").before(html);
        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
            EightDigits.analytics.sendEvent(config.analytics, 'shown');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
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
    var _ed_Anneler_Gunu_Badge = new EightDigits.sf();
    _ed_Anneler_Gunu_Badge.Anneler_Gunu_Badge();
    })();
    
    
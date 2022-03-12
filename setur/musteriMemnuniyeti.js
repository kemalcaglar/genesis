
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Musteri_Memnuniyeti_Badge")) {
    return false
    }
    EightDigits.sf.prototype.Musteri_Memnuniyeti_Badge = function () {
    var config = {
    scenarioname: "Musteri_Memnuniyeti_Badge",
    analytics: "Musteri_Memnuniyeti_Badge",
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
        memnuniyetBadgeHTML = `
        <div style="top:0; position:absolute; right:300px">
            <a href="https://www.setur.com.tr/musteri-memnuniyeti"> <img src="https://cdn.8digits.com/log/r/c7eef3e3-c452-4177-9391-4110b615df1e.png"></a>
        </div>`;
        jQuery(".top-user-area.clearfix").before(memnuniyetBadgeHTML);
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
    var _ed_Musteri_Memnuniyeti_Badge = new EightDigits.sf();
    _ed_Musteri_Memnuniyeti_Badge.Musteri_Memnuniyeti_Badge();
    })();
    
    
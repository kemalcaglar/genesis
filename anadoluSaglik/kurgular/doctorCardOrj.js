(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Doctor_Card")) {
        return false
    }
    EightDigits.sf.prototype.Doctor_Card = function () {
        var config = {
            scenarioname: "Doctor_Card",
            analytics: "Doctor_Card",
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
                var css = '<style>\
.smpl-doctors{\
    justify-content: center;\
    text-align: center;\
    align-items: center;\
    display: flex;\
}\
.smpl-doctorBox {\
    background-color: #ebebea;\
    float: left;\
    width: 220px;\
    margin: 30px 15px 0 0;\
    border-radius: 5px;\
    text-align: left;\
    position: relative;\
}\
.smpl-imgWrap {\
    width: 100%;\
    height: 150px;\
    overflow: hidden;\
    border-radius: 5px 5px 0 0;\
    position: relative;\
    z-index: 1;\
}\
.smpl-imgWrap img {\
    margin: 0 auto;\
    position: absolute;\
    left: 50%;\
    transform: translateX(-50%);\
}\
.smpl-doctor-link-wrap {\
    width: 100%;\
    height: 100%;\
}\
.smpl-textWrap {\
    box-sizing: border-box;\
    min-height: 275px;\
    position: relative;\
    padding: 10px;\
    font-size:13px;\
}\
.smpl-doctors h4 {\
    font-family: "latoBold";\
    font-size: 17px;\
    color: #424242;\
    margin-bottom: 5px;\
}\
.smpl-doctors .smpl-textWrap .smpl-text {\
    height: 14em;\
    overflow: hidden;\
}\
.smpl-doctors .smpl-doctorBox .smpl-textWrap .smpl-text>p {\
    color: #a1a1a1;\
    margin-bottom: 1.3em;\
    min-height: 82px;\
}\
.smpl-doctors .smpl-doctorBox .smpl-detail-info.align-bottom {\
    font-family: "latoBold";\
    display: block;\
    margin-top: 0;\
    width: 100%;\
    height: 40px;\
    text-align: center;\
    font-size: 16px;\
    color: white;\
    position: absolute;\
    bottom: 0;\
    right: 0;\
    box-sizing: border-box;\
    background-color: #ff8b02;\
    border-bottom-left-radius: 5px;\
    border-bottom-right-radius: 5px;\
    padding-top: 12px;\
}\
.smpl-doctors .smpl-doctorBox .smpl-detail-info.align-bottom:hover {\
    background-color: #009fe3;\
}\
</style>\
'
jQuery("head").append(css);
var html = '\
<div class="smpl-doctors">\
    <div class="smpl-doctorBox">\
        <div class="smpl-imgWrap">\
            <a href="/doktor/prof-dr-metin-cakmakci">\
                <img src="https://docsd.anadolusaglik.org/doctor/crops/220x150/prof_dr_88514.jpg" alt="Prof. Dr. Metin Çakmakçı">\
            </a>\
        </div>\
        <a class="smpl-doctor-link-wrap" href="/doktor/prof-dr-metin-cakmakci">\
            <div class="smpl-textWrap">\
                <h4>\
                Prof. Dr.<br>Metin Çakmakçı\
                </h4>\
                <div class="smpl-text">\
                    <p>\
                    Cerrahi Onkoloji<br>\
                    Meme Sağlığı Merkezi<br>\
                    Genel Cerrahi<br>\
                    Kanser ve Yaşam<br>\
                    Robotik Cerrahi<br>\
                    </p>\
                    <div class="desc">\
                    <p>2007 yılından bu yana Anadolu Sağlık Merkezi’nde genel cerrahi uzmanı ve Meme Sağlığı Merkezi Direktörü olarak görevini sürdürüyor.</p>\
                    </div>\
                </div>\
                <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>\
            </div>\
        </a>\
    </div>\
    <div class="smpl-doctorBox">\
        <div class="smpl-imgWrap">\
            <a href="/doktor/doc-dr-ilker-tinay">\
                <img src="https://docsd.anadolusaglik.org/doctor/crops/220x150/doc_dr_55201.jpg" alt="Doç. Dr. İlker Tinay">\
            </a>\
        </div>\
        <a class="smpl-doctor-link-wrap" href="/doktor/doc-dr-ilker-tinay">\
            <div class="smpl-textWrap">\
                <h4>\
                Doç. Dr.<br>İlker Tinay\
                </h4>\
                <div class="smpl-text">\
                    <p>\
                    Üroloji<br>\
                    Üroonkoloji Merkezi<br>\
                    Robotik Cerrahi<br><br>\
                    </p>\
                    <div class="desc">\
                    <p>2021 yılından bu yana Anadolu Sağlık Merkezi’nde üroloji uzmanı olarak görevini sürdürüyor.</p>\
                    </div>\
                </div>\
                <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>\
            </div>\
        </a>\
    </div>\
    <div class="smpl-doctorBox">\
    <div class="smpl-imgWrap">\
        <a href="/doktor/prof-dr-murat-dede">\
            <img src="https://docsd.anadolusaglik.org/doctor/crops/220x150/prof_dr_83125.jpg" alt="Prof. Dr. Murat Dede">\
        </a>\
    </div>\
    <a class="smpl-doctor-link-wrap" href="/doktor/prof-dr-murat-dede">\
        <div class="smpl-textWrap">\
            <h4>\
            Prof. Dr.<br>Murat Dede\
            </h4>\
            <div class="smpl-text">\
                <p>\
                Jinekolojik Onkoloji Cerrahisi<br>\
                Kadın Hastalıkları ve Doğum<br>\
                Robotik Cerrahi<br>\
                </p>\
                <div class="desc">\
                <p>2019 yılından bu yana, Anadolu Sağlık Merkezi’nde Kadın Hastalıkları ve Doğum Uzmanı ve Jinekolojik Onkoloji Cerrahisi Uzmanı olarak görevin...</p>\
                </div>\
            </div>\
            <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>\
        </div>\
    </a>\
</div>\
<div class="smpl-doctorBox">\
<div class="smpl-imgWrap">\
    <a href="/doktor/prof-dr-altan-kir">\
        <img src="https://docsd.anadolusaglik.org/doctor/crops/220x150/prof_dr_52908.jpg" alt="Prof. Dr. Altan Kır">\
    </a>\
</div>\
<a class="smpl-doctor-link-wrap" href="/doktor/prof-dr-altan-kir">\
    <div class="smpl-textWrap">\
        <h4>\
        Prof. Dr.<br>Altan Kır\
        </h4>\
        <div class="smpl-text">\
            <p>\
            Göğüs Cerrahisi<br>\
            Robotik Cerrahi<br>\
            </p>\
            <div class="desc">\
            <p>2007 tarihinden bu yana Anadolu Sağlık Merkezi’nde göğüs cerrahisi uzmanı olarak görevini sürdürüyor.</p>\
            </div>\
        </div>\
        <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>\
    </div>\
</a>\
</div>\
<div class="smpl-doctorBox">\
<div class="smpl-imgWrap">\
    <a href="/doktor/prof-dr-hasim-ustunsoy">\
        <img src="https://docsd.anadolusaglik.org/doctor/crops/220x150/prof_dr_42332.jpg" alt="Prof. Dr. Haşim Üstünsoy">\
    </a>\
</div>\
<a class="smpl-doctor-link-wrap" href="/doktor/prof-dr-hasim-ustunsoy">\
    <div class="smpl-textWrap">\
        <h4>\
        Prof. Dr.<br>Haşim Üstünsoy\
        </h4>\
        <div class="smpl-text">\
            <p>\
            Çocuk Kalp ve Damar Cerrahisi<br>\
            Kalp ve Damar Cerrahisi<br>\
            Robotik Cerrahi<br>\
            </p>\
            <div class="desc">\
            <p>2017 yılında Anadolu Sağlık Merkezi’nde çalışmaya başlayan Prof. Dr. Üstünsoy, kalp damar cerrahisi ve pediatrik kalp ve damar cerrahisi uzm...</p>\
            </div>\
        </div>\
        <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>\
    </div>\
</a>\
</div>\
</div>\
'
jQuery(".cure.white-section").before(html);
var showCount = 0;
jQuery(window).scroll(function () {
var top_of_element = jQuery(".smpl-doctors").offset().top;
var bottom_of_element =
jQuery(".smpl-doctors").offset().top +
jQuery(".smpl-doctors").outerHeight();
var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
var top_of_screen = jQuery(window).scrollTop();
if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown-card") : false;
showCount++;
}
}); 
jQuery(".smpl-doctorBox").click(function(){
    EightDigits.analytics.sendEvent(config.analytics, "click-doctor")
    })
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
    var _ed_Doctor_Card = new EightDigits.sf();
    _ed_Doctor_Card.Doctor_Card();
  })();
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Doctor_Beslenme_Card")) {
        return false
    }
    EightDigits.sf.prototype.Doctor_Beslenme_Card = function () {
        var config = {
            scenarioname: "Doctor_Beslenme_Card",
            analytics: "Doctor_Beslenme_Card",
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
                var css = `<style>
.smpl-doctors{
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    margin-bottom: 40px;
}
.smpl-doctorBox {
    background-color: #ebebea;
    float: left;
    width: 220px;
    margin: 30px 15px 0 0;
    border-radius: 5px;
    text-align: left;
    position: relative;
}
.smpl-imgWrap {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 1;
}
.smpl-imgWrap img {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.smpl-doctor-link-wrap {
    width: 100%;
    height: 100%;
}
.smpl-textWrap {
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    font-size:13px;
}
.smpl-doctors h4 {
    font-family: "latoBold";
    font-size: 17px;
    color: #424242;
    margin-bottom: 5px;
    font-size: 18px !important;
}
.smpl-doctors p {
    width: auto;
}
.smpl-doctors .smpl-textWrap .smpl-text {
    height: 14em;
    overflow: hidden;
}
.smpl-doctors .smpl-doctorBox .smpl-textWrap .smpl-text>p {
    color: #a1a1a1;
    margin-bottom: 1.3em;
}
.smpl-doctors .smpl-doctorBox .smpl-detail-info.align-bottom {
    font-family: "latoBold";
    display: block;
    margin-top: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    background-color: #ff8b02;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-top: 12px;
}
.smpl-doctors .smpl-doctorBox .smpl-detail-info.align-bottom:hover {
    background-color: #009fe3;
}
</style>
`
                jQuery("head").append(css);
                var doctorList = {
                    1: {
                        href: "/doktor/uzm-dyt-tuba-ornek",
                        img: "https://docsd.anadolusaglik.org/doctor/crops/220x150/uzm_dyt_36323.jpg",
                        uzm: "Uzm. Dyt.",
                        name: "Tuba Örnek",
                        department: "Beslenme ve Diyet",
                        text: "2016 yılından bu yana Anadolu Sağlık Merkezi’nde beslenme ve diyet uzmanı olarak görevini sürdürüyor.",
                    },
                    2: {
                        href: "/doktor/uzm-dyt-nilufer-yuceli",
                        img: "https://docsd.anadolusaglik.org/doctor/crops/220x150/uzm_dyt_76283.jpg",
                        uzm: "Uzm. Dyt.",
                        name: "Nilüfer Yüceli",
                        department: "Beslenme ve Diyet",
                        text: "2017 yılından bu yana Anadolu Sağlık Merkezi’nde Beslenme ve Diyet Uzmanı olarak görevini sürdürüyor.",
                    },
                    3: {
                        href: "/doktor/uzm-dyt-basak-insel-aydin",
                        img: "https://docsd.anadolusaglik.org/doctor/crops/220x150/uzm_dyt_43988.jpg",
                        uzm: "Uzm. Dyt.",
                        name: "Başak İnsel Aydın",
                        department: "Beslenme ve Diyet",
                        text: "2021 yılından bu yana Anadolu Sağlık Merkezi’nde beslenme ve diyet uzmanı olarak görevini sürdürüyor.",
                    }
                }
                var html = `
<div class="smpl-doctors">
`
for (let arr in doctorList) {
    html =
      html +
      `<div class="smpl-doctorBox">
      <div class="smpl-imgWrap">
          <a href="`+doctorList[arr].href+`">
              <img src="`+doctorList[arr].img+`">
          </a>
      </div>
      <a class="smpl-doctor-link-wrap" href="`+doctorList[arr].href+`">
          <div class="smpl-textWrap">
              <h4>
              `+doctorList[arr].uzm+` <br>`+doctorList[arr].name+`
              </h4>
              <div class="smpl-text">
                  <p>
                  `+doctorList[arr].department+`<br>
                  </p>
                  <div class="desc">
                      <p>`+doctorList[arr].text+`</p>
                  </div>
              </div>
              <span class="smpl-detail-info doctor-detail-info-link align-bottom">Doktoru Tanıyın</span>
          </div>
      </a>
  </div>`;
  }
  html = html + `</div>`;
                jQuery("#item-1").after(html);
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
                jQuery(".smpl-doctorBox").click(function () {
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
    var _ed_Doctor_Beslenme_Card = new EightDigits.sf();
    _ed_Doctor_Beslenme_Card.Doctor_Beslenme_Card();
})();
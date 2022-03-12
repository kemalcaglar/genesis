(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Beslenme_Blog_Yonlendirme")) {
        return false
    }
    EightDigits.sf.prototype.Beslenme_Blog_Yonlendirme = function () {
        var config = {
            scenarioname: "Beslenme_Blog_Yonlendirme",
            analytics: "Beslenme_Blog_Yonlendirme",
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
                jQuery("#bedenKitleEndeksBtn").click(function () {
                    if (jQuery(".test-box.test-result h5:first").text() == "Obez." || jQuery(".test-box.test-result h5:first").text() == "İleri derece Obez")
                        if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 3333) {
                            var beslenmeOneri = {
                                1: {
                                    title: "Ameliyat Sonrası",
                                    href: "/blog/obezite-ameliyati-sonrasi-bu-10-oneriye-dikkat",
                                    blogImg: "https://docsd.anadolusaglik.org/blog/crops/600x340/obezite_ameliyati_sonrasi_bu_10_oneriye_dikkat_22571.jpg",
                                    subTitle: "Obezite ameliyatı sonrası bu 10 öneriye dikkat!",
                                    updateDate: "13 Temmuz 2021",
                                    dateTime: "2021-07-13",
                                    doctorImg: "https://docsd.anadolusaglik.org/doctor/crops/220x150/doc_dr_21529.jpg",
                                    doctorName: "Doç. Dr. Abdulcabbar Kartal",
                                    department: "Genel Cerrahi",
                                },
                            };
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-ameliyatSonrasi');
                        } else if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 6666 && parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) > 3333) {
                            var beslenmeOneri = {
                                1: {
                                    title: "Obezite ve Tedavisi",
                                    href: "/blog/obezite-ve-tedavisi",
                                    blogImg: "https://docsd.anadolusaglik.org/blog/crops/600x340/obezite_ve_tedavisi_16961.jpg",
                                    subTitle: "Obezite ve Tedavisi",
                                    updateDate: "15 Haziran 2021",
                                    dateTime: "2021-06-15",
                                    doctorImg: "https://docsd.anadolusaglik.org/doctor/crops/220x150/doc_dr_21529.jpg",
                                    doctorName: "Doç. Dr. Abdulcabbar Kartal",
                                    department: "Genel Cerrahi",
                                },
                            };
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-obeziteTedavisi');
                        } else {
                            var beslenmeOneri = {
                                1: {
                                    title: "Düzensiz Beslenme ve Gastrit",
                                    href: "/blog/duzensiz-beslenme-ve-sigara-gastrit-sebebi",
                                    blogImg: "https://docsd.anadolusaglik.org/blog/crops/600x340/duzensiz_beslenme_ve_sigara_gastrit_sebebi_59739.jpg",
                                    subTitle: "Düzensiz beslenme ve sigara gastrit sebebi",
                                    updateDate: "09 Temmuz 2021",
                                    dateTime: "2021-07-09",
                                    doctorImg: "https://docsd.anadolusaglik.org/doctor/crops/220x150/doc_dr_21529.jpg",
                                    doctorName: "Doç. Dr. Abdulcabbar Kartal",
                                    department: "Genel Cerrahi",
                                },
                            };
                            EightDigits.analytics.sendEvent(config.analytics, 'shown-duzensizBeslenme');
                        }
                    var css = `
                <style>
                .smpl-oneri-kulakcik {
                    position: fixed;
                    right: -67px;
                    transform: rotate(-90deg);
                    background: #ff8b02;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    display: none;
                    cursor: pointer;
                    z-index: 999;
                }
                .smpl-oneri-kulakcik span {
                    text-align: center;
                    width: 100%;
                    display: block;
                    font-size: 19px;
                    padding: 10px;
                    color: #fff;
                }
                .smpl-blog-oneri .smpl-blog-box {
                    float: left;
                    width: 300px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                    box-shadow: -2px 3px 8px -3px #000;
                    position: fixed;
                    right: -324px;
                    bottom: 100px;
                    border-radius: 5px 5px 5px 0;
                    z-index: 999;
                 }
                 .smpl-blog-oneri .smpl-blog-box .blog-box-close {
                    font-size: 30px;
                    color: #fff;
                    right: 10px;
                    width: auto;
                    z-index: 99999999;
                    display: flex;
                    position: absolute;
                    font-weight: 600;
                    cursor: pointer;
                 }
                .smpl-blog-oneri a {
                    width: 100%;
                }
                .smpl-blog-oneri .imgWrap {
                    width: 100%;
                    height: 170px;
                    overflow: hidden;
                    border-radius: 5px 5px 0 0;
                    position: relative;
                    background-color: #ebebea;
                }
                .imgWrap img {
                    position: absolute;
                    left: 50%;
                    width: 100%;
                    -ms-transform: translateX(-50%);
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    -webkit-transition: all 1s ease;
                    transition: all 1s ease;
                }
                .smpl-blog-oneri .box .text {
                    width: 100%;
                    height: 260px;
                    border-radius: 0 0 5px 5px;
                    padding: 20px;
                    box-sizing: border-box;
                    background-color: #ebebea;
                    position: relative;
                }
                .smpl-blog-oneri .box .text time {
                    display: block;
                    font-family: 'latoRegular';
                    font-size: 13px;
                    color: #424242;
                    margin-bottom: 5px;
                }
                .smpl-blog-oneri .box .text .news-videos-title {
                    font-family: 'latoBold';
                    font-size: 18px;
                    color: #424242;
                    line-height: 1.2;
                    height: 60px;
                    overflow: hidden;
                    width: 100%;
                }
                .smpl-blog-oneri .box .text .doctorInfo {
                    margin-top: 25px;
                    margin-bottom: 0;
                    width: 100%;
                    height: 70px;
                }
                .smpl-blog-oneri .box .text .doctorInfo .imgWrap {
                    float: left;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                    margin-right: 10px;
                }
                .smpl-blog-oneri .box .text .doctorInfo .imgWrap img {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -5px;
                    width: 190%;
                }
                .smpl-blog-oneri .box .text .doctorInfo .person {
                    float: left;
                    width: 190px;
                    padding-top: 5px;
                }
                .smpl-blog-oneri .box .text .doctorInfo .person h3{
                    margin-bottom: 0;
                    font-family: 'latoBold';
                    font-size: 15px;
                }
                .smpl-blog-oneri .box .text .doctorInfo .person span{
                    text-align: inherit;
                    font-size:13px;
                    font-family: 'latoRegular';
                }
                .smpl-blog-oneri .box .text .doctorInfo .person h3,
                .smpl-blog-oneri .box .text .doctorInfo .person span {
                    color: #424242;
                }
                .smpl-blog-oneri .box .text .links {
                    position: relative;
                    width: 100%;
                    box-sizing: border-box;
                    margin-top: 10px;
                }
                .smpl-blog-oneri .box .text .links span {
                font-family: 'latoBold';
                color: #009fe3;
                font-size: 16px;
                text-align: end;
                }
                </style>
                `

                    jQuery("head").append(css);
                    for (let arr in beslenmeOneri) {
                        var html = `
                <div class="smpl-oneri-kulakcik">
                <span>` + beslenmeOneri[arr].title + `</span>
                </div>
<div class="smpl-blog-oneri">
<div class="box smpl-blog-box" data-font="true">
<span class="blog-box-close">&times;</span>
<a href="` + beslenmeOneri[arr].href + `">
<div class="imgWrap">			
<img src="` + beslenmeOneri[arr].blogImg + `" alt="` + beslenmeOneri[arr].subTitle + `">
</div>
<div class="text">
<time datetime="` + beslenmeOneri[arr].dateTime + `">Son güncellenme tarihi: ` + beslenmeOneri[arr].updateDate + `</time>
<h3 class="news-videos-title">` + beslenmeOneri[arr].subTitle + `</h3>
<div class="doctorInfo">
<div class="imgWrap">
<img src="` + beslenmeOneri[arr].doctorImg + `" alt="` + beslenmeOneri[arr].doctorName + `">
</div>
<div class="person">
<h3>` + beslenmeOneri[arr].doctorName + `</h3>
<span>` + beslenmeOneri[arr].department + `</span>
</div>
</div>
<div class="links">
<span>Detaylı Oku</span>
</div>
</div>
</a>
</div>
</div>`
                    }
                    jQuery(".menuWrap.white-section").append(html);
                    setTimeout(function (){
                        jQuery(".smpl-blog-box").animate({
                            right: "-20px"
                        }, 1200)
                    },100)
                    jQuery(".smpl-oneri-kulakcik").click(function () {
                        jQuery(".smpl-blog-box").animate({
                            right: "-20px"
                        }, 1200)
                        jQuery(".smpl-oneri-kulakcik").css({"display":"none"})
                    })
                    jQuery(".blog-box-close").click(function () {
                        jQuery(".smpl-blog-box").animate({
                            right: "-324px"
                        }, 1200)
                        jQuery(".smpl-oneri-kulakcik").css({"display":"flex"})
                    })
                    if (jQuery(".smpl-oneri-kulakcik span").text() == "Düzensiz Beslenme ve Gastrit") {
                        jQuery(".smpl-oneri-kulakcik").css({"right": "-117px"})
                        jQuery(".smpl-oneri-kulakcik").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-kulakcikGastrit');
                        })
                        jQuery(".smpl-blog-box a").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-gastrit');
                        })
                        jQuery(".blog-box-close").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-closeGastrit');
                        })
                    }
                    if (jQuery(".smpl-oneri-kulakcik span").text() == "Obezite ve Tedavisi") {
                        jQuery(".smpl-oneri-kulakcik").css({"right": "-72px"})
                        jQuery(".smpl-oneri-kulakcik").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-kulakcikTedavi');
                        })
                        jQuery(".smpl-blog-box a").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-tedavi');
                        })
                        jQuery(".blog-box-close").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-closeTedavi');
                        })
                    }
                    if (jQuery(".smpl-oneri-kulakcik span").text() == "Ameliyat Sonrası") {
                        jQuery(".smpl-oneri-kulakcik").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-kulakcikAmeliyat');
                        })
                        jQuery(".smpl-blog-box a").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-ameliyat');
                        })
                        jQuery(".blog-box-close").click(function () {
                            EightDigits.analytics.sendEvent(config.analytics, 'click-closeAmeliyat');
                        })
                    }
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
    var _ed_Beslenme_Blog_Yonlendirme = new EightDigits.sf();
    _ed_Beslenme_Blog_Yonlendirme.Beslenme_Blog_Yonlendirme();
})();
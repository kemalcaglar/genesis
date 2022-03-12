(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("onOdemeliKartTab")) {
        return false
    }
    EightDigits.sf.prototype.onOdemeliKartTab = function () {

        var config = {
            scenarioname: "onOdemeliKartTab",
            analytics: "onOdemeliKartTab",
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
                jQuery('#ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e .col-xs-12.col-md-12.top-buffer .nav.nav-tabs.responsive:eq(0)').append('<li><a data-toggle="tab" href="#tab3">Ön Ödemeli Kartlar</a></li>');
                EightDigits.analytics.sendEvent(config.analytics, "Shown");

                var kartListing = '\
                <div id="tab3" class="tab-pane fade">\
                <div class="row">\
                            <div class="col-md-3">\
                            <div class="max-card-item" style="height: inherit;">\
                                <div class="row">\
                                    <div class="col-md-12">\
                                        <a href="/TR/kartlar/maximum-gaming-kart" class="max-card-link">\
                                            <img src="/content-management/PublishingImages/kart-gorsel/maximum-gaming-kart.png">\
                                            </a><a href="/TR/kartlar/maximum-gaming-kart">\
                                                <h3 style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                Maximum Gaming Kart</h3>\
                                            </a>\
                                            <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                Artık gamerlar Maximum Gaming Kart’ı kullanıyor, %5 Gaming Puan Kazanıyor!</p>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-md-12 card-action">\
                                        <a href="/TR/kartlar/maximum-gaming-kart" id="ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e_ctl00_rptComparison_ctl05_A1" class="max-card-textlink">\
                                            Detaylı Bilgi</a>\
                                    </div>\
                                </div>\
                            </div>\
                            </div>\
                            <div class="col-md-3">\
                                <div class="max-card-item" style="height: inherit;">\
                                    <div class="row">\
                                        <div class="col-md-12">\
                                            <a href="/TR/kartlar/maxipara-kart" class="max-card-link">\
                                                <img src="/content-management/PublishingImages/kart-gorsel/new/maxipara_on_odemeli_kart_mastercard_2406_300x189.png">\
                                                </a><a href="/TR/kartlar/maxipara-kart">\
                                                    <h3 style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                    MaxiPara Kart</h3>\
                                                </a>\
                                                <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                    Maximum Mobil’den Anında MaxiPara Kart’a başvurun!</p>\
                                        </div>\
                                    </div>\
                                    <div class="row">\
                                        <div class="col-md-12 card-action">\
                                            <a href="/TR/kartlar/maxipara-kart" id="ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e_ctl00_rptComparison_ctl05_A1" class="max-card-textlink">\
                                                Detaylı Bilgi</a>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-md-3">\
                                <div class="max-card-item" style="height: inherit;">\
                                    <div class="row">\
                                        <div class="col-md-12">\
                                            <a href="/TR/kartlar/dijital-bankamatik-karti" class="max-card-link">\
                                                <img src="/content-management/PublishingImages/kart-gorsel/new/bankamatik_temassiz_visa_300x189.png">\
                                                </a><a href="/TR/kartlar/dijital-bankamatik-karti">\
                                                    <h3 style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                    Dijital Bankamatik Kartı</h3>\
                                                </a>\
                                                <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                Dijital Bankamatik Kartı ile kartınızın teslimatını beklemeden internette alışveriş ve mobil ödeme dünyasına giriş yapın! </p>\
                                        </div>\
                                    </div>\
                                    <div class="row">\
                                        <div class="col-md-12 card-action">\
                                            <a href="/TR/kartlar/dijital-bankamatik-karti" id="ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e_ctl00_rptComparison_ctl05_A1" class="max-card-textlink">\
                                                Detaylı Bilgi</a>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-md-3">\
                                <div class="max-card-item" style="height: inherit;">\
                                    <div class="row">\
                                        <div class="col-md-12">\
                                            <a href="/TR/kartlar/1907-fenerbahce-maximum-gaming-kart/Sayfalar/1907-fenerbahce-maximum-gaming-kart.aspx" class="max-card-link">\
                                                <img src="https://www.maximum.com.tr/content-management/PublishingImages/kart-gorsel/new/maximum_gaming_FB_Visa.png">\
                                                </a><a href="/TR/kartlar/1907-fenerbahce-maximum-gaming-kart/Sayfalar/1907-fenerbahce-maximum-gaming-kart.aspx">\
                                                    <h3 style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                    1907 Fenerbahçe Maximum Gaming Kart</h3>\
                                                </a>\
                                                <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                Fenerbahçe taraftarı e-spor severlere özel 1907 Maximum Gaming Kart! </p>\
                                        </div>\
                                    </div>\
                                    <div class="row">\
                                        <div class="col-md-12 card-action">\
                                            <a href="/TR/kartlar/1907-fenerbahce-maximum-gaming-kart/Sayfalar/1907-fenerbahce-maximum-gaming-kart.aspx" id="ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e_ctl00_rptComparison_ctl05_A1" class="max-card-textlink">\
                                                Detaylı Bilgi</a>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
			<div class="col-md-3">\
                                    <div class="max-card-item" style="height: inherit;">\
                                        <div class="row">\
                                            <div class="col-md-12">\
                                                <a href="/TR/kartlar/dogasever-maxipara-kart" class="max-card-link">\
                                                    <img alt="Doğasever MaxiPara Kart" src="/content-management/PublishingImages/kart-gorsel/new/dogasever-maxipara_flamingo_300x190.png">\
                                                    </a><a href="/TR/kartlar/dogasever-maxipara-kart">\
                                                        <h3 style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                            Doğasever MaxiPara Kart</h3>\
                                                    </a>\
                                                <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical;">\
                                                 Bankamız müşterisi olmasanız bile Maximum Mobil’den Doğasever MaxiPara Kart’ınızı oluşturup, dijital karınıza para yükleyerek alışverişlerinizde anında kullanmaya başlayabilirsiniz! </p>\
                                            </div>\
                                        </div>\
                                        <div class="row">\
                                            <div class="col-md-12 card-action">\
                                                <a href="/TR/kartlar/dogasever-maxipara-kart" id="ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e_ctl00_rptComparison_ctl10_A1" class="max-card-textlink">\
                                                    Detaylı Bilgi</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                </div>\
                </div>'

                jQuery('#ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e .col-xs-12.col-md-12.top-buffer .tab-content.responsive').append(kartListing);


                jQuery('#ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e .col-xs-12.col-md-12.top-buffer .nav.nav-tabs.responsive:eq(0) li:eq(2)').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "OnOdemeli_Click");
                });

                jQuery('#ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e .col-xs-12.col-md-12.top-buffer .nav.nav-tabs.responsive:eq(0) li:eq(0)').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "Maximum_Click");
                });

                jQuery('#ctl00_m_g_3ec35e31_78e1_48aa_a0eb_c9d98d1f357e .col-xs-12.col-md-12.top-buffer .nav.nav-tabs.responsive:eq(0) li:eq(1)').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "Logolu_click");
                });

            },
            control: function () {
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
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
    var _ed_onOdemeliKartTab = new EightDigits.sf();
    _ed_onOdemeliKartTab.onOdemeliKartTab();
})();
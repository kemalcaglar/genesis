(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("coronaBilgilendirmeHeader")) {
        return false
    }
    EightDigits.sf.prototype.coronaBilgilendirmeHeader = function () {
  
        var config = {
            scenarioname: "coronaBilgilendirmeHeader",
            analytics: "coronaBilgilendirmeHeader",
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
  
                headerSizeAdjustment = function () {
                    if (window.innerWidth < 501){
                        jQuery('#ed_header').attr('style', 'position: relative;width: 100%;cursor: pointer;margin: 0 auto;text-align: center;background-color: #fff5f5;height: 40px;line-height: 15px;font-size: 12px !important;color:#1c1c1c')
                        jQuery('#ed_header p').attr('style', 'font-weight: 500 !important;padding-top: 8px; width:90%');
                        jQuery('#ed_header a').attr('style', ' font-weight: 500 !important; margin: 0; font-family: &quot;Source&quot;,sans-serif !important; font-size: 12px !important; text-decoration: none !important;');
                        jQuery('#ed_header_close').attr('style', 'color: rgb(206, 35, 51);position: absolute;cursor: pointer;width: 50px;height: 40px;right: -8px!important;top: 12px;') 
                        jQuery('.top-area.show-onload').attr('style','margin-top:40px');
                        } else if (window.innerWidth > 500){ 
                            jQuery('#ed_header').attr('style', 'position: relative;width: 100%;cursor: pointer;margin: 0 auto;text-align: center;background-color: #fff5f5;height: 40px;line-height: 40px;color:#1c1c1c');
                            jQuery('#ed_header p').attr('style', 'font-weight: 500 !important;');
                            jQuery('#ed_header a').attr('style', ' font-weight: 500 !important; margin: 0; font-family: &quot;Source&quot;,sans-serif !important; font-size: 15px !important; text-decoration: none !important;');
                            jQuery('.global-wrap').attr('style','margin-top:142px');
                        };
                };
                jQuery('header:eq(0)').prepend('<div id="ed_header" style="position: relative;width: 100%;cursor: pointer;margin: 0 auto;text-align: center;background-color: #fff5f5;height: 40px;line-height: 40px; color:#1c1c1c"> <p style=" font-weight: 500 !important;">Yeni Koronavirüs (Covid-19) Küresel salgını hakkında bilgilendirme için <a href="https://www.setur.com.tr/koronavirus-hakkinda-bilgilendirme" style=" font-weight: 500 !important; margin: 0; font-family: &quot;Source&quot;,sans-serif !important; font-size: 15px !important; text-decoration: underline !important;">tıklayınız</a></p><div id="ed_header_close" style="color: rgb(206, 35, 51);position: absolute;cursor: pointer;width: 50px;height: 40px;right: 70px!important;top: 0px;">x</div></div>');
  
                var css = '\
                <style>\
                .ed_header_css_edit{padding-top:173px}\
                </style>\
                '
                jQuery('head').append(css)
                jQuery('.body-wrapper').addClass('ed_header_css_edit');
                EightDigits.analytics.sendEvent(config.analytics, "Shown");
    
                jQuery('#ed_header').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, "Click");
                    window.location = "https://www.setur.com.tr/koronavirus-hakkinda-bilgilendirme"
                })
    
                jQuery('#ed_header_close').click(function () {
                    EightDigits.utils.setCookie('ed-CovidHeaderClose','on', 12*60);
                    jQuery('#ed_header').remove();
                    jQuery('.top-area.show-onload').attr('style','margin-top:0px');
                    EightDigits.analytics.sendEvent(config.analytics, "Close");
                    jQuery('.body-wrapper').removeClass('ed_header_css_edit');
                    jQuery('.global-wrap').attr('style','')
                });
    
                var temp_right
           
                headerSizeAdjustment();
    
                jQuery(window).on("resize", function () {
                    headerSizeAdjustment();
                })
            },
            control: function () {
                if(window.location.href.indexOf("Booking") !== -1 || window.location.href.indexOf("koronavirus-hakkinda-bilgilendirme") !== -1 || window.location.href.indexOf('odeme') > -1 || window.location.href.indexOf("blue-waters-club?utm_source=BlueWaters&utm_medium=referral&utm_campaign=sales-redirect") > -1 || window.location.pathname.indexOf("blue-waters-club") > -1  ){
                    return false;
                }
  
                if(EightDigits.utils.getCookie('ed-CovidHeaderClose')){
                    return false
                }
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
    var _ed_coronaBilgilendirmeHeader = new EightDigits.sf();
    _ed_coronaBilgilendirmeHeader.coronaBilgilendirmeHeader();
  })();
  
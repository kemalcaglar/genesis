(function () {
    EightDigits.sf.prototype.appdownload = function () {

        var config = {
            scenarioname: "appdownload",
            analytics: "AppDownload",
            controlgroup: "20",
            agent: ""
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
                if (randomVal < 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {
                var title = "";
                var icon_url = "";
                var url = "";
                var state = false;
                if(config.agent === "Android") {
                   title = "Android Mobil Uygulama";
                   icon_url = "https://www.anadolusaglik.org/assets/img/anadolu-saglik-mobil-uygulamasi.jpg";
                   url = "https://play.google.com/store/apps/details?id=com.positive.anadolusaglik";
                   state = true;
                }
                else if(config.agent === "IOS") {
                   title = "IOS Mobil Uygulama";
                   icon_url = "https://www.anadolusaglik.org/assets/img/anadolu-saglik-mobil-uygulamasi.jpg";
                   url = "https://itunes.apple.com/tr/app/anadolu-sa%C4%9Fl%C4%B1k/id1334128691?l=tr&mt=8";
                   state = true;
                }
                if (state){
                   var fontSize = Math.floor(window.innerWidth/30) + 2;
                   var css = '<style type="text/css">'+
                    '.ed_app_download{position: fixed;z-index:10000;top:0px;left:0px;width:100%;overflow:hidden;height:64px;background:white;color:#333;border-top: 1px solid #ddd;font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;border-bottom:solid 1px #ddd;}'+
                    '.ed_app_download .ed_app_download_close_button{margin:0px 0 0 12px;line-height:32px;display: inline-block;float: left;height: 51px;width: 22px;padding-top: 17px;text-align: center;color: grey;font-size: 28px;}'+
                    '.ed_app_download .ed_app_download_icon{float:left;width: 65px;height: 65px;}'+
                    '.ed_app_download .ed_app_download_icon img{width: 45px;height: 45px;margin: 16% 16% 16% 16%;border-radius: 10px;-webkit-border-radius: 10px;-moz-border-radius: 10px;}'+
                    '.ed_app_download .ed_app_download_text{color:black;line-height:13px;padding-top: 7px;padding-bottom: 1px;font-size: '+fontSize+'px; font-weight:bold;}'+
                    '.ed_app_download .ed_app_download_open_button{float:left;font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;font-size:14px;letter-spacing:1px;background:#00c572;display:block;color:#ffffff;text-decoration:none;border-radius: 3px;-webkit-border-radius: 11px;-moz-border-radius: 3px;padding: 7px 10px 7px 10px;margin: 20px 20px 0px 0; border:1px solid #93bead;}'+
                    '.ed_app_download .ed_app_download_right{float: right;margin-left: 4px;max-width: 120px;overflow: hidden;}'+
                    '</style>';
                   jQuery('head').append(css);
                   var html = '<div class="ed_app_download">' +
                    '<div class="ed_app_download_right"><a class="ed_app_download_open_button" target="_blank" href="'+url+'">İNDİR</a></div>'+
                    '<div class="ed_app_download_left">'+
                    '<a class="ed_app_download_close_button">×</a>'+
                    '<div class="ed_app_download_icon"><a href="'+url+'" target="_blank"><img src="'+icon_url+'" /></a></div>'+
                    '<div class="ed_app_download_text"><a href="'+url+'" target="_blank" style="color:black;">'+title+'</a><br><a href="'+url+'" target="_blank" style="color:#6a6767; font-size:10px;">Ücretsiz</a><br>\
                    <a href="'+url+'" target="_blank" style="color:black; font-size:11px;">Online randevu alın ve test sonuçlarınızı hemen görüntüleyin.</a> </div>'+
                    '</div>'+
                    '</div>';
                    jQuery('body').append(html);
                    jQuery('body').css("top","66px");
                    EightDigits.analytics.sendEvent(config.analytics+"-"+config.agent, "Shown");
                    jQuery('ed_app_download_open_button').click(function(){
                        EightDigits.analytics.sendEvent(config.analytics+"-"+config.agent, "Click");
                    });
                    jQuery('body div.ed_app_download a').click(function(){
                        jQuery(this).closest('.ed_app_download').animate({top:-66},{duration:300,step:function(fx){
                        jQuery('body').css('top',fx+65+1);
                    },complete:function(){
                            jQuery(this).remove();
                        }});
                    });
                }
            },
            init: function () {
                var userAgent = navigator.userAgent.toLowerCase();
                if(userAgent.indexOf("android") > -1) config.agent = "Android";
                else if(userAgent.indexOf("iphone")>-1 || userAgent.indexOf("ipad")>-1) config.agent = "IOS";
                var _exec = main.factory.prototype.random();
                if (!_exec) {
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
    var _ed_appdownload = new EightDigits.sf();
    _ed_appdownload.appdownload();
})();
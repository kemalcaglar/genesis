(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("moi_basvuru_adimlari")) {
        return false
    }
    EightDigits.sf.prototype.moi_basvuru_adimlari = function () {

        var config = {
            scenarioname: "moi_basvuru_adimlari",
            analytics: "moi_basvuru_adimlari",
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
                var IExplorerAgent = !!document.documentMode;
        if(IExplorerAgent == true){
            return false;
        }else {
            jQuery('head').append('<style> @keyframes itemOpen3 {  0% {left: 0px;}   100% {  left:190px;   }}  @keyframes itemClose3 {  0% {bottom: 27px;}   100% {  bottom:150px;   }} .ed-yilbasi-main.smpl-active{ animation: itemOpen3 0.5s linear forwards;} .ed-yilbasi-main.smpl-passive{ animation: itemClose3 0.5s linear forwards;} .ed-yilbasi-group.smpl-passive{ animation: itemClose2 0.5s linear forwards;} .ed-yilbasi-group.smpl-active{ animation: itemOpen2 0.5s linear forwards;} .ed-yilbasi-item.smpl-passive{ animation: itemClose 0.5s linear forwards;} .ed-yilbasi-item.smpl-active{ animation: itemOpen 0.5s linear forwards;}  @keyframes itemOpen {  0% {left: 190px;}   100% {  left:425px;   }}@keyframes itemClose {    0% {left: 425px;}   100% {  left:190px;   }} @keyframes itemOpen2 {  0% {left: -310px;}   100% {  left:190px;   }} @keyframes itemClose2 {    0% {left: 20px;}   100% {  left:190px;   }} .ed-yilbasi-group{position: absolute; top: 58px; left: -428px; z-index: 9;}.ed-yilbasi-group ul{display: inline-block; list-style: none; padding: 1px; margin: 0; color: #fff; position: relative;}.ed-yilbasi-group ul li{   padding: 11px; background-image: linear-gradient(#0C9FFC, #003a72); position: relative; border-bottom-right-radius:10px;border-top-right-radius:10px;}.ed-yilbasi-group ul li img{width: 30px; vertical-align: middle; margin-left: 20px;}.ed-yilbasi-group ul li:first-child{}.ed-yilbasi-group ul li:last-child{}.ed-yilbasi-group ul li a{ font-weight:bold;display:flex;position:relative;right:-4px;justify-content:space-between;align-items:center;  width: 100%; height: 100%; text-decoration: none; color: #fff;font-size: 16px;}</style>');
            jQuery('#ctl00_ctl19_g_27491067_d207_4a7d_bc3d_d21cb4b53655').after('<div class="ed-yilbasi-container" style="position:relative;top:-42px;"><div class="ed-yilbasi-main" style="border-bottom-right-radius:10px;border-top-right-radius:10px;cursor:pointer;background-image: linear-gradient(#0C9FFC, #003a72); position:absolute;left:0px;z-index:9;height:59px;flex-direction:column;width:182.47px;display:flex;align-items:center;justify-content:center;font-size:17px;color:white;font-weight:bold;"><span style="font-size:15px;display:flex;align-items:center;">4 Adımda Müşterimiz Olun</span></div></div>')
            jQuery('.ed-yilbasi-container').append('<div class="ed-yilbasi-group"> <ul><li class="ed-yilbasi-item" style="left: 190px;"><a href="https://www.isbank.com.tr/iscep?utm_source=isbank&utm_medium=smpl&utm_campaign=info">İşCep indir<img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/1.png" style="float: right;border: 1px dashed #ffffff;border-radius:100%;\
padding: 3px;"></a></li><li class="ed-yilbasi-item" style="left: 190px;"><a href="javascript:void(0)">Formu doldur<img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/2.png" style="float: right;border: 1px dashed #ffffff;border-radius:100%;;\
padding: 3px;"></a></li><li class="ed-yilbasi-item" style="left: 190px;"><a href="javascript:void(0)">Kimliğini doğrula<img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/3.png" style="float: right;border: 1px dashed #ffffff;border-radius:100%;\
padding: 3px;"></a></li><li class="ed-yilbasi-item" style="left: 190px;"><a href="javascript:void(0)">Görüntülü görüşme başlat<img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/4.png" style="float: right;border: 1px dashed #ffffff;border-radius:100%;\
padding: 3px;"></a></li><li class="ed-yilbasi-item" style="left: 190px;"><a href="javascript:void(0)">İş Bankası ailesine hoş geldin <img src="https://gorsel.isbank.com.tr/markisbank/isbank/checked-buttom.png" style="float: right;border: 1px dashed #ffffff;border-radius:100%;\
padding: 3px;"></a></li></ul></div>');
        
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            }
        
            jQuery('.ed-yilbasi-main').click(function(){

                if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-click')) {
                    EightDigits.analytics.sendEvent(config.analytics, 'Click');
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on')
                }

                if( !jQuery('.ed-yilbasi-group').hasClass("smpl-active") )
                    {
                        jQuery('.ed-yilbasi-main').css("border-bottom-right-radius","0px")

                        jQuery('.ed-yilbasi-item').addClass("smpl-active")
                        jQuery('.ed-yilbasi-item').removeClass("smpl-passive")

                    }
                    else{
                        jQuery('.ed-yilbasi-main').css("border-bottom-right-radius","10px")

                        jQuery('.ed-yilbasi-item').addClass("smpl-passive")

                        jQuery('.ed-yilbasi-item').removeClass("smpl-active")
                    }
            
            })
            
            jQuery('.ed-yilbasi-group ul li a').click(function(){
            })


            if(window.innerWidth>800){
                jQuery('.ed-yilbasi-group ul li').mouseenter(function () {
                    if(!jQuery(this).hasClass('smpl-active')){
                        jQuery(this).addClass("smpl-active")
                        jQuery(this).removeClass("smpl-passive")
                    }
                }).mouseleave(function () {
                    if(jQuery(this).hasClass('smpl-active')){
                        jQuery(this).addClass("smpl-passive")
                        jQuery(this).removeClass("smpl-active")
                    }
                })
            }
            else{
            jQuery('.ed-yilbasi-group ul li').click(function () {
                    if(!jQuery(this).hasClass('smpl-active')){
                        jQuery(this).addClass("smpl-active")
                        jQuery(this).removeClass("smpl-passive")
                    }
                    else{
                        jQuery(this).addClass("smpl-passive")
                        jQuery(this).removeClass("smpl-active")
                    }
                }).mouseleave(function () {
                    if(jQuery(this).hasClass('smpl-active')){
                        jQuery(this).addClass("smpl-passive")
                        jQuery(this).removeClass("smpl-active")
                    }
                })
            }
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
    var _ed_moi_basvuru_adimlari = new EightDigits.sf();
    _ed_moi_basvuru_adimlari.moi_basvuru_adimlari();
})();


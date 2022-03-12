(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Blog_Banner_5li")) {
        return false
    }
    EightDigits.sf.prototype.Blog_Banner_5li = function () {
        var config = {
            scenarioname: "Blog_Banner_5li",
            analytics: "Blog_Banner_5li",
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
                var bannerList = {
                    "tumor": {
                        name:"tumor",
                        imgSrc: "https://cdn.8digits.com/log/r/fa458163-3704-4249-9fb5-8a299fb4fd7a.jpeg",
                        href:"https://www.anadolusaglik.org/blog/tumor-kurullari?utm_source=smpl&utm_medium=website&utm_campaign=bannertumor"
                    },
                    "radyasyon":{
                        name:"radyasyon",
                        imgSrc: "https://cdn.8digits.com/log/r/00f567aa-ae01-4702-9a39-44289b3a419e.jpeg",
                        href:"https://www.anadolusaglik.org/radyasyon-onkolojisi-bolumu?utm_source=smpl&utm_medium=website&utm_campaign=bannerradyasyon"
                    },
                    "onkoloji":{
                        name:"onkoloji",
                        href: "https://www.anadolusaglik.org/onkoloji-merkezi?utm_source=smpl&utm_medium=website&utm_campaign=banneronkoloji",
                        imgSrc:"https://cdn.8digits.com/log/r/5d2d37c4-4070-46ed-97f1-5d2209a8d5da.jpeg"
                    },
                    "hibrit":{
                        name:"hibrit",
                        imgSrc: "https://cdn.8digits.com/log/r/279ff4a3-2f85-45b1-bf42-8f138e4c20b5.jpeg",
                        href:"https://www.anadolusaglik.org/hastane-olanaklari/hibrit-ameliyathane?utm_source=smpl&utm_medium=website&utm_campaign=bannerhibrit",
                    },
                    "ctc":{
                        name:"ctc",
                        imgSrc: "https://cdn.8digits.com/log/r/932b315b-c8a0-4a7c-8c14-ab8f4f9db3ba.jpeg",
                        href:"https://www.anadolusaglik.org/onkoloji-merkezi?utm_source=smpl&utm_medium=website&utm_campaign=bannerctc"
                    }
                }
                
                var imgSrc= "";
                var link =""
                var linkName =""
                if(Number(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<2000){
                   imgSrc = bannerList.tumor.imgSrc;
                   link=bannerList.tumor.href;
                   linkName=bannerList.tumor.name;
                }
               else  if(Number(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<4000){
                imgSrc = bannerList.radyasyon.imgSrc;
                link=bannerList.radyasyon.href;
                linkName=bannerList.radyasyon.name;
                }
                else  if(Number(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<6000){
                    imgSrc = bannerList.onkoloji.imgSrc;
                    link=bannerList.onkoloji.href;
                    linkName=bannerList.onkoloji.name;
                }
                else  if(Number(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<8000){
                    imgSrc = bannerList.hibrit.imgSrc;
                    link=bannerList.hibrit.href;
                    linkName=bannerList.hibrit.name;
                }
                else  if(Number(EightDigits.utils.getCookie('_ed_' + config.scenarioname))<10001){
                    imgSrc = bannerList.ctc.imgSrc;
                    link=bannerList.ctc.href;
                    linkName=bannerList.ctc.name;
                }
                jQuery('.random-banners').empty()
                var html = '<a class="ed-banner" style="display:block;"   href="'+link+'"><img src="'+imgSrc+'"></a>'
                jQuery('.random-banners').append(html)
                EightDigits.analytics.sendEvent(config.analytics, "Shown_"+linkName);
                jQuery('.ed-banner').click(function(){
            EightDigits.analytics.sendEvent(config.analytics, "Click_"+linkName);
                })
            },
            control: function () {
                var linkArr= ["utm_source=googleads&utm_medium=search&utm_campaign=brand","utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=atasehir","utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=doktorlar","utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=gebze","utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=randevu","utm_source=programmatic&utm_medium=display&utm_campaign=check_up","utm_source=optdcom&utm_medium=programatik&utm_campaign=display","utm_source=optdcom&utm_medium=programatik&utm_campaign=display","utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz","utm_source=programmatic&utm_medium=display&utm_campaign=edoktor","utm_source=programmatic&utm_medium=display&utm_campaign=tibbigorus","utm_source=programmatic&utm_medium=display&utm_campaign=guvenlinefes*, *utm_medium=crmemail","utm_source=googleads&utm_medium=gdn&utm_campaign=remarketing&utm_content=checkup"]
                if(linkArr.find(x=>window.location.href.indexOf(x)>-1) !==undefined){
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-shownBanner', 'on',60*60*60)
                    return false;
                }
                if(!(linkArr.find(x=>window.location.href.indexOf(x)>-1) === undefined && window.location.href.indexOf("/blog/")>-1 && EightDigits.utils.getCookie('ed-' + config.analytics + '-shownBanner')==="on")){
                    return false;
                }
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
    var _ed_Blog_Banner_5li = new EightDigits.sf();
    _ed_Blog_Banner_5li.Blog_Banner_5li();
})();

(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Side_Sunport")) {
        return false
    }
    EightDigits.sf.prototype.Side_Sunport = function () {
        var config = {
            scenarioname: "Side_Sunport",
            analytics: "Side_Sunport",
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
  fixBasketTop=jQuery('.price-partial-basket').prev().offset().top
  var searchMainCount = 0;
  var searchMainInterval = setInterval(function()
  {
  searchMainCount++
  if(jQuery('.smpl-search-main').length>0){
  jQuery('.smpl-search-main').remove();
  clearInterval(searchMainInterval)
  }
  else{
  if(searchMainCount===20){
  clearInterval(searchMainInterval)
  
  }
  }
  },250)
              var cookie = {
                setCookie: function(cname, cvalue, exdays) {
                 var d = new Date();
                 d.setTime(d.getTime() + (exdays*24*60*60*1000));
                 var expires = "expires="+ d.toUTCString();
                 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
               },
                getCookie: function(cname) {
                 var name = cname + "=";
                 var decodedCookie = decodeURIComponent(document.cookie);
                 var ca = decodedCookie.split(';');
                 for(var i = 0; i <ca.length; i++) {
                   var c = ca[i];
                   while (c.charAt(0) == ' ') {
                     c = c.substring(1);
                   }
                   if (c.indexOf(name) == 0) {
                     return c.substring(name.length, c.length);
                   }
                 }
                 return false;
               },
               }
               function htmlFull() {
                 jQuery('.navBar-nav').hide();
                 jQuery(".smpl-search-main").hide()
                 jQuery('.hotel-detail-breadcrumb').hide();
                 jQuery('.footer-middle').hide();
                 jQuery('.footer-top').parent().hide();
                 jQuery('#ed_header').hide();
                 jQuery('#icon-notification-8d').hide();
                 jQuery(".login-button").hide();
                 jQuery(".hotel-feature-list.row div").hide();
                 jQuery(".logo img").attr("src","https://cdn.8digits.com/log/r/383281ee-ed70-4e40-872e-9f41935a3e76.png");
                 jQuery(".logo").attr("href","http://www.sidesunport.com/tr/");
                 jQuery(".logo img").click(function(){
                 EightDigits.analytics.sendEvent(config.analytics, 'Click-Logo')
                 })
                 jQuery("link").eq(1).attr("href","https://cdn.8digits.com/log/r/6462cf5f-d30c-475e-a2fa-3a9aedcb641e.png");
                 jQuery(".logo img").css({"width":"250px"})
                 var css =`<style> .hotel-feature-list-item img {width:14%;} </style>`
               jQuery("head").append(css);
                 var banner = `<div style="
                 text-align: center;
             ">
                 <img src="https://cdn.8digits.com/log/r/a97ef840-0946-48b6-8342-4b70ab2a4d5c.jpeg" style="width:75%;">
               </div>`;
               jQuery("#main-header").after(banner);
               var htmlBanner = '<div class="smpl-banner">\
               <img src="https://cdn.8digits.com/log/r/58098d76-a079-474e-a26e-92bcb8a8037d.jpeg">\
               </div>\
               '
               jQuery(".content-partial-shadow").eq(4).after(htmlBanner);
               EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
               
               var müsteriHizmetleri = `<li style="position: absolute;display: flex;right: 125px;top: 3px;">
               <a class="call-center" title="Çagri Merkezi 0216 554 16 76" href="tel:02165541676">0216 554 16 76</a></li>`;
               jQuery(".top-user-area.clearfix").prepend(müsteriHizmetleri);
  
              jQuery(".call-center").click(function(){
                EightDigits.analytics.sendEvent(config.analytics, 'Click-Call-Center')
               })
  
               Math.rastgele=function(alt, ust){
                 let sayi=Math.random(); 
                 sayi=sayi*(ust-alt);
                 sayi=Math.floor(sayi)+alt;
                 return sayi; 
                 }
                 var randomNumber    = ( Math.rastgele(13,29) );
                 if (EightDigits.utils.getCookie('_ed_' + config.scenarioname)> 5000){
                  var inceliyor = `<div style="float: right;border: 2px solid #dc242d;height: 30px;display: flex;justify-content: center;text-align: center;align-items: center;background: #ee3342;color: white;">
                  <span style="margin: 10px;">BU OTELİ `+randomNumber+` KİŞİ İNCELİYOR </span></div>`;
                  jQuery(".container.p-0.mt-2").prepend(inceliyor);
                  EightDigits.analytics.sendEvent(config.analytics, "Shown-Inceliyor-Desktop");
                 }else{
                  var satinAldi = `<div style="float: right;border: 2px solid #dc242d;height: 30px;display: flex;justify-content: center;text-align: center;align-items: center;background: #ee3342;color: white;">
                  <span style="margin: 10px;">BU TATİLİ `+randomNumber+` KİŞİ SATIN ALDI </span></div>`;
                  jQuery(".container.p-0.mt-2").prepend(satinAldi);
                 EightDigits.analytics.sendEvent(config.analytics, "Shown-Aldi-Desktop");
                 }
                var iconHtml = `<div class="hotel-feature-list-item">
                <div>
                <img src="https://cdn.8digits.com/log/r/41206e9a-2cce-42f1-96a4-0a5fd0e6b5e9.png" style="width:20%">
                Aile Dostu
                </div></div>
                <div class="hotel-feature-list-item">
                <div>
                <img src="https://cdn.8digits.com/log/r/9eeedf4a-6264-4d0c-b3bb-72380e70bddd.png" style="width:20%">
                Balayı Oteli
                </div></div>
                <div class="hotel-feature-list-item">
                <div>
                <img src="https://cdn.8digits.com/log/r/769e51d0-68a6-4bb7-a161-4490b8b7e19c.png" style="width:20%;">
                Spa&Sağlık
                </div></div>
`;
                jQuery(".hotel-feature-list.row").prepend(iconHtml);
               }
               
               if(window.location.href.indexOf("side-sunport-hotel-spa-ex-side-sungate?utm_source=SideSunport&utm_medium=referral&utm_campaign=sales-redirect") == -1 && cookie.getCookie("sideSunport")=="1"){
                 htmlFull();
                 removeLoading();
                     if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'shown');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                    } 
                 }else if(window.location.href.indexOf("side-sunport-hotel-spa-ex-side-sungate?utm_source=SideSunport&utm_medium=referral&utm_campaign=sales-redirect")> -1){
                   htmlFull();
                   removeLoading();
                   cookie.setCookie("sideSunport","1");
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'shown');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
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
    var _ed_Side_Sunport = new EightDigits.sf();
    _ed_Side_Sunport.Side_Sunport();
  })();
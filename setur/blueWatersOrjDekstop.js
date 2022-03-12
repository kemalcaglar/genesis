(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Blue_Waters")) {
      return false
  }
  EightDigits.sf.prototype.Blue_Waters = function () {
      var config = {
          scenarioname: "Blue_Waters",
          analytics: "Blue_Waters",
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
               jQuery(".logo img").attr("src","https://cdn.8digits.com/log/r/2325bac3-71a9-4763-8e6d-1eefc3f6eada.png");
               jQuery(".logo").attr("href","https://www.bluewaters.com.tr");
               jQuery(".logo img").click(function(){
               EightDigits.analytics.sendEvent(config.analytics, 'Click-Logo')
               })
               jQuery("link").eq(1).attr("href","https://cdn.8digits.com/log/r/dce3cbf4-4108-4888-9e42-26b3d08edac9.png");
               jQuery(".logo img").css({"width":"196px"})
               var css =`<style> .hotel-feature-list-item img {width:14%;} </style>`
             jQuery("head").append(css);
               var banner = `<div>
               <img src="https://cdn.8digits.com/log/r/5b74a9e6-589d-49f5-8ce6-5fa8d4024dc7.jpeg" >
             </div>`;
             jQuery("#main-header").after(banner);
             
             
             var müsteriHizmetleri = `<li style="position: absolute;display: flex;right: 125px;top: 3px;">
             <a class="call-center" title="Çagri Merkezi 444 7 437" href="tel:4447437">444 7 437</a></li>`;
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

             var youtubeEmbed = `<div class="smpl-video-embed" style="position: relative;z-index: 2;width: 8%;top: 85%;left: 10px;">
             <img src="https://cdn.8digits.com/log/r/055bef97-d2e2-4d76-9d66-4f93deecbb88.png"></div>`;
             jQuery(".fotorama__img:first").before(youtubeEmbed);
             jQuery(".smpl-video-embed").click(function(){
               var embedVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dN7qW-vTlmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
             
               jQuery("body").append(`<div id="ed-closeVideo" style="cursor: pointer; position: fixed;  right: 0; bottom: 315px; z-index: 999; display: block;"><img style="width: 20px;margin-right: 5px;" src="https://cdn.8digits.com/log/r/6e3a911b-ebe0-4408-8dae-16b5b625d0d7.png">
               </div><div id="ed-Videocover" style="position: fixed; bottom: 0; right: 0; width: 560px; height: 315px; z-index: 99;">
               <div class="ed-videoArea" style="width: 400px;height: 225px;position: absolute;background: #fff;z-index: 99;">`+embedVideo+`</div></div>`);
               setTimeout(function(){ 
               
               jQuery('#ed-closeVideo').css('display','block');
               }, 1000);
               jQuery('#ed-closeVideo').click(function(){
                   jQuery('#ed-closeVideo').remove();
                   jQuery('#ed-Videocover').remove();
               })
              
             EightDigits.analytics.sendEvent(config.analytics, 'Click-Video')
             });
             var embedVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dN7qW-vTlmo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

             jQuery('body').append(`<div id="ed-closeVideo" style="cursor: pointer; position: fixed;  right: 0; bottom: 315px; z-index: 999; display: block;"><img style="width: 20px;margin-right: 5px;" src="https://cdn.8digits.com/log/r/6e3a911b-ebe0-4408-8dae-16b5b625d0d7.png">
             </div><div id="ed-Videocover" style="position: fixed; bottom: 0; right: 0; width: 560px; height: 315px; z-index: 99;">
             <div class="ed-videoArea" style="width: 400px;height: 225px;position: absolute;background: #fff;z-index: 99;">`+embedVideo+`</div></div>`);
             // setLevel(LEVEL_JOIN, "Shown");
             setTimeout(function(){ 
             jQuery('#ed-Videocover').animate({ right: '0' }, "slow");
             jQuery('#ed-closeVideo').css('display','block');
             }, 1000);
             jQuery('#ed-closeVideo').click(function(){
                 jQuery('#ed-closeVideo').remove();
                 jQuery('#ed-Videocover').remove();
             })
              var iconHtml = `<div class="hotel-feature-list-item">
              <div>
              <img src="https://cdn.8digits.com/log/r/41206e9a-2cce-42f1-96a4-0a5fd0e6b5e9.png" style="">
              Aile Dostu
              </div></div>
              <div class="hotel-feature-list-item">
              <div>
                <img src="https://cdn.8digits.com/log/r/c5b88fde-e277-43fe-bfee-28ddd9575093.png"></img>
                İleri Yaş Dostu
              </div></div>
              <div class="hotel-feature-list-item">
              <div>
                <img src="https://cdn.8digits.com/log/r/c8834c76-a230-4c76-ae51-deb739563c07.png"></img>
                Bebek Dostu
              </div></div>
              <div class="hotel-feature-list-item">
              <div>
                <img src="https://cdn.8digits.com/log/r/1486d388-a907-48ab-bcd4-01e2d6bc735e.png"></img>
                Çocuk Dostu
              </div></div>
              <div class="hotel-feature-list-item">
              <div>
                <img src="https://cdn.8digits.com/log/r/4d370332-30f7-415e-ad1c-2709674d4136.png"></img>
                Denize Sıfır
              </div></div>
              <div class="hotel-feature-list-item">
              <div>
                <img src="https://cdn.8digits.com/log/r/f67b91bd-c4a7-479c-baea-71a1e75dcfa0.png"></img>
               Kum Plaj
              </div></div>
              <div class="hotel-feature-list-item">
                                                          <div>
                <img src="https://cdn.8digits.com/log/r/820444d4-a5f3-462e-9e9e-a73f7dfd3a8d.png">
               Çevreci
              </div></div>
              <div class="hotel-feature-list-item">
                                                          <div>
                <img src="https://cdn.8digits.com/log/r/d32b2dda-27a4-4b8f-a3eb-b09079f66c26.png">
               Ödüllü
              </div></div>
              <div class="hotel-feature-list-item">
                                                          <div>
                <img src="https://cdn.8digits.com/log/r/9ba31dfc-a9a9-44eb-8457-03e6e26f0620.png">
               Tesis Büyüklüğü
              </div></div>`;
              jQuery(".hotel-feature-list.row").prepend(iconHtml);
             }
             
             if(window.location.href.indexOf("blue-waters-club?utm_source=BlueWaters&utm_medium=referral&utm_campaign=sales-redirect") == -1 && cookie.getCookie("blueWaters")=="1"){
               htmlFull();
                   if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                    EightDigits.analytics.sendEvent(config.analytics, 'shown');
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                  } 
               }else if(window.location.href.indexOf("blue-waters-club?utm_source=BlueWaters&utm_medium=referral&utm_campaign=sales-redirect")> -1){
                 htmlFull(); 
                 cookie.setCookie("blueWaters","1");
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
  var _ed_Blue_Waters = new EightDigits.sf();
  _ed_Blue_Waters.Blue_Waters();
})();
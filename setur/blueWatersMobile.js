(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Blue_Waters_Mobil")) {
    return false
  }
  EightDigits.sf.prototype.Blue_Waters_Mobil = function () {
    var config = {
      scenarioname: "Blue_Waters_Mobil",
      analytics: "Blue_Waters_Mobil",
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
        var cookie = {
          setCookie: function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          },
          getCookie: function (cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
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
          jQuery('.footer-middle').hide(); 
          jQuery('.footer-top').parent().hide(); 
          jQuery('#icon-notification-8d').hide(); 
          jQuery(".mobile-top-user-area a:first").hide() 
          jQuery(".mobile-menu-button").hide() 
          jQuery(".breadcrumb.hotel-detail-breadcrumb").hide() 
          jQuery(".hotel-feature-list.row div").hide(); 
          jQuery(".logo img").attr("src", "https://cdn.8digits.com/log/r/2325bac3-71a9-4763-8e6d-1eefc3f6eada.png"); 
          jQuery(".logo").attr("href","https://www.bluewaters.com.tr");
          jQuery(".logo img").click(function(){
           EightDigits.analytics.sendEvent(config.analytics, 'Click-Logo')
           })


          var css = `<style> .hotel-feature-list-item img {width:8%;} </style>`
          jQuery("head").append(css);
          var banner = `<div>
               <img src="https://cdn.8digits.com/log/r/3c4f2809-72ec-4958-8017-272af4e869ca.jpeg" style="margin-top: 15px;" >
             </div>`;
          jQuery("#main-header").after(banner);


          var müsteriHizmetleri = `<div class="mobile-phone col-3">
             <a href="tel:4447437" class="p-0">
                 <i class="fa fa-phone" aria-hidden="true"></i>
             </a>
         </div>`;
          jQuery(".top-user-area.clearfix").prepend(müsteriHizmetleri);
          jQuery(".shopping-cart-container").css({"margin-right":"10px"});
          jQuery(".row.mobile-send-form-button").css({"padding-top":"0px"});
         jQuery(".mobile-phone.col-3:first a").click(function(){
             EightDigits.analytics.sendEvent(config.analytics, 'Click-Call-Center')
            })


          var youtubeEmbed = `<div class="smpl-video-embed" style="position: relative;z-index: 2;top: 74%;left: 10px;height: 50px;width: 50px;">
             <img class="smpl-video-embed-img" src="https://cdn.8digits.com/log/r/055bef97-d2e2-4d76-9d66-4f93deecbb88.png" style="width: 50px;height: 50px;"></div>`;
          jQuery(".fotorama__img:first").before(youtubeEmbed);
          jQuery(".smpl-video-embed-img").on("click touchstart",function () {
            var embedVideo = '<iframe width="320" height="180" src="https://www.youtube.com/embed/dN7qW-vTlmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

            jQuery("body").append(`<div id="ed-closeVideo" style="cursor: pointer; position: fixed;  right: 10px; bottom: 429px; z-index: 999; display: block;"><img style="width: 15px;height: 15px;" src="https://cdn.8digits.com/log/r/6e3a911b-ebe0-4408-8dae-16b5b625d0d7.png">
               </div><div id="ed-Videocover" style="position: fixed;bottom: 274px;right: 0;width: 320px;height: 180px;z-index: 99;">
               <div class="ed-videoArea" style="width: 320px;height: 180px;position: absolute;background: #fff;z-index: 99;">`+embedVideo+`</div></div>`);
            setTimeout(function () {
              jQuery('#ed-closeVideo').css('display', 'block');
            }, 1000);
            jQuery('#ed-closeVideo').click(function () {
              jQuery('#ed-closeVideo').remove();
              jQuery('#ed-Videocover').remove();
            })

           EightDigits.analytics.sendEvent(config.analytics, 'Click-Video')
          });
          var embedVideo = '<iframe width="320" height="180" src="https://www.youtube.com/embed/dN7qW-vTlmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

          jQuery('body').append(`<div id="ed-closeVideo" style="cursor: pointer; position: fixed;  right: 10px; bottom: 429px; z-index: 999; display: block;"><img style="width: 15px;height: 15px;" src="https://cdn.8digits.com/log/r/6e3a911b-ebe0-4408-8dae-16b5b625d0d7.png">
          </div><div id="ed-Videocover" style="position: fixed;bottom: 274px;right: 0;width: 320px;height: 180px;z-index: 99;">
          <div class="ed-videoArea" style="width: 320px;height: 180px;position: absolute;background: #fff;z-index: 99;">`+embedVideo+`</div></div>`);
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

        if (window.location.href.indexOf("blue-waters-club?utm_source=BlueWaters&utm_medium=referral&utm_campaign=sales-redirect") == -1 && cookie.getCookie("blueWaters") == "1") {
          htmlFull();
           if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
            EightDigits.analytics.sendEvent(config.analytics, 'shown');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
          } 
        } else if (window.location.href.indexOf("blue-waters-club?utm_source=BlueWaters&utm_medium=referral&utm_campaign=sales-redirect") > -1) {
          htmlFull();
          cookie.setCookie("blueWaters", "1");
           if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
             EightDigits.analytics.sendEvent(config.analytics, 'shown');
             EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
           } 
        }
      },
      control: function () {},
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
  var _ed_Blue_Waters_Mobil = new EightDigits.sf();
  _ed_Blue_Waters_Mobil.Blue_Waters_Mobil();
})();
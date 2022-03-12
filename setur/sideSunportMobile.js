(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Side_Sunport_Mobil")) {
      return false
    }
    EightDigits.sf.prototype.Side_Sunport_Mobil = function () {
      var config = {
        scenarioname: "Side_Sunport_Mobil",
        analytics: "Side_Sunport_Mobil",
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
            jQuery(".logo img").attr("src", "https://cdn.8digits.com/log/r/383281ee-ed70-4e40-872e-9f41935a3e76.png"); 
            jQuery(".logo").attr("href","http://www.sidesunport.com/tr/");
            jQuery(".logo img").click(function(){
             EightDigits.analytics.sendEvent(config.analytics, 'Click-Logo')
             })
  
  
            var css = `<style> .hotel-feature-list-item img {width:8%;} </style>`
            jQuery("head").append(css);
            var banner = `<div>
                 <img src="https://cdn.8digits.com/log/r/58098d76-a079-474e-a26e-92bcb8a8037d.jpeg" style="margin-top: 15px;" >
               </div>`;
            jQuery("#main-header").after(banner);
  
  
            var müsteriHizmetleri = `<div class="mobile-phone col-3">
               <a href="tel:02165541676" class="p-0">
                   <i class="fa fa-phone" aria-hidden="true"></i>
               </a>
           </div>`;
            jQuery(".top-user-area.clearfix").prepend(müsteriHizmetleri);
            jQuery(".shopping-cart-container").css({"margin-right":"10px"});
            jQuery(".row.mobile-send-form-button").css({"padding-top":"0px"});
           jQuery(".mobile-phone.col-3:first a").click(function(){
               EightDigits.analytics.sendEvent(config.analytics, 'Click-Call-Center')
              })

            var iconHtml = `<div class="hotel-feature-list-item">
            <div>
            <img src="https://cdn.8digits.com/log/r/41206e9a-2cce-42f1-96a4-0a5fd0e6b5e9.png" style="width:15%;">
            Aile Dostu
            </div></div>
            <div class="hotel-feature-list-item">
            <div>
            <img src="https://cdn.8digits.com/log/r/9eeedf4a-6264-4d0c-b3bb-72380e70bddd.png" style="width:15%;">
            Balayı Oteli
            </div></div>
            <div class="hotel-feature-list-item">
            <div>
            <img src="https://cdn.8digits.com/log/r/769e51d0-68a6-4bb7-a161-4490b8b7e19c.png" style="width:15%;">
            Spa&Sağlık
            </div></div>`;
            jQuery(".hotel-feature-list.row").prepend(iconHtml);
          }  
          if (window.location.href.indexOf("side-sunport-hotel-spa-ex-side-sungate?utm_source=SideSunport&utm_medium=referral&utm_campaign=sales-redirect") == -1 && cookie.getCookie("sideSunport") == "1") {
            htmlFull();
            removeLoading();
             if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
              EightDigits.analytics.sendEvent(config.analytics, 'shown');
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
            } 
          } else if (window.location.href.indexOf("side-sunport-hotel-spa-ex-side-sungate?utm_source=SideSunport&utm_medium=referral&utm_campaign=sales-redirect") > -1) {
            htmlFull();
           removeLoading();
            cookie.setCookie("sideSunport", "1");
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
    var _ed_Side_Sunport_Mobil = new EightDigits.sf();
    _ed_Side_Sunport_Mobil.Side_Sunport_Mobil();
  })();
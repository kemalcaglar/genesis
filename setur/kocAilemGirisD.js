(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Koc_Ailem_Giris_Kulakcik_Desktop")) {
      return false;
    }
    EightDigits.sf.prototype.Koc_Ailem_Giris_Kulakcik_Desktop = function () {
      var config = {
        scenarioname: "Koc_Ailem_Giris_Kulakcik_Desktop",
        analytics: "Koc_Ailem_Giris_Kulakcik_Desktop",
        controlgroup: 0,
      };
      var main = {
        factory: function () {
          return true;
        },
      };
      main.factory.prototype = {
        random: function () {
          var randomVal = 0;
          var randomControlRatio =
            config.controlgroup > 50
              ? config.controlgroup
              : 100 - config.controlgroup;
          if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
            randomVal = Math.floor(Math.random() * 10000 + 1);
            EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
          } else {
            randomVal = parseInt(
              EightDigits.utils.getCookie("_ed_" + config.scenarioname)
            );
          }
          if (randomVal <= 100 * randomControlRatio) {
            return true;
          } else {
            return false;
          }
        },
        start: function () {
          var css = `<style>
            @keyframes slideIn {
              0% {
                bottom: -250px;
                opacity: 0.3;
              }
              100% {
                bottom: -10px;
                opacity: 1;
              }
              </style>`;
          jQuery("head").append(css);
          var css2 = `
          <style>
          .smpl-firsat-kulakcik {
            animation: slideIn 1s ease-in;
          }
          </style>
          `;
          jQuery("head").append(css2);
          function shownHtml() {
            var loginHref = jQuery(".login-button a").attr("href");
            var html = `<div class="smpl-kulakcik-main smpl-kulakcik" style="position:relative;z-index: 9999999;display:none;bottom:-10px;">
                      <div class="smpl-firsat-kulakcik" style="position:relative;">
                      <a href="`+ loginHref +`">
                      <img src="https://cdn.8digits.com/log/r/1b87f3d7-99fe-480e-bc9b-a8ca950928b1.jpeg">
                      </a>
                      </div>
                      </div>
                       `;
                      if(jQuery(".smpl-kulakcik-main").length < 1){
                        jQuery(".price-partial-basket").append(html);
                        return false;
                      }
            jQuery('.product-details').css("height","calc(100% - 20px)")
            EightDigits.analytics.sendEvent(config.analytics, "shown_kulakcik");
            var index = 0;
          jQuery(window).scroll(function () {
              index++;
              if (jQuery(window).scrollTop() > 764) {
                  jQuery('.smpl-kulakcik').addClass("smpl-firsat-kulakcik");
                  jQuery('.smpl-kulakcik').css({"display":"block"})
                  return false;
              } 
          });
          jQuery(".smpl-firsat-kulakcik a").click(function(){
            EightDigits.analytics.sendEvent(config.analytics, "click_button");
          });
          }
          jQuery(".booking-list .detail-booking-item .price-name span").each(function(){
            if(jQuery(this).text().trim().split(" ")[0] == "KoçAilem"){
                if (jQuery(".login-button .mobile-none").text().trim() == "Giriş Yap") {
                    jQuery(".room-price-item-row").each(function () {
                      if (
                        jQuery(this).find(".price-name").text().trim().split("\n")[0].split(" ")[0] ==
                        "KoçAilem"
                      ) {
                        jQuery(this).hide();
                      }
                    });
            shownHtml();
                  }
            }
            })
        },
        control: function () {},
        init: function () {
          if (main.factory.prototype.control() == false) {
            return false;
          }
          var _exec = main.factory.prototype.random();
          if (!_exec) {
            if (
              !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
            ) {
              EightDigits.analytics.sendEvent(config.analytics, "NotShown");
              EightDigits.utils.setCookie(
                "ed-" + config.analytics + "-notshown",
                "on"
              );
            }
            return false;
          }
          main.factory.prototype.start();
        },
      };
      boot = function () {
        return main.factory.prototype.init();
      };
      boot();
    };
    var _ed_Koc_Ailem_Giris_Kulakcik_Desktop = new EightDigits.sf();
    _ed_Koc_Ailem_Giris_Kulakcik_Desktop.Koc_Ailem_Giris_Kulakcik_Desktop();
  })();
  
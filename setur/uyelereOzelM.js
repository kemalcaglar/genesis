(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Koc_Ailem_Giris_Kulakcik_Mobile")) {
      return false;
    }
    EightDigits.sf.prototype.Koc_Ailem_Giris_Kulakcik_Mobile = function () {
      var config = {
        scenarioname: "Koc_Ailem_Giris_Kulakcik_Mobile",
        analytics: "Koc_Ailem_Giris_Kulakcik_Mobile",
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
                right: -363px;
                opacity: 0.3;
              }
              100% {
                right: 0;
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
          var loginHref = jQuery(".mobile-top-user-area a").attr("href")
          var html = `<div class="smpl-kulakcik-main smpl-kulakcik" style="position:fixed;bottom:0;right:0;z-index: 9999999;width:100%;display:none;">
                    <div class="smpl-firsat-kulakcik" style="position:relative;">
                    <span class="smpl-kulakcik-close" style="
                    position: absolute;
                    color: white;
                    left: 5px;
                    cursor: pointer;
                    font-size: 20px;">&times</span>
                    <img src="https://cdn.8digits.com/log/r/1c45e367-e606-4b15-9b50-7a565c905b6e.jpeg">
                    <a href="`+ loginHref +`" style="right: 21px;position: absolute;bottom: 1px;">
                    <button style="
                    color: white;
                    background: #ee3342;
                    border: 1px solid #ee3342;
                    width: 185px;
                    cursor: pointer;
                    border-radius: 10px;
                    font-weight: bold;
                    line-height:26px;
                    font-size:13px;
                    ">??ye Ol / Giri?? Yap</button></a> 
                    </div>
                    </div>`;
          jQuery("body").append(html);
          EightDigits.analytics.sendEvent(config.analytics, "shown_kulakcik");
          jQuery(".smpl-kulakcik-close").click(function(){
            jQuery(".smpl-firsat-kulakcik").hide();
          })
          var index = 0;
          jQuery(window).scroll(function () {
              index++;
              if (jQuery(window).scrollTop() > 764) {
                  jQuery('.smpl-kulakcik').addClass("smpl-firsat-kulakcik");
                  jQuery('.smpl-kulakcik').css({"display":"block"})
              } else {
                  jQuery('.smpl-kulakcik').removeClass("smpl-firsat-kulakcik");
                  jQuery('.smpl-kulakcik').css({"display":"none"})
              }
          });
          jQuery(".smpl-firsat-kulakcik a").click(function(){
            EightDigits.analytics.sendEvent(config.analytics, "click_button");
          });
        }
        jQuery(".booking-list .detail-booking-item .price-name span").each(function(){
            if(jQuery(this).text().trim() == "Ko??Ailem Kampanyas?? Haziran"){
          if (jQuery(".mobile-top-user-area .mobile-none:first").text().trim() == "Giri?? Yap") {
            jQuery(".room-price-item-row").each(function () {
              if (
                jQuery(this).find(".price-name").text().trim().split("\n")[0] ==
                "Ko??Ailem Kampanyas?? Haziran"
              ) {
                jQuery(this).hide();
              }
            });
            shownHtml()
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
    var _ed_Koc_Ailem_Giris_Kulakcik_Mobile = new EightDigits.sf();
    _ed_Koc_Ailem_Giris_Kulakcik_Mobile.Koc_Ailem_Giris_Kulakcik_Mobile();
  })();
  
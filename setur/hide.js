(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Uyelere_Ozel_Firsatlar")) {
    return false;
  }
  EightDigits.sf.prototype.Uyelere_Ozel_Firsatlar = function () {
    var config = {
      scenarioname: "Uyelere_Ozel_Firsatlar",
      analytics: "Uyelere_Ozel_Firsatlar",
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
        if (jQuery(".login-button .mobile-none").text().trim() == "Giriş Yap") {
          jQuery(".room-price-item-row").each(function () {
            if (
              jQuery(this).find(".price-name").text().trim().split("\n")[0] ==
              "4 Gece Kal 3 Gece Öde"
            ) {
              jQuery(this).hide();
            }
          });
          var loginHref = jQuery(".login-button a").attr("href");
          var html = `<div class="smpl-kulakcik-main smpl-kulakcik" style="position:relative;z-index: 9999999;display:none;bottom:-10px;">
                    <div class="smpl-firsat-kulakcik" style="position:relative;">
                    <img src="https://cdn.8digits.com/log/r/93946248-7709-4d39-acc0-dc81b4b47376.jpeg">
                    <a href="`+ loginHref +`" style="right: 37px;position: absolute;bottom: 9px;">
                    <button style="
                    color: white;
                    background: #ee3342;
                    border: 1px solid #ee3342;
                    width: 161px;
                    cursor: pointer;
                    border-radius: 10px;
                    font-weight: bold;
                    ">Üye ol / Giriş yap</button></a> 
                    </div>
                    </div>`;
          jQuery(".price-partial-basket").append(html);
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
  var _ed_Uyelere_Ozel_Firsatlar = new EightDigits.sf();
  _ed_Uyelere_Ozel_Firsatlar.Uyelere_Ozel_Firsatlar();
})();

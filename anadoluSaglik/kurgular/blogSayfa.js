(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Canli_Banner_Gosterim")) {
    return false;
  }
  EightDigits.sf.prototype.Canli_Banner_Gosterim = function () {
    var config = {
      scenarioname: "Canli_Banner_Gosterim",
      analytics: "Canli_Banner_Gosterim",
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
        if (
          parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname)) <
          8500
        ) {
          if(window.innerWidth>767){
          var css = `<style>
                .smpl-canli-banner {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    opacity: 1;
                    display: block;
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-align: left;
                    z-index: 1;
                    -webkit-transition: opacity .3s ease;
                }
                </style>
                `;
          jQuery("head").append(css);
          var html = `<div class="canli-banner-main">
                <a href="http://bit.ly/Hemen-Abone-Olun">
                  <img class="smpl-canli-banner" src="https://cdn.8digits.com/log/r/59232310-0231-4372-9db4-2777e342173c.jpeg">
                </a>
                </div>`;
          jQuery(".vitalBanner").remove();
          jQuery(".youtubeBanner").remove();
          jQuery(".random-banners.editorWrap").prepend(html);
          jQuery(".random-banners.editorWrap").css({"width":"70%", "margin-bottom":"100px" })
              }else {
                var css = `<style>
                .smpl-canli-banner {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    opacity: 1;
                    display: block;
                    height: 130px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-align: left;
                    z-index: 1;
                    -webkit-transition: opacity .3s ease;
                }
                </style>
                `;
          jQuery("head").append(css);
          var html = `<div class="canli-banner-main">
                <a href="http://bit.ly/Hemen-Abone-Olun">
                  <img class="smpl-canli-banner" src="https://cdn.8digits.com/log/r/59232310-0231-4372-9db4-2777e342173c.jpeg">
                </a>
                </div>`;
          jQuery(".vitalBanner").remove();
          jQuery(".youtubeBanner").remove();
          jQuery(".random-banners.editorWrap").prepend(html);
              }
          var showCount = 0;
          jQuery(window).scroll(function () {
            var top_of_element = jQuery(".canli-banner-main").offset().top;
            var bottom_of_element =
              jQuery(".canli-banner-main").offset().top +
              jQuery(".canli-banner-main").outerHeight();
            var bottom_of_screen =
              jQuery(window).scrollTop() + window.innerHeight;
            var top_of_screen = jQuery(window).scrollTop();
            if (
              bottom_of_screen > top_of_element &&
              top_of_screen < bottom_of_element
            ) {
              showCount == 0 ? EightDigits.analytics.sendEvent(config.analytics, "shown_banner") : false;
              showCount++;
            }
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
  var _ed_Canli_Banner_Gosterim = new EightDigits.sf();
  _ed_Canli_Banner_Gosterim.Canli_Banner_Gosterim();
})();

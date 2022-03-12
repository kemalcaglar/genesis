(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Dr_Elnur_Banner")) {
        return false
    }
    EightDigits.sf.prototype.Dr_Elnur_Banner = function () {
        var config = {
            scenarioname: "Dr_Elnur_Banner",
            analytics: "Dr_Elnur_Banner",
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
              .smpl-banner {
                animation: slideIn 1s ease-in;
              }
              </style>
              `;
              jQuery("head").append(css2);
                var html = '<div class="smpl-banner-main smpl-banner" style="position:fixed;bottom:10%;right:0;z-index: 9999999;display:none;">\
                <a href="https://www.anadolusaglik.org/saglik-teknolojileri/mr-trus-fuzyon">\
                <img src="https://cdn.8digits.com/log/r/27332cf1-52af-4bfa-ba03-e9b5b49f92a1.jpeg">\
                </a>\
                </div>\
                '
                jQuery("body").prepend(html);
                var index = 0;
                jQuery(window).scroll(function () {
                    index++;
                    if (jQuery(window).scrollTop() > 200) {
                        jQuery('.smpl-banner').css({"display":"block"})
                    } else {
                        jQuery('.smpl-banner').css({"display":"none"})
                    }
                });
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
    var _ed_Dr_Elnur_Banner = new EightDigits.sf();
    _ed_Dr_Elnur_Banner.Dr_Elnur_Banner();
  })();
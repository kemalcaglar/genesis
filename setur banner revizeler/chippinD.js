(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Chippin_Banner_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Chippin_Banner_Desktop = function () {
        var config = {
            scenarioname: "Chippin_Banner_Desktop",
            analytics: "Chippin_Banner_Desktop",
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
                .smpl-chippin-banner {
                  font-size: 13px;
                  position: relative;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  margin-top: 15px;
                  margin-bottom: 15px;
                }
              </style>`
              jQuery("head").append(css);


                  var html = `<div class="smpl-chippin-banner">
                  <a href="https://www.setur.com.tr/setur-chippin-kampanyasi" target="_blank"><img src="https://cdn.8digits.com/log/r/38f2cc04-27ba-4eab-91d0-0e005be09772.jpeg"></a></div>`;
                  if(jQuery(".text-right.hoteldetail-price-partial.display-only-desktop .price-partial-promotions").length > 0){
                  jQuery(".text-right.hoteldetail-price-partial.display-only-desktop .price-partial-promotions").before(html);
                  EightDigits.analytics.sendEvent(config.analytics, "shown_banner");
                }else{
                  jQuery(".price-partial-basket").before(html);
                  EightDigits.analytics.sendEvent(config.analytics, "shown_banner");
                }
                

              jQuery(".smpl-chippin-banner").click(function(){
                EightDigits.analytics.sendEvent(config.analytics, "click_banner");
              })
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
    var _ed_Chippin_Banner_Desktop = new EightDigits.sf();
    _ed_Chippin_Banner_Desktop.Chippin_Banner_Desktop();
  })();
(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("hotelListingCancelBar")) {
      return false
  }
  EightDigits.sf.prototype.hotelListingCancelBar = function () {

      var config = {
          scenarioname: "hotelListingCancelBar",
          analytics: "72Saate_Kadar_Iptal_Banner_Listeleme_Mobil",
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

              css = '<style>\
              .ed_'+ config.scenarioname + '_smpl-tooltip{position: absolute;width: 200px;right: 0;margin-top: -200px;border-radius: 6px;padding: 4px 5px;background-color: #555!important;z-index:9;display:none;}\
              .ed_'+ config.scenarioname + '_smpl-tooltip_inner{text-align: center; font-size:10px; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;color: #c4c4c4!important }\
              .ed_'+ config.scenarioname + '_smpl-tooltip_inner .rule{padding:2px;}\
              .smpl-arrow-right{width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid #555!important;position: absolute;right: 5%;margin-top: -100px;display:none;transform: rotate(90deg);-webkit-transform: rotate(90deg);}\
      </style>'
      jQuery('head').append(css)

                             jQuery('#Hotel-List-Container ul li:eq(0)').after('<div class="ed-cancelInfoMain"><div id="ed-cancelInfo" style="width: 100%;margin-bottom: 20px;"><img src="https://cdn.8digits.com/log/r/48154727-8135-4120-9836-ed9b647d4111.png"></div><div class="smpl-arrow-right"></div>\
              <div class="ed_'+ config.scenarioname + '_smpl-tooltip">\
                  <div class="ed_'+ config.scenarioname + '_smpl-tooltip_inner">\
                          <div class="rule">??ptal iade g??vencesini sat??n al??rsan??z konaklaman??za 72 saat kalana kadar yapaca????n??z iptallerde, kesintisiz iade g??vencesine sahip olursunuz.</div>\
                  </div>\
              </div></div>');

               jQuery('.ed-cancelInfoMain').click(function () {
                   if(jQuery('.smpl-arrow-right').css('display') === "block"){
                   jQuery('.smpl-arrow-right').css('display', 'none');
                   jQuery('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'none');
                   } else {
                       jQuery(this).find('.smpl-arrow-right').css('display', 'block');
                       jQuery(this).find('.ed_' + config.scenarioname + '_smpl-tooltip').css('display', 'block');
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
                  EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
  var _ed_hotelListingCancelBar = new EightDigits.sf();
  _ed_hotelListingCancelBar.hotelListingCancelBar();
})();

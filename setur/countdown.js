(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Setur_Erken_Rez_Sayac")) {
     return false
  }
  EightDigits.sf.prototype.Setur_Erken_Rez_Sayac = function () {
      var config = {
          scenarioname: "Setur_Erken_Rez_Sayac",
          analytics: "Setur_Erken_Rez_Sayac_Son_Gun_8Mart",
          img: "//cdn.8digits.com/f/u/s2adg7rq/124dd4ef-2f14-40b5-9d8a-0ea9938cc1a2.jpg",
          EndDate: "March 8, 2021 23:59:00",
          backgroundColorAttr: "#333366",
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
              var tempLeft = (window.innerWidth - 1294) / 2 + 'px;'
              var html = '\
              <div id="ed_'+ config.scenarioname + '_main" style="position:relative;background-color:' + config.backgroundColorAttr + '; cursor:pointer;">\
                  <div class="ed-'+ config.scenarioname + '-close" style="position:absolute;top: -2px;right: 9px;font-size: 22px;color:white;font-weight:500;z-index: 99999;width: 20px;text-align: center; right:5px;">x</div>\
                  <a style="display: block; height: 60px; ">\
                      <div id="ed-'+ config.scenarioname + '-inner" style=" position:absolute; top:0px; height:60px; background-image:url(' + config.img + '); background-repeat:no-repeat; background-position: center; width:1280px; left:' + tempLeft + ' " >\
                  <div class="_ed_timer_el_hour_tt" style="position:absolute;width: 70px;height: 40px;right: 174px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                    </div>\
                   <div class="_ed_timer_el_minute_tt" style="position:absolute;width: 70px;height: 40px;right: 130px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                   </div>\
                   <div class="_ed_timer_el_second_tt" style="position:absolute;width: 70px;height: 40px;right: 86px;top: 10px;margin-left: 7px;font-size: 25px;color:white;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                   </div>\
                  </div>\
                  </a>\
              </div>'
              //   jQuery(".prel").after(html)
              //   jQuery(html).insertBefore(jQuery('#main-header'));
              jQuery('#main-header').prepend(html)
              if (EightDigits.dataLayer.data.pageType === "home") {
                  jQuery('.ed-' + config.scenarioname + '-close').click(function () {
                      jQuery('#ed_' + config.scenarioname + '_main').remove();
                      EightDigits.analytics.sendEvent(config.analytics, 'Click_Close');
                      EightDigits.utils.setCookie('ed' + config.scenarioname + '_close_click', 'on');
                      jQuery('.top-area.show-onload').css('margin-top', '0px');
                  });
              }
              else {
                  jQuery('.global-wrap').css('margin-top', '170px')
                  jQuery('.ed-' + config.scenarioname + '-close').click(function () {
                      jQuery('#ed_' + config.scenarioname + '_main').remove();
                      EightDigits.utils.setCookie('ed' + config.scenarioname + '_close_click', 'on');
                      EightDigits.analytics.sendEvent(config.analytics, 'Click_Close');
                      jQuery('.top-area.show-onload').css('margin-top', '0px');
                      jQuery('.global-wrap').css('margin-top', '102px')
                  });
              }
              EightDigits.analytics.sendEvent(config.analytics, "Shown");
              jQuery('#ed_' + config.scenarioname + '_main').click(function () {
                  EightDigits.analytics.sendEvent(config.analytics, 'Click_Banner');
                  window.location.href = "https://www.setur.com.tr/populer-erken-rezervasyon-otelleri";
              })
              jQuery('.top-area.show-onload').css('margin-top', '52px');
              jQuery(window).scroll(function () {
                  // jQuery('section:eq(0)').css('margin-top','55px');
              })
              var futureDate = new Date(config.EndDate)
              var x = setInterval(function () {
                  var now = new Date().getTime();
                  var distance = futureDate - now;
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  if (days > 0) {
                      hours += 24 * days;
                  }
                  if (hours < 10) {
                      jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(0)").html('0');
                      hours = hours % 10;
                      jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(1)").html(hours);
                  }
                  else {
                      jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(0)").html(Math.floor(hours / 10));
                      hours = hours % 10;
                      jQuery("._ed_timer_el_hour_tt .ed-inner-timer:eq(1)").html(hours);
                  }
                  if (minutes < 10) {
                      jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(0)").html('0');
                      minutes = minutes % 10;
                      jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(1)").html(minutes);
                  }
                  else {
                      jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(0)").html(Math.floor(minutes / 10));
                      minutes = minutes % 10;
                      jQuery("._ed_timer_el_minute_tt .ed-inner-timer:eq(1)").html(minutes);
                  }
                  if (seconds < 10) {
                      jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(0)").html('0');
                      seconds = seconds % 10;
                      jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(1)").html(seconds);
                  }
                  else {
                      jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(0)").html(Math.floor(seconds / 10));
                      seconds = seconds % 10;
                      jQuery("._ed_timer_el_second_tt .ed-inner-timer:eq(1)").html(seconds);
                  }
                  if (distance < 0) {
                      clearInterval(x);
                  }
              }, 1000);
              jQuery(window).resize(function () {
                  tempLeft = (window.innerWidth - 1280) / 2 + 'px'
                  jQuery('#ed-' + config.scenarioname + '-inner').css('left', tempLeft);
              })
          },
          control: function () {
              if (EightDigits.utils.getCookie('ed' + config.scenarioname + '_close_click') !== null) {
                  return false;
              }
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
  var _ed_Setur_Erken_Rez_Sayac = new EightDigits.sf();
  _ed_Setur_Erken_Rez_Sayac.Setur_Erken_Rez_Sayac();
})();
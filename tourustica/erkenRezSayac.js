(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Tourustica_Erken_Rez_Sayac")) {
     return false
  }
  EightDigits.sf.prototype.Tourustica_Erken_Rez_Sayac = function () {
      var config = {
          scenarioname: "Tourustica_Erken_Rez_Sayac",
          analytics: "Tourustica_Erken_Rez_Sayac_Son_Gun_8Mart",
          img: "//cdn.8digits.com/log/r/8afc34f3-4a9f-470c-82c5-58b10187d94a.jpeg",
          EndDate: "December 13, 2021 23:59:00",
          backgroundColorAttr: "#fefefe",
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
                  <a href="https://www.touristica.com.tr/erken-rezervasyon-otelleri" style="display: block; height: 60px; ">\
                      <div id="ed-'+ config.scenarioname + '-inner" style=" position:absolute; top:0px; height:60px; background-image:url(' + config.img + '); background-repeat:no-repeat; background-position: center; width:1280px; left:' + tempLeft + ' " >\
                  <div class="_ed_timer_el_day_tt" style="position:absolute;width: 70px;height: 40px;right: 388px;top: 1px;margin-left: 7px;font-size: 30px;color:#fefefe;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                    </div>\
                   <div class="_ed_timer_el_hour_tt" style="position:absolute;width: 70px;height: 40px;right: 311px;top: 1px;margin-left: 7px;font-size: 30px;color:#fefefe;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                   </div>\
                   <div class="_ed_timer_el_minute_tt" style="position:absolute;width: 70px;height: 40px;right: 243px;top: 1px;margin-left: 7px;font-size: 30px;color:#fefefe;font-weight:bold;">\
                      <div class="ed-inner-timer" style="float:left;"></div>\
                      <div class="ed-inner-timer" style="  margin-left: 9px;"></div>\
                   </div>\
                  </div>\
                  </a>\
              </div>'
                  var countHeader = 0;
                  var controlInterval = setInterval(function(){
                      countHeader++;
                      if(jQuery('.header-top-section').length>0){
                          jQuery('.header-top-section').before(html)
                          clearInterval(controlInterval)
                      }
              })
              if (EightDigits.dataLayer.data.pageType === "home") {
              }
              else {
                  jQuery('.global-wrap').css('margin-top', '170px')
              }
              EightDigits.analytics.sendEvent(config.analytics, "Shown");
              jQuery('#ed_' + config.scenarioname + '_main').click(function () {
                  EightDigits.analytics.sendEvent(config.analytics, 'Click_Banner');
                  window.location.href = "https://www.touristica.com.tr/erken-rezervasyon-otelleri";
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
                      //hours += 24 * days;
                  }
                  jQuery("._ed_timer_el_day_tt .ed-inner-timer:eq(1)").html('' + (days < 10 ? '0' + days : days) + '');
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
   jQuery("header").css({"margin-top":"0"})      
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
  var _ed_Tourustica_Erken_Rez_Sayac = new EightDigits.sf();
  _ed_Tourustica_Erken_Rez_Sayac.Tourustica_Erken_Rez_Sayac();
})()
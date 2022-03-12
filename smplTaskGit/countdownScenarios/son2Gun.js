(function () {
  const scenarioName = "Erken_revarvasyon_son2_gun";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
      return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
      let config = {
          scenarioname: scenarioName,
          analytics: scenarioName,
          img: "https://cdn.8digits.com/log/r/9b9b5d9f-d63f-438f-adec-4a2653295205.jpeg",
          backgroundColorAttr: "#333366",
          EndDate: "Jan 16, 2022 23:59:59",
          text: "%50'ye varan Erken Rezervasyonda<br>SON GÜN BUGÜN",
          redirect: "https://setur.com.tr/erken-rezervasyon-otelleri?utm_source=smpl&utm_medium=headerbanner&utm_campaign=erken-rezervasyon",
          controlgroup: 0
      };
      const scenarioClass = ".ed_" + config.scenarioname;
      const main = {
          "factory": function () {
              return true;
          }
      };
      main.factory.prototype = {
          random: function () {
              let randomVal = 0;
              let randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
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
          fireEvent: function (eventName, withCookie) {
              const device = window.innerWidth <= 768 ? "mobile" : "desktop";
              if (withCookie === true) {
                  if (!EightDigits.utils.getCookie(`ed-${config.analytics}${eventName}_${device}`)) {
                      EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
                      EightDigits.utils.setCookie(`ed-${config.analytics}${eventName}_${device}`, "on");
                  }
              } else {
                  EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
              }
          },
          start: function () {
              if (jQuery(".booking-item-details").length > 0) {
                  jQuery(".global-wrap").attr("style", "margin-top: 102px !important;");
              }
              const htmlM = ` 
    <div class="ed_${config.scenarioname}">
      <a href="${config.redirect}">
        <section class="header">${config.text}</section>
          <div class="inner">
            <section class="hour smpl_time">
              <span class="timer"></span>
              <span class="timer"></span>
              <span class="text">Saat</span>
            </section>
            <section class="minute smpl_time">
              <span class="timer"></span>
              <span class="timer"></span>
              <span class="text">Dakika</span>
            </section>
            <section class="second smpl_time">
              <span class="timer"></span>
              <span class="timer"></span>
              <span class="text">Saniye</span>
            </section>
          </div>
        </a>
      </div>
    
        `;
              const htmlD =
                  `
          <div class="ed_${config.scenarioname}">
              <a href="${config.redirect}">
               <img src="${config.img}" />
                <div class="inner">
                  <div class="hour smpl_time">
                    <span class="timer"></span>
                    <span class="timer"></span>
                  </div>
                  <div class="minute smpl_time">
                    <span class="timer"></span>
                    <span class="timer"></span>
                  </div>
                  <div class="second smpl_time">
                    <span class="timer"></span>
                    <span class="timer"></span>
                  </div>
                </div>
              </a>
            </div>  `;
              if (window.innerWidth > 768) {
                  jQuery('#main-header').prepend(htmlD);
              } else {
                  jQuery('#main-header').prepend(htmlM);
              }

              jQuery("head").append(main.factory.prototype.style());
              main.factory.prototype.fireEvent("shown-banner", false);
              jQuery(scenarioClass).click(function () {
                  main.factory.prototype.fireEvent("click-banner", false);
              });

              jQuery('.top-area.show-onload').css('margin-top', '75px');
              const timerInterval = setInterval(function () {
                  const now = new Date().getTime();
                  const endDate = new Date(config.EndDate).getTime();
                  const distance = endDate - now;
                  /* let days = Math.floor(distance / (1000 * 60 * 60 * 24)); */
                  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  /*if (days > 0) {
                      hours += 24 * days;
                  }*/
                  /* days = days < 10 ? '0' + days : days; */
                  hours = hours < 10 ? '0' + hours : hours;
                  minutes = minutes < 10 ? '0' + minutes : minutes;
                  seconds = seconds < 10 ? '0' + seconds : seconds;
                  /* jQuery("#_timer_days_col1").html(days.toString().substring(0, 1));
                  jQuery("#_timer_days_col2").html(days.toString().substring(1, 2)); */
                  jQuery(".hour .timer:eq(0)").html(hours.toString().substring(0, 1));
                  jQuery(".hour .timer:eq(1)").html(hours.toString().substring(1, 2));
                  jQuery(".minute .timer:eq(0)").html(minutes.toString().substring(0, 1));
                  jQuery(".minute .timer:eq(1)").html(minutes.toString().substring(1, 2));
                  jQuery(".second .timer:eq(0)").html(seconds.toString().substring(0, 1));
                  jQuery(".second .timer:eq(1)").html(seconds.toString().substring(1, 2));
                  if (distance < 0) {
                      jQuery(`${config.scenarioClass}`).remove();
                      clearInterval(timerInterval);
                  }
              }, 1000);
          },
          style: function () {
              return (`
        <style>
${scenarioClass} {
  position: relative;
  cursor: pointer;
  background-image:linear-gradient(90deg, rgba(245,235,233,1) 0%, #b7dadc 100%);
  margin-left: 100px;
  width: 1140px;
}
${scenarioClass} a {
  display: block;
  height: 60px;
}
${scenarioClass} img {
  width: 100%;
}
${scenarioClass} a .inner {
  position: absolute;
  top: 1%;
  height: 60px;
  width: 14%;
  right: 2%;
  display: flex;
}
${scenarioClass} a .inner .smpl_time {
 width: 33%;
height: 36px;
font-size: 25px;
color: black;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
column-rule: 3px;
margin-top: 4px;
}
${scenarioClass} a .inner .smpl_time .timer {
}
@media screen and (max-device-width: 768px) {
  ${scenarioClass} {
    position: relative;
    cursor: pointer;
    background-color: #333366;
    width:100%;
    margin:0;
  }
  ${scenarioClass} a {
    display: block;
    height: max-content;
    background-image: none;
  }
  ${scenarioClass} a .inner {
    height: max-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: unset !important;
  }
  ${scenarioClass} a .header {
    font-size: 16px;
    color: #333366;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
  ${scenarioClass} a .inner .smpl_time {
    width: 80px;
    height: min-content;
    color: #333366;
    font-weight: bold;
    font-size: 16px;
  }
  ${scenarioClass} a .inner .smpl_time:not(:last-of-type) {
    margin-right: 10px;
  }
  ${scenarioClass} a .inner .smpl_time .text {
    margin-left: 5px;
  }
  ${scenarioClass} a .inner .smpl_time .timer:last-of-type {
    margin-left: -4px;
  }
  ${scenarioClass} a .inner .hour {
  
  }
  ${scenarioClass} a .inner .minute {
  
  }
  ${scenarioClass} a .inner .second {
  
  }
  }
        </style>
        `);
          },
          control: function () { },
          init: function () {
              if (main.factory.prototype.control() === false) {
                  return false;
              }
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  main.factory.prototype.fireEvent("notshown", false);
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
  let ed = {};
  ed["_ed_" + scenarioName] = new EightDigits.sf();
  ed["_ed_" + scenarioName][scenarioName]();
})();

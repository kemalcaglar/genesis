const smplObj = {
  scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
  scenarioName: "scenario-" + scenarioId + "-" + variationId,
  setCookie: function (cname, cvalue, min) {
    const d = new Date();
    d.setTime(d.getTime() + min * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie: function (name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  fireEvent: function (eventLabel, minutes) {
    const device = window.innerWidth <= 768 ? "mobile" : "desktop";
    const eventName = eventLabel + "(" + device + ")";
    if (minutes === 0) {
      if (options.sendEvent) {
        if (eventName.indexOf("close") !== -1) {
          setLevel(LEVEL_EXIT, eventName);
        } else {
          setLevel(LEVEL_JOIN, eventName);
        }
      } else {
        console.log("event: ", eventName);
      }
    } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
      if (options.sendEvent) {
        if (eventName.indexOf("close") !== -1) {
          setLevel(LEVEL_EXIT, eventName);
        } else {
          setLevel(LEVEL_JOIN, eventName);
        }
        smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
      } else {
        console.log("event: ", eventName);
        smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
      }
    }
  }
};
const startObj = {
  month: options.startDate.month,
  day: options.startDate.day,
  year: options.startDate.year,
  hour: options.startDate.hour,
  minute: options.startDate.minute
};
const endObj = {
  month: options.endDate.month,
  day: options.endDate.day,
  year: options.endDate.year,
  hour: options.endDate.hour,
  minute: options.endDate.minute
};
const startDate = new Date(`${startObj.month} ${startObj.day}, ${startObj.year} ${startObj.hour}:${startObj.minute}:00`).getTime();
const endDate = new Date(`${endObj.month} ${endObj.day}, ${endObj.year} ${endObj.hour}:${endObj.minute}:00`).getTime();
const dateChecker = function () {
  const now = new Date();
  if (now >= startDate && now <= endDate) {
    console.log('true');
    return true;
  }
  else {
    console.log('false');
    return false;
  }
};
const html = {
  headerBanner: function () {
    return (`
              <div class="${smplObj.scenarioName}">
              <div>Kış Sezonu Ürünlerinde Net %40 İndirim</div>
              <div class="${smplObj.scenarioName}_count">
              ${this.timer()}
              </div>
              </div>
              `);
  },
  timer: function () {
    return (`
              <div class="smplTimer">
                <div>
                  <div>
                    <div class="daysCol1"></div>
                    <div class="daysCol2"></div>
                  </div>
                  <div>GÜN</div>
                </div>
                <span>:</span>
                <div>
                  <div>
                    <div class="hoursCol1"></div>
                    <div class="hoursCol2"></div>
                  </div>
                  <div>SA</div>
                </div>
                <span>:</span>
                <div>
                  <div>
                    <div class="minutesCol1"></div>
                    <div class="minutesCol2"></div>
                  </div>
                  <div>DK</div>
                </div>
                <span>:</span>
                <div>
                  <div>
                    <div class="secondsCol1"></div>
                    <div class="secondsCol2"></div>
                  </div>
                  <div>SN</div>
                </div>
              </div>
            `);
  }
};
setTimeout(() => {
  jQuery(".htop").remove();
  jQuery(`#header`).prepend(html.headerBanner());
  smplObj.fireEvent("shown-countdown");
}, 1500);
if (dateChecker()) {
  jQuery(`${smplObj.scenarioClass} .smplTimer`).show();
  const timeInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    /*if (days > 0) {
        hours += 24 * days;
    }*/
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    jQuery(".daysCol1").html(days.toString().substring(0, 1));
    jQuery(".daysCol2").html(days.toString().substring(1, 2));
    jQuery(".hoursCol1").html(hours.toString().substring(0, 1));
    jQuery(".hoursCol2").html(hours.toString().substring(1, 2));
    jQuery(".minutesCol1").html(minutes.toString().substring(0, 1));
    jQuery(".minutesCol2").html(minutes.toString().substring(1, 2));
    jQuery(".secondsCol1").html(seconds.toString().substring(0, 1));
    jQuery(".secondsCol2").html(seconds.toString().substring(1, 2));
    if (days <= 0) {
      jQuery(".smplTimer div:eq(0), .smplTimer span:eq(0)").hide();
    }
    // If the count down is finished, write some text 
    if (distance < 0) {
      jQuery(`${smplObj.scenarioClass} .smplTimer`).remove();
      clearInterval(timeInterval);
    }
  }, 1000);
} else {
  jQuery(`${smplObj.scenarioClass} .smplTimer`).hide();
}

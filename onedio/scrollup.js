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
    debounce: function (func, timeout) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
    fireEvent: function (eventLabel, minutes) {
      if (minutes === 0) {
        if (options.sendEvent) {
          if (eventLabel.indexOf("close") !== -1) {
            setLevel(LEVEL_EXIT, eventLabel);
          } else {
            setLevel(LEVEL_JOIN, eventLabel);
          }
        } else {
          console.log("event: ", eventLabel);
        }
      } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel) !== "on") {
        if (options.sendEvent) {
          if (eventLabel.indexOf("close") !== -1) {
            setLevel(LEVEL_EXIT, eventLabel);
          } else {
            setLevel(LEVEL_JOIN, eventLabel);
          }
          smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel, "on", minutes);
        } else {
          console.log("event: ", eventLabel);
          smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel, "on", minutes);
        }
      }
    }
  };
  const div = document.createElement("div");
  div.className = smplObj.scenarioName;
  div.innerHTML = `
  <div class="smpl-scroll">
      <span class="smpl-scroll-text">Kaydır</span>
      </br>
      <span class="smpl-arrow">&raquo;</span>
  </div>
  `;
  document.body.appendChild(div)
  const smplScroll = document.querySelector(".smpl-scroll")
  smplScroll.addEventListener('click', function () {
    window.scrollBy({
      top: 600,
      left: 600,
      behavior: 'smooth'
    });
  });
  const scrollFn = smplObj.debounce(function () {
    setTimeout(() => {
  document.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset;
    let scrollHeight = document.body.scrollHeight / 100 * 5;
    if (scrollTop > scrollHeight) {
      document.querySelector(".smpl-scroll").style.display = 'none';
    } else {
      document.querySelector(".smpl-scroll").style.display = 'block';
    }
  });
      }, 5000);
  }, 100);
  setTimeout(() => {
    if (scrollTop > scrollEvent && count == 0) {
      if (document.querySelector(".smpl-scroll").style.display == "block") {
        smplObj.fireEvent("shown-scroll");
        count++
        console.log("evet")
      }
    }
  }, 5000);

(function () {
  const scenarioName = "Test_Event";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
      stories: [
        {
          text: "Tatilse Setur",
          imgSmall: "//cdn.8digits.com/log/r/74dea47d-03cb-44e2-a3b6-1b59cf555e11.png",
          url: "https://www.setur.com.tr/seyahatte-hayat-var?true&ref=story",
          borderColor: "red"
        },
        {
          text: "Erken Rezervasyon",
          imgSmall: "//cdn.8digits.com/log/r/7e12a1bc-9159-4a52-9793-2aae93d93620.png",
          url: "https://www.setur.com.tr/erken-rezervasyon-otelleri?true&ref=story",
          borderColor: "#D56602"
        },
        {
          text: "Kış Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/5cd73b65-2e46-4818-8f3d-39d244fd9f81.png",
          url: "https://www.setur.com.tr/kis-otelleri?ref=story",
          borderColor: "#7766A2"
        },
        {
          text: "İstanbul'a Yakın Oteller",
          imgSmall: "//cdn.8digits.com/log/r/b12cf54c-3f36-4d7f-ade9-558a41c40a8b.png",
          url: "https://www.setur.com.tr/istanbul-a-yakin-oteller?ref=story",
          borderColor: "#265691"
        },
        {
          text: "Kıbrıs Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/27b2bd9c-5358-4332-bfb4-bb03331116c0.png",
          url: "https://www.setur.com.tr/kibris-otelleri?true&ref=story",
          borderColor: "#04565E"
        },
        {
          text: "Termal Oteller",
          imgSmall: "//cdn.8digits.com/log/r/15856903-f7ae-4643-8c6c-59234fecc27b.png",
          url: "https://www.setur.com.tr/termal-oteller?true&ref=story",
          borderColor: "#00ffff"
        },
        {

          text: "Kapadokya Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/1e6a6265-54c3-44a5-9ed7-0f6bf446700f.png",
          url: "https://www.setur.com.tr/kapadokya-otelleri?true&ref=story",
          borderColor: "#2aabab"
        },
        {
          text: "Bodrum Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/95d73383-68db-4aea-aad8-1f0a52bee262.png",
          url: "https://www.setur.com.tr/bodrum-otelleri?true&ref=story",
          borderColor: "#4EA32E"
        },
        {
          text: "Belek Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/07c07419-29c4-436c-bbcb-ce97d42f5c16.png",
          url: "https://www.setur.com.tr/belek-otelleri?true&ref=story",
          borderColor: "#EEBD02"
        }
      ]
    };
    let main = {
      factory: function () {
        return true;
      },
    };
    main.factory.prototype = {
      random: function () {
        let randomVal = 0;
        let randomControlRatio =
          config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      fireEvent: function (eventName, withCookie) {
        const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
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
        const html = {
          init: function () {
            return (`
                <div class="smpl_${config.scenarioname}" style="">
                  <div class="container">
                    ${this.listItem()}
                  </div>
                </div>
              `);
          },
          listItem: function () {
            let html = "";
            for (const item of config.stories) {
              html += `
                  <a href="${item.url}">
                    <header>
                      <img src="${item.imgSmall}">
                       <svg viewbox="0 0 80 80">
                          <defs>
                            <linearGradient id="smpl_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%"   stop-color="#7e48d3"/>
                              <stop offset="50%" stop-color="#ec3a9b"/>
                              <stop offset="100%" stop-color="#fece68"/>
                            </linearGradient>
                          </defs>
                        <circle cx="39" cy="39" r="38" fill="url(#smpl_linear)">
                        </circle>
                      </svg>
                    </header>
                    <main>${item.text}</main>
                  </a>`;
            }
            return html;
          }
        };
        jQuery('.bg-holder.full').before(html.init());
        main.factory.prototype.fireEvent("shown", true);

        jQuery(`.smpl_${config.scenarioname} a`).click(function () {
          jQuery(this).find("svg").attr("class", "animated");
          const text = jQuery(this).find("main").text().trim();
          main.factory.prototype.fireEvent(`click_( ${text} )`, true);
        });

        main.factory.prototype.style();
      },
      style: function () {
        let css = `
<style>
.smpl_${config.scenarioname} {
  width:100%; 
  overflow-x:auto;
}

.smpl_${config.scenarioname} .container {
  width:auto;
  white-space:nowrap;
  height:115px;
  margin-top: 9px; 
  margin-left:15px;
}

.smpl_${config.scenarioname} a {
  display: inline-block;
  width: 79px;
  vertical-align: top;
}

.smpl_${config.scenarioname} a header {
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  background-color: #fff;
}

.smpl_${config.scenarioname} a header img {
  width: 70px;
  height: 70px;
  position: absolute;
  margin: 5px;
  border-radius: 50%;
  background: #ffffff;
  top: 42%;
  left: 42%;
  transform: translate(-50%,-50%);
}

.smpl_${config.scenarioname} a main {
  width: 67px;
  margin-left: 8px;
  text-align: center;
  white-space: normal;
  font-size: 11px;
  line-height: 12px;
}

.smpl_${config.scenarioname} a header svg.animated {
  animation: loading 2500ms ease-out infinite alternate;
}
.smpl_${config.scenarioname} a header svg.animated circle{
  fill: none;
}
@keyframes loading {
  100% {
    fill: none;
    stroke: #EE3342;
    stroke-width: 2px;
    stroke-dasharray: 0px, 1px;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-dasharray: 4px, 6px;
    transform: rotate(180 115 115);
  }
}
</style>
          `;
        jQuery("head").append(css);
      },
      control: function () { },
      init: function () {
        if (main.factory.prototype.control() === false) {
          return false;
        }
        let _exec = main.factory.prototype.random();
        if (!_exec) {
          main.factory.prototype.fireEvent("NotShown", true);
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
  let ed = {};
  ed["_ed_" + scenarioName] = new EightDigits.sf();
  ed["_ed_" + scenarioName][scenarioName]();
})();

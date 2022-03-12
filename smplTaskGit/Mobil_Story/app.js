(function () {
  const scenarioName = "Test_Eventa";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
      mainBorder: "#FF0000",
      stories: [
        {
          text: "Tatilse Setur",
          imgSmall: "//cdn.8digits.com/log/r/74dea47d-03cb-44e2-a3b6-1b59cf555e11.png",
          url: "https://www.setur.com.tr/seyahatte-hayat-var?true&ref=story",
          borderColor: " rgba(149,161,171, 0.8)"
        },
        {
          text: "Erken Rezervasyon",
          imgSmall: "//cdn.8digits.com/log/r/7f79ec2a-28a9-4387-90f2-083e4c50dad3.png",
          url: "https://www.setur.com.tr/erken-rezervasyon-otelleri?true&ref=story",
          borderColor: "pink"
        },
        {
          text: "Kış Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/e98c2df8-4c6d-4af3-b4e8-d6573d8e3bb9.png",
          url: "https://www.setur.com.tr/kis-otelleri?ref=story",
          borderColor: "blue"
        },
        {
          text: "İstanbul'a Yakın Oteller",
          imgSmall: "//cdn.8digits.com/log/r/f71f00e9-8f51-4ab8-90e8-c2ef49f15856.png",
          url: "https://www.setur.com.tr/istanbul-a-yakin-oteller?ref=story",
          borderColor: "red"
        },
        {
          text: "Kıbrıs Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/4ee79849-ee55-4603-adc6-a7137d23b791.png",
          url: "https://www.setur.com.tr/kibris-otelleri?true&ref=story",
          borderColor: "red"
        },
        {
          text: "Termal Oteller",
          imgSmall: "//cdn.8digits.com/log/r/3f244611-97cf-4e8d-8e13-a3c52f1e5dee.png",
          url: "https://www.setur.com.tr/termal-oteller?true&ref=story",
          borderColor: "red"
        },
        {
          text: "Kapadokya Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/6ac11865-75d7-4b7a-b104-522ac9514f30.png",
          url: "https://www.setur.com.tr/kapadokya-otelleri?true&ref=story",
          borderColor: "red"
        },
        {
          text: "Bodrum Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/249bab46-0f9b-40a5-a9c9-aa158d632a0e.png",
          url: "https://www.setur.com.tr/bodrum-otelleri?true&ref=story",
          borderColor: "blue"
        },
        {
          text: "Belek Otelleri",
          imgSmall: "//cdn.8digits.com/log/r/199267b6-f72e-4b6f-b4d8-cbcc2c21ac4e.png",
          url: "https://www.setur.com.tr/belek-otelleri?true&ref=story",
          borderColor: "red"
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
      style: function () {
        let css = `
        <style>
          .smpl_${config.scenarioname} {
            width:100%; 
            overflow-x:auto;
            border: 3px solid ${config.mainBorder};
            border-radius: 8px;
          }

          .smpl_${config.scenarioname} .container {
            width:auto;
            white-space:nowrap;
            height:120px;
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
            width: 100px;
            height: 100px;
            overflow: hidden;
          }

          .smpl_${config.scenarioname} a header img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            position: absolute;
            top: 39%;
            left: 39%;
            transform: translate(-50%, -50%);
          }

          .smpl_${config.scenarioname} a header svg {
            fill: none;
            stroke: #EE3342;
            stroke-width: 2px;
            stroke-dasharray: 0px, 1px;
            stroke-dashoffset: 0;
            stroke-linecap: round;
          }

          .smpl_${config.scenarioname} a main {
            margin-top: -20px;
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

          @keyframes loading {
            100% {
              stroke-dasharray: 4px, 6px;
              transform: rotate(180 115 115);
            }
          }
        </style>
        `;
        jQuery("head").append(css);
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
                    <svg viewbox="0 0 100 100" style="stroke:${item.borderColor}">
                      <circle cx="39" cy="39" r="38"></circle>
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
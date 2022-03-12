(function () {
    const scenarioName = "Test_Event_ucakBanner";
    if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
      return false;
    }
    EightDigits.sf.prototype[scenarioName] = function () {
      let config = {
        scenarioname: scenarioName,
        analytics: scenarioName,
        controlgroup: 0,
        desktopİzmirİmage: "https://cdn.8digits.com/log/r/9147a304-72be-417e-bdfe-2736bffc6cab.jpeg",
        mobileİzmirİmage: "https://cdn.8digits.com/log/r/e165f53f-0ec1-4d7e-939e-6a081d497d75.jpeg",
        desktopAntalyaİmage: "https://cdn.8digits.com/log/r/b9412186-7408-487c-8c93-acbf623b878f.jpeg",
        mobileAntalyaİmage: "https://cdn.8digits.com/log/r/68800d7e-ac70-4dd8-9872-b5fad796ea5f.jpeg"
      };
      const scenarioClass = ".ed_" + config.scenarioname;
  
      let main = {
        factory: function () {
          return true;
        },
      };
      let device = window.innerWidth;
  
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
        html: function (device) {
          return (
            `
              <div class=ed_${config.scenarioname}>
               <img src=${device > 450 ? config.desktopAntalyaİmage : config.mobileAntalyaİmage} />
               <img src=${device > 450 ? config.desktopİzmirİmage : config.mobileİzmirİmage}  />
              </div>
              `
          )
  
        },
        style: function () {
          return (`
          <style>
          ${scenarioClass}{
            display: flex;
            justify-content: space-between;
            margin: 10px;
          }
          @media only screen and (max-width:450px){
            ${scenarioClass}{display:block;margin:5px;}
  
          }
          ${scenarioClass} img{
            margin:10px auto;
          }
          
          </style>
          `)
        },
        start: function () {
          jQuery(".flight-info").before(this.html(device));
          main.factory.prototype.fireEvent("shown-Banner", true);
          jQuery("head").append(this.style());
        },
        control: function () { },
        init: function () {
          if (main.factory.prototype.control() === false) {
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
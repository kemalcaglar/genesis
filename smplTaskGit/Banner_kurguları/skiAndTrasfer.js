(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Skipass_Banner")) {
    return false;
  }
  EightDigits.sf.prototype.Skipass_Banner = function () {
    let config = {
      scenarioname: "Skipass_Banner",
      analytics: "Skipass_Banner",
      controlgroup: 0,
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
        if (withCookie === true) {
          if (window.innerWidth <= 420) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Mobile")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Mobile", "on");
            }
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Tablet")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Tablet", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
            }
          }
        } else {
          if (window.innerWidth <= 420) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
          } else {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
          }
        }
      },
      style: function () {
        let css = `<style>
        .smpl-${config.scenarioname} {
          padding: 5px;
          position: relative;
          cursor: pointer;
          line-height: normal;
        }
        
        .smpl-${config.scenarioname} img {
          border-radius: 5px;
          cursor: pointer;
        }
        
        .smpl-${config.scenarioname} .smpl-${config.scenarioname}-arrow {
          display: none;
          background: #555;
          width: 20px;
          height: 20px;
          content: '';
          position: absolute;
          top: 55px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          left: 290px;
          z-index: 1;
          border-radius: 3px;
        }
        
        .smpl-${config.scenarioname} .smpl-${config.scenarioname}-tooltip {
          display: none;
          background: #555;
          position: absolute;
          z-index: 2;
          color: #fff;
          font-size: 12px;
          border-radius: 6px;
          padding: 6px;
          width: 300px;
          top: 25px;
          left: 300px;
        }
        
        .smpl-${config.scenarioname}:hover .smpl-${config.scenarioname}-tooltip,
        .smpl-${config.scenarioname}:hover .smpl-${config.scenarioname}-arrow {
          display: block;
        }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {

        let skipassBanner = "";
        let trasferBanner = "";
        let bothBanner = "";
        if (window.innerWidth > 768) {
          skipassBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/2bgv2uqjkvsdpr39t98q9mr42j.jpg";
          trasferBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/vsotso93u32nejoto3qkmrq9cd.jpg";
          bothBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/q2pp7rv0rgfvgmdblgu1bf6nf6.jpg";
        } else {
          skipassBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/q2d4av7lljbg717dcdj8h15t79.jpg";
          trasferBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/q0ue0t951dnconc9f6ff4h8aan.jpg";
          bothBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/pl3anoplrh2bedseq05ekc3vn3.jpg";
        };
        const tooltipText = "Min. 3 gece ve üzeri konaklamalarda havalimanı-otel ve otel-havalimanı transferi konaklama ücretine dahildir.Misafirlerin kampanyadan yararlanabilmek için uçuş bilgilerini, uçuştan 48 saat önce tursatis@setur.com.tr e-posta adresine göndermeleri gerekmektedir.";
        const arr = [
          { path: "/kaya-palazzo-ski-mountain-resort", text: "", skipass: true, transfer: false },
          { path: "/dorukkaya-ski-mountain-resort", text: "", skipass: true, transfer: false },
          { path: "/grand-kartal", text: "", skipass: true, transfer: false },
          { path: "/royal-ozcelik-hotel-sarikamis", text: tooltipText, skipass: false, transfer: true },
          { path: "/palan-otel", text: tooltipText, skipass: false, transfer: true },
          { path: "/sway-hotels-palandoken-erzurum", text: tooltipText, skipass: true, transfer: true },
          { path: "/dedeman-palandoken", text: tooltipText, skipass: true, transfer: true },
          { path: "/kayi-snow-otel", text: "", skipass: true, transfer: true },
          { path: "/sarikamis-kayi-resort-otel", text: "", skipass: true, transfer: true }
        ];
        const getImage = function (item) {
          if (item.skipass === true && item.transfer === true) {
            return bothBanner;
          } else if (item.skipass === true && item.transfer === false) {
            return skipassBanner;
          } else if (item.skipass === false && item.transfer === true) {
            return trasferBanner;
          };
        };
        const createHtml = function (item) {
          const image = getImage(item);
          let html = `
              <div class="smpl-${config.scenarioname}">
                <img src="${image}">`;
          if (item.text !== "") {
            html += `<div class="smpl-${config.scenarioname}-arrow"></div>
                    <div class="smpl-${config.scenarioname}-tooltip">${item.text}</div>`;
          };
          html += `</div>`;
          return jQuery("#scroll-to-innersearch").after(html);
        };

        for (item of arr) {
          if (window.location.pathname.includes(item.path)) {
            createHtml(item);
            main.factory.prototype.fireEvent("shown", true);
          }
        };
        if (window.location.pathname === "/dedeman-palandoken-ski-lodge") {
          jQuery(".smpl-Skipass_Banner").remove();
        }
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
  let _smpl_Ski_Banner = new EightDigits.sf();
  _smpl_Ski_Banner.Skipass_Banner();
})();

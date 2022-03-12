(function () {
  const scenarioName = "Test_Event1";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
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

        @media only screen and (max-width: 540px) {
          .smpl-${config.scenarioname} .smpl-${config.scenarioname}-tooltip {
            top: 3.5vw;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        let trasferBanner = "";
        if (window.innerWidth > 768) {
          trasferBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/vsotso93u32nejoto3qkmrq9cd.jpg";
        } else {
          trasferBanner = "https://cdn.hellosmpl.com/uploads/2021/10/07/q0ue0t951dnconc9f6ff4h8aan.jpg";
        };

        const hotelList = [
          "Concorde Luxury Resort Casino Convention & SPA",
          "Kaya Artemis Resort & Casino",
          "Acapulco Resort & Convention & Spa",
          "Elexus Hotel Resort Casino",
          "Salamis Bay Conti Resort & Hotel",
          "Nuh'un Gemisi Deluxe Hotel & Spa",
          "Limak Cyprus Deluxe Hotel",
          "Kaya Palazzo Resort & Casino",
          "Les Ambassadeurs Hotel & Casino",
          "Lord's Palace Hotel & Spa & Casino",
          "Merit Lefkoşa Hotel & Casino",
          "Park Palace",
          "Dorana Hotel",
          "Altınkaya Holiday Resort",
          "Pia Bella Hotel",
          "Dome Hotel",
          "Deniz Kızı Royal",
          "Deniz Kızı Hotel",
          "Arkın Palm Beach Hotel",
          "Vuni Palace Hotel",
          "Merit Crystal Cove Hotel & Casino",
          "Merit Royal Premium Hotel Casino & Spa",
          "Merit Royal Hotel & Casino & Spa",
          "Merit Park Hotel & Casino",
          "Rocks Hotel & Casino",
          "Grand Pasha Kyrenia Hotel & Casino & Spa",
          "Merit Cyprus Garden Holiday Village & Casino",
          "The Savoy Ottoman Palace Hotel & Casino",
          "Riverside Garden Resort",
          "The Colony Hotel",
          "Grand Pasha Nicosia Hotel & Casino & Spa",
          "Life Hotel",
          "Ada Beach Hotel",
          "The Olive Tree Hotel",
          "Oscar Park Hotel",
          "Oasis Hotel",
          "Le Chateau Lambousa Hotel",
          "The Ship Inn Hotel",
          "Gillham Vineyard Hotel",
          "Grand Center Boutique Hotel",
          "Celebrity Hotel",
          "Ingate Hotel",
          "Mimoza Beach Hotel",
          "Olivia Palm Hotel",
          "MC Palace Hotel Spa & Convention",
          "Royal Palace Hotel"
        ];

        const html = `
          <div class="smpl-${config.scenarioname}">
            <img src="${trasferBanner}">
            <div class="smpl-${config.scenarioname}-arrow"></div>
            <div class="smpl-${config.scenarioname}-tooltip">
              <p>01.04.2022 – 31.10.2022 tarihleri arasında gerçekleştirilecek 4 gece ve üzeri konaklamalarda geçerlidir.</p>
              <p>Ücretsiz ekonomik transfer hizmeti çift yön olarak Kıbrıs Ercan Havalimanı – Otel – Kıbrıs Ercan Havalimanı arasında gerçekleştirilecektir.</p>
            </div>
          </div>`;

        const hotelName = jQuery(".hotel-detail-name").text().trim();
        for (const item of hotelList) {
          if (item === hotelName) {
            jQuery("#scroll-to-innersearch").after(html);
            main.factory.prototype.fireEvent("shown_banner", true);
          }
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
  let ed = {};
  ed["_ed_" + scenarioName] = new EightDigits.sf();
  ed["_ed_" + scenarioName][scenarioName]();
})();

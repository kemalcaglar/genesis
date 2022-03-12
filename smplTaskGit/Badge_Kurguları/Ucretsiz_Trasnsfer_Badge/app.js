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
          .smpl_${config.scenarioname} {
            padding-left: 25px;
            font-size: 13px;
            cursor: pointer;
            position: relative;
            color: #a6a6a6;
            display: inline-block;
          }

          .smpl_${config.scenarioname}.smpl_listing {
            padding-left: 15px;
            color: #4bca63 !important;
          }

          .smpl_${config.scenarioname}:hover .smpl_tooltip,
          .smpl_${config.scenarioname}:hover .smpl_tooltip:after {
            display: block;
          }

          .smpl_${config.scenarioname} i {
            color: #4bca63 !important;
          }

          .smpl_${config.scenarioname} .smpl_tooltip {
            background: #555;
            padding: 12px;
            position: absolute;
            top: 34px;
            color: white;
            width: 310px;
            text-align: center;
            z-index: 3;
            border-radius: 6px;
            font-size: 12px;
            line-height: 1.5em;
            left: -70px;
            display: none;
          }

          .smpl_${config.scenarioname} .smpl_tooltip:after {
            background: #555;
            width: 20px;
            height: 20px;
            content: '';
            position: absolute;
            top: -8px;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            left: 140px;
            z-index: 0;
            border-radius: 3px;
            display: none;
          }

          @media only screen and (max-width:768px){
            .smpl_${config.scenarioname} {
              margin: 5px 0 0 0px;
              padding-left: 0px;
            }

            .smpl_${config.scenarioname} .smpl_tooltip {
              top: -28px;
              left: 120px;
              width: 169px;
              padding: 6px;
              font-size: 11px;
            }

            .smpl_${config.scenarioname} .smpl_tooltip:after {
              top: 25px;
              left: -9px;
            }

            .smpl_${config.scenarioname}.smpl_listing {
              width: 100%;
              text-align: right;
            }

            .smpl_${config.scenarioname}.smpl_listing .smpl_tooltip {
              top: -33px;
              left: -185px;
              width: 182px;
            }

            .smpl_${config.scenarioname}.smpl_listing .smpl_tooltip:after {
              top: 35px;
              right: -9px;
              left: unset;
              z-index: -1;
            }
          }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
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
        const tooltipText = "01.04.2022 – 31.10.2022 tarihleri arasında gerçekleştirilecek 4 gece ve üzeri konaklamalarda geçerlidir. Ücretsiz ekonomik transfer hizmeti çift yön olarak Kıbrıs Ercan Havalimanı – Otel – Kıbrıs Ercan Havalimanı arasında gerçekleştirilecektir.";
        const html = `
          <span class="smpl_${config.scenarioname}">
            <i class="fas fa-bus"></i>
            Ücretsiz Transfer
            <span class="smpl_tooltip">${tooltipText}</span>
          </span>`;

        if (ED.dataLayer.data.pageType === "product") {
          for (const item of hotelList) {
            if (item === jQuery(".hotel-detail-name").text().trim()) {
              if (window.innerWidth > 768) {
                jQuery(".hoteldetail-header-subinfo").append(html);
                main.factory.prototype.fireEvent("shown", true);
              } else {
                jQuery(".mobile-board-type").append(html);
                main.factory.prototype.fireEvent("shown", true);
              }
            }
          }
        }

        if (ED.dataLayer.data.pageType === "category") {
          jQuery(".booking-item").each(function (index, element) {
            const hotelName = jQuery(element).find(".hotellist-item-information .hotellist-hotel-name").text().trim();
            for (const item of hotelList) {
              if (item === hotelName) {
                if (window.innerWidth > 768) {
                  jQuery(this).find(".hotellist-item-subinfo").append(html);
                  jQuery(`.smpl_${config.scenarioname}`).addClass("smpl_listing");
                  main.factory.prototype.fireEvent("shown", true);
                } else {
                  jQuery(this).find(".hotellist-item-mobile-boardtype").after(html);
                  jQuery(`.smpl_${config.scenarioname}`).addClass("smpl_listing");
                  main.factory.prototype.fireEvent("shown", true);
                }
              }
            }
          });
        }

        main.factory.prototype.style();
      },
      control: function () {
        if (!(ED.dataLayer.data.pageType === "product" || ED.dataLayer.data.pageType === "category")) {
          return false;
        }
      },
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
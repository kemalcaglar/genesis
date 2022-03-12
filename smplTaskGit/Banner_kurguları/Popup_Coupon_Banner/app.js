(function () {
  const scenarioName = "Popup_Banner_Coupon_test";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,

      mobileSrc: "https://cdn.8digits.com/log/r/64878d46-660e-4250-96c8-0a38968632b1.png",
      desktopSrc: "https://cdn.8digits.com/log/r/f43ae3ac-91cd-43cf-965d-ae224d863a2e.png",
      code: "KULTUR5",
      group: ["Butik Mardin Turu", "Kapadokya Turu Uçaklı"],
      controlgroup: 0,
    };

    const main = {
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
          if (window.innerWidth <= 575) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Mobile")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Mobile", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
            }
          }
        } else {
          if (window.innerWidth <= 575) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
          } else {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
          }
        }
      },
      start: function () {
        const imgSrc = window.innerWidth <= 575 ? config.mobileSrc : config.desktopSrc;
        const html = `
        <div class="${config.scenarioname}">
          <img src="${imgSrc}">
          <div class="copySection">
            <span class="closeButton">&times;</span>
            <span class="copyButton"></span>
            <span class="copied smpl_dnone">Kopyalandı</span>
          </div>
        </div>
        `;
        (window.innerWidth <= 575)
          ? jQuery(".m-total-price.js-m-tourTotal-price.row").before(html)
          : jQuery(".container .breadcrumb").parent().append(html);
        main.factory.prototype.fireEvent("shown", true);
        main.factory.prototype.style();
        const copyTheClipBoard = function () {
          let temp = jQuery("<input>");
          jQuery("body").append(temp);
          jQuery(temp).val(config.code).select();
          document.execCommand("copy");
          jQuery(temp).remove();
          document.execCommand("copy");
        };
        jQuery(`.${config.scenarioname} .closeButton`).click(function () {
          jQuery(`.${config.scenarioname}`).remove();
        });
        jQuery(`.${config.scenarioname} .copyButton`).click(function () {
          copyTheClipBoard();
          main.factory.prototype.fireEvent("click_copy", true);
          jQuery(`.${config.scenarioname} .copied`).removeClass("smpl_dnone");
          jQuery(`.${config.scenarioname} .copied`).removeClass("smpl_fadeOut");
          setTimeout(() => {
            jQuery(`.${config.scenarioname} .copied`).addClass("smpl_fadeOut");
            setTimeout(() => {
              jQuery(`.${config.scenarioname} .copied`).addClass("smpl_dnone");
            }, 2000);
          }, 1000);

        });
      },
      style: function () {
        const className = "." + config.scenarioname;
        let css = `
        <style>
        ${className} {
          display: flex;
          position: sticky;
          bottom: 0px;
          left: 100%;
          z-index: 10000000000;
          animation: slideIn 2s linear;
          max-width: 348px;
        }
        ${className} img{
          display:inline-block;
        }
        ${className} .copySection{
          position:absolute;
          width:100%;
          height: 100%;
          top:0;
          left:0;
        }
        ${className} .copySection .closeButton{
          display: none;
        }
        ${className} .copySection .copyButton{
          position: absolute;
          width: 40%;
          bottom: 12%;
          right: 13%;
          height: 29%;
          cursor:pointer;
        }
        ${className} .copySection .copied{
          position: absolute;
          width: 40%;
          right: 12%;
          bottom: 12%;
          height: 29%;
          background-color: #f00;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          border-radius: 5px;
        }
        ${className} .smpl_dnone{
          display: none !important;
        }
        ${className} .smpl_fadeOut{
          animation: fadeOut 2s;
        }
        @keyframes fadeOut {
          0% {opacity:1;}
          100% {opacity:0;}
        }
        @keyframes slideIn {
          0% {bottom: -100%;}
          100% {bottom:0;}
        }
        @media screen and (max-width:575px){
          ${className} {
            position: fixed;
            bottom: 45px;
            margin: auto;
            left: 0;
            right: 0;
          }
          ${className} .copySection .copyButton{
            width: 43%;
            right: 10%;
          }
          ${className} .copySection .closeButton{
            display: inline-block;
            font-size: 20px;
            height: 20px;
            width: 20px;
            position: absolute;
            right: 0px;
            color: #fff;
            cursor: pointer;
          }
        }
        </style>`;
        jQuery("head").append(css);
      },
      control: function () {
        let control = false;
        let pageType = dataLayer.find(item => { return item.pageType; });
        if (pageType.pageType === "Detail Page") {
          let ecom = dataLayer.find(item => { return item.ecommerce; });
          if (ecom.ecommerce.detail.products.length === 1) {
            const productName = ecom.ecommerce.detail.products[0].name;
            if (config.group.includes(productName)) {
              control = true;
            }
          }
        } else {
          return false;
        }
        return control;
      },
      timeRule: function () {
        let count = 0;
        let timeInterval = setInterval(() => {
          if (count === 5) {
            clearInterval(timeInterval);
            main.factory.prototype.start();
          }
          count++;
        }, 1000);
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
        main.factory.prototype.timeRule();
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
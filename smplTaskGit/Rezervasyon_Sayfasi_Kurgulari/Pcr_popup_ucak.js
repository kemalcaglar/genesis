(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("PCR_popup")) {
    return false;
  }
  EightDigits.sf.prototype.PCR_popup = function () {
    var config = {
      scenarioname: "PCR_popup",
      analytics: "PCR_popup",
      infoIcon: "https://cdn.8digits.com/log/r/74dd3bad-3df3-4898-9ba9-78acaaad80f9.png",
      controlgroup: 0,
    };

    var main = {
      factory: function () {
        return true;
      },
    };

    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
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
        var css = `<style>
.PCR_popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99999;
}

.PCR_popup .PCR_popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: rgba(89, 89, 89, 0.53);
}

.PCR_popup .PCR_popup_container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  z-index: 999;
  background-color: #fff;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  padding: 10px 40px;
}

.PCR_popup .PCR_popup_container .PCR_popup_close {
  position: absolute;
  right: 10px;
  font-size: 24px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
}

.PCR_popup .PCR_popup_container h4 {
  margin: 10px auto !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  display: flex;
  align-items: center;
}

.PCR_popup .PCR_popup_container h4 img {
  width: 21px;
  height: 21px;
}

.PCR_popup .PCR_popup_container h4 span {
  font-size: inherit;
  margin-left: 5px;
}

.PCR_popup .PCR_popup_container .PCR_popup_content {
  width: 100%;
  margin: auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.PCR_popup .PCR_popup_container .PCR_popup_content div {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  overflow: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: initial;
      -ms-flex-pack: initial;
          justify-content: initial;
}

.PCR_popup .PCR_popup_container .PCR_popup_content div p{
  margin-top: 20px;
}
.PCR_popup .PCR_popup_container .PCR_popup_content div section {
  display:flex;
  flex-direction: column;
}
.PCR_popup .PCR_popup_container .PCR_popup_content div section a {
  color: #1b61e8 !important;
}
.smpl_over_hidden{
  overflow: hidden!important;
}
@media screen and (max-width: 420px) {
  .PCR_popup .PCR_popup_container {
    width: 96%;
    margin: 0;
  }
  .PCR_popup .PCR_popup_container h4 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .PCR_popup .PCR_popup_container h4 img {
    width: 24px;
    height: 24px;
  }
  .PCR_popup .PCR_popup_container h4 span {
    font-size: 18px;
    margin-left: 5px;
  }
  .PCR_popup .PCR_popup_container .PCR_popup_content div {
    height: calc(100vh - 400px);
  }
}
</style>`;
        jQuery("head").append(css);
      },
      start: function () {
        const genelgeLink = "https://www.icisleri.gov.tr/bazi-faaliyetler-icin-pcr-testi-zorunlulugu-genelgesi-gonderildi";
        const informLink = "https://www.setur.com.tr/koronavirus-hakkinda-bilgilendirme"
        let html = `
        <div class="` + config.scenarioname + `">
          <div class="` + config.scenarioname + `_overlay"></div>
          <div class="` + config.scenarioname + `_container">
            <div class="` + config.scenarioname + `_close">&times;</div>
            <h4>
              <img src="` + config.infoIcon + `">
              <span>Aşı / Pcr Test Zorunluluğu Duyurusu</span>
            </h4>
            <div class="` + config.scenarioname + `_content">
              <div>
                <p>
                  T.C. İçişleri Bakanlığı'nın yayınlamış olduğu genelgeye istinaden; aşısız veya hastalığı geçirmemiş yolcuların uçuşlara kabulünde negative sonuçlu PCR testi gerekecektir.
                </p>
                <p>
                  Havalimanlarında, uçuşa kabul aşamasında HES kodu üzerinden, kişilerin aşılı/hastalık geçirmiş (Covid 19 hastalığı sonrası bilimsel olarak bağışık kabul edilen süreye göre) olduğu veya azami 48 saat önce yapılmış negatif sonuçlu PCR testi sorgulaması yapılacaktır. Yolcu, aşılı değilse, hastalığı geçirmemişse veya azami 48 saat önce yapılmış negatif sonuçlu PCR testi ibraz edemiyorsa uçuşlara kabul edilmeyecektir ve iade/değişiklik işlemleri biletin ücret kuralına göre yapılacaktır.
                </p>
                <p>
                  <b>Salgın önlemleri ile ilgili detaylı bilgilere aşağıdaki linklerden ulaşabilirsiniz:</b>
                </p>
                <section>
                  <a href="` + genelgeLink + `" target="_blank">` + genelgeLink + `</a>
                  <a href="` + informLink + `" target="_blank"> ` + informLink + ` </a>
                </section>
              </div>
            </div>
          </div>
        </div>
        `
        jQuery("body").append(html)
        main.factory.prototype.style()
        jQuery("html").addClass("smpl_over_hidden")
        main.factory.prototype.fireEvent("shown-popup", true)

        jQuery("." + config.scenarioname + "_close, ." + config.scenarioname + "_overlay").click(function () {
          jQuery("." + config.scenarioname).remove()
          main.factory.prototype.fireEvent("click-close", false)
          jQuery("html").removeClass("smpl_over_hidden")
        })
      },
      control: function () {
        var IExplorerAgent = !!document.documentMode;
        if (IExplorerAgent === true) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
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
  var _ed_PCR_popup = new EightDigits.sf();
  _ed_PCR_popup.PCR_popup();
})();
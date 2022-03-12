(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Ucretsiz_Badge_Tooltip")) {
    return false
  }
  EightDigits.sf.prototype.Ucretsiz_Badge_Tooltip = function () {

    let config = {
      scenarioname: "Ucretsiz_Badge_Tooltip",
      analytics: "Ucretsiz_Badge_Tooltip",
      controlgroup: 0
    };

    const main = {
      "factory": function () {
        return true;
      }
    };
    main.factory.prototype = {
      random: function () {
        let randomVal = 0;
        let randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor((Math.random() * 10000) + 1);
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
      getHtml: function (nameMatch, type, page) {
        let html = "";
        const skipassText = "Ücretsiz skipass otelden temin edilebilecektir."
        const skipass = `
      <span class="smpl_skipassContainer">
        <i class="fas fa-skiing"></i>
        Ücretsiz Skipass
        <span class="smpl_skipassTooltip smpl_dnone">`+ skipassText + `</span>
      </span>`;
        let transfer = `
      <span class="smpl_transferContainer">
        <i class="fas fa-bus"></i>
        Ücretsiz Transfer`
        if (nameMatch.text) {
          transfer += `
        <span class="smpl_transferTooltip smpl_dnone">` + nameMatch.text + `</span>`
        }
        transfer += `
      </span>`

        if (type === "skipass") {
          html += skipass
        }
        else if (type === "transfer") {
          html += transfer
        }
        else if (type === "both") {
          html += transfer + skipass
        }
        if (page === "product") {
          return `<span class="smpl_product">` + html + `</span>`
        }
        else {
          return `<span class="smpl_category">` + html + `</span>`
        }

      },
      start: function () {
        main.factory.prototype.style();
        const tooltipText = "Tesiste X gece ve üzeri konaklamalarda havalimanı-otel ve otel-havalimanı transferi konaklama ücretine dahildir.Misafirlerin kampanyadan yararlanabilmek için uçuş bilgilerini, uçuştan 48 saat önce tursatis@setur.com.tr e-posta adresine göndermeleri gerekmektedir."
        const arr = [
          { name: "Kaya Palazzo Ski & Mountain Resort", text: "", skipass: true, transfer: false },
          { name: "Dorukkaya Ski & Mountain Resort", text: "", skipass: true, transfer: false },
          { name: "Grand Kartal", text: "", skipass: true, transfer: false },
          { name: "Royal Özçelik Hotel Sarıkamış", text: tooltipText, skipass: false, transfer: true },
          { name: "Sway Hotels Palandöken Erzurum", text: tooltipText, skipass: true, transfer: true },
          { name: "Dedeman Palandöken", text: tooltipText, skipass: true, transfer: true },
          { name: "Kayı Snow Otel", text: "", skipass: true, transfer: true },
          { name: "Sarıkamış Kayı Resort Otel", text: "", skipass: true, transfer: true },
          { name: "Palan Otel", text: tooltipText, skipass: false, transfer: true },
          { name: "Polat Palandöken", text: tooltipText, skipass: true, transfer: true }
        ];
        const tooltipControler = function (main, sub) {
          main.mouseenter(function () {
            jQuery(this).find(sub).removeClass("smpl_dnone")
          }).mouseleave(function () {
            jQuery(this).find(sub).addClass("smpl_dnone")
          })
        }
        const displayHtml = function (domEl, item, type) {
          if (ED.dataLayer.data.pageType === "category") {
            if (window.innerWidth <= 768) {
              jQuery(".hotellist-item-mobile-boardtype", domEl).after(main.factory.prototype.getHtml(item, type, "category"));
            }
            else {
              jQuery(".hotellist-item-subinfo", domEl).append(main.factory.prototype.getHtml(item, type, "category"));
            }
          }
          else {
            let domElem = ""
            if (window.innerWidth <= 574) {
              if (jQuery(".hotel-detail-main-price-mobile .mobile-board-type").length > 0) {
                domElem = ".mobile-board-type"
              }
              else {
                domElem = ".hotel-detail-main-price-mobile"
              }
            }
            else {
              domElem = ".hoteldetail-header-subinfo"

            }
            jQuery(domElem).append(main.factory.prototype.getHtml(item, type, "product"));
          }

        }
        dataLayer.forEach(function (data) {
          if (data.ecommerce !== undefined) {
            if (data.ecommerce.MainCategory === "Hotel" && ED.dataLayer.data.pageType === "category") {
              // a6a6a6 color Transfer ve skipass yazıların bold olmasın
              //#555 tooltip arka plan rengi
              const matchProduct = function () {
                jQuery(".booking-item").each(function (i, item) {
                  const nameMatch = arr.find(x => x.name === jQuery(".hotellist-hotel-name a:eq(0)", item).text().trim())
                  if (nameMatch != undefined) {

                    if (nameMatch.skipass === true && nameMatch.transfer === true) {
                      displayHtml(item, nameMatch, "both")
                      tooltipControler(jQuery(".smpl_skipassContainer", item), ".smpl_skipassTooltip")
                      tooltipControler(jQuery(".smpl_transferContainer", item), ".smpl_transferTooltip")
                    }
                    else if (nameMatch.skipass === true && nameMatch.transfer === false) {
                      displayHtml(item, nameMatch, "skipass")
                      tooltipControler(jQuery(".smpl_skipassContainer", item), ".smpl_skipassTooltip")
                    }
                    else {
                      displayHtml(item, nameMatch, "transfer")
                      tooltipControler(jQuery(".smpl_transferContainer", item), ".smpl_transferTooltip")
                    }
                    main.factory.prototype.fireEvent("Shown_Category", true)
                  }
                })
              }
              matchProduct();
              jQuery(document).ajaxComplete(function (r, s, p) {
                if (p.url.indexOf("HotelListForFilter?slug=") > -1) {
                  matchProduct();
                }
              });
            }
          }
        })

        if (ED.dataLayer.data.pageType === "product") {
          const nameMatch = arr.find(x => x.name === jQuery(".hotel-detail-name").text().trim());
          if (nameMatch != undefined) {
            main.factory.prototype.fireEvent("Shown_Product", true)
            if (nameMatch.skipass === true && nameMatch.transfer === true) {
              displayHtml("", nameMatch, "both")
              tooltipControler(jQuery(".smpl_skipassContainer"), ".smpl_skipassTooltip")
              tooltipControler(jQuery(".smpl_transferContainer"), ".smpl_transferTooltip")
              if (window.innerWidth < 1200) {
                jQuery(".hoteldetail-hotel-address").css("padding-right", "6px")
                jQuery(".hoteldetail-hotel-map").css("padding-right", "6px")
              }
            }
            else if (nameMatch.skipass === true && nameMatch.transfer === false) {
              displayHtml("", nameMatch, "skipass")
              tooltipControler(jQuery(".smpl_skipassContainer"), ".smpl_skipassTooltip")
            }
            else {
              displayHtml("", nameMatch, "transfer")
              tooltipControler(jQuery(".smpl_transferContainer"), ".smpl_transferTooltip")
            }
            if (window.innerWidth <= 574) {
              if (jQuery(".hotel-detail-main-price-mobile .mobile-board-type").length > 0) {
                jQuery(".mobile-board-type").css("padding", "0px 0 0 17px");
                jQuery(".mobile-board-type").css("position", "relative")
                if (window.innerWidth < 330) {
                  jQuery(".hoteldetail-discounted-price").css({
                    "font-size": "12px",
                    "width": "51px",
                    "margin-top": "-15px"
                  })
                }
              }
            }
          }

        }

      },
      style: function () {
        let css = `<style>
.smpl_transferContainer,
.smpl_skipassContainer {
  padding-left: 15px;
  font-size: 13px;
  cursor: pointer;
  position: relative;
}

.smpl_skipassContainer:hover .smpl_skipassTooltip {
  display: block;
}

.smpl_transferContainer {
  color: #4bca63;
}

.smpl_transferTooltip,
.smpl_skipassTooltip {
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
}

.smpl_transferTooltip:after,
.smpl_skipassTooltip:after {
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
}

.smpl_category .smpl_skipassTooltip {
  left: -70px;
}

.smpl_category .smpl_skipassContainer,
.smpl_category .smpl_transferContainer {
  color: #4bca63;
}

.smpl_category .smpl_transferTooltip {
  left: -70px;
}

.smpl_product .smpl_skipassTooltip {
  left: -54px;
}

.smpl_product .smpl_skipassContainer,
.smpl_product .smpl_transferContainer {
  color: #a6a6a6;
  padding-left: 25px;
  font-size: 13px;
}

.smpl_product .smpl_skipassContainer i,
.smpl_product .smpl_transferContainer i {
  color: #4bca63;
  padding-right: 3px;
}

.smpl_product .smpl_transferTooltip {
  left: -54px;
}

@media screen and (min-width: 1200px) {
  .smpl_category .smpl_skipassContainer {
    padding-left: 0;
  }

  .smpl_category .smpl_transferTooltip {
    width: 265px;
  }

  .smpl_category .smpl_transferContainer {
    padding-left: 0;
  }

  .smpl_product .smpl_transferContainer {
    padding-left: 6px;
  }

  .smpl_product .smpl_skipassContainer {
    padding-left: 6px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 991px) {
  .smpl_category,
  .smpl_product {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    position: relative;
    z-index: 10;
  }

  .smpl_skipassContainer,
  .smpl_transferContainer {
    text-align: right;
    padding-left: 0 !important;
    color: #4bca63 !important;
  }
}
@media screen and (max-width: 768px) and (min-width: 575px){
  .smpl_category,
  .smpl_product{
    width: 100%;
  }
}
@media screen and (max-width: 768px) {

  .smpl_skipassTooltip,
  .smpl_transferTooltip {
    padding: 6px;
    font-size: 11px;
  }

  .smpl_category,
  .smpl_product {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    z-index: 10;
    position: relative;
  }

  .smpl_category .smpl_skipassTooltip {
    width: 180px;
  }

  .smpl_category .smpl_skipassTooltip:after {
    top: 9px;
    left: 164px;
    z-index: -1;
  }

  .smpl_category .smpl_transferTooltip {
    top: -22px;
    left: -179px;
    width: 182px;
  }

  .smpl_category .smpl_transferTooltip :after {
    top: 25px;
    left: 168px;
  }

  .smpl_skipassContainer,
  .smpl_transferContainer {
    text-align: right;
  }

  .smpl_product .smpl_skipassTooltip {
    width: 250px;
  }

  .smpl_product .smpl_skipassTooltip:after {
    top: -8px;
    left: 57px;
    z-index: 0;
  }

  .smpl_skipassContainer,
  .smpl_transferContainer {
    margin-left: -7px;
  }

  .smpl_product .smpl_transferTooltip {
    top: -25px;
    left: 127px;
    width: 169px;
  }

  .smpl_product .smpl_transferTooltip:after {
    top: 22px;
    left: -5px;
    z-index: -1;
  }
}

.smpl_dnone {
  display: none;
}

</style>`;
        jQuery("head").append(css);
      },
      control: function () {
        if (!(ED.dataLayer.data.pageType === "product" || ED.dataLayer.data.pageType === "category")) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false
        }
        let _exec = main.factory.prototype.random();
        if (!_exec) {
          main.factory.prototype.fireEvent("NotShown", true)
          return false;
        }
        main.factory.prototype.start();
      }
    };

    boot = function () {
      return main.factory.prototype.init();
    };
    boot();
  };
  let _ed_Ucretsiz_Badge_Tooltip = new EightDigits.sf();
  _ed_Ucretsiz_Badge_Tooltip.Ucretsiz_Badge_Tooltip();
})();


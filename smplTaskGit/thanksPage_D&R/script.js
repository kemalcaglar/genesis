(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Banner_Coupon_D_and_R")) {
    return false;
  }
  EightDigits.sf.prototype.Banner_Coupon_D_and_R = function () {
    var config = {
      scenarioname: "Banner_Coupon_D_and_R",
      analytics: "Banner_Coupon_D_and_R",
      controlgroup: 0,
      imgSrcD: "https://cdn.8digits.com/log/r/e5e4b6d3-a5df-471c-a8a2-947725e63245.jpeg",
      imgSrcM: "https://cdn.8digits.com/log/r/56aa04d3-37a1-4fd2-8707-a157ddbd7877.jpeg",
      campaingText: "Setur D&R KampanyasÄ±",
      campaingLink: "https://www.setur.com.tr/setur-dr-kampanyasi",
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
      displayCampaing: function (coupon) {

        let imgSrc = (window.innerWidth <= 767) ? config.imgSrcM : config.imgSrcD;
        let listItem = ["Kampanya, 30 EylÃ¼l 2021 tarihine kadar Boyner.com.trâden yapÄ±lacak Boyner Expressâ¥Bodrum Ã¼rÃ¼nlerinde geÃ§erlidir.",
          "Sepetteki Ã¼rÃ¼nlerin tamamÄ± Boyner Expressâ¥Bodrum sayfasÄ±ndan seÃ§ilmiÅ ve teslimat adresi Bodrum Merkez, YalÄ±kavak, GÃ¼mbet, TÃ¼rkbÃ¼kÃ¼, GÃ¼ndoÄan, GÃ¼mÃ¼ÅlÃ¼k, Turgutreis, Akyarlar, YalÄ±, KumkÃ¶y, GÃ¼vercinlik, Torba ise 3 saatte teslimat sÃ¼reci iÅler, aksi durumlarda standart kargo sÃ¼reci iÅler.",
          "Saat 19:00 sonrasÄ± verilmiÅ sipariÅler takip eden gÃ¼n teslim edilir.",
          "Ä°ndirim toplu alÄ±mlarda, yasaklÄ± markalarda, kelebekli Ã¼rÃ¼nlerde, elektrikli ev aletlerinde, outlet Ã¼rÃ¼nlerinde, deprem kitlerinde, hediye kutularÄ±nda, gift kartlarda ve hÄ±zlÄ± tÃ¼ketim Ã¼rÃ¼nlerinde geÃ§erli deÄildir.",
          "Åifreli kampanyadÄ±r, diÄer kampanyalarla birleÅmez, kiÅiye Ã¶zel kodlar tek kullanÄ±mlÄ±ktÄ±r.",
          "MÃ¼Återi indirim kodu kazandÄ±ÄÄ± alÄ±ÅveriÅ dahilindeki Ã¼rÃ¼nlerin tamamÄ±nÄ± iade eder ve satÄ±Å bedeli nakit veya kredi kartÄ±na iade sureti ile mÃ¼Återiye geri verilir ise, indirim kodu geÃ§erliliÄini yitirir. Ä°ndirim karÅÄ±lÄ±ÄÄ± para iadesi yapÄ±lamaz.",
          "Boyner BÃ¼yÃ¼k MaÄazacÄ±lÄ±k A.Å. kampanyayÄ± deÄiÅtirme hakkÄ±nÄ± saklÄ± tutar."]
        var html = `
          <div class="ed_couponBanner">
            <div class="imgSection">
              <img src="` + imgSrc + `">
              <span class="couponCode">` + coupon + `</span>
              <a id="downloadCouponCode" href="javascript:void(0)"></a>
              <span class="copiedText" style="display:none;">KopyalandÄ±</span>
            </div>
            <div class="campaingMessage"> 
              <a href="${config.campaingLink}" alt="${config.campaingText}" target="_blank">${config.campaingText}</a>
            </div>
          </div>
          `;
        jQuery(".tour-reservation-container").append(html);
        jQuery("head").append(main.factory.prototype.style());
        main.factory.prototype.fireEvent("shown-banner", true);
        jQuery(".ed_couponBanner #downloadCouponCode").click(function () {
          let temp = jQuery('<input>');
          jQuery('body').append(temp);
          jQuery(temp).val(coupon).select();
          document.execCommand('copy');
          jQuery(temp).remove();
          document.execCommand('copy');
          main.factory.prototype.fireEvent("click-copy", false);
          jQuery(".ed_couponBanner .copiedText").css("display", "flex");
          jQuery(".ed_couponBanner .copiedText").delay(1000).fadeOut("slow");
        })
        jQuery(window).resize(function () {
          const element = jQuery(".ed_couponBanner .imgSection img");
          if (window.innerWidth < 768 && element.attr("src") !== config.imgSrcM) {
            element.attr("src", config.imgSrcM);
          } else if (window.innerWidth > 767 && element.attr("src") !== config.imgSrcD) {
            element.attr("src", config.imgSrcD);
          }
        })
      },
      start: function () {
        const getCoupon = function () {
          /* e7f0bfe5-9eba-4f5c-bb23-debae8670761  --> test */
          const couponInCookie = EightDigits.utils.getCookie(`smpl_${config.scenarioname}_coupon`);
          if (couponInCookie) {
            main.factory.prototype.displayCampaing(couponInCookie);
          } else {
            let visitorId = EightDigits.utils.getCookie("eightdigits_visitor");
            let requestList = ["e7f0bfe5-9eba-4f5c-bb23-debae8670761"];
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
              visitorId: visitorId,
              customer: _trackingCode,
              campaignId: requestList[0],
            });

            let requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch("https://promocode.8digits.com/api/campaign/search", requestOptions)
              .then((response) => response.text())
              .then((result) => {
                let coupon = JSON.parse(result);
                EightDigits.utils.setCookie(`smpl_${config.scenarioname}_coupon`, coupon.data, 24 * 60 * 60);
                main.factory.prototype.displayCampaing(coupon.data);
              })
              .catch((error) => console.log("error", error));
          }
        }
        if (EightDigits.utils.getCookie(`smpl_${config.scenarioname}`) === "on") {
          getCoupon();
          EightDigits.utils.setCookie(`smpl_${config.scenarioname}`, "on", -1);
        }
      },
      style: function () {
        return (`<style>.ed_couponBanner .campaingMessage {
              text-align: center;
              font-size: 12px;
              margin-top: 5px;
              color: #000;
              position:relative;
            }
            .ed_couponBanner .campaingMessage a {
              font-size: inherit;
              color: #dc1222 !important;
            }
            .ed_couponBanner .campaingMessage .smpl_tooltip_Info {
              display:none;
              width: 70%;
              justify-content: center;
              align-items: flex-start;
              position: absolute;
              margin: auto;
              flex-direction: column;
              left: 0;
              right: 0;
              background-color: orchid;
              color: #fff;
              font-weight: 500;
              z-index: 1111;
              text-align: left;
              padding: 20px;
              bottom: 21px;
            }
            .ed_couponBanner .campaingMessage:hover .smpl_tooltip_Info{
              display:flex;
            }
            .ed_couponBanner .imgSection {
              position: relative;
              color: #E7E0CA;
            }
            .ed_couponBanner .imgSection .couponCode {
              display: flex;
              width: 18%;
              height: 68%;
              position: absolute;
              right: 28%;
              top: 50%;
              transform: translate(-19%, -49%);
              background-color: #fff;
              border: 2px dashed #ed1b24;
              border-radius: 50px;
              align-items: center;
              justify-content: center;
              font-size: 1.5vw;
              font-weight: 500;
              color: #0d0d0d;
              padding-top: 5px;
            }
            .ed_couponBanner .imgSection #downloadCouponCode {
              display: inline-flex;
              width: 15.5%;
              height: 36%;
              position: absolute;
              right: 10%;
              top: 50%;
              transform: translate(-10%, -42%);
              opacity: 0;
              cursor: pointer;
            }
            .ed_couponBanner .imgSection .copiedText {
              position: absolute;
              top: 50%;
              right: 14%;
              color: #373131;
              background-color: #fff;
              padding: 2px 10px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              transform: translateY(-50%);
            }
            .smpl_dnone{
              display:none !important;
            }
              @media screen and (min-device-width: 1400px){
                .ed_couponBanner .imgSection .couponCode {
                  font-size: 22px;
                }
              }
              @media screen and (max-device-width: 767px){
                .smpl_over_hidden{
                  overflow: hidden!important;
                }
                .ed_couponBanner .campaingMessage .smpl_tooltip_Info{
                  width:100%;
                  height: 300px;
                  overflow-y: scroll;
                  overflow-x: hidden;
                  overflow-wrap: break-word;
                  justify-content: initial;
                }
                .ed_couponBanner .imgSection .couponCode {
                  display: flex;
                  width: 25%;
                  height: 20%;
                  position: absolute;
                  right: 5%;
                  top: 60%;
                  border-radius: 30px;
                  align-items: center;
                  justify-content: center;
                  font-size: 3.6vw;
                  padding-top: 5px;
                  transform: none;
                }
                .ed_couponBanner .imgSection #downloadCouponCode {
                  display: inline-flex;
                  width: 38%;
                  height: 20%;
                  position: absolute;
                  right: 40.5%;
                  top: 70.5%;
                  opacity: 0;
                  cursor: pointer;
                }
                .ed_couponBanner .imgSection .copiedText {
                  top: 71%;
                  right: 50%;
                }
                .smpl_dflex{
                  display:flex !important;
                }
                .smpl_dnone{
                  display:none !important;
                }
              }
              </style>`);
      },
      control: function () {
        if (window.location.pathname === "/Sepet") {
          const mount = parseInt(jQuery(".booking-item-payment-total #summaryTotalText").text().split(",")[0].replace(".", ""));
          if (mount >= 4500) {
            jQuery("#btnCompleteOrder").click(function () {
              EightDigits.utils.setCookie(`smpl_${config.scenarioname}`, "on")
            })
          }
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() === false) {
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
  var _ed_Banner_Coupon_D_and_R = new EightDigits.sf();
  _ed_Banner_Coupon_D_and_R.Banner_Coupon_D_and_R();
})();
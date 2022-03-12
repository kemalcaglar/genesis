(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Boyner_Campaing_test")) {
    return false;
  }
  EightDigits.sf.prototype.Boyner_Campaing_test = function () {
    var config = {
      scenarioname: "Boyner_Campaing_test",
      analytics: "Boyner_Campaing_test",
      controlgroup: 0,
      imgSrcD: "https://cdn.8digits.com/log/r/fdca965d-fda7-408a-b89f-bec8674b48a7.jpeg",
      imgSrcM: "https://cdn.8digits.com/log/r/8dbcc784-f727-4937-b5f0-7b7ff477135d.jpeg",
      campaingText: "Kampanya Detayları",
      campaingLink: "https://www.setur.com.tr/kampanyalar ",
    };
    config.couponCookie = "ed_" + config.scenarioname + "_boynerCoupon"
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
      start: function () {

        if (jQuery(".tour-reservation__content h3").length > 0) {
          if (jQuery(".tour-reservation__content h3").text().indexOf("Otel") > -1) {
            let visitedHotels = JSON.parse(localStorage.getItem("ed_visitedHotels"))
            let rezerHotelName = jQuery(".tour-reservation-info__header").text().trim()
            if (visitedHotels.includes(rezerHotelName)) {
              getCoupon()
            }
          }
        }
        if (jQuery(".tour-reservation-pointDeparture h3").length > 0) {
          if (jQuery(".tour-reservation-pointDeparture h3").text().indexOf("Uçak") > -1) {
            let ticketInfo = document.querySelector(".tour-reservation-pointDeparture-content__info").textContent
            if (ticketInfo.includes("Milas") && ticketInfo.includes("BJV")) {
              getCoupon()
            }
          }
        }

        function displayCampaing(coupon) {
          var css =
            `<style>.ed_couponBanner .campaingMessage {
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
              width: 16%;
              height: 68%;
              position: absolute;
              right: 18%;
              top: 50%;
              transform: translate(-19%, -49%);
              background-color: #fff;
              border: 2px dashed #c13ac4;
              border-radius: 11px;
              align-items: center;
              justify-content: center;
              font-size: 1.5vw;
              font-weight: 500;
              color: #000;
              padding-top: 5px;
            }
            .ed_couponBanner .imgSection #downloadCouponCode {
              display: inline-flex;
              width: 16.5%;
              height: 36%;
              position: absolute;
              right: 2%;
              top: 50%;
              transform: translate(-2%, -45%);
              opacity: 0;
              cursor: pointer;
            }
            .ed_couponBanner .imgSection .copiedText {
              position: absolute;
              top: 50%;
              right: 4%;
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
              @media screen and (max-device-width: 420px){
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
                  width: 33%;
                  height: 33%;
                  position: absolute;
                  left: 3%;
                  top: 57%;
                  border-radius: 30px;
                  align-items: center;
                  justify-content: center;
                  font-size: 4.6vw;
                  padding-top: 5px;
                  transform: none;
                  right: initial;
                }
                .ed_couponBanner .imgSection #downloadCouponCode {
                  display: inline-flex;
                  width: 36%;
                  height: 20%;
                  position: absolute;
                  right: 12.5%;
                  top: 72.5%;
                  opacity: 0;
                  cursor: pointer;
                }
                .smpl_dflex{
                  display:flex !important;
                }
                .smpl_dnone{
                  display:none !important;
                }
              }
              </style>`;
          let imgSrc, cWidth, cHeight
          if (window.innerWidth <= 420) {
            imgSrc = config.imgSrcM
            cWidth = 440
            cHeight = 110
          } else {
            imgSrc = config.imgSrcD
            cWidth = 960;
            cHeight = 200;
          }
          let listItem = ["Kampanya, 30 Eylül 2021 tarihine kadar Boyner.com.tr’den yapılacak Boyner Express♥Bodrum ürünlerinde geçerlidir.", "Sepetteki ürünlerin tamamı Boyner Express♥Bodrum sayfasından seçilmiş ve teslimat adresi Bodrum Merkez, Yalıkavak, Gümbet, Türkbükü, Gündoğan, Gümüşlük, Turgutreis, Akyarlar, Yalı, Kumköy, Güvercinlik, Torba ise 3 saatte teslimat süreci işler, aksi durumlarda standart kargo süreci işler.", "Saat 19:00 sonrası verilmiş siparişler takip eden gün teslim edilir.", "İndirim toplu alımlarda, yasaklı markalarda, kelebekli ürünlerde, elektrikli ev aletlerinde, outlet ürünlerinde, deprem kitlerinde, hediye kutularında, gift kartlarda ve hızlı tüketim ürünlerinde geçerli değildir.", "Şifreli kampanyadır, diğer kampanyalarla birleşmez, kişiye özel kodlar tek kullanımlıktır.", "Müşteri indirim kodu kazandığı alışveriş dahilindeki ürünlerin tamamını iade eder ve satış bedeli nakit veya kredi kartına iade sureti ile müşteriye geri verilir ise, indirim kodu geçerliliğini yitirir. İndirim karşılığı para iadesi yapılamaz.", "Boyner Büyük Mağazacılık A.Ş. kampanyayı değiştirme hakkını saklı tutar."]
          var html = `
          <div class="ed_couponBanner">
            <div class="imgSection">
              <img src="` + imgSrc + `">
              <span class="couponCode">` + coupon + `</span>
              <a id="downloadCouponCode" href="javascript:void(0)"></a>
              <span class="smpl_dnone copiedText">Kopyalandı</span>
            </div>
            <div class="campaingMessage"> 
              <a href="javascript:void(0)" alt="` + config.campaingText + `">` + config.campaingText + `</a>
              <ul class="smpl_tooltip_Info">`;
          listItem.forEach(element => {
            html += `
                <li>` + element + `</li>`
          });

          html += `
              </ul>
            </div>
            <!--<canvas id="canvas" style="display:none"></canvas> -->
          </div>
          `;
          jQuery(".tour-reservation-container").append(html);
          jQuery("head").append(css);

          jQuery(".ed_couponBanner .campaingMessage").mouseenter(function () {
            jQuery(".htmlOverFlow").addClass("smpl_over_hidden")
          })
          jQuery(".ed_couponBanner .campaingMessage").mouseout(function () {
            jQuery(".htmlOverFlow").removeClass("smpl_over_hidden")
          })
          if (window.innerWidth <= 1200) {
            jQuery(".ed_couponBanner .campaingMessage").click(function () {
              if (jQuery(".ed_couponBanner .campaingMessage ul").hasClass("smpl_dflex")) {
                jQuery(".ed_couponBanner .campaingMessage ul").removeClass("smpl_dflex")
                jQuery(".htmlOverFlow").removeClass("smpl_over_hidden")
              } else {
                jQuery(".ed_couponBanner .campaingMessage ul").addClass("smpl_dflex")
                jQuery(".htmlOverFlow").addClass("smpl_over_hidden")
              }
            })
          }
          main.factory.prototype.fireEvent("shown-banner", true)
          jQuery(".ed_couponBanner #downloadCouponCode").click(function () {
            let temp = jQuery('<input>');
            jQuery('body').append(temp);
            jQuery(temp).val(coupon).select();
            document.execCommand('copy');
            jQuery(temp).remove();
            document.execCommand('copy');
            main.factory.prototype.fireEvent("click-copy", false)
            jQuery(".ed_couponBanner .copiedText").removeClass("smpl_dnone")
            jQuery(".ed_couponBanner .copiedText").delay(1000).fadeOut("slow")
            setTimeout(() => {
              jQuery(".ed_couponBanner .copiedText").addClass("smpl_dnone")
            }, 1010);
          })
          /* let canvas = document.getElementById("canvas");
          ctx = canvas.getContext("2d");
          let canvasMessage =
            "Her 300TL Alışverişe 50TL indirim Kazandınız";
          canvas.width = cWidth;
          canvas.height = cHeight;
          let cw = canvas.width
          let ch = canvas.height
          ctx.strokeStyle = "#c13ac4";
          ctx.lineWidth = 5;
          ctx.strokeRect(0, 0, cw, ch);
          ctx.fillStyle = "white";
          ctx.fillRect(4, 4, cw - 8, ch - 8);
          ctx.fillStyle = "black";
          if (window.innerWidth <= 420) {
            ctx.font = "24px sans-serif";
            ctx.fillText(coupon, cw / 3 - 10, ch / 2 - 25);
            ctx.font = "20px sans-serif";
            ctx.fillText("Boyner Kupon Kodunuz", cw / 3 - 50, ch / 2 - 5);
            ctx.font = "12px sans-serif";
            ctx.fillText(canvasMessage, cw / 3 - 50, ch / 2 + 15);
          } else {
            ctx.font = "26px sans-serif";
            ctx.fillText(coupon, 515, ch / 2 - 30);
            ctx.font = "36px sans-serif";
            ctx.fillText("Boyner Kupon Kodunuz:", 50, ch / 2 - 25);
            ctx.font = "16px sans-serif";
            ctx.fillText(canvasMessage, 50, ch / 2 + 25);
          } 

          downloadImage = function (el) {
            main.factory.prototype.fireEvent("click-download", false)
            var dataURL = canvas.toDataURL("image/jpg");
            el.href = dataURL;
          };*/
        };

        function getCoupon() {
          /* 0773cd48-ca79-404d-8600-960618f0d209  --> all coupon codes */
          let visitorId = EightDigits.utils.getCookie("eightdigits_visitor");
          let requestList = ["0773cd48-ca79-404d-8600-960618f0d209"];
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
              EightDigits.utils.setCookie(config.couponCookie, coupon.data, 24 * 60 * 60)
              displayCampaing(coupon.data);
            })
            .catch((error) => console.log("error", error));
        }
      },
      control: function () {
        let IExplorerAgent = !!document.documentMode;
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
  var _ed_Boyner_Campaing_test = new EightDigits.sf();
  _ed_Boyner_Campaing_test.Boyner_Campaing_test();
})();
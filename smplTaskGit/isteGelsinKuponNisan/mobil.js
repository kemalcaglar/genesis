(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("paymentBannerWithCoupon_M")) {
    return false;
  }
  EightDigits.sf.prototype.paymentBannerWithCoupon_M = function () {
    var config = {
      scenarioname: "paymentBannerWithCoupon_M",
      analytics: "paymentBannerWithCoupon_M",
      controlgroup: 0,
      imgSrcM:
        "https://cdn.8digits.com/log/r/110f88b1-6a29-4f67-b869-37b0de5ade99.jpeg" /* mobil */,
      message:
        "istegelsin uygulamasından 30 Nisan'a kadar yapılacak 200TL ve üstü alışverişler için kampanya kodunu kullanarak 30TL indirim sağlayabilirsiniz.",
      campaingText: "Kampanya Detayları",
      campaingLink: "https://www.setur.com.tr/kampanyalar ",
      coupon: "ABC1234",
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
          config.controlgroup > 50
            ? config.controlgroup
            : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(
            EightDigits.utils.getCookie("_ed_" + config.scenarioname)
          );
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },

      start: function () {
        displayCampaing = function () {
          var css =
            "<style>.ed_couponBanner p.campaingMessage {\
            text-align: center;\
            font-size: 12px;\
            margin-top: 5px;\
            color: #000;}\
          .ed_couponBanner p.campaingMessage a {\
            font-size: inherit;\
            color: #dc1222 !important;}\
          .ed_couponBanner .imgSection {\
            position: relative;\
            color: #E7E0CA;}\
          .ed_couponBanner .imgSection .couponCode {\
            display: flex;\
            width: 28%;\
            height: 30%;\
            position: absolute;\
            left: 5%;\
            top: 53%;\
            background-color: #fff;\
            border: 2px dashed #dc1222;\
            border-radius: 11px;\
            align-items: center;\
            justify-content: center;\
            font-size: 20px;\
            font-weight: 500;\
            color: #000;\
            padding-top: 5px;}\
          .ed_couponBanner .imgSection #downloadCouponCode {\
            display: inline-flex;\
            width: 36%;\
            height: 20%;\
            position: absolute;\
            right: 12.5%;\
            top: 57.5%;\
            opacity: 0;\
            cursor: pointer;}\
            </style>";
          var html =
            '<div class="ed_couponBanner">\
            <div class="imgSection">\
              <img src="' +
            config.imgSrcM +
            '">\
            <span class="couponCode">' +
            config.coupon +
            '</span>\
          <a id="downloadCouponCode" download="myImage.jpg" onclick="downloadImage(this)"></a>\
            </div>\
            <p class="campaingMessage">' +
            config.message +
            ' <a href="' +
            config.campaingLink +
            '" alt="' +
            config.campaingText +
            '" target="_blank">' +
            config.campaingText +
            '</a></p>\
          <canvas id="canvas" style="display:none"></canvas>\
        </div>\
        ';
          jQuery(".tour-reservation-container").append(html);
          /*  if (
            !EightDigits.utils.getCookie("ed-" + config.analytics + "-shown-banner")
          ) {
            EightDigits.analytics.sendEvent(config.analytics, "shown-banner");
            EightDigits.utils.setCookie(
              "ed-" + config.analytics + "-shown-banner",
              "on"
            );
          } */
          jQuery("head").append(css);
          var canvas = document.getElementById("canvas");
          ctx = canvas.getContext("2d");
          var canvasMessage =
            "istegelsin uygulamasından 30 Nisan'a kadar yapılacak 200TL ve üstü";
          var canvasMessage2 =
            "alışverişler için kampanya kodunu kullanarak 30TL indirim sağlayabilirsiniz.";

          canvas.width = 440;
          canvas.height = 100;
          (cw = canvas.width), (ch = canvas.height);
          ctx.strokeStyle = "red";
          ctx.lineWidth = 5;
          ctx.strokeRect(0, 0, cw, ch);
          ctx.fillStyle = "white";
          ctx.fillRect(4, 4, cw - 8, ch - 8);
          ctx.fillStyle = "black";
          ctx.font = "24px sans-serif";
          ctx.fillText(config.coupon, cw / 2 - 50, ch / 2 - 25);
          ctx.font = "20px sans-serif";
          ctx.fillText(
            "istegelsin Kupon Kodunuz",
            cw / 3 - 50,
            canvas.height / 2 - 5
          );
          ctx.font = "12px sans-serif";
          ctx.fillText(canvasMessage, 20, ch / 2 + 15);
          ctx.fillText(canvasMessage2, 20, ch / 2 + 30);

          downloadImage = function (el) {
            /* EightDigits.analytics.sendEvent(config.analytics, "click-downloadCoupon"); */
            var dataURL = canvas.toDataURL("image/jpg");
            el.href = dataURL;
          };
        };
        var visitorId = EightDigits.utils.getCookie("eightdigits_visitor");
        var requestList = ["ad4fbf09-f40b-49f9-aa79-1da87eb369ea"];

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          visitorId: visitorId,
          customer: _trackingCode,
          campaignId: requestList[0],
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://promocode.8digits.com/api/campaign/search",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            var coupon = JSON.parse(result);
            console.log(coupon.data);
            config.coupon = coupon.data;
            displayCampaing();
          })
          .catch((error) => console.log("error", error));
      },
      control: function () {
        if (
          jQuery(".tour-reservation-pointDeparture h3")
            .text()
            .trim()
            .indexOf("Uçak") > -1
        ) {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (
            !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
          ) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie(
              "ed-" + config.analytics + "-notshown",
              "on"
            );
          }
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
  var _ed_paymentBannerWithCoupon_M = new EightDigits.sf();
  _ed_paymentBannerWithCoupon_M.paymentBannerWithCoupon_M();
})();

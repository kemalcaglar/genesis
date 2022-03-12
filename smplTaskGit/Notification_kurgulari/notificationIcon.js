(function () {
  // Setur_Notification
  if (EightDigits.sf.prototype.hasOwnProperty("Setur_Notification")) {
    return false
  }
  EightDigits.sf.prototype.Setur_Notification = function () {

    let config = {
      scenarioname: "Setur_Notification",
      analytics: "Firsat_Bildirimi_Desktop_23Ekim",
      image: " //cdn.8digits.com/f/u/so59anhs/581603b3-d9ce-4193-8292-deaee46782ef.png",
      obj1: [
        {
          title: "% 40'a Varan İndirimlerle Tam Tatil Havası",
          url: "https://www.setur.com.tr/yaz-firsatlari"
        },
        {
          title: "Dilediğin Ödeme Şeklini Seç",
          url: "https://www.setur.com.tr/diledigin-odeme-seklini-sec"
        },
        {
          title: "Türk Telekom'la %12'ye Varan İndirimleri Kaçırma",
          url: "https://www.setur.com.tr/turk-telekom-kampanyalari"
        },
        {
          title: "200 TL Chippin Hediye",
          url: "https://www.setur.com.tr/setur-chippin-kampanyasi"
        },
        {
          title: "100 WorldPuan Hediye",
          url: "https://www.setur.com.tr/setur-world-puan-kampanyasi"
        },
        {
          title: "Yapı Kredililere Uçak Bileti 25 TL İndirimi",
          url: "https://www.setur.com.tr/yapi-kredi-ucak-bileti-indirim-kampanyasi"
        }],
      obj2: [
        {
          title: "% 40'a Varan İndirimlerle Tam Tatil Havası",
          url: "https://www.setur.com.tr/yaz-firsatlari"
        },
        {
          title: "Dilediğin Ödeme Şeklini Seç",
          url: "https://www.setur.com.tr/diledigin-odeme-seklini-sec"
        },
        {
          title: "Türk Telekom'la %12'ye Varan İndirimleri Kaçırma",
          url: "https://www.setur.com.tr/turk-telekom-kampanyalari"
        },
        {
          title: "Hopililere Uçak Biletinde 50 TL İndirim",
          url: "https://www.setur.com.tr/hopi-ucak-kampanyasi"
        },
        {
          title: "100 WorldPuan Hediye",
          url: "https://www.setur.com.tr/setur-world-puan-kampanyasi"
        },
        {
          title: "Yapı Kredililere Şehir Otelleri % 10 İndirimli",
          url: "https://www.setur.com.tr/yapi-kredi-bankasi-sehir-otelleri-kampanya-detay"
        },
      ],
      controlgroup: 0
    };

    let main = {
      "factory": function () {
        return true;
      }
    };
    const scenarioClass = "." + config.scenarioname
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
        if (randomVal < 100 * randomControlRatio) {
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
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
            }
          }
        } else {
          if (window.innerWidth <= 420) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
          } else {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
          }
        }
      },
      displayHtml: function (itemCount, data) {
        let d_none = window.innerWidth <= 420 ? "smpl_dnone" : ""
        let html = `
          <div class="`+ config.scenarioname + ` smpl_mouseOver">
            <i class="fa fa-bell"></i>
            <span class="ed_count">` + itemCount + `</span>
            <p class="`+ d_none + `">Fırsatlar</p>
            <ul class="`+ config.scenarioname + `_list smpl_dnone smpl_mouseOver">
              <div id="listHeader">Fırsat Ürünleri</div>
              <div id="triangle"></div>`
        jQuery.each(data, function (i, line) {
          let liclass = (data.length == i + 1) ? " class='last'" : "";
          html += `
              <li` + liclass + `>
                <a class="listItem" href="` + line.url + `" data-order="` + i + 1 + `">
                  <div class="line-content">
                    <p class="line-title">` + line.title + `</p>
                  </div>
                </a>
              </li>`;
        });
        html += `
            </ul>
          </div>`;
        return html;
      },
      style: function () {
        let css = `<style>
.Setur_Notification {
  position: absolute;
  top: -8px;
  height: 50px;
  z-index: 99999;
  width: 40px;
  cursor: pointer;
  margin-left: -46px;
  background-position: 0px 0px;
  text-align: center;
  }

.Setur_Notification i {
  margin-top: 6px;
  font-size: 26px;
  color: #e5252d;
}

.Setur_Notification .ed_count {
  position: absolute;
  color: #fff;
  font-weight: bold;
  height: 18px;
  width: 18px;
  line-height: 10px;
  top: 2px;
  left: 18px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background-color: #616161;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.Setur_Notification p {
  font-size: 10px;
  margin-top: -10px;
  margin-left: auto;
  color: #6e6e6e;
  font-weight: normal;
}

.Setur_Notification .Setur_Notification_list {
  width: 282px;
  position: relative;
  z-index: 99999;
  -webkit-box-shadow: rgba(66, 66, 66, 0.3) 0px 0px 4px 1px;
          box-shadow: rgba(66, 66, 66, 0.3) 0px 0px 4px 1px;
  top: 13px;
  right: 149px;
  display: none;
  border-radius: 11px;
  padding: 8px 20px 10px;
  background: white;
  list-style: none;
  display: block;
}

.Setur_Notification .Setur_Notification_list #listHeader {
  color: #fff;
  background-color: #ee3342;
  width: 100%;
  height: 49px;
  text-align: center;
  line-height: 47px;
  font-weight: bold;
  background-color: white;
  color: #ee3342;
  font-size: 18px;
}

.Setur_Notification .Setur_Notification_list #triangle {
  position: absolute;
  top: -7px;
  left: 157px;
  border-style: solid;
  border-width: 8px 8px 8px;
  border-color: #ffffff #ffffff;
  display: block;
  z-index: 101;
  -webkit-box-shadow: rgba(66, 66, 66, 0.3) -3px -3px 6px -1px;
          box-shadow: rgba(66, 66, 66, 0.3) -3px -3px 6px -1px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.Setur_Notification .Setur_Notification_list li {
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  position: relative;
}

.Setur_Notification .Setur_Notification_list li .line-title {
  color: #000;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-top: 0;
  margin-left: 0;
}

.Setur_Notification .Setur_Notification_list li::before {
  content: "\\f107";
  position: absolute;
  left: 0;
  top: 50%;
  font-family: 'Font Awesome 5 Pro';
  -webkit-transform: rotateZ(-90deg) translate(100%, 0);
  transform: rotateZ(-90deg) translate(100%, 0);
  font-size: 16px;
  color: #ed3942;
  display: block;
}

.Setur_Notification .Setur_Notification_list li:hover .line-title {
  color: #ed3942;
}

.Setur_Notification .Setur_Notification_list .line-desc {
  font-size: 13px;
  padding-left: 0;
  text-align: center;
  margin-top: -18px;
  color: #000;
  font-weight: bold;
  width: 320px;
}

.Setur_Notification .smpl_dnone {
  display: none !important;
}

@media screen and (max-width: 420px) {
  .Setur_Notification {
    top: -17px;
    margin-left: 27px;
    display: block;
  }
  .Setur_Notification.login {
    top: -11px;
  }
}
</style>`;
        jQuery("head").append(css);
      },
      start: function () {
        let randomControlVal = Math.floor((Math.random() * 10000) + 1);
        let data = []
        let eventName = ""
        if (randomControlVal < 5000) {
          eventName = "Shown_"
          data = [...config.obj1]
        } else {
          data = [...config.obj2]
          eventName = "shown-control"
        }
        let itemCount = data.length;
        let appendEl = "";
        if (window.innerWidth <= 420) {
          if (jQuery(".fas.fa-user-check.js-userBtn").length === 0) {
            appendEl = ".top-user-area .login-button"
            /* not login */
          }
          else {
            appendEl = ".top-user-area"
          }
        } else {
          if (!jQuery(".top-user-area .login-button").length > 0) {
            appendEl = ".top-user-area-list"
          }
          else {
            appendEl = ".top-user-area .login-button"
          }
        }
        jQuery(appendEl).append(main.factory.prototype.displayHtml(itemCount, data));
        main.factory.prototype.style();
        if (appendEl === ".top-user-area") {
          jQuery(scenarioClass).addClass("login")
        }
        main.factory.prototype.fireEvent(eventName, false)
        const showList = function () {
          jQuery(scenarioClass + "_list").removeClass("smpl_dnone")
          jQuery(scenarioClass + "_list").fadeIn("fast");
        }
        const hideList = function () {
          jQuery(scenarioClass + "_list").fadeOut("fast")
          setTimeout(function () {
            jQuery(scenarioClass + "_list").addClass("smpl_dnone")
          }, 400);
        }
        const findUserIndex = function (item) {
          let foundUserInfoIndex = -1;
          dataLayer.map((product, i) => {
            if (product.UserID !== undefined) {
              foundUserInfoIndex = i;
            }
          })

          if (foundUserInfoIndex !== -1) {
            if (dataLayer[foundUserInfoIndex].UserID !== "") {
              let userId = dataLayer[foundUserInfoIndex].UserID;
              let KVKK = dataLayer[foundUserInfoIndex].KVK;
              let eventName = item === "listItem" ? KVKK + "-" + userId + "-" + clickedText + "-clicked" : KVKK + "-" + userId + "-viewed"
              main.factory.prototype.fireEvent(eventName, false)
            }
          }
        }
        jQuery(scenarioClass + "_list li").click(function () {
          let clickedText = jQuery(this).find(".line-title").text()
          main.factory.prototype.fireEvent("Click_" + clickedText)
          findUserIndex("listItem")
        })
        jQuery(window).scroll(function () {
          if (jQuery(".fixed-header").length > 0) {
            jQuery(scenarioClass).css({
              top: jQuery(".header__top").height() + "px",
              height: (jQuery(".header__top").height() - 2) + "px",
            });
            jQuery(scenarioClass + " img:eq(0)").css({
              "margin-top": "2px"
            });
            jQuery(".ed_count").css({
              top: "1px"
            });
          } else {
            jQuery(scenarioClass).css({
              top: jQuery(".header__top").height() + "px",
              height: jQuery(".header__top").height() + "px",
            });
            jQuery(scenarioClass + " img:eq(0)").css({
              "margin-top": "8px"
            });
            jQuery(".ed_count").css({
              top: "5px"
            });
          }
        });

        jQuery(".smpl_mouseOver").mouseenter(function () {
          console.log(jQuery(this));
          if (jQuery(this).hasClass(config.scenarioname + "_list")) {
            EightDigits.utils.setCookie("ed_notificationControl_Session", EightDigits.utils.getCookie("eightdigits_session"), 24 * 60 * 7);
            jQuery(".ed_count").addClass("smpl_dnone")
          }
          else {
            findUserIndex("mainItem")
          }
          showList()
        }).mouseleave(function () {
          hideList()
        });
      },
      init: function () {
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
  let _ed_Setur_Notification = new EightDigits.sf();
  _ed_Setur_Notification.Setur_Notification();
})();
let scenarioId = "1111";
let variationId = "1234";
const smplObj = {
  scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
  scenarioName: "scenario-" + scenarioId + "-" + variationId,
  setCookie: (cname, value, min) => {
    value = window.btoa(unescape(encodeURIComponent(value)));
    const d = new Date();
    d.setTime(d.getTime() + (min * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + value + ";" + expires + ";path=/";
  },
  getCookie: (cname) => {
    function checkIsBase64(str) {
      if (str === "" || str.trim() === "") {
        return false;
      }
      try {
        return btoa(atob(str)) === str;
      } catch (err) {
        return false;
      }
    }

    const getValue = (cname) => {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };
    let value = getValue(cname);
    if (!checkIsBase64(value)) {
      return decodeURIComponent(value);
    }

    return decodeURIComponent(escape(window.atob(value)));
  },
  debounce: function (func, timeout) {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), timeout);
    };
  },
  fireEvent: function (eventLabel, minutes) {
    const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
    const eventName = eventLabel + "(" + device + ")";
    if (minutes === 0) {
      if (options.sendEvent) {
        if (eventName.indexOf("close") !== -1) {
          setLevel(LEVEL_EXIT, eventName);
        } else {
          setLevel(LEVEL_JOIN, eventName);
        }
      } else {
        console.log("event: ", eventName);
      }
    } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
      if (options.sendEvent) {
        if (eventName.indexOf("close") !== -1) {
          setLevel(LEVEL_EXIT, eventName);
        } else {
          setLevel(LEVEL_JOIN, eventName);
        }
        smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
      } else {
        console.log("event: ", eventName);
        smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
      }
    }
  }
};
let img = 'https://cdn.8digits.com/log/r/b0e49abb-22f3-4188-a0ad-36fdf8ed16b6.jpeg';
if (jQuery("#header-main .info").text().trim() !== "GİRİŞ YAP") {
  let dataUser;
  if (dataLayer[1].event === "userInfo" ? true : false) {
    dataUser = dataLayer[1].userInfo
  } else if (dataLayer[2].event === "userInfo" ? true : false) {
    dataUser = dataLayer[2].userInfo
  }
  let control = function () {
    if (dataUser.user_email_optin === true && dataUser.user_sms_optin === true) {
      return false;
    } else {
      return true;
    }
  }
  const cookies = {
    cookieOptOut: `smpl_scenario_${scenarioId}_popup`,
    cookieVariationName: `smpl_scenario_${scenarioId}_green`
  }
  const start = function () {
    if (control() === true) {
      if (!smplObj.getCookie(cookies.cookieOptOut)) {
        smplObj.setCookie(cookies.cookieOptOut, "1");
      } else if (smplObj.getCookie(cookies.cookieOptOut) == "1") {
        smplObj.setCookie(cookies.cookieOptOut, "2");
      } else if (smplObj.getCookie(cookies.cookieOptOut) == "2" && window.location.href !== "https://www.avansas.com/my-account/update-profile") {
        let css = `
        <style>
        .${smplObj.scenarioName} {
          position: fixed;
          z-index: 999999;
          top: 0px;
          width: 100%;
          height: 100vh;
        }
          .smpl-overlay {
            position: absolute;
            z-index: 999998;
            background-color: rgba(0, 0, 0, 0.6);
            top: 0px;
            width: 100%;
            height: 100vh;
          }
          .smpl-content {
            position: absolute;
            z-index: 99999999;
          }
            .smpl-close {
              cursor: pointer;
              width: 30px;
              height: 50px;
              right: 10px;
              top: 4px;
              position: absolute;
              z-index: 9999;
              font-size: 35px;
              color: #fff;
              text-align: center;
              font-weight: bold;
            }
        </style>`;
        jQuery('head').append(css);
        let imageWidth = 400;
        let href =
          'https://www.avansas.com/my-account/update-profile';
        let html = `
    <div class="${smplObj.scenarioName}">
    <div class="smpl-overlay"></div>
    <div class="smpl-content" style="top:` +
          (window.innerHeight - 400) / 2 +
          'px;left:' +
          (window.innerWidth - 400) / 2 +
          `px;">
    <div class="smpl-close">&times;</div>
    <a href="` + href + `">
    <img class="smpl-popup-img" style="cursor:pointer;width:` +
          imageWidth +
          `px;" src="` +
          img +
          `">
      </div>
      </a>
    </div>
    `;
        jQuery('body').prepend(html);
        smplObj.fireEvent("shown-popup")
        jQuery('.smpl-popup-img').click(function () {
          smplObj.fireEvent("click-popup")
          smplObj.setCookie(cookieVariationName, "1");
        })
        jQuery('.smpl-close').click(function () {
          smplObj.fireEvent("click-close")
          jQuery('.smpl-popup-main').remove();
        });
        jQuery('.smpl-overlay').click(function () {
          smplObj.fireEvent("click-overlay")
          jQuery('.smpl-popup-main').remove();
        });
        smplObj.setCookie(cookies.cookieOptOut, "3");
      } else if (smplObj.getCookie(cookies.cookieOptOut) == "3" && window.location.pathname == "/my-account/update-profile") {
        jQuery(".check-area .form-label span").css({ "text-decoration": "underline orange" })
        setTimeout(function () {
          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".check-area").offset().top - 150,
            },
            2000
          );
        }, 100)
        smplObj.setCookie(cookies.cookieOptOut, "4");
        jQuery(".check-area .form-label").click(function () {
          smplObj.fireEvent("click-label")
        })
        let sms;
        let mail;
        let count = 0;
        jQuery(".check-area label").each(function () {
          if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
            if (jQuery(this).find("div").hasClass("checked")) {
              sms = 1;
            }
          }
          if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
            if (jQuery(this).find("div").hasClass("checked")) {
              mail = 1;
            }
          }
        })
        jQuery(".four-button.inline").each(function () {
          if (jQuery(this).text().trim() == "Kaydet") {
            jQuery(this).click(function () {
              jQuery(".check-area label").each(function () {
                if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
                  if (jQuery(this).find("div").hasClass("checked")) {
                    count++
                    if (sms !== 1 && smplObj.getCookie(cookieVariationName) == "1") {
                      smplObj.fireEvent("click-sms")
                    }
                  }
                }
                if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
                  if (jQuery(this).find("div").hasClass("checked")) {
                    count++
                    if (mail !== 1 && smplObj.getCookie(cookieVariationName) == "1") {
                      smplObj.fireEvent("click-mail")
                    }
                  }
                }
                if (count == 2 && smplObj.getCookie(cookieVariationName) == "1") {
                  smplObj.fireEvent("click-saveFullCheckBox");
                }
              })
            })
          }
        })
      }
    }
  }
  start();
}

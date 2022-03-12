(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Opt_Out_Popup")) {
      return false
  }
  EightDigits.sf.prototype.Opt_Out_Popup = function () {
      var config = {
          scenarioname: "Opt_Out_Popup",
          analytics: "Opt_Out_Popup",
          controlgroup: 0
      };
      var main = {
          "factory": function () {
              return true;
          }
      };
      main.factory.prototype = {
          random: function () {
              var randomVal = 0;
              var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
              if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                  randomVal = Math.floor((Math.random() * 10000) + 1);
                  EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
              } else {
                  randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
              }
              if (randomVal <= 100 * randomControlRatio) {
                  return true;
              } else {
                  return false;
              }
          },
          start: function () {
              if (window.location.pathname.indexOf("/uk/") == -1) {
                  var smpl = {
                      setCookie: function (cname, cvalue, min) {
                          var d = new Date();
                          d.setTime(d.getTime() + min * 60 * 1000);
                          var expires = 'expires=' + d.toUTCString();
                          document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
                      },
                      getCookie: function (name) {
                          var nameEQ = name + '=';
                          var ca = document.cookie.split(';');
                          for (var i = 0; i < ca.length; i++) {
                              var c = ca[i];
                              while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                          }
                          return null;
                      },
                  }
                  if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 3333) {
                      var img =
                          'https://cdn.8digits.com/log/r/b0e49abb-22f3-4188-a0ad-36fdf8ed16b6.jpeg';
                  } else if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 6666 && parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) > 3333) {
                      var img =
                          'https://cdn.8digits.com/log/r/a33ca056-f31f-4802-8294-33cf594c2d2a.jpeg';
                  } else {
                      var img =
                          'https://cdn.8digits.com/log/r/9b6de499-d2c5-4da9-a27c-2a6d3b16051f.jpeg';
                  }
                  if (jQuery("#header-main .info").text().trim() !== "GİRİŞ YAP") {
                      if (dataLayer[1].event === "userInfo" ? true : false) {
                          var dataUser = dataLayer[1].userInfo
                      } else if (dataLayer[2].event === "userInfo" ? true : false) {
                          var dataUser = dataLayer[2].userInfo
                      }
                      if (dataUser.user_email_optin === true && dataUser.user_sms_optin === false || dataUser.user_email_optin === false && dataUser.user_sms_optin === true || dataUser.user_email_optin === false && dataUser.user_sms_optin === false) {
                          if (!smpl.getCookie("optOut")) {
                              smpl.setCookie("optOut", "1");
                          } else if (smpl.getCookie("optOut") == "1") {
                              smpl.setCookie("optOut", "2");
                          } else if (smpl.getCookie("optOut") == "2" && window.location.href !== "https://www.avansas.com/my-account/update-profile") {
                              var css = `
                            <style>
                            .smpl-popup-main {
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
                              var imageWidth = 400;
                              var href =
                                  'https://www.avansas.com/my-account/update-profile';
                              var html = `
                        <div class="smpl-popup-main">
                        <div class="smpl-overlay"></div>
                        <div class="smpl-content" style="top:` +
                                  (window.innerHeight - 400) / 2 +
                                  'px;left:' +
                                  (window.innerWidth - 400) / 2 +
                                  `px;">
                        <div class="smpl-close">×</div>
                        <a href="` + href + `"><img class="smpl-popup-img" style="cursor:pointer;width:` +
                                  imageWidth +
                                  `px;" src="` +
                                  img +
                                  `">
                          </div>
                          </a>
                        </div>
                        `;
                              jQuery('body').prepend(html);
                              if (jQuery(".smpl-popup-img").attr("src") == "https://cdn.8digits.com/log/r/b0e49abb-22f3-4188-a0ad-36fdf8ed16b6.jpeg") {
                                  EightDigits.analytics.sendEvent(config.analytics, "shown-greenPopup");
                                  jQuery('.smpl-popup-img').click(function () {
                                      EightDigits.analytics.sendEvent(config.analytics, "click-greenPopup");
                                      smpl.setCookie("optOutGreen", "1");
                                  })
                              } else if (jQuery(".smpl-popup-img").attr("src") == "https://cdn.8digits.com/log/r/a33ca056-f31f-4802-8294-33cf594c2d2a.jpeg") {
                                  EightDigits.analytics.sendEvent(config.analytics, "shown-bluePopup");
                                  jQuery('.smpl-popup-img').click(function () {
                                      EightDigits.analytics.sendEvent(config.analytics, "click-bluePopup");
                                      smpl.setCookie("optOutBlue", "1");
                                  })
                              } else {
                                  EightDigits.analytics.sendEvent(config.analytics, "shown-orangePopup");
                                  jQuery('.smpl-popup-img').click(function () {
                                      EightDigits.analytics.sendEvent(config.analytics, "click-orangePopup");
                                      smpl.setCookie("optOutOrange", "1");
                                  })
                              }
                              jQuery('.smpl-close').click(function () {
                                  EightDigits.analytics.sendEvent(config.analytics, "click-close")
                                  jQuery('.smpl-popup-main').remove();
                              });
                              jQuery('.smpl-overlay').click(function () {
                                  EightDigits.analytics.sendEvent(config.analytics, "click-overlay");
                                  jQuery('.smpl-popup-main').remove();
                              });
                              smpl.setCookie("optOut", "3");
                          } else if (smpl.getCookie("optOut") == "3" && window.location.pathname == "/my-account/update-profile") {
                              jQuery(".check-area .form-label span").css({"text-decoration": "underline orange"})
                              setTimeout(function () {
                                  jQuery("html, body").animate(
                                      {
                                          scrollTop: jQuery(".check-area").offset().top - 150,
                                      },
                                      2000
                                  );
                              }, 100)
                              smpl.setCookie("optOut", "4");
                              jQuery(".check-area .form-label").click(function () {
                                  EightDigits.analytics.sendEvent(config.analytics, "click-label");
                              })
                              var sms = 0;
                              var mail = 0;
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
                              var count = 0;
                              jQuery(".four-button.inline").each(function () {
                                  if (jQuery(this).text().trim() == "Kaydet") {
                                      jQuery(this).click(function () {
                                          jQuery(".check-area label").each(function () {
                                              if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
                                                  if (jQuery(this).find("div").hasClass("checked")) {
                                                      count++
                                                      if (sms !== 1 && smpl.getCookie("optOutBlue") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-smsBlue");
                                                      } else if (sms !== 1 && smpl.getCookie("optOutGreen") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-smsGreen");
                                                      } else if (sms !== 1 && smpl.getCookie("optOutOrange") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-smsOrange");
                                                      }
                                                  }
                                              }
                                              if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
                                                  if (jQuery(this).find("div").hasClass("checked")) {
                                                      count++
                                                      if (mail !== 1 && smpl.getCookie("optOutBlue") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-mailBlue");
                                                      } else if (mail !== 1 && smpl.getCookie("optOutGreen") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-mailGreen");
                                                      } else if (mail !== 1 && smpl.getCookie("optOutOrange") == "1") {
                                                          EightDigits.analytics.sendEvent(config.analytics, "click-mailOrange");
                                                      }
                                                  }
                                              }
                                              if (count == 2 && smpl.getCookie("optOutOrange") == "1") {
                                                  EightDigits.analytics.sendEvent(config.analytics, "click-saveFullCheckBoxOrange");
                                              } else if (count == 2 && smpl.getCookie("optOutBlue") == "1") {
                                                  EightDigits.analytics.sendEvent(config.analytics, "click-saveFullCheckBoxBlue");
                                              } else if (count == 2 && smpl.getCookie("optOutGreen") == "1") {
                                                  EightDigits.analytics.sendEvent(config.analytics, "click-saveFullCheckBoxGreen");
                                              }
                                          })
                                      })
                                  }
                              })
                          }
                      }
                  }
              }
          },
          control: function () {
          },
          init: function () {
              if (main.factory.prototype.control() == false) {
                  return false
              }
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                  }
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
  var _ed_Opt_Out_Popup = new EightDigits.sf();
  _ed_Opt_Out_Popup.Opt_Out_Popup();
})();

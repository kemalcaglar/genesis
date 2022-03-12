(function () {
    // Setur_Notification
    if (EightDigits.sf.prototype.hasOwnProperty("Setur_Notification")) {
      return false
  }
    EightDigits.sf.prototype.Setur_Notification = function () {
  
      var config = {
        scenarioname: "Setur_Notification",
        analytics: "Firsat_Bildirimi_Desktop_23Ekim",
        "image": " //cdn.8digits.com/f/u/so59anhs/581603b3-d9ce-4193-8292-deaee46782ef.png",
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
          if (randomVal < 100 * randomControlRatio) {
            return true;
          } else {
            return false;
          }
        },
        start: function () {
          var randomControlVal = Math.floor((Math.random() * 10000) + 1);
          var randomlySelectedEventName ='';
          if (randomControlVal < 5000) {
            randomlySelectedEventName = 'Hover';
            EightDigits.analytics.sendEvent(config.analytics, "Shown_");
            var data = [ {
                                             id: '',
                          title: '%40’a Varan İndirimlerle Yaz Fırsatları',
                          url: 'https://www.setur.com.tr/yaz-firsatlari',
                         },               
                         {
                          id: '',
                          title: 'Dilediğin Ödeme Şeklini Seç',
                          url: 'https://www.setur.com.tr/diledigin-odeme-seklini-sec',
                         },               
                         {
                        id: '',
                          title: 'Hopi’lilere Uçak Biletinde 50 TL İndirim',
                          url: 'https://www.setur.com.tr/hopi-ucak-kampanyasi',
                      },
                      {
                      id: '',
                          title: '100 WorldPuan Hediye',
                          url: 'https://www.setur.com.tr/setur-world-puan-kampanyasi'
                         }, 
                          {
                        id: '',
                        title: 'Türk Telekom İle Mevcut İndirimlere Ek %5 İndirim',
                        url: 'https://www.setur.com.tr/turk-telekom-tatil-otelleri-kampanyasi',
                        },
                       {
                        id: '',
                        title: 'Yapı Kredililere Şehir Otelleri %10 İndirimli',
                        url: 'https://www.setur.com.tr/yapi-kredi-bankasi-sehir-otelleri-kampanya-detay',
                      },
                    ];
                  } else {
                    randomlySelectedEventName = 'Hover';
                    var data = [ {
                      id: '',
                        title: '%40’a Varan İndirimlerle Yaz Fırsatları',
                        url: 'https://www.setur.com.tr/yaz-firsatlari',
                       },               
                       {
                        id: '',
                        title: 'Dilediğin Ödeme Şeklini Seç',
                        url: 'https://www.setur.com.tr/diledigin-odeme-seklini-sec',
                      }, 
                        {
                      id: '',
                          title: '200 TL Chippin Hediye',
                          url: 'https://www.setur.com.tr/setur-chippin-kampanyasi',
                       },               
                       {
                      id: '',
                          title: '100 WorldPuan Hediye',
                          url: 'https://www.setur.com.tr/setur-world-puan-kampanyasi',
                       },               
                       {
                      id: '',
                      title: 'Türk Telekom Prime İle Mevcut İndirimlere Ek %10 İndirim',
                      url: 'https://www.setur.com.tr/turk-telekom-prime-tatil-otelleri-kampanyasi?utm_source=turktelekomprime&utm_medium=referral&utm_campaign=turktelekom-prime-kampanyasi',
                    },
                    {
                    id: '',
                        title: 'Yapı Kredililere Uçak Bileti 25 TL İndirimli',
                        url: 'https://www.setur.com.tr/yapi-kredi-ucak-bileti-indirim-kampanyasi',
                        },
          ];
            EightDigits.analytics.sendEvent(config.analytics, "shown-control");
            
          }
  
  
          var groups = {
            "group1": {
              color: "white",
  
              "spanBackground": "transparant",
              "analytics": "analytics"
            }
          }
          var dl;
          if (EightDigits.utils.getCookie('ed_notificationControl_Session') === null) {
            dl = data.length;
          } else {
            if (EightDigits.utils.getCookie('eightdigits_session') !== EightDigits.utils.getCookie('ed_notificationControl_Session')) {
              dl = data.length;
            } else {
              dl = 0;
            }
          }
  
          var html = '\
                        <div class="menu-items-level-1" id="icon-notification-8d" style="/*position: absolute;top:-7px;height:38px;z-index: 99999;width:40px;cursor:pointer;margin-left:-190px;*/ position: absolute;top: -8px;height: 38px;z-index: 99999;width: 40px;cursor: pointer;margin-left: -40px;background-position: 0px 0px;">\
                        <i class="fa fa-bell" style="margin-top:6px;font-size: 26px;color: #e5252d;" ;=""></i>\
                            <span class="_ed_count" style="position: absolute;color: #fff;font-weight: bold;height: 18px;width: 18px;line-height: 10px;top: 2px;left: 18px;border: 1px solid #ffffff;border-radius: 50%;background-color: #616161;padding-left: 5px;padding-top: 3px;">' + dl + '</span>\
                            <p style="font-size: 10px;margin-top: -10px;margin-left: -5px;color: #6e6e6e !important;font-weight: normal;">Fırsatlar</p>\
                        </div>\
                    ';
          jQuery('.top-user-area .login-button').append(html);
          if(!jQuery('.top-user-area .login-button').length>0){
            jQuery('.top-user-area-list').append(html);
            jQuery('#icon-notification-8d').css({"left":"-162px","top":"-5px","margin-left":"0px"})
        }
          setTimeout(function () {
            if (window.innerWidth < 1040) {
              jQuery('#icon-notification-8d').hide();
            }
            jQuery('#icon-notification-8d').append('<ul id="notification-container-8d" style="width: 282px; position: relative; z-index: 99999; box-shadow: rgba(66, 66, 66, 0.3) 0px 0px 4px 1px; top: 13px; right: 149px; display: none; border-radius: 11px; padding: 8px 20px 10px; background: white; list-style: none;"></ul>');
            jQuery('#notification-container-8d').append('<div id="topContain" style="color:#fff;background-color:#ee3342;width: 100%;height: 49px;text-align: center;line-height: 47px;font-size: 15px;font-weight: bold;background-color: white;color: #ee3342;font-size: 18px;">Fırsat Ürünleri</div>');
            jQuery('#notification-container-8d').append('<div style="position: absolute;top: -7px;left: 157px;border-style: solid;border-width: 8px 8px 8px;border-color: #ffffff #ffffff;display: block;z-index: 101;box-shadow: rgba(66, 66, 66, 0.3) -3px -3px 6px -1px;transform: rotate(45deg);"></div>');
  
  
            var dc = data.length;
  
            jQuery.each(data, function (i, line) {
              var liclass = (dc == i + 1) ? ' class="last"' : '';
              var _this_el = '<li' + liclass + '><a class="notification-container-8d-link ' + line.id + '" href="' + line.url + '" data-order="' + parseInt(i + 1) + '"><div class="line-content"><p class="line-title">' + line.title + '</p></div></a></li>';
              jQuery('#notification-container-8d').append(_this_el);
            });
  
            jQuery("#notification-container-8d li").click(function () {
              var clickedText = jQuery(this).find(".line-title").text()
              EightDigits.analytics.sendEvent(config.analytics + " - " + clickedText, "Click");
              var foundUserInfoIndex=-1;
              dataLayer.map((product,i)=>{
                if(product.UserID!==undefined){
                    foundUserInfoIndex=i;
                }
              })
             
            
              if(foundUserInfoIndex!==-1){
                if(dataLayer[foundUserInfoIndex].UserID !== ""){
                    var userId = dataLayer[foundUserInfoIndex].UserID;
                    var KVKK = dataLayer[foundUserInfoIndex].KVK;
                    EightDigits.analytics.sendEvent("FirsatCani", KVKK + "-" + userId + "-" + clickedText + "- clicked");
                }
              }
            })
            jQuery(window).scroll(function () {
              if (jQuery('.fixed-header').length > 0) {
                jQuery('#icon-notification-8d').css({
                  top: jQuery('.header__top').height() + "px",
                  height: (jQuery('.header__top').height() - 2) + "px",
                });
                jQuery('#icon-notification-8d img:eq(0)').css({
                  "margin-top": "2px"
                });
                jQuery('._ed_count').css({
                  top: "1px"
                });
              } else {
                jQuery('#icon-notification-8d').css({
                  top: jQuery('.header__top').height() + "px",
                  height: jQuery('.header__top').height() + "px",
                });
                jQuery('#icon-notification-8d img:eq(0)').css({
                  "margin-top": "8px"
                });
                jQuery('._ed_count').css({
                  top: "5px"
                });
              }
            });
  
  
            jQuery('#notification-container-8d li').css({
              backgroundColor: 'white',
              // height: '40px',
              // paddingTop: "1px",
              padding: "10px 20px",
              textAlign:"center",
              borderTop: "1px solid rgb(217, 217, 217)",
              position: "relative"
            });
  
  
            jQuery('#notification-container-8d li').hover(function () {
              jQuery(this).find('.line-title').css({
                color: '#ed3942'
              });
            }, function () {
              jQuery(this).find('.line-title').css({
                color: 'black'
              });
            });
  
  
            //jQuery('#notification-container-8d li.last').css({
            //  borderBottom: "1px solid #ee3342 "
            //});
            //jQuery('#notification-container-8d a').css({
            //  padding: '0',
            //  color: '#707070',
            //  borderRight: 'none'
            // });
            jQuery('#notification-container-8d .line-content').css({
              // fontSize: '13px',
              // paddingLeft: '0px',
              // width: '320px',
              // textAlign: 'left',
              // left: '0',
              // right: '0',
              // margin: 'auto',
              // position: 'relative',
              // top: '-13px'
            });
            jQuery('#notification-container-8d .line-title').css({
              fontSize: '12px',
              lineHeight:'14px',
              textAlign: 'center',
              color: '#000',
              // minHeight: '48px'
            });
  
            jQuery('#notification-container-8d .line-desc').css({
              fontSize: '13px',
              paddingLeft: '0px',
              textAlign: 'center',
              marginTop: '-18px',
              color: "#000",
              fontWeight: "bold",
              "width": "320px"
            });
  
            jQuery('body').append('<style>#notification-container-8d li::before {content: "'+String.fromCodePoint(92)+'f107";position: absolute;left: 0;top: 50%;font-family: "Font Awesome 5 Pro";transform: rotateZ(-90deg) translate(100%, 0);font-size: 16px;color: #ed3942;display: block;}</style>');
  
            // jQuery('.line-title:eq(0)').attr('style','font-size: 12px;line-height: 18px;padding-top: 15px;text-align: left;color: rgb(0, 0, 0);min-height: 48px;'); // silinmesi gereken
  
            jQuery('#icon-notification-8d').mouseenter(function () {
                var foundUserInfoIndex=-1;
              dataLayer.map((product,i)=>{
                if(product.UserID!==undefined){
                    foundUserInfoIndex=i;
                }
              })
              if(foundUserInfoIndex!==-1){
                if(dataLayer[foundUserInfoIndex].UserID !== ""){
                    var userId = dataLayer[foundUserInfoIndex].UserID;
                    var KVKK = dataLayer[foundUserInfoIndex].KVK;
                    EightDigits.analytics.sendEvent("FirsatCani", KVKK + "-" + userId + "- viewed");
                }
  
              }
               
              clearTimeout(jQuery('#icon-notification-8d').data('timeoutId'));
              jQuery('#notification-container-8d').fadeIn('fast');
              var cookieVal = [];
              jQuery.each(data, function (i, line) {
                cookieVal.push(line.id);
              });
              EightDigits.utils.setCookie('ed-notification-seen', JSON.stringify(cookieVal));
              setTimeout(function () {
                jQuery('#icon-notification-8d').css({
                  backgroundPosition: '0 0px'
                });
              }, 2000);
            }).mouseleave(function () {
              var timeoutId = setTimeout(function () {
                jQuery('#notification-container-8d').fadeOut('fast');
              }, 200);
              jQuery('#icon-notification-8d').data('timeoutId', timeoutId);
            });
  
  
            jQuery('#notification-container-8d').mouseenter(function () {
              if (jQuery('#icon-notification-8d').data('timeoutId') == -1) return;
              clearTimeout(jQuery('#icon-notification-8d').data('timeoutId'));
              jQuery('#notification-container-8d').fadeIn('fast');
              EightDigits.utils.setCookie('ed_notificationControl_Session', EightDigits.utils.getCookie('eightdigits_session'), 24 * 60 * 7);
              jQuery("._ed_count").text("0");
              EightDigits.analytics.sendEvent(config.analytics, randomlySelectedEventName);
            }).mouseleave(function () {
              var timeoutId = setTimeout(function () {
                jQuery('#icon-notification-8d').data('timeoutId', -1);
                jQuery('#notification-container-8d').fadeOut('fast');
              }, 200);
              jQuery('#icon-notification-8d').data('timeoutId', timeoutId);
            });
          }, 1000);
        },
        init: function () {
          var _exec = main.factory.prototype.random();
          if (!_exec) {
            if (EightDigits.utils.getCookie('ed-notshown' + config.scenarioname) === null) {
              EightDigits.analytics.sendEvent(config.analytics, "NotShown");
              EightDigits.utils.setCookie('ed-notshown' + config.scenarioname, "on");
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
    var _ed_Setur_Notification = new EightDigits.sf();
    _ed_Setur_Notification.Setur_Notification();
  })();
(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Anasayfa_Sizi_Dinliyoruz_Kulakcik1")) {
    return false;
  }
  EightDigits.sf.prototype.Anasayfa_Sizi_Dinliyoruz_Kulakcik1 = function () {
    var config = {
      scenarioname: "Anasayfa_Sizi_Dinliyoruz_Kulakcik1",
      analytics: "Anasayfa_Sizi_Dinliyoruz_Kulakcik1",
      controlgroup: 0,
      newImage: "https://cdn.8digits.com/log/r/a5d4c64d-2281-4c39-8192-4c31a9456063.png",
      oldImage: "https://cdn.8digits.com/log/r/c30f71d6-c1b3-44ef-8f90-260c7f4daff9.jpeg"
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
      start: function (_exec) {
        var urls = ["utm_source=googleads&utm_medium=search&utm_campaign=brand", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=atasehir", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=doktorlar", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=gebze", "utm_source=googleads&utm_medium=search&utm_campaign=brandgeneric&utm_content=randevu", "utm_source=programmatic&utm_medium=display&utm_campaign=check_up", "utm_source=optdcom&utm_medium=programatik&utm_campaign=display", "utm_source=optdcom&utm_medium=programatik&utm_campaign=display", "utm_source=smpl&utm_medium=sizidinliyoruz&utm_campaign=sizidinliyoruz", "utm_source=programmatic&utm_medium=display&utm_campaign=edoktor", "utm_source=programmatic&utm_medium=display&utm_campaign=tibbigorus", "utm_source=programmatic&utm_medium=display&utm_campaign=guvenlinefes", "utm_medium=crmemail", "utm_source=googleads&utm_medium=gdn&utm_campaign=remarketing&utm_content=checkup"];
        if (window.location.pathname === "/" || window.location.pathname == "/doktor/prof-dr-cagatay-oktenli" || window.location.pathname == "/blog/check-up-neden-gereklidir" && urls.indexOf(window.location.href.split("?")[1]) < 0) {
          var style = "\
  <style>\
  .smpl-sizi-dinliyoruz-kulakcik{\
  position:fixed;\
  bottom:10px;\
  z-index:55555;\
  width:186px;\
  cursor:pointer;\
  right:-400px;\
  display:none;\
  }\
  .smpl-sizi-dinliyoruz-kulakcik img{\
  width:100%;\
  }\
  .smpl-sizi-dinliyoruz-kulakcik-close{\
      color:white;\
      font-size:25px;\
      position:absolute;\
      top:-3px;\
      right:7px;\
      width:50px;\
      height:50px;\
      display:flex;\
      justify-content:flex-end;\
      align-items:flex-start;\
  }\
  </style>";
          jQuery('head').append(style);
          const imgSrc = config.newImage;
          const eventGroup = "newImage";
          var html = `
                <div class='smpl-sizi-dinliyoruz-kulakcik'>
                  <img src="${imgSrc}">
                </div>`;
          if (window.innerWidth > 760) {
            jQuery('body').append(html);
            jQuery('.smpl-sizi-dinliyoruz-kulakcik').css("right", "10px");
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown' + eventGroup)) {
              EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik_' + eventGroup);
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown' + eventGroup, 'on');
            }
            jQuery(window).scroll(function () {
              var scroll = jQuery(document).height() / 15;
              if (jQuery(this).scrollTop() > scroll) {
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').show();
              }
              else {
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').hide();
              }
            });
            if (window.location.pathname == "/doktor/prof-dr-cagatay-oktenli") {
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Doktor_' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/check-up/bilgi-randevu";
              });
            }else if(window.location.pathname == "/blog/check-up-neden-gereklidir"){
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Blog_' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/check-up/bilgi-randevu";
              });
            } else {
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/sizi-dinliyoruz";
              });
            }
          }
          else {
            jQuery('body').append(html);
            jQuery('#_sorun_icon').remove();
            jQuery('.smpl-sizi-dinliyoruz-kulakcik').css({ "width": "172px", "bottom": "0px", "transform": "unset", "left": "unset", "right": "0px" });
            jQuery(window).scroll(function () {
              var scroll = jQuery(document).height() / 15;
              if (jQuery(this).scrollTop() > scroll) {
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').show();
              }
              else {
                jQuery('.smpl-sizi-dinliyoruz-kulakcik').hide();
              }
            });
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown' + eventGroup)) {
              EightDigits.analytics.sendEvent(config.analytics, 'Shown_Kulakcik_Mobil_' + eventGroup);
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown' + eventGroup, 'on');
            }
            if (window.location.pathname == "/doktor/prof-dr-cagatay-oktenli") {
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Doktor_Mobil_' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/check-up/bilgi-randevu";
              });
            }else if(window.location.pathname == "/blog/check-up-neden-gereklidir"){
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Blog_Mobil' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/check-up/bilgi-randevu";
              });
            } else {
              jQuery('.smpl-sizi-dinliyoruz-kulakcik').click(function (e) {
                EightDigits.analytics.sendEvent(config.analytics, 'Click_Kulakcik_Mobil_' + eventGroup);
                window.location.href = "https://www.anadolusaglik.org/sizi-dinliyoruz?utm_source=smpl&utm_medium=website&utm_campaign=bilgivetalepformu";
              });
            }
          }
        }
        else {
          if (window.location.pathname === "/sizi-dinliyoruz" && window.location.href.indexOf("?utm_source=smpl&utm_medium=website&utm_campaign=bilgivetalepformu") < 0) {
            jQuery('#usQuestionForm-contact .sectionDesc').text("Bilgi ve talepleriniz için lütfen aşağıdaki formu doldurun. Size en kısa zamanda dönüş yapacağız. Ayrıca hizmet kalitemizi daha da yükseltmek için görüşlerinize, önerilerinize ve eleştirilerinize kulak veriyoruz.");
            if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown_form' + eventGroup)) {
              EightDigits.analytics.sendEvent(config.analytics, 'Shown_Form_' + eventGroup);
              EightDigits.utils.setCookie('ed-' + config.analytics + '-shown_form' + eventGroup, 'on');
            }
            if (jQuery(window).scrollTop() < jQuery('#usQuestionForm-contact').offset().top) {
              EightDigits.analytics.sendEvent(config.analytics, 'Form_Scroll_' + eventGroup);
              jQuery("html, body").animate({
                scrollTop: jQuery('#usQuestionForm-contact').offset().top
              }, 2000);
            }
          }
        }
      },
      control: function () { },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        main.factory.prototype.start(_exec);
      }
    };
    boot = function () {
      return main.factory.prototype.init();
    };
    boot();
  };
  var _ed_Anasayfa_Sizi_Dinliyoruz_Kulakcik1 = new EightDigits.sf();
  _ed_Anasayfa_Sizi_Dinliyoruz_Kulakcik1.Anasayfa_Sizi_Dinliyoruz_Kulakcik1();
})();
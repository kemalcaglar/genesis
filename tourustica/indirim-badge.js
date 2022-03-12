(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Ekstra_Indirim_Badge")) {
      return false;
    }
    EightDigits.sf.prototype.Ekstra_Indirim_Badge = function () {
  
      var config = {
        scenarioname: "Ekstra_Indirim_Badge",
        analytics: "Ekstra_Indirim_Badge",
        img: "https://cdn.8digits.com/log/r/637bd362-c121-4fbd-b683-967f7052757e.png",
        tooltipText: "<b>TUR200</b> indirim kodu ile ekstra <b>200 TL</b> indirim uygulayabilirsiniz.",
        title: "Ekstra <b>200 TL</b> İndirim",
        copyText: "TUR200",
        controlGroup: 0
      };
  
      var main = {
        "factory": function () {
          return true;
        }
      };
  
      var tripList = [
        "İstanbul'dan Uçaklı Doğu Karadeniz-Batum Turu",
        "İstanbul'dan Uçaklı Ege Akdeniz Turu",
        "İstanbul'dan Uçaklı Elit Gap Turu Perşembe-Pazar",
        "İstanbul'dan Uçaklı Elit Karadeniz Turu",
        "İstanbul'dan Uçaklı Likya Turu",
        "Uçaklı Butik Mardin&Midyat Turu",
        "Uçaklı Butik Van&Tatvan&İshakpaşa Turu",
        "Uçaklı Kapadokya Turu Floria Otel Ürgüp",
        "Uçaklı Kapadokya Turu Perissia Otel Ürgüp",
        "Uçaklı Şanlıurfa-Gaziantep-Antakya Turu Hilton Otelleri Konaklamalı",
        "Kurban Bayramı İstanbul'dan Uçaklı Doğu Karadeniz-Batum Turu",
        "Kurban Bayramı İstanbul'dan Uçaklı Ege Akdeniz Turu",
        "Kurban Bayramı İstanbul'dan Uçaklı Elit Karadeniz Turu",
        "Kurban Bayramı İstanbul'dan Uçaklı Likya Turu",
        "Adana Çıkışlı Uçaklı Ege Akdeniz Turu",
        "Adana Çıkışlı Uçaklı Likya Turu",
        "Ankara Çıkışlı Uçaklı Butik Mardin-Midyat Turu",
        "Ankara Çıkışlı Uçaklı Ege Akdeniz Turu",
        "Ankara Çıkışlı Uçaklı Likya Turu",
        "Ankara'dan Uçaklı Doğu Karadeniz Turu Perşembe-Pazar",
        "Ankara'dan Uçaklı Elit Gap Turu Adana Başlar",
        "Ankara'dan Uçaklı Elit Gap Turu Diyarbakır Başlar",
        "Ankara'dan Uçaklı Elit Gap Turu Perşembe-Pazar",
        "Ankara'dan Uçaklı Elit Karadeniz Turu",
        "Antalya'dan Uçaklı Doğu Karadeniz Turu Perşembe-Pazar",
        "Antalya'dan Uçaklı Elit Gap Turu Adana Başlar",
        "Antalya'dan Uçaklı Elit Karadeniz Turu",
        "İzmir Çıkışlı Uçaklı Butik Mardin&Midyat Turu",
        "İzmir Çıkışlı Uçaklı Butik Van İshakpaşa Tatvan Turu",
        "İzmir'den Uçaklı Doğu Karadeniz Turu Perşembe-Pazar",
        "İzmir'den Uçaklı Elit Gap Turu Adana Başlar",
        "İzmir'den Uçaklı Elit Gap Turu Diyarbakır Başlar",
        "İzmir'den Uçaklı Elit Gap Turu Perşembe-Pazar",
        "İzmir'den Uçaklı Elit Karadeniz Turu",
        "İzmir'den Uçaklı Şanlıurfa-Gaziantep-Antakya Turu Hilton Otelleri Konaklamalı",
        "Kurban Bayramı Adana Çıkışlı Uçaklı Ege Akdeniz Turu",
        "Kurban Bayramı Adana Çıkışlı Uçaklı Likya Turu",
        "Kurban Bayramı Ankara Çıkışlı Uçaklı Ege Akdeniz Turu",
        "Kurban Bayramı Ankara Çıkışlı Uçaklı Likya Turu",
        "Kurban Bayramı Ankara'dan Uçaklı Elit Karadeniz Turu",
        "Kurban Bayramı Antalya'dan Uçaklı Elit Karadeniz Turu",
        "Kurban Bayramı İzmir'den Uçaklı Elit Karadeniz Turu",
        "01 Mayıs Özel İstanbul'dan Uçaklı Gap Turu Hilton Otelleri Konaklamalı",
        "01 Mayıs Özel Uçaklı Butik Şanlıurfa - Gaziantep - Kahramanmaraş Turu Hilton Otelleri Konaklamalı",
        "29 Ekim Özel İstanbul'dan Uçaklı Gap Turu Hilton Otelleri Konaklamalı",
        "İstanbul'dan Uçaklı Elit Gap Turu Adana Başlar",
        "Ankara'dan Karadeniz Fırtınası 4 gece konaklamalı",
        "Ankara'dan Uçaklı Gap Turu Hilton Otelleri Konaklamalı",
        "Ankara'dan Klasik Karadeniz-Batum Turu",
        "Bursa'dan Klasik Karadeniz-Batum Turu",
        "İstanbul'dan Uçaklı Elit Gap Turu Diyarbakır Başlar",
        "İstanbul'dan Uçaklı Gap Turu Hilton Otelleri Konaklamalı",
        "Uçaklı Butik Şanlıurfa - Gaziantep -Antakya Turu Hilton Otelleri Konaklamalı",
        "Uçaklı Kapadokya Kayseri Turu Perissia Hotel",
        "Ramazan Bayramı Özel İstanbul'dan Uçaklı Gap Turu Hilton Otelleri Konaklamalı",
        "Uçaklı Kapadokya Kayseri Turu Lodge Hotel",
        "İzmir'den Uçaklı Kapadokya Kayseri Turu Floria Hotel",
        "İzmir'den Uçaklı Kapadokya Kayseri Turu Lodge Hotel",
        "İzmir'den Uçaklı Kapadokya Kayseri Turu Ramada by Wyndham Cappadocia Hotel",
        "Ramazan Bayramı Özel Uçaklı Kapadokya Kayseri Turu Floria Hotel",
        "Ramazan Bayramı Özel Uçaklı Kapadokya Kayseri Turu Ramada by Wyndham Cappadocia Hotel",
        "Uçaklı Kapadokya Kayseri Turu Ramada by Wyndham Cappadocia Hotel",
        "İzmir Çıkışlı Otobüs gidiş Uçak dönüş Ege Akdeniz Turu",
        "Bursa'dan Karadeniz Fırtınası 4 gece konaklamalı",
        "29 Ekim Özel İstanbul'dan Uçaklı Doğu Karadeniz Batum Turu",
        "Ankara'dan Uçaklı Doğu Karadeniz Batum Turu",
        "Ankara'dan Uçaklı Karadeniz Tiflis-Batum Turu",
        "Ankara'dan Uçaklı Karadeniz-Batum Turu",
        "Antalya'dan Uçaklı Karadeniz Tiflis-Batum Turu",
        "İstanbul'dan Uçaklı Doğu Karadeniz Batum Turu",
        "İstanbul'dan Uçaklı Karadeniz Tiflis-Batum Turu",
        "İstanbul'dan Uçaklı Karadeniz-Batum Turu",
        "İzmir'den Uçaklı Doğu Karadeniz Batum Turu",
        "İzmir'den Uçaklı Karadeniz Tiflis-Batum Turu",
        "İzmir'den Uçaklı Karadeniz-Batum Turu",
        "Kurban Bayramı Uçaklı Doğu Karadeniz Batum Turu",
        "Ramazan Bayramı Özel İstanbul'dan Uçaklı Doğu Karadeniz Batum Turu",
        "01 Mayıs Özel Uçaklı Butik Van Turu",
        "23 Nisan Özel Uçaklı Butik Van Turu",
        "Ramazan Bayramı Özel Uçaklı Butik Van Turu",
        "Butik Van & İshakpaşa & Tatvan Turu",
        "Uçaklı Büyük Doğu Anadolu Turu",
        "01 Mayıs Özel Uçaklı Butik Mardin Turu",
        "23 Nisan Özel Uçaklı Butik Mardin Turu",
        "Uçaklı Butik Mardin Turu",
        "Adana'dan Uçaklı Likya Turu",
        "Ankara'dan Uçaklı Likya Turu",
        "Uçaklı Likya Turu",
        "Adana'dan Uçaklı Akdeniz&Ege Turu",
        "Ankara'dan Uçaklı Akdeniz&Ege Turu",
        "Ramazan Bayramı Özel Uçaklı Antakya-Mersin-Adana Turu",
        "Uçaklı Akdeniz&Ege Turu",
        "Uçaklı Antakya-Mersin-Adana Turu",
        "Eskişehir'den Klasik Karadeniz Batum Turu",
        "İstanbul'dan Karadeniz Fırtınası 4 gece konaklamalı",
        "İstanbul'dan Klasik Karadeniz-Batum Turu",
        "İzmir'den Karadeniz Fırtınası 4 gece konaklamalı",
        "İzmir'den Klasik Karadeniz-Batum Turu",
        "İzmir Çıkışlı Otobüs gidiş Uçak dönüş Likya Turu",
      ];
      main.factory.prototype = {
        random: function () {
          var randomVal = 0;
          var randomControlRatio = config.controlGroup > 50 ? config.controlGroup : 100 - config.controlGroup;
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
  
  
        start: function () {
          if (jQuery(".breadcrumb").text().indexOf("Tur") > -1) {
            var htmlList = `<div class="ed-main_${config.scenarioname}" style="position: relative">
                          <img src="${config.img}" style="width: 17px;margin: 0px 0 3px 0" alt="">
                          <span class="ed-title_${config.scenarioname}" style="font-size: 15px;font-weight: bold;color: #ee272c;">${config.title}</span>
                          <span class="ed-tooltip_${config.scenarioname}" style="display: none;position: absolute;z-index: 7;top: 0;right: 0;width: calc(100% - 25px);background-color: #f4c07a;border: 1px solid #d7d7d7;padding: 7px;border-radius: 5px;">${config.tooltipText}</span>
                          <div class="ed-tooltip_${config.scenarioname}" style="display:none;position: absolute;z-index:8;top: 2px;left: 19px;width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-right: 10px solid #f4c07a"></div>
                          <span class="ed-copied_${config.scenarioname}" style="display: none;position: absolute;z-index: 7;top: -37px;left: 50%;width: fit-content;transform: translateX(-50%);right: 0px;background-color: rgb(244, 192, 122);border: 1px solid rgb(215, 215, 215);padding: 7px;border-radius: 5px">İndirim Kodu Kopyalandı</span>
                     </div>`;
            var htmlDetail = `<div class="ed-main_${config.scenarioname}" style="position: relative">
                          <img src="${config.img}" style="width: 17px;margin: 0px 0 3px 0" alt="">
                          <span class="ed-title_${config.scenarioname}" style="font-size: 15px;font-weight: bold;color: #ee272c;">${config.title}</span>
                          <span class="ed-tooltip_${config.scenarioname}" style="position: absolute;z-index: 7;top: 29px;background-color: rgb(244, 192, 122);border: 1px solid rgb(215, 215, 215);padding: 7px;border-radius: 5px;left: 50%;width: fit-content;transform: translateX(-50%);display: none;">${config.tooltipText}</span>
                          <div class="ed-tooltip_${config.scenarioname}" style="position: absolute;z-index: 8;top: 22px;left: 50%;transform: translateX(-50%);width: 0;height: 0;border-bottom: 10px solid #f4c07a;border-right: 10px solid transparent;border-left: 10px solid transparent;display: none"></div>
                          <span class="ed-copied_${config.scenarioname}" style="display: none;position: absolute;z-index: 7;top: -37px;left: 50%;width: fit-content;transform: translateX(-50%);right: 0;background-color: rgb(244, 192, 122);border: 1px solid rgb(215, 215, 215);padding: 7px;border-radius: 5px">İndirim Kodu Kopyalandı</span>
                     </div>`;
  
            function CopyToClipboard(text) {
              var $temp = jQuery("<input>");
              jQuery("body").append($temp);
              $temp.val(text).select();
              document.execCommand("copy");
              $temp.remove();
            }
  
            if (jQuery("section.tour-detail-page-v2").length > 0) {
                var id = jQuery(".tour-info-box .tour-name").text().trim();
                if(tripList.includes(id)){
              jQuery(`.tour-info-box:eq(1)`).append(htmlDetail);
              if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
                // EightDigits.analytics.sendEvent(config.analytics, 'shown');
                // EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on');
              }
              jQuery(`.tour-info-box .ed-main_` + config.scenarioname + "").hover(function () {
                jQuery(this).parent(0).find(`.ed-tooltip_${config.scenarioname}`).fadeIn();
                if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-hover")) {
                  // EightDigits.analytics.sendEvent(config.analytics, 'hover');
                  // EightDigits.utils.setCookie('ed-' + config.analytics + '-hover', 'on');
                }
              }, function () {
                jQuery(this).parent(0).find(`.ed-tooltip_${config.scenarioname}`).fadeOut();
                jQuery(this).parent(0).find(`.ed-copied_${config.scenarioname}`).fadeOut();
              });
              // .click(function () {
              //   jQuery("a[aria-controls=\"campaigns-tab\"]").click();
              //   CopyToClipboard(config.copyText);
              //   jQuery(this).parent(0).find(`.ed-copied_${config.scenarioname}`).fadeIn();
              //   if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-click")) {
              //      EightDigits.analytics.sendEvent(config.analytics, 'click');
              //      EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on');
              //   }
              // });
            }
            } else {
              for (var i = 0; i < jQuery('h3.hotel-name.in-tour').length; i++) {
                var index = tripList.findIndex(function (e) {
                  return e === jQuery(`h3.hotel-name.in-tour`).eq(i).text().trim();
                });
                if (
                  jQuery(`.hotel-list-discount.in-tour:eq(${i}) .ed-main_` + config.scenarioname).length === 0 &&
                  index > -1
                ) {
                  jQuery(`.hotel-list-discount.in-tour:eq(${i})`).append(htmlList);
                  if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-shown")) {
                    // EightDigits.analytics.sendEvent(config.analytics, 'shown');
                    // EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on');
                  }
                  jQuery(`.hotel-list-discount.in-tour:eq(${i}) .ed-main_` + config.scenarioname + "").hover(function () {
                    jQuery(this).parent(0).find(`.ed-tooltip_${config.scenarioname}`).fadeIn();
                    if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-hover")) {
                      // EightDigits.analytics.sendEvent(config.analytics, 'hover');
                      // EightDigits.utils.setCookie('ed-' + config.analytics + '-hover', 'on');
                    }
                  }, function () {
                    jQuery(this).parent(0).find(`.ed-tooltip_${config.scenarioname}`).fadeOut();
                    jQuery(this).parent(0).find(`.ed-copied_${config.scenarioname}`).fadeOut();
  
                  });
                  // .click(function () {
                  //   CopyToClipboard(config.copyText);
                  //   jQuery(this).parent(0).find(`.ed-copied_${config.scenarioname}`).fadeIn();
                  //   if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-click")) {
                  //      EightDigits.analytics.sendEvent(config.analytics, 'click');
                  //      EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on');
                  //   }
                  // });
                }
              }
            }
          }
        },
  
        control: function () {},
        init: function () {
          if (main.factory.prototype.control() == false) {
            return false;
          }
          var _exec = main.factory.prototype.random();
          if (!_exec) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")) {
              // EightDigits.analytics.sendEvent(config.analytics, 'notShown');
              // EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on');
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
    var _ed_Ekstra_Indirim_Badge = new EightDigits.sf();
    _ed_Ekstra_Indirim_Badge.Ekstra_Indirim_Badge();
  })();
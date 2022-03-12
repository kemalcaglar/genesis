    (function () {
        if (EightDigits.sf.prototype.hasOwnProperty("Size_Ozel_Kulakcik")) {
            return false
        }
        EightDigits.sf.prototype.Size_Ozel_Kulakcik = function () {
            var config = {
                scenarioname: "Size_Ozel_Kulakcik",
                analytics: "Size_Ozel_Kulakcik",
                controlgroup: 10
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
                    var html =
                    '<div class="smpl-kulakcik">\
          <a href="https://www.avansas.com/size-ozel-sectiklerimiz">\
          <div style="background:#ffe700;position:fixed;display:flex;right:-23%;bottom:25%;justify-content: center;text-align: center;width: 50%;margin-right: 10px;z-index: 99999999;font-size: 13px;font-weight: bold;padding-top: 9px;padding-bottom: 4px;line-height: 11px; transform: rotate(-90deg);">\
            <div style="color:#3b4550;display: flex;">\
              <span style="font-style: italic;padding: 5px;">SİZE ÖZEL</span>\
              <span style="border: 1px solid #ffe700;\
                background: #3b4550;\
                color: #ffe700;\
                border-radius: 5px;\
                margin-left: 5px;\
                padding: 5px;\
                font-weight: 500;\
                ">Yeni</span>\
            </div>\
          </div></a></div>\
      ';
      
                  jQuery(window).scroll(function () {
                    if (jQuery(window).scrollTop() > jQuery("body").height() / 5) {
                      if (jQuery(".smpl-kulakcik").length == 0) {
                        jQuery("body").append(html);
                        EightDigits.analytics.sendEvent(config.analytics, 'shown_kulakcik');
                      }
                    }
                  });
                  jQuery(".smpl-kulakcik").click(function () {
                    EightDigits.analytics.sendEvent(config.analytics, 'click_kulakcik');
                  });
                },
                control: function () {
                },
                init: function () {
                    var _exec = main.factory.prototype.random();
                    if (!_exec) {
                      jQuery(window).scroll(function () {
                        if (jQuery(window).scrollTop() > jQuery("body").height() / 5) {
                          if (jQuery(".smpl-kulakcik").length == 0) {
                             EightDigits.analytics.sendEvent(config.analytics, 'notshown_kulakcik');
                          }
                        }
                      });
                    }
                    main.factory.prototype.start();
                }
            };
            boot = function () {
                return main.factory.prototype.init();
            };
            boot();
        };
        var _ed_Size_Ozel_Kulakcik = new EightDigits.sf();
        _ed_Size_Ozel_Kulakcik.Size_Ozel_Kulakcik();
      })();
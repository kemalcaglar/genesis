(function () {

  EightDigits.sf.prototype.anadolusaglikNewTab_ed = function () {

      try {
          var firstIcon = document.querySelector("link[rel*='icon']").getAttribute('href');
      } catch (ex) {
          EightDigits.console.log(ex);
      }


      var google_analytics_tracker = "YeniSekmeBaslikDegistirmePopup";
      var i_wr = 0;

      returnRandomSize = function () {
          var randomVal = 0;
          var randomControlRatio = 90;
          if (EightDigits.utils.getCookie('ed_tkns_abtest_rnd') == null) {
              randomVal = Math.floor((Math.random() * 10000) + 1);
              EightDigits.utils.setCookie('ed_tkns_abtest_rnd', randomVal, 24 * 60 * 30);
          } else {
              randomVal = parseInt(EightDigits.utils.getCookie('ed_tkns_abtest_rnd'));
          }
          if (randomVal < 100 * randomControlRatio) {
              return true;
          } else {
              return false;
          }
      };
      var EXEC = returnRandomSize();

      call_popup = function () {

          /*
          Eğer popup gösterilecekse
          */

          if (EightDigits.utils.getCookie('_ed_tab_change_show') !== null) return false;

          function removeshit(el) {
              var elem = el
              elem.parentNode.removeChild(elem);
              return false;
          }

          var background_image = "//gitlab.com/8digits_consultants/Acct-Management-Projects/uploads/74c4aabc58fabb9bf1e512a0ab2a6c99/favico.jpg";
          var width = 600;
          var height = 484;

          var html = '\
                          <div class="_ed_tr_pop">\
                              <div class="_ed_tr_close"> X </div>\
                              <div class="_ed_tr_click"></div>\
                          </div>\
                          <div class="backover"></div>\
                      ';

          var style = '<style>\
                              ._ed_tr_pop{width:' + width + 'px;height:' + height + 'px;position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;z-index:999999;background-size:100%;background-image:url(' + background_image + ')}\
                              ._ed_tr_close{position:absolute;right:0;top:0;width:25px;height:25px;cursor:pointer;color:#D54132;font-size:25px;}\
                              ._ed_tr_click{position:absolute;left:0;top:0;width:560px;height:400px;cursor:pointer;}\
                              .backover{position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 99999; opacity: 0.8; background-color: rgb(0, 0, 0);}\
                          </style>\
                      ';

          if (EXEC) {

              document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', html);
              document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', style);
              ga('8digits.send', 'event', '8digits', google_analytics_tracker + '-Popup', 'Shown', {
                  nonInteraction: true
              });

              EightDigits.utils.setCookie('_ed_tab_change_show', '1');

              /* goal*/
              var ck = EightDigits.utils.getCookie('_ed_goal_rd_vl');
              if (ck === null) {
                  var arr = [];
              } else {
                  var arr = JSON.parse(ck);
              }
              arr.push(google_analytics_tracker + '_SHOWN');
              EightDigits.utils.setCookie('_ed_goal_rd_vl', JSON.stringify(arr));
              /* goal */

              var dad = document.getElementsByClassName('_ed_tr_pop')[0];
              var close = document.getElementsByClassName('_ed_tr_close')[0];
              var backover = document.getElementsByClassName('backover')[0];
              var click = document.getElementsByClassName('_ed_tr_click')[0];

              close.addEventListener('click', function () {
                  removeshit(dad);
                  removeshit(backover);
              });
              backover.addEventListener('click', function () {
                  removeshit(dad);
                  removeshit(backover);
              });
              click.addEventListener('click', function () {
                  ga('8digits.send', 'event', '8digits', google_analytics_tracker + '-Popup', 'Click', {
                      nonInteraction: true
                  });
                  window.location = "http://www.anadolusaglik.com/campaign/tum-kampanyalar.html";
              });

          } else {
              ga('8digits.send', 'event', '8digits', google_analytics_tracker, 'NotShown', {
                  nonInteraction: true
              });
              /* goal*/
              var ck = EightDigits.utils.getCookie('_ed_goal_rd_vl');
              if (ck === null) {
                  var arr = [];
              } else {
                  var arr = JSON.parse(ck);
              }
              arr.push(google_analytics_tracker + '-Popup_NOTSHOWN');
              EightDigits.utils.setCookie('_ed_goal_rd_vl', JSON.stringify(arr));
              /* goal */
          }
      };

      trigger = function () {
          window.cl_status = 0;
          var objNewTab = {
              text: '3 Adımda Online Randevu Alın',
              popup: 'false',
              analytic: google_analytics_tracker,
              docTitle: document.title
          }
          if (EightDigits.utils.getCookie('_ed_shop_leave_') !== null) {
              objNewTab.popup = 'false';
          }
          google_analytics_tracker = objNewTab.analytic;
          window.addEventListener('blur', function () {
              cl_status = 0;
              document.title = objNewTab.text;
              var documentTitle = document.title + '-';
              (function titleMarquee() {
                  if (cl_status == 0) {
                      document.title = documentTitle = documentTitle.substring(2) + documentTitle.substring(0, 2);
                      setTimeout(titleMarquee, 90);
                  } else {
                      clearTimeout(titleMarquee, 100);
                  }

              })();

              var image = '//cdn.8digits.com/f/u/ssbub04w/fd013b27-9f09-4f0c-b5d5-192bd0c62a9a.jpg';
              var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
              link.type = 'image/png';
              link.rel = 'shortcut icon';
              link.href = image;
              document.getElementsByTagName('head')[0].appendChild(link);

              if (i_wr === 0) {
                  i_wr = 1;
                  ga('8digits.send', 'event', '8digits', google_analytics_tracker, 'Shown', {
                      nonInteraction: true
                  });
                  if (objNewTab.popup == "true") {
                      call_popup();
                  }
              }

          });
          window.addEventListener('focus', function () {
              document.title = objNewTab.docTitle;
              cl_status = 1;
              var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
              link.type = 'image/png';
              link.rel = 'shortcut icon';
              link.href = firstIcon;
              document.getElementsByTagName('head')[0].appendChild(link);
              if (i_wr === 1) {
                  ga('8digits.send', 'event', '8digits', google_analytics_tracker + '-geriDondu', 'Shown', {
                      nonInteraction: true
                  });
                  i_wr = -1;
              }
          });
      };
      trigger();
  };
  var ed_anadolusaglikNewTab = new EightDigits.sf();
  ed_anadolusaglikNewTab.anadolusaglikNewTab_ed();

})();
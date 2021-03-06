(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Setur_Notification_Yilbasi")) {
    return false
  }
  EightDigits.sf.prototype.Setur_Notification_Yilbasi = function () {
    var config = {
      scenarioname: "Setur_Notification_Yilbasi",
      scenarioclass: ".Setur_Notification_Yilbasi",
      analytics: "Setur_Notification_Yilbasi",
      image: "//cdn.8digits.com/f/u/so59anhs/581603b3-d9ce-4193-8292-deaee46782ef.png",
      yilbasiSrc: "https://cdn.8digits.com/log/r/1a920a64-d79e-4640-83a1-5b341d3d5916.png",
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
        let css = `
        <style>
        .`+ config.scenarioname + ` {
          margin-right:0;
          padding-right:0;
        }
        .`+ config.scenarioname + `-main {
          position: absolute;
          top: 0;
          height: 38px;
          width: 45px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .`+ config.scenarioname + `-main .smpl-icon {
          font-size: 26px;
          color: #e5252d;
        }
        .`+ config.scenarioname + `-main .yilbasiImg {
          width: 25px;
        }
        .`+ config.scenarioname + `-main .smpl-count {
          position: absolute;
          color: #fff;
          font-weight: bold;
          height: 18px;
          width: 18px;
          line-height: 16px;
          top: -5px;
          left: 34px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          background-color: #616161;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .`+ config.scenarioname + `-main .smpl-text{
          font-size: 10px;
          color: #6e6e6e;
          font-weight: normal;
          display: flex;
          margin-top: -1px;
          position: relative;
          line-height: 1.4000000000000001em;
        }
        .`+ config.scenarioname + `-list{
          width: 282px;
          position: absolute;
          z-index: 99999;
          -webkit-box-shadow: rgb(66 66 66 / 30%) 0px 0px 4px 1px;
          box-shadow: rgb(66 66 66 / 30%) 0px 0px 4px 1px;
          top: 55px;
          right: -115px;
          display: none;
          border-radius: 11px;
          padding: 8px 20px 10px;
          background: white;
          list-style: none;
          display: none;
        }
        .`+ config.scenarioname + `-list .list-title {
          width: 100%;
          height: 49px;
          text-align: center;
          line-height: 47px;
          font-weight: bold;
          background-color: white;
          color: #ee3342;
          font-size: 18px;
        }
        .`+ config.scenarioname + `-list .triangle {
          position: absolute;
          top: -7px;
          left: 138px;
          border-style: solid;
          border-width: 8px 8px 8px;
          border-color: #ffffff #ffffff;
          display: block;
          z-index: 101;
          -webkit-box-shadow: rgb(66 66 66 / 30%) -3px -3px 6px -1px;
          box-shadow: rgb(66 66 66 / 30%) -3px -3px 6px -1px;
          -webkit-transform: rotate(
          45deg);
          transform: rotate(
          45deg);
          opacity:1;
        }
        .`+ config.scenarioname + `-list li::before {
          content: "\\f107";
          position: absolute;
          left: 0;
          top: 50%;
          font-family: 'Font Awesome 5 Pro';
          -webkit-transform: rotateZ(
          -90deg) translate(100%, 0);
          transform: rotateZ(
          -90deg) translate(100%, 0);
          font-size: 16px;
          color: #ed3942;
          display: block;
        }
        .`+ config.scenarioname + `-list li {
          background-color: #fff;
          padding: 10px 20px;
          text-align: center;
          border-top: 1px solid #d9d9d9;
          position: relative;
        }
        .`+ config.scenarioname + `-list .line-title{
          color: #000;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          margin-top: 0;
          margin-left: 0;
        }
        .`+ config.scenarioname + `-list li:hover .line-title {
          color: #ed3942;
        }
        .smpl_block {
          display: block !important;
        }
        .smpl_block_two {
          display: block !important;
        }
        @media screen and (max-width: 420px) {
          .`+ config.scenarioname + `-main {
            top: -13px;
            margin-left: 27px;
            display: block;
          }
        <style>
        `
        jQuery("head").append(css);
        let obj;
        if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 5000) {
          obj = {
            1: {
              title: "Erken Rezervasyon %50???ye Varan ??ndirimlerle Ba??lad??!",
              url: "https://www.setur.com.tr/erken-rezervasyon-otelleri"
            },
            2: {
              title: "K???? Otelleri'ndeki F??rsatlar?? Ka????rma",
              url: "https://www.setur.com.tr/kis-otelleri"
            },
            3: {
              title: "Taksitleri 4 Ay Ertele",
              url: "https://www.setur.com.tr/taksitleri-4-ay-erteleme-kampanyasi"
            },
            4: {
              title: "T??rk Telekomlulara ??zel ??ndirimleri Ka????rma",
              url: "https://www.setur.com.tr/turk-telekom-kampanyalari"
            },
            5: {
              title: "100 TL WorldPuan Hediye",
              url: "https://www.setur.com.tr/setur-world-puan-kampanyasi"
            },
            6: {
              title: "Yap?? Kredililere U??ak Bileti 25 TL ??ndirimi",
              url: "https://www.setur.com.tr/yapi-kredi-ucak-bileti-indirim-kampanyasi"
            }
          }
            EightDigits.analytics.sendEvent(config.analytics, "shown-variation-one")
        } else {
          obj = {
            1: {
              title: "Erken Rezervasyon %50???ye Varan ??ndirimlerle Ba??lad??!",
              url: "https://www.setur.com.tr/erken-rezervasyon-otelleri"
            },
            2: {
              title: "K???? Otelleri'ndeki F??rsatlar?? Ka????rma",
              url: "https://www.setur.com.tr/kis-otelleri"
            },
            3: {
              title: "Taksitleri 4 Ay Ertele",
              url: "https://www.setur.com.tr/taksitleri-4-ay-erteleme-kampanyasi"
            },
            4: {
              title: "T??rk Telekomlulara ??zel ??ndirimleri Ka????rma",
              url: "https://www.setur.com.tr/turk-telekom-kampanyalari"
            },
            5: {
              title: "100 TL WorldPuan Hediye",
              url: "https://www.setur.com.tr/setur-world-puan-kampanyasi"
            },
            6: {
              title: "Hopililere U??ak Biletinde 50 TL ??ndirim",
              url: "https://www.setur.com.tr/hopi-ucak-kampanyasi"
            }
          }
            EightDigits.analytics.sendEvent(config.analytics, "shown-variation-two")
        };
        let objCount = Object.keys(obj).length;
        let html = `
        <li class="`+ config.scenarioname + `">
          <div class="`+ config.scenarioname + `-main mouseOver">
          <img class="yilbasiImg" src="`+ config.yilbasiSrc + `">
          <span class="smpl-count">`+ objCount + `</span>
          <span class="smpl-text">F??rsatlar</span>
          </div>
          <ul class="`+ config.scenarioname + `-list mouseOverTwo">
            <div class="list-title">FIRSAT ??R??NLER??</div>
            <div class="triangle"></div>
            `;
        for (let arr in obj) {
          html += `
           <li>
              <a class="listItem" href="`+ obj[arr].url + `">
                <div class="line-content">
                  <p class="line-title">`+ obj[arr].title + `</p>
                </div>
              </a>
            </li>
            `;
        }
        html += `
          </ul>
          </li>
          `;
          if (!jQuery(".top-user-area .login-button").length > 0) {
            appendEl = ".top-user-area-list .js-mobile-userCheck.mobile-userCheck"
          }
          else {
            appendEl = ".top-user-area .login-button"
          }
        jQuery(appendEl).before(html);
          if (!jQuery(".top-user-area .login-button").length > 0) {
            jQuery(".top-user-area-list").css({ "width": "150px" })
            jQuery(config.scenarioclass).css({ "width": "100px" })
            jQuery(config.scenarioclass + "-main").css({ "height": "53px" })
            jQuery(config.scenarioclass + "-list").css({ "top": "60px", "right": "-123px" })
            jQuery(config.scenarioclass + "-main .yilbasiImg").css({ "margin-top": "-2px", "width": "26px" })
            jQuery(config.scenarioclass + "-main .smpl-text").css({ "margin-top": "0" })
          }
        jQuery(".mouseOver").mouseenter(function () {
          jQuery(config.scenarioclass + "-list").addClass("smpl_block");
        }).mouseleave(function () {
          setTimeout(function () {
            jQuery(config.scenarioclass + "-list").removeClass("smpl_block");
            jQuery(".smpl-count").css({ "display": "none" })
          }, 1000)
        })
        jQuery(".mouseOverTwo").mouseenter(function () {
          jQuery(config.scenarioclass + "-list").addClass("smpl_block_two");
        }).mouseleave(function () {
          setTimeout(function () {
            jQuery(config.scenarioclass + "-list").removeClass("smpl_block_two");
          }, 500)
        })
        jQuery(config.scenarioclass + "-list li").click(function () {
          let clickedText = jQuery(this).find(".line-title").text();
          EightDigits.analytics.sendEvent(config.analytics, "click" + clickedText)
        })
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
  var _ed_Setur_Notification_Yilbasi = new EightDigits.sf();
  _ed_Setur_Notification_Yilbasi.Setur_Notification_Yilbasi();
})();
(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Arvia_Chat")) {
      return false
    }
    EightDigits.sf.prototype.Arvia_Chat = function () {
  
      var config = {
        scenarioname: "Arvia_Chat",
        analytics: "Arvia_Chat",
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
          var statusArvia = {
            isApplyClick: false,
            isCalculate: false,
            isSeeArvia: false
          }
  
          jQuery('#LoanCalc_Apply, #LoanCalc_Apply2').click(function () {
            if (window.location.href.indexOf("Taksit_ev") > -1) {
              statusArvia.isApplyClick = true;
            }
          })
  
          /*  jQuery('#CalcBtn').click(function () {
             if (!statusArvia.isApplyClick && jQuery('.LoanCalcServiceError').css("display") !== "block") {
               statusArvia.isCalculate = true;
             }
           }) */
          var style = "\
                 <style>\
                 .arviaModal{\
                 z-index:99999!important;\
                 }\
                 .arviaModalBackdrop{\
                 z-index:99998!important;\
                 }\
                 .arviaAgentWidgetPageThree .arviaModalClose{\
                right:7px;\
                top:5px;\
                }\
                .arviaModalLg{\
                    top:50%;\
                    transform:translateY(-50%);\
                    margin:0 auto;\
                }\
                 </style>\
                 "
          jQuery('head').append(style)
  
  
          /* jQuery(document).on("mousemove", function (event) {
            var scrollTop = jQuery(window).scrollTop();
            if (event.pageY < (scrollTop + 3)) { */
          var checkScenario = function () {
            if (!statusArvia.isSeeArvia && statusArvia.isCalculate && !statusArvia.isApplyClick) {
              statusArvia.isSeeArvia = true;
              var arviaScript = '<script async id="arviaVideoCallWidget" src="https://whitelabel.arvia.chat/widget/js/arvia-video-call-widget-bundle.js?projectId=601c3661ba35c034e6e1254c"></script>'
              jQuery('head').append(arviaScript);
  
              var x = setInterval(function () {
                if (jQuery("#arviaAgentWidget").length > 0) {
                  clearInterval(x)
                  jQuery('#arviaAgentWidget, .arviaAgentWidgetMbox').on('click', function () {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-click')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'click-ArviaChat');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-click', 'on')
                    }
                  })
                  jQuery('.arviaModalClose').on('click', function () {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-close')) {
                      EightDigits.analytics.sendEvent(config.analytics, 'click-closeArviaChat');
                      EightDigits.utils.setCookie('ed-' + config.analytics + '-close', 'on')
                    }
                  })
                }
              }, 200)
              if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                EightDigits.analytics.sendEvent(config.analytics, 'shown-arviaChat');
                EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
              }
  
              jQuery('.cbot-animation-holder').hide()
              chatbotweb.remove()
            }
          }
          jQuery("#CalcBtn").click(function () {
            console.log("clicked");
            if (!statusArvia.isApplyClick && jQuery('.LoanCalcServiceError').css("display") !== "block") {
              statusArvia.isCalculate = true;
            }
            setTimeout(function () {
              checkScenario()
            }, 5000);
          })
          /*      }
             }) */
        },
        control: function () {
          /* if (window.location.pathname === "/ev-kredisi") {
            EightDigits.utils.setCookie('ed-' + config.analytics + '-evkredisi', 'on')
            return false;
          } 
          if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-evkredisi')) {
            return false;
          }*/
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
    var _ed_Arvia_Chat = new EightDigits.sf();
    _ed_Arvia_Chat.Arvia_Chat();
  })();
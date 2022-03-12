(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Sepet_Tab_Yarim_Kalmasin")) {
        return false
    }
    EightDigits.sf.prototype.Sepet_Tab_Yarim_Kalmasin = function () {
        var config = {
            scenarioname: "Sepet_Tab_Yarim_Kalmasin",
            analytics: "Sepet_Tab_Yarim_Kalmasin",
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
                if (window.location.pathname.indexOf("/") == 0) {
                var smplConfig = {
                    animationTime: 300,
                  };
                    var i_wr = 0;
                    var text_show = 'Tatiliniz yarım kalmasın!🍁';
                
                    function triggerTab() {
                
                      window.cl_status = 0;
                
                      var objNewTab = {
                        text: text_show,
                        popup: 'true',
                        docTitle: document.title,
                        onetime: false,
                      };
                
                
                      document.addEventListener('visibilitychange', function () {
                        if (document.hidden) {
                          window.cl_status = 1;
                          var documentTitle = text_show;
                          document.title = text_show;
                
                          (function titleMarquee() {
                            if (cl_status == 1) {
                              document.title = documentTitle = documentTitle.substring(3) + documentTitle.substring(0, 6);
                              setTimeout(titleMarquee, smplConfig.animationTime);
                            } else {
                              clearTimeout(titleMarquee, smplConfig.animationTime);
                            }
                          })();
                          if (i_wr === 0) {
                            i_wr = 1;
                          }
                        } else {
                          window.cl_status = 0;
                          document.title = objNewTab.docTitle;
                          if (i_wr === 1) {
                            i_wr = -1;
                          }
                        }
                      });
                    }
                
                    triggerTab();
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
    var _ed_Sepet_Tab_Yarim_Kalmasin = new EightDigits.sf();
    _ed_Sepet_Tab_Yarim_Kalmasin.Sepet_Tab_Yarim_Kalmasin();
})();
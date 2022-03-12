(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Basket_Open")) {
      return false
  }
  EightDigits.sf.prototype.Basket_Open = function () {
      var config = {
          scenarioname: "Basket_Open",
          analytics: "Basket_Open",
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
            
                function setCookie(name,value,days) {
                    var expires = "";
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days*24*60*60*1000));
                        expires = "; expires=" + date.toUTCString();
                    }
                    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
                  }
                  function getCookie(name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for(var i=0;i < ca.length;i++) {
                        var c = ca[i];
                        while (c.charAt(0)==' ') c = c.substring(1,c.length);
                        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                    }
                    return null;
                  }
              
              if(!getCookie("smpl_basket_open")) {
                cookieBasket();
                setCookie('smpl_basket_open','1');
              }
              function cookieBasket(){
                if(jQuery(".product-count").text().split("")[0] > 0 ){
                    jQuery(".icon-area.cart-info").trigger("click")
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'shown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                      }
                  };
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
  var _ed_Basket_Open = new EightDigits.sf();
  _ed_Basket_Open.Basket_Open();
})();
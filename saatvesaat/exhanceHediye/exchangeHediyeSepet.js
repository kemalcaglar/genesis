(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Exchange_Hediye_Sepet")) {
      return false
  }
  EightDigits.sf.prototype.Exchange_Hediye_Sepet = function () {

      var config = {
          scenarioname: "Exchange_Hediye_Sepet",
          analytics: "Exchange_Hediye_Sepet",
          controlgroup: 0
      };
      var itemName = [
        "AX7102",
      ]
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
          
          addProduct: function () {
          
              
              var items = dataLayer[1].cart.items;
              var uspaPrice = 0;
              for (var j = 0; j < items.length; j++){
              items.map(function(item,i){
                  if(itemName.find(x=>x===items[j].sku)){
                      if(uspaPrice<100){
                          var settings = {
                              url: "https://mnm.saatvesaat.com.tr/shared/merchantCenter?sku="+item.sku+""
                          }
                          
                          jQuery.ajax(settings).done(function (response) {
                            
                              uspaPrice +=Number(jQuery(response).find("item")[0].getElementsByTagName("g:sale_price")[0].textContent.split(" TRY")[0]) * item.qty
                              if(uspaPrice>=0){
                                EightDigits.analytics.sendEvent(config.analytics,'Shown');
                                  var settings = {
                                      "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=GWP-AX1042&qty=1",
                                      "method": "POST",
                                    }
                                    jQuery.ajax(settings).done(function (response) {
                                      location.reload();
                                    });
                              }
                          });
                          
                        }
                  }
               
              
              })
          }
          },
          addCss: function () {
              var cartProducts = dataLayer[1].cart.items;
              for (var j = 0; j < cartProducts.length; j++) {
                  if (cartProducts[j].sku === 'GWP-AX1042') {
                     
                      jQuery("tr").each(function(){
                          if(jQuery(this).find("h2.product-name").text().trim() == "ARMANI EXCHANGE SIRT ÇANTASI"){
                          jQuery(this).find(".cart-price .price").css('text-decoration','line-through');
                          }
                          })
                      // if(window.innerWidth > 600){
                      //     if(jQuery('.ed-main-bedavaCanta').length === 0){
                      //         jQuery('.product-cart-info:eq('+j+')').append('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 173px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>')
                      //     }
                      // }
                      // else{
                      //     if(jQuery('.ed-main-bedavaCanta').length === 0){
                      //         //jQuery('.product-cart-info:eq('+j+')').append('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 173px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>')
                      //         jQuery('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 100%;font-size: 12px;position: absolute;margin-top: -1px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>').insertAfter(jQuery('.col-24.last:eq('+j+')').parent())
                      //     }
                      // }
                     
                      
                  }
              }

          },
          start: function () {
              var cartProducts = dataLayer[1].cart.items;
              var con = false;
              var index;
              for (var j = 0; j < cartProducts.length; j++) {
                  if (cartProducts[j].sku === 'GWP-AX1042') {
                      con = true;
                      index = j;
                  }
              }

              if (con) {

                  main.factory.prototype.addCss();
                  var items = dataLayer[1].cart.items;
                  var uspaPrice = 0;
                  var uspaItems =[]
                  for (var j = 0; j < items.length; j++){
                   items.forEach(function(item,i){
                    if(itemName.find(x=>x===items[j].sku)){
                      uspaItems.push(item)
                    }
                  })
              }
                  uspaItems.map(function(item,i){
                          if(uspaPrice<100){
                              var settings = {
                                  url: "https://mnm.saatvesaat.com.tr/shared/merchantCenter?sku="+item.sku+""
                              }
                              
                              jQuery.ajax(settings).done(function (response) {
                                
                                  uspaPrice +=Number(jQuery(response).find("item")[0].getElementsByTagName("g:sale_price")[0].textContent.split(" TRY")[0]) * item.qty
                                  if(uspaItems.length-1 ===i && uspaPrice<100){
                                    if(window.innerWidth<767){
                                      window.location.href=  jQuery('.btn-remove.btn-remove2:eq('+index+')').attr('href')
                                    }
                                    else{
                                      jQuery('.btn-remove.btn-remove-inline i:eq('+index+')').click()
                                    }
                                  }
                              });
                              
                            }
                   
                  
                  })
  
                  // if (cont) {
                      
                      
                  //     jQuery('.btn-remove.btn-remove-inline i:eq('+index+')').click()
                  // }

              }
              else {
                 
                  var controller = false;
                  var cartProducts = dataLayer[1].cart.items;
                  var price = 0;
                  
                



                  for (var j = 0; j < cartProducts.length; j++) {
                      if (itemName.find(x=>x===cartProducts[j].sku)) {
                       
                          price+=parseInt(cartProducts[j].price)*parseInt(cartProducts[j].qty)
                          if(price>0){
                              controller=true;
                          }
                      }
                  }
  
                  if (controller) {
                      main.factory.prototype.addProduct();
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
                  EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
  var _ed_Exchange_Hediye_Sepet = new EightDigits.sf();
  _ed_Exchange_Hediye_Sepet.Exchange_Hediye_Sepet();
})();

(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Adding_Product_Cart_Ml")) {
      return false
  }
  EightDigits.sf.prototype.Adding_Product_Cart_Ml = function () {

      var config = {
          scenarioname: "Adding_Product_Cart_Ml",
          analytics: "Adding_Product_Cart_Ml",
          controlgroup: 0
      };
      var itemName = [
        'ML-EL1094SS001650-5',
        'ML-EL1118PVP01210-1',
        'ML-AI1018SS001432-4',
        'ML-AI6008SS002630-1',
        'ML-AI1018PVB01337-1',
        'ML-LC6067SS001110-1',
        'ML-LC6067PS103110-1',
        'ML-EL1118PVP01090-1',
        'ML-EL1118SS001114-1',
        'ML-EL1118PVP01610-1',
        'ML-EL1098SS001114-1',
        'ML-AI1018SS001333-1',
        'ML-AI6058SS002430-2',
        'ML-AI6058SS002330-2',
        'ML-EL1098PVP01210-1',
        'ML-AI1018PVB01334-1',
        'ML-EL1098PVB01310-1',
        'ML-AI6008SS002331-1',
        'ML-AI6008SS001331-1',
        'ML-AI6008PVB01330-1',
        'ML-AI1018PVB01333-1',
        'ML-AI6038SS002430-1',
        'ML-AI6038SS001330-1',
        'ML-AI6008SS002430-1',
        'ML-AI6008SS002330-1',
        'ML-AI6008SS001430-1',
        'ML-AI6008SS001330-1',
        'ML-AI1008SS001333-1',
        'ML-PT6358SS001331-1',
        'ML-AI1018SS001330-2',
        'ML-PT6388SS002331-1',
        'ML-PT6388SS001331-1',
        'ML-AI1018SS001430-1',
        'ML-PT6358SS001430-1',
        'ML-FA1007PVP13170-1',
        'ML-FA1007PVP13110-1',
        'ML-AI1018SS002430-1',
        'ML-AI1018PVY11132-1',
        'ML-AI1008SS002431-1',
        'ML-AI1008SS001430-1',
        'ML-SD6207SD501450',
        'ML-AI1018SS001330-1',
        'ML-AI1018SS001130-1',
        'ML-AI1008SS001330-1',
        'ML-EL1118SS002311-1',
        'ML-EL1098SS002311-1',
        'ML-AI1008SS002330-1',
        'ML-AI1018SS002131-1',
        'ML-AI1018SS002330-1',
        'ML-EL1098SS002410-1',
        'ML-EL1094PVP01350-1',
        'ML-EL1098SS001311-1',
        'ML-EL1118SS002310-1',
        'ML-EL1118SS001311-1',
        'ML-EL1108SS001311-1',
        'ML-EL1118PVP01112-1',
        'ML-EL1098SS002310-1',
        'ML-EL1094PVP01111-1',
        'ML-FA1004PVP13110-1',
        'ML-EL1094PVP01150-1',
        'ML-FA1004PVP13150-1',
        'ML-EL1098SS001310-1',
        'ML-FA1004SS002110-1',
        'ML-EL1118SS001310-1',
        'ML-SD6207SD501170',
        'ML-FA1004SS002110',
        'ML-SD6107SD50175E',
        'ML-LC6003PD501130',
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
                                      "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=ML921-005009&qty=1",
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
                  if (cartProducts[j].sku === 'ML921-005009') {
                     
                      jQuery('.cart-price .price:eq('+j+')').css('text-decoration','line-through');
                      jQuery("tr").each(function(){
                          if(jQuery(this).find("h2.product-name").text().trim() == "Emporio Armani Sırt Çantası"){
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
                  if (cartProducts[j].sku === 'ML921-005009') {
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
  var _ed_Adding_Product_Cart_Ml = new EightDigits.sf();
  _ed_Adding_Product_Cart_Ml.Adding_Product_Cart_Ml();
})();

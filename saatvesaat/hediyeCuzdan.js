(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Adding_Product_Cart_UsPoloCuzdan")) {
        return false
    }
    EightDigits.sf.prototype.Adding_Product_Cart_UsPoloCuzdan = function () {
  
        var config = {
            scenarioname: "Adding_Product_Cart_UsPoloCuzdan",
            analytics: "Adding_Product_Cart_UsPoloCuzdan",
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
            addProduct: function () {
            

                var items = dataLayer[1].cart.items;
                var uspaPrice = 0;
                items.map(function(item,i){
                    if(item.name.indexOf("USPA")>-1 && item.name.indexOf("Saat")>-1){
                        if(uspaPrice<500){
                            var settings = {
                                url: "https://mnm.saatvesaat.com.tr/shared/merchantCenter?sku="+item.sku+""
                            }
                            
                            jQuery.ajax(settings).done(function (response) {
                              
                                uspaPrice +=Number(jQuery(response).find("item")[0].getElementsByTagName("g:sale_price")[0].textContent.split(" TRY")[0]) * item.qty
                                if(uspaPrice>=500){
                                  EightDigits.analytics.sendEvent(config.analytics,'Shown');
                                    var settings = {
                                        "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=PLCUZ8405&qty=1",
                                        "method": "POST",
                                      }
                                      jQuery.ajax(settings).done(function (response) {
                                        location.reload();S
                                      });
                                }
                            });
                            
                          }
                    }
                 
                
                })

           
            },
            addCss: function () {
                var cartProducts = dataLayer[1].cart.items;
                for (var j = 0; j < cartProducts.length; j++) {
                    if (cartProducts[j].sku === 'PLCUZ8405') {
                       
                        jQuery('.cart-price .price:eq('+j+')').css('text-decoration','line-through');

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
                    if (cartProducts[j].sku === 'PLCUZ8405') {
                        con = true;
                        index = j;
                    }
                }
  
                if (con) {
  
                    main.factory.prototype.addCss();
                    var items = dataLayer[1].cart.items;
                    var uspaPrice = 0;
                    var uspaItems =[]
                     items.forEach(function(item,i){
                      if(item.name.indexOf("USPA")>-1 && item.name.indexOf("Saat")>-1){
                        uspaItems.push(item)
                      }
                    })
                    
                    uspaItems.map(function(item,i){
                            if(uspaPrice<500){
                                var settings = {
                                    url: "https://mnm.saatvesaat.com.tr/shared/merchantCenter?sku="+item.sku+""
                                }
                                
                                jQuery.ajax(settings).done(function (response) {
                                  
                                    uspaPrice +=Number(jQuery(response).find("item")[0].getElementsByTagName("g:sale_price")[0].textContent.split(" TRY")[0]) * item.qty
                                    if(uspaItems.length-1 ===i && uspaPrice<500){
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
                        if (cartProducts[j].name.indexOf('USPA')>-1 && cartProducts[j].name.indexOf("Saat")>-1) {
                         
                            price+=parseInt(cartProducts[j].price)*parseInt(cartProducts[j].qty)
                            if(price>500){
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
    var _ed_Adding_Product_Cart_UsPoloCuzdan = new EightDigits.sf();
    _ed_Adding_Product_Cart_UsPoloCuzdan.Adding_Product_Cart_UsPoloCuzdan();
  })();

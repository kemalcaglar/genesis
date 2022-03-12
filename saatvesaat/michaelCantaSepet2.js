(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Adding_Product_Cart")) {
        return false
    }
    EightDigits.sf.prototype.Adding_Product_Cart = function () {
  
        var config = {
            scenarioname: "Adding_Product_Cart",
            analytics: "Adding_Product_Cart",
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
             var settings = {
                    
                    "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=00GWPMK1111&qty=1",
                    "method": "POST",
                    
                  }
                  
                  jQuery.ajax(settings).done(function (response) {
                    location.reload();
                  });
            },
            addCss: function () {
                var cartProducts = dataLayer[1].cart.items;
                for (var j = 0; j < cartProducts.length; j++) {
                    if (cartProducts[j].sku === '00GWPMK1111') {
                       
                        jQuery('.cart-price .price:eq('+j+')').css('text-decoration','line-through');

                        if(window.innerWidth > 600){
                            if(jQuery('.ed-main-bedavaCanta').length === 0){
                                jQuery('.product-cart-info:eq('+j+')').append('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 173px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>')
                            }
                        }
                        else{
                            if(jQuery('.ed-main-bedavaCanta').length === 0){
                                //jQuery('.product-cart-info:eq('+j+')').append('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 173px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>')
                                jQuery('<div id="ed-main-bedavaCanta" style="color:#bd1817;width: 100%;font-size: 12px;position: absolute;margin-top: -1px;">Bu kampanya sadece <span style="font-weight:700; color:#bd1817;">online mağazada</span> geçerlidir.</div>').insertAfter(jQuery('.col-24.last:eq('+j+')').parent())
                            }
                        }
                       
                        
                    }
                }
  
            },
            start: function () {
                var cartProducts = dataLayer[1].cart.items;
                var con = false;
                var index;
                for (var j = 0; j < cartProducts.length; j++) {
                    if (cartProducts[j].sku === '00GWPMK1111') {
                        con = true;
                        index = j;
                    }
                }
  
                if (con) {
  
                    main.factory.prototype.addCss();
                    var cont = true;
                    var cartProducts = dataLayer[1].cart.items;
                    for (var j = 0; j < cartProducts.length; j++) {
                        if (cartProducts[j].sku.indexOf('MK')===0 && cartProducts[j].price >= 1250 && cartProducts[j].sku.indexOf('MKT') !== 0) {
                           
                            cont = false;
                        }
                    }
    
                    if (cont) {
                        
                        
                        
                        jQuery('.btn-remove.btn-remove-inline i:eq('+index+')').click()
                    }
  
                }
                else {
                   
                    var controller = false;
                    var cartProducts = dataLayer[1].cart.items;
                    for (var j = 0; j < cartProducts.length; j++) {
                        if (cartProducts[j].sku.indexOf('MK')===0 && cartProducts[j].price >= 900 && cartProducts[j].sku.indexOf('MKT') !== 0) {
                           
                            controller = true
                        }
                    }
    
                    if (controller) {
                        EightDigits.analytics.sendEvent(config.analytics,'Shown');
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
    var _ed_Adding_Product_Cart = new EightDigits.sf();
    _ed_Adding_Product_Cart.Adding_Product_Cart();
  })();
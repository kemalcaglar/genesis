(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Adding_Product_Cart_")) {
        return false
    }
    EightDigits.sf.prototype.Adding_Product_Cart_ = function () {
  
        var config = {
            scenarioname: "Adding_Product_Cart_",
            analytics: "Adding_Product_Cart_",
            controlgroup: 0
        };
   
        var main = {
            "factory": function () {
                return true;
            }
        };
        var productID= ["WWQ1001","MK2448", "MK3120", "MK5354", "MK2832", "MK2833", "MK2715", "MK8787", "MK2663", "MK4553", "MK3192", "MK8674", "MK3491", "MK3489", "MK6589", "MK3275", "MK4460", "MK3639", "MK3679", "MK2775", "MK3559", "MK4390", "MK6853", "MK6852", "MK5616", "MK3725", "MK5491", "MK3651", "MK3408", "MK4495", "MK3191", "MK8736", "MK7165", "MK7135", "MK6880", "MK5784", "MK3929", "MK3724", "MK3554", "MK3643", "MK8295", "MK2914", "MK2913", "MK2884", "MK2877", "MK6753", "MK6739", "MK6738", "MK4451", "MK3971", "MK6077", "MK8830", "MK3946", "MK3927", "MK3515", "MK7154", "MK7153", "MK8602", "MK5615", "MK8157", "MK5165", "MK3439", "MK3438", "MK7155", "MK6721", "MK4408", "MK4407", "MK6671", "MK6670", "MK3882", "MK3881", "MK5128", "MK8493", "MK2776", "MK5865", "MK8826", "MK8827", "MK2834", "MK2529", "MK5841", "MK6687", "MK6720", "MK6175", "MK8344", "MK8281", "MK4435", "MK4392", "MK6641", "MK4340", "MK3897", "MK3514", "MK3735", "MK3197", "MK3513", "MK3512", "MK6614", "MK5943", "MK3179", "MK3178", "MK3221", "MK4336", "MK6110", "MK6870", "MK6848", "MK6847", "MK3898", "MK6849", "MK6799", "MK6797", "MK2789", "MK4341", "MK4339", "MK4338", "MK3969", "MK6642", "MK3843", "MK3904", "MK6598", "MK6474", "MK3845", "MK3785", "MK6357", "MK5798", "MK5799", "MK6174", "MK5735", "MK5605", "MK3216", "MK3839", "MK3844", "MK3561", "MK4546", "MK4523", "MK4522", "MK4519", "MK4518", "MK4524", "MK4453", "MK4467", "MK4440", "MK4439", "MK4438", "MK3921", "MK3919", "MK4415", "MK3903", "MK3901", "MK4545", "MK4544", "MK6275", "MK5626", "MK3783", "MK3784", "MK3405", "MK6428", "MK6796", "MK6795", "MK4515", "MK4514", "MK4513", "MK4452", "MK6717", "MK6694", "MK6693", "MK3972", "MK5503", "MK3190", "MK3366", "MK6844", "MK3203", "MK6356", "MK6806", "MK6769", "MK6686", "MK6684", "MK4388", "MK4352", "MK3880", "MK6558", "MK6863", "MK6862", "MK6846", "MK1023", "MK6632", "MK6651", "MK5896", "MK6791", "MK6547", "MK6716", "MK6282", "MK6281", "MK6627", "MK8715", "MK8789"]

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
            
                var count = 0;
                if(jQuery('.product-cart-sku').length>0){
                    jQuery('.product-cart-sku').each(function(i,item){
                        if(productID.find(x=>x===jQuery(item).text().split(':')[1].trim())!==undefined ){
                            count++;
                        }
                    })
                }
                
                if(jQuery('h2.product-name').length>0){
                    jQuery('h2.product-name').each(function(i,item){
                        if(productID.find(x=>x===jQuery(item).text().trim().split(' ')[0])!==undefined){
                            count++;
                        }
                    })
                }
               
                
                if(count>0){
                    var settings = {
                    
                        "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=WWQK001&qty=1",
                        "method": "POST",
                        
                      }
                      
                      jQuery.ajax(settings).done(function (response) {
                        location.reload();
                      });
                }
           
            },
            addCss: function () {
                var cartProducts = dataLayer[1].cart.items;
                for (var j = 0; j < cartProducts.length; j++) {
                    if (cartProducts[j].sku === 'WWQ1001') {
                       
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
                        if (cartProducts[j].sku.indexOf('MK')===0 && productID.find(x=>x===cartProducts[j].sku)!==undefined && cartProducts[j].price >= 1250 && cartProducts[j].sku.indexOf('MKT') !== 0) {
                           
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
                        if (cartProducts[j].sku.indexOf('MK')===0 && productID.find(x=>x===cartProducts[j].sku)!==undefined && cartProducts[j].price >= 1250 && cartProducts[j].sku.indexOf('MKT') !== 0) {
                           
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
    var _ed_Adding_Product_Cart_ = new EightDigits.sf();
    _ed_Adding_Product_Cart_.Adding_Product_Cart_();
  })();

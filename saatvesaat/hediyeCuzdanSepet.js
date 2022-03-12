(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Adding_Product_Cart_Armani")) {
        return false
    }
    EightDigits.sf.prototype.Adding_Product_Cart_Armani = function () {
  
        var config = {
            scenarioname: "Adding_Product_Cart_Armani",
            analytics: "Adding_Product_Cart_Armani",
            controlgroup: 0
        };
        var itemName = [
            "AR11350",
            "AR11150",
            "AR60024",
            "AR11340",
            "AR11339",
            "AR11338",
            "AR11337",
            "AR11349",
            "AR11347",
            "AR11342",
            "AR11341",
            "AR60028",
            "AR11321",
            "AR11288",
            "AR80037",
            "AR11329",
            "AR11328",
            "AR11327",
            "AR11326",
            "AR11332",
            "AR11325",
            "AR11324",
            "AR11320",
            "AR11319",
            "AR11317",
            "AR11312",
            "AR9042",
            "AR1803",
            "AR11330",
            "AR11314",
            "AR11313",
            "AR11293",
            "AR11158",
            "AR1961",
            "AR1917",
            "AR11271",
            "AR11185",
            "AR70001",
            "AR6093",
            "AR11306",
            "AR11295",
            "AR11289",
            "AR11287",
            "AR11012",
            "AR80039",
            "AR80038",
            "AR11286",
            "AR60018",
            "AR11121",
            "AR60013",
            "AR60012",
            "AR60010",
            "AR11270",
            "AR11268",
            "AR11267",
            "AR11265",
            "AR11264",
            "AR80032",
            "AR60011",
            "AR11276",
            "AR11275",
            "AR11272",
            "AR11269",
            "AR11252",
            "AR11186",
            "AR11243",
            "AR11242",
            "AR11241",
            "AR11245",
            "AR11244",
            "AR11239",
            "AR11238",
            "AR11237",
            "AR11180",
            "AR11228",
            "AR11227",
            "AR11226",
            "AR11223",
            "AR11216",
            "AR11202",
            "AR11188",
            "AR11184",
            "AR11182",
            "AR11181",
            "AR11175",
            "AR11215",
            "AR80026",
            "AR11210",
            "AR11208",
            "AR11204",
            "AR11201",
            "AR11196",
            "AR11163",
            "AR11169",
            "AR11168",
            "AR11143",
            "AR11141",
            "AR11062",
            "AR11165",
            "AR11164",
            "AR11161",
            "AR11153",
            "AR2507",
            "AR1853",
            "AR1812",
            "AR11013",
            "AR11132",
            "AR11129",
            "AR11128",
            "AR11123",
            "AR11118",
            "AR1692",
            "AR11100",
            "AR11085",
            "AR60007",
            "AR60006",
            "AR1926",
            "AR11106",
            "AR11105",
            "AR11104",
            "AR1732",
            "AR80011",
            "AR11097",
            "AR11067",
            "AR11060",
            "AR11059",
            "AR11069",
            "AR11024",
            "AR11053",
            "AR11051",
            "AR11047",
            "AR11046",
            "AR1509",
            "AR11023",
            "AR11032",
            "AR0399",
            "AR1968",
            "AR1811",
            "AR1648",
            "AR0389",
            "AR2502",
            "AR1908",
            "AR2510",
            "AR1990",
            "AR1979",
            "AR2500",
            "AR1989",
            "AR1895",
            "AR1894",
            "AR1919",
            "AR2472",
            "AR6068",
            "AR1807",
            "AR1970",
            "AR1808",
            "AR1828",
            "AR1840",
            "AR2494",
            "AR1910",
            "AR1737",
            "AR2473",
            "AR1846",
            "AR2477",
            "AR1785",
            "AR1682",
            "AR5995",
            "AR2460",
            "AR2447",
            "AR2411",
            "AR1683",
            "AR2461",
            "AR2448",
            "AR2434",
            "AR1451",
            "ART5022",
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
                                        "url": "https://www.saatvesaat.com.tr/saat/general/addItem?sku=GWPARC0005&qty=1",
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
                    if (cartProducts[j].sku === 'GWPARC0005') {
                       
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
                    if (cartProducts[j].sku === 'GWPARC0005') {
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
    var _ed_Adding_Product_Cart_Armani = new EightDigits.sf();
    _ed_Adding_Product_Cart_Armani.Adding_Product_Cart_Armani();
  })();

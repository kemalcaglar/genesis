(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("bedavaCuzdanBadge_Mobil")) {
        return false
    }
    EightDigits.sf.prototype.bedavaCuzdanBadge_Mobil = function () {

        var config = {
            scenarioname: "bedavaCuzdanBadge_Mobil",
            analytics: "bedavaCuzdanBadge_Mobil",
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
            controlBrand: function (newDiscountedPrice, brand) {

                if (newDiscountedPrice >= 500 && brand === "U.S. Polo Assn.") {
                    return true
                }
                else {
                    return false;
                }




            },
            category: function () {

                jQuery(".item").map(function () {


                    var newDiscountedPrice = ""
                    var brand = jQuery(".product-brand", this).text().trim();
                    var productLink = jQuery('.product-image', this).attr('href');

                   
                   if(jQuery('.mnm-basket-badge span:eq(1)',this).text().trim()===""){
                    newDiscountedPrice = Number(jQuery('.special-price .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                }
                else{
                    newDiscountedPrice = Number(jQuery('.mnm-basket-badge span:eq(1)',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                }
                // newDiscountedPrice=Number(jQuery('.price-box .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                    var specialDiscount = main.factory.prototype.controlBrand(newDiscountedPrice, brand);


                    if (specialDiscount ) {
                       

                        
                        if (jQuery(this).find('.ed-mainbedavaCuzdanBadge_Mobil').length === 0) {
                           


                            jQuery('.product-image', this).prepend('\
                                                     <a href="' + productLink + '" style="color: black; text-decoration: none; cursor:pointer;">\
                                                             <div class="ed-mainbedavaCuzdanBadge_Mobil" style="position:absolute;bottom:0px; width:100%;">\
                                                             <div class="ed-cuzdan-badge" style=" height: 16px; background-color: #A31f37; display: block; z-index: 9; "><p style=" text-align: center; font-size: 10px;  color: #fff; ">CÜZDAN HEDİYE!</p></div>\
                                                             </div>\
                                                    </a>')

                            if (EightDigits.utils.getCookie('ed-shown' + config.scenarioname) === null) {
                                EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                                EightDigits.utils.setCookie('ed-shown' + config.scenarioname, 'on');
                            }


                        }






                    }

                })



               /* if (window.innerWidth > 992) {
                    jQuery(".amlabel-div .amlabel-table.bottom-right:nth-child(1)").css("bottom", "70px");

                }
                jQuery(window).on("resize", function () {
                    if (window.innerWidth > 992) {
                        jQuery(".amlabel-div .amlabel-table.bottom-right:nth-child(1)").css("bottom", "70px");
                    }
                });
                 */
            },
            product: function () {
                var price ;
                if(Number(jQuery('.mnm-basket-discount-wrapper span:eq(2)').text().split("TL")[0].trim().replace('.','').replace(',','.'))===0){
                    price = Number(jQuery('.special-price .price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                }
                else{
                    price=Number(jQuery('.mnm-basket-discount-wrapper span:eq(2)').text().split("TL")[0].trim().replace('.','').replace(',','.'));
                }
                var brand = jQuery('.product-brand').text().trim();

                if (main.factory.prototype.controlBrand(price, brand)) {
                    jQuery('.product-image-gallery').append('\
                    <a style="color: black; text-decoration: none; cursor:pointer;">\
                            <div class="ed-mainbedavaCuzdanBadge_Mobil" style="position:absolute;bottom:5px; width:100%;z-index:3;">\
                            <div class="ed-cuzdan-badge" style=" height: 30px; background-color: #A31f37; display: block; z-index: 9; "><p style=" text-align: center; font-size: 16px;line-height:30px;  color: #fff; ">CÜZDAN HEDİYE!</p></div>\
                            </a>')
                }

                if (EightDigits.utils.getCookie('ed-shown' + config.scenarioname) === null) {
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                    EightDigits.utils.setCookie('ed-shown' + config.scenarioname, 'on');
                }



            },
            start: function () {
                if (EightDigits.dataLayer.data.pageType === "category") {
                    main.factory.prototype.category();
                }
                else if (EightDigits.dataLayer.data.pageType === "product") {
                    main.factory.prototype.product();
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
                    if (EightDigits.utils.getCookie('ed-nshown' + config.scenarioname) === null) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                        EightDigits.utils.setCookie('ed-nshown' + config.scenarioname, 'on');
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
    var _ed_bedavaCuzdanBadge_Mobil = new EightDigits.sf();
    _ed_bedavaCuzdanBadge_Mobil.bedavaCuzdanBadge_Mobil();
})();

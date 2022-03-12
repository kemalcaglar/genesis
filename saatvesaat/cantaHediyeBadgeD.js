(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("bedavaCantaktBadge")) {
        return false
    }
    EightDigits.sf.prototype.bedavaCantaktBadge = function () {

        var config = {
            scenarioname: "bedavaCantaktBadge",
            analytics: "bedavaCantaktBadge",
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


                if (newDiscountedPrice >= 100) {
                    return true
                }
                else {
                    return false;
                }

            },
            category: function () {

                jQuery(".item").map(function () {


                    var newDiscountedPrice = jQuery(".price-box .special-price .price", this).attr("content");
                    var brand = jQuery(".brand", this).text().trim();
                    var productLink = jQuery('.product-image', this).attr('href');
                    if(jQuery('.basket-price',this).text().trim()===""){
                        newDiscountedPrice = Number(jQuery('.special-price .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                        console.log("Boş",newDiscountedPrice)
                    }
                    else{
                        newDiscountedPrice = Number(jQuery('.basket-price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                        console.log("Dolu",newDiscountedPrice)
                    }


                    var specialDiscount = main.factory.prototype.controlBrand(newDiscountedPrice, brand);


                    if (specialDiscount) {


                        if (jQuery(this).find('.ed-mainbedavaCantaktBadge').length === 0) {



                            jQuery('.product-image', this).prepend('\
                                                     <a href="' + productLink + '" style="color: black; text-decoration: none; cursor:pointer;">\
                                                             <div class="ed-mainbedavaCantaktBadge" style="position:absolute;top:30px; width:120px;">\
                                                                <div class="ed-canta-badge" style=" width: 100px; height: 27px; background-color: #d09494; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">ÇANTA HEDİYE!</p></div>\
                                                             </div>\
                                                    </a>')

                            if (EightDigits.utils.getCookie('ed-shown' + config.scenarioname) === null) {
                                EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                                EightDigits.utils.setCookie('ed-shown' + config.scenarioname, 'on');
                            }


                        }






                    }

                })




            },
            product: function () {
                var price ;
                if(Number(jQuery('.price-info .basket-price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'))===0){
                    price = Number(jQuery('.price-info .special-price .price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                }
                else{
                    price=Number(jQuery('.price-info .basket-price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                }
                var brand = jQuery('.product-definitions .h1').text().trim();
                if (main.factory.prototype.controlBrand(price, brand)) {
                    jQuery('.product-image-gallery').append('\
                    <a class="ed-canta-badge-container"  style="color: black; text-decoration: none; cursor:pointer;top:30px;position:absolute;">\
                                <div class="ed-mainbedavaCantaktBadge" style="position:absolute; width:120px;">\
                                <div class="ed-canta-badge" style=" width: 100px; height: 27px; background-color: #d09494; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">ÇANTA HEDİYE!</p></div>\
                                </div>\
                    </a>')
                    if(jQuery('.amlabel-txt').text().indexOf("ONLINE")<0){
                        jQuery('.ed-canta-badge-container').css("top","0px")
                    }
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
    var _ed_bedavaCantaktBadge = new EightDigits.sf();
    _ed_bedavaCantaktBadge.bedavaCantaktBadge();
})();

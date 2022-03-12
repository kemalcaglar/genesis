(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("bedavaCuzdanBadge")) {
        return false
    }
    EightDigits.sf.prototype.bedavaCuzdanBadge = function () {

        var config = {
            scenarioname: "bedavaCuzdanBadge",
            analytics: "bedavaCuzdanBadge",
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


                    var newDiscountedPrice = jQuery(".price-box .special-price .price", this).attr("content");
                    var brand = jQuery(".brand", this).text().trim();
                    var productLink = jQuery('.product-image', this).attr('href');
                    if(jQuery('.basket-price',this).text().trim()===""){
                        newDiscountedPrice = Number(jQuery('.special-price .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                    }
                    else{
                        newDiscountedPrice = Number(jQuery('.basket-price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                    }
                    // newDiscountedPrice=Number(jQuery('.price-box .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())

                    var specialDiscount = main.factory.prototype.controlBrand(newDiscountedPrice, brand);


                    if (specialDiscount) {


                        if (jQuery(this).find('.ed-mainbedavaCuzdanBadge').length === 0) {



                            jQuery('.product-image', this).prepend('\
                                                     <a href="' + productLink + '" style="color: black; text-decoration: none; cursor:pointer;position:absolute;top:30px;left:0px;width:120px;">\
                                                             <div class="ed-mainbedavaCuzdanBadge" >\
                                                                <div class="ed-cuzdan-badge" style=" width: 100px; height: 27px; background-color: #A31f37; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">CÜZDAN HEDİYE!</p></div>\
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
                var price =Number(jQuery('.price-info .price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                
                if(Number(jQuery('.price-info .basket-price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'))===0){
                    price = Number(jQuery('.price-info .special-price .price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                }
                else{
                    price=Number(jQuery('.price-info .basket-price').text().trim().split('TL')[0].replace('.', '').replace(',', '.'));
                }
                var brand = jQuery('.product-definitions .h1').text().trim();
                if (main.factory.prototype.controlBrand(price, brand)) {
                    jQuery('.product-image-gallery').append('\
                    <a class="ed-cuzdan-badge-container"  style="color: black; text-decoration: none; cursor:pointer;top:30px;position:absolute;">\
                                <div class="ed-mainbedavaCuzdanBadge" style="position:absolute; width:120px;">\
                                <div class="ed-cuzdan-badge" style=" width: 100px; height: 27px; background-color: #A31f37; display: block; z-index: 9; "><p style=" text-align: center; font-size: 12px; line-height: 27px; color: #fff; ">CÜZDAN HEDİYE!</p></div>\
                                </div>\
                    </a>')
                    if(jQuery('.amlabel-txt').text().indexOf("ONLINE")<0){
                        jQuery('.ed-cuzdan-badge-container').css("top","0px")
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
    var _ed_bedavaCuzdanBadge = new EightDigits.sf();
    _ed_bedavaCuzdanBadge.bedavaCuzdanBadge();
})();

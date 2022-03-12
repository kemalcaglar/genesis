(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("bedavaCantaktBadge_Mobil")) {
        return false
    }
    EightDigits.sf.prototype.bedavaCantaktBadge_Mobil = function () {

        var config = {
            scenarioname: "bedavaCantaktBadge_Mobil",
            analytics: "bedavaCantaktBadge_Mobil",
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

                if(newDiscountedPrice >= 1250 && brand === "Michael Kors"){
                    return true
               }
               else{
                   return false;
               }





            },
            category: function () {

                jQuery(".item").map(function () {


                    var newDiscountedPrice = jQuery(".price-box .special-price .price", this).attr("content");
                    var brand = jQuery(".product-brand", this).text().trim();
                    var productLink = jQuery('.product-image', this).attr('href');

                   console.log(brand,newDiscountedPrice);
                   
                   if(jQuery('.mnm-basket-badge span:eq(1)',this).text().trim()===""){
                    newDiscountedPrice = Number(jQuery('.special-price .price',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                    console.log("Boş",newDiscountedPrice)
                }
                else{
                    newDiscountedPrice = Number(jQuery('.mnm-basket-badge span:eq(1)',this).text().trim().split('TL')[0].replace('.','').replace(',','.').trim())
                    console.log("Dolu",newDiscountedPrice)
                }
                    var specialDiscount = main.factory.prototype.controlBrand(newDiscountedPrice, brand);


                    if (specialDiscount ) {
                       

                        
                        if (jQuery(this).find('.ed-mainbedavaCantaktBadge_Mobil').length === 0) {
                           


                            jQuery('.product-image', this).prepend('\
                                                     <a href="' + productLink + '" style="color: black; text-decoration: none; cursor:pointer;">\
                                                             <div class="ed-mainbedavaCantaktBadge_Mobil" style="position:absolute;bottom:-2px; width:100%;">\
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.39 22.85"><defs><style>.cls-1{opacity:0.9;}.cls-2{fill:#d09494;}.cls-3{fill:#fff;}</style></defs><title>Asset 5</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g class="cls-1"><rect class="cls-2" width="240.39" height="22.85"/></g><path class="cls-3" d="M76.23,7.37a3,3,0,0,0-2.35,1A4,4,0,0,0,73,11.08a4.11,4.11,0,0,0,.83,2.74,3,3,0,0,0,2.37,1,7.87,7.87,0,0,0,2.15-.34v.92a6.44,6.44,0,0,1-2.31.36A3.94,3.94,0,0,1,73,14.51a5,5,0,0,1-1.09-3.44,5.42,5.42,0,0,1,.53-2.45A3.8,3.8,0,0,1,73.92,7a4.56,4.56,0,0,1,2.32-.57A5.71,5.71,0,0,1,78.73,7l-.45.9A4.8,4.8,0,0,0,76.23,7.37Zm.76,10a1,1,0,0,1-.47.92,2.45,2.45,0,0,1-1.4.33,3.61,3.61,0,0,1-.59-.05v-.66a4,4,0,0,0,.64,0,1.81,1.81,0,0,0,.74-.12.52.52,0,0,0,0-.89,2.46,2.46,0,0,0-.91-.27l.54-1.1h.68l-.34.71Q77,16.54,77,17.38Z"/><path class="cls-3" d="M86.68,15.59l-1.12-2.87H81.94l-1.12,2.87H79.76l3.57-9.06h.89l3.55,9.06Zm-1.45-3.81-1-2.8a13.42,13.42,0,0,1-.42-1.3A12.06,12.06,0,0,1,83.37,9l-1.06,2.8Z"/><path class="cls-3" d="M96.72,15.59h-1.2L90.59,8h0c.06.89.1,1.71.1,2.45v5.13h-1v-9h1.18l4.92,7.55h0c0-.11,0-.47,0-1.07s0-1,0-1.29V6.56h1Z"/><path class="cls-3" d="M102.64,15.59h-1V7.5H98.73V6.56h6.77V7.5h-2.86Z"/><path class="cls-3" d="M113.19,15.59l-1.12-2.87h-3.62l-1.11,2.87h-1.07l3.58-9.06h.88l3.55,9.06Zm-1.45-3.81-1-2.8c-.13-.36-.27-.79-.42-1.3a12.06,12.06,0,0,1-.39,1.3l-1.06,2.8Z"/><path class="cls-3" d="M127,15.59h-1V11.34h-4.76v4.25h-1v-9h1V10.4h4.76V6.56h1Z"/><path class="cls-3" d="M135.15,15.59h-5v-9h5V7.5h-4v2.9h3.75v.93h-3.75v3.32h4Z"/><path class="cls-3" d="M145,11a4.56,4.56,0,0,1-1.22,3.42,4.79,4.79,0,0,1-3.49,1.18h-2.5v-9h2.76a4.43,4.43,0,0,1,3.28,1.17A4.41,4.41,0,0,1,145,11Zm-1.12,0A3.62,3.62,0,0,0,143,8.37a3.55,3.55,0,0,0-2.64-.9h-1.52v7.21h1.28a3.86,3.86,0,0,0,2.82-.92A3.63,3.63,0,0,0,143.9,11Z"/><path class="cls-3" d="M147.6,4.9a.68.68,0,0,1,.17-.51.62.62,0,0,1,.44-.17.61.61,0,0,1,.42.17.66.66,0,0,1,.18.51.7.7,0,0,1-.18.52.61.61,0,0,1-.42.17.62.62,0,0,1-.44-.17A.74.74,0,0,1,147.6,4.9Zm.09,10.69v-9h1.05v9Z"/><path class="cls-3" d="M154.17,11.08l2.41-4.52h1.14l-3,5.53v3.5h-1.06V12.14l-3-5.58h1.15Z"/><path class="cls-3" d="M164.65,15.59h-5v-9h5V7.5h-4v2.9h3.75v.93h-3.75v3.32h4Z"/><path class="cls-3" d="M167,14.94q0-.84.75-.84a.72.72,0,0,1,.55.21.93.93,0,0,1,.19.63.88.88,0,0,1-.19.61.71.71,0,0,1-.55.22.76.76,0,0,1-.54-.19A.85.85,0,0,1,167,14.94Zm1.08-1.84h-.65l-.31-6.54h1.27Z"/></g></g></svg>\
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
                            <div class="ed-mainbedavaCantaktBadge_Mobil" style="position:absolute;bottom:0px; width:100%;z-index:3;">\
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.39 22.85"><defs><style>.cls-1{opacity:0.9;}.cls-2{fill:#d09494;}.cls-3{fill:#fff;}</style></defs><title>Asset 5</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g class="cls-1"><rect class="cls-2" width="240.39" height="22.85"/></g><path class="cls-3" d="M76.23,7.37a3,3,0,0,0-2.35,1A4,4,0,0,0,73,11.08a4.11,4.11,0,0,0,.83,2.74,3,3,0,0,0,2.37,1,7.87,7.87,0,0,0,2.15-.34v.92a6.44,6.44,0,0,1-2.31.36A3.94,3.94,0,0,1,73,14.51a5,5,0,0,1-1.09-3.44,5.42,5.42,0,0,1,.53-2.45A3.8,3.8,0,0,1,73.92,7a4.56,4.56,0,0,1,2.32-.57A5.71,5.71,0,0,1,78.73,7l-.45.9A4.8,4.8,0,0,0,76.23,7.37Zm.76,10a1,1,0,0,1-.47.92,2.45,2.45,0,0,1-1.4.33,3.61,3.61,0,0,1-.59-.05v-.66a4,4,0,0,0,.64,0,1.81,1.81,0,0,0,.74-.12.52.52,0,0,0,0-.89,2.46,2.46,0,0,0-.91-.27l.54-1.1h.68l-.34.71Q77,16.54,77,17.38Z"/><path class="cls-3" d="M86.68,15.59l-1.12-2.87H81.94l-1.12,2.87H79.76l3.57-9.06h.89l3.55,9.06Zm-1.45-3.81-1-2.8a13.42,13.42,0,0,1-.42-1.3A12.06,12.06,0,0,1,83.37,9l-1.06,2.8Z"/><path class="cls-3" d="M96.72,15.59h-1.2L90.59,8h0c.06.89.1,1.71.1,2.45v5.13h-1v-9h1.18l4.92,7.55h0c0-.11,0-.47,0-1.07s0-1,0-1.29V6.56h1Z"/><path class="cls-3" d="M102.64,15.59h-1V7.5H98.73V6.56h6.77V7.5h-2.86Z"/><path class="cls-3" d="M113.19,15.59l-1.12-2.87h-3.62l-1.11,2.87h-1.07l3.58-9.06h.88l3.55,9.06Zm-1.45-3.81-1-2.8c-.13-.36-.27-.79-.42-1.3a12.06,12.06,0,0,1-.39,1.3l-1.06,2.8Z"/><path class="cls-3" d="M127,15.59h-1V11.34h-4.76v4.25h-1v-9h1V10.4h4.76V6.56h1Z"/><path class="cls-3" d="M135.15,15.59h-5v-9h5V7.5h-4v2.9h3.75v.93h-3.75v3.32h4Z"/><path class="cls-3" d="M145,11a4.56,4.56,0,0,1-1.22,3.42,4.79,4.79,0,0,1-3.49,1.18h-2.5v-9h2.76a4.43,4.43,0,0,1,3.28,1.17A4.41,4.41,0,0,1,145,11Zm-1.12,0A3.62,3.62,0,0,0,143,8.37a3.55,3.55,0,0,0-2.64-.9h-1.52v7.21h1.28a3.86,3.86,0,0,0,2.82-.92A3.63,3.63,0,0,0,143.9,11Z"/><path class="cls-3" d="M147.6,4.9a.68.68,0,0,1,.17-.51.62.62,0,0,1,.44-.17.61.61,0,0,1,.42.17.66.66,0,0,1,.18.51.7.7,0,0,1-.18.52.61.61,0,0,1-.42.17.62.62,0,0,1-.44-.17A.74.74,0,0,1,147.6,4.9Zm.09,10.69v-9h1.05v9Z"/><path class="cls-3" d="M154.17,11.08l2.41-4.52h1.14l-3,5.53v3.5h-1.06V12.14l-3-5.58h1.15Z"/><path class="cls-3" d="M164.65,15.59h-5v-9h5V7.5h-4v2.9h3.75v.93h-3.75v3.32h4Z"/><path class="cls-3" d="M167,14.94q0-.84.75-.84a.72.72,0,0,1,.55.21.93.93,0,0,1,.19.63.88.88,0,0,1-.19.61.71.71,0,0,1-.55.22.76.76,0,0,1-.54-.19A.85.85,0,0,1,167,14.94Zm1.08-1.84h-.65l-.31-6.54h1.27Z"/></g></g></svg>\
                            </div>\
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
    var _ed_bedavaCantaktBadge_Mobil = new EightDigits.sf();
    _ed_bedavaCantaktBadge_Mobil.bedavaCantaktBadge_Mobil();
})();

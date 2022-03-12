





   (function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Sepet_Bos_Sizin_icin_Oneriler")) {
        return false
    }
    EightDigits.sf.prototype.Sepet_Bos_Sizin_icin_Oneriler = function () {

        var config = {
            scenarioname: "Sepet_Bos_Sizin_icin_Oneriler",
            analytics: "Sepet_Bos_Sizin_icin_Oneriler",
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
            
            start: function () {
               



                

                if(jQuery('.alert-content h3').text().includes("Sepetinizde ürün bulunmamaktadır.")){
                    setTimeout(()=>{
    
                        var seturEmptyBasketProduct = [
                            {
                              name: "NG Sapanca Wellness & Convention",
                              href: "https://www.setur.com.tr/ng-sapanca-wellness-convention",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/setur-ng-sapanca-genel-(1)_311128.jpg",
                              location:"Sapanca",
                              info:"Yarım Pansiyon"
                            },
                            {
                              name: "Abant Palace",
                              href: "https://www.setur.com.tr/abant-palace",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/abant-palace-genel-6c2e95ee-a35e-4b83-8ffe-501eae82db33.jpg",
                              location:"Abant",
                              info:"Yarım Pansiyon"
                            },
                              {
                              name: "Büyük Abant Oteli & Kongre Merkezi",
                              href: "https://www.setur.com.tr/buyuk-abant-oteli-kongre-merkezi",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/setur-buyuk-abant-oteli-kongre-merkezi-genel-(3)_310028.jpg",
                              location:"Abant",
                              info:" Yarım Pansiyon"
                            },
                          
                            {
                              name: "NG Afyon",
                              href: "https://www.setur.com.tr/ng-afyon",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/setur-ng-afyon-genel-(3)_310896.jpg",
                              location:"Merkez",
                              info:"Yarım Pansiyon"
                            },
                            {
                              name: "İkbal Thermal Hotel & Spa",
                              href: "https://www.setur.com.tr/ikbal-thermal-hotel-spa",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/dis-cephe-gunduz_150245.jpg",
                              location:"Merkez",
                              info:"Yarım Pansiyon"
                            },
                          
                            {
                              name: "Akrones Thermal Spa Convention Sport Hotel",
                              href: "https://www.setur.com.tr/akrones-thermal-spa-convention-sport-hotel",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/akrones-thermal-spa-convention-sport-hotel-genel-873ed633-dbcc-420b-b724-56e0872876a8.jpg",
                              location:"Merkez",
                              info:"Yarım Pansiyon"
                            },
                            {
                              name: "Richmond Nua Wellness Spa Sapanca",
                              href: "https://www.setur.com.tr/richmond-nua-wellness-spa",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/setur-richmond-nua-wellness-spa-hotel-genel-(1)_309786.jpg",
                              location:"Sapanca",
                              info:"Oda Kahvaltı"
                            },
                            {
                              name: "Gazelle Resort & Spa",
                              href: "https://www.setur.com.tr/gazelle-resort-spa",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/gazelle-resort-spa-genel-78a6ae87-9af3-4975-8fe4-cb1268f69f21.jpg",
                              location:"Merkez",
                              info:"Yarım Pansiyon"
                            },
                            {
                              name: "Limak Thermal Boutique Hotel",
                              href: "https://www.setur.com.tr/limak-thermal-boutique-hotel",
                              src: "https://cdn2.setur.com.tr/image/hotel/large/IMG_0061_37083.jpg",
                              location:"Yalova",
                              info:"Yarım Pansiyon"
                            },
                            {
                                name: "Longosphere Glamping",
                                href: "https://www.setur.com.tr/longosphere-glamping",
                                src: "https://cdn2.setur.com.tr/image/hotel/large/longosphere-glamping-genel-69f3ff35-0a93-4eff-ac44-e4c2042446f6.jpg",
                                location:"Demirköy",
                                info:"Sadece Oda"
                              },
                         
                        
                          ]
                        
                          var seturEmptyBasketProductHTML = `
                        <div id='smpl-sepet-product-container' style="display:flex;flex-direction:column;justify-content:center;padding-top:20px;margin-bottom:30px;">
                        <div class="section-title" style='margin-left:15px;' >
                            <h3 style='margin-bottom:20px;font-size:30px!important;font-weight:600;'>Sizin İçin Önerilenler</h3>
                        </div>
                        <div class="product-area" id="smpl-product-area" style="display:flex;justify-content:center;margin:0 auto;position:relative;width:100%;overflow:hidden;">
                        <div id="ed-right_" type="button" style="cursor:pointer;z-index:99999;position: absolute;bottom:0px;right:0px;border-radius:50%;width:42px;height:42px;cursor:pointer;font-size:24px;border:none;background-color:#b3b3b3;color:white;display:flex;justify-content:center;align-items:center;"><i class="fal fa-angle-right"></i></div>\
                        <div id="ed-left_" type="button" style="cursor:pointer;z-index:99999;position: absolute;bottom:0px;right:50px;border-radius:50%;width:42px;height:42px;cursor:pointer;font-size:24px;border:none;background-color:#b3b3b3;color:white;display:flex;justify-content:center;align-items:center;"><i class="fal fa-angle-left"></i></div>\
                        <ul  class="owl-carousel populer-carousel owl-theme">`;
                        
                        
                          seturEmptyBasketProduct.map((product, index) => {
                              seturEmptyBasketProductHTML += '<li id="smpl-sepet-product" style="margin-left:10px;border-radius:3px;box-shadow: 0 0 3px rgba(0,0,0,.15);padding:10px;border: .5px solid #e5e5e5!important;width:calc(100% - 20px);list-style:none;">\
                        <div class="pitem" >\
                            <a class="smpl-empty-basket-btn" target="_blank" href="'+ product.href + '" title="' + product.name + '">\
                                <img class="lazy" alt="'+ product.name + '" src="' + product.src + '" style="display: block;height:250px;">\
                            </a>\
                            <h4 style="margin-top:10px;">\
                                <a id="smpl-empty-basket-productName" style="font-size:16px;font-weight:600;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;text-overflow: ellipsis;" class="smpl-empty-basket-btn" target="_blank" href="'+ product.href + '" title="' + product.name + '">' + product.name + '</a></h4>\
                                <p class="hotellist-item-subinfo w-100">\
                                                    <span class="hotellist-hotel-address" style="margin-right:20px;">\
                                                        <i  style="color:#2680eb;font-weight:600;padding-right:3px;" class="fal fa-map-marker-alt"></i>\
                                                       '+product.location+'\
                                                    </span>\
                                                    <span class="hotellist-hotel-boardtype">\
                                                        <i style="color:#555;font-weight:600;padding-right:3px;" class="fal fa-concierge-bell"></i>\
                                                        '+product.info+'\
                                                    </span>\
                                                </p>\
                                                <a class="smpl-empty-basket-btn" href='+product.href+' title="' + product.name + '" target="_blank" style="width:200px;margin-top:20px;display:block;margin-left:auto;height:34px;">\
                                                                    <div  style="background-color: #dc242d;width: 20%;float: left;padding: 5px;border-radius: 5px 0 0 5px;height:34px;display:flex;align-items:center;">\
                                                                        <img style="height:15px;" src="https://seturtourismcdnstorage.blob.core.windows.net/image/icon/search-regular.svg">\
                                                                    </div>\
                                                                    <div  style="background-color: #ee3342;width: 80%;text-align: center;color: #fff;float: right;font-size: 15px;padding: 5px;font-weight: 100;border-radius: 0 5px 5px 0;">İNCELE</div>\
                                                                </a>\
                        </div>\
                        </li>';
                           
                          })
                          seturEmptyBasketProductHTML += `
                        </ul>
                        </div>
                        </div>`;
                        
                          jQuery('.booking-item-details').append(seturEmptyBasketProductHTML);
                            jQuery(".populer-carousel").owlCarousel({
                                loop:true,
                                nav:true,
                                navText:["<",">"],
                                responsiveClass:true,
                                responsive:{
                                    0:{
                                        items:1
                                    },
                                    768:{
                                        items:2
                                    },
                                    1200:{
                                        items:3
                                    }
                                },
                                dots: false
                            });
                          jQuery('#smpl-product-area .owl-next').addClass("smpl-owl-next");
                          jQuery('#smpl-product-area .owl-prev').addClass("smpl-owl-prev");
                          jQuery('#smpl-sepet-product-container .owl-item').css({"height":"auto","display":"flex","justify-content":"center"});
                            if(window.innerWidth<1024){
                                jQuery('.section-title h3').attr('style','margin-bottom:5px;font-size:21px!important;font-weight:600;')
                                jQuery('.section-title').css("margin-left","0px");
                                jQuery('#ed-left_').css({"width":"36px","height":"36px","background-color":"transparent","border":"1px solid white","left":"20px","top": ""+ ((jQuery('.pitem img:eq(0)').height()-36)+40)/2+"px"})
                                jQuery('#ed-right_').css({"width":"36px","height":"36px","background-color":"transparent","border":"1px solid white","right":"20px","top":""+ ((jQuery('.pitem img:eq(0)').height()-36)+40)/2+"px"})
                                jQuery('#ed-left_ i').css({"font-size": "34px","margin-right":"3px"});
                                jQuery('#ed-right_ i').css({"font-size": "34px","margin-left":"3px"});
                                if(window.innerWidth<767){
                                    jQuery('#smpl-sepet-product-container #smpl-sepet-product').css({"width":"100%","margin-left":"0px"})
                                }
                                else{
                                    jQuery('#smpl-sepet-product-container #smpl-sepet-product').css({"width":"100%","margin-right":"10px","margin-left":"0px"})
                                    jQuery('#ed-left_').css("left","15px");
                                    jQuery('#ed-right_').css("right","25px");
                                }
                               
                               
                            }
                            else{
                                jQuery('#smpl-sepet-product-container .owl-carousel').css("margin-bottom","50px");
                                jQuery('#main-footer').css("position","");
                            }
                            if(window.innerWidth<350){
                                jQuery('#smpl-sepet-product-container .hotellist-hotel-address').css("margin-right","5px");
                            }
                            var owl = jQuery('#smpl-sepet-product-container .owl-carousel');
                            jQuery('#ed-right_').click(function() {
                                owl.trigger('next.owl.carousel');
                            })
                            jQuery('#ed-left_').click(function() {
                                owl.trigger('prev.owl.carousel');
                            })
                            jQuery('.owl-nav').css("display","none");
                            EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                
                           jQuery('#smpl-sepet-product-container #smpl-sepet-product').mouseenter(function(){
                               jQuery(this).find("#smpl-empty-basket-productName").css("-webkit-line-clamp","2");
                           }).mouseleave(function(){
                            jQuery(this).find("#smpl-empty-basket-productName").css("-webkit-line-clamp","1");
                           })
                          jQuery('.smpl-empty-basket-btn').click(function () {
                              EightDigits.analytics.sendEvent(config.analytics, 'Click_'+jQuery(this).attr('title'));
                
                          })
                        },1000)
                }
                
   
    
        
        
  
        jQuery('.btnBasketDelete').click(function(){
          
                
           var deleteCatch = setInterval(()=>{
                    if(jQuery('.alert-content h3').text().includes("Sepetinizde ürün bulunmamaktadır.") && !jQuery('#smpl-sepet-product-container').length>0){

                    var seturEmptyBasketProduct = [
                        {
                          name: "Hedef Resort & Spa",
                          href: "https://www.setur.com.tr/hedef-resort-spa",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/setur-hedef-resort-spa-genel-(3)_320466.jpg",
                          location:"Konaklı | Alanya",
                          info:"Ultra Herşey Dahil"
                        },
                        {
                          name: "Robinson Club Nobilis",
                          href: "https://www.setur.com.tr/robinson-club-nobilis",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/robinson-club-nobilis-genel-c2f049ed-b112-442c-a55a-36cc24b3c7c0.jpg",
                          location:"Belek | Serik",
                          info:" Her Şey Dahil"
                        },
                          {
                          name: "Hotel Turan Prince",
                          href: "https://www.setur.com.tr/hotel-turan-prince",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/hotel-turan-prince-genel-c722457a-70d7-447d-9757-cd650b064b41.jpg",
                          location:"Side | Manavgat",
                          info:" Her Şey Dahil"
                        },
                      
                        {
                          name: "Club Marco Polo",
                          href: "https://www.setur.com.tr/club-marco-polo",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/club-marco-polo-genel-2c217b68-32d3-49ee-a279-51ef5957b19c.jpg",
                          location:"Çamyuva | Kemer",
                          info:"Ultra Her Şey Dahil"
                        },
                        {
                          name: "Süral Resort Hotel",
                          href: "https://www.setur.com.tr/sural-resort-hotel",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/sural-resort-hotel-genel-771388a2-7137-419b-a0fc-975d69d17a01.jpg",
                          location:"Side | Manavgat",
                          info:"Her Şey Dahil"
                        },
                      
                        {
                          name: "The Bay Beach Club",
                          href: "https://www.setur.com.tr/the-bay-beach-club",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/the-bay-beach-club-genel-c88dbb8b-e006-4d5b-aa9a-68dba83c3848.jpg",
                          location:"Günlüklü | Fethiye",
                          info:"Tam Pansiyon Plus"
                        },
                        {
                          name: "Tui Blue Ephesus Otel & Aqua Fantasy Aqua Park Tatil Köyü",
                          href: "https://www.setur.com.tr/tui-blue-ephesus-otel-aqua-fantasy-aqua-park-tatil-koyu",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/setur-tui-family-life-ephesus-genel-(1)_423275.jpg",
                          location:"Pamucak | Kuşadası",
                          info:"Ultra Her Şey Dahil"
                        },
                        {
                          name: "Grand Park Bodrum",
                          href: "https://www.setur.com.tr/grand-park-bodrum",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/grand-park-bodrum-genel-d9fb90b3-415d-475e-8c41-00e9e1543cdd.jpg",
                          location:"Turgutreis | Bodrum",
                          info:"Ultra Her Şey Dahil"
                        },
                        {
                          name: "Xanadu Island",
                          href: "https://www.setur.com.tr/xanadu-island",
                          src: "https://cdn2.setur.com.tr/image/hotel/large/setur-xanadu-island-genel-(2)_347188.jpg",
                          location:"Akyarlar | Bodrum",
                          info:"Ultra Her Şey Dahil"
                        },
                        {
                            name: "Altın Yunus Resort & Thermal Hotel",
                            href: "https://www.setur.com.tr/altin-yunus-resort-thermal-hotel",
                            src: "https://cdn2.setur.com.tr/image/hotel/large/genel_222801.jpg",
                            location:"Boyalık | Çesme",
                            info:"Oda Kahvaltı"
                          },
                     
                    
                      ]
                    
                      var seturEmptyBasketProductHTML = `
                    <div id='smpl-sepet-product-container' style="display:flex;flex-direction:column;justify-content:center;padding-top:20px;margin-bottom:30px;">
                    <div class="section-title" style='margin-left:15px;' >
                        <h3 style='margin-bottom:20px;font-size:30px!important;font-weight:600;'>Sizin İçin Önerilenler</h3>
                    </div>
                    <div class="product-area" id="smpl-product-area" style="display:flex;justify-content:center;margin:0 auto;position:relative;width:100%;overflow:hidden;">
                    <div id="ed-right_" type="button" style="cursor:pointer;z-index:99999;position: absolute;bottom:0px;right:0px;border-radius:50%;width:42px;height:42px;cursor:pointer;font-size:24px;border:none;background-color:#b3b3b3;color:white;display:flex;justify-content:center;align-items:center;"><i class="fal fa-angle-right"></i></div>\
                    <div id="ed-left_" type="button" style="cursor:pointer;z-index:99999;position: absolute;bottom:0px;right:50px;border-radius:50%;width:42px;height:42px;cursor:pointer;font-size:24px;border:none;background-color:#b3b3b3;color:white;display:flex;justify-content:center;align-items:center;"><i class="fal fa-angle-left"></i></div>\
                    <ul  class="owl-carousel populer-carousel owl-theme">`;
                    
                    
                      seturEmptyBasketProduct.map((product, index) => {
                          seturEmptyBasketProductHTML += '<li id="smpl-sepet-product" style="margin-left:10px;border-radius:3px;box-shadow: 0 0 3px rgba(0,0,0,.15);padding:10px;border: .5px solid #e5e5e5!important;width:calc(100% - 20px);list-style:none;">\
                    <div class="pitem" >\
                        <a class="smpl-empty-basket-btn" target="_blank" href="'+ product.href + '" title="' + product.name + '">\
                            <img class="lazy" alt="'+ product.name + '" src="' + product.src + '" style="display: block;height:250px;">\
                        </a>\
                        <h4 style="margin-top:10px;">\
                            <a id="smpl-empty-basket-productName" style="font-size:16px;font-weight:600;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;text-overflow: ellipsis;" class="smpl-empty-basket-btn" target="_blank" href="'+ product.href + '" title="' + product.name + '">' + product.name + '</a></h4>\
                            <p class="hotellist-item-subinfo w-100">\
                                                <span class="hotellist-hotel-address" style="margin-right:20px;">\
                                                    <i  style="color:#2680eb;font-weight:600;padding-right:3px;" class="fal fa-map-marker-alt"></i>\
                                                   '+product.location+'\
                                                </span>\
                                                <span class="hotellist-hotel-boardtype">\
                                                    <i style="color:#555;font-weight:600;padding-right:3px;" class="fal fa-concierge-bell"></i>\
                                                    '+product.info+'\
                                                </span>\
                                            </p>\
                                            <a class="smpl-empty-basket-btn" href='+product.href+' title="' + product.name + '" target="_blank" style="width:200px;margin-top:20px;display:block;margin-left:auto;height:34px;">\
                                                                <div  style="background-color: #dc242d;width: 20%;float: left;padding: 5px;border-radius: 5px 0 0 5px;height:34px;display:flex;align-items:center;">\
                                                                    <img style="height:15px;" src="https://seturtourismcdnstorage.blob.core.windows.net/image/icon/search-regular.svg">\
                                                                </div>\
                                                                <div  style="background-color: #ee3342;width: 80%;text-align: center;color: #fff;float: right;font-size: 15px;padding: 5px;font-weight: 100;border-radius: 0 5px 5px 0;">İNCELE</div>\
                                                            </a>\
                    </div>\
                    </li>';
                       
                      })
                      seturEmptyBasketProductHTML += `
                    </ul>
                    </div>
                    </div>`;
                    
                      jQuery('.booking-item-details').append(seturEmptyBasketProductHTML);
                        jQuery(".populer-carousel").owlCarousel({
                            loop:true,
                            nav:true,
                            navText:["<",">"],
                            responsiveClass:true,
                            responsive:{
                                0:{
                                    items:1
                                },
                                768:{
                                    items:2
                                },
                                1200:{
                                    items:3
                                }
                            },
                            dots: false
                        });
                      jQuery('#smpl-product-area .owl-next').addClass("smpl-owl-next");
                      jQuery('#smpl-product-area .owl-prev').addClass("smpl-owl-prev");
                      jQuery('#smpl-sepet-product-container .owl-item').css({"height":"auto","display":"flex","justify-content":"center"});
                        if(window.innerWidth<1024){
                            jQuery('.section-title h3').attr('style','margin-bottom:5px;font-size:21px!important;font-weight:600;')
                            jQuery('.section-title').css("margin-left","0px");
                            jQuery('#ed-left_').css({"width":"36px","height":"36px","background-color":"transparent","border":"1px solid white","left":"20px","top": ""+ ((jQuery('.pitem img:eq(0)').height()-36)+40)/2+"px"})
                            jQuery('#ed-right_').css({"width":"36px","height":"36px","background-color":"transparent","border":"1px solid white","right":"20px","top":""+ ((jQuery('.pitem img:eq(0)').height()-36)+40)/2+"px"})
                            jQuery('#ed-left_ i').css({"font-size": "34px","margin-right":"3px"});
                            jQuery('#ed-right_ i').css({"font-size": "34px","margin-left":"3px"});
                            if(window.innerWidth<767){
                                jQuery('#smpl-sepet-product-container #smpl-sepet-product').css({"width":"100%","margin-left":"0px"})
                            }
                            else{
                                jQuery('#smpl-sepet-product-container #smpl-sepet-product').css({"width":"100%","margin-right":"10px","margin-left":"0px"})
                                jQuery('#ed-left_').css("left","15px");
                                jQuery('#ed-right_').css("right","25px");
                            }
                           
                           
                        }
                        else{
                            jQuery('#smpl-sepet-product-container .owl-carousel').css("margin-bottom","50px");
                            jQuery('#main-footer').css("position","");
                        }
                        if(window.innerWidth<350){
                            jQuery('#smpl-sepet-product-container .hotellist-hotel-address').css("margin-right","5px");
                        }
                        var owl = jQuery('#smpl-sepet-product-container .owl-carousel');
                        jQuery('#ed-right_').click(function() {
                            owl.trigger('next.owl.carousel');
                        })
                        jQuery('#ed-left_').click(function() {
                            owl.trigger('prev.owl.carousel');
                        })
                        jQuery('.owl-nav').css("display","none");
                        EightDigits.analytics.sendEvent(config.analytics, 'Shown');
            
                       jQuery('#smpl-sepet-product-container #smpl-sepet-product').mouseenter(function(){
                           jQuery(this).find("#smpl-empty-basket-productName").css("-webkit-line-clamp","2");
                       }).mouseleave(function(){
                        jQuery(this).find("#smpl-empty-basket-productName").css("-webkit-line-clamp","1");
                       })
                      jQuery('.smpl-empty-basket-btn').click(function () {
                          EightDigits.analytics.sendEvent(config.analytics, 'Click_'+jQuery(this).attr('title'));
            
                      })
                      clearInterval(deleteCatch);
                    }
                    },1000)
            
        
        })
           





            },
            control: function () {
              
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
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
    var _ed_Sepet_Bos_Sizin_icin_Oneriler = new EightDigits.sf();
    _ed_Sepet_Bos_Sizin_icin_Oneriler.Sepet_Bos_Sizin_icin_Oneriler();
})();



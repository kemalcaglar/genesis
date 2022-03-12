/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
    initialize({ type: TYPE_EMBEDED }, (config) => {
      onChangeConfig((newConfig) => {
        console.log('new Config', newConfig);
      });
  
      toggleShow((status) => {
        if (!options.controlVariation) {
          if (status) {
            
  
            
  
  
  window.addEventListener('router.changed',function(e){
  
      setTimeout(function(){
           if(window.location.href.indexOf("sepet")>-1){
           if(!(jQuery('.clearfix.component.component-dynamic.component-collected.component-init .-mw-dynamic.-mw-dynamic-calculate-height .-mw-dynamic-object.-mw-dynamic-object-text.size-to-fit .-mw-text-inner').text().indexOf("Ücretsiz")>-1)){
               if(jQuery('body').find(".complete-basket-area").length==0){
                   smplSendHTML();
               }
               else{
                   jQuery('body').find('#complete-basket-kulakcik').show();
                   jQuery('body').find(".complete-basket-area").show();
                    jQuery('#complete-basket-kulakcik').removeClass('passive');
                   jQuery('#complete-basket-kulakcik').addClass('active');
  
                   setTimeout(function(){
                       jQuery('.complete-basket-area').show();
                       jQuery('.complete-basket-scroll').removeClass('passive');
                       jQuery('.complete-basket-scroll').addClass('active');
                   },2500)
               }
               }
           else{
              jQuery('#complete-basket-kulakcik').removeClass('active');
              jQuery('#complete-basket-kulakcik').addClass('passive');
              jQuery('.complete-basket-scroll').addClass('passive');
              setTimeout(function(){
               jQuery('body').find(".complete-basket-area").hide();
  
               jQuery('body').find('#complete-basket-kulakcik').hide();
              },2005)
   
       
           }
          
       }
       else{
       jQuery('#complete-basket-kulakcik').removeClass('active');
              jQuery('#complete-basket-kulakcik').addClass('passive');
              jQuery('.complete-basket-scroll').addClass('passive');
              setTimeout(function(){
               jQuery('body').find(".complete-basket-area").hide();
  
               jQuery('body').find('#complete-basket-kulakcik').hide();
              },2005)
       }
      },250)
   
   
   })
   if(window.location.href.indexOf("sepet")>-1 && !(jQuery('.clearfix.component.component-dynamic.component-collected.component-init .-mw-dynamic.-mw-dynamic-calculate-height .-mw-dynamic-object.-mw-dynamic-object-text.size-to-fit .-mw-text-inner').text().indexOf("Ücretsiz")>-1)){
       smplSendHTML();
   }
   
    function smplSendHTML(){
   
       var BasketList = [
      {
        name: "Bitter Çikolata İncileri (43 g)",
        href: "https://www.godiva.com.tr/pearls-dark",
        src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/d/a/dark_pearls_-_72222.jpg",
        price:"17,00 TL",
        discountedPrice : ''
      },
          {
        name: "Sütlü Çikolata İncileri (43 g)",
    href:"https://www.godiva.com.tr/pearls-milk-se",
        src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/p/e/pearls_milk_-_72221.jpg",
      price: "17,00 TL",
      discountedPrice : ''
      },
      {
      name:'Mini Bars Sütlü,Tuzlu Karamelli (8 Adet Stick Çikolata)',
        href: "https://www.godiva.com.tr/god-stick-milk-salt-crml-90gr",
        src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/i/signature_mini_bars_-_tuzlu_karamelli_s_tl_-_8_adet_stick_ikolata_n_.jpg",
        price:'20,00 TL',
        discountedPrice : ''
      },
      {
          name:'Mini Bars Sütlü (8 Adet Stick Çikolata)',
            href: "https://www.godiva.com.tr/god-stick-milk-chocolate-90gr",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/i/signature_mini_bars_-_s_tl_-_8_adet_stick_ikolata_n_1_.jpg",
            price:'20,00 TL',
            discountedPrice : ''
  
      },
      {
          name:'Mini Bars Deniz Tuzlu Bitter (8 Adet Stick Çikolata)',
            href: "https://www.godiva.com.tr/godiva-stick-dark-sea-salt-90gx12x2-us",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/i/signature_mini_bars_-_deniz_tuzlu_bitter_-_8_adet_stick_ikolata_n_.jpg",
            price:'20,00 TL',
            discountedPrice : ''
      },
      {
          name:'Mini Bars Kavrulmus Bademli Bitter (8 Adet Stick Çikolata )',
            href: "https://www.godiva.com.tr/god-stick-dark-almond-90gr",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/i/signature_mini_bars_-_kavrulmus_bademli_bitter_-_8_adet_stick_ikolata_n_.jpg",
            price:'20,00 TL',
            discountedPrice : ''
      },
      {
          name:'Mini Bars %72 Bitter (8 Adet Stick Çikolata)',
            href: "https://www.godiva.com.tr/godiva-stick-72-dark-choco-90gx12x2-us",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/i/signature_mini_bars_-_72_bitter_-_8_adet_stick_ikolata_n_.jpg",
            price:'20,00 TL',
            discountedPrice : ''
      },
      {
          name:'Sütlü Tablet Çikolata (100 g)',
            href: "https://www.godiva.com.tr/milk-chocolate-tablet-100g",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/s/_/s_tl_tablet_kolata_100g_-_milk_chocolate_tablet_100g_-_72130_-_2.jpg",
            price:'36,00 TL',
            discountedPrice : ''
      },
      {
          name:'%72 Bitter Tablet Çikolata (100 g)',
            href: "https://www.godiva.com.tr/dark-72-tablet-100g",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/_/7/_72_b_tter_tablet_kolata_100g_-_72_dark_chocolate_tablet_100g_-_72132_-_2.jpg",
            price:'36,00 TL',
            discountedPrice : ''
      },
      {
          name:'Tuzlu Karamelli Sütlü Tablet Çikolata (100 g)',
            href: "https://www.godiva.com.tr/milk-salted-caramel-tablet-100g",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/t/u/tuzlu_karamell_s_tl_tablet_kolata_100g_-_salted_caramel_milk_chocolate_tablet_100g_-_72133.jpg",
            price:'36,00 TL',
            discountedPrice : ''
      },
      {
          name:'Bademli Bitter Tablet Çikolata (100 g)',
            href: "https://www.godiva.com.tr/dark-almond-tablet-100g",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/b/a/bademl_b_tter_tablet_kolata_100g_-_dark_almond_chocolate_tablet_100g_-_72134.jpg",
            price:'36,00 TL',
            discountedPrice : ''
  
      },
      {
          name:'Prestij Bisküvi Kutu (12 Adet Sütlü Çikolatalı Bisküvi)',
            href: "https://www.godiva.com.tr/mono-pack-lady-godiva-milk-12pc",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/7/7/77323_-_lady_godiva_s_tl_-_lady_godiva_milk.jpg",
            price:'60,00 TL',
            discountedPrice : ''
      },
      {
          name:'3\'Lü Çikolata İncileri Seti',
            href: "https://www.godiva.com.tr/godiva-cikolata-cesitleri-cikolata-toplari-3",
            src: "https://mnj4pext.rocketcdn.com/cache/480/480/godivatr/catalog/product/2/1/2171200.png",
            price:'38,00 TL',
            discountedPrice : ''
      },
    
    ]
       
       var completeBasketHTML= `<div class="complete-basket-area" style="display:none;position:fixed;z-index:999999999;top:0px;width:100%;height:100vh;">
       <div class="complete-basket-scroll" style="position:fixed;z-index:999999999;width:100%;height:100vh;background-color:white;right:-600px;top:0px;text-align:center;">
           <div style="background-color:rgb(184, 49, 47)!important;width:100%;height:100px;display:flex;justify-content:center;align-items:center;"><a id='complete-basket-close' style='position:absolute;right:2px;top:-5px;color:white;font-size:32px;width:30px;height:30px;' href='javascript:void(0)'>×</a><h2 id='complete-basket-header' style="text-shadow: 4px 4px 3px rgba(0,0,0,0.3);margin: 0px;line-height:30px;font-size:13px;margin-top:19px;color:white;">ATIŞTIRMALIK ÜRÜNLER İLE ÜCRETSİZ KARGO<br> FIRSATINI YAKALAYIN!</h2></div>
           <div class="complete-basket-container " id="complete-basket-container_" style="width:100%;overflow:auto;height:100vh;padding-bottom:80px;">`;
           BasketList.map((basketItem,index)=>{
               
               completeBasketHTML+='<div class="complete-basket-product" style="margin-top:20px;padding-left: 20px;padding-right: 20px;">\
               <div style="display:flex;flex-direction: row;width:100%;padding:10px;box-shadow:2px 2px 2px 2px rgb(0,0,0,0.1),-2px -2px 2px rgb(0,0,0,0.1) !important">\
                   <div style="width:35%;margin-right:15px;display:flex;align-items:center;" class="m-product-img">\
                       <a href='+basketItem.href+'  title="'+basketItem.name+'">\
                           <img style="width:100%;" src='+basketItem.src+' >\
                       </a>\
                   </div>\
                   <div class="complete-basket-product-content" style="width:65%;display:flex;justify-content:center;align-items:center;flex-direction:column;">\
                       <a  title="'+basketItem.name+'" href='+basketItem.href+' style="font-size:14px;color:#0e0e0e;font-weight:bold;text-transform:uppercase;" class="complete-basket-product-name">'+basketItem.name+'</a>\
                        <div class="complete-basket-product-prices" style="align-items:center;margin-top:7px;display:flex;justify-content:center;">';
                        if(basketItem.discountedPrice!==''){
                           completeBasketHTML+='<p class="complete-basket-discountedprice" style="margin:5px;line-height:24px;font-weight: lighter;margin-right: 10px;text-decoration: line-through;font-weight:500;color:#202020;font-size:14px;display:inline-block;">'+basketItem.discountedPrice+'</p>';
                        }
                        
                           completeBasketHTML+='<p class="complete-basket-price" style="margin:5px;font-weight: bolder;color:rgb(184, 49, 47);font-size:16px;display:inline-block;">'+basketItem.price+'</p>';
                        
                           completeBasketHTML+=` </div></div> </div></div>
                           `                 
                           
                           
                           
           })
           completeBasketHTML+=`</div></div></div>`;
       var completeBasketCSS=`<style>
       body {
           overflow: hidden; /* Hide scrollbars */
           }
       .complete-basket-container::-webkit-scrollbar {
           width: 0.3em;
           height:50px;
       }
       .complete-basket-container::-webkit-scrollbar-track {
           box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
       
       }
       .complete-basket-container::-webkit-scrollbar-thumb {
         background-color: #be7917;
           outline: 1px solid #be7917;
       }
       
       
       </style>`;
       var ss = `<style>
       .complete-basket-scroll.active{
           right:0px !important;
               -webkit-transition:  all 1s !important;
               -moz-transition:  all 1s !important;
               -o-transition:  all 1s !important;
               transition: all 1s !important;
       }
       .complete-basket-scroll.passive{
           right:-500px !important;
           -webkit-transition:  all 1s !important;
           -moz-transition: all 1s !important;
           -o-transition:  all 1s !important;
           transition: all 1s  !important;
       
       }
       #complete-basket-kulakcik.active{
           right:-136px !important;
           -webkit-transition:  all 2s !important;
           -moz-transition:  all 2s !important;
           -o-transition:  all 2s !important;
           transition: all 2s !important;
       }
        #complete-basket-kulakcik.passive{
           right:-300px !important;
           -webkit-transition:  all 2s !important;
           -moz-transition:  all 2s !important;
           -o-transition:  all 2s !important;
           transition: all 2s !important;
       }
       </style>`;
      
       jQuery('head').append(ss);
       jQuery('body').append(completeBasketHTML);
       if(window.innerWidth>400){
           jQuery('#complete-basket-header').css('font-size',"16px");
   
       }
       if(window.innerWidth<400){
       jQuery('#complete-basket-header').css('font-size',"15px");
       if(window.innerWidth<360){
           jQuery('#complete-basket-header').css('font-size',"13px");
       
       }
       }
       jQuery('.complete-basket-product:eq('+(jQuery('.complete-basket-product').length-1)+') div:eq(0)').css("margin-bottom","50px")
       jQuery('.complete-basket-product a').click(function(){
            setLevel(LEVEL_JOIN, 'Click_'+jQuery(this).attr("title"));
       })
       
       var kulakcikHTML = "<div id='complete-basket-kulakcik' style='transform: rotate(-90deg) translateX(-50%);font-weight:bolder;cursor:pointer;z-index:99999;position:fixed;right:-300px;bottom:350px;height:35px;background-color:rgb(184, 49, 47)!important;text-align:center;display:flex;align-items:center;padding:10px;margin-right: 2px;'><span style='transform-origin: left;margin-top:10px;margin-bottom:10px;font-size:13.5px;color:white;border-top-left-radius: 5px;border-top-right-radius: 5px;'>ÜCRETSİZ KARGO FIRSATINI YAKALAYIN!</span></div>";
       jQuery('body').append(kulakcikHTML);
           jQuery('#complete-basket-kulakcik').css({'border-top-left-radius': '5px','border-top-right-radius': '5px'})
       
       
           setTimeout(function(){
               jQuery('#complete-basket-kulakcik').addClass('active');
               setTimeout(function(){
                   jQuery('head').append(completeBasketCSS);
                   jQuery('.complete-basket-area').show();
                   jQuery('.complete-basket-scroll').removeClass('passive');
                   jQuery('.complete-basket-scroll').addClass('active');
               },2500)
           },1500)
           
       setLevel(LEVEL_JOIN, 'Shown_Kulakcik');
       
       
       jQuery('#complete-basket-close').click(function(){
       jQuery('.complete-basket-scroll').removeClass('active');
       jQuery('.complete-basket-scroll').addClass('passive');
       setTimeout(function(){
               jQuery('.complete-basket-area').hide();
       
       },1000)
        setLevel(LEVEL_JOIN, 'Close_List');
       })
       jQuery('#complete-basket-kulakcik').click(function(){
               jQuery('head').append(completeBasketCSS);
               jQuery('.complete-basket-area').show();
               jQuery('.complete-basket-scroll').removeClass('passive');
               jQuery('.complete-basket-scroll').addClass('active');
       
              setLevel(LEVEL_JOIN, 'Shown_List');
       })
    }   
  
          } else {
            // replace changes
          }
        }
      });
    });
  }
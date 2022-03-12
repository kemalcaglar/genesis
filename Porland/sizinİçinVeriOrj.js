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
var css1='<link rel="stylesheet" href="//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.css" >'
var css2='<link rel="stylesheet" href="//cdn.8digits.com/owl/v2.1.1/owl.theme.default.min.css" >'

jQuery('head').append(css1);
jQuery('head').append(css2);
var wa = document.createElement('script'); 
wa.type = 'text/javascript'; wa.async = true;
wa.src = '//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.js';
var s = document.getElementsByTagName('script')[0]; 
s.parentNode.insertBefore(wa, s);
setTimeout(()=>{
    
var kampanyaPopulerUrun = [
    {
      name: "Ege 32 Parça 6 Kişilik Yemek Takımı",
      href: "https://www.porland.com/ege-32-parca-6-kisilik-yemek-takimi_105492",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/637333557322208308.jpg?q=100"
    },
    {
      name: "Platin 57 Parça 12 Kişilik Yemek Takımı",
      href: "https://www.porland.com/platin-57-parca-12-kisilik-yemek-takimi_105919",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/637399984838961436.jpg?q=100"
    },
    {
      name: "Kaktüs 36 Parça 6 Kişilik Kahvaltı Takımı",
      href: "https://www.porland.com/kaktus-36-parca-6-kisilik-kahvalti-takimi_104296",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/637006861795381602.jpg?q=100"
    },
    {
      name: "Morocco 18 Parça 6 Kişilik İkram ve Kahvaltı Takımı",
      href: "https://www.porland.com/morocco-18-parca-6-kisilik-ikram-ve-kahvalti-takimi_105665",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/637305317205633678.jpg?q=100"
    },
  
    {
      name: "Quantum Mat Siyah Çatal Kaşık Bıçak Takımı 84 Parça",
      href: "https://www.porland.com/quantum-mat-siyah-catal-kasik-bicak-takimi-84-parca_94757",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/04FST001550-quantum-mat-siyah-catal-kasik-bicak-takimi-84-parca-636552641548508338.jpg?q=100"
    },
    {
      name: "Botanical Düz Tabak 27cm",
      href: "https://www.porland.com/botanical-duz-tabak-27cm_102745",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/636948309004580141.jpg?q=100"
    },
    {
      name: "Hope Düz Tabak 17cm",
      href: "https://www.porland.com/hope-duz-tabak-17cm_85305",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/635900237906856819.jpg?q=100"
    },
    {
      name: "Forest Tabaklı Kahve Fincanı 85cc",
      href: "https://www.porland.com/forest-tabakli-kahve-fincani-85cc_92112",
      src: "https://stn-porland.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/04LFH000459-forest-tabakli-kahve-fincani-85cc-636826603453900407.jpg?q=100"
    },
 

  ]

  var kampanyaPopulerUrunHTML = `
<div class="line-procucts text-center w-100" style="display:flex;flex-direction:column;justify-content:center;padding-top:40px;padding-bottom:40px;">
<div class="section-title" style="text-align:center;" >
    <h2>Sizin İçin Seçtiklerimiz</h2>
</div>
<div class="product-area w-100" id="smpl-product-area" style="margin:0 auto;position:relative;">
<div id="ed-right_" type="button" style="cursor:pointer;z-index:99999;position: absolute;top:36.25px;right:-40px;width:50px;height:50px;font-size:24px;border:none;background-color:white;display:flex;justify-content:center;align-items:center;"><span style="color:black;" >›</span></div>\
<div id="ed-left_" type="button" style="cursor:pointer;z-index:99999;position: absolute;top:36.25px;left:-50px;width:50px;height:50px;font-size:24px;border:none;background-color:white;display:flex;justify-content:center;align-items:center;"><span style="color:black;" >‹</span></div>\
<ul  class="owl-carousel populer-carousel owl-theme">`;

  kampanyaPopulerUrun.map((product, index) => {
      kampanyaPopulerUrunHTML += '<li style="margin-right:10px;">\
<div class="pitem" >\
    <a  class="smpl-kampanya_btn" href="'+ product.href + '" title="' + product.name + '">\
        <img class="lazy" alt="'+ product.name + '" src="' + product.src + '" style="display: block;">\
    </a>\
    <h4>\
        <a style="font-size: 14px;margin-bottom: 10px;color: #2b2b2b;font-family: fira, sans-serif;margin-top: 25px;" class="smpl-kampanya_btn" href="'+ product.href + '" title="' + product.name + '">' + product.name + '</a></h4>\
</div>\
</li>';





  })
  kampanyaPopulerUrunHTML += `
</ul>
</div>
</div>`;

  // jQuery('.line-banner.collection-banners.order-3').append(kampanyaPopulerUrunHTML);
  jQuery('#rbanner a').after(kampanyaPopulerUrunHTML);
    jQuery(".populer-carousel").owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        navText:["<",">"],
        items:6,
        dots: false
    });
  jQuery('#smpl-product-area .owl-next').addClass("smpl-owl-next")
  jQuery('#smpl-product-area .owl-prev').addClass("smpl-owl-prev")
    jQuery('#ed-right_').click(function(){
        jQuery('.smpl-owl-next').click();
    })
    jQuery('#ed-left_').click(function(){
     jQuery('.smpl-owl-prev').click();
    })
    jQuery('.owl-nav').css("display","none");
      setLevel(LEVEL_JOIN, 'Shown');
    if(window.innerWidth<1280){
        jQuery('#ed-right_').css({"top":"60px","right":"20px"})
        jQuery('#ed-left_').css({"top":"60px","left":"20px"})
    }
  jQuery('.smpl-kampanya_btn').click(function () {
    setLevel(LEVEL_JOIN, 'Click_' + jQuery(this).attr("title"));
  })
},2000)



        } else {
          // replace changes
        }
      }
    });
  });
}
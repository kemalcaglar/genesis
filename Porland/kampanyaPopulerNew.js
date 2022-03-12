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
        name: "Chopin Altın Yaldız 60 Parça 12 Kişilik Yemek Takımı",
        href: "https://www.porland.com/altin-yaldiz-60-parca-12-kisilik-yemek-takimi_106507?d=10085_106507",
        src: "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637460588043827123.jpg?q=80",
        discount: "50",
    },
    {
        name: " Botanical Desen4 Düz Tabak 21cm",
        href: "https://www.porland.com/botanical-desen4-duz-tabak-21cm_102744?d=10304_102744",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/636948308992548476.jpg?q=80",
        discount: "50",
    },
    {
        name: "Forest Düz Tabak 28cm",
        href: "https://www.porland.com/forest-duz-tabak-28cm_92094?d=10067_92094",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637418956220924475.jpg?q=80",
        discount: "56",
    },
    {
        name: "Lungo Mat Altın ÇKB 84 Parça",
        href: "https://www.porland.com/lungo-mat-altin-ckb-84-parca_106715?d=10094_106715",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637498710964756991.jpg?q=80",
        discount: "2%",
    },
    {
        name: "Morocco 18 Parça 6 Kişilik İkram ve Kahvaltı Takımı",
        href: "https://www.porland.com/morocco-18-parca-6-kisilik-ikram-ve-kahvalti-takimi_105665?d=9109_105665",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637305317205633678.jpg?q=80",
        discount: "50",
    },
    {
        name: "Bohem 60 Parça 12 Kişilik Yemek Takımı",
        href: "https://www.porland.com/bohem-60-parca-12-kisilik-yemek-takimi_95013",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/04ALM003224-bohem-12-kisilik-60-parca-yemek-takimi-636594940937217669.jpg?q=80",
        discount: "50",
    },
    {
        name: "Glamorous Lacivert Düz Tabak 24cm",
        href: "https://www.porland.com/glamorous-lacivert-duz-tabak-24cm_106447?d=10087_106447",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637444842898045981.jpg?q=80",
        discount: "50",
    },
    {
        name: "Vignetta 18 Parça 6 Kişilik İkram&Kahvaltı Takımı",
        href: "https://www.porland.com/vignetta-18-parca-6-kisilik-ikramkahvalti-takimi_106438?d=10086_106438",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637481187565368911.jpg?q=80",
        discount: "52",
    },
    {
        name: "Hope Kupa 130cc",
        href: "https://www.porland.com/hope-kupa-130cc_85303?d=9063_85303",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/635900237899200628.jpg?q=80",
        discount: "50",
    },
    {
        name: "Botanical Kahve Takımı 4 Parça",
        href: "https://www.porland.com/botanical-kahve-takimi-4-parca_105313?d=10304_105313",
        src:  "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637094090627016885.jpg?q=80",
        discount: "50",
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
      <div class="position-absolute badge discount-ratio double" style="top: 0;left: 3px;max-width: 110px;height: 30px;line-height: 20px;font-size: 14px;color: #fff;font-family: firamedium,sans-serif;font-weight: 400;padding: 9px 10px 0;background: url(https://stn-porland.mncdn.com/Content/img/indirim-detay.png) no-repeat;z-index: 2; border-radius:0;">\
          <span class="badge-text">%'+ product.discount +'</span>\
      </div>\
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

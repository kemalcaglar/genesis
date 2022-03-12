var html = `<div class="flexslider carousel">
  <ul class="slides smpl-slides">
    <li>
      <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
      <div class="product-content smpl-content">
      <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
      <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
      </div>
      <div class="product-prices"><p class="discountedprice">2.990 TL</p>
    </li>
    <li>
      <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
      <div class="product-content smpl-content">
      <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
      <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
      </div>
      <div class="product-prices"><p class="discountedprice">2.990 TL</p>
    </li>
    <li>
      <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
      <div class="product-content smpl-content">
      <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
      <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
      </div>
      <div class="product-prices"><p class="discountedprice">2.990 TL</p>
    </li>
    <li>
      <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
      <div class="product-content smpl-content">
      <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
      <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
      </div>
      <div class="product-prices"><p class="discountedprice">2.990 TL</p>
    </li>
    <li>
    <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
    <div class="product-content smpl-content">
    <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
    <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
    </div>
    <div class="product-prices"><p class="discountedprice">2.990 TL</p>
  </li>
  <li>
  <img src="https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/M3208101-yatsan-maison-bamboo-touch-yastik-636948264246933736.jpg" />
  <div class="product-content smpl-content">
  <h2 class="product-name" style="height: 43px;">Serta Bowery Yatak</h2>
  <div class="product-size"><p class="size">Ürün Ölçüsü: 160x200 cm Çift Kişilik </p>
  </div>
  <div class="product-prices"><p class="discountedprice">2.990 TL</p
</li>
  </ul>
</div>`;

jQuery(".basket-left.col-md-7").append(html);

jQuery(".flexslider").flexslider({
  animation: "slide",
  animationLoop: false,
  itemWidth: 230,
  itemMargin: 5,
  minItems: 4,
  maxItems: 4,
});

jQuery(".flexslider").css({ "background": "#f2f2f2" });
jQuery(".flex-next").css({ "overflow": "visible" });
jQuery(".flex-prev").css({ "overflow": "visible" });
jQuery(".smpl-content").css({"text-align":"center"})
jQuery(".smpl-content .product-name").css({"font-weight":"500","font-size":"14px","margin-bottom":"10px","display":"flex","align-items":"center","height":"50px","justify-content":"center"})
jQuery(".smpl-content .size").css({"font-size":"11px","color":"#9b9b9b","line-height":"2"})
jQuery(".smpl-content .product-size").css({"margin-top":"-5px"})
jQuery(".smpl-content .discountedprice").css({"font-size":"16px","color":"#202020","font-weight":"500","margin-top":"10px","margin-bottom":"7px","border":"1px solid orange","padding":"5px"})
jQuery(".smpl-content .product-prices").css({"padding":"1px"})
jQuery(".flex-next").text("")
jQuery(".flex-prev").text("")
var dataProduct = [
    {
      productOneName : "Sealy Maple Grove Yatak",
      productOneImage : "https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/MmM-038236-sealy-maple-grove-yatak-637170304679418134.jpg",
      productOnePrice : "3.509 TL",
      productOneOldPrice : "5.840 TL",
      productOneDiscount : "%40",
      productOneHref : "https://yatsan.com/sealy/sealy-maple-grove-yatak-81417",
    },
    {
      productTwoName : "Tempur Queen Yastık M",
      productTwoImage : "https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/432TQE05-tempur-queen-yastik-m-636905181098176432.jpg",
      productTwoPrice : "960 TL",
      productTwoOldPrice : "1.200 TL",
      productTwoDiscount : "%20 + %20",
      productTwoHref : "https://yatsan.com/tempur-yastiklarda-indirim-kampanyasi/tempur-queen-yastik-m-80476",
    },
    {
      productThreeName : "Serta Bowery Yatak",
      productThreeImage : "https://stn-yatsan.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/MMM-036966-bowery-yatak-637093290878710078.jpeg",
      productThreePrice : "2.695 TL",
      productThreeOldPrice : "5.390 TL",
      productThreeDiscount : "%50",
      productThreeHref : "https://yatsan.com/null/serta-bowery-yatak-81408",
    },
  ];
  var css = `<style>
  .smpl-overlayPopup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 99999999;
  }
  .smpl-contentPopup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fefefe;;
    min-width: 30%;
    box-sizing: border-box;
    transition: 400ms all;
    z-index: 999999;
    max-height: 100%;
    overflow: auto;
    border: 2px solid #f3f3f3;
    border-radius:10px;
  }</script>`
  jQuery("head").append(css);
  var html = `<div class="smpl-overlayPopup">
  <div class="smpl-contentPopup">
    <h1 style="display: flex;
    text-align: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: #673d27;
    line-height: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;">Aradığını bulamadın mı? Senin için seçtiklerimize gözat! <span class="smpl-popupClose" style="right: 10px;position: absolute;top: 5px;font-size: 30px; cursor:pointer;">&times</span></h1>  <div class="swiper-container swiper-container-horizontal" id="swiper-container2" style="width:800px;margin-left: 0;
    margin-right:0;">
    <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
        <div class="swiper-slide active-slider swiper-slide-visible swiper-slide-active" style="width: 400px; flex-direction: column; height:100%; font-size:12px;">
            <a class="smpl-productHref" href="`+dataProduct[0].productOneHref+`"><div style="font-size: 12px; justify-content: center;display: flex;text-align: center;align-items: center;margin-top: -20px;
            line-height: 25px;">
            <img src="`+dataProduct[0].productOneImage+`" style="width: 70%;"></a>
            <div style="position: absolute;top: 5px;left: 15px; border-radius:10px; background: #d07a0b;width: 70px; line-height:25px; text-align: center;"><span style="color: white;">`+dataProduct[0].productOneDiscount+`</span></div>
            </div>
            <div style="justify-content: center;display: flex;flex-direction: column;text-align: center;align-items: center; font-weight: 500;
            font-size: 15px;">
            <span style="margin-bottom: 10px;">`+dataProduct[0].productOneName+`</span>
            <div><span style="color: #004e96;margin-right: 10px;">`+dataProduct[0].productOnePrice+`</span>
            <s style="color: gray;">`+dataProduct[0].productOneOldPrice+`</s></div>
            </div>
            <div class="button smpl-button" style="text-align: center;margin-top: 10px;margin-bottom: 40px; width:100%">
            <button type="button" style="background: #d07a0b;width: 50%;height: 30px;border-radius:10px;">
            <a class="productName" href="`+dataProduct[0].productOneHref+`" title="`+dataProduct[0].productOneName+`" style="color: white;font-weight: 500;
            font-size: 15px;">
                Ürüne git
              </a>
            </button>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-visible swiper-slide-next" style="width: 400px; flex-direction: column; height:100%; font-size:12px;">
        <a class="smpl-productHref" href="`+dataProduct[1].productTwoHref+`"><div style="font-size: 12px; justify-content: center;display: flex;text-align: center;align-items: center;margin-top: -20px;
        line-height: 25px;">
        <img src="`+dataProduct[1].productTwoImage+`" style="width: 70%;">
        </div></a>
        <div style="position: absolute;top: 5px;left: 15px; border-radius:10px; background: #d07a0b;width: 70px; line-height:25px; text-align: center;"><span style="color: white;">`+dataProduct[1].productTwoDiscount+`</span></div>
        <div style="justify-content: center;display: flex;flex-direction: column;text-align: center;align-items: center; font-weight: 500;
        font-size: 15px;">
        <span style="margin-bottom: 10px;">`+dataProduct[1].productTwoName+`</span>
        <div><span style="color: #004e96;margin-right: 10px;">`+dataProduct[1].productTwoPrice+`</span>
        <s style="color: gray;">`+dataProduct[1].productTwoOldPrice+`</s></div>
        </div>
        <div class="button smpl-button" style="text-align: center;margin-top: 10px;margin-bottom: 40px; width:100%">
            <button type="button" style="background: #d07a0b;width: 50%;height: 30px;border-radius:10px;">
            <a class="productName" href="`+dataProduct[1].productTwoHref+`" title="`+dataProduct[1].productTwoName+`" style="color: white;font-weight: 500;
            font-size: 15px;">
                Ürüne git
              </a>
            </button>
          </div>
        </div>
        <div class="swiper-slide" style="width: 400px; flex-direction: column; height:100%; font-size:12px;">
        <a class="smpl-productHref" href="`+dataProduct[2].productThreeHref+`"><div style="font-size: 12px; justify-content: center;display: flex;text-align: center;align-items: center;margin-top: -20px;
        line-height: 25px;">
        <img src="`+dataProduct[2].productThreeImage+`" style="width: 70%;">
        </div></a>
        <div style="position: absolute;top: 5px;left: 15px; border-radius:10px; background: #d07a0b;width: 70px; line-height:25px; text-align: center;"><span style="color: white;">`+dataProduct[2].productThreeDiscount+`</span></div>
        <div style="justify-content: center;display: flex;flex-direction: column;text-align: center;align-items: center; font-weight: 500;
        font-size: 15px;">
        <span style="margin-bottom: 10px;">`+dataProduct[2].productThreeName+`</span>
        <div><span style="color: #004e96;margin-right: 10px;">`+dataProduct[2].productThreePrice+`</span>
        <s style="color: gray;">`+dataProduct[2].productThreeOldPrice+`</s></div>
        </div>
        <div class="button smpl-button" style="text-align: center;margin-top: 10px;margin-bottom: 40px; width:100%">
            <button type="button" style="background: #d07a0b;width: 50%;height: 30px;border-radius:10px;">
            <a class="productName" href="`+dataProduct[2].productThreeHref+`" title="`+dataProduct[2].productThreeName+`" style="color: white;font-weight: 500;
            font-size: 15px;">
                Ürüne git
              </a>
            </button>
          </div>
        </div>
    </div>
  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
  </div></div>`;
  jQuery("body").prepend(html);
  // setLevel(LEVEL_JOIN, "show-popup");
  
  var mySwiper2 = new Swiper('#swiper-container2', {
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 3
    });
    jQuery(".smpl-popupClose").click(function(){
      jQuery(".smpl-overlayPopup").hide();
     // setLevel(LEVEL_JOIN, "click-close");
      });
    /*  jQuery(".smpl-button").click(function(){
        setLevel(LEVEL_JOIN, "click-button");
      });
      jQuery(".smpl-productHref").click(function(){
        setLevel(LEVEL_JOIN, "click-product");
      }); */
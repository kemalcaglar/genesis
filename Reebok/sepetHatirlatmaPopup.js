
          var css = `<style>
          .smpl-content {
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
            border-radius: 10%;
            border: 2px solid #f3f3f3;
          }
          
          .sepeteGit {
            border: 2px solid #FF1515;
            width: 100%;
            display: flex;
            justify-content: center;
            line-height: 3;
            background: #FF1515;
            color: #fff;
            font-weight: 600;
          }
          .sepeteGit:hover{
            color: #fff;
          }
          .smpl-close-popup {
          cursor: pointer; 
          margin-left: 90%;
          font-size: 20px;
          font-weight: 600;
          padding: 10px;
          position:absolute;
          z-index:2;
          color:white;
          }
          </style>`
          jQuery("head").append(css)
          var imgSrc = jQuery(".cnt-popup-added-product .align-items-center.row.mb-3 img:first").attr("src");
          var itemName = jQuery(".cnt-popup-added-product .align-items-center.row.mb-3 h5:first").text().trim();
          var itemDiscount = jQuery(".cnt-popup-added-product .align-items-center.row.mb-3 .price.mb-3px.fs-16.f-npw:first").text().trim();
          var itemHref = jQuery(".cnt-popup-added-product .align-items-center.row.mb-3 a:first").attr("href");
          var html = `<div class="smpl-overlay">
  <div class="smpl-content">
    <div class="smpl-close-popup">&times;</div>
    <h7 style="text-align: center;font-weight: 600;margin-bottom: 10px;height:50px;top:0;position:absolute;width:100%;background:#000000;color:white;justify-content: center;align-items: center;display: flex;">SEPETİNİZDEKİ ÜRÜNLER SİZİ BEKLİYOR</h7>
    <div style="justify-content: center; display: flex;" class="sb-left">
      <img style="width: auto; height: 200px;margin-top:30px;"src="` + imgSrc + `"></img>
    </div>
    <div style="text-align: center; padding: 20px;margin-top:-30px;" class="sb-right">
      <p class="sb-name" style="margin-bottom: 10px;" >
        <a style="font-weight: 600;"href=" ` + itemHref + ` "> ` + itemName + `</a>
      </p>
      <a href=" ` + itemHref + ` " class="sb-one-price"> ` + itemDiscount + `</a>
    </div>
    <div class="smpl-button-basket">
      <a class="sepeteGit" href="/Sepet">SEPETE GİT </a>
      </div>
    </div>
    </div>`;
          if (jQuery(".count").text().trim() > 0) {
            jQuery("body").prepend(html);
            //setLevel(LEVEL_JOIN, "Shown");
if(jQuery(".smpl-close-popup").length > 0 ){
  jQuery(".smpl-button-basket").click(function () {
    //setLevel(LEVEL_JOIN, "click_popupBasket")
  });
  jQuery(".smpl-close-popup").click(function () {
    jQuery(".smpl-content").css({ "display": "none" });
  })
}
          }


       
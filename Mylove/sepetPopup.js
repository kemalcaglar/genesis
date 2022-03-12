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
            border: 2px solid #f3f3f3;
          }
          
          .sepeteGit {
            border: 2px solid #ff0000;
            width: 100%;
            display: flex;
            justify-content: center;
            line-height: 3;
            background: #ff0000;
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
          </style>`;
jQuery("head").append(css);
var imgSrc = jQuery(".topCardItem img:first").attr("src");
var itemName = jQuery(".SepettopAd span:first").text().trim();
var itemDiscount = jQuery(".sepetTopFiyat").eq(0).text().trim();
var itemHref = jQuery(".topCardItem a:first").attr("href");
var html =
  `<div class="smpl-overlay">
  <div class="smpl-content">
    <div class="smpl-close-popup">&times;</div>
    <h7 style="text-align: center;font-weight: 600;margin-bottom: 10px;height:50px;top:0;position:absolute;width:100%;background:#000000;color:white;justify-content: center;align-items: center;display: flex;">SEPETİNİZDEKİ ÜRÜNLER SİZİ BEKLİYOR</h7>
    <div style="justify-content: center; display: flex;" class="sb-left">
      <img style="width: 200px; height: auto;margin-top:70px; margin-bottom:20px;"src="` +
  imgSrc +
  `"></img>
    </div>
    <div style="text-align: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border: 2px solid #ff0000;" class="sb-right">
      <p class="sb-name" style="margin-bottom: 10px;" >
        <a style="color: #000000;
        font-weight: normal;
        font-size: 17px;"href=" ` +
  itemHref +
  ` "> ` +
  itemName +
  `</a>
      </p>
      <a style="color: orangered; font-weight: 600;" href=" ` +
  itemHref +
  ` " class="sb-one-price"> ` +
  itemDiscount +
  `</a>
    </div>
    <div class="smpl-button-basket">
      <a class="sepeteGit" href="/Sepetim.aspx">SEPETE GİT </a>
      </div>
    </div>
    </div>`;
if (jQuery("#spnTopSepetToplamUrun").text().trim() > 0) {
  jQuery("body").prepend(html);
  setLevel(LEVEL_JOIN, "Shown");
  if (jQuery(".smpl-close-popup").length > 0) {
    jQuery(".smpl-button-basket").click(function () {
      setLevel(LEVEL_JOIN, "click_popupBasket")
    });
    jQuery(".smpl-close-popup").click(function () {
      jQuery(".smpl-content").css({ display: "none" });
    });
  }
}

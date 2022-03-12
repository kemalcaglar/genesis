jQuery(".selectric-wrapper ul li").click(function () {

  var stockNumber = jQuery(".stock-message").text().trim().split(" ")[2]
  if (typeof stockNumber !== "undefined") {
    var triple = stockNumber * 3
    var double = stockNumber * 2

    function multipleItem(count) {
      if (jQuery(".smplStock").length == 0) {
        var html = `<div class="smplStock" style="border: 1px solid gray;max-width: 351px;display: flex;bottom: 30px;position: relative;height: 50px;line-height: 3;padding-left: 20px; background:#ffffff;font-weight: 600;">
      <span>Bu ürün<strong class="smplCount" style="color:red;"> ` + count + ` </strong>kişinin sepetinde </span>
      </div>`
        jQuery(".product-details.px-3").append(html);
      } else {
        jQuery(".smplCount").text(' ' + count + ' ');
      }
    }
    if (stockNumber > 0 && stockNumber < 5) {
      if (stockNumber < 3) {
        multipleItem(triple)
      } else {
        multipleItem(double)
      }
    }
  } else {
    if (jQuery(".smplStock").length == 1) {
      jQuery(".smplStock").remove()
    }
  }
})



border: 1px solid gray;
max-width: 351px;
display: flex;
bottom: 30px;
position: relative;
height: 50px;
line-height: 3;
padding-left: 20px;
background: #fff;
font-weight: 600;
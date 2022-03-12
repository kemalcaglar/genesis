if (jQuery("#product").length > 0) {
  var lastLookProductObj = {};
  lastLookProductObj["name"] = jQuery('.product-details .p-title .p-name').text();
  lastLookProductObj["discountPrice"] = Number(jQuery('.product-details .p-price .oneprice').text().replace(/[^0-9,]/g, '').replace(',', '.').trim());
  lastLookProductObj["oldPrice"] = Number(jQuery('.product-details .p-price .oldprice').text().replace(/[^0-9,]/g, '').replace(',', '.').trim());
  lastLookProductObj["src"] = jQuery('.content a img').first().attr("src");
  lastLookProductObj["href"] = window.location.href;
  lastLookProductObj["size"] = jQuery('.p-size').text() + jQuery('.size-name-change').text() + " " + jQuery('.size-name-change').next().text().split('/')[0].trim();
  if (JSON.parse(localStorage.getItem("smpl_lastlook_product") === null)) {
    var productArray = [];
    productArray.unshift(lastLookProductObj);
    localStorage.setItem("smpl_lastlook_product", JSON.stringify(productArray));
  }
  else {
    var productArray = JSON.parse(localStorage.getItem("smpl_lastlook_product"));
    if (productArray.find(item => item.name === lastLookProductObj.name) === undefined) {
      productArray.length >= 12 ? productArray.pop() : null;
      productArray.unshift(lastLookProductObj);
      localStorage.setItem("smpl_lastlook_product", JSON.stringify(productArray));
    }
  }
}



if (window.location.pathname.length == 1 || jQuery(".filter-area").length > 0) {

  if (localStorage.getItem('smpl_lastlook_product') !== null) {
    var lastLookProductArray = JSON.parse(localStorage.getItem("smpl_lastlook_product"));
    if (lastLookProductArray.length > 2) {


      var lastLookProductHTML = `<div class="last-look-area" style="display:none;position:fixed;z-index:999999999;top:0px;right:-500px;width:100%;height:100vh;">
<div class="last-look-scroll" style="position:fixed;z-index:999999999;width:100%;height:100vh;background-color:white;top:0px;text-align:center;">
<div style="background-color:#AC9E96;width:100%;padding-top:16px;padding-bottom:16px;position:relative;">
<h2 style="color:white;font-size:19px;">SON GEZİLENLER</h2>
  <span class="smpl-last-look-area-close" style="font-size:30px; float:right; padding-left:5px; color:white; cursor:pointer;">&#215;</span></div>
<div class="last-look-container " id="last-look-container_" style="width:100%;overflow:auto;height:100vh;padding-bottom:60px;">`;
      lastLookProductArray.map((product, index) => {
        product.discountPrice = product.discountPrice.toString();
        product.oldPrice = product.oldPrice.toString();
        if (product.discountPrice.length > 3) {
          if (product.discountPrice.length === 4) {
            product.discountPrice = product.discountPrice.substring(0, 1) + "." + product.discountPrice.substring(product.discountPrice.length - 3, product.discountPrice.length);
          }
          else if (product.discountPrice.length === 5) {
            product.discountPrice = product.discountPrice.substring(0, 2) + "." + product.discountPrice.substring(product.discountPrice.length - 3, product.discountPrice.length);
          }
          else {

          }
        }
        if (product.oldPrice.length > 3) {
          if (product.oldPrice.length === 4) {
            product.oldPrice = product.oldPrice.substring(0, 1) + "." + product.oldPrice.substring(product.oldPrice.length - 3, product.oldPrice.length);
          }
          else if (product.oldPrice.length === 5) {
            product.oldPrice = product.oldPrice.substring(0, 2) + "." + product.oldPrice.substring(product.oldPrice.length - 3, product.oldPrice.length);
          }
          else {

          }
        }
        lastLookProductHTML += '<div class="last-look-product" style="margin-top:20px;">\
<div style="display:flex;flex-direction: row;width:100%;padding:10px;">\
    <div style="width:35%;margin-right:20px;" class="m-product-img">\
        <a href='+ product.href + '  title="' + product.name + '">\
            <img style="width:100%;" src='+ product.src + ' >\
        </a>\
    </div>\
    <div class="last-look-product-content" style="width:65%;padding-top:20px;">\
        <a  title="'+ product.name + '" href=' + product.href + ' style="font-size:14px;color:#0e0e0e;font-weight:bold;line-height:1.8;text-transform:uppercase;" class="last-look-product-name">' + product.name + '</a>\
        <div class="last-view-product-size">\
        <p class="last-view-size" style="font-size: 11px;text-align:center;color:#9b9b9b;line-height:2;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">'+ product.size + ' </p>\
    </div>\
    <div class="last-look-product-prices" style="margin-top:7px;display:flex;justify-content:center;">';
        if (product.oldPrice > 0) {
          lastLookProductHTML += ' <p style="font-size:16px;font-weight:500;color:#202020;line-height:40px;margin-right:10px;" class="last-look-discountPrice">' + product.discountPrice + ' TL</p>';
          lastLookProductHTML += '  <p style="font-size:14px;font-weight:500;line-height:40px;color:#bbb;text-decoration:line-through;" class="last-look-oldPrice">' + product.oldPrice + ' TL</p>';
        }
        else {
          lastLookProductHTML += '<p class="last-look-price" style="font-weight:500;color:#202020;line-height:40px;font-size:16px;display:inline-block;">' + product.discountPrice + ' TL</p>';
        }
        lastLookProductHTML += ` </div>
                  <div class="last-look-button">
                    <button
                      type="button"                                
                      style="
                        width: 100%;
                        background-color: #AC9E96;
                        border-radius: 10px;
                      "
                    >
                      <a
                        class="last-look-product-name"
                        href="https://yatsan.com/uyku-urunleri/yatsan-maison-longwave-air-visco-yastik-80460"
                        title="Yatsan Maison Longwave Air Visco Yastık"
                        style="color: white; padding: 10px; display: inline-block"
                      >
                        Ürüne git
                      </a>
                    </button>
                  </div>
                </div> </div></div>`;
      })
      lastLookProductHTML += `</div></div></div>`;
      var lastLookProductCSS = `<style>
body {
overflow: hidden; /* Hide scrollbars */
}
.last-look-container::-webkit-scrollbar {
width: 0.33em;
height:25px;
}
.last-look-container::-webkit-scrollbar-track {
box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

}
.last-look-container::-webkit-scrollbar-thumb {
background-color: rgb(103, 61, 39);
outline: 1px solid rgb(103, 61, 39);
border-radius:20px;
}
</style>`;
      jQuery('body').append(lastLookProductHTML);

      jQuery('.last-look-product a').click(function () {

        setLevel(LEVEL_JOIN, 'Click_' + jQuery(this).attr("title"));

      })
      var imgSrc = "https://cdn.hellosmpl.com/uploads/2021/01/15/ijodejvnjun7dpbq69d2t4leka.png";
      var kulakcikHTML = "<div id='lastlook_kulakcik' style='font-weight: bolder; cursor: pointer; z-index: 99999; position: fixed; right: 0px;bottom:" + ((window.innerHeight / 2) - 52) + "px;width: 185px;  background-image: url(" + imgSrc + ");background-size:cover;background-repeat:no-repeat; text-align: center; color: white; display: none; border-top-left-radius: 3px; border-bottom-left-radius: 3px;padding: 12px;'><span style='margin-top:10px;margin-bottom:10px;font-size:17px;color:white;text-orientation: upright;height: 20px;display: inline-block;'></span></div>";
      jQuery('body').append(kulakcikHTML);
      if (window.innerHeight < 700) {
        jQuery('#lastlook_kulakcik').css("display", "none");
        jQuery(window).scroll(function () {
          if (jQuery(window).scrollTop() > 105) {
            jQuery('#lastlook_kulakcik').css("display", "block");
          }
          else {
            jQuery('#lastlook_kulakcik').css("display", "none");

          }

        });
      }
      else {
        jQuery('#lastlook_kulakcik').css("display", "block");

      }

      setLevel(LEVEL_JOIN, 'Shown_Kulakcik');
      jQuery('#lastlook_kulakcik').animate({
        right: "0px"
      }, 1000)

      jQuery('#lastlook_kulakcik').click(function () {

        jQuery('.last-look-scroll').animate({
          right: "-500px"
        }, 1000)
        setTimeout(() => {
          jQuery('.last-look-area').css("display", "none");
          var aa = `<style>body{overflow:auto;}</style>`
          jQuery('head').append(aa);
        }, 1000);
        setLevel(LEVEL_JOIN, 'Close_lastlook');


      })

      jQuery('#lastlook_kulakcik').click(function () {
        jQuery('head').append(lastLookProductCSS);

        jQuery('.last-look-area').css("display", "block");
        jQuery('.last-look-scroll').animate({
          right: "0px"
        }, 1000)



        setLevel(LEVEL_JOIN, 'Shown_lastlook');


      })


    }
  }
}




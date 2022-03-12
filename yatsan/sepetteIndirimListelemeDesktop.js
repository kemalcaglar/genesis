var html = `<div class="smpl-indirim-banner" style="
position: relative;
width: 100%;
z-index: 999;
top: -17px;
right: 23px;
justify-content: flex-end;
display: flex;
"><span style="
font-size: 12px;
font-weight: 600;
color: #d14c63;
">Sepette 10% indirim</span></div>`;
jQuery(".pitem.parent-pitem.col-md-4").map(function(){
  var basketAdd = jQuery(this).find(".big-sand-fill-btn.btn-add-basket span").text().trim()
  if(basketAdd == "SEPETE EKLE" && jQuery(this).find(".product-image a:first img").attr("alt") !== "Sealy Yataklarda %40 İndirim" && jQuery(this).find(".product-image a:first img").attr("alt") !== "Tempur Yataklarda %25+%25'e Varan İndirim" && jQuery(this).find(".product-image a:first img").attr("alt") !== "Tempur Yastıklarda %25 İndirim"){
    jQuery(this).find(".product-image").append(html);
    setLevel(LEVEL_JOIN, "shown-banner");
  }
})

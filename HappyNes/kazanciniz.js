if(jQuery(".old-product-price").length > 0){
  var kazanciniz = jQuery(".old-product-price span").text().split(",")[0].trim() - jQuery(".price.product-price span").text().trim().split(",")[0];
  jQuery(".old-product-price").append('<span style="color:red;">Kazancınız '+ kazanciniz +' ₺</span>')
  setLevel(LEVEL_JOIN, "shown-kazanc");
}

Number(jQuery(".old-product-price span").text().split("₺")[0].trim()) - Number(jQuery(".price.product-price span").text().trim().split("₺")[0].trim())
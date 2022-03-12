jQuery(".add-cart").css({"position":"fixed",
"bottom":"-21px",
"z-index":"999999"
})
jQuery(".add-cart span:first").css({"left":"-18px"})
jQuery(".select2.select2-container.select2-container--default").css({"left":"-30px"})
jQuery(".button-1.add-to-cart-button.block-btn").css({"margin-left":"-30px",
"width":"80%"})
jQuery(".wrap_dcd9._orientationRight_48be.__jivoMobileButton").css({"bottom":"25px"})
jQuery(".col-sm-12.band").css({"bottom":"35px"})

jQuery(".select2.select2-container.select2-container--default").click(function(){
    setLevel(LEVEL_JOIN,'click-adet');
})
jQuery(".button-1.add-to-cart-button.block-btn").click(function(){
    setLevel(LEVEL_JOIN,'click-ekle');
})
setLevel(LEVEL_JOIN,'shown-basket');
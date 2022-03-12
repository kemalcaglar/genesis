if(jQuery( ".flyout-cart-selector.cart-sub span").eq(0).text().split(" ")[1].split("(")[1].split(")")[0].trim() > 0){
jQuery( ".flyout-cart-selector.cart-sub" ).mouseover(function() {
    jQuery(".flyout-cart-selector.cart-sub ul").css({"display":"block"});
    setLevel(LEVEL_JOIN, "shown-basket");
    jQuery(".flyout-cart-selector.cart-sub ul li").click(function(){
        setLevel(LEVEL_JOIN, "click-product");
    })
  });
  jQuery( ".flyout-cart-selector.cart-sub" ).trigger('mouseover');
    jQuery( ".flyout-cart-selector.cart-sub" ).mouseout(function(){
        jQuery(".flyout-cart-selector.cart-sub ul").css({"display":"none"});
})
  setTimeout(() => {
jQuery( ".flyout-cart-selector.cart-sub" ).trigger('mouseout'); 
  }, 10000);
}



var css = '@keyframes animationsz {
  0% {
  opacity: 0.5;
  box-shadow: 0px 0px 6px 3px
  }
  100% {
  opacity: 1;
  box-shadow: 0px 0px 12px 9px;
  }
  }'
  jQuery("head").append(css);
  if(jQuery( ".flyout-cart-selector.cart-sub span").eq(0).text().split(" ")[1].split("(")[1].split(")")[0].trim() > 0){
jQuery( ".flyout-cart-selector.cart-sub span").eq(0).css({
  "animation": "animationsz 2s infinite",
  "border": "2px solid #fff",
    "padding": "2px",
    "border-radius": "10px"
  });
}
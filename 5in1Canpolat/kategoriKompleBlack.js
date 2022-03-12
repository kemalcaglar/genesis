// Outlet yazı black yapma
jQuery('.HeaderMenu2 li').each(function(index,product){
  if(jQuery('a:eq(0)',product).text().trim()==="OUTLET"){
      jQuery('a:eq(0)',product).css({"font-weight":"bold","color":"black"});
      setLevel(LEVEL_JOIN, 'Shown');              
  }
})
      
// %30 a varan indirimler kırmızı
jQuery("#HeaderMenu2 li").eq(1).find("a").css({"color":"red"})

// diğer kategoriler ve alt kategorileri siyah
jQuery("ul#HeaderMenu2 .ulVar:eq(5) a").css({ "color": "black" })
jQuery("ul#HeaderMenu2 .ulVar:eq(4) a").css({ "color": "black" })
jQuery("ul#HeaderMenu2 .ulVar:eq(3) a").css({ "color": "black" })
jQuery("ul#HeaderMenu2 .ulVar:eq(2) a").css({ "color": "black" })
jQuery("ul#HeaderMenu2 .ulVar:eq(6) a").css({ "color": "black" })


// tek kod desktop

jQuery("#HeaderMenu2").find("li a").css({"color":"black"})
jQuery("#HeaderMenu2 li").eq(1).find("a").css({"color":"red"})

// tek kod mobile

jQuery("#HeaderMenu2").find("li a").css({"color":"black"})
jQuery("#HeaderMenu2 li").eq(1).find("a").css("cssText", "color: red !important;"); // important ezildi.

// desktop
jQuery("#HeaderMenu2 .ulVar").eq(0).find("li a").css({"color":"red"})
jQuery("#HeaderMenu2 .ulVar").eq(1).find("li a").css({"color":"red"})
if(jQuery("#HeaderMenu2 .ulVar").eq(0).find("li a").click(function () {
  setLevel(LEVEL_JOIN, 'Shown');
}));
if(jQuery("#HeaderMenu2 .ulVar").eq(1).find("li a").click(function () {
  setLevel(LEVEL_JOIN, 'Shown');
}))

//mobile
jQuery("#HeaderMenu2 .ulVar").eq(1).find("li a").css("cssText", "color: red !important;");
jQuery("#HeaderMenu2 .ulVar").eq(2).find("li a").css("cssText", "color: red !important;");
if(jQuery("#HeaderMenu2 .ulVar").eq(1).find("li a").click(function () {
  setLevel(LEVEL_JOIN, 'Shown');
}));
if(jQuery("#HeaderMenu2 .ulVar").eq(2).find("li a").click(function () {
  setLevel(LEVEL_JOIN, 'Shown');
}))

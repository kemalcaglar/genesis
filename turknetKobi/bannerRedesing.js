jQuery("#kobi-ana-sayfa-linkler").css({"background":"#ff961a"})
jQuery("#page-5c0a68740e2e7239f9f0630f .sqs-block-content div").css({"color":"#fff","text-transform":"uppercase"})
setLevel(LEVEL_JOIN, "shown-banner");
jQuery("#page-5c0a68740e2e7239f9f0630f .sqs-block-content").each(function(){
    if(jQuery(this).find("a").text() == "KOBİ'lere Özel Hizmeti Keşfet >"){ 
    jQuery(this).click(function(){
        setLevel(LEVEL_JOIN, "click-hizmet");
    })
}
if(jQuery(this).find("a").text() == "KOBİ'lere Özel Paketleri İncele >"){ 
    jQuery(this).click(function(){
        setLevel(LEVEL_JOIN, "click-paket");
    })
}
if(jQuery(this).find("a").text() == "Memnuniyet Garantili >"){ 
    jQuery(this).click(function(){
        setLevel(LEVEL_JOIN, "click-memnuniyet");
    })
}
if(jQuery(this).find("a").text() == "TurkNet Uzmanlığını Keşfet >"){ 
    jQuery(this).click(function(){
        setLevel(LEVEL_JOIN, "click-uzman");
    })
}
})
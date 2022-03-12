if(jQuery(".cart-sub a span:eq(0)").text().trim().split("(")[1].split(")")[0] > 0){
    var title = document.title;
    var alttitle = "Sepetin Seni Bekliyor";
    window.onblur = function () { document.title = alttitle; };
    window.onfocus = function () { document.title = title; };
}
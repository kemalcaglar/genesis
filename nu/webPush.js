var OneSignal = window.OneSignal || [];
if (jQuery("#spnTopSepetToplamUrun").text().trim() > 0) {
    OneSignal.push(["sendTag", "SepetTerk_Webpush", "1"]);
}
if (window.location.href.indexOf("success") > -1) {
    OneSignal.push(function () { OneSignal.deleteTag("SepetTerk_Webpush"); });
} 



var breadcrumbText = [
    "NU Kids",
    "Koleksiyon",
    "Yeni Gelenler",
    "Final Sale",
    "Kadın",
]
jQuery("#ProductListMainContainer .categoryTitleText .breadcrumb li span").each(function () {
    if (breadcrumbText.find(x=>x===jQuery(this).text().trim())) {
        let breadcrumbName = jQuery(this).text().trim().split(" ")[0];
        console.log(breadcrumbName)
        OneSignal.push(["sendTag", "categorySegment", ""]);
    }
})


jQuery("#ProductListMainContainer .categoryTitleText .breadcrumb li span").each(function () {
    if (jQuery(this).text().trim() == "NU Kids") {
        OneSignal.push(["sendTag", "categorySegment", "kids"]);
    }
    if (jQuery(this).text().trim() == "Koleksiyon") {
        OneSignal.push(["sendTag", "categorySegment", "koleksiyon"]);
    }
    if (jQuery(this).text().trim() == "Yeni Gelenler") {
        OneSignal.push(["sendTag", "categorySegment", "yeni"]);
    }
    if (jQuery(this).text().trim() == "Final Sale") {
        OneSignal.push(["sendTag", "categorySegment", "final"]);
    }
    if (jQuery(this).text().trim() == "Kadın") {
        OneSignal.push(["sendTag", "categorySegment", "kadın"]);
    }
})
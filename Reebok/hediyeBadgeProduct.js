var productIdList = [
    "FX1294",
    "FX1715",
    "FY7545",
    "FY9401",
    "FY9405",
    "49799",
    "49800",
    "FX2991",
    "FY5027",
    "FY5028",
    "FY5029",
    "FY7264",
    "FY7265",
    "FZ0847",
    "49803",
    "49804",
    "FX2508",
    "FX2509",
    "GZ5260",
    "GZ5272",
    "FX2763",
    "FX2765",
    "2232",
    "3912",
]
var html = `<div class="text smpl-hediye-text" style="margin-bottom: 20px;margin-top: -10px;display: inline-flex;">
<span class="svg-icon "><svg height="19" role="img" viewBox="0 0 19 19" width="19"><use xlink:href="/Public/svg/icons.svg#ui-ok2"></use></svg></span>
<div style="margin-left: 2px;">Bu üründe çanta hediye</div></div>`
var dataIdProduct = dataLayer[1].ecommerce.detail.products[0].id
if (productIdList.find(x => x === dataIdProduct)) {
    jQuery(".p-info-section .d-flex").eq(0).after(html);
    var showCount = 0;
    jQuery(window).scroll(function () {
        var top_of_element = jQuery(".smpl-hediye-text").offset().top;
        var bottom_of_element =
            jQuery(".smpl-hediye-text").offset().top +
            jQuery(".smpl-hediye-text").outerHeight();
        var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
        var top_of_screen = jQuery(window).scrollTop();
        if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
            showCount == 0 ? setLevel(LEVEL_JOIN, "shown-banner") : false;
            showCount++;
        }
    });
}
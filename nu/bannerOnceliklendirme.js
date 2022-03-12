function setCookie(key, value, days) {
    var expires = new Date();
    if (days) {
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    } else {
        document.cookie = key + '=' + value + ';expires=Fri, 30 Dec 9999 23:59:59 GMT;';
    }
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

jQuery("#ulFlexSlider li").eq(0).click(function () {
    setCookie('sliderClick', 1, 365);
    setLevel(LEVEL_JOIN, "click-sliderOne");
})
jQuery("#ulFlexSlider li").eq(1).click(function () {
    setCookie('sliderClick', 2, 365);
    setLevel(LEVEL_JOIN, "click-sliderTwo");
})
jQuery("#ulFlexSlider li").eq(2).click(function () {
    setCookie('sliderClick', 3, 365);
    setLevel(LEVEL_JOIN, "click-sliderThree");
})
jQuery("#ulFlexSlider li").eq(3).click(function () {
    setCookie('sliderClick', 4, 365);
    setLevel(LEVEL_JOIN, "click-sliderFour");
})
jQuery("#ulFlexSlider li").eq(4).click(function () {
    setCookie('sliderClick', 5, 365);
    setLevel(LEVEL_JOIN, "click-sliderFive");
})
if (getCookie('sliderClick') == "1") {
    jQuery(".flex-control-nav.flex-control-paging li:eq(0) > a ").click()
    setLevel(LEVEL_JOIN, "shown-sliderOne");
}
if (getCookie('sliderClick') == "2") {
    jQuery(".flex-control-nav.flex-control-paging li:eq(1) > a ").click()
    setLevel(LEVEL_JOIN, "shown-sliderTwo");
}
if (getCookie('sliderClick') == "3") {
    jQuery(".flex-control-nav.flex-control-paging li:eq(2) > a ").click()
    setLevel(LEVEL_JOIN, "shown-sliderThree");
}
if (getCookie('sliderClick') == "4") {
    jQuery(".flex-control-nav.flex-control-paging li:eq(3) > a ").click()
    setLevel(LEVEL_JOIN, "shown-sliderFour");
}
if (getCookie('sliderClick') == "5") {
    jQuery(".flex-control-nav.flex-control-paging li:eq(4) > a ").click()
    setLevel(LEVEL_JOIN, "shown-sliderFive");
}
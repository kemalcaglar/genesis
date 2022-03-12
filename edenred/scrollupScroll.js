var css = `<style>
.smpl-none {
    display:none;
}
</style>`
jQuery("head").append(css);
jQuery('#go-to-top').addClass("smpl-none");
jQuery("#go-to-top").click(function () {
    //setLevel(LEVEL_JOIN, "click-scrollup");
})
var index = 0;
        jQuery(window).scroll(function () {
            index++;
            if (index === 1) {
                console.log("evet")
                //setLevel(LEVEL_JOIN, "shown-scrollup");
            }
            if (jQuery(window).scrollTop() > 250) {
                jQuery('#go-to-top').removeClass("smpl-none");   
            } else {
                jQuery('#go-to-top').addClass("smpl-none");
            }
        });
var css = `<style>
.smpl-visible{
    visibility: visible;
    opacity: 1;
}
</style>
`
jQuery("head").append(css);
if(jQuery("#spnTopSepetToplamUrun").text().trim() > 0){
    jQuery(".CartProduct.more").addClass("smpl-visible")
    setLevel(LEVEL_JOIN,"shown-basket");
setTimeout(function(){
    jQuery(".CartProduct.more").removeClass("smpl-visible")
},5000)
}
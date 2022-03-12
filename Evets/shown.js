var showCount = 0;
jQuery(window).scroll(function () {
  var top_of_element = jQuery(".smpl-banner").offset().top;
  var bottom_of_element =
    jQuery(".smpl-banner").offset().top +
    jQuery(".smpl-banner").outerHeight();
  var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
  var top_of_screen = jQuery(window).scrollTop();
  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    showCount == 0 ? setLevel(LEVEL_JOIN, "shown-banner") : false;
    showCount++;
  }
});

jQuery(window).scroll(function () {
if(jQuery(window).scrollTop() > 482){
  jQuery("#narrow-by-list").css({"margin-top":"10px"})
}else {
  jQuery("#narrow-by-list").css({"margin-top":"0"})
}
})
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 200) {
    jQuery(".smpl-menu").css({"display":"block"})
  } else {
    jQuery(".smpl-menu").css({"display":"none"})
  }
},100)

function scrollBlock() {
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 200) {
      jQuery(".smpl-menu").css({"display":"block"})
    } else {
      jQuery(".smpl-menu").css({"display":"none"})
    }
  })
}
var htmlButton = `<div class="smpl-button-main" style="bottom:40px;right:30%;position:absolute;justify-content: center;display: flex;text-align: center;align-items: center;width: 140px;z-index: 99999;">
<a class="button button-nobg mr-0 mr-xl-3 mb-3 mb-xl-0 smpl-button-basvur" style="position:fixed;" href="#target1">SİZİ ARAYALIM</a>
</div>
`
          jQuery(".button.button-nobg").each(function () {
            if (jQuery(this).text() == "SİZİ ARAYALIM") {
              jQuery(this).remove();
            }
          })
          setTimeout(() => {
            jQuery(".dexp-body-inner.layout-default.preset-light").prepend(htmlButton);
          }, 100);

          jQuery(window).scroll(function () {
            var top_of_element = jQuery("#lead-form").offset().top;
            var bottom_of_element =
              jQuery("#lead-form").offset().top +
              jQuery("#lead-form").outerHeight();
            var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
            var top_of_screen = jQuery(window).scrollTop();
            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
              jQuery(".smpl-button-main").css({ "display": "none" })
            } else {
              jQuery(".smpl-button-main").css({ "display": "flex" })
            }
          });
          setLevel(LEVEL_JOIN, "shown-button")
          jQuery(".smpl-button-main").click(function () {
            setLevel(LEVEL_JOIN, "click-button")
          })
          -----------

          var htmlButton = `<div class="smpl-button-main" style="bottom:40px;right:30%;position:absolute;justify-content: center;display: flex;text-align: center;align-items: center;width: 140px;z-index: 99999;">
<a class="button button-orangey-red smpl-button-basvur" style="position:fixed;" href="#target1">HEMEN BAŞVURUN</a>
</div>
`
          jQuery(".button.button-orangey-red").each(function () {
            if (jQuery(this).text() == "HEMEN BAŞVURUN") {
              jQuery(this).remove();
            }
          })
          setTimeout(() => {
            jQuery(".dexp-body-inner.layout-default.preset-light").prepend(htmlButton);
          }, 100);

          jQuery(window).scroll(function () {
            var top_of_element = jQuery("#lead-form").offset().top;
            var bottom_of_element =
              jQuery("#lead-form").offset().top +
              jQuery("#lead-form").outerHeight();
            var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
            var top_of_screen = jQuery(window).scrollTop();
            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
              jQuery(".smpl-button-main").css({ "display": "none" })
            } else {
              jQuery(".smpl-button-main").css({ "display": "flex" })
            }
          });
          setLevel(LEVEL_JOIN, "shown-button")
          jQuery(".smpl-button-main").click(function () {
            setLevel(LEVEL_JOIN, "click-button")
          })
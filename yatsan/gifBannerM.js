
          var html = `
          <div class="smpl-discount-banner" style="
          z-index: 999;"> 
              <img src="https://cdn.hellosmpl.com/uploads/2021/05/12/peda7t0e8sif6kk2f1v572dvis.gif" 
                style="width: 100%;">
          </div>`
          jQuery("#header").prepend(html);
          jQuery("#header .promo-bar").hide()
          jQuery("#header").css({"height":"135px"})
          jQuery("#home").css({"margin-top":"25px"})
          jQuery("#product-body").css({"margin-top":"25px"});
          jQuery("#department-banner").css({"margin-top":"25px"})
          jQuery(window).scroll(function () {
          if(jQuery(window).scrollTop() > 110){
            jQuery("#header").css({"height":"135px"})
          }else {
          jQuery("#header").css({"height":"135px"})
          }
          });
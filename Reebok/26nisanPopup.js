jQuery(".col-12.top-menu ul li").each(function(){
    if(jQuery(this).text().trim() == "Giriş Yap"){
        var heightWindow = window.innerHeight / 3 - 50
    var html=`<div class="smplPopup" style="display:block; position:fixed; top:`+heightWindow+`px; z-index:999999;">
        <img src="https://cdn.hellosmpl.com/uploads/2021/04/26/m4iv4isf6n5ua5d21rm8qcjqqe.jpg">
        <span class="smpl-close-popup" style="
    position: absolute;
    font-size: 30px;
    color: white;
    right: 20px;
    cursor:pointer;
">×</span>
              </div>`
              jQuery("body").append(html)
              //setLevel(LEVEL_JOIN,'shown-popup');
jQuery(".smpl-close-popup").click(function(){
    jQuery(".smplPopup").css({"display":"none"});
    //setLevel(LEVEL_JOIN,'click-close');
})
    }
    })

    https://cdn.hellosmpl.com/uploads/2021/04/26/gdadlrvkussb3gko1b7uei528m.jpg

    jQuery(".col-12.top-menu ul li").each(function () {
        if (jQuery(this).text().trim() == "Giriş Yap") {
          var heightWindow = window.innerHeight / 4 - 50
          var html = `<div class="smplPopup" style="position:fixed; top:` + heightWindow + `px; left:30%; z-index:999999; width:40%">
    <img src="https://cdn.hellosmpl.com/uploads/2021/04/26/m4iv4isf6n5ua5d21rm8qcjqqe.jpg">
    <span class="smpl-close-popup" style="
position: absolute;
font-size: 30px;
color: white;
right: 20px;
cursor:pointer;
">×</span>
          </div>`
          jQuery("body").append(html)
          //setLevel(LEVEL_JOIN, 'shown-popup');
          jQuery(".smpl-close-popup").click(function () {
            jQuery(".smplPopup").hide();
            //setLevel(LEVEL_JOIN, 'click-close');
          })
        }
      })
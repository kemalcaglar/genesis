jQuery(".widget-area-background").click(function () {
  jQuery(".widget-area-scroll").animate(
    {
      right: "-500px",
    },
    1000
  );
  setTimeout(() => {
    jQuery("#smpl.widget-area").css("display", "none");
    var aa = `<style>body{overflow:auto;}</style>`;
    jQuery("head").append(aa);
  }, 1000);
  setLevel(LEVEL_JOIN, "Close_List");
});


<span class="smpl-widget-close" 
style="font-size:30px; float:right; padding-left:5px; color:white; cursor:pointer;display: flex;margin-top: 7px; margin-right: 5px;">&#215;</span>


display: flex;
align-items: center;
justify-content: center; kaldır 

padding-top:7%; ekle


display: flex;
margin-top: 7px;
margin-right: 5px;


jQuery(".promotion-list .row.basket-row-height").eq(1).find(".iCheck-helper").click(function(){
  var jsonData = JSON.parse(localStorage.getItem("product"));
  var roomCampaingName = jQuery(".promotion-list .basket-text-top").eq(1).find("h6").text().trim()
  jQuery(jsonData).each(function (index, item) {
  if( roomCampaingName == "KoçAilem Kampanyası Şubat"){
    console.log("çalışıyor");
    item.roomCampaing == roomCampaingName;
  }
});
});
function() {
  $.blockUI({
    message: $("#preloader"),
    css: {
      border: 'none',
      color: '#000'
    }
  });
  $.ajax({
    type: "POST",
    url: "/Loyalty/ValidateKocailem",
    data: $("#frmKocAilemSorgula").serialize(),
    success: function(response) {
      if (response) {
        $("#kc").val("1");
        $("#kocAilemModal").modal("hide");
        window.location.reload();
      } else {
        alert("Bilgiler KoçAilem tarafından doğrulanmadı");
      }
      $.unblockUI();
    },
    failure: function(data, success, failure) {
      console.log("failure : " + failure);
      $.unblockUI();
    },
    error: function(data, success, error) {
      console.log("error : " + error);
      $.unblockUI();
    }
  });
}
var html = `<span style="font-weight:900; display:flex; margin-top:10px; margin-left:5px;">"72 saate kadar iade garantisinden ücretsiz yararlandınız"</span>`


if (jQuery("#kc").val() == 1) {
jQuery(".booking-item").append(html)
  
}






jQuery("#totalEsPrice").attr("value") // kutu işaretlendiğinde değer artıyor. 0'dan büyük değer alıyor
jQuery(".promotion-list h6:first").text().trim() == "KoçAilem Kampanyası Şubat" // İlk h6'da "KoçAilem Kampanyası Şubat" 
// yazıyorsa koç ailem ürünüdür. Tüm ürünler için kontrol edilmeli.


jQuery(".price-button").click(function(){
  var productName = jQuery(this).closest(".room-price-item-row").find(".price-name span:eq(0)").text().trim()
  sessionStorage.setItem("product", productName)
  })
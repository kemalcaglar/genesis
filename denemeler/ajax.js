var itemArray= null
jQuery.ajax({
    url: 'https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114',
  })
    .done(function( data ) {
       var arr = jQuery(data).find("item")
       itemArray =   arr.map((a,b)=>{
        var g  ={};
        g.name = jQuery(b).find("title").text();
        g.category = b.getElementsByTagName("g:google_product_category")[0].textContent
return g
    });
    });
    console.log(itemArray)


    ----------

var nameTwo = "nameAjax";

$.ajax({
    type: "PUT",
    url: "https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114",
    data: {name : nameTwo},
    dataType: "xml",
    success: function(xml) {
      $(xml).find('item').each(function () {
        var title = $(this).find('title').text();

          console.log(title)
        
        
    })
  }
});



<div id="ed-days-banner" 
style="position: relative;width: 100%;cursor: pointer;margin: 0 auto;text-align: center;background-color: #363466;height: 
40px;line-height: 15px;font-size: 12px !important;color:#1c1c1c">
<a href="https://www.setur.com.tr/koronavirus-hakkinda-bilgilendirme">
<p style="font-weight: 500 !important;padding-top: 8px; width:90%">
%50’ye varan Erken Rezervasyon Fırsatlarında Son 3 Gün
</p></a>
</div>
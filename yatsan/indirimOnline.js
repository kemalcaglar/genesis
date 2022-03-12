var productHtml = `<div style="top: 0;display: inline-grid;position: absolute;width: 10%;background: #d07a0b;left: 0;height: 24px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 16px;"><span style="">10% </span>
</div><div style="top: 33px;display: inline-grid;position: absolute;width: 15%;background: #4177d4;left: 0;height: 25px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;"><span style="">ONLINE ÖZEL</span>
</div>`
var productMobil = `<div class="smpl-product-online-badge" style="top: 26px;display: inline-grid;position: absolute;width: 27%;background: #4177d4;left: 40px;height: 21px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 10px;"><span style="">ONLINE ÖZEL</span>
</div>`


var categoryHtml = `
<div style="bottom: 50px;display: inline-grid;position: absolute;width: 20%;background: #d07a0b;right: 0;height: 24px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 16px;z-index: 99999;"><span style="">10% </span>
</div>
<div style="bottom: 16px;display: inline-grid;position: absolute;width: 30%;background: #4177d4;right: 0;height: 25px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;z-index: 9999;"><span style="">ONLINE ÖZEL</span>
</div>`

var displayPercent = function (product, percent) {
    product.parent().append("<span style='position:absolute;text-align:center;top:" +
      top + "px;left:" + discountPercentLeft + "px;z-index:" + discountPercentzIndex + " !important;color:#c41230;font-weight:bold;font-size:16px;'>%" + percent + " İndirim</span>")
  }

  var html =
  "<div class='scenario-" +
  scenarioId +
  "-" +
  variationId +
  "'>\
<span id='discount'>" + calculatedBadge
  +
  " İndirim</span>\
</div>";
jQuery("#p-image-area").prepend(html);

<span class="smpl-online-ozel" style="bottom: 2px;display: inline-grid;position: absolute;width: 57%;background: #4177d4;right: 0;height: 20px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 9px;z-index: 99999;">ONLINE ÖZEL</span>
  <span style="top: 241px;display: inline-grid;position: absolute;width: 32%;background: #d07a0b;right: 20px;height: 24px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 13px;z-index: 99999;">%" + percent + " İndirim</span>

  var dataCode = [
  "TTC-000503",
  "TTC-000505",
  "TTC-000506",
  "TTC-000492",
  "TTC-000504",
]
var html = `<span class="smpl-online-ozel" style="bottom: 21px;display: inline-grid;position: absolute;width: 46%;background: #4177d4;right: 20px;height: 24px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 13px;z-index: 99999;">ONLINE ÖZEL</span>`
 
jQuery(".piteminside").each(function(){
    if(dataCode.find(x=>x===jQuery(this).find(".product-info .product-name").attr("data-code"))){
      jQuery(this).find(".item-main-photo").append(html);
      setLevel(LEVEL_JOIN,'shown-badge');
    }
  })
  ---
  var dataCode = [
    "TTC-000503",
    "TTC-000505",
    "TTC-000506",
    "TTC-000492",
    "TTC-000504",
  ]
  var html = `<span class="smpl-online-ozel" style="bottom: 2px;display: inline-grid;position: absolute;width: 57%;background: #4177d4;right: 0;height: 20px;border-radius: 15px 0px 0px 15px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 9px;z-index: 99999;">ONLINE ÖZEL</span>
  `
   
  jQuery(".piteminside").each(function(){
      if(dataCode.find(x=>x===jQuery(this).find(".product-info .product-name").attr("data-code"))){
        jQuery(this).find(".item-main-photo").append(html);
        setLevel(LEVEL_JOIN,'shown-badge');
      }
    })

    -----
    var dataCode = [
      "TC-000503",
      "TC-000505",
      "TC-000506",
      "TC-000492",
      "TC-000504",
    ]
    var html = `<div class="smpl-product-online-badge" style="top: 43px;display: inline-grid;position: absolute;width: 27%;background: #4177d4;left: 0;height: 25px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;"><span style="">ONLINE ÖZEL</span>
    </div>`
     
        if(dataCode.find(x=>x===jQuery(".product-details .p-product-code span").eq(1).text().trim())){
          jQuery("#itemSlider .fancybox").append(html);
          setLevel(LEVEL_JOIN,'shown-badge');
        }
---
var dataCode = [
  "TC-000503",
  "TC-000505",
  "TC-000506",
  "TC-000492",
  "TC-000504",
]
var html = `<div class="smpl-product-online-badge" style="top: 26px;display: inline-grid;position: absolute;width: 27%;background: #4177d4;left: 40px;height: 21px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 10px;"><span style="">ONLINE ÖZEL</span>
</div>`
 
    if(dataCode.find(x=>x===jQuery(".product-details .p-product-code span").eq(1).text().trim())){
      jQuery("#itemSlider .fancybox").append(html);
      setLevel(LEVEL_JOIN,'shown-badge');
    }

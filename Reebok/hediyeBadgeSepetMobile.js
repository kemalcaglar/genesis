var productIdList = [
    "FX1294",
    "FX1715",
    "FY7545",
    "FY9401",
    "FY9405",
    "49799",
    "49800",
    "FX2991",
    "FY5027",
    "FY5028",
    "FY5029",
    "FY7264",
    "FY7265",
    "FZ0847",
    "49803",
    "49804",
    "FX2508",
    "FX2509",
    "GZ5260",
    "GZ5272",
    "FX2763",
    "FX2765",
    "2232",
    "3912",
]
var giftProduct = [
    "FQ5380"
]
if(jQuery(".top.d-flex.justify-content-between h3").text().trim() !== "Sepetinizde ürün bulunmamaktadır"){
var htmlImg = `<a href="https://www.reebok.com.tr">
<img class="smpl-bag-hediye mb-3px w-100" style="margin-bottom:10px;" src="//cdn.hellosmpl.com/uploads/2021/06/22/jfiksbobapjiv583bbhpdpccas.jpg">
</a>`
jQuery(".rb-campaign .inner").before(htmlImg);
//setLevel(LEVEL_JOIN, "shown-banner")
}

var html=`<div class='smpl-hediye-badge' style='
position: absolute;
top: 7px;
left: 1px;
padding: 2px;
display: flex;
white-space: nowrap;
letter-spacing: 2px;
line-height: 1.1em;
text-transform: uppercase;
font-size: 11px;
color: #000;
font-style: normal;
font-weight: 400;
max-width: 200px;
height: 25px;
justify-content: center;
text-align: center;
align-items: center;
background-color: #ebedee;'>Hediye Ürün</div>
`;
var cartItems = dataLayer[7].cartitems;
for (var j = 0; j < cartItems.length; j++)
if(productIdList.find(x=>x===cartItems[j].item)){
    for (var i = 0; i < cartItems.length; i++)
    if(giftProduct.find(x=>x===cartItems[i].item)){
        jQuery('.basket-item:eq('+i+') .product-image a').after(html);
        jQuery('.basket-item:eq('+i+') .one-price').css('text-decoration','line-through');
        //setLevel(LEVEL_JOIN, "shown-badge")
    }
}
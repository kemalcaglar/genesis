var css = '<style>\
.smpl-product-title {\
    justify-content: center;\
    text-align: center;\
    display: flex;\
    align-items: center;\
    margin-top: 30px;\
}\
.smpl-title {\
    width: 30%;\
    margin-right: 10px;\
    line-height: 1.2rem;\
}\
.smpl-number {\
    margin-right: 20px;\
    line-height: 1.2rem;\
}\
.smpl-price {\
    line-height: 1.2rem;\
}\
</style>\
'
jQuery("head").append(css);
if(jQuery(".product-count").text().split("")[0] > 0 ){
    jQuery(".icon-area.cart-info").trigger("click")
}
setTimeout(function(){
if(jQuery("#miniCartLayer .product-info").length > 0 ){
var href = jQuery("#miniCartLayer .product-info .list:first a").attr("href")
var imgSrc = jQuery("#miniCartLayer .product-info .list:first .product-title img").attr("src")
var title = jQuery("#miniCartLayer .product-info .list:first .product-title img").attr("title")
var number = jQuery("#miniCartLayer .product-info .list:first a .number").text().trim().split(" ")[0].trim()
var price = jQuery("#miniCartLayer .product-info .list:first a .price").text().trim().split(" ")[0].trim()
var hrefTwo = jQuery("#miniCartLayer .product-info .list:nth-child(2) a").attr("href")
var imgSrcTwo = jQuery("#miniCartLayer .product-info .list:nth-child(2) .product-title img").attr("src")
var titleTwo = jQuery("#miniCartLayer .product-info .list:nth-child(2) .product-title img").attr("title")
var numberTwo = jQuery("#miniCartLayer .product-info .list:nth-child(2) a .number").text().trim().split(" ")[0].trim()
var priceTwo = jQuery("#miniCartLayer .product-info .list:nth-child(2) a .price").text().trim().split(" ")[0].trim()
var html = '<div id="smpl-popup" style="position:fixed;\
    z-index: 99999;\
    width: 40%;\
    top: 30%;\
    display: grid;\
    left: 30%;\
    text-align: center;\
    height: auto;\
    align-items: center;\
    background-color: #F4F4F4;\
    padding: 30px 0;\
">\
<span class="smpl-popup-close" style="\
    position: absolute;\
    font-size: 30px;\
    top: 0;\
    right: 10px;\
    z-index: 999;\
    color: white;\
    cursor: pointer;\
">&times</span>\
<h3 style="\
    position: relative;\
    justify-content: center;\
    text-align: center;\
    align-items: center;\
    display: flex;\
    margin-bottom: 20px;\
    margin-top: -30px;\
    color: #fff;\
    padding: 20px;\
    background: #213976;\
    border-radius: 0 0 25px;\
    box-shadow: 2px 2px 0 2px #75c6c7;\
">SEPETİNİZDE ÜRÜN BULUNMAKTADIR</h3>\
    <div class="smpl-list" style="margin-bottom:30px; margin-top: -20px;">\
        <a href="'+ href +'" style="color:#839DB3; font-size: 0.75rem;">\
            <div class="smpl-product-title">\
                <img data-src="'+ imgSrc +'" alt="'+ title +'" title="'+ title +'" class=" lazyloaded" src="'+ imgSrc +'" style="margin-right:20px;">\
                    <span class="smpl-title">'+ title +'</span>\
                    <div class="smpl-number">'+ number +'<br>Adet</div>\
                    <div class="smpl-price">'+ price +' TL<br>KDV Dahil</div>\
                </div>\
        </a>\
    </div>\
    <div class="smpl-list" style="border-top: 1px dotted #839DB3;\
">\
        <a href="'+ hrefTwo +'" style="color:#839DB3; font-size: 0.75rem;">\
            <div class="smpl-product-title">\
                <img data-src="'+ imgSrcTwo +'" alt="'+ titleTwo +'" title="'+ titleTwo +'" class=" lazyloaded" src="'+ imgSrcTwo +'" style="margin-right:20px;">\
                    <span class="smpl-title">'+ titleTwo +'</span>\
                    <div class="smpl-number">'+ numberTwo +'<br>Adet</div>\
                    <div class="smpl-price">'+ priceTwo +' TL<br>KDV Dahil</div>\
                </div>\
        </a>\
    </div>\
    <div class="smpl-button" style="\
    margin-top: 20px;\
    border-top: 1px dotted #839DB3;">\
        <div class="col-xs-4 smpl-button-href" style="\
            display: flex;\
            width: 100%;\
            justify-content: center;\
            margin-top: 20px;\
        ">\
            <a href="/cart" class="go-cart" style="\
            color: #fff;\
            font-size: .875rem;\
            font-weight: 600;\
            background: #f9a14a;\
            padding: 5px 8px;\
            -webkit-border-radius: 2px;\
            -moz-border-radius: 2px;\
        ">Sepetime Git</a>\
        </div>\
    </div>\
</div>\
'

    jQuery("body").prepend(html);
    setLevel(LEVEL_JOIN, "shown-popup")
    jQuery(".icon-area.cart-info").trigger("click")
}
},3000);
setTimeout(function(){
    jQuery(".smpl-popup-close").click(function(){
        jQuery("#smpl-popup").hide();
        setLevel(LEVEL_JOIN, "click-close")
    })
    jQuery(".smpl-button-href").click(function(){
        setLevel(LEVEL_JOIN, "click-button")
    })
    jQuery(".smpl-list").click(function(){
        setLevel(LEVEL_JOIN, "click-product")
    })
},3100)


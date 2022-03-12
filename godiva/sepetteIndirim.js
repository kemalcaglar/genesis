var arrId = [
    "01510-09",
    "01549-19",
    "04746-00",
    "04746-01",
    "04751-02",
    "04749-03",
    "04746-02",
    "04743-00",
    "01549-11",
    "01593-07",
    "01510-08",
    "01512-05",
    "01593-01",
    "01593-03",
    "04743-03",
    "04743-02",
    "04746-04",
    "04746-09",
    "04743-01",
    "04746-03",
    "04747-03",
    "01546-01",
    "01512-09",
    ]
var html = `
<span class="smpl-discountProduct" style="
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    color: #ff0000;
    font-weight: 500;
">Sepette %20 İndirim</span>
`
var id = jQuery(".product-info__details .product-code").text().trim().split(" ")[4]
if((arrId.includes(id))){
    jQuery(".product-info .hr").before(html);
}
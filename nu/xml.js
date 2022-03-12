var XMLobject = [],
  productInCookie = [],
  XMLData,
  productGender,
  productFromBasket,
  productFromBasketCount,
  html;
var dataController = function () {
  var setData = function (data) {
    XMLData = data;
    return XMLData;
  };
  var pushDataToArray = function (iterator, item, salePrice, gender) {
    var title = iterator.getElementsByTagName("g:title")[0];
    var link = iterator.getElementsByTagName("g:link")[0];
    var imageSrc = iterator.getElementsByTagName("g:image_link")[0];
    var price = iterator.getElementsByTagName("g:price")[0];
    var dataCode = iterator.getElementsByTagName("g:mpn")[0];
    item["salePrice"] = salePrice.textContent;
    item["price"] = price.textContent;
    item["dataCode"] = dataCode.textContent;
    item["gender"] = gender;
    item["imgSrc"] = imageSrc.textContent;
    item["link"] = link.textContent;
    item["title"] = title.textContent;
    XMLobject.push(item);
  };
  var getData = function (data) {
    console.log(data);
    data = data.getElementsByTagName("channel")[0];
    console.log(data);
    jQuery(data).each(function (index, dataItem) {
      var items = dataItem.getElementsByTagName("item"); // item elementleri geliyor.
      /* item elemtnleri tek tek alınıyor. for of kullnaılmasının sebebi index ile işimizin olmaması */
      for (var iterator of items) {
        var item = {}; //data içine gönderilecek olan itemler için
        /* find ile "g:" şeklinde olan elementlere ulaşılamıyor. */
        var itemCategory = iterator.getElementsByTagName(
          "g:google_product_category"
        )[0].textContent;
        var category = window.location.pathname;
          if (itemCategory === "Bluz") {
            item.name = iterator.getElementsByTagName("title")[0].textContent;
            XMLobject.push(item)
          }
      }
      setData(XMLobject);
    });
  };
  var runAjax = function () {
    jQuery.ajax({
      type: "GET",
      url: "https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114",
      dataType: "xml",
      success: function (response) {
        getData(response);
      },
    });
  };
  runAjax();
};
dataController();
var displayHtml = function (){
/*  for each map*/
  html = '<p> '
}
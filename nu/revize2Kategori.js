
var windowWidth = jQuery(window).width() / 4;

Math.rastgele=function(alt, ust){
  let sayi=Math.random(); 
  sayi=sayi*(ust-alt);
  sayi=Math.floor(sayi)+alt;
  return sayi; 
  }
  var eqOne    = ( Math.rastgele(0,2) );
  var eqTwo    = ( Math.rastgele(3,6) );
  var eqThree  = ( Math.rastgele(7,9) );
  var eqFour   = ( Math.rastgele(10,11) );

  var arrEq = [
    
    eqOne,
    eqTwo,
    eqThree,
    eqFour,
];

for (let arrEq = 0; arrEq < 5; arrEq++) {
}

var html = `
<h1 style="justify-content: center;display: flex;">KATEGORİNİN EN ÇOK GEZİLENLERİ</h1>
<div class="flexslider carousel">

<div class="flex-viewport" style="overflow: hidden; position: relative;">

<ul class="slides" style="width: 2400%;">`

arrEq.map(function (arrEqs) {
  var productName = jQuery(".productName")
    .eq(arrEqs)
    .text()
    .trim();
    var productSrc = jQuery(".resimOrginal")
    .eq(arrEqs)
    .attr("src");
    var productHref = jQuery(".productName")
    .eq(arrEqs)
    .find("a")
    .attr("href");
    var productPrice = jQuery(".discountPrice")
    .eq(arrEqs)
    .text()
    .split('KDV')[0]
    .trim();
 
html += `<li style=" float: left; display: block;" data-thumb-alt="">
  <a href="`+productHref+`"><img style="width:` + windowWidth + `px !important;" src="` + productSrc + `"/>
  <div class="productName">
    <a title="` + productName + `" href="` + productHref + `">` + productName + `</a>
  </div>
  <div class="productPrice">
    <div class="discountPrice">
      <span>` + productPrice + `</span>
    </div>
  </div>
</li>
`
});
html+=` </ul></div>
</div>`;
jQuery("#ProductPageProductList").prepend(html);


var slideWidth = jQuery('.slider ul li').width();
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
  var eqFive   = ( Math.rastgele(12,14) );
  var eqSix    = ( Math.rastgele(15,17) );
  var eqSeven  = ( Math.rastgele(18,20) );
  var eqEight  = ( Math.rastgele(21,23) );

  var arrEq = [
    
    eqOne,
    eqTwo,
    eqThree,
    eqFour,
    eqFive,
    eqSix,
    eqSeven,
    eqEight,
];
var abc= ["Bluz"]
$.ajax({
    url: 'https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114',
  })
    .done(function( data ) {
        var arr = jQuery(data).find("item")
        var allItem =   arr.map((index,_data)=>{
        var item  ={};
        item.name = jQuery(_data).find("title").text();
        item.category = _data.getElementsByTagName("g:google_product_category")[0].textContent;
        item.price = _data.getElementsByTagName("g:price")[0].textContent;
        item.salePrice = _data.getElementsByTagName("g:sale_price")[0].textContent;
        item.href = jQuery(_data).find("link").text();
        if(typeof _data.getElementsByTagName("g:image_link")[0] !== 'undefined'){
        item.imgSrc = _data.getElementsByTagName("g:image_link")[0].textContent;
return item
}
    });
var bluz=   allItem.filter((x,y)=> y.category === abc[0])
var bluz2 = [];
arrEq.map(function (index,data) {
  bluz2.push(bluz[data]);

})
var html = `<section class="slider">
<h1 style="justify-content: center;display: flex;">KATEGORİNİN EN ÇOK GEZİLENLERİ</h1>
<div class="flexslider carousel">

<div class="flex-viewport" style="overflow: hidden; position: relative;">

<ul class="slides" style="width: 2400%;">`

bluz2.map(function (index,data) {
  
 
html += `<li style=" float: left; display: block;" data-thumb-alt="">
  <a href="`+data.href+`"><img style="width:` + windowWidth + `px !important;" src="` + data.imgSrc + `"/>
  <div class="productName">
    <a title="` + data.name + `" href="` + data.href + `">` + data.name + `</a>
  </div>
  <div class="productPrice">
    <div class="discountPrice">
      <span>` + data.salePrice + `</span>
    </div>
  </div>
</li>
`
});
html+=` </ul></div>
<ul class="flex-direction-nav">
<li class="flex-nav-prev">
  <a class="flex-prev"></a>
</li>
<li class="flex-nav-next">
  <a class="flex-next"></a>
</li>
</ul></div>
</section>`;
jQuery("#ProductPageProductList").prepend(html);

jQuery('.flexslider').flexslider({
  animation: "slide",
  animationLoop: false,
  itemWidth: 210,
  itemMargin: 5,
  minItems: 2,
  maxItems: 4
});
jQuery(".flex-control-nav.flex-control-paging").css({"bottom":"-30px"});

    });


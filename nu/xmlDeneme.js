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
      type: "GET",

      url: "https://www.nu.com.tr/XMLExport/D5BA7D76CBAB492B9F9A8BABB63BF114",

      dataType: "xml",
    })
      .done(function (xml) {
        var arr = jQuery(xml).find("item")
        var allItem =   arr.map((index,_xml)=>{
            var item  ={};
            item.title = jQuery(_xml).find("title").text();
            item.category = _xml.getElementsByTagName("g:google_product_category")[0].textContent;
          }); //close each(
            var bluz =  allItem.filter((x,y)=> y.category === abc[0])
            var bluz2 = [];
            arrEq.map(function (index,xml) {
              bluz2.push(bluz[xml]);
            })
      })


      console.log(bluz2);
Math.rastgele = function (alt, ust) {
  let sayi = Math.random();
  sayi = sayi * (ust - alt);
  sayi = Math.floor(sayi) + alt;
  return sayi;
};
var peopleBasket = Math.rastgele(1, 9);

var html = `<div style="position: relative;margin-top: 20px;" class=""><img src="https://cdn.hellosmpl.com/uploads/2021/04/28/l27707iuqv45nmphb5b24op915.png" style="
    position: absolute;
    bottom: -7px;
    left: 8px;
"><span style="
    border: 2px solid #c41230;
    padding: 10px;
    border-radius: 10px;
    background: #c41230;
    color: #fefefe;
    font-size: 13px;
    font-weight: 600;
    padding-left: 50px;
" class="">ÜRÜN `+peopleBasket+` KİŞİNİN SEPETİNDE</span></div>`;
jQuery(".p-options").prepend(html);

setLevel(LEVEL_JOIN, "shown-banner");
var winWidth = win_width / 2 - 400;
Math.rastgele = function (alt, ust) {
  let sayi = Math.random();
  sayi = sayi * (ust - alt);
  sayi = Math.floor(sayi) + alt;
  return sayi;
};
var randomNumber = Math.rastgele(1, 10);
console.log(randomNumber);
if (randomNumber == 8) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/f3b8i3knlsndrmeumqfiknnqn.png";
} else if (randomNumber == 1) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/899085n5qrqonga6j27dl02j13.png";
} else if (randomNumber == 2) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/tfmh37d4tm1rbkrvu4ur7cj6cn.png";
} else if (randomNumber == 3) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/qb34dqjuptr38ep8ei8i219q28.png";
} else if (randomNumber == 4) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/ck79r1fsuaug92vjhkssqmbobe.png";
} else if (randomNumber == 5) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/dh5ci8vc6ug3r5g4sk1b895q7d.png";
} else if (randomNumber == 6) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/bhafujr7g248lv71nk3lqio8vf.png";
} else if (randomNumber == 7) {
  var imgSrc =
    "https://cdn.hellosmpl.com/uploads/2021/04/29/hbv5vd8uve59qn52q561c3s4sf.png";
}
var html =
  `<div class="smplPopup" style="    position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;">
  <div style="position:fixed;">
  <span class="smpl-closePopup"style="
    font-size: 30px;
    position: absolute;
    font-weight: 900;
    right: 30px;
    cursor:pointer;
">×</span>
<a href="https://multinet.com.tr/multinet-ile-online-alisveris">
    <img src="` +
  imgSrc +
  `"></img>
    </a>
  </div>
</div>`;
jQuery("body").append(html);
//setLevel(LEVEL_JOIN,'shown-popup');
jQuery(".smpl-closePopup").click(function(){
  jQuery(".smplPopup").css({"display":"none"});
  //setLevel(LEVEL_JOIN,'click-close');
})

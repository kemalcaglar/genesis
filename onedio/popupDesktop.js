var scenarioId = "scenarioId";
var variationId = "variationId";
var smplObj = {
  scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
  scenarioName: "scenario-" + scenarioId + "-" + variationId,
};
var css = `
<style>
`+ smplObj.scenarioClass + `-main {
position: fixed;
z-index: 999999;
top: 0px;
width: 100%;
height: 100vh;
}
`+ smplObj.scenarioClass + `-overlay {
position: absolute;
z-index: 999998;
background-color: rgba(0, 0, 0, 0.8);
top: 0px;
width: 100%;
height: 100vh;
}
`+ smplObj.scenarioClass + `-content {
position: absolute;
z-index: 99999999;
}
`+ smplObj.scenarioClass + `-close {
cursor: pointer;
width: 30px;
height: 50px;
right: 10px;
top: 10px;
position: absolute;
z-index: 9999;
font-size: 35px;
color: #fff;
text-align: center;
font-weight: bold;
}
`+ smplObj.scenarioClass + `-popup-news {
width: 600px;
height: 370px;
background: #fff;
border: 1px solid #00A2E8;
border-radius: 8px;
box-shadow: 0px 0px 5px 1px #fff;
}
`+ smplObj.scenarioClass + `-news {
  box-shadow: 0px 0px 5px 1px grey;
  margin: 23px;
  border: 1px solid #00A2E8;
  padding: 5px;
  border-radius: 5px;
}

`+ smplObj.scenarioClass + `-popup-news h2 {
line-height: 13px;
font-size: 19px;
color: #fff;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
padding: 20px;
font-weight: 700;
background: #00A2E8;
border-radius: 2px;
}
`+ smplObj.scenarioClass + `-popup-news span {
position: absolute;
left: -5px;
bottom: -5px;
color: #fff;
background: #00A2E8;
padding: 2px 7px;
border-top-right-radius: 2px;
border-bottom-right-radius: 2px;
font-size: 15px;
font-weight: bold;
}
</style>`;
jQuery('head').append(css);
var html = `
                <div class="`+ smplObj.scenarioName + `-main">
                <div class="`+ smplObj.scenarioName + `-overlay"></div>
                <div class="`+ smplObj.scenarioName + `-content" style="top:` +
  (window.innerHeight - 400) / 2 +
  'px;left:' +
  (window.innerWidth - 500) / 2 +
  `px;">
                <div class="`+ smplObj.scenarioName + `-close">×</div>
                <div class="`+ smplObj.scenarioName + `-popup-news">
                <h2>BUNLARI OKUMADAN GİTME!</h2>
                <div class="`+ smplObj.scenarioName + `-news">
                <a href="/haber/icraatleriyle-herkesin-sevgisini-kazanan-mansur-yavas-goreve-geldiginden-beri-neler-yapti-1001750" title="İcraatleriyle Herkesin Sevgisini Kazanan Mansur Yavaş Göreve Geldiğinden Beri Neler Yaptı?" target="_blank" style="display: flex;align-items: center;">
                <div style="position:relative;"> 
                <img src="https://img-s1.onedio.com/id-61339c14ac0df7541a2025fe/rev-0/w-190/h-110/f-jpg/s-ab4b7079719f54191632dc1b3323b5eb582b4374.jpg" style="width: 190px;height: 110px;float: left;" alt="İcraatleriyle Herkesin Sevgisini Kazanan Mansur Yavaş Göreve Geldiğinden Beri Neler Yaptı?" class="main-image">
                <span>1</span>
                </div>
                <h3 style="
font-size: 15px;
line-height: 25px;
color: #000;
font-weight: 600;
margin-left: 5px;
">İcraatleriyle Herkesin Sevgisini Kazanan Mansur Yavaş Göreve Geldiğinden Beri Neler Yaptı?</h3></a>
                <div>
                </div>
                  </div>
                <div class="`+ smplObj.scenarioName + `-news">
                <a href="/haber/tayyip-erdogan-neden-kucuk-cocuklarla-bile-kavga-ediyor-1001805" title="Cumhurbaşkanı Recep Tayyip Erdoğan Neden Küçük Çocuklarla Bile Kavga Ediyor?" target="_blank" style="display: flex;align-items: center;">
                <div style="position:relative;"> 
                <img src="https://img-s2.onedio.com/id-613495ebb952b06227e82bcb/rev-0/w-190/h-110/f-jpg/s-fd7028e285e4bcac2bf729dc18185c01b6040d48.jpg" style="width: 190px;height: 110px;float: left;" alt="Cumhurbaşkanı Recep Tayyip Erdoğan Neden Küçük Çocuklarla Bile Kavga Ediyor?" class="main-image">
                <span>2</span>
                </div>
                <h3 style="
font-size: 15px;
line-height: 25px;
color: #000;
font-weight: 600;
margin-left: 5px;
">Cumhurbaşkanı Recep Tayyip Erdoğan Neden Küçük Çocuklarla Bile Kavga Ediyor?</h3></a>
                <div>
                </div>
                  </div>
                </div>
                  </div>
                </div>
                `;
jQuery('body').prepend(html);

jQuery(smplObj.scenarioClass + "-news a").each(function(){
  jQuery(this).on({
      mouseenter: function () {
          jQuery(this).find("h3").css("color", "#00A2E8");
          jQuery(this).find("h3").animate({ 'zoom': 1.1 }, 400);
      },
      mouseleave: function () {
          jQuery(this).find("h3").css("color", "#231F20");
          jQuery(this).find("h3").animate({ 'zoom': 1 }, 400);
      }
  });
})
  jQuery(smplObj.scenarioClass + "-close").click(function () {

    jQuery(smplObj.scenarioClass + "-main").remove();
  });
jQuery(smplObj.scenarioClass + "-overlay").click(function () {

  jQuery(smplObj.scenarioClass + "-main").remove();
});
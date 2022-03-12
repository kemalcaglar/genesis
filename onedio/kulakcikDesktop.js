var scenarioId = "scenarioId";
var variationId = "variationId";
var smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
  };
  function showKulakcik() {
    var css = `<style>
.smpl-kulakcik-container {
position: fixed;
top: 32%;
z-index: 60;
width: 400px;
height: auto;
right: -417px;
display: flex;
border: 3px solid #00A2E8;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
font-family: "PT Sans","Open Sans","Helvetica Neue",sans-serif;
}
.smpl-quickg-outside {
display: flex;
position: fixed;
right: -120px;
background: #00A2E8;
top: 45%;
transform: translate(-50%,-50%) rotate( 
-90deg
);
line-height: 15px;
padding: 10px;
color: #fff;
letter-spacing: 4px;
font-size: 18px;
font-weight: 700;
border-radius: 5px;
cursor:pointer;
}
.smpl-outside-txt {
position: absolute;
top: 50%;
left: 50%;
width: 270px;
height: 36px;
line-height: 36px;
letter-spacing: 5px;
text-transform: uppercase;
transform: translate(-50%,-50%) rotate(
-90deg
);
overflow: hidden;
font-size: 12px;
font-weight: 400;
text-align: center;
}
.smpl-inside-text {
position: relative;
float: left!important;
width: 400px;
height: auto;
display: inline-grid;
background: #fff;
color: #000;
font-size: 14px;
line-height: 25px;
}
.smpl-inside-text span {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background: #00A2E8;
    padding: 0px 5px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    font-size: 15px;
    font-weight: bold;
}
.smpl-kulakcik-container-close {
position: absolute;
right: 10px;
font-size: 30px;
color: #fff;
cursor: pointer;
top: 10px;
font-weight:bold;
z-index: 9;
}
.smpl-news {
height: auto;
padding: 10px;
}
.smpl-news a {
float: left;
display: flex;
}
.smpl-news a img{
width: 110px;
height: 64px;
}
.smpl-news a h5{
color: #231F20;
font-weight: 700;
font-size: 13px;
line-height: 17px;
padding: 10px;
}
</style>
`

    var html = `
<div class="smpl-quickg-outside"> 
 <span>TRENDİNG</span>
</div>
<div class="smpl-kulakcik-container">
<span class="smpl-kulakcik-container-close">&times</span>\
<div class="smpl-inside-text">
<h2 style="
COLOR: #fff;
justify-content: center;
text-align: center;
align-items: center;
display: flex;
padding:5px;
font-size: 23px;
background:#00A2E8;
"><img src="https://cdn.8digits.com/log/r/f7119755-8046-4b2a-8e72-e7055cdf32f9.png" class="" style="
margin-right: 10px;
width:25px;
border-radius:100%
">TRENDİNG</h2>
<header class="smpl-news">
    <a href="/haber/kadinlar-seni-ne-kadar-cekici-buluyor-998874?ref=desktopSidebar" title="Kadınlar Seni Ne Kadar Çekici Buluyor?">
    <div style="position:relative;">
        <img src="https://img-s2.onedio.com/id-611ea291155e97a8155a8c23/rev-0/w-300/h-150/f-jpg/s-ec7810a04b479c6ef02d53750cb8c932821a2265.jpg" alt="Kadınlar Seni Ne Kadar Çekici Buluyor?" class="main-image">
        <span>1</span>
    </div>    
        <h5 class="">Kadınlar Seni Ne Kadar Çekici Buluyor?</h5>
    </a>
</header>
<header class="smpl-news">
    <a href="/haber/diyanet-isleri-baskani-ciddi-risk-var-dedi-sosyal-medya-yasasi-zorunluluk-1001827" title="Diyanet İşleri Başkanı 'Ciddi Risk Var' Dedi: 'Sosyal Medya Yasası Zorunluluk'" target="_blank">
    <div style="position:relative;">    
        <img src="https://img-s1.onedio.com/id-6134b657955b183949f38dcc/rev-0/w-190/h-110/f-jpg/s-d36e97f74fd598fa52beab894029fc40f2c20167.jpg" alt="Diyanet İşleri Başkanı 'Ciddi Risk Var' Dedi: 'Sosyal Medya Yasası Zorunluluk'" class="main-image">
        <span>2</span>
        </div>
        <h5>Diyanet İşleri Başkanı 'Ciddi Risk Var' Dedi: 'Sosyal Medya Yasası Zorunluluk'</h5>
    </a>
</header>
<header class="smpl-news">
    <a href="/haber/makinistten-igrenc-yorum-bendeki-les-sayisi-16-1001801" title="Makinistten İğrenç Yorum: 'Bendeki Leş Sayısı 16'" target="_blank">
    <div style="position:relative;">
        <img src="https://img-s1.onedio.com/id-613490146fecce6e42afd87a/rev-0/w-190/h-110/f-jpg/s-ba40eb12088849018bfb2b056c3acae148ba5a66.jpg" alt="Makinistten İğrenç Yorum: 'Bendeki Leş Sayısı 16'" class="main-image">
        <span>3</span>
        </div>
        <h5>Makinistten İğrenç Yorum: 'Bendeki Leş Sayısı 16'</h5>
    </a>
</header>
</div>
</div>`

    if (jQuery(".smpl-kulakcik-container").length == 0) {
      jQuery("head").append(css);
      jQuery("body").append(html);
      jQuery(".smpl-quickg-outside").hide();
      jQuery(".smpl-kulakcik-container").animate({
        right: "0"
      }, 1200)
      jQuery(".smpl-news a").each(function(){
        jQuery(this).on({
            mouseenter: function () {
                jQuery(this).find("h5").css("color", "#00A2E8");
                jQuery(this).find("h5").animate({ 'zoom': 1.1 }, 400);
            },
            mouseleave: function () {
                jQuery(this).find("h5").css("color", "#231F20");
                jQuery(this).find("h5").animate({ 'zoom': 1 }, 400);
            }
        });
      })

    }
    //setLevel(LEVEL_JOIN, 'shown-kulakcik');
    jQuery(".smpl-quickg-outside").click(function () {
      //setLevel(LEVEL_JOIN, 'click-kulakcik');
      jQuery(".smpl-quickg-outside").hide();
      jQuery(".smpl-kulakcik-container").animate({
        right: "0"
      }, 1200)
    })
    jQuery(".smpl-kulakcik-container-close").click(function () {
      //setLevel(LEVEL_EXIT, 'click-close');
      jQuery(".smpl-quickg-outside").show();
      jQuery(".smpl-kulakcik-container").animate({
        right: "-417px"
      }, 1200)
    });
  }
  var bodyHeight = jQuery("body").height()
  var yuzde60 = (bodyHeight / 100) * 60
  jQuery(window).scroll(function () {
    if (jQuery(".smpl-kulakcik-container").length == 0) {
      if (jQuery(window).scrollTop() > yuzde60) {
        showKulakcik();
      }
    }
  });
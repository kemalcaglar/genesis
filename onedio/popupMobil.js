var scenarioId = "scenarioId";
var variationId = "variationId";
var smplObj = {
  scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
  scenarioName: "scenario-" + scenarioId + "-" + variationId,
};
function showPopup() {
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
margin-left: -10px;
}
`+ smplObj.scenarioClass + `-content {
position: absolute;
z-index: 99999999;
}
`+ smplObj.scenarioClass + `-close {
cursor: pointer;
width: 30px;
height: 50px;
right: 0;
top: -7px;
position: absolute;
z-index: 9999;
font-size: 35px;
color: #fff;
text-align: center;
font-weight: bold;
}
`+ smplObj.scenarioClass + `-popup-news {
width: 300px;
height: 515px;
background: #fff;
border: 1px solid #00A2E8;
border-radius: 3px;
box-shadow: 0px 0px 5px 0px #fff;
}
`+ smplObj.scenarioClass + `-popup-news h2 {
line-height: 18px;
font-size: 15px;
color: #fff;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin-top: 0;
padding: 10px 0;
margin-bottom: -7px;
background: #00A2E8;
}
</style>`;
  jQuery('head').append(css);
  var html = `
                <div class="`+ smplObj.scenarioName + `-main">
                <div class="`+ smplObj.scenarioName + `-overlay"></div>
                <div class="`+ smplObj.scenarioName + `-content" style="top:` +
    (window.innerHeight - 500) / 2 +
    'px;left:' +
    (window.innerWidth - 325) / 2 +
    `px;">
                <div class="`+ smplObj.scenarioName + `-close">×</div>
                <div class="`+ smplObj.scenarioName + `-popup-news">
                <h2>BUNU OKUMADAN KAÇMA!</h2>
                
                <div style="margin: 15px;border: 1px solid #00A2E8;padding: 5px;border-radius:5px;box-shadow:0px 0px 5px 0px #000;">
                <a href="/haber/giybet-kazani-gectigimiz-haftayi-sarsan-skandal-dedikodularla-yine-fokur-fokur-kayniyor-1001845" target="_blank"><figure class="ar"><div style="padding-top: 50%;"></div><img src="https://img-s2.onedio.com/id-6134d662050df8a64f0f1081/rev-0/w-300/h-150/f-jpg/s-381992e4e21f951fff3ee561ca6c4a78188f1c84.jpg" class="main-image"></figure><h3 style="
line-height: 15px;
font-size: 14px;
color: #000;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
">Gıybet Kazanı Geçtiğimiz Haftayı Sarsan Skandal Dedikodularla Yine Fokur Fokur Kaynıyor!</h3></a>
                <div>
                </div>
                  </div><div style="margin: 15px;border: 1px solid #00A2E8;padding: 5px;border-radius:5px;box-shadow:0px 0px 5px 0px #000;">
                  <a href="/haber/okurken-kendi-ailenizi-gorup-bizimkiler-de-aynen-boyle-diyeceginiz-durumlar-aile-evi-kurallari-1001655" target="_blank"><figure class="ar"><div style="padding-top: 50%;"></div><img src="https://img-s1.onedio.com/id-6132ab3e056332fc6d2eedbc/rev-0/w-300/h-150/f-jpg/s-e4ca04ba212e1487bb98cb2f5e7333358589321a.jpg" class="main-image"></figure><h3 style="
line-height: 15px;
font-size: 14px;
color: #000;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
">Okurken Kendi Ailenizi Görüp 'Bizimkiler de Aynen Böyle!' Diyeceğiniz Durumlar: Aile Evi Kuralları</h3></a>
                  <div>
                  </div>
                    </div>
                <div>
                
                  </div>
                  </div>
                </div>
                `;
  if (jQuery(smplObj.scenarioClass + "-main").length < 1) {
    jQuery('body').prepend(html);
  }
  jQuery(smplObj.scenarioClass + "-close").click(function () {

    jQuery(smplObj.scenarioClass + "-main").hide();
  });
  jQuery(smplObj.scenarioClass + "-overlay").click(function () {

    jQuery(smplObj.scenarioClass + "-main").hide();
  });
}
function scolled_300px() {
  let lastScrollAt = Date.now();
  let timeout;
  let scroll_long = 0;
  let first_scroll_top;

  function scrollStartStop() {
    var $this = jQuery(this);
    if (Date.now() - lastScrollAt > 100)
      $this.trigger('scrollstart');
    lastScrollAt = Date.now();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (Date.now() - lastScrollAt > 99)
        $this.trigger('scrollend');
    }, 100);
  }

  jQuery(document).on('scroll', scrollStartStop);

  jQuery(document).on('scrollstart', function () {
    first_scroll_top = jQuery(document).scrollTop();
  });

  jQuery(document).on('scrollend', function () {
    scroll_long = jQuery(document).scrollTop() - first_scroll_top;
    if (scroll_long > 300) {
      showPopup()
    }
  });

}
if (jQuery(smplObj.scenarioClass + "-main").length < 1) {
  scolled_300px()
}
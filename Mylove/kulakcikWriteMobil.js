var css = `<style>
.smpl-kulakcik-container {
    position: fixed;
    bottom: 135px;
    z-index: 60;
    width: 281px;
    height: 280px;
    right: -257px;
    display: flex;
}
.smpl-quickg-outside {
    position: relative;
    display: inline-block;
    width: 31px;
    height: 280px;
    color: #fff;
    cursor: pointer;
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
    width: 320px;
    height: 280px;
    display: inline-grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-left: 2px solid white;
    background: #000;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
}
.smpl-inside-text span {
    border: 2px solid #fff;
    width: 230px;
    border-radius: 10px;
    padding: 10px;
}
.smpl-kulakcik-container-close {
    position: absolute;
    right: 10px;
    font-size: 30px;
    color: #000;
    cursor: pointer;
    top: -35px;
    font-weight:bold;
}
</style>
`

var html = `
<div class="smpl-kulakcik-container">
    <div class="smpl-quickg-outside" style="background-color: rgb(0, 0, 0);"> 
         <div class="smpl-outside-txt" style="color: rgb(255, 255, 255);">AYNI GÜN TESLİMAT
         </div>
    </div>
    <span class="smpl-kulakcik-container-close">&times</span>\
    <div class="smpl-inside-text">
    <span>BİLGİLENDİRME</span>
    <span>İstanbul içi 12:00'den önce vereceğiniz siparişlerde aynı gün teslimat seçeneği!</span>
    <span>Şile, Sarıyer, Çatalca, Kartal, Pendik, Silivri bölgelerine aynı gün kargo imkanı bulunmamaktadır.</span>
    <span>Aynı gün teslimat kargoları 12:00'den 23:00'a kadar dağıtım sağlanır.</span>
    </div>
</div>`

jQuery("head").append(css);
jQuery("body").append(html);

//setLevel(LEVEL_JOIN, 'shown-kulakcik');
jQuery(".smpl-quickg-outside").click(function(){
    //setLevel(LEVEL_JOIN, 'click-kulakcik');
    jQuery(".smpl-kulakcik-container").animate({
        right: "0"
      }, 1200)
})
jQuery(".smpl-kulakcik-container-close").click(function () {
    //setLevel(LEVEL_EXIT, 'click-close');
    jQuery(".smpl-kulakcik-container").animate({
      right: "-257px"
    }, 1200)
  });
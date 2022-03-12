function showKulakcik() {
    var img =
      'https://cdn.hellosmpl.com/uploads/2021/06/30/j3986affblejpgachin99mjabm.png';
    var html = `<div class="smpl-kulakcik-kampanya" style="position:fixed;display:flex;right:-300px;bottom:10px;z-index: 999999;cursor:pointer;">
                      <a href="https://www.porland.com/katalog"><img class="smpl-img" src="` + img + `"></a>
                      <span class="smpl-kampanya-close" style="position: absolute;right: 10px;font-size: 25px;color: #000;cursor: pointer;top: -22px;">×</span>
                      </div>
          `;
    jQuery('body').prepend(html);
    jQuery('.smpl-kulakcik-kampanya').animate({
      right:"10px"
},1200)
    jQuery('.smpl-kampanya-close').click(function () {
      jQuery('.smpl-kulakcik-kampanya').remove();
    });
    jQuery('.smpl-img').click(function () {
        
    });
    setLevel(LEVEL_JOIN,'shown-kulakcik');
  }
  showKulakcik();
  var img = "https://cdn.hellosmpl.com/uploads/2021/06/30/tv55r7rq8ekrq1ioh2ueim4vg0.png";
  var html = `
  <div class="smpl-yeni-katalog" style="position: relative;left: 100px;display: inline-block;cursor: pointer;">
  <a href="https://www.porland.com/katalog"><img src="`+img+`" style="display: block;margin-left: 22px;">
     <span style="font-size: 14px;">Yeni Katalog</span></a>
 </div>
  `
jQuery("#search").after(html);
jQuery(".smpl-kulakcik-kampanya").click(function(){
    setLevel(LEVEL_JOIN,'click-kulakcik');
})
jQuery(".smpl-kampanya-close").click(function(){
    setLevel(LEVEL_EXIT,'click-close');
})
setLevel(LEVEL_JOIN,'shown-katalog');
jQuery(".smpl-yeni-katalog").click(function(){
    setLevel(LEVEL_JOIN,'click-katalog');
})
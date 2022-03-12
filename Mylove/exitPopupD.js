var css = `
<style>
.smpl-popup-main-exit {
  position: fixed;
  z-index: 999999;
  top: 0px;
  width: 100%;
  height: 100vh;
}
  .smpl-overlay-exit {
    position: absolute;
    z-index: 999998;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0px;
    width: 100%;
    height: 100vh;
  }
  .smpl-content-exit {
    position: absolute;
    z-index: 99999999;
  }
    .smpl-close-exit {
      cursor: pointer;
      width: 30px;
      height: 50px;
      right: 10px;
      top: 4px;
      position: absolute;
      z-index: 9999;
      font-size: 35px;
      color: #fff;
      text-align: center;
      font-weight: bold;
    }
</style>`;
jQuery('head').append(css);
var imageWidth = 600;
var img =
    'https://cdn.hellosmpl.com/uploads/2021/06/29/9kuv11j557sde6a42st1devlok.jpg';
var href =
    'https://www.mylovebutik.com/super-fiyat';
var html = `
    <div class="smpl-popup-main-exit">
    <div class="smpl-overlay-exit"></div>
    <div class="smpl-content-exit" style="top:` +
    (window.innerHeight - 600) / 2 +
    'px;left:' +
    (window.innerWidth - 600) / 2 +
    `px;">
    <div class="smpl-close-exit">×</div>
    <a href="`+ href + `"><img class="smpl-popup-img-exit" style="cursor:pointer;width:` +
    imageWidth +
    `px;" src="` +
    img +
    `">
      </div>
      </a>
    </div>
    `;
jQuery('body').prepend(html);
setLevel(LEVEL_JOIN, "shown-popup");
jQuery(".smpl-close-exit").click(function(){
    setLevel(LEVEL_EXIT, "click-close");
    jQuery(".smpl-popup-main-exit").remove()
})
jQuery(".smpl-overlay-exit").click(function(){
    setLevel(LEVEL_EXIT, "click-overlay");
    jQuery(".smpl-popup-main-exit").remove()
})
jQuery(".smpl-popup-img-exit").click(function(){
    setLevel(LEVEL_JOIN, "click-popup");
})
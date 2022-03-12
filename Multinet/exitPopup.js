var css = `
<style>
.smpl-popup-main {
  position: fixed;
  z-index: 999999;
  top: 0px;
  width: 100%;
  height: 100vh;
}
  .smpl-overlay {
    position: absolute;
    z-index: 999998;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0px;
    width: 100%;
    height: 100vh;
  }
  .smpl-content {
    position: absolute;
    z-index: 99999999;
  }
    .smpl-close {
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
var img = "https://cdn.hellosmpl.com/uploads/2021/08/12/q8oe9iudeid75tcmnbngr4bdn9.jpg";
var imageWidth = 600;
var href =
    'https://www.peynircibaba.com/?utm_source=google&utm_medium=banner&utm_campaign=eylul_mult';
var html = `
                          <div class="smpl-pb-popup-main">
                          <div class="smpl-pb-overlay"></div>
                          <div class="smpl-pb-content" style="top:` +
    (window.innerHeight - 400) / 2 +
    'px;left:' +
    (window.innerWidth - 600) / 2 +
    `px;">
                          <div class="smpl-pb-close">×</div>
                          <a href="`+ href + `"><img class="smpl-pb-popup-img" style="cursor:pointer;width:` +
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
jQuery('.smpl-pb-close').click(function () {
    setLevel(LEVEL_EXIT, "click-close");
    jQuery('.smpl-pb-popup-main').remove();
  });
  jQuery('.smpl-pb-overlay').click(function () {
    setLevel(LEVEL_EXIT, "click-overlay");
    jQuery('.smpl-pb-popup-main').remove();
  });
  jQuery('.smpl-pb-popup-img').click(function () {
    setLevel(LEVEL_JOIN, "click-popup");
  })
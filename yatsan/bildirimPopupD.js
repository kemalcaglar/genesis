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
    background: white;
    padding: 35px;
    line-height: 15px;
  }
    .smpl-close {
      cursor: pointer;
      width: 30px;
      right: 10px;
      top: 10px;
      position: absolute;
      z-index: 9999;
      font-size: 35px;
      color: gray;
      text-align: center;
      font-weight: bold;
    }
</style>`;
jQuery('head').append(css);
var html = `
                          <div class="smpl-popup-main">
                          <div class="smpl-overlay"></div>
                          <div class="smpl-content" style="top:` +
    (window.innerHeight - 200) / 2 +
    'px;left:' +
    (window.innerWidth - 900) / 2 +
    `px;">
                          <div class="smpl-close">×</div>
                          <span>Teknik aksaklık nedeniyle talebiniz iletilememiştir. Mesai saatleri içerisinde talepleriniz için ilgili <strong>444 35 99</strong> Müşteri Hizmetleri ile iletişime geçebilirsiniz.</span>
                            </div>
                          </div>
                          `;
jQuery('body').prepend(html);
//setLevel(LEVEL_JOIN, "shown-bildirim");
jQuery('.smpl-close').click(function () {
    //setLevel(LEVEL_EXIT, "click-close");
    jQuery('.smpl-popup-main').remove();
  });
  jQuery('.smpl-overlay').click(function () {
    //setLevel(LEVEL_EXIT, "click-overlay");
    jQuery('.smpl-popup-main').remove();
  });
var css = `<style>
.smpl {
    position: fixed;
    left: 0px;
    bottom: 0;
    z-index: 999;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
.smpl-span {
    background: #fff;
    position: absolute;
    padding: 10px;
    line-height: 24px;
    font-size: 11px;
    border-radius: 10px;
    border: 1px solid red;
    width: 132px;
    left: 0;
    font-weight: 700;
    top: 40px;
    letter-spacing: 1px;
}
.smpl-img {
    z-index: 1;
    margin-left: 45px;
}
</style>
`
jQuery("head").append(css);
  var img = "https://cdn.hellosmpl.com/uploads/2021/09/09/ulo3sov7pc53m2jv1ccjpp1on8.png"

  var html = `
  <div class="smpl"><span class="smpl-span">App Birlikte Buradayız!<br>
  Binlerce Eğlenceli Test İçin Onedio App!</span><img class="smpl-img" src="`+img+`"></div>`

  jQuery("body").append(html)

  --
  var img = "https://cdn.hellosmpl.com/uploads/2021/09/09/ulo3sov7pc53m2jv1ccjpp1on8.png"
  var css = `
  <style>
  .smpl-popup-main {
    position: fixed;
    z-index: 999999;
    top: 0px;
    width: 100%;
    height: 100vh;
    margin-left: -10px;
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
      background: #fff;
      border-radius: 10px;
      border: 1px solid #000;
    }
      .smpl-close {
        cursor: pointer;
        width: 30px;
        height: 50px;
        right: 5px;
        top: 0;
        position: absolute;
        z-index: 9999;
        font-size: 35px;
        color: #000;
        text-align: center;
        font-weight: bold;
      }
      .smpl-span {
        position: absolute;
        padding: 10px;
        line-height: 24px;
        font-size: 11px;
        width: 100px;
        left: 0;
        font-weight: 600;
        top: 25px;
        letter-spacing: 1px;
        color: #000
    }
  </style>`;
jQuery('head').append(css);
var imageWidth = 300;
var href =
  'https://www.avansas.com/my-account/update-profile';
var html = `
            <div class="smpl-popup-main">
            <div class="smpl-overlay"></div>
            <div class="smpl-content" style="top:` +
  (window.innerHeight - 300) / 2 +
  'px;left:' +
  (window.innerWidth - 300) / 2 +
  `px;">
            <div class="smpl-close">×</div>
            <a href="`+ href + `"><span class="smpl-span">App Birlikte Buradayız!<br>
            Binlerce Eğlenceli Test İçin Onedio App!</span><img class="smpl-popup-img" style="cursor:pointer;margin-bottom:-4px;width:` +
  imageWidth +
  `px;" src="` +
  img +
  `">
              </div>
              </a>
            </div>
            `;
jQuery('body').prepend(html);

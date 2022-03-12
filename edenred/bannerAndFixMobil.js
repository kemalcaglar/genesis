var html = `
<div class="smpl-app-main" style="height: 50px;position: relative;">
    <div class="smpl-app-banner" style="width: 100%;justify-content: space-around;display: flex;text-align: center;align-items: center;position: fixed;z-index: 9999999;background: #fff;height: 50px;box-shadow: #9e9c9c 1px 1px 10px;font-weight: bold;font-size: 15px;color: #605c5c;">
            <img src="https://i.ibb.co/vz96rsW/download.png" style="width: 24px;">
            <a class="smpl-app-link" style="cursor:pointer;font-weight: 600;letter-spacing: 1px;word-spacing: 5px;" href="https://www.edenred.com.tr/ticket-mobil-uygulamasi#download">
            Uygulamamızı İndirin
            </a>
            <span class="smpl-app-close" style="font-size: 30px; cursor:pointer;">×</span>
    </div>
</div>`
jQuery(".dexp-body-inner.layout-default.preset-light").prepend(html);
jQuery(".sticky-wrapper").css({"position":"fixed"});
setLevel("LEVEL_JOIN", "shown-banner");
jQuery(".smpl-app-close").click(function(){
    jQuery(".smpl-app-main").remove();
    setLevel("LEVEL_JOIN", "click-close");
})
jQuery(".smpl-app-link").click(function(){
    setLevel("LEVEL_JOIN", "click-banner");
})
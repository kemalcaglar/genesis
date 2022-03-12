var scenarioId = "scenarioId";
var variationId = "variationId";
let smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    setCookie: function (cname, cvalue, min) {
        let d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    fireEvent: function (label, eventName) {
        let device = window.innerWidth <= 768 ? "mobile" : "desktop";
        if (options.sendEvent) {
            if (label === "exit") {
                setLevel(LEVEL_EXIT, eventName + "(" + device + ")")
            } else if (label === "join") {
                setLevel(LEVEL_JOIN, eventName + "(" + device + ")")
            }
        }
    },
};
var innerWidth = (window.innerWidth - 320) / 2
var innerHeight = (window.innerHeight - 180) / 2
var embedVideo = '<iframe width="320" height="180" src="https://www.youtube.com/embed/dN7qW-vTlmo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
var html = `
   <div id="ed-Videocover" style="position: fixed;top: `+ innerHeight + `px;left: ` + innerWidth + `px;width: 320px;height: 180px;z-index: 99;">
   <div class="ed-videoArea" style="width: 320px;height: 180px;position: absolute;background: #fff;z-index: 99;">`+ embedVideo + `</div>
   <div id="ed-closeVideo" style="cursor: pointer;position: absolute;right: 10px;z-index: 999;top: -20px;display: block;">
<img style="width: 15px;height: 15px;" src="https://cdn.8digits.com/log/r/6e3a911b-ebe0-4408-8dae-16b5b625d0d7.png">
   </div>
   </div>
`;
jQuery("body").append(html);
setTimeout(function () {
    jQuery('#ed-closeVideo').css('display', 'block');
}, 1000);
jQuery('#ed-closeVideo').click(function () {
    jQuery('#ed-closeVideo').remove();
    jQuery('#ed-Videocover').remove();
})
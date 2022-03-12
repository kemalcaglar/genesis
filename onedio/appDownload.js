var scenarioId = "scenarioId";
var variationId = "variationId";
const smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    img: "https://cdn.hellosmpl.com/uploads/2021/09/09/ulo3sov7pc53m2jv1ccjpp1on8.png",
    setCookie: function (cname, cvalue, min) {
        var d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}
if (!smplObj.getCookie("appCount")) {
    smplObj.setCookie("appCount", "1");
} else if (smplObj.getCookie("appCount") == "1") {
    smplObj.setCookie("appCount", "2");
} else if (smplObj.getCookie("appCount") == "2") {
    smplObj.setCookie("appCount", "3");
} else if (smplObj.getCookie("appCount") == "3") {
    smplObj.setCookie("appCount", "4");
} else if (smplObj.getCookie("appCount") == "4") {
    smplObj.setCookie("appCount", "5");
} else if (smplObj.getCookie("appCount") == "5") {
    smplObj.setCookie("appCount", "6");
} else if (smplObj.getCookie("appCount") == "6") {
    smplObj.setCookie("appCount", "7");
} else if (smplObj.getCookie("appCount") == "7") {
    smplObj.setCookie("appCount", "8");
} else if (smplObj.getCookie("appCount") == "8") {
    smplObj.setCookie("appCount", "9");
} else if (smplObj.getCookie("appCount") == "9") {
    smplObj.setCookie("appCount", "10");
} else if (smplObj.getCookie("appCount") == "10" || smplObj.getCookie("appCount") == "1" || smplObj.getCookie("appCount") == "2" || smplObj.getCookie("appCount") == "3" || smplObj.getCookie("appCount") == "4") {
    var css = `
  <style>
  `+smplObj.scenarioClass+`-main {
    position: fixed;
    z-index: 999999;
    top: 0px;
    width: 100%;
    height: 100vh;
    margin-left: -10px;
  }
    `+smplObj.scenarioClass+`-overlay {
      position: absolute;
      z-index: 999998;
      background-color: rgba(0, 0, 0, 0.6);
      top: 0px;
      width: 100%;
      height: 100vh;
    }
    `+smplObj.scenarioClass+`-content {
      position: absolute;
      z-index: 99999999;
      background: #ede9e9;
      border-radius: 10px;
      border: 1px solid #000;
      width: 350px;
    }
      `+smplObj.scenarioClass+`-close {
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
      `+smplObj.scenarioClass+`-span {
        position: absolute;
        padding: 10px;
        line-height: 24px;
        font-size: 14px;
        width: 100px;
        left: 0;
        font-weight: 500;
        top: 14px;
        letter-spacing: 2px;
        color: #000
    }
    `+smplObj.scenarioClass+`-app {
        position: absolute;
        bottom: 25px;
        left: 10px;
        padding: 6px;
        border-radius: 5px;
        width: 100px;
        background: #bd2c2c;
        display: flex;
        justify-content: center;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 700;
        box-shadow: 1px 2px 4px 1px #000;
        font-size: 17px;
    }
  </style>`;
    jQuery('head').append(css);
    var imageWidth = 300;
    var href =
        'https://onedio.com/';
    var html = `
            <div class="`+smplObj.scenarioName+`-main">
            <div class="`+smplObj.scenarioName+`-overlay"></div>
            <div class="`+smplObj.scenarioName+`-content" style="top:` +
        (window.innerHeight - 300) / 2 +
        'px;left:' +
        (window.innerWidth - 350) / 2 +
        `px;">
            <div class="`+smplObj.scenarioName+`-close">×</div>
            <span class="`+smplObj.scenarioName+`-span">App Birlikte Buradayız!<br>
            Binlerce Eğlenceli Test İçin Onedio App!</span><a href="`+ href + `"><span class="`+smplObj.scenarioName+`-app">İndir</span><img class="`+smplObj.scenarioName+`-popup-img" style="cursor:pointer;margin-bottom:-4px;margin-left:45px;width:` +
        imageWidth +
        `px;" src="` +
        smplObj.img +
        `">
              </div>
              </a>
            </div>
            `;
    jQuery('body').prepend(html);
    //setLevel(LEVEL_JOIN, "shown-popup")
    jQuery(smplObj.scenarioClass+'-popup-img').click(function () {
        //setLevel(LEVEL_JOIN, "click-popup")
    })
    jQuery(smplObj.scenarioClass+'-close').click(function () {
        //setLevel(LEVEL_EXIT, "click-close")
        jQuery(smplObj.scenarioClass+"-main").remove();
    });
    jQuery(smplObj.scenarioClass+'-overlay').click(function () {
        //setLevel(LEVEL_EXIT, "click-overlay")
        jQuery(smplObj.scenarioClass+"-main").remove();
    });
}

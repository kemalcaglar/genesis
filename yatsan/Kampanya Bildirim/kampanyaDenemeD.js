var css = `
<style>
.smpl-container {
  display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin-top: -57px;
    position: fixed;
    bottom: 50px;
    left: 75px;
}
.smpl-title-href {
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    background: #673d27;
    color: #fff;
    letter-spacing: 2px;
    font-size: 15px;
}
.smpl-campaing {
  border-bottom: 1px solid #000;
  padding: 15px 2px;
}
.smpl-discount {
    background: darkblue;
    border-radius: 100%;
    padding: 10px 4px;
    color: white;
    font-size: 15px;
}
.smpl-text {
  margin-left: 5px;
  font-weight: bold;
  color: #000;
  font-size: 13px;
}
</style>
`
jQuery("head").append(css);

var scenarioId = "scenarioId";
var variationId = "variationId";
let smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    campaing: "https://yatsan.com/d/kampanyalar",
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
var discountList = {
  1: {
    discount: "40%",
    text: "Yastık Festivaliyle Doğru Yastığı Bul!",
    href: "https://yatsan.com/d/yastik?utm_source=smpl&utm_medium=icon&utm_campaign=yastik-fest",
  },
  2: {
    discount: "25%",
    text: "King Koil Yeni Koleksiyonu Keşfet!",
    href: "https://yatsan.com/d/king-koil-yataklar?utm_source=smpl&utm_medium=icon&utm_campaign=king-koil",
  },
  3: {
    discount: "35%",
    text: "Serta Yataklar %35 İndirimli!",
    href: "https://yatsan.com/d/yataklar?m=serta&utm_source=smpl&utm_medium=icon&utm_campaign=serta",
  }
};

var html = `
<div class="`+ smplObj.scenarioName + `">
    <div class="smpl-menu">
        <span class="smpl-count">3</span>
        <ul>
            <li class="smpl_list_item">
                <div class="smpl-container">
                    <a href="https://yatsan.com/d/kampanyalar" class="smpl-title-href">
                        <span>BAŞLIK</span>
                    </a>
`
for (let arr in discountList) {
  html = html + `
<div class="smpl-campaing">
    <a href="`+ discountList[arr].href + `">
        <span class="smpl-discount">`+ discountList[arr].discount + `</span>
        <span class="smpl-text">`+ discountList[arr].text + `</span>
    </a>
</div>
`
}
html = html + `
</div>
`
jQuery(html).insertAfter(jQuery("#wrap"));

jQuery(".smpl-menu").click(function () {
  if (jQuery(".smpl-menu").hasClass("active")) {
    jQuery(".smpl-menu").remove();
    jQuery(".smpl-menu").removeClass("active");
    //setLevel(LEVEL_EXIT, "click-close");
  } else {
    jQuery(".smpl-menu").addClass("active");
    //setLevel(LEVEL_JOIN, "Open-Notification");
  }
});
jQuery(".smpl-menu a:first").click(function () {
  //setLevel(LEVEL_JOIN, "click-kampanyalara");
});         
 jQuery(".smpl-menu li a").eq(0).click(function(){
  //setLevel(LEVEL_JOIN, "click-bir");
  });
  jQuery(".smpl-menu li a").eq(1).click(function(){
  //setLevel(LEVEL_JOIN, "click-iki");
  });
  jQuery(".smpl-menu li a").eq(2).click(function(){
  //setLevel(LEVEL_JOIN, "click-uc");
  });
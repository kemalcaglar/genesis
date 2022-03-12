var scenarioId = "scenarioId";
var variationId = "variationId";
const smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    setCookie: function (cname, cvalue, min) {
        const d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    debounce: function (func, timeout) {
        let timer;
        return function (...args) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), timeout);
        };
    },
    fireEvent: function (eventLabel, minutes) {
        const device = window.innerWidth <= 768 ? "mobile" : "desktop";
        const eventName = eventLabel + "(" + device + ")";
        if (minutes === 0) {
            if (options.sendEvent) {
                if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                } else {
                    setLevel(LEVEL_JOIN, eventName);
                }
            } else {
                console.log("event: ", eventName);
            }
        } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
            if (options.sendEvent) {
                if (eventName.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventName);
                } else {
                    setLevel(LEVEL_JOIN, eventName);
                }
                smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
            } else {
                console.log("event: ", eventName);
                smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
            }
        }
    }
};
var redBell = "https://cdn.hellosmpl.com/uploads/2020/12/18/m42t6i9foq7cobaoseavg5fb59.png";
var redClose = "https://cdn.hellosmpl.com/uploads/2020/12/18/q5evuiocqvosifvkl04cgrr4o6.png";
var html = `
<div class="smpl-menu" >
<span class="smpl-count">2</span>
  <ul>
    <li class="smpl_list_item">
       <div style="display:flex;flex-direction:column;width:380px;">
        <div class="container" style="display:flex;flex-direction:row;background:white;height:85px;border-radius: 5px;
    border: 2px solid #000;">
        <div style="width:100%">
          <div style="color:black;display:flex;flex-direction:column;font-size: 16px;font-weight: 600;">
            <div style="text-align:center;border-bottom: 1px solid;">
                <a href="https://www.mylovebutik.com/yaza-elveda" style="color: black;">%80’e varan indirimler </a>
              </div>
              <div style="text-align:center;">
                <a href="https://www.mylovebutik.com/2.-urun-25-tl" style="color: black;">2. Ürün 25 TL </a>
              </div>
            </div>
          </div>
        </div>
       </div>
   </li>
  </ul>
</div>`

jQuery("body").append(html);
setLevel(LEVEL_JOIN, 'shown-noti');
jQuery(".smpl-menu").click(function () {
    if (jQuery(".smpl-menu").hasClass("active")) {
        jQuery(".smpl-menu").removeClass("active");
    } else {
        jQuery(".smpl-menu").addClass("active");
        setLevel(LEVEL_JOIN, 'click-open');
    };
});

jQuery(".smpl-menu li a").eq(0).click(function () {
    setLevel(LEVEL_JOIN, "click-bir");
})
jQuery(".smpl-menu li a").eq(1).click(function () {
    setLevel(LEVEL_JOIN, "click-iki");
})
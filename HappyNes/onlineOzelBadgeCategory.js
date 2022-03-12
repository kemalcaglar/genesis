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
var css = `
<style>
.smpl-online-ozel {
    bottom: 5px;
    display: inline-grid;
    position: absolute;
    width: 110px;
    background: #4177d4;
    right: 0;
    height: 24px;
    border-radius: 15px 0px 0px 15px;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    font-weight: 600;
    font-size: 13px;
    z-index: 99999;
}
</style>
`
jQuery("body").append(css);
var html = `<span class="${smplObj.scenarioName}">ONLINE ÖZEL</span>`

jQuery(".product-item").append(html);
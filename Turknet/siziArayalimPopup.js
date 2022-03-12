var smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    backgroundImage: "https://cdn.hellosmpl.com/uploads/2021/05/29/gc2bt7jep2ipgnv8u5std1tlb2.png",
    triggerImg: "https://cdn.hellosmpl.com/uploads/2021/05/31/bsgq38a26asghgiabb8245u57u.png",
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
    },
};
const sendEvent = (eventKey, data, done) => {
    const trackingCode = "l3vb0m7r";
    const visitorCode = Math.floor(Math.random() * 100000000 + 1);
    const sessionCode = Math.floor(Math.random() * 100000000 + 1);
    const hitCode = Math.floor(Math.random() * 100000000 + 1);
    const domain = "www.hellosmpl.com";

    const getServiceUrl = (path, params) => {
        return (
            "https://hit.8digits.com/" +
            path +
            "?trackingCode=" +
            trackingCode +
            "&visitorCode=" +
            visitorCode +
            "&sessionCode=" +
            sessionCode +
            "&domain=" +
            domain +
            "&hitCode=" +
            hitCode +
            "&path=&rnd=&" +
            Object.keys(params)
                .map((key) => key + "=" + params[key])
                .join("&")
        );
    };

    const createImage = (source, onload) => {
        const image = new Image();
        image.src = source;
        image.onload = onload;
    };

    const hitUrl = getServiceUrl("hit", {
        obj: ""
    });
    const attrUrl = getServiceUrl("setattrs", {
        obj: encodeURIComponent(JSON.stringify(data)),
    });
    const eventUrl = getServiceUrl("event", {
        key: eventKey,
        value: ""
    });

    createImage(hitUrl, () =>
        createImage(attrUrl, () => createImage(eventUrl, done))
    );
};
var validationColor = function (elem) {
    var el = elem;
    (el.style.border = "1px solid red"),
        setTimeout(function () {
            el.style.border = "none";
        }, 1000);
};
var formatPhoneNumber = function (element) {

    if (element.which !== 0 && element.keycode !== 0 &&
        element.which !== 32 && element.keycode !== 32 &&
        (element.which < 48 || element.which > 57) &&
        element.which !== 13 && element.keycode !== 13) {
        return false;
    } else {
        var phoneField = element.target;
        var phoneValue = phoneField.value;
        var output;
        phoneValue = phoneValue.replace(/[^0-9]/g, ''); /* 05350237843 */

        var area = phoneValue.substr(1, 3);
        var pre = phoneValue.substr(4, 3);
        var tel = phoneValue.substr(7, 4);

        if (area.length < 3) {
            if (area.length === 1 && parseInt(area) !== 5) {
                output = "0(";
            } else {
                output = "0(" + area;
            }
        } else if (area.length === 3 && pre.length < 3) {
            output = "0(" + area + ")" + pre;
        } else if (area.length === 3 && pre.length === 3) {
            output = "0(" + area + ")" + pre + "-" + tel;
        }
        phoneField.value = output;
    }
}
var eventController = function () {
    var domObject = {
        closeButton: smplObj.scenarioClass + '__close',
        allShow: smplObj.scenarioClass + '__content',
        overlay: smplObj.scenarioClass + '__overlay',
        inputPhone: smplObj.scenarioClass + ' .__inp_phone',
        inputKvkk: smplObj.scenarioClass + ' .__KVKK_check',
        inputName: smplObj.scenarioClass + ' .__inp_name',
        kvkkHref: smplObj.scenarioClass + ' .__KVKK_link',
        submitShow: smplObj.scenarioClass + '__submit_show',
    }
    document.querySelector(domObject.closeButton).onclick = function () {
        document.querySelector(domObject.allShow).remove();
        document.querySelector(domObject.overlay).remove();
        document.querySelector(smplObj.scenarioClass).remove()
    };
    document.querySelector(domObject.overlay).onclick = function () {
        document.querySelector(domObject.allShow).remove();
        document.querySelector(domObject.overlay).remove();
        document.querySelector(smplObj.scenarioClass).remove()
    };

    function addListenerMulti(element, eventNames, listener) {
        eventNames.split(' ').forEach(e => element.addEventListener(e, listener, false));
    }
    addListenerMulti(document.querySelector(domObject.inputPhone), "paste click keydown keyup focus", function (event) {
        formatPhoneNumber(event)
    });
    try {
        document.querySelector(domObject.submitShow).onclick = function () {
            if (document.querySelector(domObject.inputKvkk).checked === true) {
                if (document.querySelector(domObject.inputName).value.length > 2) {
                    if (document.querySelector(domObject.inputPhone).value.length === 14) {
                        var data = {
                            phone: document.querySelector(domObject.inputPhone).value,
                            nameSurname: document.querySelector(domObject.inputName).value,
                        };
                        sendEvent("TurknetForm1dk", data, () => { });
                        document.querySelector(domObject.overlay).remove();
                        document.querySelector(domObject.allShow).remove();
                        document.querySelector(smplObj.scenarioClass).remove()

                    } else {
                        validationColor(document.querySelector(domObject.inputPhone)[0]);
                        document.querySelector("PhoneW").style.display = "block";
                        setTimeout(function () {
                            document.querySelector("PhoneW").style.display = "none";
                        }, 2000);
                    }
                } else {
                    validationColor(document.querySelector(domObject.inputName)[0]);
                    document.querySelector("NameW").style.display = "block";
                    setTimeout(function () {
                        document.querySelector("NameW").style.display = "none";
                    }, 2000);
                }
            } else {
                document.querySelector(domObject.kvkkHref).style.border = "2px solid red";
                setTimeout(function () {
                    document.querySelector(domObject.kvkkHref).style.border = "none";
                }, 2000);
            }
        };
    } catch (ex) {
        console.log(ex);
    }
}
var displayHtml = function () {
    var html =
        '\
         <div class="' + smplObj.scenarioName + '">\
          <div class="' + smplObj.scenarioName + '__content">\
            <!-- <img class="__contentImg" src="' + smplObj.backgroundImage + '"> -->\
            <div class="' + smplObj.scenarioName + '__contentRelative">\
              <div class="' + smplObj.scenarioName + '__close"></div>\
              <input type="text" class="__inp_name inpt" placeholder="Adınız ve Soyadınız">\
              <input type="text" class="__inp_phone inpt" placeholder="&nbsp;&nbsp; Telefon Numaranız"/>\
              <div class="smpl__warning NameW">Lütfen Adınızı Giriniz</div>\
              <div class="smpl__warning PhoneW">GSM numaranızı (5xx)xxxxxxxx formatında giriniz</div>\
              <input type="checkbox" class="__KVKK_check">\
              <a href="https://turk.net/kvk-aydinlatma-metni" class="__KVKK_link" target="_blank"></a>\
              <div class="' + smplObj.scenarioName + '__submit_show"></div>\
            </div>\
          </div>\
          <div class="' + smplObj.scenarioName + '__overlay"></div>\
        </div>';
    document.querySelector("body").insertAdjacentHTML("beforeend", html)
    callController()
    function callController() {

        if (document.querySelector(smplObj.scenarioClass)) {
            eventController();
        } else {
            callController()
        }
    }
};

var control = function () {
    if (smplObj.getCookie("smpl-gigafiber-tag")) {
        return false
    }
    if (window.self !== window.top) {
        return false;
    }
    if (
        window.navigator.userAgent.indexOf("MSIE") > 0 ||
        !!navigator.userAgent.match(/Trident.*rv\:11\./)
    ) {
        return false;
    }
    if (smplObj.getCookie("ed-KobiVisited-control") === "on") {
        return false;
    } else {
        return true
    }
}

var init = function () {
    if (control() === true) {

        var html = '<div class="' + smplObj.scenarioName + '__trigger">\
    <img src="' + smplObj.triggerImg + '" style="height: 170px;">\
    </div>'
        jQuery("body").prepend(html)
        document.querySelector(smplObj.scenarioClass + "__trigger").onclick = function () {
            displayHtml();
        }
    }
}

init()
          
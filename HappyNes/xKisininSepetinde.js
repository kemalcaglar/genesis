let scenarioId = "seasda"
let variationId = "sas"
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
Math.rastgele = function (alt, ust) {
  let sayi = Math.random();
  sayi = sayi * (ust - alt);
  sayi = Math.floor(sayi) + alt;
  return sayi;
};
var peopleBasket = Math.rastgele(20, 30);
if (jQuery('.product-wrapper').length > 0) {
  var html = `<div style="width: 100%;margin-top: 15px;font-size: 15px;font-family: Gotham;">
    <span style="">Bu ürünü `+ peopleBasket + ` kişi inceliyor.</span>
  </div>`;
  jQuery(".product-buttons").css({ "flex-wrap": "wrap" })
}
jQuery(".product-buttons").append(html);
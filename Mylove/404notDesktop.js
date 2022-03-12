var scenarioId = "scenarioId";
var variationId = "variationId";
var scenarioClass = ".scenario-" + scenarioId + "-" + variationId;
var scenarioName = "scenario-" + scenarioId + "-" + variationId;
var smpl = {
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
  fireEvent: function (eventName) {
    var width = window.innerWidth;
    if (width < 992) {
      setLevel(LEVEL_JOIN, eventName + "_Mobil");
    } else {
      setLevel(LEVEL_JOIN, eventName + "_Desktop");
    }
  }
};
if (document.getElementsByClassName('notPage').length > 0) {
  let notPage = document.getElementsByClassName('notPageContent')[0];
  let notPageMain = document.getElementsByClassName('notPageContent')[0];
  let dom = '';
  dom += `
  <div class="${scenarioName}" style="text-align:center;">
    <img src="https://cdn.hellosmpl.com/uploads/2021/10/05/uf7p0f7mj9ni74cf1uhvlr2crl.jpg">
    <h2 style="
    margin-bottom: 28px;
    font-size: 18px;
">Aradığınız şey burada değil gibi görünüyor. Yeni bir şey aramak ister misiniz?</h2>
<div style="display:flex;justify-content:center;text-align:center;align-items:center;">
<div style="padding:5px;"><a href="https://www.mylovebutik.com/yeni-gelenler" style="text-decoration: none;"><span style="font-size: 12px;border: 1.5px solid #333;padding: 10px 15px;color: #333;">YENİ GELENLER</span></a></div>
<div style="padding:5px;"><a href="https://www.mylovebutik.com/indirim" style="text-decoration: none;"><span style="font-size: 12px;border: 1.5px solid #333;padding: 10px 15px;color: #333;">SEZON İNDİRİMİ</span></a></div>
<div style="padding:5px;"><a href="https://www.mylovebutik.com/alt-giyim" style="text-decoration: none;"><span style="font-size: 12px;border: 1.5px solid #333;padding: 10px 15px;color: #333;">ALT GİYİM</span></a></div>
<div style="padding:5px;"><a href="https://www.mylovebutik.com/ust-giyim" style="text-decoration: none;"><span style="font-size: 12px;border: 1.5px solid #333;padding: 10px 15px;color: #333;">ÜST GİYİM</span></a></div>
</div>
  </div>`;
  notPageMain.innerHTML = dom
  //setLevel(LEVEL_JOIN, "shown-banner")
  for (var i in buttonSmpl) {
    buttonSmpl[i].onclick = function () {
      //setLevel(LEVEL_JOIN, "click-button")
    };
  }
}
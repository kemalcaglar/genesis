const smplObj = {
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
  };
var html = `
<div id="`+smplObj.scenarioName+`" style="
    border: 1px solid black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 5px;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-left: 5px;
    margin-right: 5px;
    color: #181818;
"><span class="`+smplObj.scenarioName+`-span-first" style="width: 100%;font-size: 20px;font-weight: 900;">KARGO BEDAVA</span>
<span class="`+smplObj.scenarioName+`-span-last"style="
    font-size: 15px;
    width: 100%;
">Hafta Sonuna Özel Tüm Ürünlerde</span></div>`

jQuery("#MainNavBrd").after(html);

var css = `

`
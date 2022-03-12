let scenarioId = "scenarioIds"
let variationId = "scenarioIdss"

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
    const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
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
let questionGroup = {
  groupOne =[
    "Alışveriş yaparken nasıl hissediyorsun?",
    "Stiline uygun kıyafetleri kolayca bulabiliyor musun?",
    "Stilistinin seni daha iyi tanıyabilmesi için detaylı bilgilerine ihtiyacı var",
    "Hangi stilleri giyim tarzına daha yakın hissediyorsun?",
    "Stilini yansıtıyor mu?",
    "Seçimlerinden farklı stilleri siparişinde görmek ister misin?"
  ],
  groupTwo =[
    "Vücut yapını nasıl tanımlarsın?",
    "Üst giyimini hangi kalıpta tercih edersin?",
    "Üst giyimini hangi uzunlukta tercih edersin?",
    "Hangi jean/pantolon kesimini tercih edersin?",
    "Genellikle hangi bedenleri tercih edersin?"
  ],
  groupThree =[
    "Genellikle hangi tonlarda giyinirsin?",
    "Seçimlerimizde kesinlikle istemediğin renkler var mı?",
    "Seçimlerimizde kesinlikle istemediğin yaka türleri var mı?",
    "Seçimlerimizde kesinlikle istemediğin desenler var mı?",
    "Seçimlerimizde kesinlikle istemediğin dokular var mı?",
    "Seçimlerimizde kesinlikle istemediğin ürünler var mı?",
    "Siparişlerinde hangi giyim türüne odaklanmamızı istersin?"
  ],
  groupFour =[
    "Genellikle hangi fiyat aralıklarını tercih edersin?"
  ],
  groupFive =[
    "Neden Clotie?",
    "Seni daha iyi tanımak için",
    "Stil formunu tamamladın, tebrikler! Artık son adımdasın."
  ]
}
let css = `
<style>
.`+ smplObj.scenarioName + ` {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
}
.progress-container {
  height: 1.8rem;
  width: 45rem;
  border-radius: 1.4rem;
  background: #7BCBDB;
  position: relative;
}

.progress-container .progress {
  height: 100%;
  width: 0;
  border-radius: 1.4rem;

  background: #504566;

  transition: width 0.4s ease;
}
.progress-text-main {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.smpl-circle-main {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.smpl-circle-main .smpl-circle {
  border: 1px solid #504566;
  padding: 3px;
  height: 23px;
}
.smpl-taniyalim {
  position: relative;
  right: -12px;
}
.smpl-butce {
  position: relative;
  right: -20px;
}
.smpl-bilgiler {
  position: relative;
  right: -20px;
}
.progress-text {
  top: 10px;
  position: relative;
  font-weight: 600;
  font-size: 11px;
}
.bg-purple {
  background-color: #504566;
}
</style>
`
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", css);
let html = `
<div class="`+ smplObj.scenarioName + `">
  <div class="progress-container">
  <div class="smpl-circle-main">
  <div id="circle-one" class="bg smpl-circle circle-one" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: block;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" style="display: none; data-v-0e2ec861=""> 1 </span>
  </div>
  <div id="circle-two" class="bg smpl-circle circle-two" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: none;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" data-v-0e2ec861=""> 1 </span>
  </div>
  <div id="circle-three" class="bg smpl-circle circle-three" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: none;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" data-v-0e2ec861=""> 2 </span>
  </div>
  <div id="circle-four" class="bg smpl-circle circle-four" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: none;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" data-v-0e2ec861=""> 3 </span>
  </div>
  <div id="circle-five" class="bg smpl-circle circle-five" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: none;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" data-v-0e2ec861=""> 4 </span>
  </div>
  <div id="circle-six" class="bg smpl-circle circle-six" data-v-0e2ec861="">
  <svg class="" width="30" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-0e2ec861="" style="display: none;">
  <path d="M19.0747 8.30739C19.6294 7.75269 19.631 6.85383 19.0783 6.29717C18.5228 5.73772 17.6184 5.73612 17.0609 6.2936L8.69269 14.6618L6.01098 11.9905C5.456 11.4377 4.55821 11.4385 4.00431 11.9924C3.44964 12.5471 3.44964 13.4464 4.00431 14.001L7.98558 17.9823C8.37611 18.3728 9.00927 18.3728 9.3998 17.9823L19.0747 8.30739Z" data-v-0e2ec861=""></path></svg>
  <span class="" data-v-0e2ec861=""> 5 </span>
  </div>
  </div>
    <div class="progress"></div>
    <div class="progress-text-main">
    <div class="smpl-start">
    <span class="progress-text">Start</span>
  </div>
      <div class="smpl-taniyalim">
        <span class="progress-text">Seni Tanıyalım</span>
      </div>
      <div class="smpl-beden">
        <span class="progress-text">Beden Tercihin</span>
      </div>
      <div class="smpl-zevkler">
        <span class="progress-text">Zevkler</span>
      </div>
      <div class="smpl-butce">
        <span class="progress-text">Bütçeniz</span>
      </div>
      <div class="smpl-bilgiler">
        <span class="progress-text">Kişisel Bilgiler</span>
      </div>
</div>
  </div>
</div>
`
document.getElementsByClassName("about")[0].insertAdjacentHTML("afterbegin", html);
const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};
let questionText = document.querySelector(".bubble").textContent
let count = 0
/* change progress after 1 second (only for showcase) */
const addDiscountBanner = smplObj.debounce(function () {
  if (questionText == "Alışveriş yaparken nasıl hissediyorsun?") {
    document.getElementById('circle-one').style.backgroundColor = '#504566';
    changeProgress(4.9)
  } else if (questionText == "Stiline uygun kıyafetleri kolayca bulabiliyor musun?") {
    changeProgress(8)
  } else if (questionText == "Stilistinin seni daha iyi tanıyabilmesi için detaylı bilgilerine ihtiyacı var") {
    changeProgress(12)
  } else if (questionText == "Hangi stilleri giyim tarzına daha yakın hissediyorsun?") {
    changeProgress(16)
  } else if (questionText == "Stilini yansıtıyor mu?") {
    changeProgress(19)
  } else if (questionText == "Seçimlerinden farklı stilleri siparişinde görmek ister misin?") {
    document.getElementById('circle-two').style.backgroundColor = '#504566';
    changeProgress(24)
  } else if (questionText == "Vücut yapını nasıl tanımlarsın?") {
    changeProgress(27)
  } else if (questionText == "Üst giyimini hangi kalıpta tercih edersin?") {
    changeProgress(30)
  } else if (questionText == "Üst giyimini hangi uzunlukta tercih edersin?") {
    changeProgress(34)
  } else if (questionText == "Hangi jean/pantolon kesimini tercih edersin?") {
    changeProgress(38)
  } else if (questionText == "Genellikle hangi bedenleri tercih edersin?") {
    document.getElementById('circle-three').style.backgroundColor = '#504566';
    changeProgress(43)
  } else if (questionText == "Genellikle hangi tonlarda giyinirsin?") {
    changeProgress(46)
  } else if (questionText == "Seçimlerimizde kesinlikle istemediğin renkler var mı?") {
    changeProgress(49)
  } else if (questionText == "Seçimlerimizde kesinlikle istemediğin yaka türleri var mı?") {
    changeProgress(51)
  } else if (questionText == "Seçimlerimizde kesinlikle istemediğin desenler var mı?") {
    changeProgress(54)
  } else if (questionText == "Seçimlerimizde kesinlikle istemediğin dokular var mı?") {
    changeProgress(56)
  } else if (questionText == "Seçimlerimizde kesinlikle istemediğin ürünler var mı?") {
    changeProgress(58)
  } else if (questionText == "Siparişlerinde hangi giyim türüne odaklanmamızı istersin?") {
    document.getElementById('circle-four').style.backgroundColor = '#504566';
    changeProgress(62)
  } else if (questionText == "Genellikle hangi fiyat aralıklarını tercih edersin?") {
    document.getElementById('circle-five').style.backgroundColor = '#504566';
    changeProgress(81)
  } else if (questionText == "Neden Clotie?") {
    changeProgress(87)
  } else if (questionText == "Seni daha iyi tanımak için") {
    changeProgress(93)
  } else if (questionText == "Stil formunu tamamladın, tebrikler! Artık son adımdasın.") {
    document.getElementById('circle-six').style.backgroundColor = '#504566';
    changeProgress(100)
  }
}, 200);
document.addEventListener("DOMNodeInserted", function (e) {
  if (e.target.classList !== smplObj.scenarioName) {
    addDiscountBanner();
  }
}, false);
addDiscountBanner();

let smplButton = document.querySelectorAll(".btn")
for (let i = 0; i < smplButton.length; i++) { }
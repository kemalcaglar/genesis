const scenarioId = 22,
    variationId = 1
const smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
    populerCategory: [{
        name: "Kadın",
        href: "https://www.amerikadaniste.com/shopping/women",
    },
        {
            name: "Erkek ",
            href: "https://www.amerikadaniste.com/shopping/men",
        },
        {
            name: "Çocuk ve Bebek",
            href: "https://www.amerikadaniste.com/shopping/kids-and-baby",
        },
        {
            name: "Ev ve Yaşam",
            href: "https://www.amerikadaniste.com/shopping/living",
        },
    ],
    populerMarka: [{
        name: "Amazon ",
        href: "https://www.amerikadaniste.com/shopping?brand=amazon",
    },
        {
            name: "Nike ",
            href: "https://www.amerikadaniste.com/shopping?brand=nike",
        },
        {
            name: "Adidas",
            href: "https://www.amerikadaniste.com/shopping?brand=adidas",
        },
        {
            name: "DKNY",
            href: "https://www.amerikadaniste.com/shopping?brand=dkny",
        },
        {
            name: "Kohl-s",
            href: "https://www.amerikadaniste.com/shopping?brand=kohl-s",
        },
        {
            name: "Guess ",
            href: "https://www.amerikadaniste.com/shopping?brand=guess",
        },
    ],
    populerData: [{
        imgLink: "https://img.shopstyle-cdn.com/sim/34/c4/34c4d2477153be3cdb9291f2d7af36d7_best/versace-jeans-couture-black-rubber-logo-slides.jpg",
        link: "https://www.amerikadaniste.com/shopping/product/890817684",
        title: "Versace Jeans Couture Black Rubber Logo Slides"
    },
        {
            imgLink: "https://img.shopstyle-cdn.com/sim/90/98/909893c2214ced94440af55fe61e724c_best/anne-klein-womens-ak-1018rgwt-diamond-accented-white-ceramic-bracelet-watch.jpg",
            link: "https://www.amerikadaniste.com/shopping/product/829596326",
            title: "Anne Klein Women's AK/1018RGWT Diamond-Accented White Ceramic Bracelet Watch"
        },
        {
            imgLink: "https://img.shopstyle-cdn.com/sim/7b/9b/7b9bd34188c51ba4aa4b2458b8434e0a_best/balenciaga-handbag.jpg",
            link: "https://www.amerikadaniste.com/shopping/women/handbags/product/885395242%2BBALENCIAGA%20Handbag",
            title: "Balenciaga Handbag"
        },
        {
            imgLink: "https://img.shopstyle-cdn.com/sim/92/24/92244d665eda56cec929640ea0b22731_best/d-s-durga-breakfast-leipzig-candle-7-oz.jpg",
            link: "https://www.amerikadaniste.com/shopping/product/883127855",
            title: "D.S. & Durga Breakfast Leipzig Candle, 7 oz"
        },
        {
            imgLink: "https://img.shopstyle-cdn.com/sim/57/e7/57e72001018576dd204708897a36a6a7_best/fendi-eyewear-ff-motif-aviator-sunglasses.jpg",
            link: "https://www.amerikadaniste.com/shopping/product/856764005%2BFendi%20Eyewear%20FF%20Motif%20Aviator%20Sunglasses",
            title: "Fendi FF Motif Aviator Sunglasses"
        },
        {
            imgLink: "https://img.shopstyle-cdn.com/sim/b3/3b/b33b46782c12154e892436cb648127bb_best/black-leather-mini-tro-bag.jpg",
            link: "https://www.amerikadaniste.com/shopping/product/819998002",
            title: "Oscar de la Renta Black Leather Mini Tro Bag"
        },
    ],
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
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    },
    fireEvent: function (eventLabel, minutes) {
        if (minutes === 0) {
            if (options.sendEvent) {
                if (eventLabel.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventLabel);
                } else {
                    setLevel(LEVEL_JOIN, eventLabel);
                }
            } else {
                console.log("event: ", eventLabel);
            }
        } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel) !== "on") {
            if (options.sendEvent) {
                if (eventLabel.indexOf("close") !== -1) {
                    setLevel(LEVEL_EXIT, eventLabel);
                } else {
                    setLevel(LEVEL_JOIN, eventLabel);
                }
                smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel, "on", minutes);
            } else {
                console.log("event: ", eventLabel);
                smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventLabel, "on", minutes);
            }
        }
    }
};
const hamburgerList = options.hamburgerList;
const smplSearch = document.querySelector(".search-container .mat-form-field")
let html = `<div class="${smplObj.scenarioName}">
               <div class = "overlay" > </div>
           <div id="smplContainer" class="smplContainer ">
               <div class="content ">
                   <aside>
      <section class="populerCategory ">
        <div class="text ">
          <span class=" first">Popüler Kategoriler</span>
          <span class="second"></span>
        </div>
        <div class="list ">
          <ul> `;
for (let i in populerCategory) {
    html +=
        `
            <li class="">
              <a class="" href="${populerCategory[i].categoryLink}" title="${populerCategory[i].categoryText}">
                  ${populerCategory[i].categoryText}
              </a>
            </li>`;
    html += `
          </ul>
        </div>
      </section>    
      <section class=" populerBrand" style="position: relative">
        <div class="text">
          <span class=" first">Popüler Markalar</span>
          <span class="second"></span>
        </div>
        <div class=" list">
          <ul>`;
    for (let i in populerMarka) {
        html +=
            ` 
            <li class="">
              <a class="" target="_blank" href="${populerMarka[i].markaLink}" title="${populerMarka[i].markaText}">
              ${populerMarka[i].markaText}
              </a>
            </li>`;
    }
    ;
    html += `
          </ul>
        </div>
      </section>
    </aside>
    <main class="">
      <header class="">
        <span class=" first">Popüler Ürünler</span>
        <span class="second"></span>
      </header>`;
    html += `  
    </main>
  </div>
</div>`;
}
;
smplSearch.insertAdjacentHTML("beforeend", html);

const smplSearch = document.querySelector(".search-container .mat-form-field")
smplSearch.addEventListener('click', function() {
    document.querySelector(".scenario-5-1").style.cssText = "display: block;"
});
smplSearch.addEventListener('click', function () {
    document.querySelector(".scenario-5-1").style.cssText = "display: block;"
    document.querySelector("#right-side-container").classList.add("smpl-width");
    document.querySelector("#navbar-container").classList.add("smpl-none");
});
setTimeout(function (){

},100)
/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
  initialize({ type: TYPE_EMBEDED }, (config) => {
    onChangeConfig((newConfig) => {
      console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
          var data = [
            {
              name: "Kapüşonlu Şişme Mont",
              imgFirst:
                "/Uploads/UrunResimleri/thumb/montkapusonlu-deri-sisme-mont-848f.jpg",
              imgSecond:
                "/Uploads/UrunResimleri/thumb/montkapusonlu-deri-sisme-mont-dd01.jpg",
              href: "/kapusonlu-deri-sisme-mont",
              discountPrice: "₺220,00",
              regularPrice: 0,
            },
            {
              name: "Vatka Detay Yırtmaçlı Elbise",
              imgFirst:
                "/Uploads/UrunResimleri/thumb/kategorisizvatka-detay-yirtmacli-elbis-7c1-4e.jpg",
              imgSecond:
                "/Uploads/UrunResimleri/thumb/kategorisizvatka-detay-yirtmacli-elbis--4014-.jpg",
              href: "/vatka-detay-yirtmacli-elbise",
              discountPrice: "₺160,00",
              regularPrice: 0,
            },
            {
              name: "Yakası Kürklü Biker Ceket",
              imgFirst: "/Uploads/UrunResimleri/thumb/ceketyakasi-kurklu-biker-ceket--2bbd9.jpg",
              imgSecond: "/Uploads/UrunResimleri/thumb/ceketyakasi-kurklu-biker-ceket-1edb.jpg",
              href: "/yakasi-kurklu-biker-ceket-2643",
              discountPrice: "₺250,00",
              regularPrice: 0,
            },
            {
              name: "İspanyol Saten Eşofman",
              imgFirst:
                "/Uploads/UrunResimleri/thumb/esofman-altiispanyol-saten-esofman-1cf105.jpg",
              imgSecond:
                "/Uploads/UrunResimleri/thumb/esofman-altiispanyol-saten-esofman-2f5587.jpg",
              href: "/ispanyol-saten-esofman?eksecenekid=394",
              discountPrice: "₺100,00",
              regularPrice: 0,
            },
            {
              name: "Oversize Blazer Kaşe Kaban",
              imgFirst:
                "/Uploads/UrunResimleri/thumb/kabanoversize-blazer-kase-kaban-fcb7bf.jpg",
              imgSecond:
                "/Uploads/UrunResimleri/thumb/kategorisizoversize-bleazer-kase-kaban--48996.jpg",
              href: "/oversize-blazer-kase-kaban?eksecenekid=386",
              discountPrice: "₺160,00",
              regularPrice: 0,
            },
            {
              name: "Yırtmaçlı Timsah Desenli Deri Pantolon",
              imgFirst: "/Uploads/UrunResimleri/thumb/kategorisizyirtmacli-timsah-desenli-de-e6c-25.jpg",
              imgSecond:
                "/Uploads/UrunResimleri/thumb/kategorisizyirtmacli-timsah-desenli-de-5a7-a8.jpg",
              href: "/yirtmacli-timsah-desenli-deri-pantolon",
              discountPrice: "₺200,00",
              regularPrice: 0,
            },
          ];
          var suggestion = [
            {
              name: "jean",
              href: "https://www.mylovebutik.com/Arama?1&kelime=jean",
            },
            {
              name: "elbise",
              href: "https://www.mylovebutik.com/Arama?1&kelime=elbise",
            },
            {
              name: "ceket",
              href: "https://www.mylovebutik.com/Arama?1&kelime=ceket",
            },
            {
              name: "mont",
              href: "https://www.mylovebutik.com/Arama?1&kelime=mont",
            },
            {
              name: "hırka",
              href: "https://www.mylovebutik.com/Arama?1&kelime=h%C4%B1rka",
            },
            {
              name: "gömlek",
              href: "https://www.mylovebutik.com/Arama?1&kelime=g%C3%B6mlek",
            },
          ];
          var scenarioId = 29,
            variationId = 1;
          var scenarioClass = ".scenario-" + scenarioId + "-" + variationId;
          var backButtonImg =
            "https://cdn.hellosmpl.com/uploads/2021/01/17/rgo1f0f525al799e0jourouarg.png";
          var searchButtonImg =
            "https://cdn.hellosmpl.com/uploads/2021/01/17/fo1cvpmi7at5udr1iukuse5o7e.png";
          var mainHtml =
            `<div class="scenario-` + scenarioId + `-` + variationId +
            `">
<div class="container">
<div id="logo">
<a class="logo" href="/">
<img alt="mylovebutik" src="/Uploads/EditorUploads/qwe1eqwe1eqweq.png">
</a> 
<a class="logob logo" href="/">
<img alt="mylovebutik" src="/Uploads/EditorUploads/qwe1eqwe1eqweq.png">
</a>
</div>
<div class="backPage">
<a href="javascript:void(0)">
<img src="` +
            backButtonImg +
            `" alt="geri" />
<span>Geri</span></a
>
</div>
<div class="content">
<div class="section searchArea">
<h2 class="title">Ne Arıyorsunuz ?</h2>
<div id="searchContent">
<form>
<label for="search">
  <input type="text" name="search" id="search" />
  <button type="button" id="searchButton">
    <a href="javascript:void(0)">
      <img src="` +
            searchButtonImg +
            `" alt="geri"
    /></a>
  </button>
</label>
</form>
<div class="searchResult d-none"></div>
</div>
<div class="suggestion">
<h5 class="title">
Tüm zamanlarda sitemizde en çok aranan kelimeler bunlar
</h5>
<ul class="suggestionBox">

</ul>
</div>
</div>
<div class="section mostSell">
<h2 class="title">Aralık - Ocak ayı çok satanlar</h2>
<ul class="mostSellContent">

</ul>
</div>
</div>
</div>
</div>`;

          jQuery("input#txtbxArama").focus(function () {
            jQuery("#divTopProductSearch").css("visibility", "hidden");
            jQuery(".logoArea .rightDiv").css("visibility", "hidden");
            //var headerHeight = jQuery("#header").height();
            var windowHeight = window.innerHeight;
            //var containerHeight = windowHeight - headerHeight;
            if (jQuery(scenarioClass).length > 0) {
              jQuery(scenarioClass).remove();
            }
            jQuery("#header").before(mainHtml);
            setLevel(LEVEL_JOIN, "shown-searchModal");
            jQuery(scenarioClass + " .container").animate({ height: windowHeight }, 1000);
            jQuery("body").css("overflow", "hidden");
            jQuery(data).each(function (index, item) {
              var productHtml =
                `<li class="product">
<div class="productImage">
<a href="` +
                item.href +
                `" title="` +
                item.name +
                `">
<img src="` +
                item.imgFirst +
                `" alt="` +
                item.name +
                `">
</a>
</div>
<div class="productDetail">
<div class="priceList">
<span class="price">` +
                item.discountPrice +
                `</span>
</div>
<div class="productName">
<p>` +
                item.name +
                `</p>
</div>
</div>
</li>`;

              jQuery(scenarioClass + " ul.mostSellContent").append(productHtml);
            });
            jQuery(suggestion).each(function (index, item) {
              var suggestionHtml =
                '<li>\
<a href="' + item.href + '">' + item.name + "</a>\
</li>";

              jQuery(scenarioClass + " ul.suggestionBox").append(suggestionHtml);
            });

            /* input alanına kelime yazılıp enter veya click olması 
                     durumunda sitedeki input alanında bulunan onkeypress veya arama 
                     iconunda bulunun onclick attribute u triggerlanmalı*/

            jQuery(scenarioClass + " #searchButton").click(function () {
              var ourInputVal = jQuery(scenarioClass + " #search").val();
              jQuery("input#txtbxArama").val(ourInputVal);
              setLevel(LEVEL_JOIN, "click-searchButton");
              jQuery("#btnKelimeAra").trigger("onclick");
            });
            jQuery(scenarioClass + " .suggestionBox li").click(function () {
              setLevel(LEVEL_JOIN, "click-suggestionBoxItem");
              
            });
            jQuery(scenarioClass + " .mostSellContent .product .productImage").click(function () {
              setLevel(LEVEL_JOIN, "click-mostSellItem");
              
            });
            var pressIndex= 0;
            jQuery(scenarioClass + " #search").keypress(function (event) {
              if (event.type != "keyup" || event.keycode == 8) {
                var ourInputVal = jQuery(scenarioClass + " #search").val();
                jQuery("input#txtbxArama").val(ourInputVal);
                pressIndex++;
                if(pressIndex<=1){                  
                  setLevel(LEVEL_JOIN, "keypress-searchInput");
                }
                if (event.keycode == 13 || event.which == 13) {
                  setLevel(LEVEL_JOIN, "search-searchInput");
                }
                return ProductSeachTopOnKeyPress(event);
              }
            });
            jQuery(scenarioClass + " .backPage").click(function () {
              jQuery("#divTopProductSearch").css("visibility", "initial");
              jQuery(".logoArea .rightDiv").css("visibility", "initial");
              jQuery(scenarioClass + " .container").animate({ height: 0 }, 1000);
              setTimeout(() => {
                setLevel(LEVEL_EXIT, "click-Close");
                jQuery(scenarioClass).remove();
                jQuery("body").css("overflow", "initial");
              }, 1010);
            });
          });

        } else {
          // replace changes
        }
      }
    });
  });
}
setTimeout(function () {
    var count = 5; /* kaçncı elemandan sonra ise bir sayı eksiğini yazın */
    var itemCount = jQuery(".product-area .product-list .pitem").length
    if (itemCount <= count) {
      count = itemCount - 1;
    }
    jQuery(".product-area .product-list .pitem").each(function (i, product) {
      if (i == count) {
        var newHtml = jQuery(product).html();
        newHtml = '<div class="pitem parent-pitem col-md-4 smplProductCardSerta">' + newHtml + '</div>'
        jQuery(this).before(newHtml)
      }
    })
    var element = jQuery(".smplProductCardSerta");
    var display = {
      display: "none",
    };
    var imgSrc =
      "https://cdn.hellosmpl.com/uploads/2021/07/27/6sa22cs68nqulnkpe3l2hbbf7c.jpg"; /* image */
    var linkDirection = "https://yatsan.com/null/serta-perfect-sleeper-twin-yatak-80644"; /* link yönlendirmesi */
    var linkMessage = "Serta Perfect Sleeper" /* img alt propertiesinde yazacak mesaj */
    element.find(".item-main-photo").attr({
      alt: linkMessage,
      title: "",
      href: linkDirection,
      onclick: "",
    });
    element.find(".piteminside").css("border", "none");
    element.find(".piteminside").hover(function () {
      jQuery(this).css("border", "none");
      jQuery(this).css("background-color", "transparent");
    })
    element.find(".piteminside").css("background-color", "transparent");
    element.find(".item-main-photo img").each(function () {
      jQuery(this).attr({ src: imgSrc, alt: linkMessage, "data-original": imgSrc });
      jQuery(this).css("filter", "drop-shadow(0 0 9px #673d27)");
    })
    element.find(".item-main-photo").css("filter", "contrast(120%") /* resmi biraz daha belirgin yapmak için */
    element.find(".smpl-scenario-35-1").css(display); /* ücretsiz kargo badge */
    element.find(".product-info").css(display);
    element.find(".product-new").css(display);
    element.find("span").css(display);

    element.find(".product-sale").css("visibility", "hidden");
    element.find(".addfav").css("visibility", "hidden");
    setLevel(LEVEL_JOIN, "shown-card");
    
    element.click(function () {
      setLevel(LEVEL_JOIN, "click-card");
    });
  }, 500)
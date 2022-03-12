var categorySiteArray = [
    "Sporcu Sütyeni",
    "Tayt",
    "T-Shirt - Atlet",
    "Eşofman Altı",
    "Sweatshirt",
    "Ceket & Mont",
    "Şort",
    "Eşofman Takımı",
    "Outlet Kadın Giyim Ürünleri",
    "Yüzme Grubu",
  ];
  if (jQuery(".product").length > 0) {
    var categoryLastLookProductObj = {
      href: window.location.pathname,
      category:
      jQuery(".product-breadcrumb li").eq(4).find("a").text() == ""
          ? jQuery(".product-breadcrumb li").eq(4).find("span").text()
          : jQuery(".product-breadcrumb li").eq(4).find("a").text(),
    };
    if (
      JSON.parse(localStorage.getItem("smpl_categorylastlook_product") === null)
    ) {
      var productArray = [];
      productArray.unshift(categoryLastLookProductObj);
      localStorage.setItem(
        "smpl_categorylastlook_product",
        JSON.stringify(productArray)
      );
    } else {
      var productArray = JSON.parse(
        localStorage.getItem("smpl_categorylastlook_product")
      );
      if (
        productArray.find(
          (item) => item.href === categoryLastLookProductObj.href
        ) === undefined
      ) {
        productArray.length >= 4 ? productArray.pop() : null;
        productArray.unshift(categoryLastLookProductObj);
        localStorage.setItem(
          "smpl_categorylastlook_product",
          JSON.stringify(productArray)
        );
      }
    }
  }
  if (window.location.pathname.length > 1 || jQuery(".filter-area").length > 0) {
    if (window.location.pathname !== "/") {
      var categoryName =
        jQuery(".product-breadcrumb li").eq(4).find("a").text() == ""
          ? jQuery(".product-breadcrumb li").eq(4).find("a").text()
          : jQuery(".product-breadcrumb li").eq(4).find("a").text();
      var shownCount = 0;
      for (let index = 0; index < categorySiteArray.length; index++) {
        if (categorySiteArray[index] === categoryName) {
          shownCount == 0 ? setLevel(LEVEL_JOIN, "shown-productCard") : false;
          shownCount++;
          /* join-shown-producCard-dynamicCategory */
          if (localStorage.getItem("smpl_categorylastlook_product") !== null) {
            var categoryLastLookProductArray = JSON.parse(
              localStorage.getItem("smpl_categorylastlook_product")
            );
            if (categoryLastLookProductArray.length > 0) {
              categoryLastLookProductArray.map((product, index) => {
                jQuery(".product-item").each((index, item) => {
                  if (jQuery(item).find("a").attr("href") == product.href) {
                    jQuery(".product-item").eq(index).addClass("smplItem");
                    jQuery(".product-item")
                      .parent()
                      .prepend(jQuery(".product-item").eq(index));
                  }
                });
              });
            }
          }
        }
      }
      jQuery(".product-item.smplItem").click(() => {
        setLevel(LEVEL_JOIN, "click-product");
      });
      jQuery(".product-item.smplItem .peek-btn").click(() => {
        setLevel(LEVEL_JOIN, "click-quickPeek");
      });
    }
  }
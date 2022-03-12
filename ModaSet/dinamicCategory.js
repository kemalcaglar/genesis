var categorySiteArray = [
    "Sweatshirt",
    "Spor Giyim",
    "Ceket",
    "Mont ve Yelek",
    "Tayt ve Takım",
    "Etek",
    "Eşofman Alt",
    "Pantolon",
    "Çanta Aksesuarı",
    "T-Shirt",
    "Spor Sütyeni ve Atlet",
    "Aksesuar",
    "Kazak",
    "Bluz ve Büstiyer",
    "Elbise",
    "Gömlek",
    "Şort",
    "Hırka",
    "T-Shirt ve Atlet",
    "Eşofman ve Şort",
    "Kadın Ürünleri",
    "Erkek Ürünleri",
  ];
  if (jQuery("#productDetail").length > 0) {
    var categoryLastLookProductObj = {
      href: window.location.pathname,
      category:
      jQuery(".fl.breadcrumb li").eq(2).find("span").text() ,
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
  if (window.location.pathname.length > 1) {
    if (window.location.pathname !== "/") {
      var categoryName =
      jQuery(".fl.breadcrumb li").eq(2).find("span").text();
      var shownCount = 0;
      for (let index = 0; index < categorySiteArray.length; index++) {
        if (categorySiteArray[index] === categoryName) {
          //shownCount == 0 ? setLevel(LEVEL_JOIN, "shown-productCard") : false;
          shownCount++;
          /* join-shown-producCard-dynamicCategory */
          if (localStorage.getItem("smpl_categorylastlook_product") !== null) {
            var categoryLastLookProductArray = JSON.parse(
              localStorage.getItem("smpl_categorylastlook_product")
            );
            if (categoryLastLookProductArray.length > 0) {
              categoryLastLookProductArray.map((product, index) => {
                jQuery(".productItem").each((index, item) => {
                  if (jQuery(item).find("a").attr("href") == product.href) {
                    jQuery(".productItem").eq(index).addClass("smplItem");
                    jQuery(".productItem")
                      .parent()
                      .prepend(jQuery(".productItem").eq(index));
                  }
                });
              });
            }
          }
        }
      }
      jQuery(".productItem.smplItem").click(() => {
        //setLevel(LEVEL_JOIN, "click-product");
      });
    }
  }
let categorySiteArray = [
    "Kadin",
    "Erkek",
    "Çocuk",
];
if(jQuery(".product-container").length > 0) {
    let categoryLastLookProductObj = {
        href: window.location.pathname,
        category:jQuery(".container .breadcrumb a").eq(0).text()
    };
    if (
        JSON.parse(localStorage.getItem("smpl_categorylastlook_product") === null)
    ) {
        let productArray = [];
        productArray.unshift(categoryLastLookProductObj);
        localStorage.setItem(
            "smpl_categorylastlook_product",
            JSON.stringify(productArray)
        );
    } else {
        let productArray = JSON.parse(
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
if (window.location.pathname.length > 1 || jQuery(".list__products.js-list-products").length > 0) {
    if (window.location.pathname !== "/") {
        let categoryName = jQuery(".main-title").text().split(" ")[1];
        if ( categoryName == "Kadın") {
            categoryName = "Kadin";
        }else if (categoryName == "erkek"){
            categoryName = "Erkek"
        }else if(categoryName == "çocuk"){
            categoryName = "Çocuk"
        }
        let shownCount = 0;
        for (let index = 0; index < categorySiteArray.length; index++) {
            if (categorySiteArray[index] === categoryName) {
               // shownCount == 0 ? setLevel(LEVEL_JOIN, "shown-productCard") : false;
                shownCount++;
                /* join-shown-producCard-dynamicCategory */
                if (localStorage.getItem("smpl_categorylastlook_product") !== null) {
                    let categoryLastLookProductArray = JSON.parse(
                        localStorage.getItem("smpl_categorylastlook_product")
                    );
                    if (categoryLastLookProductArray.length > 0) {
                        categoryLastLookProductArray.reverse();
                        categoryLastLookProductArray.map((product, index) => {
                            jQuery(".product-item-box").each((index, item) => {
                                if (jQuery(item).find("a").eq(0).attr("href") == product.href) {
                                      jQuery(".product-item-box").eq(index).addClass("smplItem");
                                      jQuery(".product-item-box")
                                        .parent()
                                        .prepend(  jQuery(".product-item-box").eq(index));
                                }
                            });
                        });
                    }
                }
            }
        }
    }
}
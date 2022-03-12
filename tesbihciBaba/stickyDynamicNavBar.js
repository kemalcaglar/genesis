let arrayCheck = JSON.parse(localStorage.getItem("smpl_last_category"))
if (document.querySelector(".urunListeBox") !== null) {
  let categoryObj = {
    categoryName: jQuery("#TBBreadcrumbs .navList ul li").eq(1).text().trim(),
    value: 1
  }
  if (JSON.parse(localStorage.getItem("smpl_last_category") === null)) {
    let categoryArray = [];
    categoryArray.unshift(categoryObj);
    localStorage.setItem("smpl_last_category", JSON.stringify(categoryArray));
  } else {
    let categoryArray = arrayCheck;
    let categoryTag = jQuery("#TBBreadcrumbs .navList ul li").eq(1).text();
    categoryArray.map((product, index) => {
      if (categoryTag == product.categoryName) {
        product.value++;
        localStorage.setItem("smpl_last_category", JSON.stringify(categoryArray))
      }
    })
    if (categoryArray.find((item) => item.categoryName === categoryObj.categoryName) === undefined) {
      categoryArray.unshift(categoryObj);
      localStorage.setItem("smpl_last_category", JSON.stringify(categoryArray));
    }
  }
  if (localStorage.getItem("smpl_last_category") !== null) {
    for (i = 0; i < arrayCheck.length; i++);
    arrayCheck.sort(function (a, b) { return b.value - a.value });
    arrayCheck.reverse();
    localStorage.setItem("smpl_last_category", JSON.stringify(arrayCheck));
  }
}
if (window.innerWidth > 768) {
  if (jQuery("#TB-HeaderBox .TBWebMenuBox .TBWebMenuCase").length > 0) {
    if (localStorage.getItem("smpl_last_category") !== null) {
      if (arrayCheck.length > 0) {
        arrayCheck.map((product, index) => {
          jQuery("#TB-HeaderBox .TBWebMenuBox .TBWebMenuCase ul li").each((index, item) => {
            if (jQuery(item).find("a:first").text().trim() == product.categoryName) {
              jQuery("#TB-HeaderBox .TBWebMenuBox .TBWebMenuCase ul:first").prepend(jQuery("#TB-HeaderBox .TBWebMenuBox .TBWebMenuCase ul li").eq(index));
            }
          });
        });
      }
    }
  }
} else {
  if (jQuery(".MobileMenuCase .TBMobileMenu").length > 0) {
    if (localStorage.getItem("smpl_last_category") !== null) {
      if (arrayCheck.length > 0) {
        arrayCheck.map((product, index) => {
          jQuery(".MobileMenuCase .TBMobileMenu ul li").each((index, item) => {
            if (jQuery(item).find("a:first").text().trim() == product.categoryName) {
              jQuery(".MobileMenuCase .TBMobileMenu ul:first").prepend(jQuery(".MobileMenuCase .TBMobileMenu ul li").eq(index));
            }
          });
        });
      }
    }
  }
}
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 9) {
    jQuery("#TB-HeaderBox .TB-HeaderCase").css({ "position": "fixed" });
    jQuery("#TB-HeaderBox").css({ "margin-top": "-5px" })
  } else {
    jQuery("#TB-HeaderBox").css({ "margin-top": "" })
  }
})
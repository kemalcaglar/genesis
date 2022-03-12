setTimeout(function () {
  if (jQuery(".minicart-total-items.js-minicart-total-items").text().trim() > 0) {
    OneSignal.sendTag("orderincompletenu", "true")
  }
}, 2000);
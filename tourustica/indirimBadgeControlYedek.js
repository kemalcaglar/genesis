jQuery('.hotel-image-wrapper').map(function (index) {
  var id = dataLayer[0].TripIDList[index]
  if (hotelList.includes(id)) {
      jQuery(this).parent().parent().parent().attr('data-covid', "true");
  }

})
if (window.innerWidth > 1023) {
  jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
      if (e.target.parentElement.className === "hotel-name") {
          if (jQuery(".hotel-name a").parent().parent().parent().parent().parent().attr('data-covid')) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }
      }

      if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
          if (jQuery(".hotel-booking-button").parent().parent().parent().parent().attr("data-covid")) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }

      }
  })
  jQuery('.hotel-image-wrapper').click(function (e) {
      if (e.target.className === "lazy") {
          if (jQuery('.hotel-image-wrapper').parent().parent().parent().attr("data-covid")) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }
      }
  })
} else {
  jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
      if (e.target.parentElement.className === "hotel-name") {
          if (jQuery(this).parent().parent().parent().parent().parent().attr("data-covid")) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }
      }
      if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
          if (jQuery(this).parent().parent().parent().parent().attr("data-covid")) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }
      }
  })
  jQuery('.hotel-image-wrapper').click(function (e) {
      if (e.target.className === "lazy") {
          if (jQuery(this).parent().parent().parent().attr("data-covid")) {
              EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
          }
      }
  })
}
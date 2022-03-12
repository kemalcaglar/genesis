if (jQuery(".ed-cancelInfoMain").length > 0) {
  var html = `<div class="ed-cancelInfoMain">
    <div id="ed-cancelInfo" style="width: 100%;margin-bottom: 20px;">
      <img src="https://cdn.8digits.com/log/r/bc8654ba-4deb-41e3-87ea-5bb7e9940292.jpeg">
    </div> 
   </div>`
   jQuery('#Hotel-List-Container ul li:eq(0)').after(html)
}


jQuery(".booking-list li:first-child").after(html)
jQuery('#Hotel-List-Container ul li:eq(0)').after(html)
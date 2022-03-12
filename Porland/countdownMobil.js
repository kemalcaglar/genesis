var dateChecker = function () {
    var now = new Date();
    var startDate = new Date("Sep 10, 2021 12:00:00").getTime();
    var endDate = new Date("Sep 10, 2021 16:59:59").getTime();

    if (now >= startDate && now <= endDate) {
      return true;
    }   
    else {
      return false;
    }
  }

           if (dateChecker()) {
        
            var html = '<div id="ed-header_sayac" style="width:100%; cursor:pointer; background-color:#A92521; ">\
            \
            <div id="ed-div-inner-sayac" style="width: 100%; margin: 0 auto;padding: 10px 0px; display: flex;flex-direction:column;">\
                    \
                    <div id="ed-inner-sayac-text" style="width: 100%;line-height: 30px;">\
                        <div id="ed-inner-header-part">\
                            <div style="font-weight:bold;color:white;font-size: 4vw;text-align:center;">Sonbahar İndirimi Başlıyor!</div>\
                        </div>\
                    </div>\
                    <div id="smpl-timer" style="color:white;text-align: center;display:flex;justify-content:center;align-items:center;">\
                    \
                        <div id="_timer_hours" style="font-size: 21px;width: 45px;font-weight: bold;"></div>\
                        <div style="font-size: 19px;line-height: 31px;text-decoration: underline;">Saat</div>\
                        <div id="_timer_minutes" style="font-size: 21px;width: 45px;font-weight: bold;"></div>\
                        <div style="font-size: 19px;line-height: 31px;text-decoration: underline;">Dakika</div>\
                        <div id="_timer_seconds" style="font-size: 21px;width: 45px;font-weight: bold;"></div>\
                        <div style="font-size: 19px;line-height: 31px;text-decoration: underline;">Saniye</div>\
                    </div>\
            </div>\
            </div>';

    
var countDownDate =  new Date("Sep 10, 2021 16:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

// Get todays date and time
    var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;


// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// If client choises hour
 if (days > 0) {
hours += 24 * days;
}

// Display the result in the element
jQuery("#_timer_hours").html('' + (hours < 10 ? '0' + hours : hours) + '');
jQuery("#_timer_minutes").html('' + (minutes < 10 ? '0' + minutes : minutes) + '');
jQuery("#_timer_seconds").html('' + (seconds < 10 ? '0' + seconds : seconds) + '');

// If the count down is finished, write some text 
if (distance < 0) {
    jQuery('#ed-header_sayac').remove()
clearInterval(x);
}
}, 1000);
jQuery('.header').prepend(html);

jQuery('.btn-mobile-menu').click(function(){
    if(jQuery('.mobile-menu').css("margin-left")==="0px"){
        jQuery('#ed-header_sayac').fadeIn("fast")

    }
    else{
        jQuery('#ed-header_sayac').fadeOut("fast")

    }

})
setLevel(LEVEL_JOIN, 'shown-sayac')
jQuery('#ed-header_sayac').click(function(){

})
        }
        if(dateChecker() == false ) {
            var html = '<a href="https://www.porland.com/masaustu/tabaklar-ve-servisler/yemek-takimlari">\
            <div id="ed-header_sayac" style="width:100%; cursor:pointer; background-color:#A92521; ">\
            \
            <div id="ed-div-inner-sayac" style="width: 100%; margin: 0 auto;padding: 10px 0px; display: flex;flex-direction:column;">\
                    \
                    <div id="ed-inner-sayac-text" style="width: 100%;line-height: 30px;">\
                        <div id="ed-inner-header-part">\
                            <div style="font-weight:bold;color:white;font-size: 4vw;text-align:center;">Sonbahar Kampanyasında SON GÜNLER!</div>\
                        </div>\
                    </div>\
            </div>\
            </div></a>';
    jQuery('.header').prepend(html);
    setLevel(LEVEL_JOIN, 'Shown-notSayac')
        }
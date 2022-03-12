if(jQuery('#cnt-online-ozel').length > 0){
var dateChecker = function () {
    var now = new Date();
    var startDate = new Date("Sep 22, 2021 11:00:00").getTime();
    var endDate = new Date("Sep 23, 2021 23:59:59").getTime();

    if (now >= startDate && now <= endDate) {
        return true;
    }
    else {
        return false;
    }
}

if (dateChecker()) {

    var html = '<div id="#smpl_timer_main" style="display:flex;position:absolute;top: 15px;right:48px;">\
<div style="background: #FF5228;height: 53px;width: 98px;position: absolute;right: -48px;top: 27px;opacity: 0.8;border-top-left-radius: 5px;"></div>\
<span style="display: flex;position: relative;right: -53px;font-size: 10px;font-weight: 600;top:30px;justify-content: center;text-align: center;align-items: center;\
width: 102px;">Sepette İndirim Son Saatler</span>\
<div id="smpl-timer" style="color: #000;\
text-align: center;\
display: flex;\
justify-content: center;\
align-items: center;\
position: absolute;\
right: -29px;\
top: 63px;">\
<div id="_timer_hours" style="font-size: 12px;width: 17px;font-weight: bold;"></div>\
<div style="font-size: 12px;font-weight: bold;">:</div>\
<div id="_timer_minutes" style="font-size: 12px;width: 17px;font-weight: bold;"></div>\
<div style="font-size: 12px;font-weight: bold;">:</div>\
<div id="_timer_seconds" style="font-size: 12px;width: 17px;font-weight: bold;"></div>\
</div></div>\
';


    var countDownDate = new Date("Sep 23, 2021 23:59:59").getTime();

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
            jQuery('#smpl_timer_main').remove()
            clearInterval(x);
        }
    }, 1000);
    jQuery('#cnt-online-ozel').after(html);

    jQuery('.btn-mobile-menu').click(function () {
        if (jQuery('.mobile-menu').css("margin-left") === "0px") {
            jQuery('#ed-header_sayac').fadeIn("fast")

        }
        else {
            jQuery('#ed-header_sayac').fadeOut("fast")

        }

    })
    setLevel(LEVEL_JOIN, 'shown-countdown')
    jQuery('#cnt-online-ozel').click(function () {
        setLevel(LEVEL_JOIN, 'click-header')
    })
}
}
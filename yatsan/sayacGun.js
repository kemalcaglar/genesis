if (jQuery("#cnt-online-ozel").length > 0) {
    var dateChecker = function () {
        var now = new Date();
        var startDate = new Date("Oct 9, 2021 23:59:59").getTime();
        var endDate = new Date("Oct 14, 2021 23:59:59").getTime();

        if (now >= startDate && now <= endDate) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }



    if (dateChecker()) {


        var html = '<div id="#smpl_timer_main" style="display:flex;position:absolute;top: 5px;right:50px;">\
<span style="display: flex;position: relative;right: 11px;font-size: 17px;font-weight: 600;top: 8px;">Sepette Ek İndirim için Son Saatler</span>\
<div id="smpl-timer" style="color:#000;text-align: center;display: flex;position: absolute;top: 20px;right: 30px;">\
<div id="_timer_days" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
<div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Gün</div>\
<div id="_timer_hours" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
<div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Saat</div>\
<div id="_timer_minutes" style="display: flex;justify-content: center;align-items: center;font-size: 23px;width: 45px;font-weight: bold;line-height: 43px;"></div>\
<div style="display: flex;justify-content: center;align-items: center;font-size: 19px;line-height: 45px;text-decoration: underline;">Dakika</div>\
</div></div>\
';


        var countDownDate = new Date("Oct 14, 2021 23:59:59").getTime();
        var countDownDate2 = new Date("Oct 14, 2021 23:59:59").getTime();
        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            var distance2 = countDownDate2 - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // If client choises hour
            /*if (days > 0) {
                hours += 24 * days;
            }*/

            // Display the result in the element
            jQuery("#_timer_days").html('' + (days < 10 ? '0' + days : days) + '');
            jQuery("#_timer_hours").html('' + (hours < 10 ? '0' + hours : hours) + '');
            jQuery("#_timer_minutes").html('' + (minutes < 10 ? '0' + minutes : minutes) + '');
            jQuery("#_timer_seconds").html('' + (seconds < 10 ? '0' + seconds : seconds) + '');

            // If the count down is finished, write some text 
            if (distance2 < 0) {
                jQuery('#smpl_timer_main').remove();
                clearInterval(x);
            }

        }, 1000);
        jQuery('#header .header-top-slider').prepend(html);
        //setLevel(LEVEL_JOIN, 'shown-countdown')

    }
}
var dateChecker = function () {
    var now = new Date();
    var day = now.getDate();
    var startDate = new Date("Jun " + day + ", 2021 19:59:59").getTime();
    var endDate = new Date("Jun " + day + ", 2021 07:59:59").getTime();

    if (now >= startDate && now <= endDate) {
      return true;
    }   
    else {
      return false;
    }
  }
  if (dateChecker()) {
      var css = `
      <style>
      .smpl-popup-main {
        position: fixed;
        z-index: 999999;
        top: 0px;
        width: 100%;
        height: 100vh;
      }
        .smpl-overlay {
          position: absolute;
          z-index: 999998;
          background-color: rgba(0, 0, 0, 0.6);
          top: 0px;
          width: 100%;
          height: 100vh;
        }
      
        .smpl-content {
          position: absolute;
          z-index: 99999999;
        }
          .smpl-close {
            cursor: pointer;
            width: 30px;
            height: 50px;
            right: 10px;
            top: 4px;
            position: absolute;
            z-index: 9999;
            font-size: 35px;
            color: #fff;
            text-align: center;
            font-weight: bold;
          }
      </style>`
      jQuery("head").append(css);

      var imageWidth = 700;
      var img =
      "https://cdn.8digits.com/log/r/ad9f2816-a50f-4b00-9307-86dc14afa45d.jpeg";

      var html = `
<div class="smpl-popup-main">
<div class="smpl-overlay"></div>
<div class="smpl-content" style="top:` +
            (window.innerHeight - 400) / 2 +
            "px;left:" +
            (window.innerWidth - 600) / 2 +
            `px;">
<div class="smpl-close">×</div>
<img class="smpl-popup-img" style="width:` +
            imageWidth +
            `px;" src="` +
            img +
            `">
    </div>
</div>
`;
jQuery("body").prepend(html)
jQuery(".smpl-close").click(function(){
    jQuery(".smpl-popup-main").remove();
})
jQuery(".smpl-overlay").click(function(){
    jQuery(".smpl-popup-main").remove();
})

var newDay = new Date();
var day = newDay.getDate();
var countDownDate = new Date("Jun " + day + ", 2021 19:59:59").getTime();
var countDownDate2 = new Date("Jun " + day + ", 2021 07:59:59").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var distance2 = countDownDate2 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var timerDays = (days < 10 ? '0' + days : days);
    var timerDaysOne = timerDays.toString().substring(0, 1);
    var timerDaysTwo = timerDays.toString().substring(1, 2);
    jQuery("#_timer_days_one").html(timerDaysOne);
    jQuery("#_timer_days_two").html(timerDaysTwo);

    var timerHours = (hours < 10 ? '0' + hours : hours);
    var timerHoursOne = timerHours.toString().substring(0, 1);
    var timerHoursTwo = timerHours.toString().substring(1, 2);

    jQuery("#_timer_hours_one").html(timerHoursOne);
    jQuery("#_timer_hours_two").html(timerHoursTwo);


    var timerMinutes = (minutes < 10 ? '0' + minutes : minutes);
    var timerMinutesOne = timerMinutes.toString().substring(0, 1);
    var timerMinutesTwo = timerMinutes.toString().substring(1, 2);
    jQuery("#_timer_minutes_one").html(timerMinutesOne);
    jQuery("#_timer_minutes_two").html(timerMinutesTwo);


    var timerSecond = (seconds < 10 ? '0' + seconds : seconds);
    var timerSecondOne = timerSecond.toString().substring(0, 1);
    var timerSecondTwo = timerSecond.toString().substring(1, 2);

    jQuery("#_timer_seconds_one").html(timerSecondOne);
    jQuery("#_timer_seconds_two").html(timerSecondTwo);



    // If the count down is finished, write some text 
    if (distance2 < 0) {
        clearInterval(x);
    }

}, 1000);

  }
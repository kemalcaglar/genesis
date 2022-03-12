jQuery("#hotelsearchbtn").click(function(){
  var checkInDay = jQuery("#CheckinDate").attr("value").split(".")[0]
  var checkInMonth = jQuery("#CheckinDate").attr("value").split(".")[1]
  var checkInYear = jQuery("#CheckinDate").attr("value").split(".")[2]
  var checkOutDay = jQuery("#CheckoutDate").attr("value").split(".")[0]
  var checkOutMonth =jQuery("#CheckoutDate").attr("value").split(".")[1]
  var checkOutYear =jQuery("#CheckoutDate").attr("value").split(".")[2]
  console.log(checkInDay, checkInMonth,checkInYear, checkOutDay,checkOutMonth,checkOutYear);
})
var boyalikData 

var hotelData = [
  {
    hotelName: "Radisson Blu Resort & Spa Çeşme",
    hotelImg: "https://cdn2.setur.com.tr/image/hotel/large/setur-radisson-blu-resort-cesme-genel-(2)_266681.jpg",
    hotelCity: "Ilıca | Çesme",
    hotelDate: ["11","12","13","14","15","16","17","18"]
    }
  ]
  hotelData[0].hotelDate.map(function(data){
    if( data == checkInDay){
    console.log("true");
    }
    })



var html = `<!--Carousel Wrapper-->
<div class="smpl-slide" style="  position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #fefefe;;
min-width: 30%;
box-sizing: border-box;
transition: 400ms all;
z-index: 999999;
max-height: 100%;
overflow: auto;
border-radius: 10%;
border: 2px solid #f3f3f3;">
<div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
          alt="First slide">
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Light mask</h3>
        <p>First text</p>
      </div>
    </div>
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
          alt="Second slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Strong mask</h3>
        <p>Secondary text</p>
      </div>
    </div>
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
          alt="Third slide">
        <div class="mask rgba-black-slight"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Slight mask</h3>
        <p>Third text</p>
      </div>
    </div>
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div>
</div>
<!--/.Carousel Wrapper-->`;

jQuery("body").append(html);
var css = `<style>
.smpl-mySwiper{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: #fff;
    border-radius: 0;
  }
  
  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
  .smpl-widget h3{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    margin: 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: normal;
  }
</style>`
jQuery("head").append(css);
var html = `
<div class="swiper mySwiper smpl-mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide smpl-widget"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"><h3>Şenol Güneş Sonrasında A Milli Takım'ın Başına Sizce Kim Geçmeli?</h3></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
  <div class="swiper-slide"><img src="https://img-s2.onedio.com/id-6138797819a15dc922fa1af9/rev-0/w-300/h-150/f-jpg/s-5dc3f0deba6d8bd4985f85361939eaaa3ab9238e.jpg" class="main-image"></div>
</div>
<div class="swiper-pagination" style="position:relative; bottom:0; background:#000;padding:5px;"></div>
</div>`
jQuery("#div-gpt-spons-mid1").prepend(html);
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
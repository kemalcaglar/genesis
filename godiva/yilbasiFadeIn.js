let css= `
<style>
@keyframes fadeInFrom {
  0% {
      opacity: 1;
  }
  50% {
      opacity: 0.6;
  }
  100% {
      opacity: 1;
  }
}

.smpl-animate {
  animation-name: fadeInFrom;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
`
jQuery("head").append(css);
let imgSrc= "https://cdn.hellosmpl.com/uploads/2021/12/10/ai8ornbcpofs3hmhsli6lhe14a.png"
let html = `
<img src="`+imgSrc+`">
`
jQuery(".header .main-nav__list li").each(function(){
if(jQuery(this).find("a").text().trim() == "YENİ YIL"){
jQuery(this).find("a").addClass("smpl-animate");
jQuery(this).find("a").append(html);
}
})
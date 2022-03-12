var imgSrc = "https://cdn.hellosmpl.com/uploads/2021/02/11/o4opeqb3juu60cs0keu18m47gg.jpg"
var html = ` <div class="smpl-sevgili-popup" 
    style="z-index:9999999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    opacity: 1;">
<img 
    style="position: relative;
    left: 30%;
    top: 25%;"
    src="` + imgSrc + `" alt="Sevgililer Gününe Özel">
</div>`
jQuery("body").prepend(html);

jQuery("body").click(function () {
  jQuery(".smpl-sevgili-popup").css({
    "display": "none"
  })
})


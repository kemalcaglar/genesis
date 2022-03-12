var redBell = "https://cdn.hellosmpl.com/uploads/2020/12/18/m42t6i9foq7cobaoseavg5fb59.png";
var redClose = "https://cdn.hellosmpl.com/uploads/2020/12/18/q5evuiocqvosifvkl04cgrr4o6.png";
var html = `
<div class="smpl-menu"><span class="smpl-count">3</span><ul>
<li class="smpl_list_item" style="top: -242px;">
<a href="https://www.mylovebutik.com/indirim">
</a><div class="smpl-menu-container" style="display: flex; flex-direction: column; width: 320px; height: 140px;">
<a href="https://www.mylovebutik.com/indirim">
<div class="header" style="display:flex;justify-content:center;align-items:center;background:black; border-top-right-radius: 5px;border-top-left-radius: 5px;">
<div style="font-size:17px;padding-top:5px;padding-bottom:5px;">YILIN SON FIRSATLARI</div>
</div>
</a>
<div style="display:flex;flex-direction:row;background:white;height:125px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
<a href="https://www.mylovebutik.com/indirim">        </a><div style="width:100%"><a href="https://www.mylovebutik.com/indirim">
</a><div style="color:black;display:flex;flex-direction:column;font-size: 16px;font-weight: 600;"><a href="https://www.mylovebutik.com/indirim">
</a><div style="text-align:center;border-bottom: 1px solid;"><a href="https://www.mylovebutik.com/indirim">
</a><a href="https://www.mylovebutik.com/parti-" style="color: black;">Parti Sen Gülünce Başlasın</a></div><div style="text-align:center;border-bottom: 1px solid;">
<a href="https://www.mylovebutik.com/indirim" style="color: black;">Gerçek İndirimleri Keşfet</a>
</div>
<div style="text-align:center;">
<a href="https://www.mylovebutik.com/tarzini-sec" style="color: black;">Tarzını Seç Kendini Göster</a></div></div></div></div><!--<div>
<div style="color:black;display:flex;flex-direction:column;margin-top:10px;">
<div style="text-align:left;font-weight:600;font-size:13px;">Sezon Ortası İndirimi Başladı!</div>
<div style="text-align:left;font-size:12px;position:relative;top:-19px;">%50'ye varan net indirim!</div>
</div></div>--></div></li></ul></div>
<style>
.smpl-menu {
position: fixed;
background:url("`+ redBell + `") 0px 0px no-repeat transparent;
width: 9em;
height: 14em;
cursor: pointer;
bottom:63px;
left:10px;
z-index: 9999;
background-size: 9em;
}
.smpl-menu.active{
background:url("`+ redClose + `") 0px 0px no-repeat transparent;
background-size: 9em;
}
.smpl-menu .smpl-count{
position: absolute;
right: -5px;
top: -7px;
background: white;
color: #c51626;
border-radius: 50%;
font-size: 9px;
width: 13px;
height: 13px;
display: flex;
justify-content: center;
align-items: center;
}
.smpl-menu ul {
list-style: none;
padding: 0;
position: relative;
left: 2px;
}
.smpl-menu li {
padding: 4px;
margin-top: 0.2em;
text-align: center;
transition: all 1s;
display: none;
z-index: -1;
font-size:10px;
border-radius:5px;
}
.smpl-menu.active li {
display: block;
}
.smpl-menu a {
color: white;
text-decoration: none;
line-height: 40px;
}
.smpl-menu ul {
transform: rotate(180deg) translateY(-2em);
transition: 1s all;
top: -24px;
}
.smpl-menu.active ul {
transform: rotate(45deg) translateY(-4px);
}
.smpl-menu li:nth-of-type(1) {
transform: rotate(-45deg);
position: absolute;
left: -82px;
top: -220px;
}
</style>
`;
jQuery("body").append(html);
if (window.innerWidth > 340) {
  jQuery('.smpl-menu-container').css({"width":"320px","height":"129px","border": "2px solid #000","border-radius": "5px"});
  jQuery('.smpl-menu li:nth-of-type(1)').css("top", "-242px");
}
//setLevel(LEVEL_JOIN, 'shown-noti');
jQuery(".smpl-menu").click(function () {
  if (jQuery(".smpl-menu").hasClass("active")) {
    jQuery(".smpl-menu").removeClass("active");
  } else {
    jQuery(".smpl-menu").addClass("active");
    //setLevel(LEVEL_JOIN, 'click-open');
  };
});

jQuery(".smpl-menu li a").eq(0).click(function () {
  //setLevel(LEVEL_JOIN, "click-baslik");
})
jQuery(".smpl-menu li a").eq(1).click(function () {
  //setLevel(LEVEL_JOIN, "click-bir");
})
jQuery(".smpl-menu li a").eq(2).click(function () {
  //setLevel(LEVEL_JOIN, "click-iki");
})
jQuery(".smpl-menu li a").eq(3).click(function () {
  //setLevel(LEVEL_JOIN, "click-uc");
})
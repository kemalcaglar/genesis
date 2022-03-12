var campaing = "https://yatsan.com/d/kampanyalar";
var discount2525pink =
  "https://cdn.hellosmpl.com/uploads/2021/04/13/45s79pb15ou5arr4teg3j1sndr.jpg";
var discount40gold =
  "https://cdn.hellosmpl.com/uploads/2021/03/25/hjc622dtbd7mt4t14odc4cr9vj.png";
var discount20gray =
  "https://cdn.hellosmpl.com/uploads/2021/03/25/i1goe599ilbhlq65jd86d0va1u.png";
  var discount25pink =
  "https://cdn.hellosmpl.com/uploads/2021/04/30/lsdivoj5fqn383a8pf902t4vcv.png";
  var discount50white =
  "https://cdn.hellosmpl.com/uploads/2021/05/11/etkuh7mlg12hsk6tcb5gioolrv.png";
  var discount35green =
  "https://cdn.hellosmpl.com/uploads/2021/06/09/dam7nooeei88cckbcb9siudqi.png";
  var discount30blue =
  "https://cdn.hellosmpl.com/uploads/2021/09/08/frtr04h95n4miv58e7b7c4hs2f.jpg";
var html =
  '\<div class="scenario-' + scenarioId + '-' + variationId + '">\
<div class="smpl-noti">\
<span class="smpl-count">3</span>\
<ul>\
<li class="smpl_list_item">\
<div class="container" style="">\
<a href=' +
  campaing +
  ' style="display: inline-block;">\
<div class="header" style="display:flex;justify-content:center;align-items:center;background:#673d27; border-top-right-radius: 5px;border-top-left-radius: 5px;">\
  <div style="font-size:14px;padding-top:5px;padding-bottom:5px;text-transform: uppercase;">Ekim Fırsatları</div>\
</div>\
</a>\
<div class="content">\
  <div style="border-bottom: 1px solid;">\
  <a href="https://yatsan.com/d/yastik?utm_source=smpl&utm_medium=icon&utm_campaign=yastik-fest">\
  <img style="width: 35px;margin-left: 7px;" src="' +
  discount40gold +
  '">\
  <span style="font-size: 10px;margin-left: 11px;">Yastık Festivaliyle Doğru Yastığı Bul!</span></a>\
  </div>\
<div style="border-bottom: 1px solid;">\
  <a href="https://yatsan.com/d/king-koil-yataklar?utm_source=smpl&utm_medium=icon&utm_campaign=king-koil">\
  <img src="' +
  discount25pink +
  '" style="width: 35px;margin-left: 7px;">\
  <span style="margin-left: 18px;">King Koil Yeni Koleksiyonu Keşfet!</span></a>\
</div>\
          <div style="border-bottom: 1px solid;">\
  <a href="https://yatsan.com/d/yataklar?m=serta&utm_source=smpl&utm_medium=icon&utm_campaign=serta">\
  <img src="' +
  discount35green +
  '" style="width: 50px;">\
  <span style="margin-left: 10px;">Serta Yataklar %35 İndirimli!</span></a>\
</div>\
</div>\
</div>\
</li>\
</ul>\
</div>\</div>\
';
jQuery("body").append(html);
setLevel(LEVEL_JOIN, "shown-notifi");
jQuery(".smpl-noti").click(function () {
  if (jQuery(".smpl-noti").hasClass("active")) {
    jQuery(".smpl-noti").remove();
    jQuery(".smpl-noti").removeClass("active");
    setLevel(LEVEL_EXIT, "click-close");
  } else {
    jQuery(".smpl-noti").addClass("active");
    setLevel(LEVEL_JOIN, "Open_Notification");
  }
});

jQuery(".smpl-noti li").click(function () {
  setLevel(LEVEL_JOIN, "click-kampanyalara");
});
  jQuery(".smpl-noti li a").eq(0).click(function(){
  setLevel(LEVEL_JOIN, "click-bir");
  });
  jQuery(".smpl-noti li a").eq(1).click(function(){
  setLevel(LEVEL_JOIN, "click-iki");
  });
  jQuery(".smpl-noti li a").eq(2).click(function(){
  setLevel(LEVEL_JOIN, "click-uc");
  });
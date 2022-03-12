if(document.getElementsByClassName('notPage').length > 0){
let notPage = document.getElementsByClassName('notPageContent')[0];
let notPageMain = document.getElementsByClassName('notPageContent')[0];
let dom = '';
dom += `<div class="smpl-container" style="text-decoration: none;width: 562px;position: absolute;display: flex;flex-direction: row;flex-wrap: wrap;top: 31%;left: 50%;margin-left: -280px;margin-top: -100px;">
<a href="https://www.mylovebutik.com/yeni-gelenler" style="
  border: 1px solid #BF0B2F;
  width: 560px;
  position: relative;
  height: 70px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
" class="btn-default secondary"> <span style="
    border-color: #BF0B2F transparent transparent transparent;
    border-style: solid;
    border-width: 54px 32px 5px 34px;
    width: 0px;
    height: 0px;
    transform: rotate(-90deg);
    position: absolute;
    left: -4px;
"></span><span style="color: #BF0B2F;font-size: 30px;">Yeni Gelenler</span> </a>
<a href="https://www.mylovebutik.com/indirim" style="
  border: 1px solid #BF0B2F;
  width: 560px;
  position: relative;
  height: 70px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
" class="btn-default secondary"> <span style="
    border-color: #BF0B2F transparent transparent transparent;
    border-style: solid;
    border-width: 54px 32px 5px 34px;
    width: 0px;
    height: 0px;
    transform: rotate(-90deg);
    position: absolute;
    left: -4px;
"></span><span style="color: #BF0B2F;font-size: 30px;">SEZON İNDİRİMİ</span> </a>
<a href="https://www.mylovebutik.com/alt-giyim" style="
  border: 1px solid #BF0B2F;
  width: 560px;
  position: relative;
  height: 70px;
  margin-top: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
" class="btn-default secondary"> <span style="
    border-color: #BF0B2F transparent transparent transparent;
    border-style: solid;
    border-width: 54px 32px 5px 34px;
    width: 0px;
    height: 0px;
    transform: rotate(-90deg);
    position: absolute;
    left: -4px;
"></span><span style="color: #BF0B2F;font-size: 30px;">ALT GİYİM</span> </a>
<a href="https://www.mylovebutik.com/ust-giyim" style="
  border: 1px solid #BF0B2F;
  width: 560px;
  height: 70px;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
" class="btn-default secondary"> <span style="
    border-color: #BF0B2F transparent transparent transparent;
    border-style: solid;
    border-width: 54px 32px 5px 34px;
    width: 0px;
    height: 0px;
    transform: rotate(-90deg);
    position: absolute;
    left: -2px;
"></span><span style="color: #BF0B2F;font-size: 30px;">ÜST GİYİM</span></a>
</div>`;
notPageMain.innerHTML = dom
let buttonSmpl = document.getElementsByClassName('btn-default secondary')
setLevel(LEVEL_JOIN, "shown-banner")
for (var i in buttonSmpl) {
    buttonSmpl[i].onclick = function() {
        setLevel(LEVEL_JOIN, "click-button")
    };
  }
}
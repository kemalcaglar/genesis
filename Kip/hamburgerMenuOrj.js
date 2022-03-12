let html = '\
          <div class="smpl-menu">\
          <span class="smpl-menu-bar"></span>\
          <span class="smpl-menu-count">4</span>\
            <ul>\
              \
            <li><a href="https://www.kip.com.tr/garage-sale/">Garage Sale</a></li>\
            <li><a href="https://www.kip.com.tr/buyuk-kasim-indirimleri/2-li-alimda-buyuk-indirim/2-triko-398-tl">2 Triko 398 TL</a></li>\
            <li><a href="https://www.kip.com.tr/kampanyalar/super-firsatlar/">Süper Fırsatlar</a></li>\
            <li><a href="https://www.kip.com.tr/buyuk-kasim-indirimleri/2-li-alimda-buyuk-indirim/2-triko-338-tl/">2 Triko 338 TL</a></li>\
            <li><a href="https://www.kip.com.tr/buyuk-kasim-indirimleri/1-000-tl-ve-uzeri-alisverise-ek-150-tl-indirim-/">1.000 TL Alışverişe 150 TL İNDİRİM</a></li>\
          </div>\
        ';
jQuery("body").append(html);
setLevel(LEVEL_JOIN, 'shown-menu');

jQuery(".smpl-menu").click(function () {
  if (jQuery(".smpl-menu").hasClass("active")) {
    jQuery(".smpl-menu").removeClass("active")
  } else {
    jQuery(".smpl-menu").addClass("active")
    setLevel(LEVEL_JOIN, 'click-button');
  }
})
jQuery('.smpl-menu li').click(function () {
  let innerText = jQuery(this).find('a').text();


  setLevel(LEVEL_JOIN, innerText);

});
.scenario-#{$scenarioId}-#{$variationId} {

}


.smpl-menu {
  position: fixed;
  background:#2C87A8;
  width: 3em;
  height: 3em;
  border-radius: 5em;
  cursor: pointer;
  bottom:95px;
  left:10px;
  z-index:9999999999;
}
/*.smpl-menu:after {
    content: "";
    position: absolute;
    top: 13px;
    left: 10px;
    width: 22px;
    height: 15px;
    border-top: 9px double #fff;
    border-bottom: 3px solid #fff;
} */
.smpl-menu:before {
  content: '';
  position: absolute;
  width: 28px;
  height: 4px;
  background: #FCFCFC;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: 0.5s;
  top: 12px;
  left: 7px;

}
.smpl-menu:after {
  content: '';
  position: absolute;
  width: 28px;
  height: 4px;
  background: #FCFCFC;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: 0.5s;
  top: 19px;
  left: 7px;
}
.smpl-menu .smpl-menu-bar:before{
  content: '';
  position: absolute;
  width: 28px;
  height: 4px;
  background: #FCFCFC;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: 0.5s;
  top: 26px;
  left: 7px;
  z-index: 99999;
}

.smpl-menu.active:before {
  top: 17px;
  transform: rotate(45deg);
}
.smpl-menu .smpl-menu-bar{
  display:block;
}
.smpl-menu.active .smpl-menu-bar{
  display:none;
}
.smpl-menu-count{
  background-color: #f8684f;
  color: #fff;
  position: absolute;
  right: 0;
  border-radius: 50%;
  padding: 0px 5px;
  top: -7px;
  font-size: 12px;
  font-weight: bold;
}
.smpl-menu.active:after {
  top: 17px;
  transform: rotate(135deg);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}
.smpl-menu ul {
  list-style: none;
  padding: 0;
  position: relative;
  left: -15px;
  top:-25px;
}
.smpl-menu li {
  width: 250px;
  height: 30px;
  padding: 4px;
  margin-top: 0.2em;
  text-align: center;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  transition: all 1s;
  background: #2C87A8;
  display: none;
  z-index: -1;
}
.smpl-menu li a{
  color:#fff!important;
}
.smpl-menu.active li {
  display: block;
}

.smpl-menu a {
  color: white;
  text-decoration: none;
  line-height: 1.5em;
}
.smpl-menu a {
  color: white;
  text-decoration: none;
}
.smpl-menu ul {
  transform: rotate(180deg) translateY(-2em);
  transition: 1s all;
}
.smpl-menu.active ul {
  transform: rotate(45deg) translateY(-4px);
}

.smpl-menu li:nth-of-type(1) {
  transform: rotate(-45deg);
  position: absolute;
  top: -140px;
  left: 1px;
}
.smpl-menu li:nth-of-type(2) {
  transform: rotate(-45deg);
  position: absolute;
  left: 23px;
  top: -118px;
}
.smpl-menu li:nth-of-type(3) {
  position: absolute;
  left: 45px;
  top: -96px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(4) {
  position: absolute;
  left: 67px;
  top: -74px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(5) {
  position: absolute;
  left: 89px;
  top: -52px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(6) {
  position: absolute;
  left: 111px;
  top: -30px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(7) {
  position: absolute;
  left: 132px;
  top: -8px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(8) {
  position: absolute;
  left: 154px;
  top: 14px;
  transform: rotate(-45deg);
}
.smpl-menu li:nth-of-type(9) {
  position: absolute;
  left: 176px;
  top: 36px;
  transform: rotate(-45deg);
}
.hint {
  text-align: center;
}
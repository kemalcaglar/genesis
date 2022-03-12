var redBell = "https://cdn.hellosmpl.com/uploads/2020/12/18/m42t6i9foq7cobaoseavg5fb59.png";
var redClose = "https://cdn.hellosmpl.com/uploads/2020/12/18/q5evuiocqvosifvkl04cgrr4o6.png";
var html = '\
<div class="smpl-menu" >\
<span class="smpl-count">2</span>\
  <ul>\
    <li class="smpl_list_item">\
       <div style="display:flex;flex-direction:column;width:380px;">\
        <div class="container" style="display:flex;flex-direction:row;background:white;height:85px;border-radius: 5px;\
    border: 2px solid #000;">\
        <!-- <div style="width:100px;display:flex;justify-content:center;align-items:center;"><img style="width:80px;" src="https://cdn.hellosmpl.com/uploads/2020/11/13/a3689ms6qciil6a2uhi6snid0c.jpeg" style="width:80px;"></div> -->\
        <div style="width:100%">\
          <div style="color:black;display:flex;flex-direction:column;font-size: 16px;font-weight: 600;">\
            <div style="text-align:center;border-bottom: 1px solid;">\
                <a href="https://www.mylovebutik.com/yaza-elveda" style="color: black;">%80’e varan indirimler </a>\
              </div>\
              <div style="text-align:center;">\
                <a href="https://www.mylovebutik.com/2.-urun-25-tl" style="color: black;">2. Ürün 25 TL </a>\
              </div>\
            </div>\
          </div>\
        </div>\
       </div>\
   </li>\
  </ul>\
</div>\
<style>\
.smpl-menu {\
  position: fixed;\
  background:url("'+ redBell + '") 0px 0px no-repeat transparent;\
  width: 3em;\
  height: 4em;\
  cursor: pointer;\
  bottom:55px;\
  left:10px;\
  z-index: 9999;\
  background-size: 3em;\
  transition:0.5 all;\
  background-position: center;\
}\
.smpl-menu.active{\
  background:url("'+ redClose + '") 0px 0px no-repeat transparent;\
  background-size: 3em;\
  transition:0.5 all;\
  border-radius: 0;\
  background-position: center;\
}\
.smpl-menu .smpl-count{\
    position: absolute;\
    right: -5px;\
    top: -7px;\
    background: white;\
    color: #c51626;\
    border-radius: 50%;\
    font-size: 11px;\
    width: 16px;\
    height: 16px;\
    display: flex;\
    justify-content: center;\
    align-items: center;\
}\
.smpl-menu.active .smpl-count{\
    display: none;\
}\
.smpl-menu ul {\
  list-style: none;\
  padding: 0;\
  position: relative;\
  left: 2px;\
}\
.smpl-menu li {\
    padding: 4px;\
    margin-top: 0.2em;\
    text-align: center;\
    transition: all 1s;\
    display: none;\
    z-index: -1;\
    font-size:10px;\
    border-radius:5px;\
}\
.smpl-menu.active li {\
  display: block;\
}\
.smpl-menu a {\
  color: white;\
  text-decoration: none;\
  line-height: 40px;\
}\
.smpl-menu ul {\
  transform: rotate(180deg) translateY(-2em);\
  transition: 1s all;\
  top: -24px;\
}\
.smpl-menu.active ul {\
  transform: rotate(45deg) translateY(-4px);\
}\
.smpl-menu li:nth-of-type(1) {\
  transform: rotate(-45deg);\
  position: absolute;\
  left: -1px;\
  top: -200px;\
}\
</style>\
';
jQuery("body").append(html);
setLevel(LEVEL_JOIN, 'shown-noti');
jQuery(".smpl-menu").click(function () {
    if (jQuery(".smpl-menu").hasClass("active")) {
        jQuery(".smpl-menu").removeClass("active");
    } else {
        jQuery(".smpl-menu").addClass("active");
        setLevel(LEVEL_JOIN, 'click-open');
    };
});

jQuery(".smpl-menu li a").eq(0).click(function () {
    setLevel(LEVEL_JOIN, "click-bir");
})
jQuery(".smpl-menu li a").eq(1).click(function () {
    setLevel(LEVEL_JOIN, "click-iki");
})
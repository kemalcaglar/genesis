let html = '\
<div class="smpl-menu">\
<span class="smpl-menu-bar"></span>\
<span class="smpl-menu-count">2</span>\
  <ul>\
  \
    <li><a href="https://www.ramsey.com.tr/garage-sale/">Garage Sale</a></li>\
    <li><a href="https://www.ramsey.com.tr/kampanyalar/firsat-urunleri/">Fırsat Ürünleri</a></li>\
    <li><a href="https://www.ramsey.com.tr/yeni-sezon/fall-winter/">Net %30 Sezon İndirimi</a></li>\
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
/*.scenario-#{$scenarioId}-#{$variationId} {}
    .smpl-menu {
    position: fixed;
    background: black;
    width: 3em;
    height: 3em;
    border-radius: 5em;
    cursor: pointer;
    bottom: 63px;
    left: 10px;
    z-index: 9999999999
}

.smpl-menu:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 4px;
    background: #FCFCFC;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    top: 12px;
    left: 7px
}

.smpl-menu:after {
    content: '';
    position: absolute;
    width: 28px;
    height: 4px;
    background: #FCFCFC;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    top: 19px;
    left: 7px
}

.smpl-menu .smpl-menu-bar:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 4px;
    background: #FCFCFC;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    top: 26px;
    left: 7px;
    z-index: 99999
}

.smpl-menu.active:before {
    top: 17px;
    transform: rotate(45deg)
}

.smpl-menu .smpl-menu-bar {
    display: block
}

.smpl-menu.active .smpl-menu-bar {
    display: none
}

.smpl-menu-count {
    background-color: #f8684f;
    color: #fff;
    position: absolute;
    right: 0;
    border-radius: 50%;
    padding: 0px 5px;
    top: -7px;
    font-size: 12px;
    font-weight: bold
}

.smpl-menu.active:after {
    top: 17px;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2)
}

.smpl-menu ul {
    list-style: none;
    padding: 0;
    position: relative;
    left: -15px;
    top: -25px;
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
    background: black;
    display: none;
    z-index: -1
}

.smpl-menu li a {
    color: #fff !important
}

.smpl-menu.active li {
    display: block
}

.smpl-menu a {
    color: white;
    text-decoration: none;
    line-height: 1.5em
}

.smpl-menu a {
    color: white;
    text-decoration: none
}

.smpl-menu ul {
    transform: rotate(180deg) translateY(-2em);
    transition: 1s all
}

.smpl-menu.active ul {
    transform: rotate(45deg) translateY(-4px)
}

.smpl-menu li:nth-of-type(1) {
    transform: rotate(-45deg);
    position: absolute;
    top: -169px;
    left: -21px
}

.smpl-menu li:nth-of-type(2) {
    transform: rotate(-45deg);
    position: absolute;
    left: 2px;
    top: -146px
}

.smpl-menu li:nth-of-type(3) {
    position: absolute;
    left: 24px;
    top: -123px;
    transform: rotate(-45deg)
}

.smpl-menu li:nth-of-type(4) {
    position: absolute;
    left: 46px;
    top: -100px;
    transform: rotate(-45deg)
}

.smpl-menu li:nth-of-type(5) {
    position: absolute;
    left: 68px;
    top: -77px;
    transform: rotate(-45deg)
}

.smpl-menu li:nth-of-type(6) {
    position: absolute;
    left: 90px;
    top: -54px;
    transform: rotate(-45deg)
}

.hint {
    text-align: center
} */
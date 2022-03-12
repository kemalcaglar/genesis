var smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
}
var img = 'https://imgyukle.com/f/2021/08/20/GBhAf.png';

var html = '<div class="' + smplObj.scenarioName + '" style="position:fixed;display:flex;left:-400px;z-index: 999999;cursor:pointer;top:\
' + (window.innerHeight) / 2 + 'px; left:-370px;">\
<span class="' + smplObj.scenarioName + '-close" style="position: absolute;left: 30px;font-size: 30px;color: #000;cursor: pointer;top: 15px;">×</span>\
<img class="' + smplObj.scenarioName + '-img" src="' + img + '" style="width:465px;">\
</div>\
'
jQuery("body").after(html);
setLevel(LEVEL_JOIN, 'shown-kulakcik');
jQuery(smplObj.scenarioClass + '-img').click(function () {
    setLevel(LEVEL_JOIN, 'click-kulakcik');
    jQuery(smplObj.scenarioClass).animate({
        left: "-25px"
    }, 1200)
})
jQuery(smplObj.scenarioClass + '-close').click(function () {
    setLevel(LEVEL_EXIT, 'click-close');
    jQuery(smplObj.scenarioClass).animate({
        left: "-370px"
    }, 1200)
});
var smplObj = {
    scenarioClass: ".scenario-",
    scenarioName: "scenario-",
}
var img = 'https://imgyukle.com/f/2021/08/20/GBhAf.png';

var html = '<div class="' + smplObj.scenarioName + '" style="position:fixed;display:flex;left:-415px;z-index: 999999;cursor:pointer;top:\
' + (window.innerHeight) / 2 + 'px;">\
<span class="' + smplObj.scenarioName + '-close" style="position: absolute;right: 55px;font-size: 30px;color: #000;cursor: pointer;top: -35px; font-weight:bold;">×</span>\
<img class="' + smplObj.scenarioName + '-img" src="' + img + '" style="width:465px;">\
</div>\
'
jQuery("body").after(html);
//setLevel(LEVEL_JOIN, 'shown-kulakcik');
jQuery(smplObj.scenarioClass + '-img').click(function () {
    //setLevel(LEVEL_JOIN, 'click-kulakcik');
    jQuery(smplObj.scenarioClass).animate({
        left: "0"
    }, 1200)
})
jQuery(smplObj.scenarioClass + '-close').click(function () {
    //setLevel(LEVEL_EXIT, 'click-close');
    jQuery(smplObj.scenarioClass).animate({
        left: "-415px"
    }, 1200)
});
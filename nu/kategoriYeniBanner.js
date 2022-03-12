const smplObj = {
    scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
    scenarioName: "scenario-" + scenarioId + "-" + variationId,
}
var css = `<style>
`+smplObj.scenarioClass+`-badge {
    border: 1px solid red;
    margin-left: 10px;
    font-size: 12px;
    letter-spacing: 3px;
    color: red;
    line-height: 15px;
    padding: 2px 5px;
}
</style>`
jQuery("head").append(css);
var html = `<span class="`+smplObj.scenarioName+`-badge">new</span>`
jQuery("#ResimliMenu1 .ulVar a").each(function () {
    if (jQuery(this).text().trim() == "Limited Edition") {
        jQuery(this).append(html);
        jQuery(this).click(function(){
            setLevel(LEVEL_JOIN, "click-limited")
        })
    }
    if (jQuery(this).text().trim() == "Nu Jersey") {
        jQuery(this).append(html);
        jQuery(this).click(function(){
            setLevel(LEVEL_JOIN, "click-nuJersey")
        })
    }
})
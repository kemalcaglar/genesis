var html = '<div class="smpl-kulakcik" style="position:fixed; top:60%; left:0; z-index:999999; cursor:pointer;">\
<a href="https://multinet.com.tr/kart-kullanim-noktalari"><img src="https://cdn.hellosmpl.com/uploads/2021/04/15/n84rule8u6o7mckqdge6nocfst.png"></a>\
</div>'
jQuery("body").prepend(html);
setLevel(LEVEL_JOIN, "shown-kulakcik");
jQuery(".az-element.az-ctnr.az-column.col-xs-12.col-md-4").css({"display":"inline-flex",
"width":"100%"})

var buttonHtml = '<a class="btn btn-warning smpl-button" href="https://multinet.com.tr/kart-kullanim-noktalari" target="_blank" style="\
    background: #57b274;\
">Kart Kullanım Noktaları</a>'
jQuery(".az-element.az-ctnr.az-column.col-xs-12.col-md-4 a").after(buttonHtml);
setLevel(LEVEL_JOIN, "shown-button");
jQuery("#gb9xb7x1hv ul li:first a").css({"font-weight":"bold",
"color":"#57b274"})
jQuery(".smpl-kulakcik").click(function(){
    setLevel(LEVEL_JOIN, "click-kulakcik");
})
jQuery(".smpl-button").click(function(){
    setLevel(LEVEL_JOIN, "click-button");
})
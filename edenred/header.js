var html = '<div id="smpl-banner" style="margin-bottom:10px;">\
<a href="https://yemek-karti.ticket.com.tr/webinar-ne-kadar-vergi-odemek-istersiniz-nisan-2021/?utm_source=corporate%20site&utm_medium=banner&utm_campaign=webinar-edenredcomtr-topbanner">\
<img style="width:100%" src="https://cdn.hellosmpl.com/uploads/2021/03/29/tdsfuppp7hofhj14u3hq1cb0c1.jpg"></img>\
</a>\
</div>'

jQuery(".sticky-wrapper").before(html);

if( jQuery("#smpl-banner").length > 0) {
    // setLevel("LEVEL_JOIN", "shown-banner");
}
jQuery("#smpl-banner").click(function(){
   // setLevel("LEVEL_JOIN", "click-banner");
})
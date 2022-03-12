
    setTimeout(function(){
    if(jQuery(".cart-sub a span:eq(0)").text().trim().split("(")[1].split(")")[0]){
        OneSignal.sendTag("orderincompletehappynes","true")
        }
        }, 2000);



        jQuery("#spnTopSepetToplamUrun").text().trim()



        setTimeout(function(){
        if(jQuery("#spnTopSepetToplamUrun").text().trim()>0){
            OneSignal.sendTag("orderincompletemylove","true")
            }
            }, 2000);




            html = `<div class="smpl-header-24Ocak" style="background-color: #ef6239;width:100%;margin-top:-0.16rem; cursor:pointer;">\
            <div class="smpl-header-inner" style="height:40px;margin:auto;font-size: 18px;line-height: 39px;width: 600px;text-align: center;color: white;"></div>\
        </div>`
        jQuery('header').prepend(html);
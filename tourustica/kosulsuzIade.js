(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("tourListIadeBadge")) {
         return false
    }
    EightDigits.sf.prototype.tourListIadeBadge = function () {

        var config = {
            scenarioname: "tourListIadeBadge",
            analytics: "tourListIadeBadge",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };

        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {

                var hotelID= ["13717","13707","13700","13719","13720","13708","13701","13714","13722","13716","13718","13715","13712","13706","13710","13703","13709","13702","13721","13711","13704","13713","13705","13723","13730","13729","13731","13728","13737","13726","13725","13743","13744","13738","13739","13740","13741","13736","13745","13732","13734","13733"]
                var dataLayerFindID=0;
                for(var i = 0 ;i<dataLayer.length;i++){
                    if(typeof dataLayer[i].TripIDList!=="undefined")
                    {
                        dataLayerFindID=i;
                    }
                }
                if(window.innerWidth>1023){
                    
                
                
                for(var b = 0;b<dataLayer[dataLayerFindID].TripIDList.length;b++){
                
                    if(hotelID.find(x=>Number(x)===dataLayer[dataLayerFindID].TripIDList[b])){
                        if(jQuery('.tour-cell:eq('+b+')').find('.prel .smpl-rezervasyon-badge').length>0){
                            jQuery('.tour-cell:eq('+b+')').find('.prel').append("<img class='smpl-kosulsuz-iade-badge' style='position:absolute;bottom:9px;width:168px;left:"+(jQuery('.hotel-image-wrapper').width()+20+173)+"px' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                        }
                        else{
                            jQuery('.tour-cell:eq('+b+')').find('.prel').append("<img class='smpl-kosulsuz-iade-badge' style='position:absolute;bottom:9px;width:168px;left:"+(jQuery('.hotel-image-wrapper').width()+20)+"px' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                        }
                        if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                            EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
                        }
                    }
                }

                jQuery('.hotel-name a,.hotel-booking-button').click(function(e){
                    
                    if(e.target.parentElement.className.indexOf("hotel-name")>-1){
                        if(jQuery(this).parent().parent().parent().parent().find(".smpl-kosulsuz-iade-badge").length>0){
                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");
                        }
                    }
                    if(e.target.className.indexOf("hotel-booking-button")>-1  || e.target.className==="visible-xs" || e.target.className==="hidden-xs"){
                        if(jQuery(this).parent().parent().parent().find(".smpl-kosulsuz-iade-badge").length>0){

                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");

                        }
                    }
                })
                jQuery('.hotel-image-wrapper').click(function(e){
                    if(e.target.className==="lazy"){
                        if(jQuery(this).parent().parent().find(".smpl-kosulsuz-iade-badge").length>0){


                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Desktop");
                        }
                    }
                })
                
                
                }
                else{
                
                    for(var b = 0;b<dataLayer[dataLayerFindID].TripIDList.length;b++){
                
                        if(hotelID.find(x=>Number(x)===dataLayer[dataLayerFindID].TripIDList[b])){
                            if( jQuery('.tour-cell:eq('+b+')').find('.hotel-image-wrapper img').length>1){
                                if(jQuery('.tour-cell:eq('+b+')').find('.hotel-image-wrapper .smpl-rezervasyon-badge').length>0){
                                        jQuery('.tour-cell:eq('+b+') .smpl-rezervasyon-badge').css("top","calc(85% - 35px)");
                                        jQuery('.tour-cell:eq('+b+')').find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top: 85%;' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")
                                }
                                else{
                                    jQuery('.tour-cell:eq('+b+')').find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top: calc(85% - 35px);' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")

                                }
                                if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Shown_Mobile");
                                    EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
                                }
                            }
                            else{
                                jQuery('.tour-cell:eq('+b+')').find('.hotel-image-wrapper').append("<img class='smpl-kosulsuz-iade-badge' style='width:140px;height:25px;top:85%;' src='https://cdn.8digits.com/log/r/b9db1c5e-5dd4-47c6-ba96-1e432e29b6f0.png'>")
                                if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                                    EightDigits.analytics.sendEvent(config.analytics, "Shown_Mobile");
                                    EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
                                }
                            }
                    
                        }
                    }
                         jQuery('.hotel-name a,.hotel-booking-button').click(function(e){
                    if(e.target.parentElement.className.indexOf("hotel-name")>-1){
                        if(jQuery(this).parent().parent().parent().parent().find(".smpl-kosulsuz-iade-badge").length>0){

                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                        }
                    }
                    if(e.target.className.indexOf("hotel-booking-button")>-1 || e.target.className==="visible-xs" || e.target.className==="hidden-xs"){

                        if(jQuery(this).parent().parent().parent().find(".smpl-kosulsuz-iade-badge").length>0){

                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                        }
                    }
                })
                jQuery('.hotel-image-wrapper').click(function(e){

                    if(e.target.className==="lazy"){

                        if(jQuery(this).parent().find(".smpl-kosulsuz-iade-badge").length>0){
                            EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_Mobile");
                        }
                    }
                })
               
                
                }
                





            },
            control: function () {
                if (typeof dataLayer[0].TripIDList === "undefined" ) {
                    return false;
                }

            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    var hotelID= ["13717","13707","13700","13719","13720","13708","13701","13714","13722","13716","13718","13715","13712","13706","13710","13703","13709","13702","13721","13711","13704","13713","13705","13723","13730","13729","13731","13728","13737","13726","13725","13743","13744","13738","13739","13740","13741","13736","13745","13732","13734","13733"]

                    jQuery('.hotel-image-wrapper').map(function (index) {
                        var id = dataLayer[0].TripIDList[index]
                        if (hotelID.includes(id.toString())) {
                            jQuery(this).parent().parent().parent().parent().attr('data-iade',"true");
                        }
                        
                    })
                   if(window.innerWidth>1023){

                    jQuery('.hotel-name a,.hotel-booking-button').click(function(e){
                        if(e.target.parentElement.className.indexOf("hotel-name")>-1){
                            if(jQuery(this).parent().parent().parent().parent().parent().parent().attr('data-iade')){
                                EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                            }
                        }
                       
                        if(e.target.className.indexOf("hotel-booking-button")>-1  || e.target.className==="visible-xs" || e.target.className==="hidden-xs"){

                            if(jQuery(this).parent().parent().parent().attr("data-iade")){

                                EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                            }
                            
                        }
                    })
                    jQuery('.hotel-image-wrapper').click(function(e){

                        if(e.target.className==="lazy"){

                            if(jQuery(this).parent().parent().parent().parent().attr("data-iade")){

                                EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Desktop");
                            }
                        }
                    })
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, "NotShown_Desktop");
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on');

                    }
                   }

                    else{
                        jQuery('.hotel-name a,.hotel-booking-button').click(function(e){
                           
                            if(e.target.parentElement.className.indexOf("hotel-name")>-1){
                                if(jQuery(this).parent().parent().parent().parent().parent().parent().attr("data-iade")){
                                   
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Mobile");
                            }}
                            if(e.target.className.indexOf("hotel-booking-button")>-1 || e.target.className==="visible-xs" || e.target.className==="hidden-xs"){
                                if(jQuery(this).parent().parent().parent().attr("data-iade")){
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Mobile");
                                }
                            }
                        })
                        jQuery('.hotel-image-wrapper').click(function(e){
                            if(e.target.className==="lazy"){
                                if(jQuery(this).parent().parent().parent().parent().attr("data-iade")){
                                    EightDigits.analytics.sendEvent(config.analytics, "Click_NotShown_Mobile");
                                }
                            }
                        })
                        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                            EightDigits.analytics.sendEvent(config.analytics, "NotShown_Mobile");
                            EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on');
    
                        }
                    }
                    return false;
                }
                main.factory.prototype.start();
            }
        };

        boot = function () {
            return main.factory.prototype.init();
        };

        boot();

    };
    var _ed_tourListIadeBadge = new EightDigits.sf();
    _ed_tourListIadeBadge.tourListIadeBadge();
})();



















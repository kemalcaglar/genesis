/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
  initialize({ type: TYPE_EMBEDED }, (config) => {
    onChangeConfig((newConfig) => {
      console.log('new Config', newConfig);
    });

    toggleShow((status) => {
      if (!options.controlVariation) {
        if (status) {
          


jQuery('.headerUyeGiris, .HRUyeGiris').click(function(){
    
    var mailInterval_=setInterval(() => {
    if(jQuery('iframe:eq(0)').contents().find('.userSignUp').length>0){
        clearInterval(mailInterval_);
        jQuery('iframe:eq(0)').contents().find('.userSignUp').on('click',function(){
              
              var mailInterval = setInterval(()=>{
                    if(jQuery('.fancybox-skin').length>0 || jQuery('#divPopupHizliUyelik').length>0 || jQuery('.bodyUyePopup').length>0 || jQuery('#divPopupUyeGiris').length>0 || jQuery('#form1').length>0){
                      var getIframe=Array.from(jQuery('iframe')).find(x=>x.getAttribute("src").includes('UyeGirisPopup.aspx?type=0'))
    
                     
                        if(jQuery(getIframe).contents().find('.userLoginBtn').length>0){
                            clearInterval(mailInterval);
                            jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                            jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn.QuickMember'))
                            jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                            jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').before("<div id='userLoginBtnBackground' style='position:relative;width:100%;height:46px;'></div>");
                            jQuery(getIframe).contents().find("#userLoginBtnBackground").append( jQuery(getIframe).contents().find('.userLoginBtn.QuickMember'))
                            jQuery(getIframe).contents().find("#userLoginBtnBackground").append("<div id='userLoginBtnBackgroundPopUp' style='position:absolute;z-index:9999999;top:0;width:100%;height:46px;'></div>")
                            jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").hover(function(){
                                jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').css("background-color","#333")
                                jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').css("color","#fff")
                            })
                            jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").mouseleave(function(){
                                jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').css("background-color","#222")
                                jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').css("color","#fff")
                            })
                            if(!jQuery(getIframe).contents().find("#chkMailPermission").is(":checked")){
                                var getIframe=Array.from(jQuery('iframe')).find(x=>x.getAttribute("src").includes('UyeGirisPopup.aspx?type=0'))
                               
                                jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").on('click',function(){
                                    setLevel(LEVEL_JOIN, 'Click_Uye_Ol');
                                    if(!jQuery(getIframe).contents().find('#chkMailPermission').is(':checked')){
                                        jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                                        jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn.QuickMember'))
                                        jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                                        var html=' <div id="smpl-mail-container" style="position:fixed;z-index:9999999;top:0;width:100%;height:100vh;">\
                                        <div id="smpl-mail-background" style="position:absolute;z-index:99999;top:0;width:100%;height:100vh;background-color:rgb(0,0,0,0.6)"></div>\
                                       <div style="position:absolute;z-index:99999;background-color:white;width:500px;height:250px;top:'+(window.innerHeight-250)/2+'px;left:'+(window.innerWidth-500)/2+'px">\
                                       <div style="position:relative;text-align:center;background-color:rgb(234,234,234);height:70px;font-size:28px;display:flex;align-items:center;justify-content:center;"><span style="opacity:0.8;">Yeni Kayıt</span>    <a href="javascript:void(0)" style="position:absolute;z-index:999999;font-size:25px;top:11px;right:24px;cursor:pointer;width:30px;color:black;" class="smpl-mail-close">×</a>\
                                       <a href="javascript:void(0)" style="border-radius:50%;background-color:white;position:absolute;z-index:999999;font-size:15px;bottom:-13px;left:239px;cursor:pointer;width:24px;line-height:24px;height:24px;color:rgb(0,2,51);font-style:italic;font-weight:bolder;font-family:auto;" >i</a>\
                                       </div>\
                                        <div style="display:flex;flex-direction:column;text-align:center;margin-top:20px;">\
                                        ';
                                        if(jQuery(getIframe).contents().find("#txtQuickName").val()!==""){
                                            html+='\
                                            <div style="margin-bottom:20px;"><span style="font-size:15px;font-weight:600;">Sevgili '+jQuery(getIframe).contents().find("#txtQuickName").val()+',</span></div>\
                                            ';
                                        }
                                        else{
                                            html+='\
                                            <div style="margin-bottom:20px;"><span style="font-size:15px;font-weight:600;">Değerli Müşterimiz,</span></div>\
                                            ';
                                        }
                                        html+='\
                                            <div style="width:80%;margin:0 auto;font-size:14px;"><span>İletişim onayı vermediğin için sana özel <span style="font-weight:bold;">indirim ve kampanyalarımızdan</span> haberdar olamayacaksın.</span></div>\
                                            <div style="display:flex;flex-direction:row;justify-content:space-between;margin:40px auto 0px auto;width:80%;">\
                                                <div><a style="background-color:rgb(158,192,229);color:white;padding:10px 7px;" href="javascript:void(0)" class="smpl-mail-onay">E-POSTA ONAYI VER</a></div>\
                                                <div><a style="background-color:rgb(0,2,51);color:white;padding:10px 7px;" href="javascript:void(0)" class="smpl-mail-onay-hata">E-POSTA ONAYI VERMEDEN İLERLE</a></div>\
                                            </div>\
                                        </div>\
                                       </div>\
                                    </div>';
                                        jQuery('.global_body').append(html);
                                        setLevel(LEVEL_JOIN, 'Shown_Popup');
                                        jQuery('.smpl-mail-close').click(function(){
                                        jQuery('#smpl-mail-container').remove();
                                        jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                                        setLevel(LEVEL_JOIN, 'Click_Close');
            
                                        })
                                        jQuery("#smpl-mail-background").click(function(){
                                            jQuery('#smpl-mail-container').remove();
                                            jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                                            setLevel(LEVEL_JOIN, 'Click_Close_Background');
            
                                        })
                                        jQuery('.smpl-mail-onay-hata').click(function(){
                                            jQuery('#smpl-mail-container').remove();
                                            jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                                            setLevel(LEVEL_JOIN, 'Click_Mail_Onay_Vermedi');
            
                                        })
                                        jQuery('.smpl-mail-onay').click(function(){
                                            jQuery('#smpl-mail-container').remove();
                                            jQuery(getIframe).contents().find('#chkMailPermission').prop('checked',true);
                                            jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                                            setLevel(LEVEL_JOIN, 'Click_Mail_Onay_Verdi');
            
                                        })
                                    }
                                    else{
                                        jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                                        jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn.QuickMember'))
                                        jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                                        jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                                    }
                                })
                            }
                            else{
                                jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                                jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn.QuickMember'))
                                jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                                jQuery(getIframe).contents().find('.userLoginBtn.QuickMember').click();
                            }
                        }
                    }
                },400)
        })
    }
    }, 400);
    
})






jQuery('.HRUyeOl').on('click',function(){

  var mailInterval = setInterval(()=>{
        if(jQuery('.fancybox-skin').length>0 || jQuery('#divPopupHizliUyelik').length>0 || jQuery('.bodyUyePopup').length>0 || jQuery('#divPopupUyeGiris').length>0 || jQuery('#form1').length>0){
          var getIframe=  Array.from(jQuery('iframe')).find(x=>x.getAttribute("src").includes('UyeGirisPopup.aspx?type=1'))
         
            if(jQuery(getIframe).contents().find('.userLoginBtn').length>0){
                clearInterval(mailInterval);
                jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn'))
                jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                jQuery(getIframe).contents().find('.userLoginBtn').before("<div id='userLoginBtnBackground' style='position:relative;width:100%;height:46px;'></div>");
                jQuery(getIframe).contents().find("#userLoginBtnBackground").append( jQuery(getIframe).contents().find('.userLoginBtn'))
                jQuery(getIframe).contents().find("#userLoginBtnBackground").append("<div id='userLoginBtnBackgroundPopUp' style='position:absolute;z-index:9999999;top:0;width:100%;height:46px;'></div>")
                jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").hover(function(){
                    jQuery(getIframe).contents().find('.userLoginBtn').css("background-color","#333")
                    jQuery(getIframe).contents().find('.userLoginBtn').css("color","#fff")
                })
                jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").mouseleave(function(){
                    jQuery(getIframe).contents().find('.userLoginBtn').css("background-color","#222")
                    jQuery(getIframe).contents().find('.userLoginBtn').css("color","#fff")
                })
                if(!jQuery(getIframe).contents().find("#chkMailPermission").is(":checked")){
                    var getIframe=  Array.from(jQuery('iframe')).find(x=>x.getAttribute("src").includes('UyeGirisPopup.aspx?type=1'))
                   
                    jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").on('click',function(){
                        setLevel(LEVEL_JOIN, 'Click_Uye_Ol');
                        if(!jQuery(getIframe).contents().find('#chkMailPermission').is(':checked')){
                            jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                            jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn'))
                            jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                            var html=' <div id="smpl-mail-container" style="position:fixed;z-index:9999999;top:0;width:100%;height:100vh;">\
                            <div id="smpl-mail-background" style="position:absolute;z-index:99999;top:0;width:100%;height:100vh;background-color:rgb(0,0,0,0.6)"></div>\
                           <div style="position:absolute;z-index:99999;background-color:white;width:500px;height:250px;top:'+(window.innerHeight-250)/2+'px;left:'+(window.innerWidth-500)/2+'px">\
                           <div style="position:relative;text-align:center;background-color:rgb(234,234,234);height:70px;font-size:28px;display:flex;align-items:center;justify-content:center;"><span style="opacity:0.8;">Yeni Kayıt</span>    <a href="javascript:void(0)" style="position:absolute;z-index:999999;font-size:25px;top:11px;right:24px;cursor:pointer;width:30px;color:black;" class="smpl-mail-close">×</a>\
                           <a href="javascript:void(0)" style="border-radius:50%;background-color:white;position:absolute;z-index:999999;font-size:15px;bottom:-13px;left:239px;cursor:pointer;width:24px;line-height:24px;height:24px;color:rgb(0,2,51);font-style:italic;font-weight:bolder;font-family:auto;" >i</a>\
                           </div>\
                            <div style="display:flex;flex-direction:column;text-align:center;margin-top:20px;">\
                            ';
                  
                                 if(jQuery(getIframe).contents().find("#txtQuickName").val()!==""){
                                            html+='\
                                            <div style="margin-bottom:20px;"><span style="font-size:15px;font-weight:600;">Sevgili '+jQuery(getIframe).contents().find("#txtQuickName").val()+',</span></div>\
                                            ';
                                        }
                            else{
                                html+='\
                                <div style="margin-bottom:20px;"><span style="font-size:15px;font-weight:600;">Değerli Müşterimiz,</span></div>\
                                ';
                            }
                            html+='\
                                <div style="width:80%;margin:0 auto;font-size:14px;"><span>İletişim onayı vermediğin için sana özel <span style="font-weight:bold;">indirim ve kampanyalarımızdan</span> haberdar olamayacaksın.</span></div>\
                                <div style="display:flex;flex-direction:row;justify-content:space-between;margin:40px auto 0px auto;width:80%;">\
                                    <div><a style="background-color:rgb(158,192,229);color:white;padding:10px 7px;" href="javascript:void(0)" class="smpl-mail-onay">E-POSTA ONAYI VER</a></div>\
                                    <div><a style="background-color:rgb(0,2,51);color:white;padding:10px 7px;" href="javascript:void(0)" class="smpl-mail-onay-hata">E-POSTA ONAYI VERMEDEN İLERLE</a></div>\
                                </div>\
                            </div>\
                           </div>\
                        </div>';
                            jQuery('.global_body').append(html);
                            setLevel(LEVEL_JOIN, 'Shown_Popup');
                            jQuery('.smpl-mail-close').click(function(){
                            jQuery('#smpl-mail-container').remove();
                            jQuery(getIframe).contents().find('.userLoginBtn').click();
                            setLevel(LEVEL_JOIN, 'Click_Close');

                            })
                            jQuery("#smpl-mail-background").click(function(){
                                jQuery('#smpl-mail-container').remove();
                                jQuery(getIframe).contents().find('.userLoginBtn').click();
                                setLevel(LEVEL_JOIN, 'Click_Close_Background');

                            })
                            jQuery('.smpl-mail-onay-hata').click(function(){
                                jQuery('#smpl-mail-container').remove();
                                jQuery(getIframe).contents().find('.userLoginBtn').click();
                                setLevel(LEVEL_JOIN, 'Click_Mail_Onay_Vermedi');

                            })
                            jQuery('.smpl-mail-onay').click(function(){
                                jQuery('#smpl-mail-container').remove();
                                jQuery(getIframe).contents().find('#chkMailPermission').prop('checked',true);
                                jQuery(getIframe).contents().find('.userLoginBtn').click();
                                setLevel(LEVEL_JOIN, 'Click_Mail_Onay_Verdi');

                            })
                        }
                        else{
                            jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                            jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn'))
                            jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                            jQuery(getIframe).contents().find('.userLoginBtn').click();
                        }
                    })
                }
                else{
                    jQuery(getIframe).contents().find("#userLoginBtnBackgroundPopUp").remove();
                    jQuery(getIframe).contents().find('#userLoginBtnBackground').after(jQuery(getIframe).contents().find('.userLoginBtn'))
                    jQuery(getIframe).contents().find("#userLoginBtnBackground").remove();
                    jQuery(getIframe).contents().find('.userLoginBtn').click();
                }
            }
        }
    },400)
})




        } else {
          // replace changes
        }
      }
    });
  });
}
function smplShowSurveyBasket(){
    if(jQuery(".js-mini-basket-show-btn span:first").text() > 0){
        var tempLeft = (window.innerWidth - 300) / 2;
        const sendEvent = (eventKey, data, done) => {
            const trackingCode = 'l3vb0m7r';
            const visitorCode = Math.floor(Math.random() * 100000000 + 1);
            const sessionCode = Math.floor(Math.random() * 100000000 + 1);
            const hitCode = Math.floor(Math.random() * 100000000 + 1);
            const domain = 'www.hellosmpl.com';
            const getServiceUrl = (path, params) => {
                return "https://hit.8digits.com/" + path
                    + "?trackingCode=" + trackingCode
                    + "&visitorCode=" + visitorCode
                    + "&sessionCode=" + sessionCode
                    + "&domain=" + domain
                    + "&hitCode=" + hitCode
                    + "&path=&rnd=&"
                    + Object.keys(params).map(key => key + '=' + params[key]).join('&');
            };
            const createImage = (source, onload) => {
                const image = new Image();
                image.src = source;
                image.onload = onload;
            };
            const hitUrl = getServiceUrl('hit', { obj: '' });
            const attrUrl = getServiceUrl('setattrs', { obj: encodeURIComponent(JSON.stringify(data)) });
            const eventUrl = getServiceUrl('event', { key: eventKey, value: '' });
            createImage(hitUrl, () => createImage(attrUrl, () => createImage(eventUrl, done)));
        };
        var css = '<style>\
    .inner-buttons{width: 278px;\
    border: 2px solid #E7E7EE;\
    text-align: left;\
    margin: 4px 9px;}\
    .inner-buttons:hover{width: 278px;\
    border: 2px solid #BE7817;\
    background-color:#BE7817;\
    color:white;\
    text-align: left;\
    margin: 4px 9px;\
    }\
    .inner-buttons.clicked{width: 278px;\
    border: 2px solid #BE7817;\
    background-color:#BE7817;\
    color:white;\
    text-align: left;\
    margin: 4px 9px;\
    }\
    .button-smpl{ padding: 5px 8px;font-size: 11px;}\
    #smpl-thanks_inner_sendButton{\
    width: 90%;\
    background-color: #BE7817;\
    color: white;\
    line-height: 42px;\
    font-size: 15px;\
    margin: 10px 5%;\
    height: 42px;\
    text-align: center;}\
    #smpl-thanks_inner_close{position: absolute; top: -10px; right: -5px; font-size: 19px; line-height: 33px; text-align: center; width: 41px; height: 40px; cursor: pointer; transform: rotate(45deg);}\
    #smpl-thanks_inner_thanks{\
    padding: 13px 37px;\
    background-color: #BE7817;\
    color: white;\
    font-size: 12px;\
    position: absolute;\
    bottom: 8px;\
    left: 15px;\
    display:none;\
    }\
    #smpl_diger:focus{\
    border:2px solid #BE7817;\
    background-color:white;\
    }\
    #smpl_diger{\
    border:none;\
    }\
    </style>'
        let html = `<div id="smpl-thanks_main" style="font-family: Gotham-Medium, sans-serif;position:fixed; z-index:9999; top:0px; width:100%; height:100%;">
    <div id="smpl-thanks_overlay" style="position:absolute; z-index:9998; top:0px; width:100%; height:100%; background:rgba(0,0,0,0.6)"></div>
    <div id="smpl-thanks_inner" style="position:absolute;z-index:9999;top:47px;width: 300px;cursor:pointer; left:`+ tempLeft + `px;background-color:white; border-radius: 10px 10px 0px 0px;">
    <div id="smpl-thanks_inner_header" style="height: 56px; line-height: 20px; background-color: #F5E8D5; font-size: 12px; text-align: center; border-radius: 10px 10px 0px 0px; padding-top: 13px;">Alışverişinizi neden yarım bıraktığınızı bizimle paylaşır mısınız?</div>
    <div id="smpl-thanks_inner_body" style="display:flex;width:100%;align-items: center;flex-direction: column; background-color:white;padding-top: 8px;">
    <div class="inner-buttons" >
       <div  class="button-smpl" >Ürün fiyatlarını pahalı buldum.</div>
    </div>
    <div class="inner-buttons" >
       <div  class="button-smpl" >Adres seçiminde sorun yaşadım.</div>
    </div>
    <div class="inner-buttons" >
       <div  class="button-smpl" >Aradığım ürünleri bulamadım.</div>
    </div>
    <div class="inner-buttons" >
       <div  class="button-smpl" >Daha sonra almayı düşünüyorum.</div>
    </div>
    <div class="inner-buttons" >
       <div  class="button-smpl" >Mağazadan almayı düşünüyorum.</div>
    </div>
    <div class="inner-buttons" id="smpl_diger_container" >
       <div  class="button-smpl" >Diğer</div>
       <input id="smpl_diger" type="text" style="padding-left:9px;color:black;width:100%;height:60px;">
    </div>
    </div>
    <div id="smpl-thanks_inner_sendButton" >
    GÖNDER
    </div>
    <div id="smpl-thanks_inner_close">+</div>
    <div id="smpl-thanks_inner_thanks">Geri Dönüşünüz İçin Teşekkürler!</div>
    </div>
    </div>`
        jQuery('head').append(css);
        jQuery('body').append(html);
        //setLevel(LEVEL_JOIN, "Shown_Form");
        jQuery('.inner-buttons').on("click",function () {
            if (jQuery(this).hasClass('clicked')) {
            }
            else {
                jQuery('#smpl_diger').val("");
                jQuery('.inner-buttons').removeClass('clicked');
                jQuery(this).addClass('clicked');
                //setLevel(LEVEL_JOIN, "Clicked_Button");
            }
        });
        jQuery('#smpl_diger_container').on("click",function () {
            jQuery('#smpl_diger').focus();
        })
        jQuery('#smpl-thanks_inner_sendButton').on("click",function () {
            if (jQuery('.inner-buttons.clicked').length > 0) {
                let selectedAns = jQuery('.inner-buttons.clicked').text().trim();
                if (selectedAns === "Diğer") {
                    if(jQuery("#smpl_diger").val()===""){
                        alert('Lütfen Diğer alanını doldurunuz!');
                    }
                    else{
                        selectedAns = "Diger_"
                        selectedAns += jQuery("#smpl_diger").val();
                        jQuery('#smpl-thanks_inner_body').empty();
                        jQuery('#smpl-thanks_inner_sendButton').remove();
                        jQuery('#smpl-thanks_inner_body').append("<div style='margin-top:40px;width:95%;font-size:13px;text-align:center;'><span>Görüşleriniz bizim için çok önemli,<br> sizi daha detaylı dinleyebilmemiz için<br> bizimle telefon numaranızı paylaşır mısınız?</span></div>")
                        jQuery('#smpl-thanks_inner_body').append("<input style='margin-bottom:15px;border: 2px solid #BE7817 !important;margin-top:30px;width:90%;height:30px;text-align:center;' data-initial='0' maxlength='11' id='smpl-input-cep' type='text' >")
                        jQuery('#smpl-thanks_inner_body').after("<div id='smpl-thanks_inner_sendButton_2' style='width: 90%;background-color: #BE7817;color: white;line-height: 42px;font-size: 15px;margin: 10px 5%;height: 42px;text-align: center;'>GÖNDER</div>")
                        jQuery('#smpl-input-cep').keypress(function(){
                            return event.keyCode >= 48 && event.keyCode <= 57
                        })
                        jQuery(document).on("input", "#smpl-input-cep", function () {
                            this.value = this.value.replace(/\D/g, '');
                            if (jQuery(this).val().length == 0) {
                                let value = jQuery(this).val();
                                jQuery(this).val(jQuery(this).data("initial") + value.substring(1));
                            }
                        });
                        jQuery("#smpl-input-cep").focus(function () {
                            if (jQuery(this).val().length == 0) {
                                let value = jQuery(this).val();
                                jQuery(this).val(jQuery(this).data("initial") + value.substring(1));
                            }
                        });
                        jQuery('#smpl-thanks_inner_sendButton_2').on("click",function(){
                            if(jQuery('#smpl-input-cep').val().length===11 && jQuery('#smpl-input-cep').val().substring(0,1)==="0"){
                                let telNumber = jQuery('#smpl-input-cep').val();
                                const data = { data: { selectedAns,telNumber} }
                                jQuery(this).text("Geri Dönüşünüz İçin Teşekkürler!");
                                //setLevel(LEVEL_JOIN, "SendData");
                                sendEvent('GodivaSepetTerk', data, () => {
                                });
                                setTimeout(()=>{
                                    jQuery('#smpl-thanks_main').remove();
                                },2000)
                            }
                            else{
                                alert("Telefon Numarası 11 haneli ve 0 ile baslamalıdır.")
                            }
                        })
                        jQuery('#smpl-thanks_inner_close').on("click",function(){
                            //setLevel(LEVEL_JOIN, "Close_Clicked");
                            const data = { data: { selectedAns} }
                            //setLevel(LEVEL_JOIN, "SendData");
                            sendEvent('GodivaSepetTerk', data, () => {
                            });
                        })
                    }
                }
                else{
                    jQuery('#smpl-thanks_inner_thanks').css('display', 'block');
                    const data = { data: { selectedAns } }
                    //setLevel(LEVEL_JOIN, "SendData");
                    sendEvent('GodivaSepetTerk', data, () => {});

                    setTimeout(function () {
                        jQuery('#smpl-thanks_main').remove();
                    }, 1500)
                }
            }
            else {
                alert('Lütfen Seçeneklerden Birini Seçiniz!');
            }
        });
        jQuery('#smpl-thanks_inner_close').on("click",function () {
            jQuery('#smpl-thanks_main').remove();
            //setLevel(LEVEL_JOIN, "Close_Clicked");
        })
    }
    else{
        shownSurvey=false;
    }
}
let timerInterval;
let firstTimerInterval;
let shownSurvey=false;
function firstInitTimer(){
    let  second= 0 ;
    clearInterval(firstTimerInterval);
    firstTimerInterval=setInterval(function() {
        second++;
        if(second===45){
            shownSurvey=true;
            smplShowSurveyBasket();
            clearInterval(firstTimerInterval);
        }

    }, 1000);
}
firstInitTimer();


window.addEventListener('router.changed',function(e){
    if(!shownSurvey){
        clearInterval(firstTimerInterval);
        let secondCount = 0;
        function initTimer(){
            clearInterval(timerInterval);
            timerInterval=setInterval(function() {
                if(!shownSurvey){
                    secondCount++;
                    if(secondCount===45){
                        shownSurvey=true;
                        smplShowSurveyBasket();
                        clearInterval(timerInterval);
                    }
                }
                else{
                    clearInterval(timerInterval);
                }

            }, 1000);
        }
        initTimer();
    }
})
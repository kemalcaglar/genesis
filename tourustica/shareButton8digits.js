(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Share_Button_Icon")) {
        return false
    }
    EightDigits.sf.prototype.Share_Button_Icon = function () {

        var config = {
            scenarioname: "Share_Button_Icon",
            analytics: "Share_Button_Icon",
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
             

var shareIcon ='<div class="smpl-share-icon-button" style="margin-left:5px;color:black;"><svg fill="#dc242d" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" id="Capa_1" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve"><g><g><path d="M352,256c-23.983,0-45.13,11.569-58.801,29.201l-144.438-55.553c0.146-1.897,0.572-3.714,0.572-5.647    c0-3.589-0.568-7.025-1.06-10.479l148.009-68.32c13.693,15.487,33.473,25.466,55.717,25.466c41.167,0,74.667-33.5,74.667-74.667    c0-41.167-33.5-74.667-74.667-74.667S277.333,54.833,277.333,96c0,3.589,0.568,7.025,1.06,10.479l-148.009,68.32    c-13.693-15.487-33.473-25.466-55.717-25.466C33.5,149.333,0,182.833,0,224c0,41.167,33.5,74.667,74.667,74.667    c23.983,0,45.13-11.569,58.801-29.201l144.438,55.553c-0.146,1.897-0.572,3.714-0.572,5.647c0,41.167,33.5,74.667,74.667,74.667    s74.667-33.5,74.667-74.667C426.667,289.5,393.167,256,352,256z"/></g></g></svg></div>';
if(jQuery(".hotel-detail-page").length>0){
    jQuery(".hotel-detail-top").prepend(shareIcon);
    jQuery('.smpl-share-icon-button').css({"float":"right","margin-left":"15px","margin-right":"5px"});
}
var hotelName = jQuery(".hotel-detail-top h1").text();
var icon_ = {
    whatsapp :'<svg style="background-color:#00E676;border-radius:9px;padding:3px;" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>',
    copy:'<svg height="39" viewBox="0 0 512 512" width="39" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="512" y1="256" y2="256"><stop offset="0" stop-color="#00f1ff"/><stop offset=".231" stop-color="#00d8ff"/><stop offset=".5138" stop-color="#00c0ff"/><stop offset=".7773" stop-color="#00b2ff"/><stop offset="1" stop-color="#00adff"/></linearGradient><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="url(#a)"/><g fill="#fff"><path d="m409.019531 242.945312c-8.285156 0-15 6.714844-15 15v112.171876c0 13.179687-10.722656 23.902343-23.902343 23.902343h-228.230469c-13.183594 0-23.902344-10.722656-23.902344-23.902343v-228.234376c0-13.179687 10.722656-23.902343 23.902344-23.902343h112.816406c8.285156 0 15-6.714844 15-15 0-8.28125-6.714844-15-15-15h-112.816406c-29.726563 0-53.90625 24.183593-53.90625 53.902343v228.230469c0 29.722657 24.183593 53.902344 53.90625 53.902344h228.226562c29.726563 0 53.90625-24.179687 53.90625-53.902344v-112.167969c0-8.285156-6.714843-15-15-15zm0 0"/><path d="m265.296875 211.351562c.28125.589844.601563 1.160157.960937 1.710938.859376 1.324219 2.71875 4.132812 4.90625 7.207031l-41.332031 41.332031c-5.859375 5.859376-5.859375 15.355469 0 21.214844 2.929688 2.929688 6.769531 4.394532 10.605469 4.394532 3.839844 0 7.679688-1.464844 10.609375-4.394532l21.53125-21.53125c.09375.183594.1875.367188.277344.546875 2.191406 4.625 3.300781 9.273438 3.300781 13.816407 0 12.703124-7.359375 26.84375-21.289062 40.914062l-1.140626.984375c-.546874.472656-1.058593.984375-1.527343 1.527344l-.980469 1.132812c-14.082031 13.933594-28.21875 21.292969-40.910156 21.292969-6.847656 0-13.199219-2.113281-19.386719-6.453125-.246094-.210937-.496094-.417969-.75-.613281l-1.261719-.964844c-1.804687-1.382812-3.589844-2.957031-5.3125-4.675781-8.375-8.363281-12.449218-17.015625-12.449218-26.449219 0-12.707031 7.359374-26.84375 21.292968-40.914062l1.140625-.988282c.542969-.46875 1.050781-.976562 1.519531-1.519531l.984376-1.136719c11.066406-10.957031 21.734374-17.75 31.710937-20.191406 8.046875-1.972656 12.972656-10.089844 11-18.136719-1.96875-8.046875-10.09375-12.976562-18.136719-11.003906-15.480468 3.789063-31.007812 13.371094-46.144531 28.472656-.257813.257813-.507813.523438-.746094.800781l-.648437.746094-.742188.644532c-.273437.238281-.539062.484374-.792968.742187-19.914063 19.9375-30.4375 41.546875-30.4375 62.484375 0 17.554688 7.148437 33.597656 21.25 47.675781 2.640624 2.636719 5.417968 5.078125 8.257812 7.257813l.34375.261718c.402344.371094.828125.722657 1.269531 1.050782 11.636719 8.566406 24.433594 12.910156 38.035157 12.910156 20.925781 0 42.53125-10.523438 62.480468-30.433594.261719-.257812.511719-.527344.753906-.804687l.640626-.742188.742187-.644531c.273437-.238281.542969-.484375.796875-.742188 19.910156-19.941406 30.4375-41.546874 30.4375-62.484374 0-9.09375-2.117188-18.132813-6.285156-26.867188-.039063-.082031-.082032-.164062-.121094-.246094-.832031-1.660156-2.730469-5.34375-5.125-9.296875l40.710938-40.710937c5.855468-5.855469 5.855468-15.355469 0-21.214844-5.859376-5.855469-15.355469-5.855469-21.214844 0l-21.390625 21.394531c-.257813-.382812-.507813-.761719-.753907-1.128906-1.96875-4.386719-2.964843-8.789063-2.964843-13.097656 0-12.703125 7.359375-26.84375 21.289062-40.914063l1.140625-.984375c.546875-.472656 1.058594-.984375 1.527344-1.527343l.980469-1.132813c14.082031-13.933594 28.21875-21.292969 40.914062-21.292969 6.847657 0 13.199219 2.113282 19.390625 6.457032.242188.210937.488282.414062.746094.609374l1.257812.964844c1.808594 1.386719 3.59375 2.957032 5.3125 4.675782 8.378907 8.363281 12.449219 17.019531 12.449219 26.449218 0 12.707032-7.359375 26.84375-21.292969 40.914063l-1.136718.988281c-.542969.46875-1.054688.976562-1.523438 1.519531l-.980468 1.136719c-10.839844 10.714844-21.8125 17.332031-32.617188 19.671875-8.097656 1.753906-13.238281 9.738281-11.484375 17.835937 1.519531 7.027344 7.734375 11.828126 14.644531 11.828126 1.050782 0 2.117188-.109376 3.1875-.34375 16.644532-3.601563 32.738282-13.066407 47.835938-28.132813.257812-.257813.507812-.523437.746094-.800781l.648437-.746094.742187-.648438c.273438-.234374.539063-.480468.796876-.738281 19.910156-19.9375 30.433593-41.546875 30.433593-62.484375 0-17.554687-7.148437-33.597656-21.25-47.675781-2.632812-2.632813-5.410156-5.074219-8.257812-7.257813l-.347657-.265624c-.402343-.371094-.824218-.71875-1.265624-1.042969-11.636719-8.570313-24.433594-12.914063-38.035157-12.914063-20.925781 0-42.53125 10.523438-62.480469 30.433594-.261718.257812-.511718.527344-.753906.804688l-.640625.742187-.742187.644531c-.273438.234375-.542969.484375-.796875.742188-19.910157 19.9375-30.4375 41.546875-30.4375 62.484375 0 9.09375 2.117187 18.136719 6.285156 26.871093zm0 0"/></g></svg>',
    email:'https://cdn.8digits.com/log/r/0c69a259-7d6d-48a1-bc80-070b7dcc7d5f.png',
    twitter:'https://cdn.8digits.com/log/r/ae096227-42a4-4103-83e3-d295dbd453d2.png',
    facebook:'https://cdn.8digits.com/log/r/779a3c71-fdc5-4c15-a481-67056945d48d.png'
}
var shareIconContainer =`<div class='smpl-share-icon-inclusive'>
<div class='smpl-share-icon-layer'></div>
<div class='smpl-share-icon-container'>
<span class='copy-text' style='font-size:11px;display:none;z-index:999999;background-color:white;position:absolute;padding:5px;left:`+(window.innerWidth-94)/2+`px;bottom:140px;border-radius:5px;'>Link Kopyalandı</span>
<div class='smpl-share-icon'><a  class='smpl-icon-whatsapp' target='_blank' href='whatsapp://send?phone=&text=`+hotelName+` `+ window.location.href+`'>`+icon_.whatsapp+`</a><span>Whatsapp</span></div>
<div class="smpl-share-icon"><a class="smpl-social-button smpl-icon-email" class="w-inline-block social-share-btn email" href="mailto:?subject=&body=:%20" target="_blank" title="Email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' + encodeURIComponent(document.URL)); return false;"><img src="`+icon_.email+`" style="
width: 39px; margin-top: 10px;"><span style="margin-bottom: 40px;">E-mail</span></a></div>
<div class="smpl-share-icon"><a class="smpl-social-button smpl-icon-twitter" class="w-inline-block social-share-btn tw" href="https://twitter.com/intent/tweet?" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=%20Check%20up%20this%20awesome%20content' + encodeURIComponent(document.title) + ':%20 ' + encodeURIComponent(document.URL)); return false;">
<img style="width:39px; margin-top: 10px" src="`+icon_.twitter+`"><span style="margin-bottom: 40px;">Twitter</span></a></div>
<div class="smpl-share-icon"><a class="smpl-social-button smpl-icon-facebook" class="w-inline-block social-share-btn fb" href="https://www.facebook.com/sharer/sharer.php?u=&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"> 
<img style="width:39px; margin-top: 10px;" src="`+icon_.facebook+`"><span style="margin-bottom: 40px;">Facebook</span></a></div>
<div class='smpl-share-icon' ><a class='smpl-icon-copy' href='javascript:void(0);'>`+icon_.copy+`</a><span>Kopyala</span>
</div>
</div>
</div>`;
jQuery('body').append(shareIconContainer);
var iconStyle = "\
<style>\
.smpl-share-icon-inclusive{\
    display:none;\
    position:fixed;\
    top:0px;\
    left:0px;\
    z-index:99999;\
    width:100%;\
    height:100%;\
}\
.smpl-share-icon-layer{\
    position:fixed;\
    top:0px;\
    left:0px;\
    z-index:999999;\
    width:100%;\
    height:100%;\
    background-color: rgba(0,0,0,0.6);\
}\
.smpl-share-icon-container{\
    position:relative;\
    background-color:#fff;\
    display:flex;\
    flex-direction:row;\
    z-index:9999999;\
    justify-content:space-evenly;\
    padding-left:10px;\
    flex-wrap:wrap;\
    width:100%;\
    height:135px;\
    position:fixed;\
    bottom:-200px;\
    left:0px;\
}\
.smpl-share-icon{\
    width:50px;\
    display:flex;\
    flex-direction:column;\
    justify-content:center;\
    align-items:center;\
}\
.smpl-share-icon a{\
display:flex;\
}\
.smpl-share-icon span{\
font-size:10px;\
}\
.smpl-social-button {\
    display: flex;\
    font-size: 10px;\
    justify-content: center;\
    text-align: center;\
    align-items: center;\
    color: #333;\
    flex-direction: column;\
    width: 50px;\
    margin-top: 30px;\
    height: 30px;\
    text-decoration: none;\
}\
</style>\
"
jQuery('head').append(iconStyle)
if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
    EightDigits.analytics.sendEvent(config.analytics, 'Shown');
    EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
}

jQuery('.smpl-share-icon-button').on('click',function(){
    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown2')) {
        EightDigits.analytics.sendEvent(config.analytics, 'Shown_Share_Area');
        EightDigits.utils.setCookie('ed-' + config.analytics + '-shown2', 'on')
    }
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Share');

        jQuery('.smpl-share-icon-layer').parent().fadeIn("fast");
        setTimeout(() => {
            jQuery('.smpl-share-icon-container').animate({
                bottom:"50px"
            },300)
        }, 301);
})
jQuery('.smpl-icon-copy').click(function(){
    if(jQuery('.copy-text').css("display")==="none"){
        jQuery('.copy-text').fadeIn("fast");
        setTimeout(function(){
            jQuery('.copy-text').fadeOut("fast");
        },2000)
    }
    
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Copy');

    navigator.clipboard.writeText(window.location.href)
})
jQuery('.smpl-icon-whatsapp').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Whatsapp');
})
jQuery('.smpl-icon-email').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Email');
})
jQuery('.smpl-icon-twitter').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Twitter');
})
jQuery('.smpl-icon-facebook').click(function(){
    EightDigits.analytics.sendEvent(config.analytics, 'Click_Facebook');
})
jQuery('.smpl-share-icon-layer').click(function(){
    jQuery('.smpl-share-icon-container').animate({
        bottom:"-200px"
    },301)
    setTimeout(() => {
        jQuery('.smpl-share-icon-layer').parent().fadeOut("fast");
    }, 302);
})


            },
            control: function () {
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
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
    var _ed_Share_Button_Icon = new EightDigits.sf();
    _ed_Share_Button_Icon.Share_Button_Icon();
})();

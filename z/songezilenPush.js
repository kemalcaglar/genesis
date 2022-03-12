function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
var exitIntentControl = function(e){
    if (!e.toElement && !e.relatedTarget && e.screenX + 5 < window.innerWidth && e.screenX > 5 && e.screenY < 200) {
       
    if (!scenario && isContact) {
        document.removeEventListener('mouseout', exitIntentControl);
        scenario = true;

        clearInterval(popupInterval)
        var style2 = `
                  .smpl-popup-container {
                      width:100%;
                      height:100%;
                      position:fixed;
                      top:0px;
                      left:0px;
                      z-index:99997;
                  display:none;
                  }
                  .smpl-popup-layer{
                      width:100%;
                      height:100%;
                      position:absolute;
                      top:0px;
                      left:0px;
                      background-color:rgba(255,255,255,0.8);
                      z-index:99998;
                  }
                  .smpl-popup-main{
                      width:800px;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      z-index: 999999;
                  }
                  .smpl-popup-main img {
                      width:100%;
                  }
                  .smpl-popup-close{
                      position: absolute;
                      right: 87px;
                      top: 107px;
                      width: 35px;
                      height: 35px;
                      display: flex;
                      justify-content: center;
                      cursor: pointer;
                      align-items: center;
                      color: #FFB401;
                      border: 2px solid #FFB401;
                      border-radius: 50%;
                      box-sizing: border-box;
                      padding-bottom: 4px;
                      font-size:3vw;
                  }
                  #smpl-popup-code{
                      left: 250px;
                      width: 19px;
                      height: 2px;
                      bottom: 146px;
                      top: 200px;
                      position: absolute;
                      z-index: -3;
                       text-transform: uppercase;
                  }
                  .smpl-popup-code{
                          width: 300px;
                          height: 49px;
                          line-height: 49px;
                          font-size: 30px;
                          font-weight: bold;
                          color: white;
                          position: absolute;
                          top: 344px;
                          left: 254px;
                          z-index: 9999999;
                          text-transform: uppercase;
                  }
                  .smpl-popup-codeCopy{
                      width: 85px;
                      height: 50px;
                      line-height: 49px;
                      font-size: 47px;
                      font-weight: bold;
                      color: white;
                      position: absolute;
                      cursor: pointer;
                      top: 344px;
                      left: 556px;
                      z-index: 9999999;
                  }
                  .smpl-popup-btn {
                      width: 329px;
                      height: 78px;
                      position: absolute;
                      top: 453px;
                      left: 397px;
                      cursor: pointer;
                      z-index: 9999999;
                  }
                  .smpl-popup-codeCopyText{
                      color: white;
                      position: absolute;
                      cursor: pointer;
                      top: 286px;
                      left: 334px;
                      z-index: 9999999;
                      border: 1px solid white;
                      padding: 15px;
                      border-radius: 5px;
                      display:none;
                  }`;
                            

               if(typeof JSON.parse(data).coupon !=="undefined"){
                   //setLevel(LEVEL_JOIN,"shown-promoCodePopup")
                       var style =  document.createElement('style')
                              style.innerHTML=style2
                              document.querySelector('head').append(style);
                   var container =  document.createElement('div');
                   container.className="smpl-popup-container";
                   document.querySelector('body').append(container);
                   container.innerHTML= html
                   setCookie("smplPopupCoupon",JSON.parse(data).coupon,15)

                 
                 document.querySelector('.smpl-popup-container').style.display="block"
                 document.querySelector('#smpl-popup-code').value = JSON.parse(data).coupon;
                 document.querySelector('.smpl-popup-code').textContent = JSON.parse(data).coupon;

                  document.querySelector('.smpl-popup-close').addEventListener('click',function(){
                                                   //setLevel(LEVEL_JOIN,"click-closePromoCodePopup")

document.querySelector('.smpl-popup-container').remove()
})

document.querySelector('.smpl-popup-btn').addEventListener('click',function(){
//setLevel(LEVEL_JOIN,"click-PromoCodePopup")

window.location.href= "https://turk.net/kobi"

})

document.querySelector('.smpl-popup-codeCopy').addEventListener('click',function(){
        //setLevel(LEVEL_JOIN,"click-copyPromoCodePopup")

copyTheClipBoard();
if(document.querySelector('.smpl-popup-codeCopyText').style.display==="none"){
  document.querySelector('.smpl-popup-codeCopyText').style.display="block"
  setTimeout(function(){
      document.querySelector('.smpl-popup-codeCopyText').style.display="none"

  },2500)
}
})
               }
               else{
            setCookie("smplPopupCouponOver","false")

               }
  });
        }
        }
        else{
           //setLevel(LEVEL_JOIN,"shown-promoCodePopup")

              var style =  document.createElement('style')
                              style.innerHTML=style2
                              document.querySelector('head').append(style);
          var container =  document.createElement('div');
          container.className="smpl-popup-container";
          document.querySelector('body').append(container);
          container.innerHTML= html
        document.querySelector('.smpl-popup-container').style.display="block"

        document.querySelector('#smpl-popup-code').value = getCookie("smplPopupCoupon");
        document.querySelector('.smpl-popup-code').textContent = getCookie("smplPopupCoupon");
          document.querySelector('.smpl-popup-close').addEventListener('click',function(){
     //setLevel(LEVEL_JOIN,"click-closePromoCodePopup");

document.querySelector('.smpl-popup-container').remove()
})

document.querySelector('.smpl-popup-btn').addEventListener('click',function(){
        copyTheClipBoard();
        if(document.querySelector('.smpl-popup-codeCopyText').style.display==="none"){
  document.querySelector('.smpl-popup-codeCopyText').style.display="block"
  setTimeout(function(){
      document.querySelector('.smpl-popup-codeCopyText').style.display="none"

  },2500)
}
        //setLevel(LEVEL_JOIN,"click-PromoCodePopup")
setTimeout(function(){
document.querySelector('.smpl-popup-container').remove()
},1500)

})


document.querySelector('.smpl-popup-codeCopy').addEventListener('click',function(){
                  //setLevel(LEVEL_JOIN,"click-copyPromoCodePopup")

copyTheClipBoard();
if(document.querySelector('.smpl-popup-codeCopyText').style.display==="none"){
  document.querySelector('.smpl-popup-codeCopyText').style.display="block"
  setTimeout(function(){
      document.querySelector('.smpl-popup-codeCopyText').style.display="none"

  },2500)
}
})
        }
        
          


    
    }
    else if (!scenario && !isContact) {                
      document.removeEventListener('mouseout', exitIntentControl);
      scenario = true;
      clearInterval(popupInterval)

           //setLevel(LEVEL_JOIN,"shown-formPopup")

      var style2 = `
    .smpl-kobi-popup-form-container {
        width:100%;
        height:100%;
        position:fixed;
        top:0px;
        left:0px;
        z-index:99997;
    display:none;
    }
    .smpl-kobi-popup-form-layer{
        width:100%;
        height:100%;
        position:fixed;
        top:0px;
        left:0px;
        background-color:rgba(0,0,0,0.8);
        z-index:99998;
    }
    .smpl-kobi-popup-form-main{
        width:800px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999999;
    }
    .smpl-kobi-popup-form-main img {
        width:100%;
    }
    .smpl-kobi-popup-form-close{
        position: absolute;
        right: 63px;
        top: 88px;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        color: #FFB401;
        border: 2px solid #FFB401;
        border-radius: 50%;
        box-sizing: border-box;
        padding-bottom: 4px;
        font-size:3vw;
    }


    .smpl-kobi-popup-form-btn {
        width: 329px;
        height: 75px;
        position: absolute;
        top: 406px;
        left: 397px;
        cursor: pointer;
        z-index: 9999999;
    }
    .smpl-kobi-popup-input-name {
        position: absolute;
        outline: none !important;
        top: 225px;
        left: 409px;
        height: 44px;
        width: 289px;
        border-radius: 5px;
        text-align: center;
        font-size: 25px;
        font-family: 'noway';
        border:none;
    }
    .smpl-kobi-popup-input-name-error div{
        position: absolute;
        top: -35px;
        right: -194px;
        z-index: 2;
        width: 178px;
        font-family: system-ui;
        color: white;
        background: #FFB401;
        border-radius: 7px;
        padding: 7px;
        text-align: center;
        font-size: 15px;
    }
    .smpl-kobi-popup-input-name-error div:after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        z-index: -1;
        top: 35px;
        left: -6px;
        background: #FFB401;
        transform: rotate(45deg);
    }
    .smpl-kobi-popup-input-email {
        position: absolute;
        outline: none !important;
        top: 277px;
        left: 409px;
        height: 44px;
        width: 289px;
        border-radius: 5px;
        text-align: center;
        font-size: 25px;
        border:none;
        font-family: 'noway';
    }
    .smpl-kobi-popup-input-email-error div{
        position: absolute;
        top: -6px;
        right: -194px;
        z-index: 2;
        width: 178px;
        font-family: system-ui;
        color: white;
        background: #FFB401;
        border-radius: 7px;
        padding: 7px;
        text-align: center;
        font-size: 15px;
    }
    .smpl-kobi-popup-input-email-error div:after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        z-index: -1;
        top: 6px;
        left: -6px;
        background: #FFB401;
        transform: rotate(45deg);
    }
    .smpl-kobi-popup-input-phone{
        position:absolute;
        top: 330px;
        left: 409px;
        border:none;
        height: 44px;
        width: 289px;
        border-radius: 5px;
        text-align: center;
        font-size: 25px;
        font-family: 'noway';
    }
    .smpl-kobi-popup-input-phone-error div{
        position: absolute;
        top: -6px;
        right: -194px;
        z-index: 2;
        width: 178px;
        font-family: system-ui;
        color: white;
        background: #FFB401;
        border-radius: 7px;
        padding: 7px;
        text-align: center;
        font-size: 15px;
    }
    .smpl-kobi-popup-input-phone-error div:after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        z-index: -1;
        top: 5px;
        left: -6px;
        background: #FFB401;
        transform: rotate(45deg);
    }
    .smpl-kobi-popup-input-phone:focus{
    outline:none;
    }
.smpl-kobi-popup-input-name-error{
    position: absolute;
    right: 63px;
    top: 231px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: #FFB401;
    border: 2px solid #FFB401;
    border-radius: 50%;
    box-sizing: border-box;
    padding-bottom: 4px;
    font-size: 20px;
    display:none;
}

.smpl-kobi-popup-input-email-error{
    position: absolute;
    right: 63px;
    top: 283px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: #FFB401;
    border: 2px solid #FFB401;
    border-radius: 50%;
    box-sizing: border-box;
    padding-bottom: 4px;
    font-size: 20px;
    display:none;
}
.smpl-kobi-popup-input-phone-error{
    position: absolute;
    right: 63px;
    top: 336px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: #FFB401;
    border: 2px solid #FFB401;
    border-radius: 50%;
    box-sizing: border-box;
    padding-bottom: 4px;
    font-size: 20px;
    display:none;
}
.smpl-input-KVKK{
    width: 14px;
    height: 13px;
    top: 383px;
    left: 428px;
    margin:0 !important;
    position: absolute;
    appearance: none;
    border:1px solid transparent;
}
.smpl-input-KVKK:focus{
    outline:none !important ;
    border:none;
}
.smpl-input-KVKK:checked:before{
    content:"\u2713";
    position: absolute;
    font-size: 11px;
    top: 0px;
    left: 0px;
    width: 14px;
    height: 14px;
    background: #003586;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.smpl-kvkk {
    width: 235px;
    height: 25px;
    top: 379px;
    left: 447px;
    cursor: pointer;
    position: absolute;
    z-index: 9999999999;
}
.smpl-kobi-popup-thanks{
  width:600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  text-align: center;
  color: white;
  background-color:#003586;
  font-size: 24px;
  padding: 10px;
}
    `;

    var style =  document.createElement('style')
    style.innerHTML=style2
    document.querySelector('head').append(style);

    var html2 = "<div class='smpl-kobi-popup-form-layer'></div><div class='smpl-kobi-popup-form-main'>   <input type='text' class='smpl-kobi-popup-input-name' placeholder='AD SOYAD'/><input type='text' class='smpl-kobi-popup-input-phone' placeholder='TELEFON' maxlength='11'/><input type='checkbox' class='smpl-input-KVKK'><div class='smpl-kvkk'></div><input type='text' class='smpl-kobi-popup-input-email' placeholder='E-POSTA'/>\<span class='smpl-kobi-popup-form-close'>&times;</span><div class='smpl-kobi-popup-input-email-error'>! <div>Hatalı E-posta</div></div><div class='smpl-kobi-popup-input-name-error'>!  <div>Ad Soyad  3 karakterden az 30 karakterden fazla girilemez.</div></div><div class='smpl-kobi-popup-input-phone-error'> !<div>Telefon Numarası Hatalı (5xx)xxxxxxx veya 0(5xx)xxxxxxx formatında olması gerekir</div></div><div class='smpl-kobi-popup-form-btn'></div><img src='https://cdn.hellosmpl.com/uploads/2021/03/24/6l6rqtog57ai5024dondtdj557.png'></div>"; 

    var container =  document.createElement('div');
                                container.className="smpl-kobi-popup-form-container";
                                document.querySelector('body').append(container);
                                container.innerHTML= html2;
    document.body.style.overflowY="hidden"
    document.querySelector('.smpl-kobi-popup-form-container').style.display="block"
    var validatePhone = function (phone) {
        if (phone.length < 10) {
         
        return false;
        }
        if(phone.length===10 && (phone.substring(0,1)==="0" || phone.substring(0,1) !=="5")){
                return false;
            }
        if(phone.length===11 && (phone.substring(0,1)!=="0" || phone.substring(1,2)!=="5")){
            return false;
        }
        var re = /^\d+$/;
        return re.test(phone);
    };
    var validateEmail =  function(email){
        return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())
    };
    var validateName = function (name){
        return /^[a-züöçğşıİÜĞÇŞÖ\s]{3,30}$/i.test(name)
    }
    document.querySelector('.smpl-kvkk').addEventListener('click',function(){
        window.open("https://turk.net/kisisel-veri-izni/")
    })
    var sendEvent = (eventKey, data, done) => {
        var trackingCode = "l3vb0m7r";
        var visitorCode = Math.floor(Math.random() * 100000000 + 1);
        var sessionCode = Math.floor(Math.random() * 100000000 + 1);
        var hitCode = Math.floor(Math.random() * 100000000 + 1);
        var domain = "www.hellosmpl.com";

        var getServiceUrl = (path, params) => {
          return (
            "https://hit.8digits.com/" +
            path +
            "?trackingCode=" +
            trackingCode +
            "&visitorCode=" +
            visitorCode +
            "&sessionCode=" +
            sessionCode +
            "&domain=" +
            domain +
            "&hitCode=" +
            hitCode +
            "&path=&rnd=&" +
            Object.keys(params)
              .map((key) => key + "=" + params[key])
              .join("&")
          );
        };

        var createImage = (source, onload) => {
          var image = new Image();
          image.src = source;
          image.onload = onload;
        };

        var hitUrl = getServiceUrl("hit", { obj: "" });
        var attrUrl = getServiceUrl("setattrs", {
          obj: encodeURIComponent(JSON.stringify(data)),
        });
        var eventUrl = getServiceUrl("event", { key: eventKey, value: "" });

        createImage(hitUrl, () =>
          createImage(attrUrl, () => createImage(eventUrl, done))
        );
      };

   function showThanksPopup(){
  var html = '<div class="smpl-kobi-popup-thanks">Kısa zamanda size geri dönüş sağlanacaktır.</div>';
  document.querySelector('.smpl-kobi-popup-form-container').insertAdjacentHTML('afterbegin',html)
}
    document.querySelector('.smpl-kobi-popup-form-btn').addEventListener('click',function(){
            var  control = validateFormControl();
            if(control){
                setCookie("smpl_kobiFunnelPopupSend","true",30)
              var user = catchUserInfo()
                var data = { nameSurname: user.name,phone : user.phone,email:user.email };
                sendEvent("kobiFunnelPopup", data, () => { });
                document.querySelector('.smpl-kobi-popup-form-main').remove()
  showThanksPopup();

  setTimeout(function(){
      document.querySelector('.smpl-kobi-popup-form-container').remove()
  },2000)
                       //setLevel(LEVEL_JOIN,"click-formPopup")

            }
           
    })

    var catchUserInfo = function(){
        return {
            email : document.querySelector('.smpl-kobi-popup-input-email').value,
            name :  document.querySelector('.smpl-kobi-popup-input-name').value,
            phone: document.querySelector('.smpl-kobi-popup-input-phone').value
        };
    }
    var showError =function(element){
        document.querySelector(element).style.display="flex";
    }
    var hideError = function(element){
        document.querySelector(element).style.display="none";

    }
    var  validateFormControl  =function(){
        var userInfo = catchUserInfo();
        var errorCount = 0 ;
        if(!validateName(userInfo.name)){
            showError(".smpl-kobi-popup-input-name-error");
            errorCount++;
        }
        else{
            hideError(".smpl-kobi-popup-input-name-error")
        }
        if(!validateEmail(userInfo.email)){
            showError(".smpl-kobi-popup-input-email-error");
            errorCount++;
        }
        else{
            hideError(".smpl-kobi-popup-input-email-error")
        }
        if(!validatePhone(userInfo.phone)){
            showError(".smpl-kobi-popup-input-phone-error")
            errorCount++;
        }
        else{
            hideError(".smpl-kobi-popup-input-phone-error")

        }
        var kvkkError = document.querySelector('.smpl-input-KVKK').checked;
        if(!kvkkError){
            if(document.querySelector('.smpl-input-KVKK').style.border!=="1px solid red"){
                document.querySelector('.smpl-input-KVKK').style.border= "1px solid red";
                 setTimeout(function(){document.querySelector('.smpl-input-KVKK').style.border="1px solid transparent"},2000);
               
                }
                errorCount++;
         }
        return errorCount > 0  ? false : true;
    }

    document.querySelector(".smpl-kobi-popup-input-phone").addEventListener('keydown', function (e) {
    
        if (e.keyCode >= 48 && e.keyCode <= 57) return true;
        if ([8, 9, 35, 36, 37, 39, 46].indexOf(e.keyCode) > -1) return true;
        if (e.keyCode >= 96 && e.keyCode <= 105) return true;
        return false;
    })
    document.querySelector('.smpl-kobi-popup-form-close').addEventListener('click',function(){
          //setLevel(LEVEL_JOIN,"click-closeFormPopup")

        document.querySelector('.smpl-kobi-popup-form-container').remove()
    })
    document.querySelector(".smpl-kobi-popup-input-name").addEventListener('keydown', function (e) {
        this.value = this.value.indexOf("  ")>-1 ? this.value.replace("  "," ") : this.value;
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
        if ([8, 9, 35, 36, 37, 39, 46].indexOf(e.keyCode) > -1) return true;
        if (e.keyCode >= 48 && e.keyCode <= 57) return true;
        if (e.keyCode >= 96 && e.keyCode <= 105) return true;
        
        return false;
    })

    }
    }
}

document.addEventListener('mouseout',exitIntentControl)
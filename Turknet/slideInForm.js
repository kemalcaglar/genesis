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
        //console.log('new Config', newConfig);
      });
  
      toggleShow((status) => {
        if (!options.controlVariation) {
          if (status) {
            var style2 = `
  .smpl-kobi-slideIn-form-container {
  }
  .smpl-kobi-slideIn-form-layer{
  }
  .smpl-kobi-slideIn-form-main{
      width:800px;
      position: fixed;
      top: 50%;
      left: -400px;
      transform: translate(-50%, -50%);
      z-index: 999999;
  }
  .smpl-kobi-slideIn-form-main img {
      width:100%;
  }
  .smpl-kobi-slideIn-form-close{
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
  
  
  .smpl-kobi-slideIn-form-btn {
      width: 329px;
      height: 75px;
      position: absolute;
      top: 406px;
      left: 397px;
      cursor: pointer;
      z-index: 9999999;
  }
  .smpl-kobi-slideIn-input-name {
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
  .smpl-kobi-slideIn-input-name-error div{
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
  .smpl-kobi-slideIn-input-name-error div:after{
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
  .smpl-kobi-slideIn-input-email {
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
  .smpl-kobi-slideIn-input-email-error div{
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
  .smpl-kobi-slideIn-input-email-error div:after{
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
  .smpl-kobi-slideIn-input-phone{
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
  .smpl-kobi-slideIn-input-phone-error div{
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
  .smpl-kobi-slideIn-input-phone-error div:after{
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
  .smpl-kobi-slideIn-input-phone:focus{
  outline:none;
  }
  .smpl-kobi-slideIn-input-name-error{
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
  
  .smpl-kobi-slideIn-input-email-error{
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
  .smpl-kobi-slideIn-input-phone-error{
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
  .smpl-kobi-slideIn-thanks{
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
  .smpl-kobi-text-main {
      display: flex;
      left: -104px;
      color: #fff;
      z-index: 9999;
      top: 45%;
      background: #01037f;
      padding: 10px;
      letter-spacing: 3px;
      transform: rotate(
  90deg
  );
      position: fixed;
      width: 230px;
      justify-content: center;
      text-align: center;
      align-items: center;
      font-weight: 700;
      font-size: 24px;
      cursor: pointer;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
  }
  `;
  
  var style = document.createElement('style')
  style.innerHTML = style2
  document.querySelector('head').append(style);
  
  var html2 = `<span class="smpl-kobi-text-main">BENİ ARAYIN</span>
  <div class='smpl-kobi-slideIn-form-layer'></div>
  <div class='smpl-kobi-slideIn-form-main'>
              <input type='text' class='smpl-kobi-slideIn-input-name' placeholder='AD SOYAD'/>
              <input type='text' class='smpl-kobi-slideIn-input-phone' placeholder='TELEFON' maxlength='11'/>
              <input type='checkbox' class='smpl-input-KVKK'>
  <div class='smpl-kvkk'></div>
              <input type='text' class='smpl-kobi-slideIn-input-email' placeholder='E-POSTA'/>
      <span class='smpl-kobi-slideIn-form-close'>&times;</span>
  <div class='smpl-kobi-slideIn-input-email-error'>!
  <div>Hatalı E-posta</div></div>
  <div class='smpl-kobi-slideIn-input-name-error'>!  
  <div>Ad Soyad  3 karakterden az 30 karakterden fazla girilemez.</div>
  </div>
  <div class='smpl-kobi-slideIn-input-phone-error'> !
  <div>Telefon Numarası Hatalı (5xx)xxxxxxx veya 0(5xx)xxxxxxx formatında olması gerekir</div>
  </div>
  <div class='smpl-kobi-slideIn-form-btn'></div>
      <img src='https://cdn.hellosmpl.com/uploads/2021/03/24/6l6rqtog57ai5024dondtdj557.png'></div>`;
  
  var container = document.createElement('div');
  container.className = "smpl-kobi-slideIn-form-container";
  document.querySelector('body').append(container);
  container.innerHTML = html2;
  
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
    function showThanksslideIn(){
      var html = '<div class="smpl-kobi-slideIn-thanks">Kısa zamanda size geri dönüş sağlanacaktır.</div>';
      document.querySelector('.smpl-kobi-slideIn-form-container').insertAdjacentHTML('afterbegin',html)
      setLevel(LEVEL_JOIN,"shown-successForm")
    }
        document.querySelector('.smpl-kobi-slideIn-form-btn').addEventListener('click',function(){
                var  control = validateFormControl();
                if(control){
                  var user = catchUserInfo()
                    var data = { nameSurname: user.name,phone : user.phone,email:user.email };
                    sendEvent("kobiFunnelslideIn", data, () => { });
                    document.querySelector('.smpl-kobi-slideIn-form-main').remove()
      showThanksslideIn();
    
      setTimeout(function(){
          document.querySelector('.smpl-kobi-slideIn-form-container').remove()
      },2000)
    
                }
               
        })
    
        var catchUserInfo = function(){
            return {
                email : document.querySelector('.smpl-kobi-slideIn-input-email').value,
                name :  document.querySelector('.smpl-kobi-slideIn-input-name').value,
                phone: document.querySelector('.smpl-kobi-slideIn-input-phone').value
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
                showError(".smpl-kobi-slideIn-input-name-error");
                errorCount++;
            }
            else{
                hideError(".smpl-kobi-slideIn-input-name-error")
            }
            if(!validateEmail(userInfo.email)){
                showError(".smpl-kobi-slideIn-input-email-error");
                errorCount++;
            }
            else{
                hideError(".smpl-kobi-slideIn-input-email-error")
            }
            if(!validatePhone(userInfo.phone)){
                showError(".smpl-kobi-slideIn-input-phone-error")
                errorCount++;
            }
            else{
                hideError(".smpl-kobi-slideIn-input-phone-error")
    
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
    
        document.querySelector(".smpl-kobi-slideIn-input-phone").addEventListener('keydown', function (e) {
        
            if (e.keyCode >= 48 && e.keyCode <= 57) return true;
            if ([8, 9, 35, 36, 37, 39, 46].indexOf(e.keyCode) > -1) return true;
            if (e.keyCode >= 96 && e.keyCode <= 105) return true;
            return false;
        })
        jQuery(".smpl-kobi-text-main").click(function(){
          setLevel(LEVEL_JOIN,"click-openForm")
          jQuery(".smpl-kobi-slideIn-form-main").animate({
              left: "378px"
          }, 1200)
        })
        setLevel(LEVEL_JOIN,"shown-form")
        document.querySelector('.smpl-kobi-slideIn-form-close').addEventListener('click',function(){
              setLevel(LEVEL_EXIT,"click-closeFormslideIn")
    
            document.querySelector('.smpl-kobi-slideIn-form-container').remove()
        })
        document.querySelector(".smpl-kobi-slideIn-input-name").addEventListener('keydown', function (e) {
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
          } else {
            // replace changes
          }
        }
      });
    });
  }

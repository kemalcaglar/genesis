(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Sizi_Dinliyoruz_Form_Dolu_Getirme")) {
        return false
    }
    EightDigits.sf.prototype.Sizi_Dinliyoruz_Form_Dolu_Getirme = function () {
        var config = {
            scenarioname: "Sizi_Dinliyoruz_Form_Dolu_Getirme",
            analytics: "Sizi_Dinliyoruz_Form_Dolu_Getirme",
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
  function formTracker(options) {
    var formData = options.defaultData || {};
    var changeFire = function(event) {
        if(event.target.getAttribute('type')==="checkbox"){
            formData[event.target.name]=event.target.checked;
        }
        else if(event.target.getAttribute('type')==="radio"){
            formData[event.target.name] = event.target.value;
        }
        else{
            formData[event.target.name] = event.target.value;
        }
      options.change(formData);
    };
    Array.from(options.formEl.elements).forEach(function(item) {
      if (options.defaultData[item.name]){
          if(item.getAttribute('type')==="checkbox"){
          options.defaultData[item.name]  ? item.click() : null ;
          }
          else if(item.getAttribute('type')==="radio"){
              var val = Number(options.defaultData[item.name])-1;
            jQuery('.radioWrap label:eq('+val+')').click()
          }
          else if(item.id==="usQuestionFormSelect"){
              var val =  Number(options.defaultData[item.name])+1;
              jQuery('#usQuestionFormSelect').find('option:nth-child('+val+')').prop('selected',true).trigger('change');
            }
          else{
            item.value = options.defaultData[item.name];
            var event = new Event('input', { bubbles: true });
            event.simulated=true;
            var tracker= item._valueTracker;
            if (tracker) {
                tracker.setValue(item.value);
              }
              item.dispatchEvent(event);
          }
      } 
      item.addEventListener('keyup', changeFire);
      item.addEventListener('paste', changeFire);
      item.addEventListener('click', changeFire);
      item.addEventListener('change', changeFire);
    });
    options.formEl.addEventListener('submit', options.submit);
  };
  var defaultFormData = (function(){
    return JSON.parse(localStorage.getItem("smpl-onkoloji-form"));
  })();
  formTracker({
    formEl    	: document.querySelector('#usQuestion-form'),
    defaultData : defaultFormData || {},
    change    	: function(dataObj) {
      localStorage.setItem("smpl-onkoloji-form", JSON.stringify(dataObj));
    },
    submit : function () {
    }
  });
  jQuery('.usQuestion-form-submit .blueButton').click(function(){
  setTimeout(function(){
    if(jQuery('#usQuestion .modal-title').text().trim().indexOf("Form başarıyla iletildi.")>-1){
        localStorage.removeItem("smpl-onkoloji-form");
        if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-sendForm')) {
            EightDigits.analytics.sendEvent(config.analytics, 'sendForm');
            EightDigits.utils.setCookie('ed-' + config.analytics + '-sendForm', 'on')
        }
   }
  },2000)
  })
                if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-shown')) {
                    EightDigits.analytics.sendEvent(config.analytics, 'Shown');
                    EightDigits.utils.setCookie('ed-' + config.analytics + '-shown', 'on')
                }
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
    var _ed_Sizi_Dinliyoruz_Form_Dolu_Getirme = new EightDigits.sf();
    _ed_Sizi_Dinliyoruz_Form_Dolu_Getirme.Sizi_Dinliyoruz_Form_Dolu_Getirme();
  })();
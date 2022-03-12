(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Iscep_Button_Mobile")) {
    return false;
  }
  EightDigits.sf.prototype.Iscep_Button_Mobile = function () {
    var config = {
      scenarioname: "Iscep_Button_Mobile",
      analytics: "Iscep_Button_Mobile",
      controlgroup: 0,
    };
    var main = {
      factory: function () {
        return true;
      },
    };
    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
          config.controlgroup > 50
            ? config.controlgroup
            : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(
            EightDigits.utils.getCookie("_ed_" + config.scenarioname)
          );
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      start: function () {
        var css =
          "<style>\
.smpl-button-main {\
    clear: both;\
    float: none;\
    display: table;\
    width: 100%;\
    margin-left: 10px;\
    margin-bottom: 10px;\
}\
.smpl-button-is {\
    float: left;\
    padding: 10px 20px 12px 20px;\
    border-radius: 22.5px;\
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 15%);\
    background-color: #f82e88;\
    color: #fff !important;\
    font-size: 14px;\
    font-family: ProximaB;\
    cursor: pointer;\
    min-width:100px;\
    width:calc(100% - 20px);\
    text-align:center;\
}\
</style>\
";
        jQuery("head").append(css);
        var html =
          '<div class="smpl-button-main">\
<a class="smpl-button-is" href="https://www.isbank.com.tr/indir">İşCep’ten Müşteri Ol\
</a>\
</div>\
';

        jQuery("#ctl00_ctl08_g_27491067_d207_4a7d_bc3d_d21cb4b53655_ctl00_pnlType2").append(html);
        //EightDigits.analytics.sendEvent(config.analytics, "shown-button");
        jQuery(".smpl-button-is").click(function () {
          //EightDigits.analytics.sendEvent(config.analytics, "click-button");
        });
      },
      control: function () {},
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (
            !EightDigits.utils.getCookie("ed-" + config.analytics + "-notshown")
          ) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie(
              "ed-" + config.analytics + "-notshown",
              "on"
            );
          }
          return false;
        }
        main.factory.prototype.start();
      },
    };
    boot = function () {
      return main.factory.prototype.init();
    };
    boot();
  };
  var _ed_Iscep_Button_Mobile = new EightDigits.sf();
  _ed_Iscep_Button_Mobile.Iscep_Button_Mobile();
})();

(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("MOIHamburgerM")) {
        return false
    }
    EightDigits.sf.prototype.MOIHamburgerM = function () {

        var config = {
            scenarioname: "MOIHamburgerM",
            analytics: "MOIHamburgerM",
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
                var hamburgCss = '<style>\
                .smpl-hamburger-wrap{display: block; visibility: visible; bottom: 0; left: 10px; -webkit-transform: translate(0, 0); -ms-transform: translate(0, 0); transform: translate(0, 0); position: fixed;width: 90px; z-index: 999;}\
                .smpl-hamburger-menu-button{cursor:pointer; width: 90px; height: 90px; border-radius: 100% !important; float: right; position: relative; margin-bottom: 12px; background-color: #033B8C;border-radius: 100% !important;color: #fff;background: #054399;background: -moz-linear-gradient(top, #6db22b 0%, #0a7e00 99%);background: -webkit-linear-gradient(top, #054399 0%, #003581 99%);background: linear-gradient(to bottom, #054399 0%, #003581 85%); box-shadow: 2px 2px 7px 0px #003581;}\
                .smpl-hamburger-menu-button img{width: 90px; height: 90px;}\
                .smpl-hamburger-wrap .closed{display: none; visibility: hidden;}\
                .smpl-hamburger-menu-close-button{position: absolute; top: 50%; left: 50%; font-size: 25px; font-weight: bold; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 24px; height: 24px; opacity: 1;}\
                .smpl-hamburger-menu-close-button:before, .smpl-hamburger-menu-close-button:after{position: absolute; left: 10px; content: " "; height: 24px; width: 3px; border-radius: 3px !important; background-color: #fff;}\
                .smpl-hamburger-menu-close-button:before{transform: rotate(45deg);}\
                .smpl-hamburger-menu-close-button:after{transform: rotate(-45deg);}\
                li.smpl-hamburger-menu-item{display: block; min-width: 60px; overflow: hidden; background: transparent; text-decoration: none; list-style: none;color: #f1f1f1; text-align: left; background: #003581; margin: 4px 0; border-radius: 100px !important; font-size: 14px; height: 36px; padding: 0 15px; line-height: 36px; width: auto; display: inline-block; float: left;}\
                ul.smpl-hamburger-menu-list.opened {overflow: hidden; display: inline-grid !important; padding-left:0px !important;}\
                .smpl-hamburger-menu-container{position: relative; display: block; float: left; width: 245px;}\
                .smpl-hamburger-menu-item span{color: #f1f1f1;}\
                .smpl-hamburger-menu-item a {text-decoration: none;}\
                </style>'

                var hamburgMenu = '<div class="smpl-hamburger-wrap">\
                <div class="smpl-hamburger-menu-container">\
                <ul class="smpl-hamburger-menu-list" style="overflow: hidden; display: none;">\
                    </li>\
                    <li class="smpl-hamburger-menu-item">\
                        <div>\
                            <a href="https://isbank.page.link/dbas" class="smpl-hamburgerMenu3" style="color: #f1f1f1;">\
                            İşCep İndir\
                            <img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/1.png" style="position: relative;width: 25px; float:right;margin-left: 7px;top:5px;">\
                            </a>\
                        </div>\
                    </li>\
                    <li class="smpl-hamburger-menu-item">\
                        <div>\
                        <a >\
                        Formu doldur\
                        <img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/2.png" style="position: relative;width: 25px; float:right;margin-left: 7px;top:5px;">\
                        </a>\
                        </div>\
                    </li>\
                    <li class="smpl-hamburger-menu-item">\
                        <div>\
                        <a class="smpl-hamburgerMenu1">\
                        Kimliğini doğrula\
                        <img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/3.png" style="position: relative;width: 25px; float:right;margin-left: 7px;top:5px;">\
                        </a>\
                        </div>\
                    </li>\
                    <li class="smpl-hamburger-menu-item">\
                    <div>\
                    <aclass="smpl-hamburgerMenu1">\
                    Görüntülü görüşme başlat\
                    <img src="https://gorsel.isbank.com.tr/markisbank/isbank/numbers/4.png" style="position: relative;width: 25px; float:right;margin-left: 7px;top:5px;">\
                    </a>\
                    </div>\
                </li>\
                    <li class="smpl-hamburger-menu-item">\
                        <div>\
                        <a  class="smpl-hamburgerMenu2">\
                        İş Bankası ailesine hoş geldin\
                        <img src="https://gorsel.isbank.com.tr/markisbank/isbank/checked-buttom.png" style="position: relative;width: 25px; float:right;margin-left: 7px;top:5px;">\
                        </a>\
                        </div>\
                </ul>\
            </div>\
            <div class="smpl-hamburger-menu-button opened">\
                <a class="smpl-element-link">\
                <img class="smpl-hamburger-menu-button-img opened" src="//gorsel.isbank.com.tr/markisbank/isbank/musteriol/hamburgermenumoi.png">\
                <div class="smpl-hamburger-menu-close-button closed">\
                </div>\
                </a>\
            </div>\
        </div>'

                jQuery('head').append(hamburgCss);
                jQuery('body').append(hamburgMenu);
                EightDigits.analytics.sendEvent(config.analytics, "Shown");
                function getOS() {
                    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                  
                        // Windows Phone must come first because its UA also contains "Android"
                      if (/windows phone/i.test(userAgent)) {
                          return "Windows Phone";
                      }
                  
                      if (/android/i.test(userAgent)) {
                          return "Android";
                      }
                  
                      // iOS detection from: http://stackoverflow.com/a/9039885/177710
                      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                          return "iOS";
                      }
                  
                      return "unknown";
                  }

                  if(getOS() === "iOS"){
                      jQuery('.smpl-hamburger-menu-list li:eq(0) a').attr('href','/indir')
                  }

                jQuery('.smpl-hamburger-menu-button.opened').click(function(){

                    if(jQuery(this).hasClass("smpled")){
                        EightDigits.analytics.sendEvent(config.analytics, "OpenClick");
                        jQuery('.smpl-hamburger-menu-button-img').removeClass('closed').addClass('opened');
                        jQuery('.smpl-hamburger-menu-close-button').removeClass('opened').addClass('closed');
                        jQuery('.smpl-hamburger-menu-list').removeClass('opened');
                        jQuery('.smpl-hamburger-menu-button.opened').removeClass('smpled');
                    }
                    else{
                        jQuery('.smpl-hamburger-menu-button-img').removeClass('opened').addClass('closed');
                        jQuery('.smpl-hamburger-menu-close-button').removeClass('closed').addClass('opened');
                        jQuery('.smpl-hamburger-menu-list').addClass('opened');
                        jQuery('.smpl-hamburger-menu-button.opened').addClass('smpled');
                    }
                });

                jQuery('.smpl-hamburger-menu-item a').click(function(){
                    var selectedElem = jQuery(this).text().trim();
                    EightDigits.analytics.sendEvent(config.analytics, "Click_" + selectedElem);
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
                    EightDigits.analytics.sendEvent(config.analytics, "NotShown");
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
    var _ed_MOIHamburgerM = new EightDigits.sf();
    _ed_MOIHamburgerM.MOIHamburgerM();
})();

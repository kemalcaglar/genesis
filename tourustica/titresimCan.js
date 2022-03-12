(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("noticondesktop")) {
        return false;
    }
    EightDigits.sf.prototype.noticondesktop = function () {
        var config = {
            scenarioname: "noticondesktop",
            analytics: "noticondesktop",
            controlgroup: "0",
            imageurl: "//cdn.8digits.com/f/u/y8glbe6d/07faae16-b0df-4747-a4c2-ec97b458cb10.png"
        };
        var main = {
            "factory": function () {
                return true;
            }
        };
        var listItems = [{
            title: 'Balayı Sürprizleri Touristica’da',
            url: '/balayi-otelleri'
        }, {
            title: 'Kıbrıs\'ta Avantajlı Tatil',
            url: '/kibris-erken-rezervasyon-otelleri'
        }, {
            title: 'Pegasus Ekstra 1000 Bolpuan Fırsatı',
            url: '/pegasus-bolpuan-kampanyasi'
        }, {
            title: 'Chippin ile %10 Geri Kazan!',
            url: '/chippin-kampanyasi'
        }];
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
                if (randomVal < 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {
                // var html = '<div id="ed-noticon-main" style="position: relative;padding: 10px;top: 0px;cursor: pointer;left: 0;z-index:999;">\
                //             <div style="position: absolute; color: white; background-color: red; border-radius: 50%; width: 18px; height: 18px; top: 3px; right: 0px; font-weight: 600; font-size: 13px;padding-left:6px;">'+ listItems.length + '</div>\
                //             <img src="'+ config.imageurl + '">\
                //             <div style="position: relative;z-index: 999999">\
                //             <div id="ed-noticon-list" style="position: absolute;left: -268px;display: none; top: 10px;z-index:999;">\
                //             <ul style="-webkit-padding-start: 0px; list-style-type: none; text-align: left; display: inline-grid; width: 300px; border: 1px solid #ed1c24; margin:0px; box-shadow: rgb(128, 128, 128) 2px 2px 10px 0px">\
                //             <div style="position: absolute; top: -10px; left: 274px; border-style: solid; border-width: 0px 10px 10px; border-color: #E0E0E1 transparent; display: block; width: 0px; z-index: 101;"></div>';
                var html = '<div id="ed-noticon-main" style="position: relative;padding: 0 10px;top: 0px;cursor: pointer;left: 0;z-index:999;">\
                      <img src="'+ config.imageurl + '">\
                      <div style="position: relative;z-index: 999999">\
                      <div id="ed-noticon-list" style="position: absolute;left: -268px;display: none; top: 10px;z-index:999;">\
                      <ul style="-webkit-padding-start: 0px; list-style-type: none; text-align: left; display: inline-grid; width: 300px; border: 1px solid #ed1c24; margin:0px; box-shadow: rgb(128, 128, 128) 2px 2px 10px 0px">\
                      <div style="position: absolute; top: -10px; left: 274px; border-style: solid; border-width: 0px 10px 10px; border-color: #E0E0E1 transparent; display: block; width: 0px; z-index: 101;"></div>';
                var tempLi = "";
                for (var i = 0; i < listItems.length; i++) {
                    if (EightDigits.utils.getCookie(("ed-li-" + i))) {
                        tempLi += '<a id="ed-li-' + i + '" class="ed-noticon-listitem" href="' + listItems[i].url + '">\
                              <li class="ed-noticon-li" style="color: black">' + listItems[i].title + '</li></a>'
                    } else {
                        tempLi += '<a id="ed-li-' + i + '" class="ed-noticon-listitem" href="' + listItems[i].url + '">\
                              <li class="ed-noticon-li" style="color: maroon">' + listItems[i].title + '</li></a>'
                    }
                }
                html += tempLi + '</ul></div></div></div>';
                jQuery('.header-right-items:eq(1)').css('position', 'relative');
                // jQuery('.jetmenu-wrapper:eq(0)').attr("style","position:relative;")
                jQuery('.corporation .header-top-menu').prepend(html);
                var css = '<style>.ed-noticon-listitem{padding: 8px;background-color: white;border-right:0px solid black;border-bottom:1px solid #ddd;}\
                      .ed-noticon-li{font-size:15px;}\
                      </style>';
                jQuery('body').append(css);
                    var css = `
            <style>
            .last-look-titresim {
                animation: titresimEfekt 1s cubic-bezier(.36,.07,.19,.97) both;
                transform: translate3d(0, 0, 0);
                perspective: 1000px;
              }
              @keyframes titresimEfekt {
                0%, 100% {
                  transform: translate3d(-1px, 0, 0);
                }
                
                20%, 80% {
                  transform: translate3d(2px, 0, 0);
                }
              
                30%, 50%, 70% {
                  transform: translate3d(-4px, 0, 0);
                }
              
                40%, 60% {
                  transform: translate3d(4px, 0, 0);
                }
              }
            </style>`
                    jQuery("head").append(css);
                    EightDigits.analytics.sendEvent(config.analytics, "shown_titresim");
                    var show = false;
                    jQuery('#ed-noticon-main').hover(function () {
                        EightDigits.analytics.sendEvent(config.analytics, "hover_titresim");
                        if (!show) {
                            jQuery('#ed-noticon-list').css('display', 'block');
                            show = true;
                        } else {
                            jQuery('#ed-noticon-list').css('display', 'none');
                            show = false;
                        }
                    })
                    jQuery('.ed-noticon-listitem').click(function () {
                        var li = this.getElementsByTagName('li')[0];
                        EightDigits.utils.setCookie(this.id, 'on')
                        EightDigits.analytics.sendEvent(config.analytics, li.textContent+"_titresim");
                    })
                    setTimeout(() => {
                        jQuery("#ed-noticon-main").addClass("last-look-titresim");
                    }, 3000);
                    setTimeout(() => {
                        jQuery("#ed-noticon-main").removeClass("last-look-titresim");
                    }, 4100);
                    setTimeout(() => {
                        jQuery("#ed-noticon-main").addClass("last-look-titresim");
                    }, 7100);
                    setTimeout(() => {
                        jQuery("#ed-noticon-main").removeClass("last-look-titresim");
                    }, 8200);
                
            },
            init: function () {
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
    var _ed_noticondesktop = new EightDigits.sf();
    _ed_noticondesktop.noticondesktop();
})();
(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Discount_Tour_Badge")) {
    return false
  }
  EightDigits.sf.prototype.Discount_Tour_Badge = function () {

    var config = {
      scenarioname: "Discount_Tour_Badge",
      analytics: "Discount_Tour_Badge",
      controlgroup: 0,
      imgSrcOne: "https://cdn.8digits.com/log/r/17f79e9a-9da4-4777-b911-b184587acbf7.png",
      imgSrcTwo: "https://cdn.8digits.com/log/r/f3ad17cc-ebeb-4111-b60f-088309014fa8.png"
    };

    var tourListHundred = [
      13700,
      13701,
      13702,
      13703,
      13704,
      13705,
      13706,
      13707,
      13708,
      13709,
      13710,
      13711,
      13712,
      13713,
      13714,
      13715,
      13716,
      13717,
      13718,
      13719,
      13720,
      13721,
      13722,
      13723,
      13728,
      13729,
      13730,
      13731,
      13732,
      13733,
      13734,
      13736,
      13737,
      13738,
      13739,
      13740,
      13741,
      13743,
      13744,
      13745,
      13765,
      13766,
      13048,
      13642,
      13666,
      13673,
      13674,
      13676,
      13677,
      13742,
      13754,
      13755,
      13756,
      13757,
    ]
    var tourListTwoHundred = [
      13585,
      13664,
      13665,
      13668,
      13669,
      13675,
      13678,
      13679,
      13680,
      13681,
      13682,
      13683,
      13684,
      13685,
      13686,
      13687,
      13688,
      13689,
      13690,
      13698,
      13699,
      13747,
      13753,
      13758,
      13759,
      13760,
      13761,
      13762,
      13763,
      13764
    ]

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
        function displayBadgeDesktop(data, imgSrc) {
          jQuery('.hotel-image-wrapper').map(function (index) {
            var id = dataLayer[0].TripIDList[index]
            if ((data.includes(id))) {
              jQuery(this).append('<span><img class="smpl-tour-badge" style="position: absolute;width:75%;height: auto ;bottom:0!important; "  src="' + imgSrc + '"></img></span>');
              if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                EightDigits.analytics.sendEvent(config.analytics, "Shown-Badge-Desktop");
                EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
              }
            }
          })
        }
        function displayBadgeMobile(data, imgSrc) {
          jQuery('.hotel-image-wrapper').map(function (index, mainItem) {
            var id = dataLayer[0].TripIDList[index]
            if ((data.includes(id))) {
              var isOwnClass = false;
              jQuery(mainItem).find("img").map(function (index, item) {
                if (jQuery(item).hasClass("smpl-kosulsuz-iade-badge")) {
                  isOwnClass = true;
                  return;
                }
              })
              if (isOwnClass) {
                jQuery(mainItem).append('<span><img class="smpl-tour-badge" style="display:flex; right:2%; position: absolute;width:44%;height: auto; top:85%; "  src="' + imgSrc + '"></img></span>');

              } else {
                jQuery(mainItem).append('<span><img class="smpl-tour-badge" style="position: absolute;width:44%;height: auto ;bottom:0; margin:5px auto; "  src="' + imgSrc + '"></img></span>');
                jQuery(this).find(".smpl-rezervasyon-badge").css({
                  "margin": "-20px auto"
                });
              }
                if (EightDigits.utils.getCookie('ed-sccontrol' + config.scenarioname) === null) {
                   EightDigits.analytics.sendEvent(config.analytics, "Shown_Mobile");
                   EightDigits.utils.setCookie('ed-sccontrol' + config.scenarioname, 'on');
               } 
            }
          })
        }

        function fireEvent(device) {
          jQuery('.hotel-name a,.hotel-booking-button').click(function (e) {
            if (e.target.parentElement.className === "hotel-name") {
              if (jQuery(this).parent().parent().parent().parent().find(".smpl-tour-badge").length > 0) {
                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_" + device + "");
              }
            }
            if (e.target.className === "hotel-booking-button" || e.target.className === "visible-xs" || e.target.className === "hidden-xs") {
              if (jQuery(this).parent().parent().parent().find(".smpl-tour-badge").length > 0) {
                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_" + device + "");

              }
            }
          })
          jQuery('.hotel-image-wrapper').click(function (e) {
            if (e.target.className === "lazy") {
              if (jQuery(this).find(".smpl-tour-badge").length > 0) {
                EightDigits.analytics.sendEvent(config.analytics, "Click_Shown_" + device + "");
              }
            }
          })
        }
        if (window.innerWidth > 1023) {
          displayBadgeDesktop(tourListHundred, config.imgSrcOne);
          displayBadgeDesktop(tourListTwoHundred, config.imgSrcTwo);
          fireEvent("Desktop")

        } else {
          displayBadgeMobile(tourListHundred, config.imgSrcOne);
          displayBadgeMobile(tourListTwoHundred, config.imgSrcTwo);
          fireEvent("Mobile")
        }
      },
      control: function () {
        if (typeof dataLayer[0].TripIDList === "undefined") {
          return false;
        }

      },
      init: function () {
        if (main.factory.prototype.control() == false) {
          return false
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
            EightDigits.analytics.sendEvent(config.analytics, "NotShown");
            EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on');
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
  var _ed_Discount_Tour_Badge = new EightDigits.sf();
  _ed_Discount_Tour_Badge.Discount_Tour_Badge();
})();
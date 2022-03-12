(function () {
  EightDigits.sf.prototype.Paraf_200_TL = function () {

      var config = {
          scenarioname: "Paraf_200_TL",
          analytics: "VizesizTur",
          controlgroup: 0
      };

      var main = {
          "factory": function () {
              return true;
          }
      };
      var id = [
          13619,
          13921,
          13073,
          13056,
          13623,
          13746,
          12990,
          12472,
          12980,
          13630,
          13074,
          13163,
          12977,
          13068,
          12982,
          13587,
          13213,
          12983,
          13588,
          13226,
          12991,
          13498,
          13128,
          13107,
          13277,
          13589,
          13558,
          12854,
          13272,
          13590,
          12855,
          13556,
          13271,
          13592,
          12841,
          13552,
          13769,
          12861,
          12863,
          13225,
          13622,
          12853,
          13949,
          13162,
          13906,
          13629,
          13280,
          13900,
          13363,
          13655,
          13286,
          13691,
          13331,
          13951,
          13968,
          13692,
          13221,
          13967,
          13972,
          13526,
          13557,
          13977,
          13130,
          13559,
          13990,
          13560,
          13976,
          13971,
          13636,
          13555,
          13635,
          13973,
          13899,
          13554,
          13593,
          13974,
          13594,
          13993,
          13905,
          13551,
          13992,
          13657,
          13553,
          13950,
          13220,
          13281,
          13437,
          13749,
          14045,
          13996,
          14046,
          13997,
          13901,
          14052,
          14053,
          13898,
          13903,
          13904,
          14061,
          14054,
          14048,
          14106,
          14107,
          14105,
          14114,
          14115,
          14116,
          14132,
          13965,
          14134,
          14136,
          14135
    ]

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

              var tripList = dataLayer[0].TripIDList;


              for (var i = 0; i < id.length; i++) {
                  for (var j = 0; j < tripList.length; j++) {
                      if (id[i] === tripList[j]) {

                          var html = '<div class="ed-main-div" style="color:#ED462F; font-weight:700; cursor:pointer; position:relative">Vizesiz\</div>';
                          jQuery('.center-parent:eq(' + j + ')').append(html)

                          if (!EightDigits.utils.getCookie('ed-paraf-shown')) {
                              EightDigits.analytics.sendEvent(config.analytics, "Shown");
                              EightDigits.utils.setCookie('ed-paraf-shown', 'on')
                          }

                      }

                  }


              }

          },
          init: function () {
              var _exec = main.factory.prototype.random();
              if (!_exec) {
                  if (!EightDigits.utils.getCookie('ed-paraf-notshown')) {
                      EightDigits.analytics.sendEvent(config.analytics, "NotShown");
                      EightDigits.utils.setCookie('ed-paraf-notshown', 'on')
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
  var _ed_Paraf_200_TL = new EightDigits.sf();
  _ed_Paraf_200_TL.Paraf_200_TL();
})();
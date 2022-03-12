(function () {
  EightDigits.sf.prototype.Last_Visited_Products_ProductPage = function () {

      var config = {
          scenarioname: "Last_Visited_Products_ProductPage",
          analytics: "Last_Visited_Products_ProductPage",
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
              if (randomVal < 100 * randomControlRatio) {
                  return true;
              } else {
                  return false;
              }

          },

          visitedProducts: {},
          productController: function () { // Check product
              var productLength = main.factory.prototype.visitedProducts["products"].length;


              if (productLength > 10) {  // if product number is bigger than five, last element will be removed.
                  main.factory.prototype.visitedProducts["products"].pop();

              }

              for (var i = 0; i < productLength; i++) {// testing whether it has been used before

                  if (typeof dataLayer[0].HotelID !== "undefined") {
                      if (dataLayer[0].HotelID == main.factory.prototype.visitedProducts["products"][i].sku) {
                          return false;
                      }

                  }


              }


          },
          addWidget: function () { // if page type is home
              var data = JSON.parse(EightDigits.utils.getCookie('ed-last-visitedProducts' + config.scenarioname));// parsing JSON list.

              if (EightDigits.utils.getCookie('ed-click_close' + config.scenarioname) === null && data.length >=  2 ) {
                 
                  if (data.length > 0) {

                      var css = '<style>\
                                     #ed-'+ config.scenarioname + '-main{position: fixed;right: 0px;top: 120px;width: 200px;margin-bottom: 20px;z-index: 99999;}\
                                     #ed-'+ config.scenarioname + '-header{font-weight: bold;font-size: 14px;background-color: #ED3833;color: white;text-align: center;width: 200px;  border-radius: 21px 0px 0px 21px;}\
                                     #ed-'+ config.scenarioname + '-header .header-text{width: 119px;margin-left: 55px;}\
                                     #ed-'+ config.scenarioname + '-header img{float: left; width:40px;}\
                                     #ed-'+ config.scenarioname + '-inner{width: 166px; float: right;background-color: white;height:350px; overflow:scroll;box-shadow: -4px 7px 11px #000000;}\
                                     .ed-'+ config.scenarioname + '-products{width:100%;  cursor:pointer;background-color: white; margin-top:12px;}\
                                     .ed-'+ config.scenarioname + '-image img{width:50%; margin-left:25%;}\
                                     .ed-'+ config.scenarioname + '-details{margin-top:6px;}\
                                     .ed-'+ config.scenarioname + '-details .ed-name{text-align: center;font-size: 12px;width: 100%;height: 17px;overflow: hidden;}\
                                     \
                                </style>'


                      var cssOpen = '<style>\
                                      #ed-'+ config.scenarioname + '-main_op{position: fixed;right: 0px;top: 120px;margin-bottom: 20px;z-index: 99999; width:530px;background-color: white;box-shadow: 0 0 18px #000000;display:none; }\
                                      #ed-'+ config.scenarioname + '-header_op{font-weight: bold; font-size: 15px; background-color: #ED3833;color: white;width: 100%; padding-left: 11px;line-height: 44px;height: 43px;}\
                                      #ed-'+ config.scenarioname + '-inner_op{width: 90%; background-color: white;justify-content: center; align-items:center; display:flex; margin-left:5%;}\
                                      .ed-'+ config.scenarioname + '-products_op{ cursor:pointer;margin-top:12px; width:150px;}\
                                      .ed-'+ config.scenarioname + '-image_op {height:120px;}\
                                      .ed-'+ config.scenarioname + '-image_op img{width:80% !important; margin-left:10%;border-radius:10px;}\
                                      .ed-'+ config.scenarioname + '-details_op{margin-top:6px;width: 80%;margin: 0 auto;text-align: center;}\
                                      .ed-'+ config.scenarioname + '-details_op .ed-name{ text-align: center; font-size: 12px;height: 51px;overflow: hidden;}\
                                      #ed-'+ config.scenarioname + '-left{position:absolute; z-index:9999; left:7px; top:118px;}\
                                      #ed-'+ config.scenarioname + '-right{position:absolute; z-index:9999; right:15px; top:118px;}\
                                      .ed-'+ config.scenarioname + '-details_op .ed-price{font-weight:bold; font-size:15px; color:#ED3833; margin-bottom:7px;}\
                                  </style>'
                      var htmlOpen = '<div id="ed-' + config.scenarioname + '-main_op">\
                                          <div id="ed-'+ config.scenarioname + '-header_op">Son Gezdikleriniz</div>\
                                          <div id="ed-'+ config.scenarioname + '-close" style="width:20px;height:20px;text-align:center;line-height: 17px;color: red;font-size: 17px;position: absolute;right: 54px;top: 11px;background-color: white;cursor:pointer;">x</div>\
                                           <div id="ed-'+ config.scenarioname + '-min" style="width:20px;height:20px;text-align:center;line-height: 9px;color: red;font-size: 17px;position: absolute;right: 29px;top: 11px;background-color: white;cursor:pointer;">_</div>\
                                           <div id="ed-'+ config.scenarioname + '-left"><img src="https://cdn.8digits.com/log/r/1a7334d3-ddb6-416a-92da-c5663681c54f.png"></img></div>\
                                           <div id="ed-'+ config.scenarioname + '-right"><img src="https://cdn.8digits.com/log/r/f7fd29ac-cd6e-4211-91e1-7641287f9b7b.png"></img></div>\
                                          <div id="ed-'+ config.scenarioname + '-inner_op"  class="owl-carousel owl-theme">'

                      var html = '<div id="ed-' + config.scenarioname + '-main" >\
                                         <div id="ed-'+ config.scenarioname + '-header"><img src="https://cdn.8digits.com/log/r/3e9fa155-700a-4219-84b7-453118d2591e.png"></img><div class="header-text">Son Gezdikleriniz</div></div>\
                                         <div id="ed-'+ config.scenarioname + '-inner">'


                      for (var i = 0; i < data.length; i++) {
                          html += ' <div class="ed-' + config.scenarioname + '-products">\
                                          \
                                         <div class="ed-'+ config.scenarioname + '-image"  data-url="' + data[i].url + '">\
                                             <img src="'+ data[i].img + '"></img>\
                                            \
                                         </div>\
                                         <div class="ed-'+ config.scenarioname + '-details"  data-url="' + data[i].url + '">\
                                             \
                                             <div class="ed-name"><span>'+ data[i].productName + '</span></div>\
                                         </div>\
                                 </div>'


                          htmlOpen += ' <div class="ed-' + config.scenarioname + '-products_op item">\
                              \
                             <div class="ed-'+ config.scenarioname + '-image_op"  data-url="' + data[i].url + '">\
                                 <img src="'+ data[i].img + '"></img>\
                                \
                             </div>\
                             <div class="ed-'+ config.scenarioname + '-details_op"  data-url="' + data[i].url + '">\
                                 \
                                 <div class="ed-name"><span>'+ data[i].productName + '</span></div>\
                                 <div class="ed-price"><span>'+ data[i].newPrice + '</span></div>\
                             </div>\
                     </div>'



                      }

                      html += '</div></div>'
                      htmlOpen += '</div></div>'






                  }
                  jQuery('head').append(css);
                  jQuery('body').prepend(html);

                  jQuery('head').append(cssOpen);
                  jQuery('body').prepend(htmlOpen);
                  jQuery('#ed-' + config.scenarioname + '-header').click(function () {
                      jQuery('#ed-' + config.scenarioname + '-main_op').css('display', 'block')
                      jQuery('#ed-' + config.scenarioname + '-main').css('display', 'none');
                  });

                  jQuery('#ed-' + config.scenarioname + '-close').click(function () {
                      EightDigits.analytics.sendEvent(config.analytics, 'Close_Click')
                      EightDigits.utils.setCookie('ed-click_close' + config.scenarioname, 'on', 60);
                      jQuery('#ed-' + config.scenarioname + '-main_op').remove();
                      jQuery('#ed-' + config.scenarioname + '-main').remove();
                  });
                  jQuery('#ed-' + config.scenarioname + '-min').click(function () {
                      jQuery('#ed-' + config.scenarioname + '-main_op').css('display', 'none')
                      jQuery('#ed-' + config.scenarioname + '-main').css('display', 'block');
                  });

                  jQuery('#ed-' + config.scenarioname + '-inner_op').owlCarousel({
                      loop: true,
                      nav: true,
                      navText: ["<", ">"],
                      autoplay: false,
                      responsive: {
                          0: {
                              items: 1
                          },
                          600: {
                              items: 2
                          },
                          1000: {
                              items: 3
                          }
                      }
                  });
                  var slider = jQuery('#ed-' + config.scenarioname + '-main_op .owl-carousel');

                  jQuery('#ed-' + config.scenarioname + '-main_op .owl-nav').remove();
                  jQuery('#ed-' + config.scenarioname + '-main_op .owl-dots').remove();
                  jQuery('#ed-' + config.scenarioname + '-left').click(function () {
                      slider.trigger('prev.owl.carousel');
                  });
                  jQuery('#ed-' + config.scenarioname + '-right').click(function () {
                      slider.trigger('next.owl.carousel');
                  });


                  EightDigits.analytics.sendEvent(config.analytics, 'Shown');

                  jQuery('.ed-' + config.scenarioname + '-details').click(function () {
                      EightDigits.analytics.sendEvent(config.analytics, 'Click')
                      window.location.href = jQuery(this).attr('data-url');

                  });
                  jQuery('.ed-' + config.scenarioname + '-details_op').click(function () {
                      EightDigits.analytics.sendEvent(config.analytics, 'Click')
                      window.location.href = jQuery(this).attr('data-url');

                  });

                  jQuery('.ed-' + config.scenarioname + '-image_op').click(function () {
                      EightDigits.analytics.sendEvent(config.analytics, 'Click')
                      window.location.href = jQuery(this).attr('data-url');

                  });


              }

          },
          pageTypes: {
              product: function () { // if page type is product

                  var seenProduct = {};
                  if (EightDigits.utils.getCookie('ed-last-visitedProducts' + config.scenarioname) == null) {
                      main.factory.prototype.visitedProducts["products"] = []
                  }
                  else {
                      main.factory.prototype.visitedProducts["products"] = JSON.parse(EightDigits.utils.getCookie('ed-last-visitedProducts' + config.scenarioname));
                     

                  }


                  if (main.factory.prototype.productController() == false) {

                      return false;
                  }

                  var x = setInterval(function () {

                      try {
                          //   jQuery('.slides .slider-img-wrapper:eq(1) img').attr('src')
                          if (typeof dataLayer[0].HotelID !== "undefined") {  // Otel Detay Sayfası
                              if (jQuery('.flex-active img').attr('src').indexOf('https://cdnturint.touristica.com.tr') > -1 || jQuery('.flex-active img').attr('src').indexOf('youtube') > -1) {
                                  seenProduct["type"] = "Hotel";
                                  seenProduct["sku"] = dataLayer[0].HotelID; // product id
                                  seenProduct["productName"] = dataLayer[0].HotelName;
                                  seenProduct["newPrice"] = jQuery('.current-price:eq(0)').text(); //discount price
                                  seenProduct["location"] = jQuery('.hotel-location').text().split('Harita')[0].trim(); //location
                                  if (jQuery('.flex-active img').attr('src').indexOf('youtube') > -1) {

                                      seenProduct["img"] = jQuery('.slides .slider-img-wrapper:eq(1) img').attr('src'); //image link
                                  }
                                  else {
                                      seenProduct["img"] = jQuery('.flex-active img').attr('src'); //image link
                                  }


                                  seenProduct["url"] = window.location.href;// product details link
                                  main.factory.prototype.visitedProducts["products"].unshift(seenProduct);// adding first place of JSON list.
                                  EightDigits.utils.setCookie('ed-last-visitedProducts' + config.scenarioname, JSON.stringify(main.factory.prototype.visitedProducts["products"])); // saving JSON list on a cookie.
                                  clearInterval(x);
                              }

                          }
                          else if (typeof dataLayer[0].TripID !== "undefined") { //Tur Detay Sayfası
                              if (jQuery('.flex-active-slide:eq(1) img').attr('src').indexOf('https://cdnturint.touristica.com.tr') > -1) {
                                  seenProduct["type"] = "Trip";
                                  seenProduct["sku"] = dataLayer[0].TripID; // product id
                                  seenProduct["productName"] = dataLayer[0].TripName;
                                  if(jQuery('.slider-tour-price.hidden-xs').text().split('\'da')[0].trim().split('\'den itibaren')[0]!==""){
                                      seenProduct["newPrice"] = jQuery('.slider-tour-price.hidden-xs').text().split('\'da')[0].trim().split('\'den itibaren')[0]; //discount price
                                  }
                                  else{
                                      seenProduct["newPrice"] = jQuery('.tour-new-price').text();
                                  }
                                  
                                  seenProduct["location"] = dataLayer[0].TripRegion; //location
                                  seenProduct["img"] = jQuery('.flex-active-slide:eq(1) img').attr('src');  //image link
                                  seenProduct["url"] = window.location.href;// product details link
                                  main.factory.prototype.visitedProducts["products"].unshift(seenProduct);// adding first place of JSON list.
                                  EightDigits.utils.setCookie('ed-last-visitedProducts' + config.scenarioname, JSON.stringify(main.factory.prototype.visitedProducts["products"])); // saving JSON list on a cookie.
                                  clearInterval(x);
                              }


                          }
                      }
                      catch (ex) {
                          console.log(ex);
                      }



                  }, 1000)









              },
          },
          start: function () {
              var css1 = '<link rel="stylesheet" href="//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.css" >'
              var css2 = '<link rel="stylesheet" href="//cdn.8digits.com/owl/v2.1.1/owl.theme.default.min.css" >'

              jQuery('head').append(css1);
              jQuery('head').append(css2);
              var wa = document.createElement('script');
              wa.type = 'text/javascript';
              wa.async = true;
              wa.src = '//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(wa, s);
              // decision of page type


              if (EightDigits.dataLayer.data.pageType === "product") return main.factory.prototype.pageTypes.product();
              else if(EightDigits.dataLayer.data.pageType === "home") return main.factory.prototype.addWidget();


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
  var _ed_Last_Visited_Products_ProductPage = new EightDigits.sf();
  _ed_Last_Visited_Products_ProductPage.Last_Visited_Products_ProductPage();
})();

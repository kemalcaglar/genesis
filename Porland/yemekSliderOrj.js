            var css1 =
              "<link rel=\"stylesheet\" href=\"//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.css\" >";
            var css2 =
              "<link rel=\"stylesheet\" href=\"//cdn.8digits.com/owl/v2.1.1/owl.theme.default.min.css\" >";
  
            jQuery("head").append(css1);
            jQuery("head").append(css2);
            var wa = document.createElement("script");
            wa.type = "text/javascript";
            wa.async = true;
            wa.src = "//cdn.8digits.com/owl/v2.1.1/owl.carousel.min.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(wa, s);
  
            var owlInterval = setInterval(() => {
              if (typeof jQuery("").owlCarousel !== "undefined") {
                clearInterval(owlInterval);
                var kampanyaPopulerUrun = {
                  yemek: [
                    {
                      name: "Porland Copper Line 60 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/copper-line-60-parca-12-kisilik-yemek-takimi_104822?d=9605_104822",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637075056803397018.jpg?q=80",
                      discountRadio: "%45",
                      price: "6.630,00 TL",
                      discountPrice: "3.646,50 TL"
                    },
                    {
                      name: "Porland Christina Alumilite Yemek Takımı 3 Parça",
                      href:
                        "https://www.porland.com/christina-alumilite-yemek-takimi-3-parca_104050?d=10085_104050",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/636997393479049719.jpg?q=80",
                      discountRadio: "%45",
                      price: "304,99 TL",
                      discountPrice: "167,74 TL"
                    },
                    {
                      name: "Porland Chopin Altın Yaldız 60 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/altin-yaldiz-60-parca-12-kisilik-yemek-takimi_106507?d=10085_106507",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637460588043827123.jpg?q=80",
                      discountRadio: "%42",
                      price: "6.029,00 TL",
                      discountPrice: "3.519,00 TL"
                    },
                    {
                      name: "Porland Palms 60 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/palms-60-parca-12-kisilik-yemek-takimi_105904?d=10337_105904",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637474257959437517.jpg?q=80",
                      discountRadio: "40%",
                      price: "6.935,00 TL",
                      discountPrice: "4.150,00 TL"
                    },
  
                    {
                      name: "Porland Africa 60 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/africa-60-parca-12-kisilik-yemek-takimi_105894?d=10379_105894",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637309273618615358.jpg?q=80",
                      discountRadio: "%45",
                      price: "7.034,99 TL",
                      discountPrice: "3.869,24 TL"
                    },
                    {
                      name: "Porland Mahpeyker 85 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/mahpeyker-85-parca-12-kisilik-yemek-takimi_88145?d=9103_88145",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637333556539077680.jpg?q=80",
                      discountRadio: "%50",
                      price: "8.138,00 TL",
                      discountPrice: "4.069,00 TL"
                    },
                    {
                      name: "Porland Ege 32 Parça 6 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/ege-32-parca-6-kisilik-yemek-takimi_105492?d=10085_105492",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637333557322208308.jpg?q=80",
                      discountRadio: "%59",
                      price: "1.291,25 TL",
                      discountPrice: "529,00 TL"
                    },
                    {
                      name: "Porland Paola 24 Parça 6 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/paola-24-parca-6-kisilik-yemek-takimi_106603?d=10085_106603",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637480397128102562.jpg?q=80",
                      discountRadio: "%59",
                      price: "828,97 TL",
                      discountPrice: "340,00 TL"
                    },
                    {
                      name: "Porland Seal 60 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/seal-60-parca12-kisilik-yemek-takimi_106564?d=10085_106564",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637471853758920413.jpg?q=80",
                      discountRadio: "%42",
                      price: "6.030,00 TL",
                      discountPrice: "3.520,00 TL"
                    },
                    {
                      name: "Porland Riva Altın Yaldız 57 Parça 12 Kişilik Yemek Takımı",
                      href:
                        "https://www.porland.com/altin-yaldiz-57-parca-12-kisilik-yemek-takimi_105918?d=10085_105918",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637407904229099969.jpg?q=80",
                      discountRadio: "%56",
                      price: "4.035,22 TL",
                      discountPrice: "1.777,50 TL"
                    }
                  ],
                  kahvalti: [
                    {
                      name: "Porland Morocco 18 Parça 6 Kişilik İkram ve Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/morocco-18-parca-6-kisilik-ikram-ve-kahvalti-takimi_105665",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637305317205633678.jpg?q=80",
                      discountRadio: "%42",
                      price: "1.650,01 TL",
                      discountPrice: "950,00 TL"
                    },
                    {
                      name: "Porland Vignetta 18 Parça 6 Kişilik İkram&Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/vignetta-18-parca-6-kisilik-ikramkahvalti-takimi_106438",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637481187565368911.jpg?q=80",
                      discountRadio: "%52",
                      price: "808,01 TL",
                      discountPrice: "390,00 TL"
                    },
                    {
                      name: "Porland Kaktüs 36 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/kaktus-36-parca-6-kisilik-kahvalti-takimi_104296",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637006861795381602.jpg?q=80",
                      discountRadio: "%50",
                      price: "955,85 TL",
                      discountPrice: "477,92 TL"
                    },
                    {
                      name: "Porland Starfish 36 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/starfish-36-parca-6-kisilik-kahvalti-takimi_104299",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637006861854132677.jpg?q=80",
                      discountRadio: "%50",
                      price: "955,85 TL",
                      discountPrice: "477,92 TL"
                    },
                    {
                      name: "Porland Blossom 30 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/blossom-30-parca-6-kisilik-kahvalti-takimi_106918?d=10086_106918",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637531644387673969.jpg?q=80",
                      discountRadio: "%50",
                      price: "1.040,19 TL",
                      discountPrice: "520,10 TL"
  
                    },
                    {
                      name: "Porland Green Days 30 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/porland-green-days-30-parca-6-kisilik-kahvalti-takimi_107099?d=10086_107099",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637592698104035112.jpg?q=80",
                      discountRadio: "%57",
                      price: "1.224,13 TL",
                      discountPrice: "525,50 TL"
                    },
                    {
                      name: "Porland Vervain 36 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/vervain-36-parca-6-kisilik-kahvalti-takimi_105929?d=10086_105929",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637332705091705930.jpg?q=80",
                      discountRadio: "%50",
                      price: "955,85 TL",
                      discountPrice: "477,92 TL"
                    },
                    {
                      name: "Porland Creeper 36 Parça 6 Kişilik Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/creeper-36-parca-6-kisilik-kahvalti-takimi_104297?d=10084_104297",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637006861841163468.jpg?q=80",
                      discountRadio: "%50",
                      price: "955,85 TL",
                      discountPrice: "477,92 TL"
                    },
                    {
                      name: "Porland Cosmos Karışık Renk 18 Parça İkram&Kahvaltı Takımı",
                      href:
                        "https://www.porland.com/cosmos-karisik-renk-18-parca-ikramkahvalti-takimi_105498",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637110708201591459.jpg?q=80",
                      discountRadio: "%45",
                      price: "1.775,00 TL",
                      discountPrice: "976,25 TL"
                    },
                    {
                      name: "Porland Yaprak Beyaz İkram&Kahvaltı Takımı 36 Parça",
                      href:
                        "https://www.porland.com/yaprak-beyaz-ikramkahvalti-takimi-36-parca_99565?d=9103_99565",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637477714626606444.jpg?q=80",
                      discountRadio: "%63",
                      price: "2.009,78 TL",
                      discountPrice: "748,00 TL"
  
                    }
                  ],
                  tabaklar: [
                    {
                      name: "Porland Forest Düz Tabak 28cm",
                      href:
                        "https://www.porland.com/forest-duz-tabak-28cm_92094",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637418956220924475.jpg?q=80",
                      discountRadio: "%56",
                      price: "149,77 TL",
                      discountPrice: "66,00 TL"
                    },
                    {
                      name: "Porland Hope Kayık Tabak 31cm",
                      href:
                        "https://www.porland.com/hope-kayik-tabak-31cm_85308?d=10236_85308",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637418956190153058.jpg?q=80",
                      discountRadio: "%50",
                      price: "114,60 TL",
                      discountPrice: "57,30 TL"
                    },
                    {
                      name: "Porland Botanical Düz Tabak 27cm",
                      href:
                        "https://www.porland.com/botanical-duz-tabak-27cm_102745?d=10304_102745",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/636948309004580141.jpg?q=80",
                      discountRadio: "%42",
                      price: "212,00 TL",
                      discountPrice: "123,00 TL"
                    },
                    {
                      name: "Porland Cosmos Desen7 Düz Tabak 20cm",
                      href:
                        "https://www.porland.com/cosmos-desen7-duz-tabak-20cm_95128?d=10087_95128",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/04ALM003418-cosmos-desen7-duz-tabak-20cm-636588659209188787.jpg?q=80",
                      discountRadio: "%45",
                      price: "84,50 TL",
                      discountPrice: "46,48 TL"
                    },
                    {
                      name: "Porland Palms Çukur Tabak 20cm",
                      href:
                        "https://www.porland.com/palms-cukur-tabak-20cm_105859?d=10337_105859",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637299007483219575.jpg?q=80",
                      discountRadio: "%42",
                      price: "129,71 TL",
                      discountPrice: "75,00 TL"
                    },
                    {
                      name: "Porland Morocco Desen1 Yeşil Düz Tabak 28cm",
                      href:
                        "https://www.porland.com/porland-morocco-desen1-yesil-duz-tabak-28cm_81331",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/635531149549697161.jpg?q=80",
                      discountRadio: "%32",
                      price: "145,00 TL",
                      discountPrice: "98,50 TL"
                    },
                    {
                      name: "Porland Marin Blue Kayık Tabak 24cm",
                      href:
                        "https://www.porland.com/marin-blue-kayik-tabak-24cm_104291?d=10087_104291",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/636997481212805149.jpg?q=80",
                      discountRadio: "%50",
                      price: "61,50 TL",
                      discountPrice: "30,75 TL"
                    },
                    {
                      name: "Porland Morocco Desen4 Sarı Çukur Tabak 20cm",
                      href:
                        "https://www.porland.com/morocco-desen4-sari-cukur-tabak-19cm_105582?d=9109_105582",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637130343409693553.jpg?q=80",
                      discountRadio: "%38",
                      price: "99,50 TL",
                      discountPrice: "61,50 TL"
                    },
                    {
                      name: "Porland Glamorous Pembe Düz Tabak 24cm",
                      href:
                        "https://www.porland.com/glamorous-pembe-duz-tabak-24cm_106446?d=10087_106446",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637444842953270741.jpg?q=80",
                      discountRadio: "%40",
                      price: "111,25 TL",
                      discountPrice: "66,50 TL"
                    },
                    {
                      name: "Porland Botanical Desen4 Düz Tabak 21cm",
                      href:
                        "https://www.porland.com/botanical-desen4-duz-tabak-21cm_102744?d=10304_102744",
                      src:
                        "https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/636948308992548476.jpg?q=80",
                      discountRadio: "%42",
                      price: "148,00 TL",
                      discountPrice: "86,50 TL"
                    }
                  ]
                };
  
                //   owl-carousel  owl-theme
  
                var sliderCategoryName = "";
  
                if (window.location.href.indexOf("tabaklar-ve-servisler/yemek-takimlari") > -1) {
                  sliderCategoryName = "yemek";
                } else if (window.location.href.indexOf("/tabaklar-ve-servisler/kahvalti-takimlari") > -1) {
                  sliderCategoryName = "kahvalti";
  
                } else if (window.location.href.indexOf("/tabaklar-ve-servisler/tabaklar") > -1) {
                  sliderCategoryName = "tabaklar";
  
                }
                var kampanyaPopulerUrunHTML = "\
          <div class=\"smpl-slider-container text-center col-12 col-lg-10 offset-lg-1\" style=\"padding-top:30px;z-index: 0;display:flex;flex-direction:column;justify-content:center;position:relative;margin-bottom:30px;\">\
          <div class=\"section-title\" style=\"text-align:center;margin-bottom:0px;\" >\
              <h2>Sizin İçin Seçtiklerimiz</h2>\
          </div>\
          <div class=\"product-area w-100\" id=\"smpl-product-area\" style=\"top:10px;margin:0 auto;position:relative;\">\
          <div id=\"ed-right_\" style=\"cursor:pointer;z-index:99;position: absolute;top:72.25px;right:-40px;width:40px;height:40px;font-size:24px;border:none;background-color:white;display:flex;justify-content:center;align-items:center;\"><span style=\"color:black;\" >›</span></div>\
          <div id=\"ed-left_\" style=\"left: -26px;cursor:pointer;z-index:99;position: absolute;top:72.25px;left:-40px;width:40px;height:40px;font-size:24px;border:none;background-color:white;display:flex;justify-content:center;align-items:center;\"><span style=\"color:black;\" >‹</span></div>\
          <ul  class=\"populer-carousel owl-carousel  owl-theme\">";
                kampanyaPopulerUrun[sliderCategoryName].map((product, index) => {
                  kampanyaPopulerUrunHTML +=
                    "<li style=\"padding:15px;position:relative;\">\
            <div class=\"p-item\" >\
            <div class=\"position-absolute badge discount-ratio double\" >\
                <span class=\"badge-text\">" + product.discountRadio + "</span>\
          </div>\
          ";
                  if (Number(product.discountPrice.split("TL")[0].trim().replace(".", "").replace(",", ".")) > 200) {
                    kampanyaPopulerUrunHTML += "\
                  <div style=\"top:" + (jQuery(".p-item picture img:eq(0)").height() + 23.5) + "px;position:absolute;left:0px;display:flex;justify-content:center;align-items:center;width:100%;\"><div class=\"badge new-badge kargo-badge smpl-kargo-badge\" style=\"font-family: firasemibold,sans-serif;font-weight:400;padding:5px;color:#fff;background-color:#fe9a1a;\">Kargo Bedava </div></div>\
                  ";
                  }
                  kampanyaPopulerUrunHTML += "<a class=\"smpl-kampanya_btn\" href=\"" + product.href + "\" title=\"" + product.name + "\"><img class=\"fade-up lazyloaded smpl-slider-image\" alt=\"" + product.name + "\" src=\"" + product.src + "\" style=\"display: block;width:100%;object-fit: contain;\">\
              </a>\
                  <a style=\" line-height: 30px;display:block;padding-top:30px; font-size: 18px; max-height: 120px; min-height: 60px; color: #2b2b2b;  font-family: firasemibold,sans-serif;\" class=\"smpl-kampanya_btn\" href=\"" + product.href + "\" title=\"" + product.name + "\">" + product.name + "</a>\
                  <div class=\"d-flex align-items-center justify-content-center p-price flex-wrap\">\
              <span class=\"old-price\" style=\"font-size: 15px;margin-left:5px;margin-right:5px;color: grey;font-family: firaitalic,sans-serif;text-decoration: line-through;\">" + product.price + "</span>\
              <span class=\"new-price\" style=\"font-weight:bold;font-size: 15px;margin-left:5px;margin-right:5px;color: #f40b37;font-family: firaitalic,sans-serif;\">" + product.discountPrice + "</span>\
      </div>\
          </div>\
          </li>";
                  // height:' + jQuery(".p-item picture img:eq(0)").height() +'px
                });
                kampanyaPopulerUrunHTML += "\
          </ul>\
          </div>\
          </div>";
                // jQuery('.product-list').prepend(kampanyaPopulerUrunHTML);
                jQuery("#navigation").after(kampanyaPopulerUrunHTML);
                if (window.innerWidth < 767) {
                  jQuery(".smpl-slider-container").css({
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "padding-top": "10px"
                  });
                  jQuery(".smpl-slider-container .discount-ratio").css({"top": "18px", "left": "5px"});
  
                }
                jQuery(".populer-carousel").owlCarousel({
                  loop: true,
                  nav: true,
                  navText: ["<", ">"],
                  // items:window.innerWidth>767 ? 3 : 2,
                  responsiveClass: true,
                  responsive: {
                    0: {
                      items: 2,
                      slideBy: 2
                    },
                    600: {
                      items: 2,
                      slideBy: 2
                    },
                    1000: {
                      items: 3,
                      slideBy: 3
                    },
                    1200: {
                      items: 4,
                      slideBy: 4
                    },
                    1500: {
                      items: 5,
                      slideBy: 5
                    },
                    1800: {
                      items: 6,
                      slideBy: 6
                    }
                    ,
                    2100: {
                      items: 7,
                      slideBy: 7
                    }
                    ,
                    2400: {
                      items: 8,
                      slideBy: 8
                    }
                    ,
                    2700: {
                      items: 9,
                      slideBy: 9
                    }
                  },
                  dots: false,
                  autoplay: true,
                  autoplayTimeout: 5000
                  // slideBy:window.innerWidth>767 ? 4 : 2,
                });
                jQuery("#smpl-product-area .owl-next").addClass("smpl-owl-next");
                jQuery("#smpl-product-area .owl-prev").addClass("smpl-owl-prev");
                var sliderInterval = setInterval(function () {
                  if (jQuery(".smpl-slider-image:eq(0)").height() > 0) {
                    clearInterval(sliderInterval);
                    jQuery(".smpl-slider-image").css("height", jQuery(".smpl-slider-image:eq(0)").height() + "px");
                    jQuery(".smpl-kargo-badge").parent().css("top", (jQuery(".smpl-slider-image:eq(0)").height() + 23.5) + "px");
  
                    if (window.innerWidth > 767) {
                      jQuery("#ed-right_").css({
                        top: (jQuery(".owl-item img:eq(2)").height() - 20) / 2 + "px"
                      });
                      jQuery("#ed-left_").css({
                        top: (jQuery(".owl-item img:eq(2)").height() - 20) / 2 + "px"
                      });
                    } else {
                      jQuery("#ed-right_").css({
                        width: "30px",
                        height: "30px",
                        top: jQuery(".owl-item img:eq(2)").height() / 2 + "px",
                        right: "0px"
                      });
                      jQuery("#ed-left_").css({
                        width: "30px",
                        height: "30px",
                        top: jQuery(".owl-item img:eq(2)").height() / 2 + "px",
                        left: "0px"
                      });
                    }
                  }
                }, 50);
                jQuery(".populer-carousel li")
                  .mouseenter(function () {
                    jQuery(this).css({
                      "border-color": "#e3eaf2",
                      "box-shadow":
                        "1px 1px 10px rgb(0 0 0 / 30%), -1px -1px 10px rgb(0 0 0 / 30%)"
                    });
                  })
                  .mouseleave(function () {
                    jQuery(this).css({"border-color": "none", "box-shadow": "unset"});
                  });
                jQuery("#ed-right_").click(function () {
                  jQuery(".smpl-owl-next").click();
                });
                jQuery("#ed-left_").click(function () {
                  jQuery(".smpl-owl-prev").click();
                });
                jQuery(".owl-nav").css("display", "none");
                setLevel(LEVEL_JOIN, "Shown_" + sliderCategoryName);
  
                if (window.innerWidth > 1100) {
                  jQuery(".smpl-kampanya_btn").css("max-height", "120px");
                } else {
                  if (window.innerWidth < 767) {
                    jQuery(".smpl-kampanya_btn").css({
                      "line-height": "16px",
                      "font-size": "14px"
                    });
                    jQuery(".populer-carousel")
                      .find(".old-price")
                      .css({
                        "font-size": "12px",
                        "margin-left": "0px",
                        "margin-right": "0px"
                      });
                    jQuery(".populer-carousel")
                      .find(".new-price")
                      .css({"font-size": "12px", "margin-right": "0px"});
                  }
                  jQuery(".smpl-kampanya_btn").css("max-height", "130px");
                }
                jQuery(window).resize(function () {
                  if (window.innerWidth > 1100) {
                    jQuery(".smpl-kampanya_btn").css("max-height", "120px");
                  } else {
                    jQuery(".smpl-kampanya_btn").css("max-height", "130px");
                  }
                });
  
                jQuery(".smpl-kampanya_btn").click(function () {
  
                  setLevel(LEVEL_JOIN, "Click_" + sliderCategoryName + "_" + jQuery(this).attr("title"));
                });
              }
            }, 100);
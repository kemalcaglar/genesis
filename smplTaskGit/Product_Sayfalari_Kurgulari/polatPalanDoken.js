(function () {
  const scenarioName = "Palan_Doken";
  if (EightDigits.sf.prototype.hasOwnProperty(scenarioName)) {
    return false;
  }
  EightDigits.sf.prototype[scenarioName] = function () {
    let config = {
      scenarioname: scenarioName,
      analytics: scenarioName,
      controlgroup: 0,
    };
    let main = {
      factory: function () {
        return true;
      },
    };
    main.factory.prototype = {
      random: function () {
        let randomVal = 0;
        let randomControlRatio =
          config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      fireEvent: function (eventName, withCookie) {
        const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
        if (withCookie === true) {
          if (!EightDigits.utils.getCookie(`ed-${config.analytics}${eventName}_${device}`)) {
            EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
            EightDigits.utils.setCookie(`ed-${config.analytics}${eventName}_${device}`, "on");
          }
        } else {
          EightDigits.analytics.sendEvent(config.analytics, `${eventName}_${device}`);
        }
      },
      style: function () {
        let css = `<style>
        .smpl_${config.scenarioname}_slider {
          width: 98%;
          margin: auto;
          margin-bottom: 7px;
        }

        .smpl_${config.scenarioname}_slider .owl-carousel{
          margin: unset;
          display: flex;
          justify-content: center;
        }

        .smpl_${config.scenarioname}_slider .owl-carousel .owl-item{
          height: unset;
        }

        .smpl_${config.scenarioname}_slider .banner img{
          border-radius: 5px;
          cursor: pointer;
        }

        .smpl_${config.scenarioname}_slider .banner{
          position: relative;
        }

        .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-arrow {
          display: none;
          background: #555;
          width: 20px;
          height: 20px;
          content: '';
          position: absolute;
          top: 55px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          left: 260px;
          z-index: 1;
          border-radius: 3px;
        }
        
        .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-tooltip {
          display: none;
          background: #555;
          position: absolute;
          z-index: 2;
          color: #fff;
          font-size: 12px;
          border-radius: 6px;
          padding: 6px;
          width: 300px;
          top: 14px;
          left: 270px;
          line-height: 15px;
          @media only screen and (max-width: 700px) {
          
          }
        }

        .smpl_${config.scenarioname}_slider .owl-dots{
          position: absolute;
          bottom: 0;
        }
        
        .smpl_${config.scenarioname}_slider:hover .smpl-${config.scenarioname}-tooltip,
        .smpl_${config.scenarioname}_slider:hover .smpl-${config.scenarioname}-arrow {
          display: block;
        }

        .owl-theme .owl-dots .owl-dot{
          outline: none;
        }

        .owl-prev{
          left: -1px;
          position: absolute;
          font-size: 20px !important;
          top: 50px;
          color: white !important;
          outline: none !important;
        }

        .owl-next{
          right: -1px;
          position: absolute;
          font-size: 20px !important;
          top: 50px;
          color: white !important;
          outline: none !important;
        }
        @media only screen and (max-width: 700px) {
          .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-arrow {
            top: 50px;
            right: 190px;
            left: auto;
          }
          .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-tooltip {
            font-size: 10px;
            width: 200px;
            top: 0;
            bottom: 0;
            right: 0;
            left: auto;
            line-height: 15px;
          }
        }
        @media only screen and (max-width: 320px) {
          .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-arrow {
            top: 40px;
            left: 85px;
          }
          .smpl_${config.scenarioname}_slider .smpl-${config.scenarioname}-tooltip {
            font-size: 10px;
            width: 200px;
            top: 0;
            bottom: 0;
            right: 0;
            left: 95px;
            line-height: 12px;
          }
        }
        </style>
        `;
        jQuery("head").append(css);
      },
      start: function () {
        setTimeout(() => {
          jQuery(".smpl-Skipass_Banner").remove();
        }, 1000);
        function addOwlCarousel() {
          const owlCarousel =
            "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css\">";
          const owlTheme =
            "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css\" >";
          const owlJS =
            `<script 
                src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
                integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" 
                crossorigin="anonymous" 
                referrerpolicy="no-referrer">
              </script>`;
          jQuery("head").append(owlCarousel, owlTheme, owlJS);
        }
        addOwlCarousel();
        let imageSkypass, imageOtel = "";
        if (window.innerWidth > 768) {
          imageSkypass = "https://cdn.hellosmpl.com/uploads/2021/10/07/q2pp7rv0rgfvgmdblgu1bf6nf6.jpg";
          imageOtel = "https://cdn.8digits.com/log/r/fa201e84-ecd0-41aa-ab8a-446e00fb6a02.jpeg";
        } else {
          imageSkypass = "https://cdn.hellosmpl.com/uploads/2021/10/07/pl3anoplrh2bedseq05ekc3vn3.jpg";
          imageOtel = "https://cdn.8digits.com/log/r/315b03df-b327-432d-8262-28830860781c.jpeg";
        }
        let imageList = [imageSkypass, imageOtel];
        function addSlider() {
          let html = `
                <div class="smpl_${config.scenarioname}_slider">
                    <div class="owl-theme owl-carousel">`;
          for (let image of imageList) {
            let product = `
                  <div class="banner">
                    <img src="${image}">
                  </div>`;
            html += product;
          }
          html += `</div></div>`;
          let owlInterval = setInterval(() => {
            if (typeof jQuery("").owlCarousel !== "undefined") {
              clearInterval(owlInterval);
              jQuery("#scroll-to-innersearch").after(html);
              main.factory.prototype.fireEvent("shown", true);
              jQuery(`.smpl_${config.scenarioname}_slider .owl-carousel`).owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
              });
            }
          }, 300);
        }
        addSlider();
        setTimeout(() => {
          jQuery(`.owl-item img`).on("click", function (e) {
            if (jQuery(this).attr("src") === "https://cdn.8digits.com/log/r/fa201e84-ecd0-41aa-ab8a-446e00fb6a02.jpeg"
              || jQuery(this).attr("src") === "https://cdn.8digits.com/log/r/315b03df-b327-432d-8262-28830860781c.jpeg") {
              jQuery(".hoteldetail-content-tab-title a").removeClass("active show");
              jQuery("#tab-1-content").removeClass("active show");
              jQuery("#tab-3-content").removeClass("active show");
              jQuery("#tab-2-content").addClass("active show");
              jQuery("#tab-2-content-button").addClass("active show");
              jQuery("#feature-0").addClass("none");
              jQuery("#announcement-2").removeClass("none");
              if (window.innerWidth > 768) {
                jQuery('html, body').animate({
                  scrollTop: 1600
                }, 2000);
              } else {
                jQuery('html, body').animate({
                  scrollTop: 1900
                }, 2000);
              }
              main.factory.prototype.fireEvent("click-Ozel-Oda", true);
            }
          });
          jQuery(".owl-item img").each(function (index, element) {
            if (jQuery(this).attr("src") === "https://cdn.hellosmpl.com/uploads/2021/10/07/q2pp7rv0rgfvgmdblgu1bf6nf6.jpg"
              || jQuery(this).attr("src") === "https://cdn.hellosmpl.com/uploads/2021/10/07/pl3anoplrh2bedseq05ekc3vn3.jpg") {
              let tooltipHtml = `
                    <div class="smpl-${config.scenarioname}-arrow"></div>
                    <div class="smpl-${config.scenarioname}-tooltip">Min. 3 gece ve üzeri konaklamalarda havalimanı-otel ve otel-havalimanı transferi konaklama ücretine dahildir.Misafirlerin kampanyadan yararlanabilmek için uçuş bilgilerini, uçuştan 48 saat önce tursatis@setur.com.tr e-posta adresine göndermeleri gerekmektedir.</div>`;
              jQuery(this).parent(".banner").append(tooltipHtml);
            }
          });
        }, 500);
        main.factory.prototype.style();
      },
      control: function () {
        let breadcrumb = jQuery(".breadcrumb li:last").text().trim();
        if (breadcrumb === "Polat Palandöken") {
          return true;
        } else {
          return false;
        }
      },
      init: function () {
        if (main.factory.prototype.control() === false) {
          return false;
        }
        let _exec = main.factory.prototype.random();
        if (!_exec) {
          main.factory.prototype.fireEvent("NotShown", true);
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
  let ed = {};
  ed["_ed_" + scenarioName] = new EightDigits.sf();
  ed["_ed_" + scenarioName][scenarioName]();
})();

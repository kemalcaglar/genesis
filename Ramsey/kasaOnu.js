var XMLData,
    html,
    isDataHere;
var scenarioClass = ".scenario-" + scenarioId + "-" + variationId;
var scenarioName = "scenario-" + scenarioId + "-" + variationId;
var smpl = {
    setCookie: function (cname, cvalue, min) {
        var d = new Date();
        d.setTime(d.getTime() + min * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    fireEvent: function (eventName) {
        var width = window.innerWidth;
        if (smpl.getCookie("smpl_" + scenarioName + "_" + eventName) !== "on") {
            if (width < 992) {
                setLevel(LEVEL_JOIN, eventName + "Mobil");
            } else {
                setLevel(LEVEL_JOIN, eventName + "Desktop");
            }
            smpl.setCookie("smpl_" + scenarioName + "_" + eventName, "on");
        }
    }
};
var sliderTitle = "Son Fırsatlar";

var dataController = function () {
    var getData = function (data) {
        let products = jQuery(data).contents().find(".ProductList .Prd");
        let itemList = [];
        products.each(function (index, product) {
            jQuery(product).removeClass("col-xs-12 col-sm-12 col-md-12");
            jQuery(product).find(".PriceArea>div").after(jQuery(product).find(".PriceArea>div>span")).remove();
            itemList.push(product);
        });
        XMLData = itemList;
    };
    var runAjax = function () {
        jQuery.ajax({
            type: "GET",
            url: "https://www.ramsey.com.tr/kampanyalar/firsat-urunleri/#o=6&g=2&ct=559&u=48",
            success: function (response) {
                getData(response);
            }
        });
    };
    runAjax();
};
var displayHtml = function () {
    html =
        "<div class=\"" + scenarioName + "\">\
                <div class=\"section-title\">\
                    <h1>" +
        sliderTitle +
        "</h1>\
            </div>\
              <div id=\"smpl-right\" type=\"button\">\
                <span>\
                  <img src=\"https://cdn.hellosmpl.com/uploads/2021/01/11/hp7mlfo4pu3q4kpj2q0kcq9nio.png\">\
                </span>\
              </div>\
              <div id=\"smpl-left\" type=\"button\">\
                <span>\
                  <img src=\"https://cdn.hellosmpl.com/uploads/2021/01/11/fg4bjl7hmnkklfiodot5lrosdj.png\">\
                </span>\
              </div>\
            <div class=\"son-firsatlar-slider\" id=\"smpl-slider\"></div></div>";
};

function startSmpl() {
    dataController();
    isDataHere = setInterval(() => {
        if (XMLData) {
            clearInterval(isDataHere);
            displayHtml(XMLData);
            var htmlObject = document.createElement("div");
            var isClickedArrow = false;

            htmlObject.innerHTML = html;
            jQuery("#NextBackButtons")[0].before(htmlObject);
            jQuery(XMLData).each(function (index, item) {
                jQuery(".son-firsatlar-slider#smpl-slider").append(item);
            });
            jQuery("#smpl-slider").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                navText: ["<", ">"],
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
            jQuery("#smpl-slider .owl-next").addClass("smpl-slider-owl-next");
            jQuery("#smpl-slider .owl-prev").addClass("smpl-slider-owl-prev");
            jQuery("#smpl-right").click(function () {
                jQuery(".smpl-slider-owl-next").click();
                if (!isClickedArrow) {
                    smpl.fireEvent("click-arrow");
                }
                isClickedArrow = true;
            });
            jQuery("#smpl-left").click(function () {
                jQuery(".smpl-slider-owl-prev").click();
                if (!isClickedArrow) {
                    smpl.fireEvent("click-arrow");
                }
                isClickedArrow = true;
            });
            jQuery("#" + scenarioName + " .Prd").click(function () {
                smpl.fireEvent("click-product");
            });

            jQuery(".owl-nav").css("display", "none");

            var smplContent = jQuery(scenarioClass + " .son-firsatlar-slider");
            var shownCount = 0;

            function isShown() {
                shownCount === 0 ? smpl.fireEvent("shown-slider") : false;
                shownCount++;
            }

            jQuery.fn.isOnScreen = function () {
                var win = jQuery(window);
                var viewport = {
                    top: win.scrollTop()
                };
                viewport.bottom = viewport.top + win.height();
                var bounds = this.offset();
                bounds.bottom = bounds.top + this.outerHeight();
                return !(
                    viewport.bottom < bounds.top ||
                    viewport.top > bounds.bottom
                );
            };

            if (smplContent.isOnScreen()) {
                isShown();
            }

            if (shownCount === 0) {
                jQuery(window).scroll(function () {
                    if (shownCount === 0) {
                        var top_of_element = smplContent.offset().top;
                        var bottom_of_element = smplContent.offset().top + smplContent.outerHeight();
                        var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                        var top_of_screen = jQuery(window).scrollTop();
                        if (
                            bottom_of_screen > top_of_element &&
                            top_of_screen < bottom_of_element
                        ) {
                            isShown();
                        }
                    }
                });
            }
        }
    }, 50);
}

startSmpl();

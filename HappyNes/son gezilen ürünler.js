/************* Available Variables *************
 
 functions  : initialize, toggleShow, onChangeConfig, setType, setLevel, setStep, render, createClass, interpolate, getViewport, useState, useEffect, useCallback, useMemo, useRef
 components : Layout, Container
 constants  : 
    types       : TYPE_HEADERBAR, TYPE_FOOTERBAR, TYPE_NOTIFICATON, TYPE_TRIGGER, TYPE_POPUP, TYPE_ASSISTANT, TYPE_EMBEDED
    positions   : TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    sizes       : MINI, DEFAULT_SIZE, LARGE, FULLSCREEN,
    orientation : HORIZONTAL, VERTICAL
    levels      : LEVEL_SHOW, LEVEL_HIDE, LEVEL_JOIN, LEVEL_EXIT, LEVEL_DONE, LEVEL_GOAL

************************************************/

export default (scenarioId, variationId, options, preview) => {
    initialize({ type: TYPE_EMBEDED }, (config) => {
        onChangeConfig((newConfig) => {
            console.log('new Config', newConfig);
        });

        toggleShow((status) => {
            if (!options.controlVariation) {
                if (status) {
                    var scenarioClass = ".scenario-" + scenarioId + "-" + variationId;
                    if (jQuery('#product-details-form').length > 0) {
                        var lastLookProductObj = {
                            name: jQuery("#product-details-form h2").text(),
                            discountPrice:
                                jQuery("#product-details-form .product-price span")
                                    .text()
                                    .trim(),
                            src: jQuery("#productCarousel .carousel-inner img").first().attr("src"),
                            href: window.location.href
                        };
                        if (JSON.parse(localStorage.getItem("smpl_lastlook_product") === null)) {
                            var productArray = [];
                            productArray.unshift(lastLookProductObj);
                            localStorage.setItem("smpl_lastlook_product", JSON.stringify(productArray));
                        } else {
                            var productArray = JSON.parse(
                                localStorage.getItem("smpl_lastlook_product")
                            );
                            if (
                                productArray.find((item) => item.name === lastLookProductObj.name) ===
                                undefined) {
                                productArray.length >= 9 ? productArray.pop() : null;
                                productArray.unshift(lastLookProductObj);
                                localStorage.setItem(
                                    "smpl_lastlook_product",
                                    JSON.stringify(productArray)
                                );
                            }
                        }
                    }
                    if (window.location.pathname.length == 1 || jQuery(".filter-area").length > 0) {
                        if (window.location.pathname === "/") {
                            if (localStorage.getItem("smpl_lastlook_product") !== null) {
                                var lastLookProductArray = JSON.parse(
                                    localStorage.getItem("smpl_lastlook_product")
                                );
                                if (lastLookProductArray.length > 2) {
                                    var lastLookProductHTML =
                                        `<div class="scenario-` +
                                        +scenarioId +
                                        `-` +
                                        variationId +
                                        `">
                        <div class="container">
                         <h2 style="text-align:center;">Son Gezilen Ürünler</h2>
                            <div class="row style="margin-bottom:20px;">
                                <div class="col-md-12">
                                    <div class="carousel slide multi-item-carousel" id="theCarousel">
                                        <div class="carousel-inner">`;

                                    lastLookProductArray.map((product, index) => {
                                        lastLookProductHTML += `<div class="item">
                   <div class="col-xs-4 product-item smpl-product-item">
    <a style="margin-bottom:20px;" href="` + product.href + `">
        <div class="product-img" style="background-image: url(` + product.src + `);">
            <div class="iframe-clicker"></div>
        </div>
        <h4>` +
            product.name +
            `</h4>
        <div class="zigzag darkpink"></div>
        <span class="product-price">` + product.discountPrice + `</span>
    </a>


</div></div>`
                                    });
                                    lastLookProductHTML += `</div>
               <div> <a class="left carousel-control" href="#theCarousel" data-slide="prev" style="margin-left: 0px; height:30px; width:30px; top:50%"><i style="filter: drop-shadow(2px 2px 2px #0e0e0e);" class="glyphicon glyphicon-chevron-left"></i></a></div>
               <div> <a class="right carousel-control" href="#theCarousel" data-slide="next" style="margin-left: -100px; height:30px; width:30px; top:50%"><i style="filter: drop-shadow(2px 2px 2px #0e0e0e);" class="glyphicon glyphicon-chevron-right"></i></a></div>`;
                                    lastLookProductHTML += `</div></div></div></div></div>`;
                                    jQuery(".container-fluid.promo").before(lastLookProductHTML);
                                   var showCount = 0;
                                    jQuery(window).scroll(function () {
                                    var top_of_element = jQuery(".scenario-2-1").offset().top;
                                    var bottom_of_element =
                                        jQuery(".scenario-2-1").offset().top +
                                        jQuery(".scenario-2-1").outerHeight();
                                    var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
                                    var top_of_screen = jQuery(window).scrollTop();
                                    if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                                        showCount == 0 ? setLevel(LEVEL_JOIN, "shown-slider") : false;
                                        showCount++;
                                    }
                                    }); 
                                    jQuery(scenarioClass + " #theCarousel .item").eq(0).addClass("active");
                                }
                            }
                        }
                    }
                    jQuery('.multi-item-carousel').carousel({
                        interval: false
                    });
                    jQuery('.multi-item-carousel .item').each(function () {
                        var next = jQuery(this).next();
                        if (!next.length) {
                            next = jQuery(this).siblings(':first');
                        }
                        next.children(':first-child').clone().appendTo(jQuery(this));
                        if (next.next().length > 0) {
                            next.next().children(':first-child').clone().appendTo(jQuery(this));
                        } else {
                            jQuery(this).siblings(':first').children(':first-child').clone().appendTo(jQuery(this));
                        }
                    });
                    jQuery(scenarioClass + " .item a").click(function(){
                        setLevel(LEVEL_JOIN,"click-product")
                        /* join-click-product-lastLook */
                    })
                    // do something
                } else {
                    // replace changes
                }
            }
        });
    });
}
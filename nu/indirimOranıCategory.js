                    const smplObj = {
                        scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
                        scenarioName: "scenario-" + scenarioId + "-" + variationId,
                        setCookie: function (cname, cvalue, min) {
                            const d = new Date();
                            d.setTime(d.getTime() + min * 60 * 1000);
                            const expires = "expires=" + d.toUTCString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                        },
                        getCookie: function (name) {
                            const nameEQ = name + "=";
                            const ca = document.cookie.split(";");
                            for (let i = 0; i < ca.length; i++) {
                                let c = ca[i];
                                while (c.charAt(0) === " ") c = c.substring(1, c.length);
                                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                            }
                            return null;
                        },
                        debounce: function (func, timeout) {
                            let timer;
                            return function (...args) {
                                const context = this;
                                clearTimeout(timer);
                                timer = setTimeout(() => func.apply(context, args), timeout);
                            };
                        },
                        fireEvent: function (eventLabel, minutes) {
                            const device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop";
                            const eventName = eventLabel + "(" + device + ")";
                            if (minutes === 0) {
                                if (options.sendEvent) {
                                    if (eventName.indexOf("close") !== -1) {
                                        setLevel(LEVEL_EXIT, eventName);
                                    } else {
                                        setLevel(LEVEL_JOIN, eventName);
                                    }
                                } else {
                                    console.log("event: ", eventName);
                                }
                            } else if (smplObj.getCookie("smpl_" + smplObj.scenarioName + "_" + eventName) !== "on") {
                                if (options.sendEvent) {
                                    if (eventName.indexOf("close") !== -1) {
                                        setLevel(LEVEL_EXIT, eventName);
                                    } else {
                                        setLevel(LEVEL_JOIN, eventName);
                                    }
                                    smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                                } else {
                                    console.log("event: ", eventName);
                                    smplObj.setCookie("smpl_" + smplObj.scenarioName + "_" + eventName, "on", minutes);
                                }
                            }
                        }
                    };
                    if (jQuery('#contentProductDetail').length > 0) {
                        if (jQuery(".scenario-49-1").length > 0 && jQuery(".scenario-49-1 span").text().trim() == "Sepette %70 İndirim") {
                            let oldPrice = jQuery("#divIndirimsizFiyat .spanFiyat")
                            const formatPrice = (ele) => {
                                let priceLength = oldPrice.text().replace('₺', '').length
                                if (priceLength > 7) {
                                    return ele = Number(ele.text().replace('₺', '').replace('.', '').replace(',', '.'));
                                } else {
                                    return ele = Number(ele.text().replace('₺', '').replace(',', '.'));
                                }
                            }
                            let numberPrice = formatPrice(oldPrice);
                            let discount = (numberPrice / 100) * 70;
                            lastPrice = numberPrice - discount;
                            let priceToFixed = lastPrice.toFixed(2);
                            let lastPriceText;
                            if (priceToFixed.length <= 6) {
                                lastPriceText = priceToFixed.replace('.', ',');
                            } else {
                                let firstLetter = priceToFixed.replace('.', ',').slice(0, 1)
                                let allLetter = priceToFixed.replace('.', ',').substring(1);
                                lastPriceText = firstLetter + '.' + allLetter;
                            }
                            let html = `
    <span class="${smplObj.scenarioName}">  ₺` + lastPriceText + `</span>
    `;
                            jQuery("#divIndirimsizFiyat .indirimliFiyat .spanFiyat").css({ "text-decoration": "line-through" })
                            jQuery("#divIndirimsizFiyat .indirimliFiyat .spanKdv").after(html);
                            smplObj.fireEvent("shown-productDiscount");
                        }
                    }
                    if (jQuery('.sortingContent').length > 0) {
                        const addDiscountBanner = smplObj.debounce(function () {
                            jQuery(".productItem").each(function () {
                                if (jQuery(this).find(".smpl-list-indirim-badge").text().trim() == "Sepette %70 İndirim") {
                                    let oldPrice = jQuery(this).find(".productDetail .discountPrice span:first");
                                    const formatPrice = (ele) => {
                                        let priceLength = oldPrice.text().trim().replace('₺', '').length
                                        if (priceLength > 7) {
                                            return ele = Number(ele.text().replace('₺', '').replace('.', '').replace(',', '.'));
                                        } else {
                                            return ele = Number(ele.text().replace('₺', '').replace(',', '.'));
                                        }
                                    }
                                    let numberPrice = formatPrice(oldPrice);
                                    let discount = (numberPrice / 100) * 70;
                                    let lastPrice = numberPrice - discount;
                                    let priceToFixed = lastPrice.toFixed(2);
                                    let lastPriceText;
                                    if (priceToFixed.length <= 6) {
                                        lastPriceText = priceToFixed.replace('.', ',');
                                    } else {
                                        let firstLetter = priceToFixed.replace('.', ',').slice(0, 1)
                                        let allLetter = priceToFixed.replace('.', ',').substring(1);
                                        lastPriceText = firstLetter + '.' + allLetter;
                                    }
                                    if (jQuery(this).find(smplObj.scenarioClass).length < 1 && jQuery(this).find(".regularPrice").length < 1) {
                                        let html = `
    <span class="${smplObj.scenarioName}">  ₺` + lastPriceText + `</span>
    `;
                                        oldPrice.css({ "text-decoration": "line-through" })
                                        oldPrice.after(html);
                                    }
                                }
                            })
                        }, 200);
                        document.addEventListener("DOMNodeInserted", function (e) {
                            if (e.target.classList.value !== smplObj.scenarioName) {
                                addDiscountBanner();
                            }
                        }, false);
                        addDiscountBanner();
                        smplObj.fireEvent("shown-categoryDiscount");
                        console.log("shown")
                    }

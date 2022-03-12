(function () {
    var config = {
        scenarioname: "populerIcerikler",
        analytics: "populerIcerikler",
        controlgroup: 0,
        widgetTitle: 'EN ÇOK OKUNANLAR',
        triggerText: 'EN ÇOK OKUNANLAR',
        productLimit: 10,
    };

    if (EightDigits.sf.prototype.hasOwnProperty(config.scenarioname)) {
        return false
    }
    EightDigits.sf.prototype[config.scenarioname] = function () {
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

                var productList = JSON.parse(localStorage.getItem(config.scenarioname) || "[]");
                productListWidget({
                    productList: productList,
                    title: config.widgetTitle,
                    triggerText: config.triggerText,
                    fireEvent: function (eventType) {
                        EightDigits.analytics.sendEvent(config.analytics, eventType);
                    },
                });

            },
            control: function () {
                function detectIE() {
                    var ua = window.navigator.userAgent;
                    var ie = ua.search(/(MSIE|Trident|Edge)/);

                    return ie > -1;
                }

                if (detectIE()) {
                    return false;
                }
                var contentList = [{
                    img: 'https://www.anadolusaglik.org//assets/defaults/default-content-image.jpg',
                    url: 'https://www.anadolusaglik.org/blog/koronafobiyi-onlemenin-5-yolu',
                    title: 'Koronafobiyi önlemenin 5 yolu',
                    subtitle: 'Son günlerde Koronavirüs (COVID-19) vaka sayılarının artmasıyla beraber birçok insanda hasta olma korkusu ve panik hali (Koronafobi)...'
                },
                    {
                        img: 'https://docsd.anadolusaglik.org/content/images/corona-korona-virusu-nedir-belirtileri-nelerdir.jpg',
                        url: 'https://www.anadolusaglik.org/blog/corona-virusu-nedir-belirtileri-nelerdir-ve-nasil-bulasir',
                        title: 'Corona (Korona) virüsü nedir, belirtileri nelerdir ve nasıl bulaşır?',
                        subtitle: 'Çin\'in Wuhan kentinde ortaya çıkan Corona (Korona) virüsü (2019-nCoV) nedeniyle hayatını kaybedenlerin sayısı 26\'ya y&...'
                    },
                    {
                        img: 'https://docsd.anadolusaglik.org/blog/crops/600x340/saglik_calisanlari_kendilerini_ve_ailelerini_coronavirusten_nasil_korumali_48045.jpg',
                        url: 'https://www.anadolusaglik.org/blog/saglik-calisanlari-kendilerini-ve-ailelerini-coronavirusten-nasil-korumali',
                        title: 'Sağlık Çalışanları Kendilerini ve Ailelerini Coronavirus’ten Nasıl Korumalı?',
                        subtitle: 'Coronavirus (COVID-19) her geçen gün daha fazla insanı etkilemeye davam ediyor. Sağlık çalışanlarının Coronavirus salgınından toplu...'
                    },
                    {
                        img: 'https://docsd.anadolusaglik.org/blog/crops/600x340/korona_sonrasi_hayat_yeni_normali_kabullenmek_51401.jpg',
                        url: 'https://www.anadolusaglik.org/blog/korona-sonrasi-hayat-yeni-normali-kabullenmek',
                        title: 'Korona Sonrası Hayat: Yeni Normali Kabullenmek',
                        subtitle: 'Uzun süredir evde olan ve sosyal olarak aktif olmayan kişilerin yeni düzene alışması kolay olmayabilir. İnsanların dışarı çıktığında...'
                    },
                    {
                        img: 'https://docsd.anadolusaglik.org/blog/crops/600x340/cocuklarin_coronavirus_endiseleri_nasil_onlenir_70713.jpg',
                        url: 'https://www.anadolusaglik.org/blog/cocuklarin-coronavirus-endiseleri-nasil-onlenir',
                        title: 'Çocukların Coronavirus Endişeleri Nasıl Önlenir?',
                        subtitle: 'Çocuklara Coronavirus’ün anlatılması ve endişelerinin giderilmesinin önemli olduğunu söyleyen Anadolu Sağlık Merkezi&rsquo...'
                    }]
                localStorage.setItem(config.scenarioname, JSON.stringify(contentList));
                var productList = JSON.parse(localStorage.getItem(config.scenarioname) || "[]");
                var showRule = productList.length > 2;
                if (productList.length > config.productLimit) productList.pop();
                return showRule;
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
    var _ed_scriptSubject = new EightDigits.sf();
    _ed_scriptSubject[config.scenarioname]();


    function productListWidget(options) {
        var widgetContainer = '<div class="smpl-productList-container"> <div class="smpl-productList-triggerContainer"></div><div class="smpl-productList-title">EN ÇOK OKUNANLAR</div><div class="smpl-productList-list"> </div></div>';
        var itemContainerRaw = '<div class="smpl-productList-list-item"> <div class="smpl-item-imageContainer"><a href="#url"><img src="#image"></a></div><div class="smpl-item-detailContainer"> <a href="#url" class="smpl-product-title" style="color: #000 !important">#title</a><div class="smpl-product-category">#category</div><div class="smpl-product-price">#price</div></div></div>';
        var styleString = 'html.open-smpl-prooductList{overflow:hidden;}html.open-smpl-prooductList body{transition:1s all;filter:blur(3px)}html.open-smpl-prooductList .smpl-productList-container{right:0}html.open-smpl-prooductList .smpl-productList-triggerContainer{opacity:0}.smpl-productList-container{position:fixed;top:0;right:-404px;width:400px;height:100%;background:#fff;z-index:11111111111;box-shadow:0 0 4px 2px #00000040;transition:.5s all; padding-bottom: 20px;}.smpl-productList-title{text-align:center;font-family: \'latoBold\';font-size:19px;padding:13px;background:#f3f3f3}.smpl-productList-list{height:100%;overflow:auto;padding-bottom:50px;}.smpl-productList-list-item{display:flex;margin:0 20px;padding:20px 0;border-top:1px solid #f3f3f3}.smpl-productList-list-item:first-child{border-top:none}.smpl-item-imageContainer{width:130px; margin: auto;}.smpl-item-imageContainer img{width:130px;}.smpl-item-detailContainer{padding:10px 10px 10px 15px; max-width:233px}.smpl-product-title{font-family: \'black\',arial,helvetica,sans-serif;font-size: 11px;}.smpl-product-category{font-size:12px;color:#98989a;padding:6px 0; font-family: \'latoRegular\';}.smpl-product-price{display:none}.smpl-productList-triggerContainer{transform:rotate(270deg) translateX(-50%);transform-origin:left;background:#F39A3E; color:#fff;font-weight:100;font-size:15px;display:block;position:absolute;top:45%;font-family: \'latoBold\';left:-26px;padding:18px;cursor:pointer;transition:.5s opacity;box-shadow:0 0 0px 0px #0006}.smpl-productList-triggerContainer:hover{left:-19px}';
        var productList = options.productList || [];
        var fireEvent = options.fireEvent || function () { };


        jQuery('body').append('<style>' + styleString + '</style>');
        jQuery('html').append(widgetContainer);
        productList.forEach(item => {
            var itemContainer = itemContainerRaw
                .replace(/#image/g, item.img)
                .replace(/#title/g, item.title)
                .replace(/#category/g, item.subtitle)
                .replace(/#url/g, item.url);
            jQuery('.smpl-productList-list').append(itemContainer);
        });
        fireEvent('Shown');

        jQuery('.smpl-productList-triggerContainer').on('click', function () {
            fireEvent('ClickTrigger');
            var lastItem = jQuery(".smpl-productList-list-item").length-1;
            jQuery('.smpl-productList-list-item:eq('+lastItem+')').css("padding-bottom","120px");
            jQuery('html').hasClass('open-smpl-prooductList')
                ? jQuery('html').removeClass('open-smpl-prooductList')
                : jQuery('html').addClass('open-smpl-prooductList');
        });
        jQuery('.smpl-productList-triggerContainer').text(options.triggerText || 'EN ÇOK OKUNANLAR');
        jQuery('.smpl-productList-triggerContainer').text(options.title || 'EN ÇOK OKUNANLAR');
        jQuery('.smpl-productList-container').on('mouseleave', function () {
            jQuery('html').removeClass('open-smpl-prooductList');
        });
        jQuery('.smpl-productList-list-item a').on('click', function () {
            fireEvent('Click-blog');
        });
    };

})();

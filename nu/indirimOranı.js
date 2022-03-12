    if(jQuery(".scenario-49-1").length > 0 && jQuery(".scenario-49-1 span").text().trim() == "Sepette %70 İndirim"){
        let oldPrice = jQuery("#divIndirimsizFiyat .spanFiyat")
        const formatPrice = (ele) => {
            let priceLength = oldPrice.text().replace('₺','').length
            if(priceLength > 7){
                return ele = Number(ele.text().replace('₺','').replace('.','').replace(',','.'));
            }else{
                return ele = Number(ele.text().replace('₺','').replace(',','.'));
            }
        }
        let numberPrice = formatPrice(oldPrice);
        let discount = (numberPrice / 100) * 70;
        lastPrice = numberPrice - discount;
        let priceToFixed = lastPrice.toFixed(2);
        let lastPriceText;
        if(priceToFixed.length <= 6){
            lastPriceText = priceToFixed.replace('.',',');
        }else {
            let firstLetter = priceToFixed.replace('.',',').slice(0,1)
            let allLetter = priceToFixed.replace('.',',').substring(1);
            lastPriceText = firstLetter+'.'+allLetter;
        }
        let html = `
    <span class="scenario">  ₺`+lastPriceText+`</span>
    `;
        jQuery("#divIndirimsizFiyat .indirimliFiyat .spanFiyat").css({"text-decoration":"line-through"})
        jQuery("#divIndirimsizFiyat .indirimliFiyat .spanKdv").after(html);
    }



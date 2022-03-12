if (jQuery(".p-price .prices").length > 0) {

    var link = window.location.pathname;
    var tempur25 = [
        "/yataklar/tempur-original-supreme-21cm-yatak-80669",
        "/yataklar/tempur-original-19cm-yatak-80668",
        "/en-cok-satilanlar/tempur-original-19cm-yatak-80668",
        "/visco-yataklar/tempur-original-supreme-21cm-yatak-80669",
        "/visco-yataklar/tempur-original-19cm-yatak-80668",
    ]
    var portoSet = "/null/porto-set-81430";
    var list = [
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-queen-yastik-xl-80478",
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-queen-yastik-l-80477",
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-queen-yastik-m-80476",
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-symphony-yastik-m-80470",
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-symphony-yastik-l-80471",
        "/tempur-yastiklarda-indirim-kampanyasi/tempur-ombracio-yastik-80474"
    ]
    var calculatedBadge
    if (tempur25.indexOf(link) > -1) {
        calculatedBadge = "%10"
    }
    else if (portoSet === link) {
        calculatedBadge = "%30 + %10"
    }
    else {
        var newPrice = jQuery(".newprice").text().trim().split(" ")[0].trim().split(".");
        var oldPrice = jQuery(".oldprice").text().trim().split(" ")[0].trim().split(".");
        if (newPrice[1]) {
            newPrice = newPrice[0] + newPrice[1];
        }
        else {
            newPrice = newPrice[0];
        }
        if (oldPrice[1]) {
            oldPrice = oldPrice[0] + oldPrice[1];
        }
        else {
            oldPrice = oldPrice[0];
        }
        calculatedBadge = "%" + Math.round((oldPrice - newPrice) / oldPrice * 100);
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === link) {
            calculatedBadge = "%20";
        }
    }
    var html =
        `<div class="scenario-` +
        scenarioId +
        `-` +
        variationId +
        `">
      <div class="smpl-product-online-badge" style="top: 0;display: inline-grid;position: absolute;width: 20%;background: #d07a0b;left: 40px;height: 21px;border-radius: 0px 15px 15px 0px;justify-content: center;text-align: center;align-items: center;color: white;font-weight: 600;font-size: 10px;z-index: 9999;">
      <span style="">`+ calculatedBadge + `</span>
      </div>
</div>`;
    jQuery("#p-image-area").prepend(html);
}
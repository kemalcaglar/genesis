let totalAmount = Number(jQuery('#SepetToplamTutarTahsilEdilecek').text().split(' TL')[0].replace('.', '').replace(',', '.'));
let completeAmount = 550;
let addAmount = completeAmount - totalAmount;
let fixedTutar = addAmount.toFixed(2).replace(".",",");

var html = `
<div style='font-family:Arial;margin-top:5px;width:100%;display:flex;justify-content:flex-end;'><div style="
border: 1px solid #ccc;
justify-content: center;
text-align: center;
line-height: 25px;
width:100%;
color:#636363;">
<span>Sepetini 550 TL'ye tamamla ücretsiz kargo fırsatından yaralan.</span>
</div>
</div>
`
jQuery(".OrderCouponCodes").after(html)
//jQuery('#NextBackButtons').before(html);
var productIdList = [
    "FX1294",
    "FX1715",
    "FY7545",
    "FY9401",
    "FY9405",
    "49799",
    "49800",
    "FX2991",
    "FY5027",
    "FY5028",
    "FY5029",
    "FY7264",
    "FY7265",
    "FZ0847",
    "49803",
    "49804",
    "FX2508",
    "FX2509",
    "GZ5260",
    "GZ5272",
    "FX2763",
    "FX2765",
    "2232",
    "3912",
]

var html=`<div class='smpl-hediye-badge' style='
position: absolute;
top: 39px;
left: 2px;
padding: 2px;
display: flex;
white-space: nowrap;
letter-spacing: 2px;
line-height: 1.1em;
text-transform: uppercase;
font-size: 11px;
color: #000;
font-style: normal;
font-weight: 400;
max-width: 200px;
height: 25px;
justify-content: center;
text-align: center;
align-items: center;
background-color: #ebedee;'>Çanta Hediye</div>
`;
var htmlTwo = `<div class='smpl-hediye-badge' style='
position: absolute;
top: 7px;
left: 2px;
padding: 2px;
display: flex;
white-space: nowrap;
letter-spacing: 2px;
line-height: 1.1em;
text-transform: uppercase;
font-size: 11px;
color: #000;
font-style: normal;
font-weight: 400;
max-width: 200px;
height: 25px;
justify-content: center;
text-align: center;
align-items: center;
background-color: #ebedee;'>Çanta Hediye</div>
`;
var dataId = dataLayer[2].ecommerce.impressions
for (var j = 0; j < dataId.length; j++)
if(productIdList.find(x=>x===dataId[j].id)){
    if(jQuery('.p-item:eq('+j+') .p-badges .badge .badge-text').length > 0){
        jQuery('.p-item:eq('+j+') .p-image a').after(html);
    }else{
        jQuery('.p-item:eq('+j+') .p-image a').after(htmlTwo);
    }
}
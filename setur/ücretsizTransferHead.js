var htmlTwo = `<div class="smplTransfer" style="
color:#a6a6a6;
font-size:13px;
display: inline-block;
cursor: pointer;
position: relative;
padding-right:25px;">
<i class="fas fa-bus" style="padding-right:3px;color:#4bca63;"></i> Ücretsiz Transfer
<span class="smplTransferTooltip" style="display: none;
background: #555;
padding: 12px;
position: absolute;
top: 34px;
left: -54px;
color: white;
width: 310px;
text-align: center;
z-index: 3;
border-radius: 6px;
font-size: 12px;
line-height: 1.5em;">3 gece ve üzeri konaklamalarda havalimanı-otel-havalimanı transferinden ücretsiz yararlanabilmek için uçuş bilgilerinizi, uçuştan 48 saat önce tursatis@setur.com.tr adresine göndermeniz gerekmektedir.
</span></div>
<div class="smpl-arrow-leftTwo"></div>`
jQuery(".hoteldetail-hotel-map").after(htmlTwo);

jQuery('.smplTransfer').mouseover(function () {
  jQuery('.smplTransferTooltip').css('display', 'none');
  jQuery('.smpl-arrow-leftTwo').css('display', 'none');
  jQuery(this).find('.smpl-arrow-leftTwo').css('display', 'block');
  jQuery(this).find('.smplTransferTooltip').css('display', 'block');
});
jQuery('.smplTransfer').mouseout(function () {
  jQuery('.smpl-arrow-leftTwo').css('display', 'none');
  jQuery('.smplTransferTooltip').css('display', 'none');
});
var html = `<div style="width: 100%;display: flex;justify-content: center;/*! text-align: center; */align-items: center;color: #303030;font-family: firasemibold,sans-serif;line-height: 30px;font-size: 14px;border: 20px solid #fafafa;">
<img src="https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637505314074855206.jpg?q=80" style="width: 55%;"><div style="text-align: center;height: 202px;margin-right: 20px;background: #fafafa;margin-top: 10px;margin-bottom: 10px;width: 100%;">
<span style="text-align: center;display: block;margin-bottom: 7px;margin-top: 26px;">KEDV Düz Tabak 20cm</span>
<span style="display: block;margin-bottom: 10px;">24,00 TL</span>
<a class="btn btn-block btn-orange02 text-uppercae" title="SATIN AL" style="width: 75%;margin-left: 15%;font-size: 11px;height: 26%;border-radius: 5px;display: flex;justify-content: center;text-align: center;align-items: center;" href="https://www.porland.com/kedv-duz-tabak-20cm_106862?d=10087_106862">
          <span>ÜRÜNE GİT</span>
      </a>
</div>
</div>`
if(jQuery(".text-center.count").text() > 0){
  jQuery(".d-flex.b-checkout").after(html);
  }

  ------------------
desktop

  var html = `<div style="width: 100%;display: flex;justify-content: center;/*! text-align: center; */align-items: center;color: #303030;font-family: firasemibold,sans-serif;line-height: 30px;font-size: 14px;border: 20px solid #fafafa;">
  <img src="https://stn-porland.mncdn.com/mnresize/720/720/Content/media/ProductImg/original/637505314074855206.jpg?q=80" style="width: 64%;"><div style="text-align: center;width: 70%;/*! border: 2px solid gray; */height: 200px;margin-right: 22px;background: #fafafa;">
  <span style="text-align: center;display: block;margin-bottom: 7px;margin-top: 26px;">KEDV Düz Tabak 20cm</span>
  <span style="display: block;margin-bottom: 10px;">24,00 TL</span>
  <input class="form-control" id="quantity-444191" name="quantity_106862" data-onchange="update" data-stock="306" data-js="quantity-list" data-quantity="23" type="text" value="23" style="width: 20%;justify-content: center;display: flex;text-align: center;align-items: center;margin-left: 40%;margin-bottom: 10px;">
  <a href="javascript:void(0);" class="w-100 btn btn-orange02 btn-quickadd" title="Sepete Ekle" data-js="btn-add-basket">
  <span>Sepete Ekle</span>
</a>
  </div>
  </div>`

  if(jQuery(".text-center.count").text() > 0){
    jQuery(".d-flex.b-checkout").after(html);
    }
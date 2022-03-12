(function () {
  if (EightDigits.sf.prototype.hasOwnProperty("Form_Redesign_Lead")) {
    return false;
  }
  EightDigits.sf.prototype.Form_Redesign_Lead = function () {
    const config = {
      scenarioname: "Form_Redesign_Lead",
      analytics: "Form_Redesign_Lead",
      controlgroup: 0
    };

    const main = {
      factory: function () {
        return true;
      }
    };
    main.factory.prototype = {
      random: function () {
        var randomVal = 0;
        var randomControlRatio =
          config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
        if (EightDigits.utils.getCookie("_ed_" + config.scenarioname) == null) {
          randomVal = Math.floor(Math.random() * 10000 + 1);
          EightDigits.utils.setCookie("_ed_" + config.scenarioname, randomVal);
        } else {
          randomVal = parseInt(EightDigits.utils.getCookie("_ed_" + config.scenarioname));
        }
        if (randomVal <= 100 * randomControlRatio) {
          return true;
        } else {
          return false;
        }
      },
      fireEvent: function (eventName, withCookie) {
        if (withCookie === true) {
          if (window.innerWidth <= 420) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Mobile")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Mobile", "on");
            }
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Tablet")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Tablet", "on");
            }
          } else {
            if (!EightDigits.utils.getCookie("ed-" + config.analytics + eventName + "_Desktop")) {
              EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
              EightDigits.utils.setCookie("ed-" + config.analytics + eventName + "_Desktop", "on");
            }
          }
        } else {
          if (window.innerWidth <= 420) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Mobile");
          } else if (window.innerWidth > 420 && window.innerWidth <= 768) {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Tablet");
          } else {
            EightDigits.analytics.sendEvent(config.analytics, eventName + "_Desktop");
          }
        }
      },
      style: function () {
        return (`<style>
.wrapper .container > div {
  position: absolute;
}

.wrapper .container form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.wrapper .container form .g-recaptcha div {
  margin: auto;
}

.Form_Redesign_Lead_text{
  width: 100%;
  font-size: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0px #c4aaa3;
  margin: 15px;
  border-radius: 10px;
}

.Form_Redesign_Lead_campaing {
  margin-bottom: 10px;
}

.Form_Redesign_Lead_campaing h5 {
  font-size: 16px;
  font-weight: 500;
}

.Form_Redesign_Lead_campaing ul.Form_Redesign_Lead_campaingText {
  padding-left: 15px;
  list-style: none;
}

.Form_Redesign_Lead_campaing ul.Form_Redesign_Lead_campaingText li  {
  color: #000;
}
.smpl_bold{
  font-weight: bold;
}

@media screen and (max-width: 991px) {
  .Form_Redesign_Lead_text  {
    font-size: 17px;
    height: 100px;
    padding: 10px;
  }
  .Form_Redesign_Lead_campaing {
    border: 1px solid #d1d2d3;
    padding: 5px;
    box-shadow: 0 0 2px 2px #d1d2d35c;
    border-radius: 5px;
  }
  .Form_Redesign_Lead_campaing ul.Form_Redesign_Lead_campaingText {
    padding-left: 15px;
    height: 320px;
    overflow: auto;
    margin-bottom: 0;
  }
}
</style>`);
      },
      start: function () {
        jQuery("head").append(main.factory.prototype.style());

        function seturCampaing() {
          let html = `
       <div class="` + config.scenarioname + `_campaing">
        <h5><span class="smpl_bold">Kampanya Katılım Şartları:</span></h5>
        <ul class="` + config.scenarioname + `_campaingText">
          <li>
          1.Bu kampanya Setur Servis Turistik A.Ş. tarafından Milli Piyango İdaresi’nin 25.08.2021 tarihli ve E-40453693-255.01.02-7937 sayılı izni ile kapsamı dışında ve 14.09.2021-18.09.2021 tarihleri arasında düzenlenmiştir.
          </li>
          <li>
          2. Kampanya tarihleri arasında katılımcılar, Setur’a ait <a href="https://landing.setur.com.tr/5C681D0F-26C4-42DC-945E-3571E227D3E3">https://landing.setur.com.tr/5C681D0F-26C4-42DC-945E-3571E227D3E3</a> web sitesine ad, soyad, e-posta ve telefon bilgileri ile üye olup tatile neden ben gitmeliyim sorusunu yanıtlayıp yarışmaya katılacaklardır. Kazananlar 23.09.2021 tarihinde saat 17:00’da belirlenecek ve 23.09.2021 tarihinde saat 18:00'da @setur Instagram hesabında duyurulacaktır. 
          </li>
          <li>
          3.Kampanya sonunda yarışma kurallarını karşılayan kullanıcılar arasında Jüri tarafından  seçilen 1 kişi çift kişilik Çeşme Altın Yunus Resort & Thermal’de 2 gece 3 gün konaklama, 1 kişi çift kişilik Muğla Doora Bodrum’da 2 gece 3 gün konaklama, 1 kişi çift kişilik Marmaris Grand Yazıcı Turban’da 2 gece 3 gün konaklama, 1 kişi çift kişilik Muğla Grand Yazıcı Marmaris’te 2 gece 3 gün konaklama, 1 kişi çift kişilik Bodrum Club Marma Hotel’de 2 gece 3 gün konaklama, 1 kişi çift kişilik Fethiye The Bay Beach Club’ta 2 gece 3 gün konaklama, 1 kişi çift kişilik Kemer Mirage Park’ta 2 gece 3 gün konaklama ve 1 kişi çift kişilik Side Club Blue Waters’da 2 gece 3 gün konaklama ikramiyesi kazanacaktır. Konaklama ikramiyesi belirtilen otellerde başlayacak olup, kazanan talihlilerin ilgili otellere ulaşımları kendilerine aittir.
          </li>
          <li>
          4. Bu yarışmaya Setur, Kafa Radyo, Çeşme Altın Yunus Resort & Thermal, Muğla Doora Bodrum Marmaris Grand Yazıcı Turban, Muğla Grand Yazıcı Marmaris, Bodrum Club Marma Hotel, Fethiye The Bay Beach Club, Kemer Mirage Park, Side Club Blue Waters çalışanları ve 1. derece yakınları katılamaz. Yarışmaya katılıp kazanmaları halinde ödül almaya hak kazanamazlar.
          </li>
          <li>
          5. Yarışmaya katılım ücretsizdir.
          </li>
          <li>
          6. Ödül kazanan kullanıcılara, ihtiyaç duyulması halinde paylaşım yaptıkları sosyal medya hesabı üzerinden iletişim kurulacaktır.
          </li>
          <li>
          7. Katılımcılar tarafından yanlış veya eksik iletişim bilgileri verilmesinden dolayı yaşanabilecek aksaklıklardan Setur sorumlu tutulamaz. Bu kişiler, kazanan olarak belirlenmelerine rağmen haklarını kaybederler. Setur’un önceden belirlediği yedek talihli listesinden sıradaki ilk kişi bileti kazanma hakkına sahip olur.
          </li>
          <li>
          8. Setur, yarışma boyunca ve sonrasında, öngörülmemiş açıklar yoluyla veya herhangi bir şekilde haksız avantaj sağlamaya çalışan katılımcıları, yarışma sonuçlarını olumsuz yönde etkileyecek şekilde hile yaptığı tespit edilen katılımcının bütün yarışma verilerini, katılım hakkını iptal etme, kazananı değiştirme hakkına sahiptir. Ayrıca, bu kişiler hakkında yasal işlem başlatma hakkı saklıdır.
          </li>
          <li>
          9. Setur, bu yarışmayı istediği an sonlandırma veya yeni bir dönem için tekrarlama, iptal etme, uzatma, kazanan kullanıcının ödülünü verme yöntemi dâhil dilediği değişikliği yapma hakkını kendinde saklı tutar. Setur, organizasyonla ilgili yaptığı değişikliklerden sorumlu tutulamaz.
          </li>
          <li>
          10. Yarışmaya katılan herkes, katılım koşullarını okuyup anlayarak peşinen kabul etmiş sayılır.
          </li>
          <li>
          11. Setur istediği zaman yarışma kurallarını değiştirme hakkını kendinde saklı tutar.
          </li>
        </ul>
      </div>
      `;
          return html;
        }
        let html = `
        <p class="`+ config.scenarioname + `_text">Yarışmamız sona ermiştir, gösterdiğiniz ilgiye teşekkür ederiz.</p>
        `
        jQuery("form .card-body .row:eq(0)").remove();
        jQuery("form .card-body .row:eq(0)").html("").append(html)
        jQuery("#ConsentTextApproved").closest(".form-group").parent().before(seturCampaing());
        main.factory.prototype.fireEvent("shown", true);
        jQuery("form .btn-calistir").on("click", function (event) {
          event.preventDefault();
          main.factory.prototype.fireEvent("click-submit", false);
        });
      },
      control: function () {
        const date = new Date();
        if (date.getMonth() === 8) { /* kurgu 9. ayda çalışacak */
          const day = date.getDate();
          if (day >= 18 && day <= 23) { /* 18 ve 23 tarihleri arasında çalışacak */
            const hours = date.getHours();
            if (day === 18) { /* tarih 18 ise saat 12  den sonra çalışacak*/
              if (hours >= 12) { return true }
              else { return false }
            }
            else if (day === 23) {/* tarih 23 ise saat 18  den önce çalışacak*/
              if (hours <= 18) { return true }
              else { return false }
            }
            else { return true }
          }
          else { return false }
        }
      },
      init: function () {
        if (main.factory.prototype.control() === false) {
          return false;
        }
        var _exec = main.factory.prototype.random();
        if (!_exec) {
          main.factory.prototype.fireEvent("NotShown", true);
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
  var _ed_Form_Redesign_Lead = new EightDigits.sf();
  _ed_Form_Redesign_Lead.Form_Redesign_Lead();
})();

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
        <h5><span class="smpl_bold">Kampanya Kat??l??m ??artlar??:</span></h5>
        <ul class="` + config.scenarioname + `_campaingText">
          <li>
          1.Bu kampanya Setur Servis Turistik A.??. taraf??ndan Milli Piyango ??daresi???nin 25.08.2021 tarihli ve E-40453693-255.01.02-7937 say??l?? izni ile kapsam?? d??????nda ve 14.09.2021-18.09.2021 tarihleri aras??nda d??zenlenmi??tir.
          </li>
          <li>
          2. Kampanya tarihleri aras??nda kat??l??mc??lar, Setur???a ait <a href="https://landing.setur.com.tr/5C681D0F-26C4-42DC-945E-3571E227D3E3">https://landing.setur.com.tr/5C681D0F-26C4-42DC-945E-3571E227D3E3</a> web sitesine ad, soyad, e-posta ve telefon bilgileri ile ??ye olup tatile neden ben gitmeliyim sorusunu yan??tlay??p yar????maya kat??lacaklard??r. Kazananlar 23.09.2021 tarihinde saat 17:00???da belirlenecek ve 23.09.2021 tarihinde saat 18:00'da @setur Instagram hesab??nda duyurulacakt??r. 
          </li>
          <li>
          3.Kampanya sonunda yar????ma kurallar??n?? kar????layan kullan??c??lar aras??nda J??ri taraf??ndan  se??ilen 1 ki??i ??ift ki??ilik ??e??me Alt??n Yunus Resort & Thermal???de 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Mu??la Doora Bodrum???da 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Marmaris Grand Yaz??c?? Turban???da 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Mu??la Grand Yaz??c?? Marmaris???te 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Bodrum Club Marma Hotel???de 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Fethiye The Bay Beach Club???ta 2 gece 3 g??n konaklama, 1 ki??i ??ift ki??ilik Kemer Mirage Park???ta 2 gece 3 g??n konaklama ve 1 ki??i ??ift ki??ilik Side Club Blue Waters???da 2 gece 3 g??n konaklama ikramiyesi kazanacakt??r. Konaklama ikramiyesi belirtilen otellerde ba??layacak olup, kazanan talihlilerin ilgili otellere ula????mlar?? kendilerine aittir.
          </li>
          <li>
          4. Bu yar????maya Setur, Kafa Radyo, ??e??me Alt??n Yunus Resort & Thermal, Mu??la Doora Bodrum Marmaris Grand Yaz??c?? Turban, Mu??la Grand Yaz??c?? Marmaris, Bodrum Club Marma Hotel, Fethiye The Bay Beach Club, Kemer Mirage Park, Side Club Blue Waters ??al????anlar?? ve 1. derece yak??nlar?? kat??lamaz. Yar????maya kat??l??p kazanmalar?? halinde ??d??l almaya hak kazanamazlar.
          </li>
          <li>
          5. Yar????maya kat??l??m ??cretsizdir.
          </li>
          <li>
          6. ??d??l kazanan kullan??c??lara, ihtiya?? duyulmas?? halinde payla????m yapt??klar?? sosyal medya hesab?? ??zerinden ileti??im kurulacakt??r.
          </li>
          <li>
          7. Kat??l??mc??lar taraf??ndan yanl???? veya eksik ileti??im bilgileri verilmesinden dolay?? ya??anabilecek aksakl??klardan Setur sorumlu tutulamaz. Bu ki??iler, kazanan olarak belirlenmelerine ra??men haklar??n?? kaybederler. Setur???un ??nceden belirledi??i yedek talihli listesinden s??radaki ilk ki??i bileti kazanma hakk??na sahip olur.
          </li>
          <li>
          8. Setur, yar????ma boyunca ve sonras??nda, ??ng??r??lmemi?? a????klar yoluyla veya herhangi bir ??ekilde haks??z avantaj sa??lamaya ??al????an kat??l??mc??lar??, yar????ma sonu??lar??n?? olumsuz y??nde etkileyecek ??ekilde hile yapt?????? tespit edilen kat??l??mc??n??n b??t??n yar????ma verilerini, kat??l??m hakk??n?? iptal etme, kazanan?? de??i??tirme hakk??na sahiptir. Ayr??ca, bu ki??iler hakk??nda yasal i??lem ba??latma hakk?? sakl??d??r.
          </li>
          <li>
          9. Setur, bu yar????may?? istedi??i an sonland??rma veya yeni bir d??nem i??in tekrarlama, iptal etme, uzatma, kazanan kullan??c??n??n ??d??l??n?? verme y??ntemi d??hil diledi??i de??i??ikli??i yapma hakk??n?? kendinde sakl?? tutar. Setur, organizasyonla ilgili yapt?????? de??i??ikliklerden sorumlu tutulamaz.
          </li>
          <li>
          10. Yar????maya kat??lan herkes, kat??l??m ko??ullar??n?? okuyup anlayarak pe??inen kabul etmi?? say??l??r.
          </li>
          <li>
          11. Setur istedi??i zaman yar????ma kurallar??n?? de??i??tirme hakk??n?? kendinde sakl?? tutar.
          </li>
        </ul>
      </div>
      `;
          return html;
        }
        let html = `
        <p class="`+ config.scenarioname + `_text">Yar????mam??z sona ermi??tir, g??sterdi??iniz ilgiye te??ekk??r ederiz.</p>
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
        if (date.getMonth() === 8) { /* kurgu 9. ayda ??al????acak */
          const day = date.getDate();
          if (day >= 18 && day <= 23) { /* 18 ve 23 tarihleri aras??nda ??al????acak */
            const hours = date.getHours();
            if (day === 18) { /* tarih 18 ise saat 12  den sonra ??al????acak*/
              if (hours >= 12) { return true }
              else { return false }
            }
            else if (day === 23) {/* tarih 23 ise saat 18  den ??nce ??al????acak*/
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

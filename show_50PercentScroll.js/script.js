const scenarioId = 999,
  variationId = 1;
const options = {
  emptyArea: "Lütfen Boş Alan Bırakmayınız",
  phoneMissingValue: "Telefon Numarasında eksik karakter girdiniz.",
  phoneWrongFormat: "Lütfen Telefon numarasını başında Sıfır olacak şekilde giriniz.",
  email: "Lütfen Email formatına göre giriniz."
}
const smplObj = {
  scenarioClass: ".scenario-" + scenarioId + "-" + variationId,
  scenarioName: "scenario-" + scenarioId + "-" + variationId,
  header: "MultiNet yemek kartının sunduğu avantajlarını öğrenmek için bilgilerinizi bırakın, sizi arayalım.",
  setCookie: function (cname, cvalue, min) {
    let d = new Date();
    d.setTime(d.getTime() + min * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    documenevent.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie: function (name) {
    let nameEQ = name + "=";
    let ca = documenevent.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (mask.charAt(0) == " ") c = mask.substring(1, mask.length);
      if (mask.indexOf(nameEQ) == 0) return mask.substring(nameEQ.length, mask.length);
    }
    return null;
  },
  fireEvent: function (label, eventName) {
    let device = window.innerWidth <= 420 ? "mobile" : window.innerWidth <= 768 ? "tablet" : "desktop"
    if (options.sendEvent) {
      if (label === "exit") {
        setLevel(LEVEL_EXIT, eventName + "(" + device + ")")
      } else if (label === "join") {
        setLevel(LEVEL_JOIN, eventName + "(" + device + ")")
      }
    }
  },
};

let displayHtml = function () {
  const html = `
  <div class="`+ smplObj.scenarioName + `">
    <div class="smpl_container">
      <span class="`+ smplObj.scenarioName + `_close">&times;</span>
      <section class="`+ smplObj.scenarioName + `_header">
        <h3>`+ smplObj.header + `</h3>
      </section>
      <section class="`+ smplObj.scenarioName + `_content">
        <form action="post" method="post">
          <label for="name" class="textField">
            <input class="form-text required form-control" type="text"
              id="name" name="isim" value="" size="60" maxlength="255" placeholder="Ad Soyad"
              required="required" aria-required="true">
          </label>
          <label for="phone" class="textField">
            <input data-inputmask-mask="9999-999-99-99"
              class="form-text required form-control" minlength="6"
              type="text" id="phone"
              name="telefon_numarasi" value="" size="60" maxlength="16" placeholder="Telefon Numarası"
              required="required" aria-required="true">
          </label>
          <label for="email" class="textField">
            <input
              class="js-webform-input-mask form-text required form-control"
              type="text" id="email" name="email_adresi"
              value="" size="60" maxlength="255" placeholder="E posta" required="required" aria-required="true">
          </label>
          <section class="`+ smplObj.scenarioName + `_submit">
            <button class="form-submit btn" data-disable-refocus="true" type="submit" value="Başvur">Başvur</button>
          </section>
          <section class="`+ smplObj.scenarioName + `_footer">
            <label for="edit-terms-of-service" class="control-label option js-form-required form-required">
              <input data-webform-required-error="Devam etmek için lütfen bu kutucuğu işaretleyin"
                data-drupal-selector="edit-terms-of-service" class="form-checkbox required" type="checkbox"
                id="edit-terms-of-service" name="terms_of_service" value="1" required="required" aria-required="true">
              <span>
                <a href="https://multineevent.com.tr/kisisel-verilerin-korunmasi" target="_blank">Aydınlatma Metni</a>'ni okudum
              </span>
            </label>
            <label for="edit-term" class="control-label option js-form-required form-required">
              <input data-webform-required-error="Devam etmek için lütfen bu kutucuğu işaretleyin."
                data-drupal-selector="edit-term" class="form-checkbox required" type="checkbox" id="edit-term"
                name="term" value="1" required="required" aria-required="true">
                <span>Tarafımca sunulan verilerin, Multinet Up, Multinet Up iştirakleri ve/veya sözleşmeli iş ortakları ile paylaşılmasına, bu bilgilerin tanıtım, promosyon, bilgilendirme vb. amaçlarla kullanılmasına ve bu kapsamda tarafıma ticari elektronik ileti gönderilmesine muvafakat ediyorum.</span>
            </label>
          </section>
        </form>
      </section>
      <p class="smpl_error smpl_dnone"></p>
    </div>
  </div>`
  return html;
}
let controller = function () {
  const domObj = {
    error: jQuery(smplObj.scenarioClass + " .smpl_error"),
    inputs: jQuery(smplObj.scenarioClass + "_content input"),
    nameInput: jQuery(smplObj.scenarioClass + "_content input#name"),
    phoneInput: jQuery(smplObj.scenarioClass + "_content input#phone"),
    emailInput: jQuery(smplObj.scenarioClass + "_content input#email"),
    close: jQuery(smplObj.scenarioClass + "_close"),
    submit: jQuery(smplObj.scenarioClass + "_submit button")
  }
  let formatPhoneNumber = function (value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 5) return phoneNumber;
    if (phoneNumberLength < 8) {
      return phoneNumber.slice(0, 4) + "-" + phoneNumber.slice(4);
    }
    if (phoneNumberLength < 10) {
      return phoneNumber.slice(0, 4) + "-" + phoneNumber.slice(4, 7) + "-" + phoneNumber.slice(7, 9);
    }
    return phoneNumber.slice(0, 4) + "-" + phoneNumber.slice(4, 7) + "-" + phoneNumber.slice(7, 9) + "-" + phoneNumber.slice(9, 11);
  }
  const formatter = function (_this, event) {
    if (event.keyCode >= 48 || event.keyCode <= 57) {
      const inputValue = _this.val()
      console.log(inputValue);
      return formatPhoneNumber(inputValue);
    }
    else {
      if ((event.keyCode === 8 || event.keyCode === 0 || event.keyCode === 13)) {
        return true
      } else {
        return false
      }
    }
  }
  let getData = function () {
    return {
      name: domObj.nameInput.val(),
      phone: domObj.phoneInput.val(),
      email: domObj.emailInput.val()
    }
  }
  const validation = function (item, value) {
    let regexPattern = ""
    if (item === "phone") {
      regexPattern = new RegExp(
        /^([0])([0-9]{3})-([0-9]{3})-([0-9]{2})-([0-9]{2})$/
      );
    }
    else {
      regexPattern = new RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    }
    return !regexPattern.test(value)
  }
  const errorControl = function (data) {
    if (data.name === "" || data.phone === "" || data.email === "") {
      return options.emptyArea
    }
    if (data.phone.replace(/[^\d]/g, "").length < 11) {
      return options.phoneMissingValue
    }
    if (validation("phone", data.phone)) {
      return options.phoneWrongFormat
    }
    if (validation("email", data.email)) {
      return options.email
    }
  }
  domObj.inputs.on("keypress keydown keyup click focus complete blur", function (event) {
    if (!domObj.error.hasClass("smpl_dnone")) {
      domObj.error.addClass("smpl_dnone")
    }
    const emailHolder = "_@_._"
    const phoneHolder = "____-___-__-__"
    const _this = jQuery(this);
    if (event.type === "click" || event.type === "focus") {
      return _this.attr("id") === "phone"
        ? _this.attr("placeholder", phoneHolder)
        : _this.attr("id") === "email" ? _this.attr("placeholder", emailHolder) : ""
    } else {
      if (_this.attr("id") === "phone") {
        let finalValue = formatter(_this, event)
        return finalValue === false ? false : finalValue === true ? true : _this.val(finalValue);
      }
      else if (_this.attr("id") === "email") {
        _this.inputmask("email");
      }
    }
  })
  domObj.submit.click(function () {
    const data = getData()
    if (!errorControl(data)) {

    }
    else {
      const Accname = data.name;
      const Accemail = data.email;
      const AccTel = data.phone;
      const AccContact = data.name;

      const settings = {
        async: true,
        crossDomObjain: true,
        url:  "https://crmdevapps.multinet.com.tr/Multinet.Crm.WebServices.SalesUpApi/SalesUp/SU015CreateLead",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          Token: "D5164D02-C7E3-410D-82DA-850D9141F18A",
        },
        data: JSON.stringify({
          Lead: {
            InterestedProducts: [
              {
                ProductCode: "92000000157",
                MainProductCode: "24",
              },
            ],
            AccountName: Accname,
            AccountEmailAddress: Accemail,
            AccountTelephone: AccTel,
            ContactFirstName: Accname,
            ContactLastName: Accname,
            ContactEmailAddress: Accemail,
            ContactMobilePhone: AccTel,
            CompanyVehicleCount: 1,
            CardCount: 1,
            MultinetCardNo: "XXXXX",
            PersonFullName: Accname,
            PersonEmailAddress: AccTel,
            PersonMobilePhone: AccTel,
            LeadSource: 100000000,
            SourceWebSite: 1,
            UtmCampaign: "",
            UtmTerm: "",
            UtmSource: "",
            Note: "Blog %50 scroll",
            ClickId: "",
          },
          Token: "D5164D02-C7E3-410D-82DA-850D9141F18A",
        }),
      };

     /*  jQuery.ajax(settings).done(function (response) {
        console.log(response);
      }); */
    }
  })
}

jQuery("body").append(displayHtml());
controller()
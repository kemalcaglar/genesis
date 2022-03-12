var sms = 0;
var mail = 0;
jQuery(".check-area label").each(function () {
    if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
        if (jQuery(this).find("div").hasClass("checked")) {
            sms = 1;
        }
    }
    if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
        if (jQuery(this).find("div").hasClass("checked")) {
            mail = 1;
        }
    }
})
var count = 0;
jQuery(".four-button.inline").each(function () {
    if (jQuery(this).text().trim() == "Kaydet") {
        jQuery(this).click(function () {
            jQuery(".check-area label").each(function () {
                if (jQuery(this).find("span").text().trim() == "SMS almak istiyorum") {
                    if (jQuery(this).find("div").hasClass("checked")) {
                        count++
                        if (sms !== 1) {
                            setLevel(LEVEL_JOIN, "click-sms");
                        }
                    }
                }
                if (jQuery(this).find("span").text().trim() == "E-posta almak istiyorum") {
                    if (jQuery(this).find("div").hasClass("checked")) {
                        count++
                        if (mail !== 1) {
                            setLevel(LEVEL_JOIN, "click-mail");
                        }
                    }
                }
                if (count == 2) {
                    setLevel(LEVEL_JOIN, "click-saveFullCheckBox")
                }
            })
        })
    }
})
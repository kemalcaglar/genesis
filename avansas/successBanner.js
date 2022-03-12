(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Success_Banner_Desktop")) {
        return false
    }
    EightDigits.sf.prototype.Success_Banner_Desktop = function () {
        var config = {
            scenarioname: "Success_Banner_Desktop",
            analytics: "Success_Banner_Desktop",
            controlgroup: 0
        };
        var main = {
            "factory": function () {
                return true;
            }
        };
        main.factory.prototype = {
            random: function () {
                var randomVal = 0;
                var randomControlRatio = config.controlgroup > 50 ? config.controlgroup : 100 - config.controlgroup;
                if (EightDigits.utils.getCookie('_ed_' + config.scenarioname) == null) {
                    randomVal = Math.floor((Math.random() * 10000) + 1);
                    EightDigits.utils.setCookie('_ed_' + config.scenarioname, randomVal);
                } else {
                    randomVal = parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname));
                }
                if (randomVal <= 100 * randomControlRatio) {
                    return true;
                } else {
                    return false;
                }
            },
            start: function () {
                if (jQuery(".received.info-status").text().trim() == "Siparişiniz Oluşturuldu.") {
                    if (jQuery("#header-main .info").text().trim() !== "GİRİŞ YAP") {
                        if (dataLayer[1].event === "userInfo" ? true : false) {
                            var dataUser = dataLayer[1].userInfo
                        } else if (dataLayer[2].event === "userInfo" ? true : false) {
                            var dataUser = dataLayer[2].userInfo
                        }
                        if (dataUser.user_email_optin === true && dataUser.user_sms_optin === false || dataUser.user_email_optin === false && dataUser.user_sms_optin === true || dataUser.user_email_optin === false && dataUser.user_sms_optin === false) {
                            if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 3333) {
                                var img =
                                    'https://cdn.8digits.com/log/r/9b6de499-d2c5-4da9-a27c-2a6d3b16051f.jpeg';
                                console.log("evet1")
                            }
                            else if (parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) < 6666 && parseInt(EightDigits.utils.getCookie('_ed_' + config.scenarioname)) > 3333) {
                                var img =
                                    'https://cdn.8digits.com/log/r/68bb6625-15b1-4bce-936d-965a456d89bd.jpeg';
                                console.log("evet2")
                            }
                            else {
                                var img =
                                    'https://cdn.8digits.com/log/r/313caa68-12a2-4552-bd78-5f431cf8a8ea.jpeg';
                                console.log("evet3")
                            }
                            var html = `
                    <div class="smpl-success-banner">
                        <a href="https://www.avansas.com/my-account/update-profile">
                            <img src="`+ img + `" style="height: auto;width: 100%;">
                        </a>
                    </div>`
                            jQuery(".info-nof .des").eq(0).after(html);
                        }
                    }
                }
            },
            control: function () {
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {
                    if (!EightDigits.utils.getCookie('ed-' + config.analytics + '-notshown')) {
                        EightDigits.analytics.sendEvent(config.analytics, 'NotShown');
                        EightDigits.utils.setCookie('ed-' + config.analytics + '-notshown', 'on')
                    }
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
    var _ed_Success_Banner_Desktop = new EightDigits.sf();
    _ed_Success_Banner_Desktop.Success_Banner_Desktop();
})();
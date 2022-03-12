var OneSignal = window.OneSignal || [];
if (window.location.pathname == "/multinetli-yap-kazan") {
    OneSignal.push(["sendTag", "form", "true"]);
}
if (window.location.pathname == "/musteri-oneri-formu-message") {
    OneSignal.push(function () { OneSignal.deleteTag("form"); });
}
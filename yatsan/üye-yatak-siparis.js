var customerForBeds = [
    "3101282",
    "3101281",
    "3101277",
    "3101271",
    "3101254",
    "3101179",
    "3101177",
    "3101176",
    "3101168",
    "3100157",
    "3099152",
    "3099149",
    "3099146",
    "3099142",
    "3099107",
    "3099097",
    "3099091",
    "3098990",
    "3098966",
    "3098953",
    "3098953",
    "3098933",
    "3098921",
    "3098906",
    "3098899",
    "3098892",
    "3098863",
    "3097802",
    "3097796",
    "3097777",
    "3097767",
    "3097765",
    "3097749",
    "3097731",
    "3097721",
    "3097716",
    "3097716",
    "3097674",
    "3097661",
    "3097619",
    "3097595",
    "3097588",
    "3097554",
    "3097551",
    "3097528",
    "3097527",
    "3097502",
    "3097456",
    "3097288",
    "3096889",
    "3095625",
    "3095625",
    "3092783",
    "3101286",
    "3101256",
    "3101237",
    "3101213",
    "3101169",
    "3099124",
    "3099108",
    "3099045",
    "3099044",
    "3099044",
    "3099039",
    "3099029",
    "3099014",
    "3099014",
    "3098994",
    "3098965",
    "3098923",
    "3098897",
    "3098895",
    "3098890",
    "3098870",
    "3098861",
    "3097818",
    "3097818",
    "3097818",
    "3097818",
    "3097810",
    "3097777",
    "3097777",
    "3097777",
    "3097762",
    "3097762",
    "3097762",
    "3097721",
    "3097565",
    "3097563",
    "3097515",
    "3097507",
    "3097434",
    "3091816",
  ];
  /* yatak aldı ve kullanıcı kaydı var */
  function htmlHeader(){
  var html = `<div class="header-top-slider">                            
  <div  class="promo-bar" style="background: #d4c6bb; height:30px;" data-parent="2187" tabindex="2187">
      <div class="slider owl-carousel owl-theme owl-loaded owl-drag">
          <div class="owl-stage-outer">
              <span>YATAĞINIZIN GARANTİSİ <strong>5 YILDIR</strong></span>
          </div>
      </div>
  </div>
</div>`
jQuery("#headerin").before(html);
}
  var isUser = jQuery("#usercontent #usericon").hasClass("userin");
  if (isUser) {
    jQuery(dataLayer).each((index, item) => {
      if (item.userId) {
        for (let index = 0; index < customerForBeds.length; index++) {
          const element = customerForBeds[index];
          if (element == item.userId) {
           htmlHeader();
            return;
          } else {
          }
        }
      }
    });
  }
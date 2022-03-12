var arr = [
  "Adam & Eve",
  "Adora Resort Hotel",
  "Limak Atlantis De Luxe Hotel & Resort",
  "Siam Elegance Hotels & Spa",
  "Orange County Resort Hotel Belek",
  "Crystal Waterworld Resort & Spa",
  "Aquaworld Belek By Mp Hotels",
  "Crystal Club World Of Colours",
  "Kirman Belazur Resort & Spa",
  "Laren Seaside Hotel & Spa",
  "Laren Family Hotel & Spa",
  "Antalya Hotel Resort & Spa",
  "The Marmara Antalya",
  "Akra V",
  "Akra Hotel",
  "Adalya Elite Lara Hotel",
  "Grand Park Lara",
  "Aska Lara Resort & Spa",
  "Royal Holiday Palace Hotel",
  "Limak Lara De Luxe Hotel & Resort",
  "Royal Holiday Palace Hotel",
  "Royal Wings Hotel",
  "The Land of Legends Kingdom Otel",
  "Zeynep Hotel",
  "Robinson Club Nobilis",
  "Regnum Carya",
  "Sueno Hotels Deluxe Belek",
  "Ela Quality Resort Belek",
  "Susesi Luxury Resort",
  "Sueno Hotels Golf Belek",
  "Calista Luxury Resort",
  "Papillon Ayscha",
  "Crystal Family Resort & Spa",
  "Crystal Paraiso Verde Resort & Spa",
  "Crystal Tat Beach Golf Resort & Spa",
  "Turka Loca City Hotel",
  "Lara Hotel",
  "Let'stay Boutique Hotel",
  "Club Hotel Falcon",
]

jQuery(".booking-list .booking-item .basket-flight-header").each(function (index, product) {
  arr.forEach(function (item) {
    if (jQuery('h4:eq(0)', product).text().trim() === item) {
var html = `<div class="smpl-tema-banner" style="margin-bottom:20px"><a href="https://www.setur.com.tr/the-land-of-legends-tema-park">
<img src="https://i.imgyukle.com/2021/03/18/Nz4HPP.jpg"></img></a>
</div>`
if(jQuery(".smpl-tema-banner").length == 0 ){
  jQuery(".m-cart-content.row").after(html);
}
    }
  });
})
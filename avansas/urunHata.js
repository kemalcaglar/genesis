(function () {
    if (EightDigits.sf.prototype.hasOwnProperty("Exit_Urun_Oneri")) {
        return false
    }
    EightDigits.sf.prototype.Exit_Urun_Oneri = function () {

        var config = {
            scenarioname: "Exit_Urun_Oneri",
            analytics: "Exit_Urun_Oneri_Urun_Detay",
            tag:"",
            controlgroup: 0
        };

        var main = {
            "factory": function () {
                return true;
            }
        };
        var sessionList = [];
        var productList = {
            "53258": {  // Asıl Ürünün Bilgileri
                id: "53258",
                count: 0,
                name: "EDDİNG 344 FOSFORLU KALEM TEKLİ PEMBE",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-pembe-p-53258",
                image: "https://cdn2.avansas.com/urun/53258/edding-344-fosforlu-kalem-pembe-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Pembe renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63905",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 904 FOSFORLU KALEM PEMBE",
                    url: "https://www.avansas.com/avansas-904-fosforlu-kalem-pembe-p-63905",
                    image: "https://cdn2.avansas.com/urun/63905/avansas-904-fosforlu-kalem-pembe-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        "1 - 4.5 mm dayanıklı uç kalınlığı",
                        "500 metre yüksek performanslı yazım uzunluğu",
                        "Toksik madde içermez",
                        "Canlı pembe renk",
                        "Hızlı kuruyan kalıcı mürekkep"
        
                    ]    
                }       
            },
            "53261": {  // Asıl Ürünün Bilgileri
                id: "53261",
                count: 0,
                name: "EDDİNG 344 FOSFORLU KALEM TEKLİ SARI",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-sari-p-53261",
                image: "https://cdn2.avansas.com/urun/53261/edding-344-fosforlu-kalem-sari-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Sarı renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63907",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 904 FOSFORLU KALEM SARI",
                    url: "https://www.avansas.com/avansas-904-fosforlu-kalem-sari-p-63907",
                    image: "https://cdn2.avansas.com/urun/63907/avansas-904-fosforlu-kalem-sari-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 - 4.5 mm dayanıklı uç kalınlığı',
                        '500 metre yüksek performanslı yazım uzunluğu',
                        'Toksik madde içermez',
                        'Canlı sarı renk',
                        'Hızlı kuruyan kalıcı mürekkep'
        
                    ]
        
                }
        
            },
            "56402": {  // Asıl Ürünün Bilgileri
                id: "56402",
                count: 0,
                name: "EDDİNG 344 FOSFORLU KALEM TEKLİ TURUNCU",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-turuncu-p-56402",
                image: "https://cdn2.avansas.com/urun/56402/edding-344-fosforlu-kalem-turuncu-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Turuncu renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63904",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 904 FOSFORLU KALEM TURUNCU",
                    url: "https://www.avansas.com/avansas-904-fosforlu-kalem-turuncu-p-63904",
                    image: "https://cdn2.avansas.com/urun/63904/avansas-904-fosforlu-kalem-turuncu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 - 4.5 mm dayanıklı uç kalınlığı',
                        '500 metre yüksek performanslı yazım uzunluğu',
                        'Toksik madde içermez',
                        'Canlı sarı renk',
                        'Hızlı kuruyan kalıcı mürekkep'
        
                    ]
        
                }
        
            },
        
            "53262": {  // Asıl Ürünün Bilgileri
                id: "53262",
                count: 0,
                name: "EDDİNG 344 FOSFORLU KALEM TEKLİ YEŞİL",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-pembe-p-53258?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53258&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53258/edding-344-fosforlu-kalem-pembe-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Pembe renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63903",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 904 FOSFORLU KALEM YEŞİL",
                    url: "https://www.avansas.com/avansas-904-fosforlu-kalem-yesil-p-63903",
                    image: "https://cdn2.avansas.com/urun/63903/avansas-904-fosforlu-kalem-yesil-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 - 4.5 mm dayanıklı uç kalınlığı',
                        '500 metre yüksek performanslı yazım uzunluğu',
                        'Toksik madde içermez',
                        'Canlı yeşil renk',
                        'Hızlı kuruyan kalıcı mürekkep'
        
                    ]
        
                }
        
            },
        
        
            "63082": {  // Asıl Ürünün Bilgileri
                id: "63082",
                count: 0,
                name: "EDDİNG 260-02 TAHTA KALEMİ TEKLİ KIRMIZI",
                url: "https://www.avansas.com/edding-260-tahta-kalemi-kirmizi-p-63082?_sgm_campaign=scn_81bbde4f70000&_sgm_source=63082&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/63082/edding-260-tahta-kalemi-kirmizi-detail-1.jpg",
                properties: [
                    "1.5 - 3 mm çizgi kalınlığı",
                    "Yumuşak yazım kalitesi",
                    "Yuvarlak uçlu",
                    "Uygun fiyat avantajı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63894",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 906 BEYAZ TAHTA KALEMİ KIRMIZI",
                    url: "https://www.avansas.com/avansas-906-tahta-kalemi-kirmizi-p-63894",
                    image: "https://cdn2.avansas.com/urun/63894/avansas-906-tahta-kalemi-kirmizi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '4 mm yuvarlak uçlu',
                        '450 metre yazım uzunluğu',
                        'Kolay silinebilir',
                        'Toksik madde içermez',
                        '3.5 cc mürekkep hacmi'
        
                    ]
        
                }
        
            },
            "63083": {  // Asıl Ürünün Bilgileri
                id: "63083",
                count: 0,
                name: "EDDİNG 260-03 TAHTA KALEMİ TEKLİ MAVİ",
                url: "https://www.avansas.com/edding-260-tahta-kalemi-mavi-p-63083?_sgm_campaign=scn_81bbde4f70000&_sgm_source=63083&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/63083/edding-260-tahta-kalemi-mavi-detail-1.jpg",
                properties: [
                    "1.5 - 3 mm çizgi kalınlığı",
                    "Yumuşak yazım kalitesi",
                    "Yuvarlak uçlu",
                    "Uygun fiyat avantajı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63900",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 906 BEYAZ TAHTA KALEMİ MAVİ",
                    url: "https://www.avansas.com/avansas-906-tahta-kalemi-mavi-p-63900",
                    image: "https://cdn2.avansas.com/urun/63900/avansas-906-tahta-kalemi-mavi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '4 mm yuvarlak uçlu',
                        '450 metre yazım uzunluğu',
                        'Kolay silinebilir',
                        'Toksik madde içermez',
                        '3.5 cc mürekkep hacmi'
        
                    ]
        
                }
        
            },
            "62809": {  // Asıl Ürünün Bilgileri
                id: "62809",
                count: 0,
                url: "https://www.avansas.com/edding-260-tahta-kalemi-siyah-p-62809?_sgm_campaign=scn_81bbde4f70000&_sgm_source=62809&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/62809/edding-260-tahta-kalemi-siyah-detail-1.jpg",
                properties: [
                    "1.5 - 3 mm çizgi kalınlığı",
                    "Yumuşak yazım kalitesi",
                    "Yuvarlak uçlu",
                    "Uygun fiyat avantajı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63901",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 906 BEYAZ TAHTA KALEMİ SİYAH",
                    url: "https://www.avansas.com/avansas-906-tahta-kalemi-siyah-p-63901",
                    image: "https://cdn2.avansas.com/urun/63901/avansas-906-tahta-kalemi-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '4 mm yuvarlak uçlu',
                        'Yumuşak yazım kalitesi',
                        '3.5 cc mürekkep hacmi',
                        'Toksik madde içermeyen mürekkep',
                        'Kolay silinebilir'
        
                    ]
        
                }
        
            },
            "53243": {  // Asıl Ürünün Bilgileri
                id: "53243",
                count: 0,
                name: "EDDİNG 344 FOSFORLU KALEM TEKLİ PEMBE",
                url: "https://www.avansas.com/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-kirmizi-p-53243?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53243&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53243/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-kirmizi-detail-1.jpg",
                properties: [
                    '1 mm uç',
                    'Cam, plastik yüzeylerde kullanılabilir',
                    'Gözeneksiz yüzeylerden alkolle silinebilir',
                    'Düz yazım rahatlığı',
                    'Silinmeyen,suya dayanıklı mürekkep'
        
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66514",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabihttps://www.avansas.com/avansas-multipen-m-asetat-kalemi-1-mm-uclu-kirmizi-p-66514t
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (M) KRMZ",
                    url: "https://www.avansas.com/avansas-multipen-m-asetat-kalemi-1-mm-uclu-kirmizi-p-66514",
                    image: "https://cdn2.avansas.com/urun/66514/avansas-multipen-m-asetat-kalemi-1-mm-uclu-kirmizi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 mm uç',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Düz yazım rahatlığı',
                        'Gözeneksiz yüzeylerden alkolle silinebilir'
        
                    ]
        
                }
        
            },
        
            "53245": {  // Asıl Ürünün Bilgileri
                id: "53245",
                count: 0,
                name: "EDDİNG 142M PER.ASETAT CD KALEMİ MAVİ",
                url: "https://www.avansas.com/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-mavi-p-53245?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53245&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53245/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-mavi-detail-1.jpg",
                properties: [
                    "1 mm uç",
                    "Sağlığa zararlı madde içermez",
                    "Silinmeye karşı dayanıklı",
                    "Su bazlı pigment mürekkep"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66515",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (M) MAVİ",
                    url: "https://www.avansas.com/avansas-multipen-m-asetat-kalemi-1-mm-uclu-mavi-p-66515",
                    image: "https://cdn2.avansas.com/urun/66515/avansas-multipen-m-asetat-kalemi-1-mm-uclu-mavi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 mm uç',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Gözeneksiz yüzeylerden alkolle silinebilir',
                        'Düz yazım rahatlığı'
        
                    ]
        
                }
        
            },
            "53246": {  // Asıl Ürünün Bilgileri
                id: "53246",
                count: 0,
                name: "EDDİNG 142M PER.ASETAT CD KALEMİ SİYAH",
                url: "https://www.avansas.com/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-siyah-p-53246?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53246&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53246/edding-142-m-permanent-asetat-cd-kalemi-1-mm-uclu-siyah-detail-1.jpg",
                properties: [
                    "1 mm uç",
                    "Sağlığa zararlı madde içermez",
                    "Su bazlı pigment mürekkep",
                    "Silinmeye karşı dayanıklı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66516",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (M) SİYAH",
                    url: "https://www.avansas.com/avansas-multipen-m-asetat-kalemi-1-mm-uclu-siyah-p-66516",
                    image: "https://cdn2.avansas.com/urun/66516/avansas-multipen-m-asetat-kalemi-1-mm-uclu-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 mm uç',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Gözeneksiz yüzeylerden alkolle silinebilir',
                        'Düz yazım rahatlığı'
        
                    ]
        
                }
        
            },
        
            "52199": {  // Asıl Ürünün Bilgileri
                id: "52199",
                count: 0,
                name: "EDDİNG 142M PER.ASETAT CD KALEMİ SİYAH",
                url: "https://www.avansas.com/edding-140-s-asetat-kalemi-0-3-mm-uclu-kirmizi-p-52199?_sgm_campaign=scn_81bbde4f70000&_sgm_source=52199&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/52199/edding-140-s-asetat-kalemi-0-3-mm-uclu-kirmizi-detail-1.jpg",
                properties: [
                    "0.3 mm uç",
                    "Silinmeye karşı dayanıklı",
                    "Su bazlı pigment mürekkep",
                    "Yumuşak yazım kalitesi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66518",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (S) KRMZ",
                    url: "https://www.avansas.com/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-kirmizi-p-66518",
                    image: "https://cdn2.avansas.com/urun/66518/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-kirmizi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '0.3 mm uç',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Düz yazım rahatlığı',
                        'Gözeneksiz yüzeylerden alkolle silinebilir'
        
                    ]
        
                }
        
            },
            "53241": {  // Asıl Ürünün Bilgileri
                id: "53241",
                count: 0,
                name: "EDDİNG 140 S ASETAT KALEMİ TEKLİ MAVİ",
                url: "https://www.avansas.com/edding-140-s-asetat-kalemi-0-3-mm-uclu-mavi-p-53241?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53241&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53241/edding-140-s-asetat-kalemi-0-3-mm-uclu-mavi-detail-1.jpg",
                properties: [
                    "0.3 mm uç",
                    "Silinmeye karşı dayanıklı",
                    "Su bazlı pigment mürekkep",
                    "Yumuşak yazım kalitesi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66519",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (S) MAVİ",
                    url: "https://www.avansas.com/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-mavi-p-66519",
                    image: "https://cdn2.avansas.com/urun/66519/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-mavi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '0.3 mm uç',
                        'Düz yazım rahatlığı',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Gözeneksiz yüzeylerden alkolle silinebilir'
        
                    ]
        
                }
        
            },
            "53242": {  // Asıl Ürünün Bilgileri
                id: "53242",
                count: 0,
                name: "EDDİNG 140 S ASETAT KALEMİ TEKLİ SİYAH",
                url: "https://www.avansas.com/edding-140-s-asetat-kalemi-0-3-mm-uclu-siyah-p-53242?_sgm_campaign=scn_81bbde4f70000&_sgm_source=53242&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/53242/edding-140-s-asetat-kalemi-0-3-mm-uclu-siyah-detail-1.jpg",
                properties: [
                    "0.3 mm uç",
                    "Silinmeye karşı dayanıklı",
                    "Su bazlı pigment mürekkep",
                    "Yumuşak yazım kalitesi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66520",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS MULTIPEN ASETAT KALEMİ (S) SİYAH",
                    url: "https://www.avansas.com/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-siyah-p-66520",
                    image: "https://cdn2.avansas.com/urun/66520/avansas-multipen-s-asetat-kalemi-0-3-mm-uclu-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '0.3 mm uç',
                        'Cam, plastik yüzeylerde kullanılabilir',
                        'Silinmeyen,suya dayanıklı mürekkep',
                        'Gözeneksiz yüzeylerden alkolle silinebilir',
                        'Düz yazım rahatlığı'
        
                    ]
        
                }
        
            },
            "56920": {  // Asıl Ürünün Bilgileri
                id: "56920",
                count: 0,
                name: "EDDİNG 300-03 PER.MARK.10LU MAVİ",
                url: "https://www.avansas.com/edding-300-marker-kalem-yuvarlak-uclu-mavi-10-lu-paket-p-56920?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56920&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56920/edding-300-marker-kalem-yuvarlak-uclu-mavi-10-lu-paket-detail-1.jpg",
                properties: [
                    "1.5-3 mm yuvarlak uç",
                    "Dağılmaz ve çabuk kurur",
                    "Işığa ve suya dayanıklı",
                    "Tüm zeminlerde kullanılabilir",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63909",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 907 KOLİ KALEMİ YUVARLAK UÇ MAVİ",
                    url: "https://www.avansas.com/avansas-907-marker-kalem-yuvarlak-uclu-mavi-p-63909",
                    image: "https://cdn2.avansas.com/urun/63909/avansas-907-koli-kalemi-yuvarlak-uclu-mavi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1.5 mm yuvarlak uç',
                        '450 metre yazım uzunluğu',
                        'Tekli mavi',
                        'Toksik madde içermez',
                        'Yumuşak yazım'
        
                    ]
        
                }
        
            },
        
            "56918": {  // Asıl Ürünün Bilgileri
                id: "56918",
                count: 0,
                name: "EDDİNG 300-01 PER.MARK.10LU SİYAH",
                url: "https://www.avansas.com/edding-300-marker-kalem-yuvarlak-uclu-siyah-10-lu-paket-p-56918?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56918&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56918/edding-300-marker-kalem-yuvarlak-uclu-siyah-10-lu-paket-detail-1.jpg",
                properties: [
                    "1.5 - 3 mm yuvarlak uç",
                    "Tüm zeminlerde kullanılabilir",
                    "Dağılmaz ve çabuk kurur",
                    "10'lu paket",
                    "Işığa ve suya dayanıklı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63908",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS 907 KOLİ KALEMİ YUVARLAK UÇ SİY.",
                    url: "https://www.avansas.com/avansas-907-marker-kalem-yuvarlak-uclu-siyah-p-63908",
                    image: "https://cdn2.avansas.com/urun/63908/avansas-907-koli-kalemi-yuvarlak-uclu-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1.5 mm yuvarlak uç',
                        '450 metre yazım uzunluğu',
                        'Tekli siyah',
                        'Toksik madde içermez',
                        'Yumuşak yazım'
                    ]
        
                }
        
            },
            "63889": {  // Asıl Ürünün Bilgileri
                id: "63889",
                count: 0,
                name: "Faber Castell Tri Click 1362-3 Versatil Uçlu Kalem 0.7 mm Mor",
                url: "https://www.avansas.com/faber-castell-tri-click-1362-3-versatil-uclu-kalem-0-7-mm-mor-p-63889?_sgm_campaign=scn_81bbde4f70000&_sgm_source=63889&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/63889/faber-castell-tri-click-1362-3-versatil-uclu-kalem-0-7-mm-mor-detail-1.jpg",
                properties: [
                    "0.7 mm çelik uç",
                    "Çevirmeli çıkan silgi",
                    "Şeffaf gövdeli",
                    "Ergonomik üçgen tasarım"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "64028",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS STYLE VERSATİL KALEM 0.7 BORDO",
                    url: "https://www.avansas.com/avansas-style-versatil-uclu-kalem-0-7-mm-bordo-p-64028",
                    image: "https://cdn2.avansas.com/urun/64028/avansas-style-versatil-uclu-kalem-0-7-mm-bordo-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '0.7 mm çelik uç',
                        'Ergonomik tasarım',
                        'Şık tasarım',
                        'Uygun fiyat avantajı',
        
                    ]
        
                }
        
            },
            "60027": {  // Asıl Ürünün Bilgileri
                id: "60027",
                count: 0,
                name: "MAS 9020 BION ATAŞ NO:2 100'LÜ",
                url: "https://www.avansas.com/mas-9020-bion-atas-25-mm-no-2-100-lu-paket-p-60027?_sgm_campaign=scn_81bbde4f70000&_sgm_source=60027&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/60027/mas-9020-bion-atas-25-mm-no-2-100-lu-paket-detail-1.jpg",
                properties: [
                    "25 mm ebat",
                    "Galvaniz kaplı",
                    "Sağlam ve dayanıklı",
                    "Ekonomik 100'lü kutu"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81903",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:2 SILVER ATAŞ 25 MM",
                    url: "https://www.avansas.com/avansas-atas-25-mm-no-2-100-lu-paket-p-81903",
                    image: "https://cdn2.avansas.com/urun/81903/avansas-no-2-silver-atas-25-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '25 mm ebat',
                        'Ekonomik 100\'lü kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
        
                    ]
        
                }
        
            },
        
            "60028": {  // Asıl Ürünün Bilgileri
                id: "60028",
                count: 0,
                name: "MAS 9030 BION ATAŞ NO:3 100'LÜ",
                url: "https://www.avansas.com/mas-9030-bion-atas-28-mm-no-3-100-lu-paket-p-60028?_sgm_campaign=scn_81bbde4f70000&_sgm_source=60028&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/60028/mas-9030-bion-atas-28-mm-no-3-100-lu-paket-detail-1.jpg",
                properties: [
                    "28 mm ebat",
                    "Galvaniz kaplı",
                    "Sağlam ve dayanıklı",
                    "Ekonomik 100'lü kutu"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81904",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:3 SILVER ATAŞ 28 MM",
                    url: "https://www.avansas.com/avansas-atas-28-mm-no-3-100-lu-paket-p-81904",
                    image: "https://cdn2.avansas.com/urun/81904/avansas-no-3-silver-atas--28-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '28 mm ebat',
                        'Ekonomik 100\'lü kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
                    ]
        
                }
        
            },
        
            "60029": {  // Asıl Ürünün Bilgileri
                id: "60029",
                count: 0,
                name: "MAS 9040 BION ATAŞ NO:4 80'Lİ",
                url: "https://www.avansas.com/mas-9040-bion-atas-33-mm-no-4-80-li-paket-p-60029?_sgm_campaign=scn_81bbde4f70000&_sgm_source=60029&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/60029/mas-9040-bion-atas-50-mm-no-4-80-li-paket-detail-1.jpg",
                properties: [
                    "33 mm ebat",
                    "Galvaniz kaplı",
                    "Sağlam ve dayanıklı",
                    "Ekonomik 80'li paket"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81905",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:4 SILVER ATAŞ 33 MM",
                    url: "https://www.avansas.com/avansas-atas-33-mm-no-4-80-li-paket-p-81905",
                    image: "https://cdn2.avansas.com/urun/81905/avansas-no-4-silver-atas--33-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '33 mm ebat',
                        'Ekonomik 80\'li kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
        
                    ]
        
                }
        
            },
            "60030": {  // Asıl Ürünün Bilgileri
                id: "60030",
                count: 0,
                name: "MAS 9050 BION ATAŞ NO:5 50'Lİ",
                url: "https://www.avansas.com/mas-9050-bion-atas-50-mm-no-5-50-li-paket-p-60030?_sgm_campaign=scn_81bbde4f70000&_sgm_source=60030&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/60030/mas-9050-bion-atas-50-mm-50-li-paket-detail-1.jpg",
                properties: [
                    "50 sayfa kapasiteli",
                    "Dayanıklı nikel kaplı malzeme",
                    "Metalik renk",
                    "Ekonomik 50'li paket"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81906",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:5 SILVER MEGA ATAŞ 50 MM",
                    url: "https://www.avansas.com/avansas-mega-atas-50-mm-no-5-50-li-paket-p-81906",
                    image: "https://cdn2.avansas.com/urun/81906/avansas-no-5-silver-mega-atas--50-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '50 mm ebat',
                        'Ekonomik 50\'li kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
        
                    ]
        
                }
        
            },
        
            "61028": {  // Asıl Ürünün Bilgileri
                id: "61028",
                count: 0,
                name: "MAS 260 DEV ATAŞ NO:6 30LU",
                url: "https://www.avansas.com/mas-260-dev-atas-60-mm-no-6-30-lu-paket-p-61028?_sgm_campaign=scn_81bbde4f70000&_sgm_source=61028&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/61028/mas-260-dev-atas-60-mm-no-6-30-lu-paket-detail-1.jpg",
                properties: [
                    "60 mm ebat",
                    "Ekonomik 30'lu kutu",
                    "Nikel kaplı metalik renk",
                    "Sağlam ve dayanıklı",
                    "Modern ve şık tasarım"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81907",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:6 SILVER MEGA ATAŞ 60 MM",
                    url: "https://www.avansas.com/avansas-mega-atas-60-mm-no-6-30-lu-paket-p-81907",
                    image: "https://cdn2.avansas.com/urun/81907/avansas-no-6-silver-mega-atas--60-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '60 mm ebat',
                        'Ekonomik 30\'lu kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
        
                    ]
        
                }
        
            },
        
            "52503": {  // Asıl Ürünün Bilgileri
                id: "52503",
                count: 0,
                name: "MAS 270 DEV ATAŞ JUMBO 7 CM",
                url: "https://www.avansas.com/mas-270-dev-atas-jumbo-70-mm-25-li-paket-p-52503?_sgm_campaign=scn_81bbde4f70000&_sgm_source=52503&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/52503/mas-270-dev-atas-jumbo-70-mm-25-li-paket-detail-1.jpg",
                properties: [
                    "70 mm ebat",
                    "Metalik renk",
                    "Sağlam malzeme",
                    "Nikel kaplı malzeme",
                    "25'li paket"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "81908",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS NO:7 SILVER MEGA ATAŞ 75 MM",
                    url: "https://www.avansas.com/avansas-mega-atas-75-mm-no-7-25-li-paket-p-81908",
                    image: "https://cdn2.avansas.com/urun/81908/avansas-no-7-silver-mega-atas--75-mm-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '75 mm ebat',
                        'Ekonomik 25\'li kutu',
                        'Gümüş metalik renk',
                        'Sağlam ve dayanıklı',
                        'Modern ve şık tasarım'
        
                    ]
        
                }
        
            },
        
            "54547": {  // Asıl Ürünün Bilgileri
                id: "54547",
                count: 0,
                name: "TIPP-EX RAPID SIVI DÜZELTİCİ 20 ML",
                url: "https://www.avansas.com/tipp-ex-rapid-sivi-duzeltici-daksil-20-ml-p-54547?_sgm_campaign=scn_81bbde4f70000&_sgm_source=54547&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/54547/tipp-ex-rapid-sivi-duzeltici-daksil-20-ml-detail-1.jpg",
                properties: [
                    "Kapağa monte düzeltme fırçası",
                    "Faks ve fotokopi çekilebilir",
                    "Çabuk kuruma özelliği"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "70090",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS AV1510 SIVI DÜZELTİCİ 15 ML",
                    url: "https://www.avansas.com/avansas-av1510-sivi-duzeltici-daksil-15-ml-p-70090",
                    image: "https://cdn2.avansas.com/urun/70090/avansas-av1510-sivi-duzeltici-daksil-15-ml-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Kapağa monte düzeltme fırçası',
                        'Uygun fiyat avantajı',
                        'Kuruduktan sonra faks ve fotokopi çekilebilir',
                        'Çabuk kuruma özelliği'
        
                    ]
        
                }
        
            },
            "80681": {  // Asıl Ürünün Bilgileri
                id: "80681",
                count: 0,
                name: "Tesa Basic Stick Yapıştırıcı 21 gr",
                url: "https://www.avansas.com/tesa-basic-stick-yapistirici-21-gr-p-80681?_sgm_campaign=scn_81bbde4f70000&_sgm_source=80681&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/80681/tesa-stick-yapistirici-21-gr-tekli-detail-1.jpg",
                properties: [
                    "21 gram",
                    "Solvent içermez",
                    "Karton, kağıt ve fotoğraflar için uygun",
                    "İşyeri ve ev kullanımları için ideal",
                    "Yüksek kalite"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "70283",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS AV1513 STİCK YAPŞTIRICI 22GR 2Lİ",
                    url: "https://www.avansas.com/avansas-av1513-stick-yapistirici-22-gr-2-li-paket-p-70283",
                    image: "https://cdn2.avansas.com/urun/70283/avansas-av1513-stick-yapistirici-22-gr-2-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Stick yapıştırıcı 22 gram',
                        'Güvenlidir',
                        'Yıkanabilir',
                        'Toksik madde içermez'
        
                    ]
        
                }
        
            },
        
            "80682": {  // Asıl Ürünün Bilgileri
                id: "80682",
                count: 0,
                name: "Tesa Basic Stick Yapıştırıcı 36 gr",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-pembe-p-53258",
                image: "https://cdn2.avansas.com/urun/53258/edding-344-fosforlu-kalem-pembe-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Pembe renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "70282",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS AV1514 STİCK YAPŞTIRICI 36GR 2Lİ",
                    url: "https://www.avansas.com/avansas-av1514-stick-yapistirici-36-gr-2-li-paket-p-70282",
                    image: "https://cdn2.avansas.com/urun/70282/avansas-av1514-stick-yapistirici-36-gr-2-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Stick yapıştırıcı 36 gram',
                        'Toksik madde içermez',
                        'Güvenlidir',
                        'Yıkanabilir'
        
                    ]
        
                }
        
            },
        
            "60145": {  // Asıl Ürünün Bilgileri
                id: "60145",
                count: 0,
                name: "LEITZ 5577 ZIMBA TELİ NO:10 1000 Lİ",
                url: "https://www.avansas.com/edding-344-fosforlu-kalem-pembe-p-53258",
                image: "https://cdn2.avansas.com/urun/53258/edding-344-fosforlu-kalem-pembe-detail-1.jpg",
                properties: [
                    "2-5 mm iki farklı dayanıklı uç kalınlığı",
                    "Yüksek performanslı yazım",
                    "Uzun ömürlü sağlam plastik gövde",
                    "Pembe renk",
                    "Yeniden doldurulabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "66547",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS AY16 ZIMBA TELİ  NO:10 1000'Lİ",
                    url: "https://www.avansas.com/avansas-ay16-zimba-teli-no-10-1000-li-kutu-p-66547",
                    image: "https://cdn2.avansas.com/urun/66547/avansas-ay16-zimba-teli-no-10-1-000-li-kutu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'No:10 zımba teli',
                        '1000\'li kutu',
                        'Dayanıklı malzeme ',
                        'Avantajlı fiyat'
        
                    ]
        
                }
        
            },
            "60146": {  // Asıl Ürünün Bilgileri
                id: "60146",
                count: 0,
                name: "LEITZ 5570 ZIMBA TELİ NO:24/6 1000 Lİ",
                url: "https://www.avansas.com/leitz-5570-zimba-teli-no-24-6-1000-li-kutu-p-60146?_sgm_campaign=scn_81bbde4f70000&_sgm_source=60146&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/60146/leitz-5570-zimba-teli-no-24-6-1-000-li-kutu-detail-1.jpg",
                properties: [
                    "Dünya markası",
                    "Kaliteli ürün",
                    "No:24/6 1000'li kutu",
                    "Leitz 5570 zımba teli",
                    "Sağlam ve dayanıklı malzeme"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "65554",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS AY61 ZIMBA TELİ NO:24/6 1000'Lİ",
                    url: "https://www.avansas.com/avansas-ay61-zimba-teli-no-24-6-1000-li-kutu-p-65554",
                    image: "https://cdn2.avansas.com/urun/65554/avansas-ay61-zimba-teli-no-24-6-1-000-li-kutu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'No:24/6 zımba teli',
                        '1000\'li kutu',
                        'Dayanıklı malzeme ',
                        'Avantajlı fiyat'
        
                    ]
        
                }
        
            },
        
            "56410": {  // Asıl Ürünün Bilgileri
                id: "56410",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ BEYAZ",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-beyaz-p-56410?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56410&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56410/leitz-1015-plastik-klasor-dar-a4-beyaz-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık",
                    "5 yıl iç mekanizma garantisi",
                    "180° açılabilen eşsiz patentli mekanizma"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63353",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR BEYAZ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-beyaz-p-63353",
                    image: "https://cdn2.avansas.com/urun/63353/avansas-extra-plastik-klasor-dar-a4-beyaz-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'PVC kaplama',
                        'Avrupa mekanizma',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'Klasörün altını koruyan metal çıtalar '
        
                    ]
        
                }
        
            },
        
            "56411": {  // Asıl Ürünün Bilgileri
                id: "56411",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ GRİ",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-gri-p-56411?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56411&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56411/leitz-1015-plastik-klasor-dar-a4-gri-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "5 yıl iç mekanizma garantisi",
                    "180° açılabilen eşsiz patentli mekanizma",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63350",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR GRİ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-gri-p-63350",
                    image: "https://cdn2.avansas.com/urun/63350/avansas-extra-plastik-klasor-dar-a4-gri-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'Avrupa mekanizma',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma '
        
                    ]
        
                }
        
            },
            "56415": {  // Asıl Ürünün Bilgileri
                id: "56415",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ KIRMIZI",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-kirmizi-p-56415",
                image: "https://cdn2.avansas.com/urun/56415/leitz-1015-plastik-klasor-dar-a4-kirmizi-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "5 yıl iç mekanizma garantisi",
                    "180° açılabilen eşsiz patentli mekanizma",
                    "İç yüzeydeki PE (Kraft / Sülfit) kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63348",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR KIRMIZI",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-kirmizi-p-63348",
                    image: "https://cdn2.avansas.com/urun/63348/avansas-extra-plastik-klasor-dar-a4-kirmizi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'Avrupa mekanizma',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma'
        
                    ]
        
                }
        
            },
        
            "56235": {  // Asıl Ürünün Bilgileri
                id: "56235",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ MAVİ",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-mavi-p-56235",
                image: "https://cdn2.avansas.com/urun/56235/leitz-1015-plastik-klasor-dar-a4-mavi-detail-1.jpg",
                properties: [
                    "5 yıl iç mekanizma garantisi",
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63352",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR MAVİ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-mavi-1-koli-30-klasor-p-80061",
                    image: "https://cdn2.avansas.com/urun/80061/avansas-extra-plstk-klsr-dar-a4-mvi-30lu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 koli 30 klasör',
                        '28.5 x 32 x 5 cm ebatlarında',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama',
                        'Avrupa mekanizma'
        
                    ]
        
                }
        
            },
            "56412": {  // Asıl Ürünün Bilgileri
                id: "56412",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ SARI",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-sari-p-56412",
                image: "https://cdn2.avansas.com/urun/56412/leitz-1015-plastik-klasor-dar-a4-sari-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "180° açılabilen eşsiz patentli mekanizma",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63351",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR SARI",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-sari-p-63351",
                    image: "https://cdn2.avansas.com/urun/63351/avansas-extra-plastik-klasor-dar-a4-sari-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'Avrupa mekanizma',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma'
        
                    ]
        
                }
        
            },
            "56413": {  // Asıl Ürünün Bilgileri
                id: "56413",
                count: 0,
                name: "LEITZ 1015 KLASÖR DAR TEKLİ SİYAH",
                url: "https://www.avansas.com/leitz-1015-plastik-klasor-dar-a4-siyah-p-56413?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56413&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56413/leitz-1015-plastik-klasor-dar-a4-siyah-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 5 cm",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık",
                    "5 yıl iç mekanizma garantisi",
                    "180° açılabilen eşsiz patentli mekanizma"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63349",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR DAR SİYAH",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-dar-a4-siyah-p-63349",
                    image: "https://cdn2.avansas.com/urun/63349/avansas-extra-plastik-klasor-dar-a4-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama',
                        'Avrupa mekanizma'
        
                    ]
        
                }
        
            },
        
            "52189": {  // Asıl Ürünün Bilgileri
                id: "52189",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ BEYAZ",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-beyaz-p-52189",
                image: "https://cdn2.avansas.com/urun/52189/leitz-1010-plastik-klasor-genis-a4-beyaz-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63396",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ BEYAZ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-beyaz-p-63396",
                    image: "https://cdn2.avansas.com/urun/63396/avansas-extra-plastik-klasor-genis-a4-beyaz-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm ',
                        'Avrupa mekanizma',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma'
        
                    ]
        
                }
        
            },
        
            "56348": {  // Asıl Ürünün Bilgileri
                id: "56348",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ GRİ",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-gri-p-56348?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56348&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56348/leitz-1010-plastik-klasor-genis-a4-gri-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık",
                    "5 yıl iç mekanizma garantisi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63398",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ GRİ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-gri-p-63398",
                    image: "https://cdn2.avansas.com/urun/63398/avansas-extra-plastik-klasor-genis-a4-gri-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm ',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama'
        
                    ]
        
                }
        
            },
            "56418": {  // Asıl Ürünün Bilgileri
                id: "56418",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ KIRMIZI",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-kirmizi-p-56418?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56418&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56418/leitz-1010-plastik-klasor-genis-a4-kirmizi-detail-1.jpg",
                properties: [
                    "Ebat: 28.5 x 32 x 7 cm",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63403",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ KIRMIZI",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-kirmizi-p-63403",
                    image: "https://cdn2.avansas.com/urun/63403/avansas-extra-plastik-klasor-genis-a4-kirmizi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama',
                        'Avrupa mekanizma'
        
                    ]
        
                }
        
            },
            "52187": {  // Asıl Ürünün Bilgileri
                id: "52187",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ MAVİ",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-mavi-p-52187?_sgm_campaign=scn_81bbde4f70000&_sgm_source=52187&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/52187/leitz-1010-plastik-klasor-genis-a4-mavi-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "180° açılabilen eşsiz patentli mekanizma",
                    "Islak silinebilir iç kaplama"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63401",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ MAVİ",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-mavi-p-63401",
                    image: "https://cdn2.avansas.com/urun/63401/avansas-extra-plastik-klasor-genis-a4-mavi-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama',
                        'Avrupa mekanizma'
        
                    ]
        
                }
        
            },
            "52188": {  // Asıl Ürünün Bilgileri
                id: "52188",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ SARI",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-sari-p-52188?_sgm_campaign=scn_81bbde4f70000&_sgm_source=52188&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/52188/leitz-1010-plastik-klasor-genis-a4-sari-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63359",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ SARI",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-sari-p-63359",
                    image: "https://cdn2.avansas.com/urun/63359/avansas-extra-plastik-klasor-genis-a4-sari-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm ',
                        'Avrupa mekanizma',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama'
        
                    ]
        
                }
        
            },
            "55662": {  // Asıl Ürünün Bilgileri
                id: "55662",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ SİYAH",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-siyah-p-55662?_sgm_campaign=scn_81bbde4f70000&_sgm_source=55662&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/55662/leitz-1010-plastik-klasor-genis-a4-siyah-detail-1.jpg",
                properties: [
                    "Ebat: 28.5 x 32 x 7 cm",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık",
                    "5 yıl iç mekanizma garantisi",
                    "180° açılabilen eşsiz patentli mekanizma"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63402",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ SİYAH",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-siyah-p-63402",
                    image: "https://cdn2.avansas.com/urun/63402/avansas-extra-plastik-klasor-genis-a4-siyah-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm',
                        'Avrupa mekanizma',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma'
        
                    ]
        
                }
        
            },
            "55664": {  // Asıl Ürünün Bilgileri
                id: "55664",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ TURUNCU",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-turuncu-p-55664?_sgm_campaign=scn_81bbde4f70000&_sgm_source=55664&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/55664/leitz-1010-plastik-klasor-genis-a4-turuncu-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63397",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ TURUNCU",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-turuncu-p-63397",
                    image: "https://cdn2.avansas.com/urun/63397/avansas-extra-plastik-klasor-genis-a4-turuncu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 5 cm ',
                        'PVC kaplama',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'Avrupa mekanizma'
        
                    ]
        
                }
        
            },
            "56416": {  // Asıl Ürünün Bilgileri
                id: "56416",
                count: 0,
                name: "LEITZ 1010 KLASÖR GENİŞ TEKLİ YEŞİL",
                url: "https://www.avansas.com/leitz-1010-plastik-klasor-genis-a4-yesil-p-56416?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56416&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56416/leitz-1010-plastik-klasor-genis-a4-yesil-detail-1.jpg",
                properties: [
                    "Ebatları: 28.5 x 32 x 7 cm",
                    "5 yıl iç mekanizma garantisi",
                    "İç yüzeydeki PE kağıt ile ekstra dayanıklılık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "63361",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA KLASÖR GENİŞ YEŞİL",
                    url: "https://www.avansas.com/avansas-extra-plastik-klasor-genis-a4-yesil-p-63361",
                    image: "https://cdn2.avansas.com/urun/63361/avansas-extra-plastik-klasor-genis-a4-yesil-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ebatları: 28.5 x 32 x 7 cm ',
                        'Avrupa mekanizma',
                        'Yüksek kaliteli 2 halkalı iç mekanizma',
                        'PVC kaplama'
        
                    ]
        
                }
        
            },
            "56284": {  // Asıl Ürünün Bilgileri
                id: "56284",
                count: 0,
                name: "NOKİ ECO POŞET DOSYA A4 100 LÜ",
                url: "https://www.avansas.com/noki-eko-seffaf-poset-dosya-delikli-a4-100-lu-paket-p-56284?_sgm_campaign=scn_81bbde4f70000&_sgm_source=56284&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/56284/noki-eko-seffaf-poset-dosya-delikli-a4-100-lu-paket-detail-1.jpg",
                properties: [
                    "40 mikron",
                    "Sağlam polipropilen malzeme",
                    "11 delikli",
                    "A4 boyutlu 21.6 cm x 30 cm"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "62946",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS ECO POŞET DOSYA 100' LÜ",
                    url: "https://www.avansas.com/avansas-a4-eco-delikli-seffaf-poset-dosya-100-lu-paket-p-62946",
                    image: "https://cdn2.avansas.com/urun/62946/avansas-a4-eco-delikli-seffaf-poset-dosya-100-lu-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '40 mikron',
                        'Sağlam polipropilen malzeme',
                        '11 delikli',
                        'A4 boyutlu 21.6 cm x 30 cm'
        
                    ]
        
                }
        
            },
            "52405": {  // Asıl Ürünün Bilgileri
                id: "52405",
                count: 0,
                name: "ESSELTE 4799 POŞET DOSYA A4 100LÜ",
                url: "https://www.avansas.com/esselte-4799-a4-delikli-seffaf-poset-dosya-100-lu-paket-p-52405?_sgm_campaign=scn_81bbde4f70000&_sgm_source=52405&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/52405/esselte-4799-a4-delikli-seffaf-poset-dosya-100-lu-paket-detail-1.jpg",
                properties: [
                    "25 Mikron",
                    "Sağlam polipropilen malzeme",
                    "11 delikli",
                    "A4 boyutlu 21.6 cm x 30 cm",
                    "100'lü paket"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "65104",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA POŞET DOSYA 100' LÜ",
                    url: "https://www.avansas.com/avansas-a4-extra-poset-dosya-100-lu-paket-p-65104",
                    image: "https://cdn2.avansas.com/urun/65104/avansas-a4-extra-poset-dosya-100-lu-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '55 mikron',
                        'Sağlam polipropilen malzeme',
                        '11 delikli',
                        'A4 boyutlu 21.6 cm x 30 cm'
        
                    ]
        
                }
        
            },
        
            "56582": {  // Asıl Ürünün Bilgileri
                id: "56582",
                count: 0,
                name: "LEITZ 4189 TELLİ DOSYA 50 Lİ AÇIK MAVİ",
                url: "https://www.avansas.com/leitz-4189-telli-dosya-mavi-50-li-paket-p-56582",
                image: "https://cdn2.avansas.com/urun/56582/leitz-4189-telli-dosya-mavi-50-li-paket-detail-1.jpg",
                properties: [
                    "Şeffaf ön yüz",
                    "A4 boyutlarında",
                    "Ortasında metal kilit",
                    "170 sayfa kapasitesi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "72948",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS EXTRA TELLİ DOSYA MAVİ 50'Lİ",
                    url: "https://www.avansas.com/avansas-extra-telli-dosya-mavi-50-li-paket-p-72948",
                    image: "https://cdn2.avansas.com/urun/72948/avansas-extra-telli-dosya-mavi-50-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Ekstra kalın telli dosya',
                        'Dayanıklı PP malzeme',
                        '2 halkalı klasörlere uygun',
                        '170 sayfa kapasite',
                        'A4 boyutlarında'
        
                    ]
        
                }
        
            },
            "59568": {  // Asıl Ürünün Bilgileri
                id: "59568",
                count: 0,
                name: "OKI 44992403 B401 1500 SAYFA SİYAH TONER",
                url: "https://www.avansas.com/oki-44992403-b401-mb441-451-siyah-lazer-toner-1500-sayfa-p-59568?_sgm_campaign=scn_81bbde4f70000&_sgm_source=59568&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/59568/oki-44992403-b401-mb441-451-siyah-lazer-toner-1500-sayfa-detail-1.jpg",
                properties: [
                    "Siyah renk",
                    "24 ay garantili",
                    "1.500 sayfa baskı kapasiteli",
                    "Kaliteli baskı"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "79573",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS ECONOPRINT B401/MB441/451 2.5k",
                    url: "https://www.avansas.com/avansas-econoprint-oki-b401-b441-b451-siyah-muadil-toner-p-79573",
                    image: "https://cdn2.avansas.com/urun/79573/econoprint-oki-b401-b441-b451-siyah-cipl-zoom-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '2500 sayfa baskı kapasitesi',
                        'Oki B401/B441/B451 siyah toner muadili',
                        'Yüksek kaliteli baskı',
                        'Avantajlı fiyat'
        
                    ]
        
                }
        
            },
            "72123": {  // Asıl Ürünün Bilgileri
                id: "72123",
                count: 0,
                name: "YILDIZ DESEN KARTON BARDAK 7 OZ 50'Lİ",
                url: "https://www.avansas.com/yildiz-desenli-karton-bardak-7-oz-50-li-paket-p-72123?_sgm_campaign=scn_81bbde4f70000&_sgm_source=72123&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/72123/yildiz-desenli-karton-bardak-7-oz-50-li-paket-detail-1.jpg",
                properties: [
                    "7 oz 207 ml",
                    "50'li paket",
                    "Yükseklik 79 mm",
                    "Ağız çapı 70 mm"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "64517",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS KARTON BARDAK 7OZ 50Lİ",
                    url: "https://www.avansas.com/avansas-karton-bardak-7-oz-50-li-paket-p-64517",
                    image: "https://cdn2.avansas.com/urun/64517/avansas-karton-bardak-7-oz-50-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '7 oz 207 ml',
                        '50\'li ekonomik paket',
                        'Kaliteli karton bardak',
                        'Avansas kalitesiyle',
                        'Dayanıklı malzeme'
        
                    ]
        
                }
        
            },
            "77070": {  // Asıl Ürünün Bilgileri
                id: "77070",
                count: 0,
                name: "FOCUS OPTIMUM RULO HAVLU 8'Lİ",
                url: "https://www.avansas.com/focus-optimum-kagit-havlu-8-li-paket-p-77070",
                image: "https://cdnsta.avansas.com/mnresize/300/-/urun/77070/focus-optimum-rulo-havlu-8li-zoom-1.jpg",
                properties: [
                    "Çift katlı 90 yaprak",
                    "10.8 metre uzunluk",
                    "22.75 x 12 cm ölçülerinde",
                    "8'li ekonomik paket",
                    "0,74 kg net ağırlık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "52669",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT KAĞIT HAVLU 8 RULO",
                    url: "https://www.avansas.com/avansas-soft-kagit-havlu-8-li-paket-p-52669",
                    image: "https://cdn2.avansas.com/urun/52669/avansas-soft-kagit-havlu-8-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Çift katlı 90 yaprak',
                        '10,8 metre uzunluk',
                        '22,5 x 12 cm ölçülerinde',
                        '19 gr/m2 ağırlık toplam 738 gr',
                        '% 100 doğal selüloz'
        
                    ]
        
                }
        
            },
            "76438": {  // Asıl Ürünün Bilgileri
                id: "76438",
                count: 0,
                name: "SELPAK PRO PREMIUM DİSP. PEÇETE 250X18",
                url: "https://www.avansas.com/-selpak-professional-extra-masaustu-dispenser-pecete-26-5-cm-x-24-cm-18-li-koli-p-76438",
                image: "https://cdn2.avansas.com/urun/76438/selpka-pro-extra-dispenser-pecete-250li-detail-1.jpg",
                properties: [
                    "1 kolide 18 paket",
                    "1 pakette 250 yaprak",
                    "26,5 cm x 24 cm",
                    "5,15 kg net ağırlık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71699",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT EXTRA DİSPENSR PEÇTE 250X18",
                    url: "https://www.avansas.com/avansas-soft-extra-masaustu-dispenser-pecete-24-cm-x-26-5-cm-18-li-koli-p-71699",
                    image: "https://cdn2.avansas.com/urun/71699/avansas-soft-extra-masaustu-dispenser-pecete-24-cm-x-26-5-cm-18-li-koli-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 kolide 18 paket, 1 pakette 250 yaprak',
                        '%100 selüloz',
                        '24 cm x 26,5 cm',
                        'Peçete dispenseri ile birlikte kullanılır',
                        '5,15 kg net ağırlık'
                    ]
        
                }
        
            },
            "77068": {  // Asıl Ürünün Bilgileri
                id: "77068",
                count: 0,
                name: "FOCUS OPTIMUM Z KATLAMA HAVLU 200X12 Lİ",
                url: "https://www.avansas.com/focus-optimum-z-katlama-kagit-havlu-20-cm-x-24-cm-1-koli-12-paket-p-77068?_sgm_campaign=scn_81bbde4f70000&_sgm_source=77068&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/77068/focus-optimum-z-katlama-havlu-200x12-li-detail-1.jpg",
                properties: [
                    "1 kolide 12 paket",
                    "1 pakette 200 yaprak",
                    "Çift katlı",
                    "20 cm x 24 cm ölçülerinde"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71686",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT Z KATLI HAVLU 200 YAPRAK",
                    url: "https://www.avansas.com/avansas-soft-z-katlama-havlu-dispenseri-beyaz-200-lu-p-70176",
                    image: "https://cdn2.avansas.com/urun/70176/avansas-soft-z-katlama-havlu-dispenseri-beyaz-200-lu-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Z katlama havlular için ',
                        'ABS plastik gövde',
                        '200 havlu kapasiteli',
                        'Kilitli sistem'
        
                    ]
        
                }
        
            },
        
            "79712": {  // Asıl Ürünün Bilgileri
                id: "79712",
                count: 0,
                name: "KPLAST HRC ÇÖP T BATTAL SYH TEK RL 72x95",
                url: "https://www.avansas.com/koroplast-cop-torbasi-horeca-battal-boy-72-cm-x-95-cm-siyah-tek-rulo-p-79712?_sgm_campaign=scn_81bbde4f70000&_sgm_source=79712&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/79712/kplast-hrc-cop-t-battal-syh-tek-rl-72x95-detail-1.jpg",
                properties: [
                    "72 x 95 cm ölçülerinde",
                    "Battal boy",
                    "70 litre hacim",
                    "Endrüstriyel çöp torbası"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "64159",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS ÇÖP TORB BATTAL 75X90 SYH",
                    url: "https://www.avansas.com/avansas-cop-torbasi-battal-boy-75-cm-x-90-cm-siyah-tek-rulo-p-64159",
                    image: "https://cdn2.avansas.com/urun/64159/avansas-cop-torbasi-battal-boy-75-cm-x-90-cm-siyah-tek-rulo-detail-1.jpga",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Tek ruloda 10 yaprak',
                        'Dayanıklı ve kaliteli',
                        'Yıldız dikişli',
                        '75 cm x 90 cm ',
                        'Kötü kokmaz'
        
                    ]
        
                }
        
            },
            "76398": {  // Asıl Ürünün Bilgileri
                id: "76398",
                count: 0,
                name: "SELPAK PRO DİS. HAVLU EX. Z KT 200LÜ 12P",
                url: "https://www.avansas.com/selpak-professional-extra-z-katlama-dispenser-havlu-21-5-cm-x-24-cm-1-koli-12-paket-p-76398",
                image: "https://cdn2.avansas.com/urun/76398/selpak-pro-dis-havlu-ex-z-kt-200lu-12p-detail-1.jpg",
                properties: [
                    "1 kolide 12 paket",
                    "1 pakette 200 yaprak",
                    "21,5 cm x 24 cm ölçülerinde",
                    "4,46 kg net ağırlık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71685",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT ULTRA Z KATLI HAVLU 200YPRK",
                    url: "https://www.avansas.com/avansas-soft-ultra-z-katlama-kagit-havlu-23-cm-x-24-cm-1-koli-12-paket-p-71685",
                    image: "https://cdn2.avansas.com/urun/71685/avansas-soft-ultra-z-katlama-kagit-havlu-22-5-cm-x-24-cm-1-koli-12-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 kolide 12 paket',
                        'Çift katlı',
                        '23 cm x 24 cm ',
                        '1 pakette 200 yaprak',
                        '4,77 kg net ağırlık'
        
                    ]
        
                }
        
            },
            "63000": {  // Asıl Ürünün Bilgileri
                id: "63000",
                count: 0,
                name: "FOCUS EXTRA TUVALET KAĞIDI 24'LÜ",
                url: "https://www.avansas.com/focus-extra-tuvalet-kagidi-24-lu-p-63000?_sgm_campaign=scn_81bbde4f70000&_sgm_source=63000&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/63000/focus-extra-tuvalet-kagidi-24-lu-detail-1.jpg",
                properties: [
                    "24'lü Paket",
                    "Çift katlı",
                    "1,63 kg net ağırlık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "55007",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT EXTRA TUVALET KAĞIDI 24 LÜ",
                    url: "https://www.avansas.com/avansas-soft-extra-tuvalet-kagidi-24-lu-paket-p-55007",
                    image: "https://cdn2.avansas.com/urun/55007/avansas-soft-extra-tuvalet-kagidi-24-lu-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Yaprak adedi 180',
                        'Ekstra yumuşaklık'
        
                    ]
        
                }
        
            },
            "80657": {  // Asıl Ürünün Bilgileri
                id: "80657",
                count: 0,
                name: "SENS ÇAMAŞIR SUYU 5L",
                url: "https://www.avansas.com/sens-camasir-suyu-5-lt-p-80657",
                image: "https://cdn2.avansas.com/urun/80657/sens-camasir-suyu-5l-detail-1.jpg",
                properties: [
                    "5 litre",
                    "Ev ve işyeri için ideal",
                    "Mükemmel hijyen",
                    "Uzun süreli koruma"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "52771",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN ÇAMAŞIR SUYU 5KG",
                    url: "https://www.avansas.com/avansas-clean-camasir-suyu-5-kg-p-52771",
                    image: "https://cdn2.avansas.com/urun/52771/avansas-clean-camasir-suyu-5-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Avansas kalitesi',
                        'Ev ve işyeri için ideal',
                        'Avantajlı fiyat',
                        '5 kg çamaşır suyu',
                        'Mükemmel hijyen '
        
                    ]
        
                }
        
            },
            "52536": {  // Asıl Ürünün Bilgileri
                id: "52536",
                count: 0,
                name: "SIR YAĞ SÖKÜCÜ MUTFAK LİM. 750ML",
                url: "https://www.avansas.com/sir-yag-sokucu-mutfak-limonlu-750-ml-p-52536",
                image: "https://cdn2.avansas.com/urun/52536/sir-yag-sokucu-mutfak-limonlu-750-ml-detail-1.jpg",
                properties: [
                    "750 ml limonlu yağ sökücü",
                    "Yağlı yüzeylerde etkili temizlik",
                    "Işıl ışıl mutfak ve tezgah temizliği"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "69384",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN YAĞ ÇÖZÜCÜ SPREY  750ML",
                    url: "https://www.avansas.com/avansas-clean-yag-cozucu-sprey-750-ml-p-69384",
                    image: "https://cdn2.avansas.com/urun/69384/avansas-clean-yag-cozucu-sprey-750-ml-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '750 ml sprey ',
                        'Limon kokulu',
                        'Yağ çözücü ',
                        'Avansas kalitesi',
                        'Avantajlı fiyat'
        
                    ]
        
                }
        
            },
            "69717": {  // Asıl Ürünün Bilgileri
                id: "69717",
                count: 0,
                name: "FOCUS OPTIMUM TUVALET KAĞIDI 24'LÜ",
                url: "https://www.avansas.com/focus-optimum-tuvalet-kagidi-24-lu-paket-p-69717",
                image: "https://cdn2.avansas.com/urun/69717/focus-optimum-tuvalet-kagidi-24-lu-paket-detail-1.jpg",
                properties: [
                    "Çift katlı 24'lü paket",
                    "9,6 cm x 12 cm ölçülerinde",
                    "18 m rulo uzunluğu",
                    "1,32 kg net ağırlık"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "52668",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT TUVALET KAĞIDI 24 LÜ",
                    url: "https://www.avansas.com/avansas-soft-tuvalet-kagidi-24-lu-paket-p-52668",
                    image: "https://cdn2.avansas.com/urun/52668/avasoft-tuvalet-kagidi-24-lu-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Yaprak adedi 150',
                        'Ekstra yumuşaklık'
        
                    ]
        
                }
        
            },
            "70697": {  // Asıl Ürünün Bilgileri
                id: "70697",
                count: 0,
                name: "PRİL POWER BULAŞIK DET. LİMON 675 G",
                url: "https://www.avansas.com/pril-power-bulasik-deterjani-limon-675-ml-p-70697?_sgm_campaign=scn_81bbde4f70000&_sgm_source=70697&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/70697/pril-power-bulasik-deterjani-limon-675-ml-detail-1.jpg",
                properties: [
                    "675 ml",
                    "Kalıntı bırakmayan etkili formül",
                    "Güçlü yağ çözücü",
                    "Sağlığa uygun ve hijyenik",
                    "Taze limon kokusu"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "69377",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN ELDE BULAŞIK DETERJ. 750ML",
                    url: "https://www.avansas.com/avansas-clean-elde-bulasik-deterjani-limonlu-750-ml-p-69377",
                    image: "https://cdn2.avansas.com/urun/69377/avansas-clean-elde-bulasik-deterjani-limonlu-750-ml-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '750 ml etkili deterjan',
                        'Elde bulaşık deterjanı',
                        'Sağlığa uygun Avansas kalitesi',
                        'Limon kokulu',
                        'Güçlü formül'
        
                    ]
        
                }
        
            },
            "80653": {  // Asıl Ürünün Bilgileri
                id: "80653",
                count: 0,
                name: "SENS YÜZEY TEMİZLİK ÜRÜNÜ FLORAL 5 L",
                url: "https://www.avansas.com/sens-genel-temizlik-urunu-floral-5-lt-p-80653?_sgm_campaign=scn_81bbde4f70000&_sgm_source=80653&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/80653/sens-yuzey-temizlik-urunu-floral-5-l-detail-1.jpg",
                properties: [
                    "5 litre",
                    "Hoş kokulu",
                    "Yıkanabilir ve silinebilir yüzeyler için ideal",
                    "Cilalı yüzeylerde kullanılabilir"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "52773",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN PARFÜMLÜ YÜZEY TEM. 5 KG",
                    url: "https://www.avansas.com/avansas-clean-parfumlu-yuzey-temizleyici-5-kg-p-52773",
                    image: "https://cdn2.avansas.com/urun/52773/avansas-clean-parfumlu-yuzey-temizleyici-5-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Tüm yıkanabilir yüzeyler için kullanılır',
                        'Parfüm bileşeni ortamda hoş bir koku bırakır',
                        'Zor lekelerde dahi mükemmel sonuç verir',
                        'Durulama gerektirmez',
                        'Yüzeyleri çizmeden temizler ve parlatır'
        
                    ]
        
                }
        
            },
            "69709": {  // Asıl Ürünün Bilgileri
                id: "69709",
                count: 0,
                url: "https://www.avansas.com/focus-dispenser-havlu-extra-z-katlama-22-5-cm-x-24-cm-1-koli-12-paket-p-69709?_sgm_campaign=scn_81bbde4f70000&_sgm_source=69709&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/69709/focus-dispenser-havlu-extra-z-katlama-22-5-cm-x-24-cm-1-koli-12-paket-detail-1.jpg",
                properties: [
                    "1 kolide 12 paket",
                    "Çift katlı",
                    "22,5 cm x 24 cm ölçülerinde",
                    "1 pakette 200 yaprak"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71685",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT ULTRA Z KATLI HAVLU 200YPRK",
                    url: "https://www.avansas.com/avansas-clean-sivi-el-sabunu-beyaz-20-kg-p-77157",
                    image: "https://cdn2.avansas.com/urun/77157/avansas-clean-sivi-el-sabunu-beyaz-20-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 kolide 12 paket',
                        'Çift katlı',
                        '23 cm x 24 cm ',
                        '1 pakette 200 yaprak',
                        '4,77 kg net ağırlık'
        
                    ]
        
                }
        
            },
            "76862": {  // Asıl Ürünün Bilgileri
                id: "76862",
                count: 0,
                name: "SENS SIVI SABUN MAVİ 20L",
                url: "https://www.avansas.com/sens-sivi-sabun-mavi-20-lt-p-76862",
                image: "https://cdn2.avansas.com/urun/76862/sens-sivi-sabun-mavi-20l-detail-1.jpg",
                properties: [
                    "20 litre",
                    "Yumuşak formül",
                    "Cilt pH'ına uygun",
                    "Hoş kokulu"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "77157",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN SIVI EL SABUNU BEYAZ 20 KG",
                    url: "https://www.avansas.com/avansas-clean-sivi-el-sabunu-beyaz-20-kg-p-77157",
                    image: "https://cdn2.avansas.com/urun/77157/avansas-clean-sivi-el-sabunu-beyaz-20-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Güçlü temizlik',
                        'Cilde zarar vermez',
                        'Hindistan cevizi',
                        '20 kg sıvı el sabunu',
                        'Avansas kalitesi'
        
                    ]
        
                }
        
            },
            "80655": {  // Asıl Ürünün Bilgileri
                id: "80655",
                count: 0,
                name: "SENS SIVI SABUN BEYAZ 5L",
                url: "https://www.avansas.com/sens-sivi-sabun-beyaz-5-lt-p-80655?_sgm_campaign=scn_81bbde4f70000&_sgm_source=80655&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/80655/sens-sivi-sabun-beyaz-5l-detail-1.jpg",
                properties: [
                    "5 litre",
                    "Yumuşak formül",
                    "Cilt pH'ına uygun",
                    "Hoş kokulu"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "54970",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS CLEAN SIVI EL SABUNU BEYAZ 5 KG",
                    url: "https://www.avansas.com/avansas-clean-sivi-el-sabunu-beyaz-5-kg-p-54970",
                    image: "https://cdn2.avansas.com/urun/54970/avansas-clean-sivi-el-sabunu-beyaz-5-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Güçlü temizlik',
                        'Cilde zarar vermez',
                        'Hindistan cevizi',
                        '5 kg sıvı el sabunu'
        
                    ]
        
                }
        
            },
            "70856": {  // Asıl Ürünün Bilgileri
                id: "70856",
                count: 0,
                name: "SELPAK PRO.EXTRA JUMBO TUV KA 150M 12'Lİ",
                url: "https://www.avansas.com/sens-sivi-sabun-beyaz-5-lt-p-80655?_sgm_campaign=scn_81bbde4f70000&_sgm_source=80655&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/80655/sens-sivi-sabun-beyaz-5l-detail-1.jpg",
                properties: [
                    "150 m rulo uzunluğu",
                    "12'li paket",
                    "Çift katlı",
                    "5,9 kg net ağırlık"
        
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71689",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT JUMBO TUVALET KAĞIDI 125 M",
                    url: "https://www.avansas.com/avansas-soft-jumbo-tuvalet-kagidi-5-kg-125-m-12-li-paket-p-71689",
                    image: "https://cdn2.avansas.com/urun/71689/avansas-soft-jumbo-tuvalet-kagidi-5-kg-125-m-12-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Çift katlı 12\'li paket',
                        'Rulo uzunluğu: 125 m',
                        '%100 selüloz',
                        '5,05 kg net ağırlık'
        
                    ]
        
                }
        
            },
            "62846": {  // Asıl Ürünün Bilgileri
                id: "62846",
                count: 0,
                name: "FOCUS MİNİ JUMBO TUV KAĞIDI 150MT 12'Lİ",
                url: "https://www.avansas.com/focus-extra-mini-jumbo-tuvalet-kagidi-6-1-kg-150-m-12-li-paket-p-62846",
                image: "https://cdnsta.avansas.com/mnresize/300/-/urun/62846/focus-mini-jumbo-tuvalet-kagidi-6-1-kg-150-m-12-li-paket-zoom-1.jpg",
                properties: [
                    "Çift katlı 428 yaprak",
                    "150 metre uzunluğunda",
                    "17 gr/m2 ağırlığında toplam 6,1 kg",
                    "10 cm x 35 cm ölçülerinde"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71689",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT JUMBO TUVALET KAĞIDI 125 M",
                    url: "https://www.avansas.com/avansas-soft-jumbo-tuvalet-kagidi-5-kg-125-m-12-li-paket-p-71689",
                    image: "https://cdn2.avansas.com/urun/71689/avansas-soft-jumbo-tuvalet-kagidi-5-kg-125-m-12-li-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        'Çift katlı 12\'li paket',
                        'Rulo uzunluğu: 125 m',
                        '%100 selüloz',
                        '5,05 kg net ağırlık'
        
                    ]
                }
        
            },
            "62433": {  // Asıl Ürünün Bilgileri
                id: "62433",
                count: 0,
                name: "SELPAK PRO GERİ DÖN. PEÇETE 100LÜ 32PKT",
                url: "https://www.avansas.com/selpak-professional-pecete-24-5-cm-x-26-5-cm-100-lu-32-li-paket-p-62433?_sgm_campaign=scn_81bbde4f70000&_sgm_source=62433&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/62433/selpak-professional-pecete-245-cm-x-265-cm-100lu-32li-paket-detail-1.jpg",
                properties: [
                    "Tek katlı 32 paket",
                    "Ölçü 24,5 x 26,5",
                    "%100 saf selüloz",
                    "Paket içi 100 yaprak"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "71695",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS SOFT STANDART PEÇETE 100 LÜ",
                    url: "https://www.avansas.com/avansas-soft-standart-pecete-100-lu-paket-p-71695",
                    image: "https://cdn2.avansas.com/urun/71695/avansas-soft-standart-pecete-100-lu-paket-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '100 yaprak',
                        'Standart peçete',
                        '23 cm x 24,5 cm',
                        '0,095 gram paket ağırlığı'
        
                    ]
        
                }
        
            },
        
            "51612": {  // Asıl Ürünün Bilgileri
                id: "51612",
                count: 0,
                name: "MEHMET EFENDİ TÜRK KAHVESİ POŞET 100 GR",
                url: "https://www.avansas.com/kurukahveci-mehmet-efendi-turk-kahvesi-poset-100-gr-p-51612",
                image: "https://cdn2.avansas.com/urun/51612/mehmet-efendi-turk-kahvesi-poset-100-gr-detail-1.jpg",
                properties: [
                    "100 gr özel ambalaj",
                    "Özenle kavrulmuş zengin aroma",
                    "En kaliteli kahve çekirdekleri",
                    "Geleneksel kahve lezzeti"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "64394",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS KEYF-İ ALA TÜRK KAHVESİ POŞET 100 GR",
                    url: "https://www.avansas.com/keyf-i-ala-turk-kahvesi-poset-100-gr-p-64394",
                    image: "https://cdn2.avansas.com/urun/64394/keyf-i-ala-turk-kahvesi-poset-100-gr-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '100 gr özel ambalaj',
                        'Orta kavrulmuş',
                        'Özenle seçilmiş kaliteli Arabica çekirdekleri',
                        'Zengin, yoğun ve dengeli aroma',
                        'Avansas kalitesiyle üretilmiştir'

                    ]
        
                }
        
            },
        
            "58623": {  // Asıl Ürünün Bilgileri
                id: "58623",
                count: 0,
                name: "BALKÜPÜ GOLD ŞEKER 1000 GR",
                url: "https://www.avansas.com/bal-kupu-gold-kup-seker-360-li-1-kg-p-58623",
                image: "https://cdn2.avansas.com/urun/58623/bal-kupu-gold-kup-seker-360-li-1000-gr-detail-1.jpg",
                properties: [
                    "1000 gr =360 adet",
                    "İşyerleri için ideal",
                    "Bal Küpü kalitesi"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "65469",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS KÜP ŞEKER 360LI 1 KG",
                    url: "https://www.avansas.com/avansas-kup-seker-360-li-1-kg-p-65469",
                    image: "https://cdn2.avansas.com/urun/65469/avansas-kup-seker-360-li-1-kg-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 kg küp şeker',
                        'Avantajlı fiyat',
                        '% 100 doğal pancar şekeri',
                        '360\'lı paket ',
                        'Avansas kalitesiyle'
        
                    ]
        
                }
        
            }
            ,
        
            "67119": {  // Asıl Ürünün Bilgileri
                id: "67119",
                count: 0,
                name: "NAVİGATOR A4 FOT.KAĞIDI 80 GR 1 PAKET",
                url: "https://www.avansas.com/navigator-a4-fotokopi-kagidi-80-gr-1-paket-500-sayfa-p-67119?_sgm_campaign=scn_81bbde4f70000&_sgm_source=67119&_sgm_action=click",
                image: "https://cdn2.avansas.com/urun/67119/navigator-a4-fotokopi-kagidi-80-gr-1-paket-500-sayfa-detail-1.jpg",
                properties: [
                    "1 pakette 500 sayfa A4",
                    "Günlük kullanıma uygun",
                    "Yüksek kalite",
                    "Yazıcıda sıkışma yapmaz"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "79374",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS DIAMOND 90 GR FOT.KAĞ.1 PK.400YP",
                    url: "https://www.avansas.com/avansas-diamond-a4-fotokopi-kagidi-90-gr-1-paket-400-sayfa-p-79374",
                    image: "https://cdn2.avansas.com/urun/79374/avansas-diamond-90-gr-fot-kag-1-pk-400yp-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 m² ağırlığı 90 gram’dır',
                        '1 pakette 400 sayfa A4 kağıt',
                        'Çift taraflı baskı için mükemmel çözüm',
                        'Yönetim raporları için en doğru tercih'
        
                    ]
        
                }
        
            }
            ,
        
            "59218": {  // Asıl Ürünün Bilgileri
                id: "59218",
                count: 0,
                name: "NAVİGATOR FOTOKOPİ KAĞIT A4 80GR 1 KOLİ",
                url: "https://www.avansas.com/navigator-a4-fotokopi-kagidi-80-gr-1-koli-5-paket-p-59218",
                image: "https://cdn2.avansas.com/urun/59218/navigator-a4-fotokopi-kagidi-80-gr-1-koli-5-paket-detail-1.jpg",
                properties: [
                    "1 m² ağırlığı 80 gram’dır",
                    "1 kolide 5 paket A4 (2500 sayfa)",
                    "Çift taraflı baskıya uygun",
                    "1Yazıcıda sıkışma yapmaz"
                ],
                relatedProduct: { // Asıl Ürünün Muadili AVANSAS ÜRÜNÜN bilgileri
                    id: "76808",
                    CSRFToken: "8f4c219e-029f-426d-9709-e9c946ee1980", //bu bütün ürünlerde sabit
                    name: "AVANSAS DIAMOND 90GR FOT.KĞ.400X5 1 KOLİ",
                    url: "https://www.avansas.com/avansas-diamond-a4-fotokopi-kagidi-90-gr-1-koli-2000-sayfa-p-76808",
                    image: "https://cdn2.avansas.com/urun/76808/avansas-diomand-90-gr-fot-kag-400x5-pak-detail-1.jpg",
                    properties: [ //excelldeki propertyleri buraya ekleyebilirsin
                        '1 m² ağırlığı 90 gram’dır',
                        '1 kolide 5 paket A4 (2000 sayfa)',
                        'Çift taraflı baskı için mükemmel çözüm',
                        'Yönetim raporları için en doğru tercih',
                        'Tüm baskı makinelerine uygun'
                        
                    ]
        
                }
        
            }
        
        }

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

            sendRequest: function () {

                var list = [];

                for (var product in productList) {
                    list.push(product);
                    if (!list.includes(productList[product].relatedProduct.id)) {
                        list.push(productList[product].relatedProduct.id);
                    }

                }

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://recom.8digits.com/products/search/id/avansas",
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "cache-control": "no-cache",
                        "Postman-Token": "7ca15b02-ddba-465f-8cac-ed85802cef44"
                    },
                    "processData": false,
                    "data": JSON.stringify(list)
                }

                jQuery.ajax(settings).done(function (response) {
                    sessionStorage.setItem("ed-ProductList", JSON.stringify(response.data));
                    sessionList = JSON.parse(sessionStorage.getItem("ed-ProductList"));
                    if (EightDigits.dataLayer.data.pageType === "product") {
                        var id = dataLayer[1].productInfo.product_id;
                        if (typeof productList[id] !== "undefined") {
                            // EightDigits.utils.setBounceFunction = function () {
                                var popupCount=  0;
                            jQuery(document).on("mousemove", function( event ) {
                                        var scrollTop = jQuery(window).scrollTop();
                                        if(event.pageY < (scrollTop + 3)){
                                            if( popupCount===0){
                                                popupCount++;
                                                main.factory.prototype.checkList(id);
                                            }}
                                    
                                })
                            // };
                            // EightDigits.utils.setBounceCallback();
                        }

                    }

                });

            },
            checkList: function (pid) {
                var controlProduct = false;
                var controlAvansas = false;
                var avansasPrice;
                var normalPrice;
                for (var i = 0; i < sessionList.length; i++) {
                    if (sessionList[i].code === pid) {
                        controlProduct = true;
                        normalPrice = sessionList[i].price
                    }
                }
                for (var i = 0; i < sessionList.length; i++) {
                    if (sessionList[i].code === productList[pid].relatedProduct.id) {
                        controlAvansas = true;
                        avansasPrice = sessionList[i].price
                    }
                }

                if (controlProduct && controlAvansas) {
                    main.factory.prototype.addHTML(pid, avansasPrice, normalPrice);
                }

            },
            addHTML: function (id, avansasPrice, normalPrice) {
                // console.log('addHtml', id)

                var left = (window.innerWidth - 900) / 2;

                var css = '<style>\
                #ed-' + config.scenarioname + '-overlay{    width: 100%;\
                    height: 100%;\
                    background-color: rgba(0,0,0,0.6);\
                    top: 0px;\
                    position: fixed;\
                    z-index: 999999;}\
                #ed-'+ config.scenarioname + '-main{width:900px; background-color:white; border:1px solid #2c97de; left:' + left + 'px;   margin-bottom:12px; position:fixed; top:80px;z-index: 999999999; }\
                    #ed-'+ config.scenarioname + '-header{   margin-top: 12px;}\
                    .ed-header-inner{ display: flex; align-items: center;margin: 0 auto;width: 400px; color:#2c97de;}\
                    #ed-'+ config.scenarioname + '-header-img{width:30px;}\
                #ed-'+ config.scenarioname + '-inner{padding-top: 11px; width:85%; margin: 0 auto;}\
                .ed-products-inner{ display: flex; align-items: center; }\
                .ed-product{display: flex; width:50%; }\
                .ed-product-img{width:32%;}\
                @-webkit-keyframes bell-shake {\
                    1% { -webkit-transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    3% { -webkit-transform: rotateZ(20deg); transform-origin: 50% 0%; }\
                    4% { -webkit-transform: rotateZ(-20deg); transform-origin: 50% 0%;}\
                    5% { -webkit-transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    6% { -webkit-transform: rotateZ(-15deg); transform-origin: 50% 0%;}\
                    7% { -webkit-transform: rotateZ(0); transform-origin: 50% 0%;   }\
                    100% { -webkit-transform: rotateZ(0); transform-origin: 50% 0%;  }\
                  }\
                  @-moz-keyframes bell-shake {\
                    1% { -moz-transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    2% { -moz-transform: rotateZ(-15deg); transform-origin: 50% 0%;}\
                    3% { -moz-transform: rotateZ(20deg); transform-origin: 50% 0%; }\
                    4% { -moz-transform: rotateZ(-20deg); transform-origin: 50% 0%;}\
                    5% { -moz-transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    6% { -moz-transform: rotateZ(-15deg); transform-origin: 50% 0%;}\
                    7% { -moz-transform: rotateZ(0); transform-origin: 50% 0%;   }\
                    100% { -moz-transform: rotateZ(0); transform-origin: 50% 0%;  }\
                  }\
                  @keyframes bell-shake {\
                    1% { transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    2% { transform: rotateZ(-15deg); transform-origin: 50% 0%;}\
                    3% { transform: rotateZ(20deg); transform-origin: 50% 0%; }\
                    4% { transform: rotateZ(-20deg); transform-origin: 50% 0%;}\
                    5% { transform: rotateZ(15deg); transform-origin: 50% 0%; }\
                    6% { transform: rotateZ(-15deg); transform-origin: 50% 0%;}\
                    7% { transform: rotateZ(0); transform-origin: 50% 0%;}\
                    100% { transform: rotateZ(0); transform-origin: 50% 0%;}\
                  }\
          </style>'

                var html = '\
                <div id="ed-' + config.scenarioname + '-overlay"></div>\
                <div id="ed-' + config.scenarioname + '-main">\
                 <div id="ed-'+ config.scenarioname + '-header">\
                     <div class="ed-header-inner">\
                                <div id="ed-'+ config.scenarioname + '-header-img">\
                                    <img style="width:100%;" src="//cdn.8digits.com/f/u/9zyogdo2/ee3691bd-cb00-4656-a0ad-1076f2e3b224.png"></img>\
                                </div>\
                                <h3>Yüksek Kaliteyi Uygun Fiyata Alabilirsiniz !</h3>\
                     </div>\
                 </div>\
                 <div id="ed-'+ config.scenarioname + '-close" style="position:absolute;width:30px;height:30px;right: 12px;text-align:center;line-height:16px;font-size:18px;color:#2c97de;cursor:pointer;margin-top: -37px;">x</div>\
                 <div id="ed-'+ config.scenarioname + '-inner">\
                       <div class="ed-products-inner">\
                             <div class="ed-product">\
                                     <div class="ed-product-img">\
                                          <img style="width:100%;" src="'+ productList[id].image + '"></img>\
                                     </div>\
                                     <div class="center" style="width:67%; margin-left:1%;" >\
                                        <a target="_blank" href="'+ productList[id].url + '" class="title">\
                                            <div style="-webkit-box-orient: vertical;color: black;font-weight: bold;margin-bottom: 11px;width: 170px;line-height: 14px;font-size: 12px;">'+ productList[id].name + '</div>\
                                        </a>\
                                        <div class="info">\
                                            <a target="_blank" href="'+ productList[id].url + '">\
                                                <ul class="check-list" style="font-size: 11px; color: #999;">\
                                                            \
                                                           \
                                                            \
                                                </ul>\
                                                    </a>\
                                        </div>\
                                         <div class="ed-price" style="display:flex; margin-top: 9px;">\
                                               <div>\
                                                    <span style="font-size: 1.25rem;font-weight: 700;color: #F9A14A;">'+ Number(normalPrice).toFixed(2) + ' TL</span>\
                                               </div>\
                                               <div style="font-size:11px; color: #F9A14A; margin-left: 4px;"> KDV</br> DAHİL</div>\
                                        </div>\
                                    </div>\
                             </div>\
                             <div class="ed-product">\
                             <div class="ed-product-img">\
                                          <img style="width: 100%;" src="'+ productList[id].relatedProduct.image + '"></img>\
                                     </div>\
                                     <div class="center" style=" width:67%; margin-left:1%;" >\
                                        <a target="_blank" href="'+ productList[id].relatedProduct.url + '" class="title">\
                                            <div class="ed-product-name" style="-webkit-box-orient: vertical;color: black;font-weight: bold;margin-bottom: 11px;width: 172px;line-height: 14px; font-size: 12px;">'+ productList[id].relatedProduct.name + '</div>\
                                        </a>\
                                        <div class="info">\
                                            <a target="_blank" href="'+ productList[id].relatedProduct.url + '">\
                                                <ul class="check-list" style="font-size: 11px;color: #999;">\
                                                \
                                                </ul>\
                                                    </a>\
                                        </div>\
                                        <div class="ed-price" style="display:flex; margin-top: 9px;" >\
                                               <div>\
                                                    <span style="font-size: 1.25rem;font-weight: 700;color: #F9A14A;">'+ Number(avansasPrice).toFixed(2) + ' TL</span>\
                                               </div>\
                                               <div style="font-size:11px; color: #F9A14A; margin-left: 4px; ">KDV</br> DAHİL</div>\
                                        </div>\
                                    </div>\
                             </div>\
                       </div>\
                 </div>\
                 <div id="ed-'+ config.scenarioname + '-addToBasket" style="cursor:pointer;width: 99px;margin-left: 64.5%;padding: 10px 8px;color: white;background-color: #fd9d20;margin-bottom: 18px;margin-top: 8px;">\
                       <div>SEPETE EKLE</div>\
                 </div>\
             </div>';

                jQuery('head').append(css);
                jQuery('body').append(html);
                var category_product=  dataLayer[1].productInfo.category_path
                config.tag =category_product.split('/')[category_product.split('/').length - 1]


                EightDigits.analytics.sendEvent(config.analytics,'Shown_'+productList[id].relatedProduct.id+'_'+config.tag);

                for (var i = 0; i < productList[id].properties.length; i++) {
   
                    if(i < 3){
                        jQuery('#ed-' + config.scenarioname + '-main .check-list:eq(0)').append(' <li style="margin-bottom:4px;display:flex;align-items: center;font-family: \'Open Sans\'; font-weight: 600;  "><img src="//cdn.8digits.com/f/u/9zyogdo2/3cd39059-ad62-4d3c-9804-8068a2b790ce.png" style="width:10px;" ></img><span style="margin-left: 4px;">' + productList[id].properties[i] + '</span></li>')
                    }
                    
                }

                for (var j = 0; j < productList[id].relatedProduct.properties.length; j++) {
                    if(j < 3){
                        jQuery('#ed-' + config.scenarioname + '-main .check-list:eq(1)').append(' <li style="margin-bottom:4px;display:flex;align-items: center;font-family: \'Open Sans\'; font-weight: 600;"><img src="//cdn.8digits.com/f/u/9zyogdo2/3cd39059-ad62-4d3c-9804-8068a2b790ce.png" style="width:10px;" ></img><span style="margin-left: 4px;">' + productList[id].relatedProduct.properties[j] + '</span></li>')
                    }

                }

                jQuery('#ed-'+ config.scenarioname + '-close').click(function () {
                    EightDigits.analytics.sendEvent(config.analytics,'Close_Click_'+productList[id].relatedProduct.id+'_'+config.tag);
                    jQuery('#ed-' + config.scenarioname + '-overlay').remove();
                    jQuery('#ed-' + config.scenarioname + '-main').remove();
                });

                jQuery('#ed-' + config.scenarioname + '-addToBasket').click(function () {

                    jQuery('#ed-' + config.scenarioname + '-addToBasket div').text('EKLENİYOR')
                    jQuery('#ed-' + config.scenarioname + '-addToBasket div').css('color', 'gray');
                    jQuery('#ed-' + config.scenarioname + '-addToBasket').css('background-color', '#ebebeb');
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://www.avansas.com/cart/add?productCodePost=" + productList[id].relatedProduct.id + "&qty=1&CSRFToken=" + productList[id].relatedProduct.CSRFToken,
                        "method": "POST",
                        "headers": {
                            "Cache-Control": "no-cache",
                            "Postman-Token": "62300533-96aa-4dc6-8257-0de97e420a63,271b647c-23b2-4ffd-af60-eb50d0ae1e80"
                        }
                    }

                    $.ajax(settings).done(function (response) {
                        EightDigits.analytics.sendEvent(config.analytics, 'AddToBasket_' + productList[id].relatedProduct.id+'_'+config.tag);
                        EightDigits.utils.setCookie('ed-wasAdded' + config.scenarioname,productList[id].relatedProduct.id, 60);
                        location.reload();
                    });


                })



            },
            start: function () {

                if (sessionStorage.getItem("ed-ProductList") === null) {
                    main.factory.prototype.sendRequest();
                }
                else {

                    if (EightDigits.dataLayer.data.pageType === "product") {
                        sessionList = JSON.parse(sessionStorage.getItem("ed-ProductList"));
                        var id = dataLayer[1].productInfo.product_id;
                        if (typeof productList[id] !== "undefined") {
                            var popupCount=  0;
                            jQuery(document).on("mousemove", function( event ) {
                                        var scrollTop = jQuery(window).scrollTop();
                                        if(event.pageY < (scrollTop + 3)){
                                            if( popupCount===0){
                                                popupCount++;
                                                main.factory.prototype.checkList(id);
                                            }}
                                    
                                })
                            // EightDigits.utils.setBounceFunction = function () {
                         
                               
                               
                            // };
                            // EightDigits.utils.setBounceCallback();

                        }

                    }
                    else if (EightDigits.dataLayer.data.pageType === "success"){
                        if(EightDigits.utils.getCookie('ed-wasAdded' + config.scenarioname)!==null){
                            var id_avansas = EightDigits.utils.getCookie('ed-wasAdded' + config.scenarioname);
                            var buyProducts = dataLayer[1].ecommerce.purchase.products;
                            for (var j = 0; j < buyProducts.length; j++) {
                                if (buyProducts[j].id === id_avansas) {
                                    config.tag = buyProducts[j].category.split('/')[buyProducts[j].category.split('/').length - 1];
                                    EightDigits.analytics.sendEvent(config.analytics, 'Buy_Product_'+ id_avansas + '_' + config.tag);
                                }
                            }

                        }

                    }

                }


            },
            control: function () {
if(window.location.pathname.indexOf("/uk/")>-1 || window.location.pathname==="/uk"){
    return false;
}
            },
            init: function () {
                if (main.factory.prototype.control() == false) {
                    return false
                }
                var _exec = main.factory.prototype.random();
                if (!_exec) {

                    EightDigits.analytics.sendEvent(config.analytics, 'NotShown');

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
    var _ed_Exit_Urun_Oneri = new EightDigits.sf();
    _ed_Exit_Urun_Oneri.Exit_Urun_Oneri();
})();

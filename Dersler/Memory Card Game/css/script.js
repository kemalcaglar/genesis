var kartListesi = [
    {
        imgSource : 'https://i2.milimaj.com/i/milliyet/75/0x0/5e01d67d5542851ed8493d5d.jpg',
        shortCode : 'sorloth',
        isOpen    : false
    },
    {
        imgSource : 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ibrahima_Yattara.jpg',
        shortCode : 'ibrahimaYattara',
        isOpen    : false
    },
    {
        imgSource : 'https://www.neoldu.com/d/other/gokdeniz-karadeniz.jpg',
        shortCode : 'gokdeniz',
        isOpen    : false
    },
    {
        imgSource : 'https://upload.wikimedia.org/wikipedia/commons/9/93/Fatihtekke.jpg',
        shortCode : 'fatihTekke',
        isOpen    : false
    },
    {
        imgSource : 'https://iaftm.tmgrup.com.tr/5550b5/632/314/0/0/632/314?u=https://iftm.tmgrup.com.tr/2019/04/03/trabzonsporda-yusuf-yazici-ligi-2-bitiririz-1554244476187.jpg',
        shortCode : 'yusuf',
        isOpen    : false
    },
    {
        imgSource : 'https://pbs.twimg.com/profile_images/1073542303694778368/ARy-sP5z.jpg',
        shortCode : 'shotaArveladze',
        isOpen    : false
    },
    {
        imgSource : 'https://i4.hurimg.com/i/hurriyet/75/0x0/5edbf0412269a20e9041376a.jpg',
        shortCode : 'onur',
        isOpen    : false
    },
    {
        imgSource : 'https://cdn-amk.sozcu.com.tr/amk-resimler/2019/12/iecrop/abdulkadir-3465_1_1_1575237805-400x400.jpg',
        shortCode : 'abdulkadir',
        isOpen    : false
    },{
        imgSource : 'https://i2.milimaj.com/i/milliyet/75/0x0/5e01d67d5542851ed8493d5d.jpg',
        shortCode : 'sorloth',
        isOpen    : false
    },
    {
        imgSource : 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ibrahima_Yattara.jpg',
        shortCode : 'ibrahimaYattara',
        isOpen    : false
    },
    {
        imgSource : 'https://www.neoldu.com/d/other/gokdeniz-karadeniz.jpg',
        shortCode : 'gokdeniz',
        isOpen    : false
    },
    {
        imgSource : 'https://upload.wikimedia.org/wikipedia/commons/9/93/Fatihtekke.jpg',
        shortCode : 'fatihTekke',
        isOpen    : false
    },
    {
        imgSource : 'https://iaftm.tmgrup.com.tr/5550b5/632/314/0/0/632/314?u=https://iftm.tmgrup.com.tr/2019/04/03/trabzonsporda-yusuf-yazici-ligi-2-bitiririz-1554244476187.jpg',
        shortCode : 'yusuf',
        isOpen    : false
    },
    {
        imgSource : 'https://pbs.twimg.com/profile_images/1073542303694778368/ARy-sP5z.jpg',
        shortCode : 'shotaArveladze',
        isOpen    : false
    },
    {
        imgSource : 'https://i4.hurimg.com/i/hurriyet/75/0x0/5edbf0412269a20e9041376a.jpg',
        shortCode : 'onur',
        isOpen    : false
    },
    {
        imgSource : 'https://cdn-amk.sozcu.com.tr/amk-resimler/2019/12/iecrop/abdulkadir-3465_1_1_1575237805-400x400.jpg',
        shortCode : 'abdulkadir',
        isOpen    : false
    },
]
var setIntervalCalc = null;
var countDown = 100;
var clickCount = 0;
var count = 1;
var selectedShortCode = '';
function initCards() {

    let kartlar = document.getElementById('kartlar');
    let dom = ''
    for(let i=0; i<kartListesi.length; i++) {

        let showClass = kartListesi[i].isOpen ? 'gorunurluk' : ''

        dom += `<div class="kart ${showClass}" >
             <div class="kart-arka kart-yuz">
                 <img class="ts" src="" alt="">
             </div>
             <div class="kart-on kart-yuz ">
             ${kartListesi[i].shortCode}
                 <img class="sporcu " src="${kartListesi[i].imgSource}" alt="">
             </div>
         </div>`;
        kartlar.innerHTML = dom
    }
    createListener()


}

function createListener(){
    let cardItems = document.getElementsByClassName('kart');
    Array.from(cardItems).map( (item, index) =>
        item.addEventListener('click', function () {
            onClickCard(index)
        })
    )
}


function onClickCard(index) {
    if( kartListesi[index].isOpen === false ) {
        let shortCode = kartListesi[index].shortCode
        kartListesi[index].isOpen = true;
        initCards();
        clickCountCalc();
        if(count === 2 ) {
            selectedShortCode === shortCode ? isEguivalent() : isNotEguivalent(selectedShortCode, shortCode);
            count = 1
        } else {
            count++;
            selectedShortCode = shortCode;
        }

    }
    if(countDown === 100) {
        countDownCalc();
    }
}
function clickCountCalc(){
    clickCount++
    setInnerHtml('hamle', clickCount);
}

function countDownCalc(){
         setIntervalCalc = setInterval(function (){
            countDown--
             setInnerHtml('zaman-sayaci', countDown);
            if (countDown === 0){
                clearInterval(setIntervalCalc);
                document.getElementById('kaybettin-text').classList.add('gorunurluk');
            }
        },100);
}

/*

[].fılter(ıtem => ıtem.ısOpen === true) = [].lenght
[].fınd(ıtem => ıtem.ısOpen === true) = {}
[].some(ıtem => ıtem.ısOpen === true) = boolean
[].every(ıtem => ıtem.ısOpen === true) = boolean

 */

function isEguivalent() {
    let isAllCardsOpen = kartListesi.every( kart => kart.isOpen === true )
    if (isAllCardsOpen) {
        clearInterval(setIntervalCalc);
        document.getElementById('kazandin-text').classList.add('gorunurluk');
    }
}
function isNotEguivalent(selectedShortCode, shortCode) {
    setTimeout(function () {
        kartListesi.filter(kart => (kart.shortCode === shortCode || kart.shortCode === selectedShortCode) && kart.isOpen === true).map(kart => kart.isOpen = false)
        selectedShortCode = '';
        initCards();
    }, 1000)
}
function resetGame(){
     setIntervalCalc = null;
     countDown = 100;
     clickCount = 0;
     count = 1;
     selectedShortCode = '';
     kartListesi.map(kart => kart.isOpen = false);
     document.getElementById('kazandin-text').classList.remove('gorunurluk');
     document.getElementById('kaybettin-text').classList.remove('gorunurluk');
     const domElements = [{id:'hamle', value: clickCount}, {id:'zaman-sayaci', value: countDown}];
     domElements.map(item => setInnerHtml(item.id,item.value))
     setInnerHtml();
     karistir();
}
function setInnerHtml(id, value){
    const domElement = document.getElementById(id);
    domElement.innerHTML = value;
}
function karistir(){
        kartListesi.sort(() => Math.random() - 0.5);
        console.log()
        initCards();
}
karistir();



/*


    <div class="kart gorunurluk">
        <div class="kart-arka kart-yuz">
            <img class="ts" src="https://www.freepnglogos.com/uploads/trabzonspor-logo-png/trabzonspor-armasi-logo-png-16.png" alt="">
        </div>
        <div class="kart-on kart-yuz">
            <img class="sporcu" src="" alt="">
        </div>
    </div>


* */
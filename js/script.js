let currentMice = 0;
const upgrades = [
    {name: 'bucket',
    price: 35,
    image: 'img/bucket.svg',
    mps: 1,
    owned: 0
},
    {name: 'office supply store',
    price: 175,
    image: 'img/store.svg',
    mps: 30,
    owned: 0
},
    {name: 'mouse factory',
    price: 750,
    image: 'img/factory.svg',
    mps: 60,
    owned: 0
    }
];
// Generate buy menu here
let html = ``
for (let i = 0; i < upgrades.length; i++) {
    html +=`<button type="button" onclick="buyMenu(${i})">${upgrades[i].name}</>`    
}
document.querySelector('div').innerHTML=html
setInterval(micePerSecond,1000)
// this is probably bad implamentation. calling a for loop every second^
function micePerSecond() {
    for (let i = 0; i < upgrades.length; i++) {
    currentMice += upgrades[i].owned*upgrades[i].mps;
    document.querySelector('h3').innerHTML=`${currentMice} Mice`
}
}
function buyMenu(index){
    if (currentMice>= Math.round(upgrades[index].price)) {
        currentMice -= Math.round(upgrades[index].price*((0.0025*upgrades[index].owned)+1))
        upgrades[index].owned ++
        document.querySelector('h3').innerHTML=`${currentMice} Mice`
    }
}
function mouseClick() {
    currentMice ++
    document.querySelector('h3').innerHTML=`${currentMice} Mice`
}

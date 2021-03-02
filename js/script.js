
let currentMice = 0;
let ownedUpgrades = [0,0,0]
const upgrades = [
    {name: 'bucket',
    price: 35,
    image: 'img/bucket.svg',
    mps: 1
},
    {name: 'office supply store',
    price: 175,
    image: 'img/store.svg',
    mps: 30
},
    {name: 'mouse factory',
    price: 750,
    image: 'img/factory.svg',
    mps: 60
    }
];
setInterval(micePerSecond,1000)
// this is probably bad implamentation. call for loop every second^
function micePerSecond() {
    for (let i = 0; i < upgrades.length; i++) {
    currentMice += ownedUpgrades[i]*upgrades[i].mps;
    document.querySelector('h3').innerHTML=`${currentMice} Mice`
}
}
function mouseClick() {
    currentMice ++
    document.querySelector('h3').innerHTML=`${currentMice} Mice`
}

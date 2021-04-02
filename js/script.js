let currentMice = 0;
let currentMPS = 0;
const costScale = 0.25;
const upgrades = [
    {
        name: 'bucket',
        price: 35,
        image: 'img/bucket.svg',
        mps: 1,
        owned: 0
    },
    {
        name: 'office_supply_store',
        price: 175,
        image: 'img/store.svg',
        mps: 5,
        owned: 0
    },
    {
        name: 'slot_machine',
        price: 375,
        image: 'img/slot_machine.svg',
        mps: 10,
        owned: 0
    },
    {
        name: 'mouse_factory',
        price: 750,
        image: 'img/factory.svg',
        mps: 20,
        owned: 0
    }
];
// Generate buy menu here
for (let i = 0; i < upgrades.length; i++) {
    document.querySelector('.buymenu').innerHTML += `<button type="button" class="${upgrades[i].name} buybutton" onclick="buyMenu(${i})">${upgrades[i].name} $:${upgrades[i].price}</button>`
}
for (let i = 0; i < upgrades.length; i++) {
    document.querySelector('.total').innerHTML += `<div><img src="${upgrades[i].image}" alt="${upgrades[i].name}" class="objects"><p class="img${upgrades[i].name} ownedTotal">x0</p></div>`
}
setInterval(micePerSecond, 1000)
// this is probably bad implamentation. calling a for loop every second^
function micePerSecond() {
    for (let i = 0; i < upgrades.length; i++) {
        currentMice += upgrades[i].owned * upgrades[i].mps;
        document.querySelector('.count').innerHTML = `${currentMice} Mice`
    }
}
function buyMenu(index) {
    let dae = 0
    if (currentMice >= Math.round(upgrades[index].price)) {
        currentMice -= Math.round(upgrades[index].price * ((costScale * upgrades[index].owned) + 1))
        upgrades[index].owned++
        document.querySelector(`.${upgrades[index].name}`).innerHTML = `${upgrades[index].name} $:${Math.round(upgrades[index].price * ((costScale * upgrades[index].owned) + 1))}`
        document.querySelector(`.img${upgrades[index].name}`).innerHTML = `x${upgrades[index].owned}`
        for (let index = 0; index < upgrades.length; index++) {
            dae += upgrades[index].mps*upgrades[index].owned;}
        document.querySelector('.count').innerHTML = `${currentMice} Mice`
        currentMPS = dae
        document.querySelector('.mps').innerHTML = `Current Mice per Second ${currentMPS}`
    }
}
function mouseClick() {
    currentMice++
    document.querySelector('.count').innerHTML = `${currentMice} Mice`
}

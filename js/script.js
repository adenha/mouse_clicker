
let currentMice = 0;

function mouseClick() {
    currentMice ++
    document.querySelector('h3').innerHTML=`${currentMice} Mice`
}
// document.querySelector('h3').innerHTML=`${currentMice} Mice`;
const containerEI  = document.querySelector(".container");
let numberArray = [0,0];

function colorCode() {
    let colorCode = "#";
    const chars = "0123456789abcdef";
    const charsLength = chars.length;
    for (let i=0; i<6; i++) {
        const randomNumber = Math.floor(Math.random()*charsLength);
        colorCode += chars.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}


function createBoxes() {
    let boxNumbersEI = document.getElementById("box-nums").value;
    if (boxNumbersEI>20) {
        document.getElementById("box-nums").value = "20";
        boxNumbersEI = 20;
    }
    numberArray.shift();
    numberArray.push(boxNumbersEI);
if (numberArray[1]>numberArray[0]) {
    for (let i=0; i<numberArray[1]-numberArray[0]; i++) {
        const box = document.createElement("div");
        box.classList.add("color-container");

        containerEI.appendChild(box);
    }
}
if (numberArray[1]<numberArray[0]) {
    for (let i=0; i<numberArray[0]-numberArray[1]; i++) {
        containerEI.removeChild(containerEI.lastElementChild);
    }
}
const colorContainerEIs= document.querySelectorAll(".color-container");
generateColor();
function generateColor() {
    colorContainerEIs.forEach((box)=>{
        const newcolorCode = colorCode();
        box.style.backgroundColor = newcolorCode;
        box.innerHTML= newcolorCode;
    })
}
}












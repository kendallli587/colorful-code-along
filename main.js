// Color Arrays

// Variables for HTML elements
let containerEl = document.getElementById("container");

// Array
let colors = ["red", "green", "blue", "orange", "cyan", "purple", "maroon"];
// Index ->     0        1       2        3        4       5


// Display all colors on the page
let divStr = "";
for (let i = 0; i < colors.length; i++) {
    divStr += `<div style="background: ${colors[i]}"></div>`;
}
containerEl.innerHTML = divStr;





// Function Library
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomElement(anArray) {
    return anArray[randomInt(0, anArray.length)];
}

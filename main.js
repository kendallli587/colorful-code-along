// Color Arrays

// Variables for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Event Listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
    if (event.keyCode === 13) {
        // Create color array based on user input
        let inputStr = inputEl.value;
        let colorsArray = inputStr.split(",");
        displayColors(colorsArray);
    }
}

function displayColors(colors) {
    // Display all colors on the page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style="background: ${colors[i]}"></div>`;
    }
    containerEl.innerHTML = divStr;
}





// Function Library
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomElement(anArray) {
    return anArray[randomInt(0, anArray.length)];
}

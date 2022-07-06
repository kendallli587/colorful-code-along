// Color Arrays

// Variables for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Global Variable
let colors = [];

// Event Listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
    if (event.keyCode === 13) {
        // Add user's input to colors array and display
        colors.push(inputEl.value);
        inputEl.value = "";
        displayColors(colors);
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

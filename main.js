// Color Arrays

// Variables for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Global Variable
let colors = [];

// Fetch Content from .txt file
fetch("colours.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    // \r\n is the read line character and new line character
    // Question mark makes looking for \r character optional, 'n always there
    colors = stringData.split(/\r?\n/); // Split lines into array
    displayColors(colors);
}

// Event Listener
inputEl.addEventListener("keyup", submitHandler);

function submitHandler(event) {
    // Display all colors on the page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes(inputEl.value)) {
            divStr += `<div style="background: ${colors[i]}"></div>`;
        }
    }
    containerEl.innerHTML = divStr;

}

function displayColors(colors) {
    // Display all colors on the page
    let divStr = "";
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style="background: ${colors[i]}"></div>`;
        count++
    }
    containerEl.innerHTML = divStr + `<p>Count: ${count}</p>`;
}





// Function Library
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomElement(anArray) {
    return anArray[randomInt(0, anArray.length)];
}

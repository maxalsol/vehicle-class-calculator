// setup variables for input and output & access
//let inputFields = document.getElementsByTagName("input");
let numGvm = document.getElementById("gvm");
let numTare = document.getElementById("tare");
let numSeats = document.getElementById("seats");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset");
let output = document.getElementById("output");

// eventhandler
// click
submitBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

// touch
submitBtn.addEventListener("touchend", calculate);
resetBtn.addEventListener("touchend", reset);

// keypress
// numGvm.addEventListener("keypress", errMsg);
// numTare.addEventListener("keypress", enterKey);
// numSeats.addEventListener("keypress", enterKey);

// calculate based on formula & output on screen
// (number of seats x 68) < (1/2 x GVM - Tare weight) = NA, esle MA
// handle empty inputs
function calculate(evt) {
    evt.preventDefault();

    let gvm = document.getElementById("gvm").value;
    let tare = document.getElementById("tare").value;
    let seats = document.getElementById("seats").value;

    let carWeight = 0.5 * (gvm - tare);
    let seatWeight = seats * 68;

    console.log(seatWeight);
    console.log(carWeight);

    if (seatWeight < carWeight) {
        output.textContent = "NA";
    } else if (seatWeight > carWeight) {
        output.textContent = "MA";
    } else {
        output.textContent = "Please enter data.";
    }

    console.log(output.textContent);
}

//function for enter key
// function enterKey(evt) {
//     if (evt.keyCode === 13) submitBtn.click();
// }

// function errMsg() {
//     let numGvm = document.getElementById("gvm").value;
//     if (numGvm.value == null) {
//         output.style.color = "red";
//     }
// }

// reset button
function reset() {
    output.textContent = "";
}

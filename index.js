// setup variables for input and output & access
// let numGvm = document.getElementById("gvm");
// let numTare = document.getElementById("tare");
// let numSeats = document.getElementById("seats");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let output = document.getElementById("output");

// eventhandler
// click
submitBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

// touch
submitBtn.addEventListener("touchend", calculate);
resetBtn.addEventListener("touchend", reset);

// calculate based on formula & output on screen
// (number of seats x 68) < (1/2 x GVM - Tare weight) = NA, esle MA
// handle empty inputs
function calculate(evt) {
    // prevent default form execution
    evt.preventDefault();

    // variables
    let gvm = document.getElementById("gvm").value;
    let tare = document.getElementById("tare").value;
    let seats = document.getElementById("seats").value;

    // calculation
    let carWeight = (gvm - tare) / 2;
    let seatWeight = seats * 68;

    // result
    let result = "";

    console.log(gvm);
    console.log(tare);
    console.log(seats);

    console.log(seatWeight);
    console.log(carWeight);

    // logic
    if (seatWeight < carWeight) {
        result = "NA";
        output.textContent = result;
        output.style.color = "black";
    } else if (seatWeight > carWeight) {
        result = "MA";
        output.textContent = result;
        output.style.color = "black";
    }

    // no input handling
    if (!gvm) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (!tare) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (!seats) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    }

    //result
    console.log(result);
}

// reset button
function reset() {
    output.textContent = "";
}

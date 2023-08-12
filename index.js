// setup variables for input and output & access

let submitBtn = document.getElementById("submit-btn");
// let submitBtnVal = "";
// if (submitBtn) {
//     submitBtnVal = submitBtn.value;
// }
let output = document.getElementById("output");
let resetBtn = document.getElementById("reset");

// eventhandler
submitBtn.addEventListener("click", calculate);
submitBtn.addEventListener("touchend", calculate);
resetBtn.addEventListener("click", reset);
resetBtn.addEventListener("touchend", reset);

// calculate based on formula & output on screen
// (number of seats x 68) < (1/2 x GVM - Tare weight) = NA, esle MA
function calculate() {
    let gvm = document.getElementById("gvm").value;
    let tare = document.getElementById("tare").value;
    let seats = document.getElementById("seats").value;

    let carWeight = 0.5 * (gvm - tare);
    let seatWeight = seats * 68;

    console.log(gvm);
    console.log(tare);
    console.log(seats);

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

// calculate(gvmVal, tareVal, seatsVal);

// reset button
function reset() {
    output.textContent = "";
}

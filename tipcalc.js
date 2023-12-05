// Joshua Gregory
// Professor Montgomery
// Internet Programming
// tipcalc.html JS File


// get relevant ids from dom set to global scope vars
const subtotal = document.getElementById("subtotal");
const slider = document.getElementById("tip-slider");
const tipBox = document.getElementById("tip-value-box");
const totalBox = document.getElementById("total-box");
const tipAmt = document.getElementById("tip-amount");
const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");
const splitBtn = document.getElementById("split-btn");


// DISPLAY TIP PERCENTAGE ACCORDING TO SLIDER POSITION
slider.addEventListener("click" , function() {
  // change value according to slider position
  tipBox.innerHTML = slider.value + "%";
});


// CALCULATE AND DISPLAY TOTAL WHEN BUTTON IS CLICKED
calcBtn.addEventListener("click" , function() {
  // get slider & subtotal values
  const tipVal = parseFloat(slider.value);
  const subVal = parseFloat(subtotal.value);
  
  // calculate total, round to 2 decimals
  const totalVal = (((tipVal/100)*subVal) + subVal).toFixed(2);
  totalBox.innerHTML = totalVal;  // display total

  // display values used in calculation
  tipAmt.innerHTML = "($" + ((tipVal/100)*subVal).toFixed(2) + " tip + $" + 
    subVal.toFixed(2) + " subtotal.)";
});


// SPLIT TOTAL PER PERSON
splitBtn.addEventListener("click", function() {
  // prompt for number of people splitting check
  let numPpl = prompt("How many people are splitting the check?");

  if(numPpl > 1) {
    let oldTotal = parseFloat(totalBox.innerHTML);  // store and convert input
    let newTotal = (oldTotal/numPpl).toFixed(2);    // divide and round 
    totalBox.innerHTML = newTotal;                  // display new total

    // redefine tipVal and subVal, alter total details
    const tipVal = parseFloat(slider.value);
    const subVal = parseFloat(subtotal.value);
    tipAmt.innerHTML = "($" + tipVal + " tip + $" + subVal + " subtotal, divided by " + 
      numPpl + " diners.)";
  }
});


// CLEAR FIELDS ON RESET BUTTON CLICK
resetBtn.addEventListener("click" , function() {
  // reset fields to initial values
  slider.value = "10";
  subtotal.value = "";
  tipBox.innerHTML = "10%";
  totalBox.innerHTML = "0.00";
});
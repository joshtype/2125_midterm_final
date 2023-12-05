// Joshua Gregory
// Professor Montgomery
// Internet Programming
// tipcalc.html JS File


// get relevant ids from dom
const subtotal = document.getElementById("subtotal");
const slider = document.getElementById("tip-slider");
const tipBox = document.getElementById("tip-value-box");
const totalBox = document.getElementById("total-box");
const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");

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
  const totalVal = (((tipVal/100) * subVal) + subVal).toFixed(2);
  
  // display total
  totalBox.innerHTML = totalVal;
});

// CLEAR FIELDS ON RESET BUTTON CLICK
resetBtn.addEventListener("click" , function() {
  // reset fields to initial values
  slider.value = "10";
  subtotal.value = "";
  tipBox.innerHTML = "10%";
  totalBox.innerHTML = "0.00";
});
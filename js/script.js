// First Page Start
let firstHeading = document.getElementById("firstHeading");
let firstInput = document.getElementById("firstInput");
let firstBtn = document.getElementById("firstBtn");
let firstWarningText = document.getElementById("firstWarningText");
let firstHidden = document.getElementById("first");
let secoundHidden = document.getElementById("secound");
let secoundHeading = document.getElementById("secoundHeading");

firstBtn.addEventListener("click", () => {
  let inputValue = firstInput.value;
  if (inputValue == "") {
    firstWarningText.removeAttribute("hidden");
    firstInput.value = "";
  } else {
    firstWarningText.setAttribute("hidden", true);
    firstInput.value = "";
    firstHidden.setAttribute("hidden");
    secoundHidden.removeAttribute("hidden");
    secoundHeading.innerText = inputValue;
  }
});

// First Page End

// Secound Page Start

// Secound Page End

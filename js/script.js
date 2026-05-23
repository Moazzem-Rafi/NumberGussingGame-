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
let secoundInput = document.getElementById("secoundinput");
let secoundBtn = document.getElementById("secoundBtn");
let secoundWarningText = document.getElementById("secoundWarningText");
let thirdHidden = document.getElementById("third");

secoundBtn.addEventListener("click", () => {
  let inputValue = secoundInput.value;
  if (secoundInput.value < 1 || secoundInput.value > 10) {
    secoundWarningText.removeAttribute("hidden");
    secoundInput.value = "";
  } else {
    secoundWarningText.setAttribute("hidden", true);
    secoundHidden.setAttribute("hidden", true);
    thirdHidden.removeAttribute("hidden");
  }
});
// Secound Page End

// Third Page Start
let thirdHeading = document.getElementById("thirdHeading");
let thirdInput = document.getElementById("thirdInput");
let thirdBtn = document.getElementById("thirdBtn");
let thirdWarningText = document.getElementById("thirdWarningText");
let fourthHidden = document.getElementById("fourth");

thirdBtn.addEventListener("click", () =>{
let inputValue = thirdInput.value ;
if (inputValue == "") {
    thirdWarningText.removeAttribute("hidden");
    thirdInput.value = "";
} else {
    thirdWarningText.setAttribute("hidden",true);
    thirdInput.value = "";
    thirdHidden.setAttribute("hidden" , true);
    fourthHidden.removeAttribute("hidden");
}
});
// Third Page End

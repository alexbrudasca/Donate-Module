const inputDollar = document.getElementById('inputDollar');
  

inputDollar.addEventListener('input', () => {
  const dollarSign = document.querySelector('.dollar-sign');
  dollarSign.textContent = '$'; 
  

  inputDollar.value = inputDollar.value.replace(/[^0-9]/g, '');
});


const nextButton = document.getElementById("next-step");
const secondContainer = document.querySelector(".personal-step");
const mainContainer = document.querySelector(".first-step");
const mainerror = document.querySelector(".mainError");

nextButton.addEventListener("click", () => {
  if (inputDollar.value.trim() === "") {
    mainerror.classList.remove("hidden");
    secondContainer.classList.add("hidden");
} else {
    mainContainer.style.display = "none";
    secondContainer.classList.remove("hidden");
  }
});


const backButton = document.querySelector(".fa-chevron-left")

backButton.addEventListener("click",()=>{
    secondContainer.classList.add("hidden")
    mainContainer.style.display = "flex"
})

// donate button
const donateButton = document.querySelector(".donateBtn");
const emailInput = document.getElementById("email");
const fnameInput = document.getElementById("firstName");
const lnameInput = document.getElementById("lastName");
const error = document.querySelector(".error");
const succes = document.querySelector(".succesfullyDonate")
  const successNameSpan = document.querySelector(".succesName");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

donateButton.addEventListener("click", () => {
  const hasEmptyFields = emailInput.value.trim() === "" || fnameInput.value.trim() === "" || lnameInput.value.trim() === "";
  // regex email
  const isValidEmailFormat = isValidEmail(emailInput.value.trim());

  if (hasEmptyFields || !isValidEmailFormat) {
    error.classList.remove("hidden");

  } else {
    error.classList.add("hidden");
    succes.classList.remove("hidden")
    secondContainer.classList.add("hidden")
  }
  successNameSpan.textContent = fnameInput.value.trim();
});







$(document).ready(function() {
    // Function to update revealSum with the value from inputDollar
    function updateRevealSum() {
      var donationAmount = $("#inputDollar").val();
      $("#revealSum").text("$ " + donationAmount);
    }

    // Call the update function whenever the inputDollar changes
    $("#inputDollar").on("input", updateRevealSum);
  });
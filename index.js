/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//convertion ratios
const meterFeet = 3.281;
const literGallon = 0.264;
const kilogramPound = 2.204;

const buttonEl = document.getElementById("btn-el");
const inputEl = document.getElementById("entry");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const messageEl = document.getElementById("message");

buttonEl.addEventListener("click", function () {
  const input = inputEl.value;
  messageEl.textContent = "";

  if (input) {
    if (
      isNaN(input)
    ) {
      messageEl.textContent = "please enter a number!";
    }
    // prettier-ignore
    else {
      lengthEl.innerHTML = `${input} meters = ${metersToFeet(
        input
      )} feet | ${input} feet = ${feetToMeters(input)} meters`;
      volumeEl.innerHTML = `${input} liters = ${litersToGallons(
        input
      )} gallons | ${input} gallons = ${gallonsToLiters(input)} liters`;
      massEl.innerHTML = `${input} kilos = ${kilogramsToPounds(
        input
      )} pounds | ${input} pounds = ${poundsToKilograms(input)} kilos`;
    }
  } else {
    messageEl.textContent = "please enter a value!";
  }
});

function metersToFeet(num) {
  return (num * meterFeet).toFixed(3);
}

function feetToMeters(num) {
  return (num / meterFeet).toFixed(3);
}

function litersToGallons(num) {
  return (num * literGallon).toFixed(3);
}

function gallonsToLiters(num) {
  return (num / literGallon).toFixed(3);
}

function kilogramsToPounds(num) {
  return (num * kilogramPound).toFixed(3);
}

function poundsToKilograms(num) {
  return (num / kilogramPound).toFixed(3);
}

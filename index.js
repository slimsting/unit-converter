/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterFeet = 3.281
const literGallon = 0.264
const kilogramPound = 2.204
const button = document.getElementById('btn-el')

button.addEventListener("click", function(){
    
    const inputEl = document.getElementById("entry").value 
    const lengthEl = document.getElementById("length")  
    const volumeEl = document.getElementById("volume") 
    const massEl = document.getElementById("mass")  
    const message = document.getElementById("message")
    
    message.textContent = ""
    
    if(inputEl){
        if(isNaN(inputEl)){
            message.textContent = "please enter a number!"
        }
        else{
            lengthEl.innerHTML = `${inputEl} meters = ${metersToFeet(inputEl)} feet | 
                        ${inputEl} feet = ${feetToMeters(inputEl)} meters`
            volumeEl.innerHTML = `${inputEl} liters = ${litersToGallons(inputEl)} gallons | 
                            ${inputEl} gallons = ${gallonsToLiters(inputEl)} liters`
            massEl.innerHTML = `${inputEl} kilos = ${kilogramsToPounds(inputEl)} pounds | 
                            ${inputEl} pounds = ${poundsToKilograms(inputEl)} kilos`
        }
        
    }
    else{
        message.textContent = "please enter a value!"
    }
    
})

function metersToFeet(num){
    return (num * meterFeet).toFixed(3)
}

function feetToMeters(num){
    return (num / meterFeet).toFixed(3)
}

function litersToGallons(num){
    return (num * literGallon).toFixed(3)
}

function gallonsToLiters(num){
    return (num / literGallon).toFixed(3)
}

function kilogramsToPounds(num){
    return (num * kilogramPound).toFixed(3) 
}

function poundsToKilograms (num){
    return (num / kilogramPound).toFixed(3)
}
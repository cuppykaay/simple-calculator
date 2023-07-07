let error = document.getElementById("error")

function purchase() {
    error.textContent = "Something went wrong, please try again"
}

const sumEl = document.getElementById("sum-el")

let num1 = 5
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function addition(){
   total = num1 + num2
   sumEl.textContent += total
   
}

function subtraction(){
    total = num1 - num2
    sumEl.textContent += total
    
}

function division(){
    total = num1 / num2
    sumEl.textContent += total
    
}

function multiply(){
    total = num1 * num2
    sumEl.textContent += total
    
}
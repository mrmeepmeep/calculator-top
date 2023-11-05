const buttons = document.querySelectorAll("#btn")
const display = document.querySelector(".screen")
const equal = document.querySelector("#equalBtn")
const clear = document.querySelector("#clearBtn")
let output = ""
let previousValue;
let currentValue;
let num1;
let num2;




buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let currentValue = e.target.dataset.value
        display.value += currentValue
    })
})


function operate(){

}



/* function add(num1,num2){
    console.log (num1 + num2)

}
add(3,9)

function subtract(num1,num2){

    console.log(num1 - num2)

}
subtract(2,10)

function multiply(num1,num2){

    console.log(num1 * num2)

}

multiply(4,4)

function divide(num1,num2){
    console.log(num1 / num2)
}

divide(10,2) */
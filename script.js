let operator = '';
let previousValue = '';
let currentValue = '';


let clear = document.querySelector("#clearBtn")
let equal = document.querySelector("#equalBtn")
let decimal = document.querySelector("#decimalBtn")

let numbers = document.querySelectorAll("#numberBtn")
let operators = document.querySelectorAll("#operatorBtn")

let previousScreen = document.querySelector(".previous")
let currentScreen = document.querySelector(".current")

numbers.forEach((number) => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
}))
operators.forEach((op) => op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue
}))
clear.addEventListener('click' , (e) => {
    previousValue = ''
    currentValue = ''
    operator = ''
    previousScreen.textContent = ''
    currentScreen.textContent = ''
})

equal.addEventListener('click' , function(){
    calculate()
    previousScreen.textContent = ''
    currentScreen.textContent = previousValue
})


function handleNumber(num){
   if (currentValue.length <= 10) {
    currentValue += num;
   }
}

function handleOperator(op){
  operator = op;
  previousValue = currentValue
  currentValue = ''
    
}

function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === '+'){
        previousValue += currentValue;
    } else if(operator === '-'){
        previousValue -= currentValue
    } else if (operator === "*"){
        previousValue *= currentValue
    } else if (operator === '/'){
        previousValue /= currentValue
    } else if (operator === '%') {
        previousValue %= currentValue
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
    console.log(previousValue)
}

function roundNumber(num){
    return Math.round(num * 1000 / 1000)
}
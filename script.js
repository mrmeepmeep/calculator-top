const button = document.querySelectorAll(".numberBtn")
const calcBtn = document.querySelectorAll(".calcBtn")


let num1;
let operator;
let num2;

button.forEach(button => {
    button.addEventListener('click' , (e) => {
        console.log(e.target.id)
    })
})

calcBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id)
    })
})



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
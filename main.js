let firstNumber = null;
let operator = null;
let secondNumber = null;

let display = "";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("=");
const clear = document.getElementById("c");

numbers.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (operator === null) {
            if (firstNumber === null) {
                firstNumber = e.target.id;
            } else {
                firstNumber += e.target.id;
            }
        } else {
            if (secondNumber === null) {
                secondNumber = e.target.id;
            } else {
                secondNumber += e.target.id;
            }
        }
        display += e.target.id;
        populate();
    });
});

operators.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (operator === null) {
            operator = e.target.id;
            display += operator;
            populate();
        } else {
            const result = operate(operator, Number(firstNumber), Number(secondNumber));
            secondNumber = null;
            firstNumber = result;
            operator = e.target.id;
            display = result + operator;
            populate();
        }
    });
});

equals.addEventListener("click", (e) => {
    if (operator && firstNumber && secondNumber) {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        operator = secondNumber = null;
        firstNumber = result;
        display = result;
        populate();
    }
});

clear.addEventListener("click", (e) => {
    display = "";
    operator = firstNumber = secondNumber = null;
    populate();
});

function populate() {
    const displayElement = document.querySelector(".display");
    displayElement.textContent = display;
}

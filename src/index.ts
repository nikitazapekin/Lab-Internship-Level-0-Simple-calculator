
import '../styles/index.scss';
import '../styles/global.scss';
import '../styles/theme.scss';
import '../styles/normalize.scss';
const calculatorInput = document.getElementById("calculatorInput") as HTMLInputElement;
let currentValue = calculatorInput.value;
const buttons = document.querySelectorAll(".calculator__btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = (button as HTMLElement).getAttribute("data-action");
        if (action === "clear") {
            handleClear()

        } else if (action == "plusMinus") {
            handlePlusMinus()
        } else if (action == "equals") {

            handleEquals()
        }
        else if (action) {
            const lastChar = currentValue[currentValue.length - 1];
            const isLastCharOperator = /[+\-*/.%]/.test(lastChar);
            if (["plus", "minus", "multiply", "divide", "decimal", "percent"].includes(action) && !isLastCharOperator) {

                updateDisplay(getOperatorSymbol(action));
            }
            else if (!["plus", "minus", "multiply", "divide", "decimal", "percent"].includes(action)) {
                updateDisplay(action);
            }
        }
    });
});
function getOperatorSymbol(action: string): string {
    switch (action) {
        case "plus": return "+";
        case "minus": return "-";
        case "multiply": return "*";
        case "divide": return "/";
        case "decimal": return ".";
        case "percent": return "%";
        default: return "";
    }
}
function handleClear() {
    currentValue = ""
    calculatorInput.value = currentValue
}
function updateDisplay(symbol: string) {
    currentValue = currentValue + symbol
    calculatorInput.value = currentValue
}
function handlePlusMinus() {
  /*  let currentValue = calculatorInput.value;


    if (!currentValue.includes("+")) {
        currentValue = "-" + currentValue;
    } else {

        currentValue = currentValue.replace(/\+/g, "-");
    }

    if (currentValue.includes("-")) {
        if (currentValue[0] == "-") {

            currentValue = currentValue.slice(1, currentValue.length).replace(/-/g, "+");
        } else {
            currentValue = currentValue.replace(/-/g, "+");
        }
    }
    calculatorInput.value = currentValue;
    */



    if (currentValue[0] === "-") {
        currentValue = currentValue.slice(1).replace(/[+-]/g, (match) => match === "+" ? "-" : "+");
    } else {
        currentValue = "-" + currentValue.replace(/[+-]/g, (match) => match === "+" ? "-" : "+");
    }

    calculatorInput.value = currentValue;


}
function handleEquals() {
    let expression = currentValue.trim();
    if (!expression) return;
    expression = processMultiplicationDivision(expression);
    expression = processAdditionSubtraction(expression);
    calculatorInput.value = expression;
    currentValue = expression;
}
function processMultiplicationDivision(expression: string): string {
    let regex = /([0-9]+(?:\.[0-9]+)?)([*/%])([0-9]+(?:\.[0-9]+)?)/g;
    expression = expression.replace(regex, (match, num1, operator, num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let result: number = 0;
        if (operator === "*") {
            result = n1 * n2;
        } else if (operator === "/") {
            result = n1 / n2;
        } else if (operator === "%") {
            result = n1 % n2;
        }

        return result.toString();
    });

    return expression;
}

function processAdditionSubtraction(expression: string): string {
    let regex = /([0-9]+(?:\.[0-9]+)?)([+\-])([0-9]+(?:\.[0-9]+)?)/g;


    expression = expression.replace(regex, (match, num1, operator, num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);


        let result: number = 0;

        if (operator === "+") {
            result = n1 + n2;
        } else if (operator === "-") {
            result = n1 - n2;
        }

        return result.toString();
    });

    return expression;
}

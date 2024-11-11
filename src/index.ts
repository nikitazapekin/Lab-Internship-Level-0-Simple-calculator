
import '../styles/index.scss';
import '../styles/global.scss';
import '../styles/theme.scss';
import '../styles/normalize.scss';



const calculatorInput = document.getElementById("calculatorInput") as HTMLInputElement;
let currentValue = calculatorInput.value;
let previousValue = "";
let operator: string | null = null;
let resetDisplay = false;

const buttons = document.querySelectorAll(".calculator__btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = (button as HTMLElement).getAttribute("data-action");
        if (action === "clear") {
            handleClear()
            //  handleClear();
        } else if (action == "plusMinus") {
            //  handlePlusMinus();
            // updateDisplay(action);
        } else if (action == "percent") {
            //  handlePercent();
            // updateDisplay(action);
        } else if (action == "equals") {
            //  handleEquals();
            // updateDisplay(action);
        }
 
        else if (action) {
          /*  if (action == "plus" && !["plus", "minus", "multiply", "divide"].includes(currentValue[currentValue.length])) {
                updateDisplay("+");
            }
            else if (action == "minus" && !["plus", "minus", "multiply", "divide"].includes(currentValue[currentValue.length])) {
                updateDisplay("-");
            }
            else if (action == "multiply" && !["plus", "minus", "multiply", "divide"].includes(currentValue[currentValue.length])) {
                updateDisplay("*");
            }
            else if (action == "divide" && !["plus", "minus", "multiply", "divide"].includes(currentValue[currentValue.length])) {
                updateDisplay("/");
            }
            else {
                updateDisplay(action);

            }


            */


            const lastChar = currentValue[currentValue.length - 1];
            const isLastCharOperator = /[+\-*/.]/.test(lastChar);  
            
            if (["plus", "minus", "multiply", "divide", "decimal"].includes(action) && !isLastCharOperator) {
             
                updateDisplay(getOperatorSymbol(action));
            } else if (!["plus", "minus", "multiply", "divide", "decimal"].includes(action)) {
           
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
        default: return "";
    }
}
function handleClear() {
    // console.log("www")
    //updateDisplay(" ");
    currentValue = "0"
    calculatorInput.value = currentValue
}
function updateDisplay(symbol: string) {
    currentValue = currentValue + symbol
    calculatorInput.value = currentValue
}
/*
   const calculatorInput = document.getElementById("calculatorInput") as HTMLInputElement;
   let currentValue = "0";
   let previousValue = "";
   let operator: string | null = null;
   let resetDisplay = false;
 
 
   function updateDisplay(value: string) {
   calculatorInput.value = value;
  
   }
 
 
   function handleDigit(digit: string) {
     if (resetDisplay) {
       currentValue = digit;
       resetDisplay = false;
     } else {
       currentValue = currentValue === "0" ? digit : currentValue + digit;
     }
   
   updateDisplay(currentValue);
   }
 
 
   function handleOperator(op: string) {
     if (operator !== null) {
       calculate();
     }
     previousValue = currentValue;
     currentValue = "0";
     operator = op;
   }
 
   function calculate() {
     if (previousValue === "" || operator === null) return;
 
     let result: number;
     const prev = parseFloat(previousValue);
     const current = parseFloat(currentValue);
 
     switch (operator) {
       case "+":
         result = prev + current;
         break;
       case "-":
         result = prev - current;
         break;
       case "×":
         result = prev * current;
         break;
       case "÷":
         if (current === 0) {
           updateDisplay("Error");
           return;
         }
         result = prev / current;
         break;
       default:
         return;
     }
 
     currentValue = result.toString();
     operator = null;
     updateDisplay(currentValue);
   }
 
 
   function handleEquals() {
     calculate();
     operator = null;
   }
 
 
   function handleClear() {
     currentValue = "0";
     previousValue = "";
     operator = null;
     updateDisplay(currentValue);
   }
 
 
   function handlePlusMinus() {
     if (currentValue !== "0") {
       currentValue = (parseFloat(currentValue) * -1).toString();
       updateDisplay(currentValue);
     }
   }
 
 
   function handlePercent() {
     currentValue = (parseFloat(currentValue) / 100).toString();
     updateDisplay(currentValue);
   }
 
 
   function handleDecimal() {
     if (!currentValue.includes(".")) {
       currentValue += ".";
       updateDisplay(currentValue);
     }
   }
 
 
   const buttons = document.querySelectorAll(".calculator__btn");
   buttons.forEach((button) => {
     button.addEventListener("click", () => {
       const action = (button as HTMLElement).getAttribute("data-action");
       if (action === "clear") {
         handleClear();
       } else if (action === "plusMinus") {
         handlePlusMinus();
       } else if (action === "percent") {
         handlePercent();
       } else if (action === "equals") {
         handleEquals();
       } else if (["add", "subtract", "multiply", "divide"].includes(action || "")) {
         handleOperator(action || "");
       } else if (action) {
         handleDigit(action);
       }
     });
   });
 
 */

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
         handlePlusMinus()
        }  else if (action == "equals") {
            //  handleEquals();
            // updateDisplay(action);
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

function handlePlusMinus () {
   let currentValue = calculatorInput.value;
    
    
    if (!currentValue.includes("+")) {
        currentValue = "-" + currentValue;
    } else {
      
        currentValue = currentValue.replace(/\+/g, "-");
    }
     
    if (currentValue.includes("-")) {
        if(currentValue[0]=="-") {

              currentValue = currentValue.slice(1, currentValue.length).replace(/-/g, "+");
        } else {
            currentValue = currentValue.replace(/-/g, "+");
        }
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
    let regex = /([0-9]+(?:\.[0-9]+)?)([*/])([0-9]+(?:\.[0-9]+)?)/g;

    // Обрабатываем умножение и деление
    expression = expression.replace(regex, (match, num1, operator, num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

     
        let result: number = 0;

        if (operator === "*") {
            result = n1 * n2;
        } else if (operator === "/") {
            result = n1 / n2;
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
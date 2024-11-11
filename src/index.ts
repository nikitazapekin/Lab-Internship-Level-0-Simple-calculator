
import '../styles/index.scss';
import '../styles/global.scss';
import '../styles/theme.scss';
import '../styles/normalize.scss';
import { getOperatorSymbol } from './helpers';
 import {handleClear, handlePlusMinus, handleEquals, updateDisplay, currentValue } from "./methods"
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
  
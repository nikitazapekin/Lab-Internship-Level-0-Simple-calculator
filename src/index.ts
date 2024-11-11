import '../styles/index.scss';
import '../styles/global.scss';
import '../styles/theme.scss';
import '../styles/normalize.scss';
import { getOperatorSymbol } from './helpers';

import { handleClear, handlePlusMinus, handleEquals, updateDisplay, currentValue } from './methods';
const buttons = document.querySelectorAll('.calculator__btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = (button as HTMLElement).getAttribute('data-action');
        if (action === 'clear') {
            handleClear();
        } else if (action == 'plusMinus') {
            handlePlusMinus();
        } else if (action == 'equals') {
            handleEquals();
        } else if (action) {
            const lastChar = currentValue[currentValue.length - 1];
            const isLastCharOperator = /[+\-*/.%]/.test(lastChar);
            if (['plus', 'minus', 'multiply', 'divide', 'decimal', 'percent'].includes(action) && !isLastCharOperator && currentValue) {
                updateDisplay(getOperatorSymbol(action));
            } else if (!['plus', 'minus', 'multiply', 'divide', 'decimal', 'percent'].includes(action)) {
                updateDisplay(action);
            }
        }
    });
});

const selectElement = document.querySelector('.header__select') as HTMLSelectElement;
const logoElement = document.querySelector('.header__logo') as HTMLElement;
const calculatorGrayBtns = document.querySelectorAll('.btn__gray') as NodeListOf<HTMLElement>;
const calculator = document.querySelector(".calculator__inner") as HTMLDivElement
const calculatorOrangeBtns = document.querySelectorAll('.btn__orange') as NodeListOf<HTMLElement>;
const calculatorLightGrayBtns = document.querySelectorAll('.btn_grayLight') as NodeListOf<HTMLElement>;

function applyTheme(theme: string): void {
    if (theme === 'dark') {

        document.body.style.backgroundColor = "#1f1e1e"
        logoElement.style.color = '#ffffff';

        calculatorLightGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#646464"

        })
        calculatorGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#3d3d3d"
        })
        calculator.style.backgroundColor = "#535353"
        calculatorOrangeBtns.forEach(btn => {
            btn.style.backgroundColor = "#ff9f0a"
        })

    } else {
        document.body.style.backgroundColor = "#ffffff";
        logoElement.style.color = '#1f1e1e'

        calculatorLightGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#7d7d7d"

        })
        calculatorGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#646464"
        })
        calculator.style.backgroundColor = "#e6e6e6"

        calculatorOrangeBtns.forEach(btn => {
            btn.style.backgroundColor = "#cf7f07"
        })
    }
}



const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
    selectElement.value = savedTheme;
} else {
    applyTheme('light');
}

selectElement.addEventListener('change', () => {
    const selectedTheme = selectElement.value;
    applyTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});
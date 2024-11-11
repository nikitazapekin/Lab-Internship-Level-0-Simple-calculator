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
const calculatorBtns = document.querySelectorAll('.calculator__btn') as NodeListOf<HTMLElement>;



 
function applyTheme(theme: string): void {
    if (theme === 'dark') {
      // Применяем темную тему
      logoElement.style.color = '#fff'; 
      logoElement.style.backgroundColor = '#333';  
      calculatorBtns.forEach(btn => {
        btn.style.backgroundColor = '#444'; 
        btn.style.color = '#fff'; 
      });
    } else {
 
      logoElement.style.color = '#333';  
      logoElement.style.backgroundColor = '#fff'; 
      calculatorBtns.forEach(btn => {
        btn.style.backgroundColor = '#fff'; 
        btn.style.color = '#333'; 
      });
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
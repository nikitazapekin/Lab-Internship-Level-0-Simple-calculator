export const calculatorInput = document.getElementById('calculatorInput') as HTMLInputElement;
export let currentValue = calculatorInput.value;
export function handleClear() {
	currentValue = '';
	calculatorInput.value = currentValue;
}
export function updateDisplay(symbol: string) {
	currentValue = currentValue + symbol;
	calculatorInput.value = currentValue;
}
export function handlePlusMinus() {
	if (currentValue[0] === '-') {
		currentValue = currentValue.slice(1).replace(/[+-]/g, (match) => (match === '+' ? '-' : '+'));
	} else {
		currentValue = '-' + currentValue.replace(/[+-]/g, (match) => (match === '+' ? '-' : '+'));
	}

	calculatorInput.value = currentValue;
}
export function handleEquals() {
	let expression = currentValue.trim();
	if (!expression) return;
	expression = processMultiplicationDivision(expression);
	expression = processAdditionSubtraction(expression);
	calculatorInput.value = expression;
	currentValue = expression;
}
export function processMultiplicationDivision(expression: string): string {
	let regex = /([0-9]+(?:\.[0-9]+)?)([*/%])([0-9]+(?:\.[0-9]+)?)/g;
	expression = expression.replace(regex, (match, num1, operator, num2) => {
		const n1 = parseFloat(num1);
		const n2 = parseFloat(num2);
		let result: number = 0;
		if (operator === '*') {
			result = n1 * n2;
		} else if (operator === '/') {
			result = n1 / n2;
		} else if (operator === '%') {
			result = n1 % n2;
		}

		return result.toString();
	});

	return expression;
}

export function processAdditionSubtraction(expression: string): string {
	let regex = /([0-9]+(?:\.[0-9]+)?)([+\-])([0-9]+(?:\.[0-9]+)?)/g;

	expression = expression.replace(regex, (match, num1, operator, num2) => {
		const n1 = parseFloat(num1);
		const n2 = parseFloat(num2);

		let result: number = 0;

		if (operator === '+') {
			result = n1 + n2;
		} else if (operator === '-') {
			result = n1 - n2;
		}

		return result.toString();
	});

	return expression;
}

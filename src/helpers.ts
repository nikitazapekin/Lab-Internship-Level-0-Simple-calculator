export function getOperatorSymbol(action: string): string {
	switch (action) {
		case 'plus':
			return '+';
		case 'minus':
			return '-';
		case 'multiply':
			return '*';
		case 'divide':
			return '/';
		case 'decimal':
			return '.';
		case 'percent':
			return '%';
		default:
			return '';
	}
}

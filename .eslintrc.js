module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		'no-console': 'warn',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};

const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');

module.exports = [
	{
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			globals: {
				window: 'readonly',
				document: 'readonly',
				process: 'readonly',
				module: 'readonly',
				require: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
		},
	 
		rules: {
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn'],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
		},
		files: ['**/*.ts', '**/*.tsx'],  
	},
];

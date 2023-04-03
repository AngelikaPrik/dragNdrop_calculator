module.exports = {
	root: true,
	env: {
	  node: true,
	  browser: true,
	  es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2021,
	  sourceType: 'module',
	  ecmaFeatures: {
		 jsx: true,
	  },
	  project: './tsconfig.json',
	  tsconfigRootDir: __dirname,
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:react-hooks/recommended',
	  'plugin:jsx-a11y/recommended',
	  'plugin:@typescript-eslint/recommended',
	],
	rules: {
	  'linebreak-style': 'off',
	  '@typescript-eslint/no-explicit-any': 'warn',
	  '@typescript-eslint/ban-types': [
		 'error',
		 {
			extendDefaults: true,
			types: {
			  '{}': false,
			},
		 },
	  ],
	  'react-hooks/exhaustive-deps': 'off',
	  'object-shorthand': 'error',
	  'no-console': 'warn',
	  quotes: ['error', 'single'],
	},
	settings: {
	  react: {
		 version: 'detect',
	  },
	},
 };
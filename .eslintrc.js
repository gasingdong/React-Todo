module.exports = {
  "parser":  "@typescript-eslint/parser",
  "extends": [
  "airbnb-typescript",
	"prettier",
  "prettier/react",
  "prettier/@typescript-eslint",
	"plugin:prettier/recommended",
	],
  "parserOptions": {
	"ecmaVersion": 2018,
	"sourceType": "module",
	"ecmaFeatures": {
      "jsx": true
    }
  },
  "env": { 
    "es6": true,
  },
  "globals": {
    "console": "readonly",
	"document": "readonly",
  },
  "settings": {
	"react": {
	  "version": 'detect',
	}
  }
};
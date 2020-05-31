## **1) Tech stack**

### FrameWork

- React

### Language

- Typescript

### SDD (like TDD)

- Storybook

### State Management

- MobX

### UI Library

- Styled-Components

## **2) Project Rules**

### Code Quality

- ESLint  [(Airbnb)](https://github.com/airbnb/javascript)

### Code Style

- Prettier

```
    "prettier/prettier": [
    	"error",
    	{
    		"semi": true,
    		"tabWidth": 2,
    		"trailingComma": "all",
    		"printWidth": 80,
    		"arrowParens": "avoid",
    		"proseWrap": "preserve",
    		"requirePragma": false,
    	}
    ]
```

### Husky

    "husky": {
    	"hooks": {
    		"pre-commit": "lint-staged"
    	}
    },
    "lint-staged": {
    	"*.{ts,tsx,json,css,md}": [
    	"prettier --write",
    	"git add"
    	]
    },
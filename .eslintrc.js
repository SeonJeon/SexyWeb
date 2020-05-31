module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint", "prettier" ],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    "browser": true,
    "node": true
  },
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/destructuring-assignment": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 80,
        "proseWrap": "preserve",
        "requirePragma": false,
      }
    ]
  }
};

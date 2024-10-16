module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', "plugin:cypress/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    eqeqeq: ['warn', 'always'],
    curly: 'error',
    'no-undef': 'error',
    'no-redeclare': 'error'
  }
};

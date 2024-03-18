module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'react/no-children-prop': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
  },
  globals: {
    React: 'readonly',
  },
}

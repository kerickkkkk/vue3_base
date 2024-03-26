/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      extends: [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

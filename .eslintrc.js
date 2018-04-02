// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {},
  env: {},
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

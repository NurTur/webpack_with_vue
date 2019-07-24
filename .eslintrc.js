module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended',
      'standard'
    ],
    plugins: [
      'vue'
    ],
    rules: {
      "eol-last": 0,
      "no-new": 0,
      "no-multiple-empty-lines": ["warn", {"max": 1, "maxBOF": 0, "maxEOF": 1}],
    }
  }
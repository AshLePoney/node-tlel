module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'standard',
    'jest'
  ],
  rules: {
    semi: [2, 'always']
  },
  env: {
    node: true,
    jest: true
  }
};

module.exports = {
  notify: true,
  verbose: true,
  rootDir: '../../',
  testMatch: [
    '<rootDir>/test/**/*.spec.js'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  coverageReporters: ['json', 'html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};

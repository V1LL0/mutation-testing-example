/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'reports/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text', 'lcov'],
  setupFiles: [],
  testEnvironment: 'node',
  testRegex: "(/test/.*\\.(test|spec))\\.(jsx?|tsx?|ts|js)$",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ]
};

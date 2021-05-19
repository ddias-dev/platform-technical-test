// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@libs/apiGateway': '<rootDir>/src/libs/apiGateway'
  },
  testEnvironment: 'node',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)']
};

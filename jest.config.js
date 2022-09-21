const config = {
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/src/$1",
    "\\.(css|scss)$": "<rootDir>/tests/__mocks__/style.js",
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;

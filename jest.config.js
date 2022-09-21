const config = {
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/src/$1",
    "\\.(css|scss)$": "<rootDir>/src/tests/__mocks__/style.js",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.js"],
};

module.exports = config;

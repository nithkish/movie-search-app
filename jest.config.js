module.exports = {
  testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.ts",
    "^.+\\.svg$": "<rootDir>/src/__mocks__/svgTransform.ts",
    "^.+\\.png$": "<rootDir>/src/__mocks__/pngTransform.ts",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transformIgnorePatterns: ["(?!node_modules)","src/(?!setupTests.ts)"],
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest"
  }
};

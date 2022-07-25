module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "node",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@tests/(.*)": "<rootDir>/tests/$1",
  },
};

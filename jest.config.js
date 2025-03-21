module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "./test/.*\\.(test|spec)?\\.(ts|tsx)$",
  roots: ["<rootDir>/src/", "<rootDir>/test/"],
};

const nextJest = require("next/jest");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.development" });

const createJestConfig = nextJest({ dir: "." });

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  watchPathIgnorePatterns: ["<rootDir>/infra/data"],
  testTimeout: 60_000, // 60 segundos
});

module.exports = jestConfig;

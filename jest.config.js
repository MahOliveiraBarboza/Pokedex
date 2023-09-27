module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ["<rootDir>/tests/unit/index.js"],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
}

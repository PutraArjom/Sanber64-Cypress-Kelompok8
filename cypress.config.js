const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000
  },
});

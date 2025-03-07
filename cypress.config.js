const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 5000
  },
});

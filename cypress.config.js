const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/',
    env: {
      VITE_API_BASEURL: "http://localhost:8000",
      //VITE_API_BASEURL: "http://localhost:3000/index.php",
    },
  },
});

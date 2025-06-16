const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'src/tests/**/*.cy.jsx',

    setupNodeEvents(on, config) {
      // seus listeners aqui, se houver
      return config;
    },
  },
});

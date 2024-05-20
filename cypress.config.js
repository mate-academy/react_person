const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/integration/**/*.spec.{js,ts,jsx,tsx}',
    defaultCommandTimeout: 60000, // Zwiększ timeout do 60 sekund
  },
  video: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'raw_reports',
    overwrite: false,
    html: false,
    json: true,
  },
  component: {
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    defaultCommandTimeout: 60000, // Dodaj tutaj również, jeśli używasz testów komponentów
  },
});

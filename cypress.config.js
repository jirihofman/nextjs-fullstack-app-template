const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'http://localhost:4100',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/test/**/*.*',
  },
  fixturesFolder: 'cypress/fixtures',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/xunit/xunit-[hash].xml',
    toConsole: true,
  },
  retries: {
    openMode: 0,
    runMode: 1,
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: false,
});

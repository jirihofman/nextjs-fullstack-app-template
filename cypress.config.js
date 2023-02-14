const { defineConfig } = require('cypress');
const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = defineConfig({
    chromeWebSecurity: false,
    component: {
        devServer: {
            bundler: 'webpack',
            framework: 'next',
        },
        setupNodeEvents(on, config) {
            codeCoverageTask(on, config);
            return config;
        },
        specPattern: 'components/**/*.cy.{js,jsx,ts,tsx}',
    },
    e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
        baseUrl: 'http://localhost:4100',
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
            // IMPORTANT to return the config object
            // with the any changed environment variables
            return config;
        },
        specPattern: 'cypress/test/**/*.*',
    },
    env: {
        codeCoverage: {
            exclude: 'cypress/**/*.*',
            url: '/api/__coverage__',
        },
        coverage: false,
    },
    fixturesFolder: 'cypress/fixtures',
    reporter: 'junit',
    retries: {
        openMode: 0,
        runMode: 1,
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    videoUploadOnPasses: false,
});

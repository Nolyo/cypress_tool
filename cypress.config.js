const { defineConfig } = require("cypress");
const pathCypress = "/home/nolyo/www/nextdecade/web-app/web/cypress";

module.exports = defineConfig({
  env: {
    baseUrl: "http://localhost:4455"
  },
  e2e: {
    baseUrl: "http://localhost:4455",
    specPattern: pathCypress + "/**/*.cy.ts",
    fixturesFolder: pathCypress + "/fixtures",
    screenshotsFolder: pathCypress + "/screenshots",
    supportFile: pathCypress + "/support/e2e.ts",
    video: false,
    screenshotOnRunFailure: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

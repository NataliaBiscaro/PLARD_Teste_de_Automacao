const { defineConfig } = require("cypress");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const addCucumberPreprocessorPlugin =
  preprocessor.addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://advantageonlineshopping.com/#/",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: path.resolve(__dirname, "cypress/support/e2e.js"),
    async setupNodeEvents(on, config) {
      config.env = config.env || {};

      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions:
          "cypress/features/step_definitions/**/*.{js,mjs,ts,tsx}",
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});

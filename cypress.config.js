// Importa a função `defineConfig` do pacote "cypress".
const { defineConfig } = require("cypress");

// Importa as funções `createBundler` e `createEsbuildPlugin` dos pacotes "@bahmutov/cypress-esbuild-preprocessor" e "@badeball/cypress-cucumber-preprocessor/esbuild", respectivamente.
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

// Função assíncrona que configura eventos do Node.js para o Cypress.
async function setupNodeEvents(on, config) {
  // Adiciona um plugin do pré-processador do Cucumber para executar cenários de teste BDD.
  // Isso é necessário para gerar relatórios JSON após cada execução, entre outras coisas.
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Define um evento para processar arquivos antes do teste.
  // Usa o bundler criado com o plugin ESBuild para transpilar e preparar os arquivos.
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Certifica-se de retornar o objeto de configuração, pois ele pode ter sido modificado pelo plug-in.
  return config;
}

// Exporta a configuração do Cypress.
module.exports = defineConfig({
  e2e: {
    // Define o padrão de localização dos arquivos de especificação dos testes de aceitação do Cypress.
    specPattern: "cypress/e2e/*",

    // Associa a função `setupNodeEvents` para configurar eventos do Node.js.
    setupNodeEvents,
  },
});
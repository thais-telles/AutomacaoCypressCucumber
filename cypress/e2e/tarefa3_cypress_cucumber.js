/// <reference types = "Cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given ("Que já acessei o formulário da academia", () => {
    cy.visit("https://api.new.mentorama.com.br/storage/media-files/QA1/M3/2/tarefa_2.html")
})

When ("Preencher o campo data", () => {
    cy.get('input[class="date"]').type('09/10/2023')
})

When ("Prencher o campo pontuação em escala da 10 pontos", () => {
    cy.get('input[class="mark"]').type('10')
})

When ("Preencher o campo sua opinião", () => {
    cy.get('textarea[name="comment"]').type('A academia possui excelentes profissionais, e está atendendo aos meus objetivos.')    
})

When ("Clicar no botão enviar", () => {
    cy.get('button').click()
})

Then ("Exibe a mensagem de envio", () => {
    cy.contains("A academia possui excelentes profissionais, e está atendendo aos meus objetivos.")
})
Feature: Formulário da Academia

    Feature responsável pela validação do Formulário da Academia
    Scenario: Sucesso
        Given Que já acessei o formulário da academia
        When Preencher o campo data
        When Prencher o campo pontuação em escala da 10 pontos
        When Preencher o campo sua opinião
        When Clicar no botão enviar
        Then Exibe a mensagem de envio
// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />
/*
describe('Central de Atendimento ao Cliente TAT', function(){
    
})*/

describe('Central de Atendimento ao cliente 2.0', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')    
    })

    it('verificar titulo da aplicação', function(){
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT' )  /// valida se o titulo é igual ao esperado
        /*cy.get()
            .should('be.visible')  /// espera que o elemento
            .type("Tecnologia Avantiz") //*/
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Dennis')
        cy.get('#lastName').type('Sousa')
        cy.get('#email').type('dennis@gmail.com')
        cy.get('#phone').type('15987654321')
        cy.get('#product').select('Cursos').click
        cy.get('#product').should('have.value', 'cursos')
        cy.get('input[value="elogio"]').check()
        cy.get('#email-checkbox').check()
        cy.get('#open-text-area')
            .type('Olá, estou feliz com o meu atendimento no seu produto.  Obrigado pela atenção.')
        cy.get('.button').click()            
    })

    it('Mensagem de sucesso', function(){
        cy.get('.success > strong').should('contain', 'Mensagem enviada com sucesso.')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Dennis')
        cy.get('#lastName').type('Sousa')
        cy.get('#email').type('dennisgmailcom')
        cy.get('#phone').type('15987654321')
        cy.get('#product').select('Cursos').click
        cy.get('input[value="elogio"]').check()
        cy.get('#email-checkbox').check()
        cy.get('#email-checkbox').uncheck()
        cy.get('#open-text-area')
            .type('Olá, estou feliz com o meu atendimento no seu produto.  Obrigado pela atenção.')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it('encontre o gato', function(){
        cy.get('#cat').should('be.visible');
    })
})
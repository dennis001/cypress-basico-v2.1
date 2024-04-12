// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

/*describe('Central de Atendimento ao Cliente TAT', function(){
    it('verificar titulo da aplicação', function(){
        cy.visit('./src/index.html') /// acessa o site
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT' )  /// valida se o titulo é igual ao esperado
        cy.get()
        .should('be.visible')  /// espera que o elemento
        .type("Tecnologia Avantiz") ///
    })
})*/

describe('Central de Atendimento ao cliente 2.0', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')    
    })

    it('inserir texto na aplicação', function(){
        cy.get('#firstName').type('Dennis')
        cy.get('#lastName').type('Sousa')
        cy.get('#email').type('dennis@gmail.com')
        cy.get('#phone').type('15987654321')
        cy.get('#product').select('Blog').click
        cy.get('input[value="elogio"]').check()
        cy.get('#email-checkbox').check()
        cy.get('#open-text-area')
            .type('Olá, estou feliz com o meu atendimento no seu produto.  Obrigado pela atenção.')
        cy.get('.button').click
    })
})
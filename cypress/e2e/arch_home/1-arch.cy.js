/// <reference types="cypress"/>

// Welcome to Arch Social Club Testing page!
//
// This spec file contains a variety of sample tests
// for the Arch Social main app that are designed to demonstrate
// the power of writing tests in Cypress.

describe('Arch Social Club Home page', () => {
    beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.thehistoricarchsocialclub.com/')
    })
    it('Verify main page url', () =>{
        cy.url().should('include', 'archsocialclub.com')
    })
    it('Set the Viewport', () =>{
        cy.viewport(1280, 780)
    })
})
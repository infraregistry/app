/// <reference types="cypress" />

describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9100')
  })

  it('displays the login page', () => {
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
  })

  it('can login', () => {
    cy.get('input[name="email"]').type(`test@test.com`)
    cy.get('input[name="password"]').type(`password`)
    cy.get('.grid > button').click()
    cy.get('[data-sonner-toast]').should('exist').and('contain', 'Welcome back!');
  })
})

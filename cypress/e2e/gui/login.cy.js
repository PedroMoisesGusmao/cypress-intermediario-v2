describe('Login', () => {
  beforeEach(function() {
    cy.login()
    cy.visit('/')
  })
  
  it('successfully', () => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  })
})
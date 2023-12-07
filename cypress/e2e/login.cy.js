describe('Teste GitLab', () => {
  it('realiza login', () => {
    cy.visit("localhost")
    
    cy.get("#user_login")
    .type("pedroaraujo4910@gmail.com")
    .should("have.value", "pedroaraujo4910@gmail.com")

    cy.get("#user_password")
    .type("12345678")
    .should("have.value", "12345678")

    cy.get('input[type="submit"]')
    .first()
    .click()

    cy.get(".blank-state-welcome-title")
    .should("be.visible")
  })
})
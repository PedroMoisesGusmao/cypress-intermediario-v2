describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get(".qa-user-avatar").should("be.visible")
  })

  it('logout', () => {
    cy.login()

    cy.get(".qa-user-avatar").should("be.visible")

    cy.logout()

    cy.get("[data-qa-selector='sign_in_tab']").should("be.visible")
  })
})
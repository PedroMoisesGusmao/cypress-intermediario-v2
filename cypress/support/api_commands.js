const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

console.log(accessToken);

Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    headers: { Authorization: accessToken },
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    }
  })
})
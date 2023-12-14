import { faker } from '@faker-js/faker'

describe('Create Issue API', () => {
    const issue = {
        title: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.word(3)
        }
    }

    beforeEach(() => cy.api_deleteProjects())
    
    it('successfully', () => {
        cy.api_createIssue(issue)
          .then(res => {
            expect(res.status).to.equal(201)
            expect(res.body.title).to.equal(issue.title)
            expect(res.body.description).to.equal(issue.description)
          })
    })
})
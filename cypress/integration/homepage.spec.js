import { welcomeMessage } from '../fixtures/homepage.json'

describe('Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('displays a welcome message', () => {
    cy.get('button').should('have.text', welcomeMessage)
  })
})

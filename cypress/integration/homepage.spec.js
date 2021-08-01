import { welcomeMessage } from '../../fixtures/homepage.json'

describe('Button', () => {
  beforeEach(() => {
    cy.visit('https://markmorcos.github.io/ui/demo/')
  })

  it('displays a welcome message', () => {
    cy.get('button').should('have.text', welcomeMessage)
  })
})

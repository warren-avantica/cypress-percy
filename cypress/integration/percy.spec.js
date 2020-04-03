describe('Visual reggresion with percy and cypress', () => {

  it('shoul take percy snapshot', () => {
    cy.visit('https://www.example.com')
    cy.wait(1000)
    cy.percySnapshot("My name")
  })
})
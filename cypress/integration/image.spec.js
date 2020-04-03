describe('Visual regression', () => {

  it('My first visual regression', () => {
    // LOAD WEBSITE
    cy.visit('http://example.com/')

    // COMPARE SNAPSHOTS
    cy.matchImageSnapshot()
  })
})
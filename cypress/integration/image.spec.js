const pages = ['http://example.com/']

const sizes = ['iphone-6', 'ipad-2', [1200, 800]]


describe('Visual regression', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      it(`Should match ${page} in resolution ${size}`, () => {
        let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate() 
        cy.setResolution(size)
        cy.visit(page)
        cy.matchImageSnapshot()
      })
    })
  })
})

describe('Single element Snapshot', () => {
  it('Should match a single element on the page', () => {
    cy.visit('https://example.com')
    cy.get('h1').matchImageSnapshot()
  })
})
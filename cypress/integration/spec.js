it('works', () => {
  cy.wrap('foo').should('match', /^foo$/)
})
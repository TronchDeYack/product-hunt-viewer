describe('Product viewer', () => {
  it('Displays the title and subtitle of the application.', () => {
    cy.visit('/');
    cy.contains('#app .title', 'ProductHunt');
    cy.contains('#app .subtitle', 'The best new products, every day');
  });

  it('Displays the days selector.', () => {
    cy.visit('/');
    cy.get('.days').should('be.visible');
  });

  it('Displays mocked posts.', () => {
    cy.visit('/');
    cy.get('.post-card').should('have.length', 6);
  });
});

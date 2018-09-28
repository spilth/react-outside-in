describe('My First Test', function() {
  it('Visits the Home Page', function() {
    cy.visit('/')
    cy.get('.App-header').should('have.text', 'Welcome to React');
  });
});


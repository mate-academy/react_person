// WRITE TESTS HERE

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 3 people', () => {
    cy.get('.Person').should('have.length', 3);
  });

  it('should have people in the correct order', () => {
    cy.get('.Person__name').eq(0).should('have.text', 'My name is Misha');
    cy.get('.Person__name').eq(1).should('have.text', 'My name is Olya');
    cy.get('.Person__name').eq(2).should('have.text', 'My name is Alex');
  });
});

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

  it('should show correct partner for Misha', () => {
    cy.get('.Person')
      .eq(0)
      .find('.Person__partner')
      .should('have.text', 'Natasha is my wife');
  });

  it('should show correct partner for Olya', () => {
    cy.get('.Person')
      .eq(1)
      .find('.Person__partner')
      .should('have.text', 'Maksym is my husband');
  });

  it('should show correct partner for Alex', () => {
    cy.get('.Person')
      .eq(2)
      .find('.Person__partner')
      .should('have.text', 'I am not married');
  });

  it('should show age for Misha and Olya but not for Alex', () => {
    cy.get('.Person').eq(0).find('.Person__age').should('have.text', 'I am 37');
    cy.get('.Person').eq(1).find('.Person__age').should('not.exist');
    cy.get('.Person').eq(2).find('.Person__age').should('have.text', 'I am 25');
  });
});

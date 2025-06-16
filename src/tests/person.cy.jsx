describe('PersonList Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve exibir uma lista de pessoas', () => {
    cy.get('[data-cy="person"]').should('have.length.at.least', 1);
  });

  it('deve mostrar o nome da pessoa', () => {
    cy.get('[data-cy="person-name"]').each($el => {
      cy.wrap($el).should('not.be.empty');
    });
  });

  it('deve mostrar a idade da pessoa', () => {
    cy.get('[data-cy="person-age"]').each($el => {
      cy.wrap($el)
        .invoke('text')
        .then(text => {
          const age = parseInt(text, 10);

          expect(age).to.be.a('number');
          expect(age).to.be.greaterThan(0);
        });
    });
  });

  it('deve mostrar o gênero da pessoa', () => {
    cy.get('[data-cy="person-gender"]').each($el => {
      cy.wrap($el)
        .invoke('text')
        .should(text => {
          expect(text.toLowerCase()).to.match(/masculino|feminino/);
        });
    });
  });
});

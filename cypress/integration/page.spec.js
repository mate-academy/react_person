/// <reference types="Cypress" />

const page = {
  getPersonInfo(name) {
    return cy.contains(name).parent();
  }
};

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have 3 persons', () => {
    cy.get('.Person')
      .should('have.length', '3');
  });

  it(`should have person Misha with his information`, () => {
    const misha = {
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    };

    page.getPersonInfo(misha.name)
      .should('contain.text', `My name is ${misha.name}`)
      .and('contain.text', `I am ${misha.age}`)
      .and('contain.text', `My wife's name is ${misha.partnerName}`)
  });

  it(`should have person Olya with her information`, () => {
    const olya = {
      name: 'Olya',
      sex: 'f',
      isMarried: true,
      partnerName: 'Maksym',
      };
        
    page.getPersonInfo(olya.name)
      .should('contain.text', `My name is ${olya.name}`)
      .and('contain.text', `My husband's name is ${olya.partnerName}`)
      .find('.Person__age').should('not.exist');
  });

  it(`should have person Alex with his information`, () => {
    const alex = {
      name: 'Alex',
      age: 25,
      sex: 'm',
      isMarried: false,
    };
            
    page.getPersonInfo(alex.name)
      .should('contain.text', `My name is ${alex.name}`)
      .and('contain.text', `I am ${alex.age}`)
      .and('contain', `I am not married`);
  });
});


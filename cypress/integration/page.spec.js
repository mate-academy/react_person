/// <reference types="Cypress" />

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have 3 persons', () => {
    cy.getByDataCy('person')
      .should('have.length', '3');
  });

  it(`should have first person with name ${misha.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 0)
      .should('contain', misha.name);
  });

  it(`should have first person with age ${misha.age}`, () => {
    cy.getByDataCy('person')
      .selectElement('age', 0)
      .should('contain', misha.age);
  });

  it(`should have first person whith partner name ${misha.partnerName}`, () => {
    cy.getByDataCy('person')
      .selectElement('partner', 0)
      .should('contain', misha.partnerName);
  });

  it(`should have second person with name ${olya.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 1)
      .should('contain', olya.name);
  });

  it(`should have second person without age`, () => {
    cy.getByDataCy('person')
      .selectElement('age', 1)
      .should('not.exist');
  });

  it(`should have second person whith partner name ${olya.partnerName}`, () => {
    cy.getByDataCy('person')
      .selectElement('partner', 1)
      .should('contain', olya.partnerName);
  });

  it(`should have third person with name ${alex.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 2)
      .should('contain', alex.name);
  });

  it(`should have third person with age ${alex.age}`, () => {
    cy.getByDataCy('person')
      .selectElement('age', 2)
      .should('contain', alex.age);
  });

  it(`should have third person with status 'not married'`, () => {
    cy.getByDataCy('person')
      .selectElement('status', 2)
      .should('contain', 'not married');
  });

  it(`should have third person without partner`, () => {
    cy.getByDataCy('person')
      .selectElement('partner', 2)
      .should('not.exist');
  });
});

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
  it('should be visitable', () => {
    cy.visit('/');
  });

  it('should have 3 persons', () => {
    cy.getByDataCy('person')
      .should('have.length', '3');
  });

  it(`first person name should be ${misha.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 0)
      .should('contain', misha.name);
  });

  it(`first person's age should be ${misha.age}`, () => {
    cy.getByDataCy('person')
    .selectElement('age', 0)
    .should('contain', misha.age);
  });

  it(`first person's partner should be ${misha.partnerName}`, () => {
    cy.getByDataCy('person')
    .selectElement('partner', 0)
    .should('contain', misha.partnerName);
  });

  it(`first person's partner should be ${misha.partnerName}`, () => {
    cy.getByDataCy('person')
    .selectElement('partner', 0)
    .should('contain', misha.partnerName);
  });

  it(`second person's name should be ${olya.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 1)
      .should('contain', olya.name);
  });

  it(`second person should not have age`, () => {
    cy.getByDataCy('person')
    .selectElement('age', 1)
    .should('not.exist');
  });

  it(`second person's partner should be ${olya.partnerName}`, () => {
    cy.getByDataCy('person')
    .selectElement('partner', 1)
    .should('contain', olya.partnerName);
  });

  it(`third person name should be ${alex.name}`, () => {
    cy.getByDataCy('person')
      .selectElement('name', 2)
      .should('contain', alex.name);
  });

  it(`third person's age should be ${alex.age}`, () => {
    cy.getByDataCy('person')
    .selectElement('age', 2)
    .should('contain', alex.age);
  });

  it(`third person should be not married}`, () => {
    cy.getByDataCy('person')
    .selectElement('partner', 2)
    .should('contain', 'not married');
  });
});

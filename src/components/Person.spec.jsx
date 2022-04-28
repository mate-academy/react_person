import React from 'react';
import { mount } from '@cypress/react';
import Person from './Person';

describe('Person', () => {
  it('should should show name, age and partner\'s name if existing', () => {
    const misha = {
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    };

    mount(<Person {...misha} />);

    cy.get('.Person__name').should('contain.text', misha.name);
    cy.get('.Person__age').should('contain.text', misha.age);
    cy.get('.Person__partner').should('contain.text', misha.partnerName);
  });

  it('should show sex of partner', () => {
    const misha = {
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    };

    mount(<Person {...misha} />);

    cy.get('.Person__partner').should('contain.text', 'wife');

    const olya = {
      name: 'Olya',
      sex: 'f',
      isMarried: true,
      partnerName: 'Maksym',
    };

    mount(<Person {...olya} />);

    cy.get('.Person__partner').should('contain.text', 'husband');
  });

  it('should not show age if is ommited', () => {
    const sasha = {
      name: 'Sasha',
      sex: 'f',
      isMarried: false,
    };

    mount(<Person {...sasha} />);

    cy.get('.Person__age').should('not.exist');
  });

  it('should show "not married" instead of partner\'s name', () => {
    const tanya = {
      name: 'Tanya',
      sex: 'f',
      isMarried: false,
    };

    mount(<Person {...tanya} />);

    cy.get('.Person__partner').should('contain.text', 'not married');
  });
});

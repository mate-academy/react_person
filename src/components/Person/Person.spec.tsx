import { mount } from '@cypress/react';
import { Person } from './Person';

describe('Person', () => {
  it('should show name, age and partner\'s name of the person', () => {
    const misha: IPerson = {
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    };

    mount(<Person person={misha} />);

    cy.get('.Person__name').should('contain.text', misha.name);
    cy.get('.Person__age').should('contain.text', misha.age);
    cy.get('.Person__partner').should('contain.text', misha.partnerName);
  });

  it('should show partner as a wife when the person is male', () => {
    const misha: IPerson = {
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    };

    mount(<Person person={misha} />);

    cy.get('.Person__partner').should('contain.text', 'wife');
  });

  it('should show partner as a husband when the person is female', () => {
    const olya: IPerson = {
      name: 'Olya',
      sex: 'f',
      isMarried: true,
      partnerName: 'Maksym',
    };

    mount(<Person person={olya} />);

    cy.get('.Person__partner').should('contain.text', 'husband');
  });

  it('should not show age if age is omitted', () => {
    const sasha: IPerson = {
      name: 'Sasha',
      sex: 'f',
      isMarried: false,
    };

    mount(<Person person={sasha} />);

    cy.get('.Person__age').should('not.exist');
  });

  it('should show "not married" instead of partner\'s name', () => {
    const tanya: IPerson = {
      name: 'Tanya',
      sex: 'f',
      isMarried: false,
    };

    mount(<Person person={tanya} />);

    cy.get('.Person__partner').should('contain.text', 'not married');
  });
});

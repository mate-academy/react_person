import { mount } from '@cypress/react18';
import Person from './Person';

describe('Person', () => {
  describe('', () => {
    beforeEach(() => {
      const misha = {
        name: 'Misha',
        age: 37,
        sex: 'm',
        isMarried: true,
        partnerName: 'Natasha',
      };

      mount(<Person person={misha} />);
    });

    it('should print a name', () => {
      cy.get('.Person__name').should('have.text', 'My name is Misha');
    });

    it('should print an age', () => {
      cy.get('.Person__age').should('have.text', 'I am 37');
    });

    it('should print a partner', () => {
      cy.get('.Person__partner').should('have.text', 'Natasha is my wife');
    });
  });

  describe('', () => {
    it('should show partner as a husband when the person is female', () => {
      const olya = {
        name: 'Olya',
        sex: 'f',
        age: 38,
        isMarried: true,
        partnerName: 'Maksym',
      };

      mount(<Person person={olya} />);

      cy.get('.Person__partner').should('have.text', 'Maksym is my husband');
    });

    it('should show correct message if a person is not married', () => {
      const tanya = {
        name: 'Tanya',
        sex: 'f',
        age: 28,
        isMarried: false,
        partnerName: 'Some Partner',
      };

      mount(<Person person={tanya} />);

      cy.get('.Person__partner').should('contain.text', 'not married');
    });

    it('should not show age if age is omitted', () => {
      const sasha = {
        name: 'Sasha',
        sex: 'f',
        isMarried: false,
      };

      mount(<Person person={sasha} />);

      cy.get('.Person__age').should('not.exist');
    });
  });
});

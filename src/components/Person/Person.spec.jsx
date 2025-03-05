import { mount } from '@cypress/react18';
import Person from './Person';

describe('Person', () => {
  describe('when person is male', () => {
    beforeEach(() => {
      const misha = {
        name: 'Misha',
        age: 37,
        gender: 'male',
        isMarried: true,
        partnerName: 'Natasha',
      };

      mount(<Person person={misha} />);
    });

    it('should print a name', () => {
      cy.get('.Person__name').should('have.text', 'Misha');
    });

    it('should print an age', () => {
      cy.get('.Person__age').should('have.text', 'Age: 37');
    });

    it('should print a partner', () => {
      cy.get('.Person__partner').should('have.text', 'Wife: Natasha');
    });
  });

  describe('when person is female', () => {
    it('should show partner as a husband when the person is female', () => {
      const olya = {
        name: 'Olya',
        gender: 'female',
        age: 38,
        isMarried: true,
        partnerName: 'Maksym',
      };

      mount(<Person person={olya} />);

      cy.get('.Person__partner').should('have.text', 'Husband: Maksym');
    });

    it('should show correct message if a person is not married', () => {
      const tanya = {
        name: 'Tanya',
        gender: 'female',
        age: 28,
        isMarried: false,
      };

      mount(<Person person={tanya} />);

      cy.get('.Person__partner').should('have.text', 'I am not married');
    });

    it('should not show age if age is omitted', () => {
      const sasha = {
        name: 'Sasha',
        gender: 'female',
        isMarried: false,
      };

      mount(<Person person={sasha} />);

      cy.get('.Person__age').should('not.exist');
    });
  });
});

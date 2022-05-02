import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {` ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        I am
        {` ${person.age}`}
      </p>
    )}
    <p className="Person__partner">
      {!person.isMarried
        ? 'I am not married'
        : `My ${person.sex === 'm' ? 'wife' : 'husband'}
          's name is ${person.partnerName}`
      }
    </p>
  </section>
);

Person.defaultProps = {
  person: {
    age: null,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

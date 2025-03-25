/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    {person.isMarried ? (
      <p className="Person__partner">
        {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};

export default Person;

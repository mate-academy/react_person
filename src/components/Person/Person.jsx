import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}
    { !person.isMarried
      ? (<p className="Person__partner">I am not married</p>)
      : (<p className="Person__partner">{`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}</p>)
    }

  </section>
);

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

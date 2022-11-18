import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const partner = (person.sex === 'm') ? 'wife' : 'husband';
  const married = (!person.isMarried)
    ? 'I am not married'
    : `${person.partnerName} is my ${partner}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      <p className="Person__partner">
        {married}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

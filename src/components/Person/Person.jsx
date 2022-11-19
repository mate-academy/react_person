import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    age,
    name,
    isMarried,
    sex,
    partnerName,
  } = person;
  const partner = (sex === 'm') ? 'wife' : 'husband';
  const married = (!isMarried)
    ? 'I am not married'
    : `${partnerName} is my ${partner}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
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

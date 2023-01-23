
import React from 'react';
import PropTypes from 'prop-types';
// { name, age, sex, isMarried, partnerName }

export const Person = ({ person: {
  name, age, sex, isMarried, partnerName,
} }) => {
  const gender = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}

      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${gender}` : 'I am not married'}
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

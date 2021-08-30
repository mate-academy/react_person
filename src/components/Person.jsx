import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">
        {
          age
            ? `I am ${age}`
            : ''
        }

      </p>
      <p className="Person__partner">
        {
          isMarried
            ? `My
              ${
                sex === 'f'
                  ? 'husband'
                  : 'wife'
              }'s name is
            ${partnerName}`
            : 'Not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    age: PropTypes.number,
    partnerName: PropTypes.string,
    isMarried: PropTypes.bool.isRequired,
  }).isRequired,

};

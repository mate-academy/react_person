import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ human }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = human;

  const gender = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partner">
        {isMarried
          ? `My ${gender}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  human: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']),
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

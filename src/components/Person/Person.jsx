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

  const marrieds = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${marrieds}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

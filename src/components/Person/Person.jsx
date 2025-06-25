import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person: { ...props } }) => {
  const { name, age, sex, isMarried, partnerName } = props;
  const partner = sex === 'm'
    ? 'wife'
    : 'husband';
  const married = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';
  const myName = `My name is ${name}`;
  const myAge = `I am ${age}`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {myName}
        </h2>

        {age && (
        <p className="Person__age">
          {myAge}
        </p>
        )
      }

        <p className="Person__partner">
          {married}
        </p>
      </section>
    </>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

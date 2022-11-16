import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let parnterInfo = '';

  if (isMarried) {
    parnterInfo = (sex === 'm')
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  } else {
    parnterInfo = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age
        ? (<p className="Person__age">{`I am ${age}`}</p>)
        : undefined
      }

      <p className="Person__partner">
        {parnterInfo}
      </p>
    </section>
  );
};

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

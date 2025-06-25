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

  const partner = (sex === 'm')
    ? 'wife'
    : 'husband';

  const relationStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  // I'm not sure about IF (name) but it seems right to check if name is defined

  if (name) {
    return (
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        <p className="Person__partner">
          {relationStatus}
        </p>
      </section>
    );
  }

  return (null);
};

Person.defaultProps = {
  isMarried: false,
  age: null,
  sex: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

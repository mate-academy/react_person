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
        {`My name is ${name}`}
      </h2>

      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}

      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

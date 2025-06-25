import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}
    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['f', 'm']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

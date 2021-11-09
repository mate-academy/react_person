import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}
    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProp = {
  age: null,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

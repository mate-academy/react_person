import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = (
  {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
) => (
  <section className="Person">
    <h2 className="Person__name">{ `My name is ${name}` }</h2>
    { age > 0 && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}
    { (isMarried && partnerName.length > 0) && (
      <p className="Person__partner">
        {`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`}
      </p>
    )}
  </section>
);

Person.defaultProps = {
  age: 0,
  sex: 'm',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

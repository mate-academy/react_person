import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({name, age, sex, isMarried, partnerName}) => (
  <section className="Person">
    <h2 className="Person__name">{name ? `My name is ${name}` : null}</h2>
    <p className="Person__age">{age ? `I am ${age}` : null}</p>
    <p className="Person__partner">{
      isMarried
      ? (sex === 'm'
        ? `My wife's name is ${partnerName}`
        : `My husband's name is ${partnerName}`)
      : 'I am not married'}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    {age && (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
    )}
    <p className="Person__partner">
      {isMarried || `I am not married`}
      {isMarried && sex === 'm'
        ? `My wife's name is ${partnerName}`
        : isMarried && sex === 'f'
        && `My husband's name is ${partnerName}`}
    </p>
  </section>
);

Person.defaultProps = {
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: requiredIf(PropTypes.string, props => props.isMarried === true),
};

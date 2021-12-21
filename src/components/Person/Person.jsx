import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">

    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}
    {isMarried ? (
      <p className="Person__partner">
        My
        {' '}
        {sex === 'm'
          ? `wife's`
          : `husband's`
        }
        {' '}
        name is
        {partnerName}
      </p>
    ) : (
      <p>I am not married</p>
    )}

  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

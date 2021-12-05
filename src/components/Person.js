import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    <p className="Person__age">
      {age && `I am ${age}`}
    </p>
    {isMarried
      ? (
        <p className="Person__partner">
          {
              sex === 'm'
                ? 'My wife'
                : 'My husband'
            }
          {`'s name is ${partnerName}`}
        </p>
      )
      : (
        <p className="Person__partner">
          I am single
        </p>
      )}
  </section>
);

Person.defaultProps = {
  age: null,
  sex: '',
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};

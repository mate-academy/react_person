import React from 'react';
import PropTypes from 'prop-types';

export const Person = props => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {props.name}
    </h2>
    <p className="Person__age">
      {
        props.age
          ? `I am ${props.age}`
          : ''
      }

    </p>
    <p className="Person__partner">
      {
        props.isMarried
          ? `My wife's name is ${props.partnerName}`
          : 'Not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: 0,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};

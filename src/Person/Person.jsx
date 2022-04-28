import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partner,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>

    <p className="Person__age">
      {age && `I am ${age}`}
    </p>

    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm' ? 'wife`s' : 'husband`s'} name is ${partner}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: null,
  partner: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partner: PropTypes.string,
};

import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    {age
      && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}
    <p className="Person__partner">
      {!partnerName
        ? 'I am not married'
        : `My ${sex === 'm'
          ? 'wife' : 'husband'}'s name is ${partnerName}`
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: '',
  sex: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  partnerName: PropTypes.string,
};

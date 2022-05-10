import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ user }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = user;

  let textStatusMarried = '';

  if (isMarried === true && partnerName) {
    textStatusMarried = `My ${sex === 'm' ? 'wife' : 'husbend'}'s name is ${partnerName}`;
  }

  if (isMarried === true && !partnerName) {
    textStatusMarried = 'I am married';
  }

  if (isMarried === false) {
    textStatusMarried = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {name ? `My name is ${name}` : 'no person'}
      </h2>
      <p className="Person__age">
        {age ? `I am ${age}` : 'no age information'}
      </p>
      <p className="Person__partner">
        {textStatusMarried}
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

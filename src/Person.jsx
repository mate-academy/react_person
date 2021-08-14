import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  // const { name, age, sex, isMarried, partnerName } = data;

  const partner = () => {
    if (isMarried) {
      return sex === 'f'
        ? `My husband's name is ${partnerName}`
        : `My wife's name is ${partnerName}`;
    }

    return 'I am happy, I am not married :)';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${name}`}
      </h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partner">{partner()}</p>
    </section>
  );
};

Person.defaultProps = {
  partnerName: 'Please add your name',
  sex: null,
  age: null,
  isMarried: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};

export default Person;

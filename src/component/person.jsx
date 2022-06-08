/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './person.scss';

const getMarriedStatus = (isMarried, sex, partnerName) => {
  let message = '';

  if (isMarried === false) {
    message = 'I am not married';
  } else if (isMarried === true) {
    if (sex === 'f') {
      message = `My husband's name is ${partnerName}`;
    } else {
      message = `My wife's name is ${partnerName}`;
    }
  }

  return message;
};

export const Person = ({ person }) => {
  const rezult = getMarriedStatus(person.isMarried, person.sex, person.partnerName);

  return (
    <section className="person">
      <h2 className="person__name">{`My name is ${person.name}`}</h2>
      <p className="person__age">{person.age ? `I am ${person.age}` : ''}</p>
      <p className="person__partner">{rezult}</p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

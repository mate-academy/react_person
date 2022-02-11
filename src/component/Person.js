import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, sex, partnerName }) => {
  let partner = 'My wife\'s name is ';

  if (sex === 'f') {
    partner = 'My husband\'s name is ';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{`I am ${age}`}</p>
      <p className="Person__partner">
        {partnerName ? `${partner} ${partnerName}` : 'I am not married'}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  sex: PropTypes.string,
};

Person.defaultProps = {
  name: 'Name not found',
  age: 18,
  sex: 'Not specified',
  partnerName: 'Partner not found',
};

export default Person;

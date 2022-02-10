import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function infoAboutPartner(sex, partnerName) {
  if (sex === 'm') {
    return `My wife's name is ${partnerName}`;
  }

  return `My husband's name is ${partnerName}`;
}

function Person({ name, age, sex, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {(age !== 0) && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">
        {isMarried ? infoAboutPartner(sex, partnerName) : 'I am not married'}
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'Person',
  age: 0,
  sex: 'm',
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

export default Person;

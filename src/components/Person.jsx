import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  personName,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {personName}
    </h2>
    <p className="Person__age">{age !== 0 && `I am ${age}`}</p>
    <p className="Person__partner">
      {isMarried
        ? (sex === 'm' && `My wife's name is ${partnerName}`)
        || (sex === 'f' && `My husband's name is ${partnerName}`)
        : 'I am not married'}
    </p>
  </section>
);

Person.propTypes = {
  personName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

export default Person;

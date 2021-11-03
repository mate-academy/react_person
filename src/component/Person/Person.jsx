import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {

  const personSex = (sex === 'm') ? 'wife' : 'husband';

   return (
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
      {partnerName ? `My ${personSex}'s name is ${partnerName}` : 'I am not married'}
    </p>
  </section>
   )};

Person.defaultProps = {
  sex: '',
  age: null,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

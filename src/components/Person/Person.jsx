import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let partnerTitle = '';

  if (sex === 'm') {
    partnerTitle = 'wife';
  } else {
    partnerTitle = 'husband';
  }

  let mariedField = '';

  if (isMarried) {
    mariedField = `${partnerName} is my ${partnerTitle}`;
  } else {
    mariedField = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">{mariedField}</p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  isMarried: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string.isRequired,
};

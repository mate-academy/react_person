import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, partherName, sex, isMarried }) => {
  let pathner;
  let personPartner;
  let personAge;

  if (age === undefined) {
    personAge = 'Age is hidden';
  } else {
    personAge = `I am a ${age}`;
  }

  if (isMarried === true && sex === 'm') {
    pathner = 'wife';
  } else if (isMarried === true && sex === 'f') {
    pathner = 'husband';
  }

  if (isMarried === true) {
    personPartner = `My ${pathner}'s name is ${partherName}`;
  } else if (isMarried === false) {
    personPartner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {`${personAge}`}
      </p>
      <p className="Person__partner">
        {`${personPartner}`}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  partherName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};

Person.defaultProps = {
  partherName: '',
  age: undefined,
};

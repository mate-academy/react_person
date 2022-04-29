import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = (person) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;

  const partner = (sex === 'm') ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : "I'm not married"}
      </p>
    </section>
  );
};

Person.degaultProps = {
  age: '',
  partnerName: '',
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

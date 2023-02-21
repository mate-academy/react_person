import React from 'react';
import { PropTypes } from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const relationship = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      {isMarried ? (
        <p className="Person__partner">{relationship}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string.isRequired,
  }).isRequired,
};

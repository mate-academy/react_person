import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  let partnerText;

  if (person.isMarried) {
    partnerText = (person.sex === 'f')
      ? `My husband's name is ${person.partnerName}`
      : `My wife's name is ${person.partnerName}`;
  } else {
    partnerText = 'I am not married';
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age
          ? (<p className="Person__age">{`I am ${person.age}`}</p>) : null
        }
        <p className="Person__partner">{partnerText}</p>
      </section>
    </>
  );
}

Person.propTypes = {
  person: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      isMarried: PropTypes.bool.isRequired,
      partnerName: PropTypes.string,
      age: PropTypes.number,
    },
  ).isRequired,
};

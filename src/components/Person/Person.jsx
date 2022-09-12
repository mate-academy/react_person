import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const personPartner = () => {
    if (person.isMarried) {
      if (person.sex === 'm') {
        return `${person.partnerName} is my wife`;
      }

      return `${person.partnerName} is my husband`;
    }

    return 'I am not married';
  };

  return (
    <>
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      <p className="Person__age">
        {person.age ? `I am ${person.age}` : null}
      </p>
      <p className="Person__partner">
        {personPartner()}
      </p>
    </>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

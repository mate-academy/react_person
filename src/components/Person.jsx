import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName,
  } = person;

  const personPartner = sex === 'f' ? 'wife' : 'husband';

  return (

    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      <p className="Person__age">
        { age && (
          `I am ${age}`
        )}
      </p>

      <p className="Person__partner">
        {isMarried
          ? (`My ${personPartner}'s name is ${partnerName}`)
          : ('I am not married') }
      </p>

    </section>

  );
};

Person.defaultProps = {
  age: 0,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

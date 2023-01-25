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

  const hasHusband = isMarried && sex === 'f';
  const hasWife = isMarried && sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">

        {!isMarried && 'I am not married'}
        {hasWife && `${partnerName} is my wife`}
        {hasHusband && `${partnerName} is my husband`}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  } 
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

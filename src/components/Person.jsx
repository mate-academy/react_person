import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      {(isMarried && (
        sex === 'f' ? (
          <p className="Person__partner">{`My husband's name is ${partnerName}`}</p>
        ) : (
          <p className="Person__partner">{`My wife's name is ${partnerName}`}</p>
        )
      )) || 'I am not married'}
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: 0,
    partnerName: 'Name',
  },
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

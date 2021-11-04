import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partnerRole = sex === 'm' ? 'wife' : 'husband';
  const partnerDescription = isMarried
    ? `My ${partnerRole}'s name is ${partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {
      age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )
      }
      <p className="Person__partner">
        {partnerDescription}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;

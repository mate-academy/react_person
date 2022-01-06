import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const spouse = sex === 'm' ? 'wife' : 'husband';
  const spouseName = isMarried
    ? `My ${spouse}'s name is ${partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">
        {spouseName}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

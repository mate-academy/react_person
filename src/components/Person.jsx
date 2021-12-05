import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, partnerName }) => {
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="person">
      {name && (
        <h2 className="person__name">
          {`My name is ${name}`}
        </h2>
      )}
      {age && (
        <p className="person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="person__partner">
        {partnerName
          ? `My ${partner}'s name is ${partnerName}`
          : 'Single'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
  sex: 'M or F',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  partnerName: PropTypes.string,
};

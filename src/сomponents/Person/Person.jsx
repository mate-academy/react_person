import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, partnerName } = person;

  return (
    <div className={Person}>
      {name && <h2>{`My name is ${name}`}</h2>}
      {age && <p>{`I am ${age}`}</p>}
      <p>
        {partnerName
          ? `My wife's name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    partnerName: PropTypes.string.isRequired,
  }).isRequired,
};

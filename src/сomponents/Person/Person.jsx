import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, partnerName }) => (
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

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string.isRequired,
};

Person.defaultProps = {
  age: null,
};

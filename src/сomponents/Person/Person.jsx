import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  partner,
}) => (
  <div className={Person}>
    {name && <h2>{`My name is ${name}`}</h2>}
    {age && <p>{`I am ${age}`}</p>}
    <p>
      { partner
        ? `My wife's name is ${partner}`
        : `I am not married`
      }
    </p>
  </div>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  partner: PropTypes.string.isRequired,
};

Person.defaultProps = {
  age: false,
};

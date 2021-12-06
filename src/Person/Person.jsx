import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const ispartner = sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="person">
      <h2 className="person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="person__age">
        {age && (`I am ${age}`) }
      </p>
      <p className="person__partner">
        {isMarried
          ? `My ${ispartner}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  sex: PropTypes.string.isRequired,
};

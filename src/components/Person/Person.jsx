import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? sex === 'm'
            ? `${partnerName} is my wife`
            : `${partnerName} is my husband`
          : 'I am not married'}
      </p>
    </div>
  );
};

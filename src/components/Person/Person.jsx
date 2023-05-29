import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'}
      </p>
    </div>
  );
}

Person.defaultProps = {
  name: 'unknown',
  age: null,
  sex: 'unknown',
  isMarried: true,
  partnerName: 'unknown',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

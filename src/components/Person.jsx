import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({ name, sex, age, isMarried, partnerName }) {
  const partner = sex === 'm' ? `wife's` : `husband's`;

  return (
    <div className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {name}
      </h2>
      <p className="Person__age">
        {'I am '}
        {age}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${partner} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: 'User',
  sex: 'Undefined',
  isMarried: false,
  age: 0,
  partnerName: '',
};

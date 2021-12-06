import React from 'react';
import './Person.scss';

export function Person({ name, sex, age, isMarried, partnerName }) {
  const partner = sex === 'm' ? `wife's` : `husband's`;

  return (
    <>
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
    </>
  );
}

Person.defaultProps = {
  name: 'User',
  age: 999,
  sex: 'Undefined',
  isMarried: false,
};

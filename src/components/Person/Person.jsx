/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = `My ${(sex === 'm')
    ? 'wife'
    : 'husband'}'s
   name is ${partnerName}`;

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age ? `I am ${age}` : null}
      </p>

      <p className="Person__partner">
        {isMarried ? partner : 'I am not married'}
      </p>
    </div>
  );
}

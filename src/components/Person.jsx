/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/space-infix-ops */
import React from 'react';

export const Person = ({
  name,
  age,
  partnerName,
  sex,
}) => (
  <>
    <h2 className="Person__name">{name}</h2>
    {age ? (
      <p className="Person__age">{`I am ${age}`}</p>
    ): null}
    {sex === 'm' ? (
      <p className="Person__partner">
        {partnerName ? `My wife's name is ${partnerName}` : 'I am not married'}
      </p>
    ) : (
      <p className="Person__partner">
        {partnerName ? `My husbands's name is ${partnerName}` : 'I am not married'}
      </p>
    )}
  </>
);

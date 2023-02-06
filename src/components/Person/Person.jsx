/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export const Person = ({ person }) => {
  const { sex, partnerName, age, isMarried, name } = person;
  const partner = sex === 'm'
    ? 'wife'
    : 'husband';
  const familyStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && (
        <p className="Person__age">
          I am {age}
        </p>
      )}
      <p className="Person__partner">
        {familyStatus}
      </p>
    </section>
  );
};

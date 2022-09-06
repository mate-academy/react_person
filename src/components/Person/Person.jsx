import React from 'react';

export const Person = ({ name, age, isMarried, partnerName, sex }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}

    <p className="Person__partner">
      {isMarried === true
        ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
        : 'I am not married'}
    </p>
  </section>
);

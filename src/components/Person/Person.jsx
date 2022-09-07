import React from 'react';

export const Person = ({ name, age, isMarried, partnerName, sex }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}

    <p className="Person__partner">
      {isMarried === true && sex === 'f' && (
        `${partnerName} is my husband`
      )}

      {isMarried === true && sex === 'm' && (
        `${partnerName} is my wife`
      )}

      {isMarried === false && (
        'I am not married'
      )}
    </p>
  </section>
);

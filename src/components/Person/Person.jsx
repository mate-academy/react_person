import React from 'react';
import './Person.scss';

export const Person = (prop) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = prop.person;

  const sexMarried = (sex === 'm'
    ? 'wife'
    : 'husband');

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sexMarried}`
          : `I am not married`}
      </p>
    </section>
  );
};

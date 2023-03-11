import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const marriedON = sex === 'm'
    ? 'wife'
    : 'husband';
  const personAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : undefined;
  const married = isMarried
    ? <p className="Person__partner">{`${partnerName} is my ${marriedON}`}</p>
    : <p className="Person__partner">I am not married</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {personAge}
      {married}
    </section>
  );
};

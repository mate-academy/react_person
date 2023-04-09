import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const isAge = age && `I am ${age}`;

  const isSex = sex === 'm'
    ? 'wife'
    : 'husband';

  const isPartner = isMarried
    ? `${partnerName} is my ${isSex}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{isAge}</p>
      <p className="Person__partner">{isPartner}</p>
    </section>
  );
};

import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const husbandTag = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriedTo = isMarried
    ? `${partnerName} is my ${husbandTag}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      { age > 0 ? <p className="Person__age">{`I am ${age}`}</p> : '' }
      <p className="Person__partner">{marriedTo}</p>
    </section>
  );
};

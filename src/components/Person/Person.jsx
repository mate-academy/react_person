import React from 'react';

export const Person = ({ person }) => {
  const gender = person.sex === 'm'
    ? 'wife'
    : 'husband';
  const merried = !person.isMarried
    ? 'I am not married'
    : `${person.partnerName} is my ${gender}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {merried}
      </p>
    </section>
  );
};

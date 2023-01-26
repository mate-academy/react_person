// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  const sex = person.sex === 'm' ? 'wife' : 'husband';
  const married = person.isMarried
    ? `${person.partnerName} is my ${sex}`
    : 'I am not married';
  const name = `My name is ${person.name}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};

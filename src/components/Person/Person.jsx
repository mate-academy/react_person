// export const Person = ({ person }) => ();
import React from 'react';

export function Person({ person }) {
  const married = `${person.partnerName} is my ${(person.sex === 'm') ? 'wife' : 'husband'}`;
  const notmarried = `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {(person.isMarried) ? married : notmarried}
      </p>
    </section>
  );
}

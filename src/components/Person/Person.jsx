// export const Person = ({ person }) => ();
import React from 'react';

export function Person({ person }) {
  return (
    <div>
      <p className="Person__name">My name is {person.name}</p>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'}
      </p>
      <p className="Person__greeting">Hello, my name is {person.name} and I am {person.age || 'unknown'} years old.</p> {/* Informação adicional */}
    </div>
  );
}
